import { takeEvery, put, call, all } from 'redux-saga/effects';

import { verifyEmail } from 'app/api';
import { subscribeEmail, authenticateEmail, checkSubscriptionEmail, unsubscribeEmail } from 'app/api/emailApi';
import { Wallet } from 'app/consts';
import { decryptCode } from 'app/helpers/decode';
import { getWalletHashedPublicKeys } from 'app/helpers/wallets';
import { StoreService } from 'app/services';

import {
  createNotificationEmailFailure,
  setNotificationEmailFailure,
  createNotificationEmailSuccess,
  setNotificationEmailSuccess,
  CreateNotificationEmailAction,
  NotificationAction,
  verifyNotificationEmail,
  skipNotificationEmail,
  SetNotificationEmailAction,
  SubscribeWalletAction,
  AuthenticateEmailAction,
  authenticateEmailSuccess,
  authenticateEmailFailure,
  subscribeWalletSuccess,
  CheckSubscriptionAction,
  checkSubscriptionSuccess,
  checkSubscriptionFailure,
  UnsubscribeWalletAction,
  unsubscribeWalletFailure,
  unsubscribeWalletSuccess,
  subscribeWalletFailure,
} from './actions';

enum Result {
  error = 'error',
  success = 'success',
}

export function* createNotificationEmailSaga(action: CreateNotificationEmailAction | unknown) {
  const { meta, payload } = action as CreateNotificationEmailAction;
  const email = payload.email;
  try {
    const savedEmail = yield StoreService.getStoreValue('email');
    if (!savedEmail && !!email) {
      yield put(createNotificationEmailSuccess(email));
    } else {
      yield put(skipNotificationEmail());
    }
    if (meta?.onSuccess) {
      meta.onSuccess();
    }
  } catch (e) {
    yield put(createNotificationEmailFailure(e.message));
    if (meta?.onFailure) {
      meta.onFailure();
    }
  }
}

export function* setNotificationEmailSaga(action: SetNotificationEmailAction | unknown) {
  const { meta, payload } = action as SetNotificationEmailAction;
  const email = payload.email;
  try {
    const verifyCode = yield call(() => verifyEmail({ email }));
    if (verifyCode.result === Result.success) {
      const decryptedCode = yield call(() => decryptCode(email, verifyCode.pin));
      yield put(setNotificationEmailSuccess(email));
      yield StoreService.setStoreValue('email', email);
      //Temporaly till we dont have email services run we need know correct pin from backend, remove after
      console.log(decryptedCode, '>>>>');
      yield put(verifyNotificationEmail(decryptedCode));
    } else {
      yield put(setNotificationEmailFailure('Your email cannot be verified'));
    }
    if (meta?.onSuccess) {
      meta.onSuccess();
    }
  } catch (e) {
    yield put(setNotificationEmailFailure(e.message));
    if (meta?.onFailure) {
      meta.onFailure();
    }
  }
}

export function* subscribeWalletSaga(action: SubscribeWalletAction) {
  const { payload } = action as SubscribeWalletAction;
  try {
    const response: { session_token: string; result: 'success' | 'error' } = yield call(subscribeEmail, payload);
    if (response.session_token) {
      yield put(subscribeWalletSuccess(response.session_token));
    }
  } catch (error) {
    yield put(subscribeWalletFailure('something went wrong'));
  }
}

export function* unsubscribeWalletSaga(action: UnsubscribeWalletAction) {
  const { payload } = action as UnsubscribeWalletAction;
  try {
    const response: { session_token: string; result: 'success' | 'error' } = yield call(unsubscribeEmail, payload);
    if (response.session_token) {
      yield put(unsubscribeWalletSuccess(response.session_token));
    }
  } catch (error) {
    yield put(unsubscribeWalletFailure('something went wrong'));
  }
}

export function* authenticateEmailSaga(action: AuthenticateEmailAction) {
  const { payload, meta } = action as AuthenticateEmailAction;
  try {
    const response = yield call(authenticateEmail, payload);
    if (response.result === 'success') {
      yield put(authenticateEmailSuccess());
      if (meta?.onSuccess) {
        meta.onSuccess();
      }
    }
  } catch (error) {
    yield put(authenticateEmailFailure(error.message));
    if (meta?.onFailure) {
      meta.onFailure();
    }
  }
}

export function* checkSubscriptionSaga(action: CheckSubscriptionAction) {
  const { wallets, email } = action.payload;
  try {
    const walletWithHashes = yield Promise.all(
      wallets.map(async wallet => ({ ...wallet, hash: await getWalletHashedPublicKeys(wallet) })),
    );
    const hashes = walletWithHashes.map((wallet: Wallet) => wallet.hash);
    const response = yield call(checkSubscriptionEmail, { hashes, email });
    if (response.result) {
      const calls: any[] = [];
      walletWithHashes.map((wallet: Wallet, index: number) => {
        if (response.result[index]) {
          calls.push(put(checkSubscriptionSuccess(wallet.id)));
        }
      });
      if (calls.length) yield all(calls);
    }
  } catch (error) {
    yield put(checkSubscriptionFailure(error.msg));
  }
}

export default [
  takeEvery(NotificationAction.CheckSubscriptionAction, checkSubscriptionSaga),
  takeEvery(NotificationAction.CreateNotificationEmail, createNotificationEmailSaga),
  takeEvery(NotificationAction.SetNotificationEmail, setNotificationEmailSaga),
  takeEvery(NotificationAction.SubscribeWalletAction, subscribeWalletSaga),
  takeEvery(NotificationAction.AuthenticateEmailAction, authenticateEmailSaga),
  takeEvery(NotificationAction.UnsubscribeWalletAction, unsubscribeWalletSaga),
];
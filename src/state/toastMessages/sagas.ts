import logger from 'app/../logger';
import { takeEvery, put, delay, race, take } from 'redux-saga/effects';

import { ToastMessageAction, AddToastMessageAction, HideToastMessageAction, hideToastMessage } from './actions';

export function* addToastMessageSaga(action: AddToastMessageAction | unknown) {
  const { payload } = action as AddToastMessageAction;

  try {
    const { cancelled } = yield race({
      timeout: delay(payload.duration),
      cancelled: take((action: unknown) => {
        const { payload: cancelPayload, type } = action as HideToastMessageAction;

        if (type === ToastMessageAction.HideToastMessage) {
          return cancelPayload.id === payload.id;
        }
        return false;
      }),
    });

    if (cancelled) {
      return;
    }

    yield put(hideToastMessage(payload));
  } catch (error) {
    logger.captureException(error);
  }
}

export default [takeEvery(ToastMessageAction.AddToastMessage, addToastMessageSaga)];

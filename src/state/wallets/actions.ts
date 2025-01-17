import { Transaction } from 'bitcoinjs-lib';

import { Wallet, ActionMeta } from 'app/consts';

export enum WalletsAction {
  LoadWallets = 'LoadWallets',
  LoadWalletsSuccess = 'LoadWalletsSuccess',
  LoadWalletsFailure = 'LoadWalletsFailure',
  DeleteWallet = 'DeleteWallet',
  DeleteWalletSuccess = 'DeleteWalletSuccess',
  DeleteWalletFailure = 'DeleteWalletFailure',
  CreateWallet = 'CreateWallet',
  CreateWalletSuccess = 'CreateWalletSuccess',
  CreateWalletFailure = 'CreateWalletFailure',
  ImportWallet = 'ImportWallet',
  ImportWalletSuccess = 'ImportWalletSuccess',
  ImportWalletFailure = 'ImportWalletFailure',
  UpdateWallet = 'UpdateWallet',
  UpdateWalletSuccess = 'UpdateWalletSuccess',
  UpdateWalletFailure = 'UpdateWalletFailure',
  SendTransaction = 'SendTransaction',
  SendTransactionSuccess = 'SendTransactionSuccess',
  SendTransactionFailure = 'SendTransactionFailure',
  RefreshWallet = 'RefreshWallet',
  RefreshWalletSuccess = 'RefreshWalletSuccess',
  RefreshWalletFailure = 'SendTransactionFailure',
}

export interface LoadWalletsAction {
  type: WalletsAction.LoadWallets;
}

export interface LoadWalletsSuccessAction {
  type: WalletsAction.LoadWalletsSuccess;
  wallets: Wallet[];
}

export interface LoadWalletsFailureAction {
  type: WalletsAction.LoadWalletsFailure;
  error: string;
}

export interface DeleteWalletAction {
  type: WalletsAction.DeleteWallet;
  payload: { id: string };
  meta?: ActionMeta;
}

export interface DeleteWalletSuccessAction {
  type: WalletsAction.DeleteWalletSuccess;
  wallet: Wallet;
}

export interface DeleteWalletFailureAction {
  type: WalletsAction.DeleteWalletFailure;
  error: string;
}

export interface CreateWalletAction {
  type: WalletsAction.CreateWallet;
  payload: { wallet: Wallet };
  meta?: ActionMeta;
}

export interface CreateWalletSuccessAction {
  type: WalletsAction.CreateWalletSuccess;
  wallet: Wallet;
}

export interface CreateWalletFailureAction {
  type: WalletsAction.CreateWalletFailure;
  error: string;
}

export interface ImportWalletAction {
  type: WalletsAction.ImportWallet;
  payload: { wallet: Wallet };
  meta?: ActionMeta;
}

export interface ImportWalletSuccessAction {
  type: WalletsAction.ImportWalletSuccess;
  wallet: Wallet;
}

export interface ImportWalletFailureAction {
  type: WalletsAction.ImportWalletFailure;
  error: string;
}

export interface UpdateWalletAction {
  type: WalletsAction.UpdateWallet;
  wallet: Wallet;
}

export interface UpdateWalletSuccessAction {
  type: WalletsAction.UpdateWalletSuccess;
  wallet: Wallet;
}

export interface UpdateWalletFailureAction {
  type: WalletsAction.UpdateWalletFailure;
  error: string;
}

export interface SendTransactionAction {
  type: WalletsAction.SendTransaction;
  payload: {
    txDecoded: Transaction;
  };
  meta?: ActionMeta;
}

export interface SendTransactionSuccessAction {
  type: WalletsAction.SendTransactionSuccess;
}

export interface SendTransactionFailureAction {
  type: WalletsAction.SendTransactionFailure;
  error: string;
}

export interface RefreshWalletAction {
  type: WalletsAction.RefreshWallet;
  id: string;
}

export interface RefreshWalletSuccessAction {
  type: WalletsAction.RefreshWalletSuccess;
  wallet: Wallet;
}

export interface RefreshWalletFailureAction {
  type: WalletsAction.RefreshWalletFailure;
  error: string;
}

export type WalletsActionType =
  | LoadWalletsSuccessAction
  | LoadWalletsFailureAction
  | LoadWalletsAction
  | DeleteWalletSuccessAction
  | DeleteWalletFailureAction
  | DeleteWalletAction
  | CreateWalletSuccessAction
  | CreateWalletFailureAction
  | CreateWalletAction
  | ImportWalletSuccessAction
  | ImportWalletFailureAction
  | ImportWalletAction
  | UpdateWalletAction
  | UpdateWalletFailureAction
  | UpdateWalletSuccessAction
  | SendTransactionAction
  | SendTransactionFailureAction
  | SendTransactionSuccessAction
  | RefreshWalletAction
  | RefreshWalletSuccessAction
  | RefreshWalletFailureAction;

export const loadWallets = (): LoadWalletsAction => ({
  type: WalletsAction.LoadWallets,
});

export const loadWalletsSuccess = (wallets: Wallet[]): LoadWalletsSuccessAction => ({
  type: WalletsAction.LoadWalletsSuccess,
  wallets,
});

export const loadWalletsFailure = (error: string): LoadWalletsFailureAction => ({
  type: WalletsAction.LoadWalletsFailure,
  error,
});

export const deleteWallet = (id: string, meta?: ActionMeta): DeleteWalletAction => ({
  type: WalletsAction.DeleteWallet,
  payload: {
    id,
  },
  meta,
});

export const deleteWalletSuccess = (wallet: Wallet): DeleteWalletSuccessAction => ({
  type: WalletsAction.DeleteWalletSuccess,
  wallet,
});

export const deleteWalletFailure = (error: string): DeleteWalletFailureAction => ({
  type: WalletsAction.DeleteWalletFailure,
  error,
});

export const createWallet = (wallet: Wallet, meta?: ActionMeta): CreateWalletAction => ({
  type: WalletsAction.CreateWallet,
  payload: {
    wallet,
  },
  meta,
});

export const createWalletSuccess = (wallet: Wallet): CreateWalletSuccessAction => ({
  type: WalletsAction.CreateWalletSuccess,
  wallet,
});

export const createWalletFailure = (error: string): CreateWalletFailureAction => ({
  type: WalletsAction.CreateWalletFailure,
  error,
});

export const importWallet = (wallet: Wallet, meta?: ActionMeta): ImportWalletAction => ({
  type: WalletsAction.ImportWallet,
  payload: {
    wallet,
  },
  meta,
});

export const importWalletSuccess = (wallet: Wallet): ImportWalletSuccessAction => ({
  type: WalletsAction.ImportWalletSuccess,
  wallet,
});

export const importWalletFailure = (error: string): ImportWalletFailureAction => ({
  type: WalletsAction.ImportWalletFailure,
  error,
});

export const updateWallet = (wallet: Wallet): UpdateWalletAction => ({
  type: WalletsAction.UpdateWallet,
  wallet,
});

export const updateWalletSuccess = (wallet: Wallet): UpdateWalletSuccessAction => ({
  type: WalletsAction.UpdateWalletSuccess,
  wallet,
});

export const updateWalletFailure = (error: string): UpdateWalletFailureAction => ({
  type: WalletsAction.UpdateWalletFailure,
  error,
});

export const sendTransaction = (
  payload: { txDecoded: Transaction; memo?: string },
  meta?: ActionMeta,
): SendTransactionAction => ({
  type: WalletsAction.SendTransaction,
  payload,
  meta,
});

export const sendTransactionSuccess = (): SendTransactionSuccessAction => ({
  type: WalletsAction.SendTransactionSuccess,
});

export const sendTransactionFailure = (error: string): SendTransactionFailureAction => ({
  type: WalletsAction.SendTransactionFailure,
  error,
});

export const refreshWallet = (id: string): RefreshWalletAction => ({
  type: WalletsAction.RefreshWallet,
  id,
});

export const refreshWalletSuccess = (wallet: Wallet): RefreshWalletSuccessAction => ({
  type: WalletsAction.RefreshWalletSuccess,
  wallet,
});

export const refreshWalletFailure = (error: string): RefreshWalletFailureAction => ({
  type: WalletsAction.RefreshWalletFailure,
  error,
});

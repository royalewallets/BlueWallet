export enum ElectrumXAction {
  StartListeners = 'StartListeners',
  FetchBlockHeight = 'FetchBlockHeight',
  FetchBlockHeightSuccess = 'FetchBlockHeightSuccess',
  FetchBlockHeightFailure = 'FetchBlockHeightFailure',
  SetBlockHeight = 'SetBlockHeight',
  ScriptHashChanged = 'ScriptHashChanged',
  SetSubscribedScriptHashes = 'SetSubscribedScriptHashes',
  ConnectionClosed = 'ConnectionClosed',
  ConnectionReconnected = 'ConnectionReconnected',
  SetServerConnection = 'SetServerConnection',
  SetInternetConnection = 'SetInternetConnection',
}

export interface FetchBlockHeightAction {
  type: ElectrumXAction.FetchBlockHeight;
}

export interface ConnectionClosedAction {
  type: ElectrumXAction.ConnectionClosed;
}

export interface ConnectionReconnectedAction {
  type: ElectrumXAction.ConnectionReconnected;
}

export interface SetServerConnectionAction {
  type: ElectrumXAction.SetServerConnection;
  isServerConnected: boolean;
}

export interface SetInternetConnectionAction {
  type: ElectrumXAction.SetInternetConnection;
  isInternetReachable: boolean;
}

export interface FetchBlockHeightSuccessAction {
  type: ElectrumXAction.FetchBlockHeightSuccess;
  blockHeight: number;
}

export interface FetchBlockHeightFailureAction {
  type: ElectrumXAction.FetchBlockHeightFailure;
  error: string;
}
export interface SetBlockHeightAction {
  type: ElectrumXAction.SetBlockHeight;
  blockHeight: number;
}

export interface StartListenersAction {
  type: ElectrumXAction.StartListeners;
}

export interface ScriptHashChangedAction {
  type: ElectrumXAction.ScriptHashChanged;
  scriptHash: string;
}

export interface SetSubscribedScriptHashesAction {
  type: ElectrumXAction.SetSubscribedScriptHashes;
  scriptHashes: string[];
}

export type ElectrymXActionType =
  | SetBlockHeightAction
  | StartListenersAction
  | ScriptHashChangedAction
  | SetSubscribedScriptHashesAction
  | FetchBlockHeightAction
  | FetchBlockHeightSuccessAction
  | FetchBlockHeightFailureAction
  | ConnectionClosedAction
  | ConnectionReconnectedAction
  | SetServerConnectionAction
  | SetInternetConnectionAction;

export const connectionClosed = (): ConnectionClosedAction => ({
  type: ElectrumXAction.ConnectionClosed,
});

export const connectionReconnected = (): ConnectionReconnectedAction => ({
  type: ElectrumXAction.ConnectionReconnected,
});

export const setInternetConnection = (isInternetReachable: boolean): SetInternetConnectionAction => ({
  type: ElectrumXAction.SetInternetConnection,
  isInternetReachable,
});

export const setServerConnection = (isServerConnected: boolean): SetServerConnectionAction => ({
  type: ElectrumXAction.SetServerConnection,
  isServerConnected,
});

export const startListeners = (): StartListenersAction => ({
  type: ElectrumXAction.StartListeners,
});

export const setBlockHeight = (blockHeight: number): SetBlockHeightAction => ({
  type: ElectrumXAction.SetBlockHeight,
  blockHeight,
});

export const scriptHashChanged = (scriptHash: string): ScriptHashChangedAction => ({
  type: ElectrumXAction.ScriptHashChanged,
  scriptHash,
});

export const setSubscribedScriptHashes = (scriptHashes: string[]): SetSubscribedScriptHashesAction => ({
  type: ElectrumXAction.SetSubscribedScriptHashes,
  scriptHashes,
});

export const fetchBlockHeight = (): FetchBlockHeightAction => ({
  type: ElectrumXAction.FetchBlockHeight,
});

export const fetchBlockHeightSuccess = (blockHeight: number): FetchBlockHeightSuccessAction => ({
  type: ElectrumXAction.FetchBlockHeightSuccess,
  blockHeight,
});

export const fetchBlockHeightFailure = (error: string): FetchBlockHeightFailureAction => ({
  type: ElectrumXAction.FetchBlockHeightFailure,
  error,
});

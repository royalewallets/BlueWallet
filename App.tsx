import * as Sentry from '@sentry/react-native';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { i18n } from 'app/locale';
import { Navigator } from 'app/navigators';
import { AppStateManager } from 'app/services';
import { AuthenticationAction } from 'app/state/authentication/actions';
import { persistor, store } from 'app/state/store';
import { WalletsAction } from 'app/state/wallets/actions';

import config from './config';

if (!__DEV__) {
  Sentry.init({
    dsn: config.sentryDsn,
  });
}

export default class App extends React.PureComponent {
  lockScreen = () => {
    store.dispatch({
      type: AuthenticationAction.SetIsAuthenticated,
      isAuthenticated: false,
    });
  };

  refreshWallets = () => {
    store.dispatch({
      type: WalletsAction.LoadWallets,
    });
  };

  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <AppStateManager
            handleAppComesToForeground={this.refreshWallets}
            handleAppComesToBackground={this.lockScreen}
          />
          <PersistGate loading={null} persistor={persistor}>
            <View style={styles.wrapper}>
              <Navigator />
            </View>
          </PersistGate>
        </Provider>
      </I18nextProvider>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Header, ScreenTemplate } from 'app/components';
import { Route, RootStackParams, Wallet } from 'app/consts';
import { isAfterAirdrop } from 'app/helpers/airdrop';
import { ApplicationState } from 'app/state';
import {
  checkSubscription,
  CheckSubscriptionActionCreator,
  subscribeWallet,
  SubscribeWalletActionCreator,
} from 'app/state/airdrop/actions';
import * as airdropSelectors from 'app/state/airdrop/selectors';

import { AirdropFinished, AirdropInProgress, Footer } from './components';

const i18n = require('../../../loc');

interface Props {
  wallets: Wallet[];
  error: boolean;
  isLoading: boolean;
  checkSubscription: CheckSubscriptionActionCreator;
  route: RouteProp<RootStackParams, Route.AirdropDashboard>;
  navigation: CompositeNavigationProp<
    StackNavigationProp<RootStackParams, Route.MainTabStackNavigator>,
    StackNavigationProp<RootStackParams, Route.AirdropDashboard>
  >;
  subscribedWallets: Wallet[];
  availableWallets: Wallet[];
  subscribeWallet: SubscribeWalletActionCreator;
}

export const AirdropDashboardScreen: FC<Props> = ({
  navigation,
  wallets,
  checkSubscription,
  subscribedWallets,
  subscribeWallet,
  availableWallets,
  isLoading,
  error,
  route,
}) => {
  useEffect(() => {
    checkSubscription(wallets);
  }, [checkSubscription, wallets]);

  const airdropFinished = isAfterAirdrop();

  return (
    <ScreenTemplate
      header={
        <Header
          onBackArrow={() => navigation.navigate(Route.MainTabStackNavigator, { screen: Route.Dashboard })}
          title={i18n.airdrop.title}
        />
      }
      footer={!airdropFinished && <Footer route={route} navigation={navigation} />}
    >
      <View style={styles.wrapper}>
        {airdropFinished ? (
          <AirdropFinished wallets={subscribedWallets} loading={isLoading} error={error} navigation={navigation} />
        ) : (
          <AirdropInProgress
            loading={isLoading}
            error={error}
            availableWallets={availableWallets}
            subscribedWallets={subscribedWallets}
            subscribeWallet={subscribeWallet}
          />
        )}
      </View>
    </ScreenTemplate>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  wallets: airdropSelectors.airdropReadyWallets(state),
  availableWallets: airdropSelectors.availableWallets(state),
  subscribedWallets: airdropSelectors.subscribedWallets(state),
  isLoading: airdropSelectors.isLoading(state),
  error: airdropSelectors.hasError(state),
});

const mapDispatchToProps = {
  checkSubscription,
  subscribeWallet,
};

export default connect(mapStateToProps, mapDispatchToProps)(AirdropDashboardScreen);

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
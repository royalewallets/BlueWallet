import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { Header, ScreenTemplate, Button, FlatButton, CheckBox } from 'app/components';
import { Route, RootStackParams, Wallet } from 'app/consts';
import { typography, palette } from 'app/styles';

const i18n = require('../../../loc');

interface Props {
  navigation: StackNavigationProp<RootStackParams, Route.ChooseWalletsForNotification>;
  route: RouteProp<RootStackParams, Route.ChooseWalletsForNotification>;
}

interface State {
  wallets: Wallet[];
}

export class ChooseWalletsForNotificationScreen extends PureComponent<Props, State> {
  state = {
    wallets: [],
  };

  addWallet = (wallet: Wallet) => this.setState((state: State) => ({ wallets: [...state.wallets, wallet] }));

  removeWallet = (selectingWallet: Wallet) =>
    this.setState((state: State) => ({
      wallets: state.wallets.filter(wallet => wallet.id !== selectingWallet.id),
    }));

  checkWallet = (wallet: Wallet) => (this.isWalletChecked(wallet) ? this.removeWallet(wallet) : this.addWallet(wallet));

  checkAll = () => this.setState({ wallets: this.areAllWalletsChecked() ? [] : this.props.route.params.wallets });

  areAllWalletsChecked = () => this.props.route.params.wallets.length === this.state.wallets.length;

  isWalletChecked = (selectedWallet: Wallet) =>
    this.state.wallets.some((wallet: Wallet) => wallet.id === selectedWallet.id);

  renderItem = (item: Wallet) => {
    return (
      <View style={styles.itemRow}>
        <View style={styles.row}>
          <CheckBox
            checked={this.isWalletChecked(item)}
            onPress={() => this.checkWallet(item)}
            containerStyle={styles.checkBox}
          />
          <View>
            <Text style={styles.walletName}>{item.label}</Text>
            <Text style={styles.caption}>{item.getAddressForTransaction()}</Text>
          </View>
        </View>
      </View>
    );
  };

  renderListHeader = () => (
    <View style={styles.listHeader}>
      <Text style={styles.listHeaderTitle}> {i18n.tabNavigator.wallets}</Text>
      <CheckBox checked={this.areAllWalletsChecked()} onPress={this.checkAll} containerStyle={styles.checkBox} />
    </View>
  );

  onConfirm = () => {
    const {
      navigation,
      route: { params },
    } = this.props;

    navigation.navigate(Route.ConfirmEmail, {
      email: params.email,
      flowType: params.flowType,
      onSuccess: params.onSuccess,
      wallets: params.wallets,
    });
  };

  render() {
    const {
      route: {
        params: { email, wallets, onSkip, subtitle, description },
      },
    } = this.props;

    return (
      <ScreenTemplate
        header={<Header isBackArrow title={i18n.settings.notifications} />}
        footer={
          <>
            <Button title={i18n._.confirm} disabled={!this.state.wallets.length} onPress={this.onConfirm} />
            <FlatButton containerStyle={styles.skipButton} title={i18n._.skip} onPress={onSkip} />
          </>
        }
      >
        <View style={styles.infoContainer}>
          <Text style={typography.headline4}>{subtitle}</Text>
          <Text style={styles.infoDescription}>{description}</Text>
        </View>
        <View style={styles.amountInput}>
          <Text style={styles.amount}>{email}</Text>
        </View>

        <FlatList
          data={wallets}
          renderItem={item => this.renderItem(item.item)}
          keyExtractor={item => item.id}
          ListHeaderComponent={this.renderListHeader()}
        />
      </ScreenTemplate>
    );
  }
}

export default ChooseWalletsForNotificationScreen;

const styles = StyleSheet.create({
  infoContainer: {
    alignItems: 'center',
  },
  infoDescription: {
    ...typography.caption,
    color: palette.textGrey,
    margin: 20,
    textAlign: 'center',
  },
  amountInput: { width: '100%', borderBottomColor: palette.grey, borderBottomWidth: 1, paddingBottom: 10 },
  amount: { ...typography.caption, color: palette.textGrey },
  skipButton: {
    marginTop: 12,
  },
  row: {
    flexDirection: 'row',
  },
  itemRow: {
    marginVertical: 8,
  },
  checkBox: {
    justifyContent: 'flex-start',
    padding: 0,
  },
  walletName: { ...typography.subtitle6 },
  caption: { ...typography.warning, color: palette.textGrey },
  listHeader: {
    marginTop: 24,
  },
  listHeaderTitle: {
    ...typography.overline,
    color: palette.textGrey,
    marginLeft: 7,
    marginBottom: 5,
  },
});

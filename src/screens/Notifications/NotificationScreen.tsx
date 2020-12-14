import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import { images } from 'app/assets';
import { Header, ScreenTemplate, Button, FlatButton, ButtonType, Image } from 'app/components';
import { Route, MainCardStackNavigatorParams, RootStackParams } from 'app/consts';
import { typography, palette } from 'app/styles';

const i18n = require('../../../loc');

type Item = any; // TODO will be changed to proper type when implementing logic
interface Props {
  navigation: CompositeNavigationProp<
    StackNavigationProp<RootStackParams, Route.MainCardStackNavigator>,
    StackNavigationProp<MainCardStackNavigatorParams, Route.Notifications>
  >;
  wallets: Item[];
  storedAddress: string;
}
export class NotificationScreen extends Component<Props> {
  onChangeEmailPress = () =>
    this.props.navigation.navigate(Route.ChangeEmail, {
      address: this.props.storedAddress,
    });
  onDeletePress = () =>
    this.props.navigation.navigate(Route.DeleteEmail, {
      hasWallets: !!this.props.wallets,
      address: this.props.storedAddress,
    });

  onAddEmailPress = () => {
    this.props.navigation.navigate(Route.AddEmail);
  };

  renderItem = (item: any) => {
    return (
      <TouchableOpacity style={styles.itemRow} onPress={() => this.goToWalletDetails(item.walletId)}>
        <View style={styles.row}>
          <Text style={styles.walletName}>{item.name}</Text>
          <Image source={images.backArrow} style={styles.arrow} resizeMode="contain" />
        </View>
        <Text style={styles.caption}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  goToWalletDetails = (walletId: string) => {
    this.props.navigation.navigate(Route.WalletDetails, { id: walletId });
  };

  renderFooter = () =>
    this.props.wallets ? (
      <>
        <Button title={i18n.notifications.change} onPress={this.onChangeEmailPress} />
        <FlatButton
          containerStyle={styles.deleteButton}
          buttonType={ButtonType.Warning}
          title={i18n.notifications.delete}
          onPress={this.onDeletePress}
        />
      </>
    ) : (
      <Button title={i18n.notifications.addEmail} onPress={this.onAddEmailPress} />
    );

  render() {
    return (
      <ScreenTemplate
        header={<Header isBackArrow={true} title={i18n.settings.notifications} />}
        noScroll
        footer={this.renderFooter()}
      >
        {this.props.wallets ? (
          <>
            <Text style={styles.title}>{i18n.notifications.title}</Text>
            <Text style={styles.description}>{i18n.notifications.description}</Text>
            <View style={styles.amountAddress}>
              <Text style={styles.address}>{this.props.storedAddress}</Text>
            </View>
            <Text style={styles.listTitle}>{i18n.notifications.yourSubscriptions}</Text>

            <FlatList
              data={this.props.wallets}
              renderItem={item => this.renderItem(item.item)}
              keyExtractor={item => item.id}
            />
          </>
        ) : (
          <View style={styles.noWalletsContainer}>
            <Text style={typography.headline4}>{i18n.notifications.addYourAddress}</Text>
            <Image source={images.bigBell} style={styles.bigBell} resizeMode="contain" />
            <Text style={styles.noWalletsDescription}>{i18n.notifications.addYourAddressDescription}</Text>
          </View>
        )}
      </ScreenTemplate>
    );
  }
}

// @ts-ignore TODO will be removed when implementing logic
NotificationScreen.defaultProps = {
  storedAddress: 'hardcoded-email-address@gmail.com',
  wallets: [{ id: '1', name: 'Wallet1', description: 'xxxxxxxxxxxxxxxxxxxxxxx' }],
  // wallets: undefined,
};

const styles = StyleSheet.create({
  title: {
    ...typography.headline4,
    alignSelf: 'center',
    marginVertical: 18,
    marginTop: 40,
  },
  description: {
    ...typography.caption,
    color: palette.textGrey,
    alignSelf: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  deleteButton: {
    marginTop: 12,
  },
  listTitle: {
    ...typography.overline,
    color: palette.textGrey,
    marginTop: 24,
    marginBottom: 7,
  },
  walletName: { ...typography.subtitle6 },
  caption: { ...typography.warning, color: palette.textGrey },
  arrow: {
    width: 8,
    height: 13,
    transform: [{ rotate: '180deg' }],
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemRow: {
    marginVertical: 8,
  },
  amountAddress: { width: '100%', borderBottomColor: palette.grey, borderBottomWidth: 1, paddingBottom: 10 },
  address: { ...typography.caption, color: palette.textGrey },
  noWalletsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bigBell: {
    width: 152,
    height: 182,
    justifyContent: 'center',
  },
  noWalletsDescription: {
    ...typography.caption,
    color: palette.textGrey,
    textAlign: 'center',
  },
});

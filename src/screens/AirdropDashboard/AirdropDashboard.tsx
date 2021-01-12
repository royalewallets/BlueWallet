import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { images } from 'app/assets';
import { Header, ScreenTemplate, Button, Image, Countdown } from 'app/components';
import { CONST, MainCardStackNavigatorParams, Route, RootStackParams } from 'app/consts';
import { getFormattedAirdropDate } from 'app/helpers/airdrop';
import { typography, palette } from 'app/styles';

const i18n = require('../../../loc');

interface Props {
  navigation: CompositeNavigationProp<
    StackNavigationProp<RootStackParams, Route.MainCardStackNavigator>,
    StackNavigationProp<MainCardStackNavigatorParams, Route.RecoverySend>
  >;

  route: RouteProp<MainCardStackNavigatorParams, Route.RecoverySend>;
}

export const AirdropDashboard = ({ navigation }: Props) => (
  <ScreenTemplate
    footer={
      <>
        <Button
          title={i18n.airdrop.createNewWallet}
          onPress={() => {
            navigation.navigate(Route.CreateWallet);
          }}
          containerStyle={styles.buttonContainer}
        />
        <Text>Read Terms and Conditions</Text>
      </>
    }
    header={<Header isBackArrow title={i18n.airdrop.title} />}
  >
    <View style={styles.wrapper}>
      <View style={styles.infoContainer}>
        <Text style={typography.headline4}>{i18n.airdrop.title}</Text>
        <Text style={[styles.description, styles.spaceTop]}>{i18n.airdrop.dashboard.desc1}</Text>
        <Text style={styles.description}>Date of Airdrop: {getFormattedAirdropDate()}</Text>
      </View>
      <Countdown dataEnd={CONST.airdropDate} />

      <Image source={images.airdrop} style={styles.airdropImage} />
      <Text style={styles.description}>Create new wallet to take part in the Airdrop.</Text>
    </View>
  </ScreenTemplate>
);

export default AirdropDashboard;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  airdropImage: {
    width: 189,
    height: 193,
    marginTop: 27.5,
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  description: {
    ...typography.caption,
    color: palette.textGrey,
    textAlign: 'center',
    lineHeight: 19,
  },
  spaceTop: {
    marginTop: 18,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

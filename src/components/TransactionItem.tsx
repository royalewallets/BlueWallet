import moment from 'moment';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { icons } from 'app/assets';
import { TranscationLabelStatus, Image, Label } from 'app/components';
import { Transaction, TxType } from 'app/consts';
import { getConfirmationsText } from 'app/helpers/helpers';
import { typography, palette } from 'app/styles';

import { satoshiToBtc, getBtcLabel } from '../../utils/bitcoin';

const i18n = require('../../loc');

const renderArrowIcon = (value: number) => (
  <Image source={value > 0 ? icons.arrowRight : icons.arrowLeft} style={styles.arrow} resizeMode="contain" />
);

const renderCofirmations = (txType: TxType, confirmations: number) =>
  txType !== TxType.ALERT_RECOVERED && (
    <Text style={styles.label}>{`${i18n.transactions.list.conf}: ${getConfirmationsText(txType, confirmations)}`}</Text>
  );

export const TransactionItem = ({ item, onPress }: { item: Transaction; onPress: (item: any) => void }) => {
  const isMinusValue = item.valueWithoutFee < 0;

  const isCanceledAlertToMe = !isMinusValue && item.tx_type === TxType.ALERT_RECOVERED;

  return (
    <TouchableOpacity
      style={[styles.container, isCanceledAlertToMe ? styles.opacity : null]}
      onPress={() => onPress(item)}
    >
      <View style={styles.walletLabelWrapper}>
        {renderArrowIcon(item.valueWithoutFee)}
        <Image source={icons.wallet} style={styles.wallet} resizeMode="contain" />
        <Text style={styles.walletLabel} numberOfLines={1} ellipsizeMode="tail">
          {item.walletLabel}
        </Text>
      </View>
      {!!item.note && <Text style={typography.caption}>{item.note}</Text>}
      <Text style={styles.label}>
        {item.time ? moment(item.received).format('LT') : i18n.transactions.details.timePending}
      </Text>
      {renderCofirmations(item.tx_type, item.confirmations)}
      <View style={styles.rowWrapper}>
        <TranscationLabelStatus type={item.tx_type} confirmations={item.confirmations} />
        <Text
          style={[
            typography.headline5,
            { color: isMinusValue ? palette.textRed : palette.textBlack },
            item.toExternalAddress ? styles.label : null,
          ]}
        >
          {!isMinusValue && '+'}
          {getBtcLabel(satoshiToBtc(item.valueWithoutFee).toNumber())}
        </Text>
      </View>
      {item.blockedAmount !== undefined && (
        <View style={styles.rowWrapper}>
          <Label>{i18n.transactions.details.blocked}</Label>

          <Text style={[typography.headline5, { color: palette.textRed }]}>{getBtcLabel(item.blockedAmount)}</Text>
        </View>
      )}

      {item.unblockedAmount !== undefined && (
        <View style={styles.rowWrapper}>
          <Label>{i18n.transactions.details.unblocked}</Label>
          <Text style={[typography.headline5, item.toExternalAddress ? styles.label : null]}>
            +{getBtcLabel(item.unblockedAmount)}
          </Text>
        </View>
      )}
      {item.returnedFee !== undefined && (
        <View style={styles.rowWrapper}>
          <Text style={styles.label}>{i18n.transactions.details.totalReturnedFee} </Text>
          <Text style={[styles.label, typography.headline5, item.toExternalAddress ? styles.label : null]}>
            +{getBtcLabel(item.returnedFee)}
          </Text>
        </View>
      )}
      {item.fee !== undefined && (
        <View style={styles.rowWrapper}>
          <Text style={styles.label}>{i18n.transactions.details.fee} </Text>
          <Text style={[styles.label, typography.headline5]}>{getBtcLabel(item.fee)}</Text>
        </View>
      )}
      {item.toInternalAddress !== undefined && (
        <View>
          <Text style={styles.label}>{i18n.transactions.details.toInternalWallet} </Text>
          <Text style={styles.label}>{item.toInternalAddress}</Text>
        </View>
      )}
      {item.toExternalAddress !== undefined && (
        <View>
          <Text style={styles.label}>{i18n.transactions.details.toExternalWallet} </Text>
          <Text style={styles.label}>{item.toExternalAddress}</Text>
        </View>
      )}
      {item.recoveredTxsCounter !== undefined && (
        <View>
          <Text style={styles.label}>
            {i18n.transactions.details.numberOfCancelTransactions} {item.recoveredTxsCounter}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 8,
    flexGrow: 1,
    width: '100%',
  },
  opacity: {
    opacity: 0.5,
  },
  walletLabelWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wallet: {
    width: 14,
    height: 14,
    marginHorizontal: 3,
  },
  arrow: {
    width: 24,
    height: 24,
  },
  label: {
    ...typography.caption,
    color: palette.textGrey,
  },
  walletLabel: {
    ...typography.headline5,
    flexShrink: 1,
  },
});

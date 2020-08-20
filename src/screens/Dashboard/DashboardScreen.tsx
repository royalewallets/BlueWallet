import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, StyleSheet, RefreshControl, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { ListEmptyState, WalletCard, ScreenTemplate, Header, SearchBar, StyledText } from 'app/components';
import { Wallet, Route, Transaction, CONST, Filters } from 'app/consts';
import { isAllWallets } from 'app/helpers/helpers';
import { SecureStorageService } from 'app/services';
import { ApplicationState } from 'app/state';
import { selectors as transactionsSelectors } from 'app/state/transactions';
import { loadTransactions, TransactionsActionType } from 'app/state/transactions/actions';
import { loadWallets, WalletsActionType } from 'app/state/wallets/actions';
import { palette } from 'app/styles';

import { DashboarContentdHeader } from './DashboarContentdHeader';
import { DashboardHeader } from './DashboardHeader';
import { TransactionList } from './TransactionList';
import { WalletsCarousel } from './WalletsCarousel';

const i18n = require('../../../loc');

interface Props {
  navigation: StackNavigationProp<any, Route.Dashboard>;
  wallets: Wallet[];
  transactions: Record<string, Transaction[]>;
  allTransactions: Transaction[];
  transactionNotes: Record<string, string>;
  isInitialized: boolean;
  loadWallets: () => Promise<WalletsActionType>;
  loadTransactions: (walletAddress: string) => Promise<TransactionsActionType>;
}

interface State {
  isFetching: boolean;
  filters: Filters;
  query: string;
  contentdHeaderHeight: number;
  lastSnappedTo: number;
}

class DashboardScreen extends Component<Props, State> {
  state: State = {
    query: '',
    filters: {
      isFilteringOn: false,
    },
    contentdHeaderHeight: 0,
    isFetching: false,
    lastSnappedTo: 0,
  };

  walletCarouselRef = React.createRef<WalletsCarousel>();
  screenTemplateRef = React.createRef<ScreenTemplate>();
  componentDidMount() {
    SecureStorageService.getSecuredValue('pin')
      .then(() => {
        SecureStorageService.getSecuredValue('transactionPassword').catch(() => {
          this.props.navigation.navigate(Route.PasswordNavigator);
        });
      })
      .catch(() => {
        this.props.navigation.navigate(Route.CreatePin);
      });
    this.props.loadWallets();
  }

  refreshTransactions = async () => {
    this.setState({ isFetching: true });
    await this.props.loadWallets();

    this.setState({ isFetching: false });
  };

  chooseItemFromModal = (index: number) => {
    this.setState({ lastSnappedTo: index });
  };

  _keyExtractor = (item: Wallet, index: number) => index.toString();

  getActiveWallet = () => {
    const { lastSnappedTo } = this.state;

    const { wallets } = this.props;
    return isAllWallets(wallets[lastSnappedTo] || wallets[0]) ? wallets[1] : wallets[lastSnappedTo];
  };

  sendCoins = () => {
    const activeWallet = this.getActiveWallet();
    this.props.navigation.navigate(Route.SendCoins, {
      fromAddress: activeWallet.getAddress(),
      fromSecret: activeWallet.getSecret(),
      fromWallet: activeWallet,
    });
  };

  receiveCoins = () => {
    const activeWallet = this.getActiveWallet();
    this.props.navigation.navigate(Route.ReceiveCoins, {
      secret: activeWallet.getSecret(),
    });
  };

  recoverCoins = () => {
    const activeWallet = this.getActiveWallet();
    this.props.navigation.navigate(Route.RecoveryTransactionList, {
      wallet: activeWallet,
    });
  };

  showModal = () => {
    const { lastSnappedTo } = this.state;
    const { wallets } = this.props;
    this.props.navigation.navigate(Route.ActionSheet, {
      wallets,
      selectedIndex: lastSnappedTo,
      onPress: this.chooseItemFromModal,
    });
  };

  setQuery = (query: string) => this.setState({ query });

  scrollToTransactionList = () => {
    this.screenTemplateRef.current?.scrollRef.current?.scrollTo({
      x: 0,
      y: this.state.contentdHeaderHeight + 24,
      animated: true,
    });
  };

  onFilterPress = (filters: any) => {
    this.setState({ filters: { ...filters, isFilteringOn: true } });
    this.scrollToTransactionList();
  };

  resetFilters = () => {
    this.setState({
      filters: {
        isFilteringOn: false,
      },
    });
    this.screenTemplateRef.current?.scrollRef.current?.scrollTo({
      x: 0,
      y: 1,
      animated: true,
    });
  };

  hasWallets = () => {
    const { wallets } = this.props;
    return wallets.length > 0;
  };

  renderHeader = () => {
    const { query } = this.state;

    if (this.hasWallets()) {
      return (
        <DashboardHeader
          onFilterPress={() => {
            this.props.navigation.navigate(Route.FilterTransactions, {
              onFilterPress: this.onFilterPress,
            });
          }}
          onAddPress={() => {
            this.props.navigation.navigate(Route.CreateWallet);
          }}
        >
          <SearchBar query={query} setQuery={this.setQuery} onFocus={this.scrollToTransactionList} />
        </DashboardHeader>
      );
    }
    return (
      <Header
        title={i18n.wallets.dashboard.title}
        addFunction={() => this.props.navigation.navigate(Route.CreateWallet)}
      />
    );
  };

  renderWallets = () => {
    const { wallets } = this.props;

    const activeWallet = this.getActiveWallet();

    return (
      <View
        onLayout={event => {
          const { height } = event.nativeEvent.layout;
          this.setState({
            contentdHeaderHeight: height,
          });
        }}
      >
        <DashboarContentdHeader
          onSelectPress={this.showModal}
          balance={activeWallet.balance}
          label={activeWallet.label === CONST.allWallets ? i18n.wallets.dashboard.allWallets : activeWallet.label}
          type={activeWallet.type}
          typeReadable={activeWallet.typeReadable}
          incomingBalance={activeWallet.incoming_balance}
          unit={activeWallet.preferredBalanceUnit}
          onReceivePress={this.receiveCoins}
          onSendPress={this.sendCoins}
          onReceveryPress={this.recoverCoins}
        />
        {isAllWallets(activeWallet) ? (
          <WalletsCarousel
            ref={this.walletCarouselRef}
            data={wallets.filter(wallet => wallet.label !== CONST.allWallets)}
            keyExtractor={this._keyExtractor as any}
            onSnapToItem={() => {
              this.props.loadWallets();
            }}
          />
        ) : (
          <View style={{ alignItems: 'center' }}>
            <WalletCard wallet={activeWallet} showEditButton />
          </View>
        )}
      </View>
    );
  };

  renderContent = () => {
    const { query, filters } = this.state;
    const { transactions, allTransactions } = this.props;
    const activeWallet = this.getActiveWallet();

    if (this.hasWallets()) {
      return (
        <TransactionList
          ListHeaderComponent={<>{this.renderWallets()}</>}
          search={query}
          filters={filters}
          transactions={isAllWallets(activeWallet) ? allTransactions : transactions[activeWallet.secret] || []}
          transactionNotes={this.props.transactionNotes}
          label={activeWallet.label}
          headerHeight={this.state.contentdHeaderHeight}
        />
      );
    }
    return (
      <ListEmptyState
        variant={ListEmptyState.Variant.Dashboard}
        onPress={() => this.props.navigation.navigate(Route.CreateWallet)}
      />
    );
  };

  render() {
    const { filters } = this.state;
    const { isInitialized } = this.props;

    if (!isInitialized) {
      return (
        <View style={styles.loadingIndicatorContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <>
        <ScreenTemplate
          ref={this.screenTemplateRef}
          noScroll
          contentContainer={styles.contentContainer}
          // refreshControl={<RefreshControl onRefresh={this.refreshTransactions} refreshing={this.state.isFetching} />}
          header={this.renderHeader()}
        >
          {this.renderContent()}
        </ScreenTemplate>
        {!!filters.isFilteringOn && (
          <View style={styles.clearFiltersButtonContainer}>
            <TouchableOpacity onPress={this.resetFilters} style={styles.clearFiltersButton}>
              <StyledText title={i18n.filterTransactions.clearFilters} />
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  wallets: state.wallets.wallets,
  isInitialized: state.wallets.isInitialized,
  transactions: transactionsSelectors.transactions(state),
  allTransactions: transactionsSelectors.allTransactions(state),
  transactionNotes: state.transactions.transactionNotes,
});

const mapDispatchToProps = {
  loadWallets,
  loadTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

const styles = StyleSheet.create({
  loadingIndicatorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearFiltersButtonContainer: {
    backgroundColor: palette.white,
  },
  clearFiltersButton: {
    height: 59,
    paddingHorizontal: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingHorizontal: 0,
  },
});

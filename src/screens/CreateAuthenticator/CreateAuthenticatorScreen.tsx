import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { Text, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';

import { Header, ScreenTemplate, FlatButton, Button, InputItem } from 'app/components';
import {
  Route,
  Authenticator as IAuthenticator,
  MainTabNavigatorParams,
  MainCardStackNavigatorParams,
} from 'app/consts';
import { maxWalletNameLength } from 'app/consts/text';
import { CreateMessage, MessageType } from 'app/helpers/MessageCreator';
import { ApplicationState } from 'app/state';
import { selectors, actions } from 'app/state/authenticators';
import { palette, typography } from 'app/styles';

const i18n = require('../../../loc');

interface ActionProps {
  createAuthenticator: Function;
}
interface Props extends ActionProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<MainTabNavigatorParams, Route.AuthenticatorList>,
    StackNavigationProp<MainCardStackNavigatorParams, Route.CreateAuthenticator>
  >;
  authenticators: IAuthenticator[];
}

interface MapStateProps {
  authenticators: IAuthenticator[];
}
interface State {
  label: string;
}

class CreateAuthenticatorScreen extends Component<Props> {
  state: State = {
    label: '',
  };

  setLabel = (label: string) => this.setState({ label: label.trim() });

  get validationError(): string | undefined {
    const { authenticators } = this.props;
    const { label } = this.state;
    const authenticatorsLabels = authenticators.map(a => a.name);
    if (authenticatorsLabels.includes(label.trim())) {
      // TODO: replace correct text
      return i18n.wallets.importWallet.walletInUseValidationError;
    }
    return;
  }

  canSubmit = () => {
    const { label } = this.state;
    return !label.length || !!this.validationError;
  };

  confirmCreateAuthenticator = () => {
    CreateMessage({
      title: i18n.message.creatingAuthenticator,
      description: i18n.message.creatingAuthenticatorDescription,
      type: MessageType.processingState,
      asyncTask: () => this.createAuthenticator(),
    });
  };

  onCreateAuthenticatorFailure = (error: string) => {
    const { navigation } = this.props;

    Alert.alert('Error', error, [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate(Route.CreateAuthenticator);
        },
      },
    ]);
  };

  createAuthenticator = () => {
    const { navigation, createAuthenticator } = this.props;
    try {
      if (!this.state.label) {
        throw new Error('Invalid data');
      }
      createAuthenticator(
        { name: this.state.label },
        {
          onSuccess: (authenticator: IAuthenticator) => {
            navigation.goBack();
            navigation.navigate(Route.CreateAuthenticatorPublicKey, { id: authenticator.id });
          },
          onFailure: (error: string) => this.onCreateAuthenticatorFailure(error),
        },
      );
    } catch (_) {
      // TODO: change text for error
      this.onCreateAuthenticatorFailure(i18n.wallets.errors.invalidPrivateKey);
    }
  };

  navigateToImport = () => {
    const { navigation } = this.props;
    navigation.navigate(Route.ImportAuthenticator);
  };

  render() {
    return (
      <ScreenTemplate
        // @ts-ignore
        header={<Header navigation={this.props.navigation} isBackArrow title={i18n.authenticators.add.title} />}
        footer={
          <>
            <Button onPress={this.confirmCreateAuthenticator} title={i18n._.confirm} disabled={this.canSubmit()} />
            <FlatButton
              onPress={this.navigateToImport}
              containerStyle={styles.importButtonContainer}
              title={i18n.authenticators.import.title}
            />
          </>
        }
      >
        <Text style={styles.subtitle}>{i18n.authenticators.add.subtitle}</Text>
        <Text style={styles.description}>{i18n.authenticators.add.description}</Text>
        <InputItem
          error={this.validationError}
          setValue={this.setLabel}
          label={i18n.wallets.add.inputLabel}
          maxLength={maxWalletNameLength}
        />
      </ScreenTemplate>
    );
  }
}

const mapStateToProps = (state: ApplicationState): MapStateProps => ({
  authenticators: selectors.list(state),
});

const mapDispatchToProps: ActionProps = {
  createAuthenticator: actions.createAuthenticator,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAuthenticatorScreen);

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 12,
    marginBottom: 18,
    ...typography.headline4,
    textAlign: 'center',
  },
  description: {
    marginBottom: 14,
    color: palette.textGrey,
    ...typography.caption,
    textAlign: 'center',
  },
  importButtonContainer: {
    marginTop: 12,
  },
});

import { by, element, waitFor } from 'detox';

import actions from '../../actions';
import { BasicWalletType, WalletType } from '../../types';
import ConfirmSeedScreen from '../common/ConfirmSeedScreen';
import MessageScreen from '../common/MessageScreen';
import ScanQrCodeScreen from '../common/ScanQrCodeScreen';

const Wallets = () => {
  const AddNewWallet = () => {
    const CreateScreen = () => ({
      nameInput: element(by.id('create-wallet-name-input')),
      nameValidationError: element(by.id('create-wallet-name-input-validation-error')),

      walletTypeRadios: {
        [WalletType.KEY_3]: element(by.id('create-3-key-vault-radio')),
        [WalletType.KEY_2]: element(by.id('create-2-key-vault-radio')),
        [WalletType.S_HD_P2SH]: element(by.id('create-hd-p2sh-radio')),
        [WalletType.S_P2SH]: element(by.id('create-segwit-p2sh-radio')),
        [WalletType.S_HD_SEGWIT]: element(by.id('create-hd-segwit-p2sh-radio')),
      },

      createWalletButton: element(by.id('creates-wallet-button')),
      importWalletButton: element(by.id('imports-wallet-button')),

      async typeName(value: string) {
        await actions.typeText(this.nameInput, value, { closeKeyboard: true });
      },

      async chooseType(type: WalletType) {
        // Note: For some reasons it's required to tap multiple times, it seems keyboard is "opened in headless" or whatever
        await actions.tap(this.walletTypeRadios[type]);
      },

      async tapOnCreateButton() {
        await actions.tap(this.createWalletButton);
      },

      async tapOnImportButton() {
        await actions.tap(this.importWalletButton);
      },
    });

    const AddFastKeyScreen = () => ({
      scanQrCodeButton: element(by.id('scan-public-key-code-button')),

      async tapScanOnQrCode() {
        await actions.tap(this.scanQrCodeButton);
      },
    });

    const AddCancelKeyScreen = () => ({
      scanQrCodeButton: element(by.id('scan-public-key-code-button')),

      async tapScanOnQrCode() {
        await actions.tap(this.scanQrCodeButton);
      },
    });

    const SeedScreen = () => ({
      closeButton: element(by.id('create-wallet-close-button')),
      mnemonic: element(by.id('create-wallet-mnemonic')),
      mnemonicWord: (index: number) => element(by.id(`mnemonic-word-${index}`)),

      async tapOnCloseButton() {
        await actions.tap(this.closeButton);
      },

      async waitUntilDisplayed(timeout = 120 * 1000) {
        await waitFor(this.mnemonic)
          .toBeVisible()
          .withTimeout(timeout);
      },

      async getSeed() {
        const getWord = (index: number) => actions.getElementsText(this.mnemonicWord(index));
        const indexes = [...Array(12).keys()];
        const seed = await Promise.all(indexes.map(getWord));
        const removedKeys = seed.map(s => s.match(/[a-z]+/)!.toString());

        return removedKeys;
      },
    });

    return {
      createScreen: CreateScreen(),
      addFastKeyScreen: AddFastKeyScreen(),
      addCancelKeyScreen: AddCancelKeyScreen(),
      scanQrCodeScreen: ScanQrCodeScreen(),
      loadingScreen: MessageScreen('processingState'),
      seedScreen: SeedScreen(),
      confirmSeedScreen: ConfirmSeedScreen(),
      successScreen: MessageScreen('success'),
    };
  };

  const ImportWallet = () => {
    const ChooseWalletTypeScreen = () => ({
      walletTypeRadios: {
        [WalletType.KEY_3]: element(by.id('import-3-key-vault-radio')),
        [WalletType.KEY_2]: element(by.id('import-2-key-vault-radio')),
        [WalletType.S_HD_P2SH]: element(by.id('import-standard-wallet-radio')),
      },
      proceedButton: element(by.id('confirm-import-button')),

      async chooseType(type: BasicWalletType) {
        await actions.tap(this.walletTypeRadios[type]);
      },

      async tapOnProceedButton() {
        await actions.tap(this.proceedButton);
      },
    });

    const ImportScreen = () => ({
      nameInput: element(by.id('import-wallet-name')),
      nameValidationError: element(by.id('import-wallet-name-validation-error')),
      seedPhraseInput: element(by.id('import-wallet-seed-phrase-input')),
      seedPhraseValidationError: element(by.id('import-wallet-seed-phrase-input-validation-error')),
      submitButton: element(by.id('submit-import-wallet-button')),
      scanQrButton: element(by.id('scan-import-wallet-qr-code-button')),

      async typeName(value: string) {
        await actions.typeText(this.nameInput, value, { closeKeyboard: true });
      },

      async typeSeedPhrase(value: string) {
        await actions.typeText(this.seedPhraseInput, value, { closeKeyboard: true });
      },

      /** Pastes the whole string without typing. Use only during non-user behaviour testing. */
      async pasteSeedPhrase(value: string) {
        await actions.replaceText(this.seedPhraseInput, value, { closeKeyboard: true });
      },

      async submit() {
        await actions.tap(this.submitButton);
      },

      async tapScanOnQrCode() {
        await actions.tap(this.scanQrButton);
      },
    });

    const AddFastKeyScreen = () => ({
      scanQrCodeButton: element(by.id('scan-public-key-code-button')),

      async tapScanOnQrCode() {
        await actions.tap(this.scanQrCodeButton);
      },
    });

    const AddCancelKeyScreen = () => ({
      scanQrCodeButton: element(by.id('scan-public-key-code-button')),

      async tapScanOnQrCode() {
        await actions.tap(this.scanQrCodeButton);
      },
    });

    return {
      chooseWalletTypeScreen: ChooseWalletTypeScreen(),
      importScreen: ImportScreen(),
      addFastKeyScreen: AddFastKeyScreen(),
      addCancelKeyScreen: AddCancelKeyScreen(),
      scanQrCodeScreen: ScanQrCodeScreen(),
      loadingScreen: MessageScreen('processingState'),
      successScreen: MessageScreen('success'),
    };
  };

  const subscribeToEmailNotifications = {
    getNotificationsScreen: {
      yesButton: element(by.id('confirm-button')),
      noButton: element(by.id('cancel-button')),

      async tapOnYes() {
        await actions.tap(this.yesButton);
      },

      async tapOnNo() {
        await actions.tap(this.noButton);
      },
    },

    verifyActionScreen: {
      pincodeInput: element(by.id('verify-action-code-input')),

      submitButton: element(by.id('submit-verify-action-code-button')),
      resendButton: element(by.id('resend-verify-action-code-button')),

      async typeCode(value: string) {
        await actions.typeText(this.pincodeInput, value);
      },

      async submit() {
        await actions.tap(this.submitButton);
      },

      async tapOnResendButton() {
        await actions.tap(this.resendButton);
      },
    },

    successScreen: MessageScreen('success'),
  };

  return {
    addNewWallet: AddNewWallet(),
    importWallet: ImportWallet(),
    subscribeToEmailNotifications,
    scanQrCodeScreen: ScanQrCodeScreen(),
  };
};

export default Wallets;

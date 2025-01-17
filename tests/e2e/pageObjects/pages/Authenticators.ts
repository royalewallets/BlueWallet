import { by, element, waitFor } from 'detox';

import actions from '../../actions';
import DeleteScreen from '../common/DeleteScreen';
import MessageScreen from '../common/MessageScreen';

const Authenticators = () => {
  const DashboardScreen = () => ({
    noAuthenticatorsIcon: element(by.id('no-authenticators-icon')),
    addButton: element(by.id('create-authenticator-button')),

    async tapOnAddButton() {
      await actions.tap(this.addButton);
    },

    async tapOnAuthenticator(name: string) {
      const authenticator = element(by.id(`authenticator-${name}`));

      await actions.tap(authenticator);
    },
  });

  const AddNewAuthenticator = () => {
    const CreateScreen = () => ({
      nameInput: element(by.id('authenticator-name')),
      nameValidationError: element(by.id('authenticator-name-validation-error')),
      submitButton: element(by.id('submit-authenticator-name')),
      importButton: element(by.id('import-authenticator')),

      async typeName(value: string) {
        await actions.typeText(this.nameInput, value, { closeKeyboard: true });
      },

      async submit() {
        await actions.tap(this.submitButton);
      },

      async tapOnImportButton() {
        await actions.tap(this.importButton);
      },
    });

    const PublicKeyScreen = () => ({
      shareButton: element(by.id('share-public-key-button')),
      proceedButton: element(by.id('public-key-proceed-button')),

      async tapOnShareButton() {
        await actions.tap(this.shareButton);
      },

      async proceed() {
        await actions.tap(this.proceedButton);
      },
    });

    const SeedPhraseScreen = () => ({
      proceedButton: element(by.id('seed-phrase-proceed-button')),
      mnemonic: element(by.id('authenticator-mnemonic')),

      async proceed() {
        await actions.tap(this.proceedButton);
      },

      async waitUntilDisplayed(timeout = 20 * 1000) {
        waitFor(this.mnemonic)
          .toBeVisible()
          .withTimeout(timeout);
      },
    });

    const ImportScreen = () => ({
      nameInput: element(by.id('import-authenticator-name')),
      nameValidationError: element(by.id('import-authenticator-name-validation-error')),
      seedPhraseInput: element(by.id('import-authenticator-seed-phrase')),
      seedPhraseValidationError: element(by.id('import-authenticator-seed-phrase-validation-error')),
      submitButton: element(by.id('submit-import-authenticator-name')),
      scanQrButton: element(by.id('scan-import-authenticator-qr-code')),

      async typeName(value: string) {
        await actions.typeText(this.nameInput, value);
      },

      async typeSeedPhrase(value: string) {
        await actions.typeText(this.seedPhraseInput, value);
      },

      async submit() {
        await actions.tap(this.submitButton);
      },

      async tapScanOnQrCode() {
        await actions.tap(this.scanQrButton);
      },
    });

    return {
      createScreen: CreateScreen(),
      publicKeyScreen: PublicKeyScreen(),
      loadingScreen: MessageScreen('processingState'),
      seedPhraseScreen: SeedPhraseScreen(),
      importScreen: ImportScreen(),
      importSuccessScreen: MessageScreen('success'),
    };
  };

  const Details = () => {
    const DetailsScreen = () => ({
      scrollView: element(by.id('authenticator-details-screen')),

      authenticatorName: element(by.id('authenticator-name')),
      nameInput: element(by.id('rename-authenticator')),
      shareButton: element(by.id('share-public-key-button')),
      deleteButton: element(by.id('delete-authenticator')),

      async changeName(value: string) {
        await actions.typeText(this.nameInput, value, { replace: true });
      },

      async tapOnShareButton() {
        await actions.tap(this.shareButton);
      },

      async tapOnDeleteButton() {
        await actions.tap(this.deleteButton);
      },
    });

    return {
      detailsScreen: DetailsScreen(),
      deleteScreen: DeleteScreen(),
      deleteSuccessScreen: MessageScreen('success'),
    };
  };

  return {
    dashboardScreen: DashboardScreen(),
    addNewAuthenticator: AddNewAuthenticator(),
    details: Details(),
  };
};

export default Authenticators;

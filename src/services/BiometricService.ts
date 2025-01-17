import ReactNativeBiometrics, { BiometryType } from 'react-native-biometrics';

import logger from '../../logger';

const i18n = require('../../loc');

type Biometry = BiometryType | undefined;

export default class BiometricService {
  static FaceID = ReactNativeBiometrics.FaceID;
  static TouchID = ReactNativeBiometrics.TouchID;
  static Biometrics = ReactNativeBiometrics.Biometrics;

  constructor() {
    this.setBiometricsAvailability();
  }

  biometryType: Biometry;

  setBiometricsAvailability = async () => {
    const biometricsResult = await ReactNativeBiometrics.isSensorAvailable();
    const { available, biometryType } = biometricsResult;

    if (!available) {
      this.biometryType = undefined;
    } else {
      this.biometryType = biometryType;
    }
  };

  unlockWithBiometrics = async () => {
    try {
      const checkResult = await ReactNativeBiometrics.simplePrompt({
        promptMessage: i18n.unlock.touchID,
        cancelButtonText: i18n.unlock.enter,
      });
      const { success } = checkResult;

      logger.info({
        message: 'cancelled by user',
        category: 'BiometricSerivce',
      });
      if (success) {
        return success;
      }
    } catch (e) {
      if (e instanceof Error) {
        logger.error({
          message: `cancelled by user: ${e.message}`,
          category: 'BiometricSerivce',
        });
      }
    }
  };

  deleteBiometrics = async () => {
    ReactNativeBiometrics.deleteKeys();
  };
}

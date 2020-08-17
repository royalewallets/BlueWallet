/* global it, describe, jasmine, afterAll, beforeAll */
const assert = require('assert');

// i18n is not loaded properly in crypto.ts if this is imported later
// eslint-disable-next-line import/order
const { mnemonicToKeyPair } = require('../crypto');

global.crypto = require('crypto'); // shall be used by tests under nodejs CLI, but not in RN environment

global.net = require('net');

// needed by Electrum client. For RN it is proviced in shim.js
// eslint-disable-next-line import/order
const BlueElectrum = require('../../BlueElectrum');

const i18n = require('../../loc');

afterAll(async () => {
  // after all tests we close socket so the test suite can actually terminate
  BlueElectrum.forceDisconnect();
  return new Promise(resolve => setTimeout(resolve, 10000)); // simple sleep to wait for all timeouts termination
});

beforeAll(async () => {
  // awaiting for Electrum to be connected. For RN Electrum would naturally connect
  // while app starts up, but for tests we need to wait for it
  await BlueElectrum.waitTillConnected();
});

describe('Utils crypto', () => {
  describe('mnemonicToKeyPair', () => {
    it('should convert properly mnemonic to keyPair', async () => {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 30 * 1000;

      const mnemonic = 'couple update that engine praise oyster index debate skate tunnel artefact minimum';
      const keyPair = await mnemonicToKeyPair(mnemonic);

      const { privateKey } = keyPair;

      assert.strictEqual(
        'ed9cfd005178d6ef80f0474b63a036d618266bd1fb8a7a744d52427dff458885',
        privateKey.toString('hex'),
      );
    });

    it('should throw error when mnemonic has too much words', async () => {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 30 * 1000;
      const mnemonic = 'print crystal program squirrel before fault cause face play inherit minor bean bean';
      try {
        await mnemonicToKeyPair(mnemonic);
      } catch (e) {
        expect(e.message).toBe(
          i18n.formatString(i18n.wallets.errors.invalidMnemonicWordsNumber, {
            receivedWordsNumber: 13,
            expectedWordsNumber: 12,
          }),
        );
      }
    });

    it('should throw error when mnemonic has word that doesnt has index', async () => {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 30 * 1000;
      const nonExistingWord = 'nonExistingWord';
      const mnemonic = `print ${nonExistingWord} program squirrel before fault cause face play inherit minor bean`;
      try {
        await mnemonicToKeyPair(mnemonic);
      } catch (e) {
        expect(e.message).toBe(
          i18n.formatString(i18n.wallets.errors.noIndexForWord, {
            word: nonExistingWord,
          }),
        );
      }
    });
  });
});

module.exports = {
  _: {
    languageCode: 'en',
    storage_is_encrypted: 'Your storage is encrypted. Password is required to decrypt it',
    enter_password: 'Enter password',
    bad_password: 'Bad password, try again',
    never: 'never',
    continue: 'Continue',
    ok: 'OK',
    click: 'Click',
    here: 'here',
    save: 'Save',
    confirm: 'Confirm',
    copy: 'Copy',
    copied: 'Copied!',
    or: 'or',
    delete: 'Delete',
    created: 'Created',
    invalid: 'Invalid',
    satoshi: 'Sat',
    next: 'Next',
  },
  tabNavigator: {
    wallets: 'Wallets',
    settings: 'Settings',
    addressBook: 'Address book',
    authenticators: 'Authenticators',
  },
  message: {
    somethingWentWrong: 'Something went wrong',
    somethingWentWrongWhileCreatingWallet:
      'Something went wrong while we were creating your wallet. Please return to Dashboard and try again.',
    success: 'Success',
    successfullWalletImport: 'Your wallet has been successfully imported. You can now return to Dashboard.',
    successfullWalletDelete: 'Your wallet has been successfully deleted. You can now return to Dashboard.',
    returnToDashboard: 'Return to Dashboard',
    returnToAuthenticators: 'Return to Authenticators',
    creatingWallet: 'Creating your wallet',
    creatingWalletDescription: 'Please be patient while we create your wallet. It may take a while.',
    creatingAuthenticator: 'Creating your authenticator',
    creatingAuthenticatorDescription: 'Please be patient while we create your authenticator. It may take a while.',
    importingAuthenticator: 'Importing your authenticator',
    importingAuthenticatorDescription: 'Please be patient while we import your authenticator. It may take a while.',
  },
  onboarding: {
    onboarding: 'Onboarding',
    pin: 'PIN',
    createPin: 'Create PIN',
    createNewPin: 'New PIN',
    createPassword: 'Create transaction password',
    createPinDescription:
      'Your PIN will be used to log in to the application. You can change it later in the Settings section.',
    confirmPin: 'Confirm PIN',
    confirmNewPin: 'Confirm new PIN',
    confirmPassword: 'Confirm transaction password',
    passwordDoesNotMatch: 'Password does not match. Please enter a valid password.',
    createPasswordDescription:
      'Your Transaction Password will be used to verify all of the transactions. You cannot change it later. Transaction Password must contain at least 8 alphanumerical characters.',
    changePin: 'Change PIN',
    currentPin: 'Current PIN',
    pinDoesNotMatch: 'PIN does not match. Please enter a valid PIN.',
    successDescription: 'Hooray! \n You have successfully created your PIN.',
    successDescriptionChangedPin: 'Hooray! \n You have successfully changed your PIN.',
    successButton: 'Go to Dashboard',
    successButtonChangedPin: 'Go back to Settings',
  },
  unlock: {
    title: 'Unlock',
    touchID: 'Touch ID for "Gold Wallet"',
    confirmButton: 'Confirm fingerprint to continue.',
    enter: 'Enter PIN',
  },
  unlockTransaction: {
    headerText: 'Confirm transaction',
    title: 'Confirm Transaction Password',
    description: 'Confirm Transaction Password in order to proceed the transaction.',
  },
  authenticators: {
    sign: {
      error: `None of the authenticators were able to sign the transaction`,
    },
    options: {
      title: 'Authenticator options',
      export: 'Export authenticator',
      pair: 'Pair authenticator',
      sectionTitle: 'General',
      delete: 'Delete authenticator',
    },
    pair: {
      title: 'Pair authenticator',
      pin: 'PIN',
      publicKey: 'Public Key',
      descPin: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      descPublicKey: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    import: {
      title: 'Import authenticator',
      success: 'Your authenticator has been successfully imported. You can now return to Authenticators.',
      subtitle: 'Import your authenticator',
      desc1: 'Please write your mnemonic in order to import your authenticator',
      desc2: 'scan QR code by clicking on “or scan QR code” below',
      textAreaPlaceholder: 'Mnemonic',
    },
    export: {
      title: 'Export authenticator',
    },
    delete: {
      title: 'Delete authenticator',
      subtitle: 'Delete your authenticator',
      success: 'Your authenticator has been successfully deleted. You can now return to Authenticators.',
    },
    list: {
      noAuthenticatorsDesc1: 'No authenticators to show. \n Tap',
      noAuthenticatorsDesc2: 'to add your first authenticator.',
      noAuthenticators: 'No Authenticators',
      scan: 'Scan',
      title: 'Bitcoin Vault authenticators',
    },
    add: {
      title: 'Add new authenticator',
      subtitle: 'Pair authenticator',
      successDescription:
        'Your authenticator has been created. Please take a moment to write down this mnemonic phrase on a piece of paper. It’s your backup. You can use it to restore this authenticator on other devices. The authenticator allows you to confirm Instant and Recovery transactions.',
      description:
        'Select the option to “create wallet” on Electrum Vault (desktop application). Follow the steps until you see a QR code. Scan it using “Scan” button below to continue',
      subdescription: 'import you authenticator by clicking on Import authenticator” below.',
    },
    enterPIN: {
      subtitle: 'Enter PIN',
      description: 'Please enter the following PIN into the Electrum Vault (desktop application).',
    },
  },
  wallets: {
    dashboard: {
      availableBalance: 'Available balance',
      title: 'Wallets',
      allWallets: 'All wallets',
      noWallets: 'No wallets',
      noWalletsDesc1: 'No wallets to show.',
      noWalletsDesc2: 'to add your first wallet.',
      send: 'Send',
      receive: 'Receive',
      recover: 'Recover',
      noTransactions: 'No transactions to show.',
    },
    walletModal: {
      btcv: 'BTCV',
      wallets: 'Wallets',
    },
    importWallet: {
      title: 'Import your wallet',
      header: 'Import wallet',
      subtitle:
        "Write here your mnemonic, private key, WIF or anything you've got. GoldWallet will do its best to guess the correct format and import you wallet.",
      placeholder: 'Mnemonic, private key, WIF',
      import: 'Import',
      scanQrCode: 'or scan QR code',
      walletInUseValidationError: 'Wallet is already in use. Please enter a valid wallet.',
      chooseTypeDescription: 'Please choose type of the wallet which you want to import.',
      importARDescription1: 'Please write your mnemonic in order to import your wallet',
      importARDescription2: 'scan QR code by clicking on “or scan QR code” below',
      scanWalletAddress: 'Scan wallet address',
      scanWalletAddressDescription: 'Scan the Public Address QR code to start the integration with GoldWallet.',
      scanPublicKey: 'Scan Public Key',
      scanPublicKeyDescription: "Please scan your wallet's Public Addres QR code to integrate with the GoldWallet.",
    },
    exportWallet: {
      title: 'Mnemonic phrase',
      header: 'Export wallet',
    },
    exportWalletXpub: {
      header: 'Wallet XPUB',
    },
    deleteWallet: {
      title: 'Delete your wallet',
      header: 'Delete wallet',
      description1: 'Are you sure you want to delete',
      description2: "? You can't undone it.",
      no: 'No',
      yes: 'Yes',
    },
    wallet: {
      none: 'None',
      latest: 'Latest transaction',
      pendingBalance: 'Pending balance',
    },
    add: {
      failed: 'Failed to create wallet',
      title: 'Add new wallet',
      subtitle: 'Name your wallet',
      description: 'Please enter name for your new wallet.',
      inputLabel: 'Name',
      addWalletButton: 'Add new wallet',
      importWalletButton: 'Import wallet',
      walletType: 'Wallet type',
      advancedOptions: 'Advanced options',
      multipleAddresses: 'It contains a tree of P2SH addresses generated from a single 24-word seed',
      singleAddress: 'It contains a single P2SH address',
      segwidAddress: 'It contains a tree of native segwit addresses, generated from a single 24-word seed',
      ar: 'It can make Alert & Recovey transactions but lacks Instant transactions',
      air: 'It can make Alert, Instant and Recovery transactions',
      legacyTitle: 'Legacy',
      legacyHDP2SHTitle: 'Legacy HD P2SH',
      legacyP2SHTitle: 'Legacy P2SH',
      legacyHDSegWitTitle: 'Legacy HD SegWit',
      legacy: 'It can make default type of transactions',
      legacyHDP2SH: 'It contains a tree of P2SH addresses generated from a single 24-word seed',
      LegacyP2SH: 'It contains a single P2SH address',
      LegacyHDSegWit: 'It contains a tree of native segwit addresses, generated from a single 24-word seed',
      publicKeyError: 'Provided public key is invalid',
    },
    publicKey: {
      recoverySubtitle: 'Integrate Recovery Key',
      recoveryDescription:
        'Go to the Web Key Generator on a separate device and use this app to scan the Recovery Key’s generated QR code.',
      instantSubtitle: 'Integrate Instant Key',
      instantDescription: `Go to the Web Key Generator on a separate device and use this app to scan the Instant Key's generated QR code.`,
      scan: 'Scan',
    },
    addSuccess: {
      title: 'Add new wallet',
      subtitle: 'Success',
      description:
        'Your wallet has been created. Please take a moment to write down this mnemonic phrase on a piece of paper. It’s your backup. You can use it to restore the wallet on other devices.',
      okButton: 'OK, I wrote this down!',
    },
    details: {
      edit: 'Edit',
      latestTransaction: 'Latest transaction',
      typeLabel: 'Type',
      nameLabel: 'Name',
      exportWallet: 'Export wallet',
      showWalletXPUB: 'Show wallet XPUB',
      deleteWallet: 'Delete wallet',
      nameEdit: 'Edit name',
    },
    export: {
      title: 'wallet export',
    },
    import: {
      title: 'import',
      explanation:
        "Write here your mnemonic, private key, WIF, or anything you've got. GoldWallet will do its best to guess the correct format and import your wallet",
      imported: 'Imported',
      error: 'Failed to import. Please, make sure that the provided data is valid.',
      success: 'Success',
      do_import: 'Import',
      scan_qr: 'or scan QR code instead?',
    },
    scanQrWif: {
      go_back: 'Go Back',
      cancel: 'Cancel',
      decoding: 'Decoding',
      input_password: 'Input password',
      password_explain: 'This is BIP38 encrypted private key',
      bad_password: 'Bad password',
      wallet_already_exists: 'Such wallet already exists',
      bad_wif: 'Bad WIF',
      imported_wif: 'Imported WIF',
      with_address: 'with address',
      imported_segwit: 'Imported SegWit',
      imported_legacy: 'Imported Legacy',
      imported_watchonly: 'Imported Watch-only',
    },
    errors: {
      invalidMnemonicWordsNumber: 'Provided {receivedWordsNumber} words expected {expectedWordsNumber}',
      noIndexForWord: `Couldn't find index for word: {word}`,
      invalidPrivateKey: 'Invalid private key',
      invalidPublicKey: 'Invalid public key',
      invalidMnemonic: 'Invalid mnemonic',
      invalidQrCode: 'Invalid QR code',
      invalidSign: `Couldn't sign transaction`,
      duplicatedPublicKey: 'The public key has already been added',
    },
  },
  transactions: {
    label: {
      pending: 'pending',
      recovered: 'recovered',
      done: 'done',
      cancelled: 'cancelled',
    },
    transactionTypeLabel: {
      alert: 'Alert',
      recovery: 'Recovery',
      instant: 'Instant',
      nonvault: 'Standard',
    },
    list: {
      conf: 'Confirmations',
    },
    details: {
      title: 'Transaction',
      detailTitle: 'Transaction details',
      transactionHex: 'Transaction hex',
      transactionHexDescription: 'This is transaction hex, signed and ready to be broadcast to the network',
      copyAndBoriadcast: 'Copy and broadcast later',
      transactionType: 'Transaction type',
      verify: 'Verify on coinb.in',
      amount: 'Amount',
      fee: 'Fee',
      transactioFee: 'Transaction fee',
      txSize: 'TX size',
      satoshiPerByte: 'Satoshi per byte',
      from: 'From',
      to: 'To',
      bytes: 'bytes',
      copy: 'Copy',
      walletType: 'Wallet type',
      noLabel: 'No label',
      details: 'Details',
      transactionId: 'Transaction ID',
      confirmations: 'confirmations',
      transactionDetails: 'Transaction details',
      viewInBlockRxplorer: 'View in block explorer',
      addNote: 'Add note',
      note: 'Note',
      inputs: 'Inputs',
      ouputs: 'Outputs',
      sendCoins: 'Send coins',
      addToAddressBook: 'Add to Address book',
      timePending: 'Time pending',
    },
  },
  send: {
    header: 'Send coins',
    recovery: {
      recover: 'Recover',
      useWalletAddress: 'Use address of this wallet',
      confirmSeed: 'Confirm with Recovery Seed',
      confirmSeedDesc: 'Please enter your Recovery Seed in order to proceed.',
      confirmFirstSeed: 'Confirm with first Recovery Seed',
      confirmFirstSeedDesc: 'Please enter your first Recovery Seed in order to proceed.',
      confirmSecondSeed: 'Confirm with second Recovery Seed',
      confirmSecondSeedDesc: 'Please enter your second Recovery Seed in order to proceed.',
    },
    transaction: {
      instant: 'Instant',
      instantDesc: 'This method allows you to send immediate transfers. Use with extreme caution.',
      alert: 'Alert',
      alertDesc:
        'This transaction waits 144 blocks or ca. 24 hours to be confirmed. Within this time you can recover your coins.',
      type: 'Transaction type',
      scanInstantKeyTitle: 'Scan Instant Key',
      scanInstantKeyDesc: 'Scan the Instant Key QR code to start the transaction.',
      lightningError:
        'This address appears to be for a Lightning invoice. Please, go to your Lightning wallet in order to make a payment for this invoice.',
      watchOnlyError: 'Watch only wallets cannot send transactions',
    },
    success: {
      title: 'Success',
      description: 'Hooray! You have successfully finished the transaction.',
      done: 'Done',
      return: 'Return to Dashboard',
    },
    details: {
      title: 'create transaction',
      amount_field_is_not_valid: 'Amount field is not valid',
      fee_field_is_not_valid: 'Fee field is not valid',
      address_field_is_not_valid: 'Address field is not valid',
      create_tx_error: 'There was an error creating the transaction. Please, make sure the address is valid.',
      address: 'address',
      amount_placeholder: 'amount to send (in BTCV)',
      fee_placeholder: 'plus transaction fee (in BTCV)',
      note_placeholder: 'note to self',
      cancel: 'Cancel',
      scan: 'Scan',
      send: 'Send',
      next: 'Next',
      note: 'Note (optional)',
      to: 'to',
      feeUnit: 'Sat/B',
      fee: 'Fee:',
      create: 'Create Invoice',
      remaining_balance: 'Remaining balance',
      total_exceeds_balance: 'The sending amount exceeds the available balance.',
    },
    confirm: {
      sendNow: 'Send now',
      availableBalance: 'Available balance after transaction',
      pendingBalance: 'Pending balance after transaction',
    },
    create: {
      amount: 'Amount',
      fee: 'Fee',
      setTransactionFee: 'Set a transaction fee',
      headerText:
        'When there is a large number of pending transaction on the network (>1500), the higher fee will result in your transaction being processed faster. The typical values are 1-500 sat/b',
    },
  },
  receive: {
    header: 'Receive coins',
    details: {
      amount: 'Amount',
      share: 'Share',
      receiveWithAmount: 'Receive with amount',
    },
  },
  settings: {
    language: 'Language',
    general: 'General',
    security: 'Security',
    about: 'About',
    electrumServer: 'Electrum server',
    advancedOptions: 'Advanced options',
    changePin: 'Change PIN',
    fingerprintLogin: 'Fingerprint login',
    aboutUs: 'About us',
    header: 'Settings',
    notSupportedFingerPrint: 'Your device does not support fingerprint',
    TouchID: 'Allow fingerprint',
    FaceID: 'Allow FaceID',
    Biometrics: 'Allow biometrics',
  },
  aboutUs: {
    header: 'About us',
    releaseNotes: 'Release notes',
    runSelfTest: 'Run self test',
    buildWithAwesome: 'Build with awesome:',
    rateGoldWallet: 'Rate GoldWallet',
    goToOurGithub: 'Go to our Github',
    alwaysBackupYourKeys: 'Always backup your keys',
    title: 'Gold wallet is a free and open source Bitcoin Vault wallet. Licensed MIT.',
  },
  electrumServer: {
    header: 'Electrum server',
    title: 'Change electrum server',
    description:
      'You can change the address of the server your application will connect to. Default address is recommended.',
    save: 'Save',
    useDefault: 'Use default',
    host: 'host',
    port: 'port',
    successfullSave: 'Your changes have been saved successfully. Restart may be required for changes to take effect.',
    connectionError: "Can't connect to provided Electrum server",
  },
  advancedOptions: {
    title: 'Configure advanced options',
    description:
      'Enabling Advanced options will allow you to choose from wallet types listed below: \nP2SH, HD P2SH, HD segwit.',
  },
  selectLanguage: {
    header: 'Language',
    restartInfo: 'When selecting a new language, restarting GoldWallet may be required for the change to take effect',
    confirmation: 'Confirmation',
    confirm: 'Confirm',
    alertDescription: 'Select language and restart the application?',
    cancel: 'Cancel',
  },
  contactList: {
    cancel: 'Cancel',
    search: 'Search',
    screenTitle: 'Address book',
    noContacts: 'No contacts',
    noContactsDesc1: 'No contacts to show. \n Click',
    noContactsDesc2: 'to add your first contact.',
    noResults: 'No results for',
  },
  contactCreate: {
    screenTitle: 'Add new contact',
    subtitle: 'New contact',
    description: 'Please enter name and address\nfor your new contact.',
    nameLabel: 'Name',
    addressLabel: 'Address',
    buttonLabel: 'Add new contact',
    successTitle: 'Success',
    successDescription: 'Hooray! You have successfully\nadded your contact.',
    successButton: 'Return to Address book',
  },
  contactDetails: {
    nameLabel: 'Name',
    addressLabel: 'Address',
    editName: 'Edit name',
    editAddress: 'Edit address',
    sendCoinsButton: 'Send coins',
    showQRCodeButton: 'Show QR code',
    deleteButton: 'Delete contact',
    share: 'Share',
  },
  contactDelete: {
    title: 'Delete your contact',
    header: 'Delete contact',
    description1: 'Are you sure you want to delete',
    description2: "?\nYou can't undone it.",
    no: 'No',
    yes: 'Yes',
    success: 'Success',
    successDescription: 'Your contact has been successfully deleted.\nYou can now return to Address book.',
    successButton: 'Return to Address book',
  },
  scanQrCode: {
    permissionTitle: 'Permission to use camera',
    permissionMessage: 'We need your permission to use your camera',
    ok: 'Ok',
    cancel: 'Cancel',
  },
  filterTransactions: {
    header: 'Filter transactions',
    receive: 'Receive',
    send: 'Send',
    filter: 'Filter',
    to: 'To',
    toAmount: 'To amount',
    toDate: 'To date',
    from: 'From',
    fromAmount: 'From amount',
    fromDate: 'From date',
    clearFilters: 'Clear filters',
    transactionType: 'Transaction type',
    transactionStatus: 'Transaction status',
    status: {
      pending: 'Pending',
      recovered: 'Recovered',
      done: 'Done',
      cancelled: 'Cancelled',
    },
  },
  calendar: {
    monthNames: {
      january: 'January',
      february: 'February',
      march: 'March',
      april: 'April',
      may: 'May',
      june: 'June',
      july: 'July',
      august: 'August',
      september: 'September',
      october: 'October',
      november: 'November',
      december: 'December',
    },
    monthNamesShort: {
      january: 'Jan',
      february: 'Feb',
      march: 'Mar',
      april: 'Apr',
      may: 'May',
      june: 'Jun',
      july: 'Hul',
      august: 'Aug',
      september: 'Sep',
      october: 'Oct',
      november: 'Nov',
      december: 'Dec',
    },
    dayNames: {
      sunday: 'Sunday',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
    },
    dayNamesShort: {
      sunday: 'Sun',
      monday: 'Mon',
      tuesday: 'Tue',
      wednesday: 'Wed',
      thursday: 'Thu',
      friday: 'Fri',
      saturday: 'Sat',
    },
    today: 'Today',
  },
};

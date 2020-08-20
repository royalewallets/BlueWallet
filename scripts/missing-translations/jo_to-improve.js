const jo = {
  _: {
    languageCode: 'ja',
    storage_is_encrypted: 'ストレージは暗号化されています。それを復号化するためにはパスワードが必要です。',
    enter_password: 'パスワードの入力',
    bad_password: 'パスワードが間違っています。再度お試しください',
    never: '一度もない',
    continue: '続行する',
    ok: 'OK',
    click: 'クリック',
    here: 'こちら',
    save: '保存',
    confirm: '確認',
    copy: 'コピー',
    copied: 'コピーされました！',
    or: 'TRANSLATION NEEDED | ENG: or',
    delete: 'TRANSLATION NEEDED | ENG: Delete',
    created: 'TRANSLATION NEEDED | ENG: Created',
    invalid: 'TRANSLATION NEEDED | ENG: Invalid',
    satoshi: 'TRANSLATION NEEDED | ENG: Sat',
    next: 'TRANSLATION NEEDED | ENG: Next',
  },
  tabNavigator: {
    dashboard: 'ダッシュボード',
    settings: '設定',
    addressBook: 'アドレス帳',
    wallets: 'TRANSLATION NEEDED | ENG: Wallets',
    authenticators: 'TRANSLATION NEEDED | ENG: Authenticators',
  },
  message: {
    somethingWentWrong: '問題が発生しました',
    somethingWentWrongWhileCreatingWallet: 'ウォレットの作成中に問題が発生しましたダッシュボードに戻って、再度お試しください。',
    success: '成功',
    successfullWalletImport: 'ウォレットは適切にインポートされました。現在ダッシュボードに戻ることができます。',
    successfullWalletDelete: 'ウォレットは適切に削除されました。現在ダッシュボードに戻ることができます。',
    returnToDashboard: 'ダッシュボードに戻る',
    creatingWallet: 'ウォレットの作成',
    creatingWalletDescription: 'ウォレットを作成している間お待ちください。しばらく時間がかかる場合があります。',
    wrongMnemonic: 'TRANSLATION NEEDED | ENG: Wrong mnemonic',
    wrongMnemonicDesc: 'TRANSLATION NEEDED | ENG: Your mnemonic does not match any supported wallet. You are trying to import an invalid mnemonic or wallet that has never been used',
    returnToWalletChoose: 'TRANSLATION NEEDED | ENG: Return to the wallet type selection',
    returnToWalletImport: 'TRANSLATION NEEDED | ENG: Return to wallet import',
    generateAddressesError: 'TRANSLATION NEEDED | ENG: Couldn`t generate addresses',
    noTransactions: 'TRANSLATION NEEDED | ENG: No transactions found on the wallet',
    noTransactionsDesc: 'TRANSLATION NEEDED | ENG: You are probably trying to import a wallet that has never been used',
    returnToAuthenticators: 'TRANSLATION NEEDED | ENG: Return to Authenticators',
    creatingAuthenticator: 'TRANSLATION NEEDED | ENG: Creating your authenticator',
    creatingAuthenticatorDescription: 'TRANSLATION NEEDED | ENG: Please be patient while we create your authenticator. It may take a while.',
    importingAuthenticator: 'TRANSLATION NEEDED | ENG: Importing your authenticator',
    importingAuthenticatorDescription: 'TRANSLATION NEEDED | ENG: Please be patient while we import your authenticator. It may take a while.',
  },
  onboarding: {
    onboarding: '設定',
    pin: 'PINコード',
    createPin: 'PINコードの生成',
    createNewPin: '新しいPINコード',
    createPassword: 'トランザクションパスワードの生成',
    createPinDescription: 'PINコードはアプリケーションのログインに利用されます。設定メニューから変更可能です。',
    confirmPin: 'PINコードの確認',
    confirmNewPin: '新しいPINコードの確認',
    confirmPassword: 'トランザクションパスワードの確認',
    passwordDoesNotMatch: 'パスワードが一致しません。有効なパスワードを入力してください。',
    createPasswordDescription: 'すべてのトランザクションを確認するため、トランザクションパスワードが利用されます。設定されたパスワードの変更は不可能です。トランザクションのパスワードは8桁以上の英文字と数字で構成しなければなりません。',
    changePin: 'PINコードの変更',
    currentPin: '現在のPINコード',
    pinDoesNotMatch: 'パスワードが一致しません。有効なパスワードを入力してください。',
    successDescription: 'おめでとうございます！\nPINコード生成が正常に完了されました。',
    successDescriptionChangedPin: 'おめでとうございます！\nPINコード変更が正常に完了されました。',
    successButton: 'ダッシュボードに戻る',
    successButtonChangedPin: '設定に戻る',
  },
  unlock: {
    title: '解除',
    touchID: '\"ゴールドウォレット\" のTouch ID',
    confirmButton: '指紋認証を完了してください。',
    enter: 'PINコードの入力',
  },
  unlockTransaction: {
    headerText: 'トランザクションの確認',
    title: 'トランザクションパスワードの確認',
    description: 'トランザクションパスワードを確認し、トランザクションを続ける。',
  },
  wallets: {
    dashboard: {
      title: 'ウォレット',
      allWallets: 'すべてのウォレット',
      noWallets: 'ウォレットなし',
      noWalletsDesc1: '表示するウォレットがありません。',
      noWalletsDesc2: '最初のウォレットに追加する。',
      send: 'コインを送金する',
      receive: 'コインを受け取る',
      noTransactions: '表示するトランザクションがありません。',
      availableBalance: 'TRANSLATION NEEDED | ENG: Available balance',
      recover: 'TRANSLATION NEEDED | ENG: Recover',
    },
    walletModal: {
      btcv: 'BTCV',
      wallets: 'ウォレット',
    },
    importWallet: {
      title: 'ご使用のウォレットをインポートする',
      header: 'ウォレットのインポート',
      subtitle: 'ここにユーザーのニーモニック、秘密鍵、WIF、または取得したその他のものを入力してください。GoldWalletでは、最善を尽くして、正しいフォーマットを推測し、ウォレットをインポートします。',
      placeholder: 'ニーモニック、秘密鍵、WIF',
      import: 'QRコードをインポート',
      scanQrCode: 'またはスキャン',
      walletInUseValidationError: 'ウォレットはすでに使用されています。有効なウォレットを入力してください。',
      chooseTypeDescription: 'TRANSLATION NEEDED | ENG: Please choose type of the wallet which you want to import.',
      importARDescription1: 'TRANSLATION NEEDED | ENG: Please write your mnemonic in order to import your wallet',
      importARDescription2: 'TRANSLATION NEEDED | ENG: scan QR code by clicking on “or scan QR code” below',
      scanWalletAddress: 'TRANSLATION NEEDED | ENG: Scan wallet address',
      scanWalletAddressDescription: 'TRANSLATION NEEDED | ENG: Scan the Public Address QR code to start the integration with GoldWallet.',
      scanPublicKey: 'TRANSLATION NEEDED | ENG: Scan Public Key',
      scanPublicKeyDescription: 'TRANSLATION NEEDED | ENG: Please scan your wallet's Public Addres QR code to integrate with the GoldWallet.',
      unsupportedElectrumVaultMnemonic: 'TRANSLATION NEEDED | ENG: This seed is from Electrum Vault and is currently not supported. Will be supported in the near future.',
    },
    exportWallet: {
      title: 'ニーモニックのフレーズ',
      header: 'ウォレットのエクスポート',
    },
    exportWalletXpub: {
      header: 'ウォレットXPUB',
    },
    deleteWallet: {
      title: 'ご使用のウォレットを削除する',
      header: 'ウォレットの削除',
      description1: '削除してもよろしいですか',
      description2: '？それを取り消すことはできません。',
      no: 'いいえ',
      yes: 'はい',
    },
    wallet: {
      none: 'なし',
      latest: '最新のトランザクション',
      pendingBalance: 'TRANSLATION NEEDED | ENG: Pending balance',
    },
    add: {
      title: '新しいウォレットの追加',
      subtitle: 'ウォレットに名前を付ける',
      description: '新しいウォレットの名前を入力してください。',
      inputLabel: '名前',
      addWalletButton: '新しいウォレットの追加',
      importWalletButton: 'ウォレットのインポート',
      advancedOptions: '高度なオプション',
      multipleAddresses: '複数のアドレス',
      singleAddress: '単一のアドレス',
      segwidAddress: '単一の24文字シードから生成されるsegwitアドレスのツリーを含めます。',
      failed: 'TRANSLATION NEEDED | ENG: Failed to create wallet',
      walletType: 'TRANSLATION NEEDED | ENG: Wallet type',
      ar: 'TRANSLATION NEEDED | ENG: It can make Alert & Recovery transactions but lacks Instant transactions',
      air: 'TRANSLATION NEEDED | ENG: It can make Alert, Instant and Recovery transactions',
      legacyTitle: 'TRANSLATION NEEDED | ENG: Legacy',
      legacyHDP2SHTitle: 'TRANSLATION NEEDED | ENG: Legacy HD P2SH',
      legacyP2SHTitle: 'TRANSLATION NEEDED | ENG: Legacy P2SH',
      legacyHDSegWitTitle: 'TRANSLATION NEEDED | ENG: Legacy HD SegWit',
      legacy: 'TRANSLATION NEEDED | ENG: It can make default type of transactions',
      legacyHDP2SH: 'TRANSLATION NEEDED | ENG: It contains a tree of P2SH addresses generated from a single 24-word seed',
      LegacyP2SH: 'TRANSLATION NEEDED | ENG: It contains a single P2SH address',
      LegacyHDSegWit: 'TRANSLATION NEEDED | ENG: It contains a tree of native segwit addresses, generated from a single 24-word seed',
      publicKeyError: 'TRANSLATION NEEDED | ENG: Provided public key is invalid',
    },
    addSuccess: {
      title: '新しいウォレットの追加',
      subtitle: '成功',
      description: 'ウォレットが作成されました。時間を取って、このニーモニックのフレーズを紙に書いてください。それはバックアップです。それを使用して、他のデバイスでウォレットをリストアすることができます。',
      okButton: 'OK。これを書きました！',
    },
    details: {
      edit: '編集',
      latestTransaction: '最新のトランザクション',
      typeLabel: '種類',
      nameLabel: '名前',
      exportWallet: 'ウォレットのエクスポート',
      showWalletXPUB: 'ウォレットXPUBを表示する',
      deleteWallet: 'ウォレットの削除',
      nameEdit: '名前の変更',
    },
    export: {
      title: 'ウォレットのエクスポート',
    },
    import: {
      title: 'インポート',
      explanation: 'ここにユーザーのニーモニック、秘密鍵、WIF、または取得したその他のものを入力してください。GoldWalletでは、最善を尽くして、正しいフォーマットを推測し、ウォレットをインポートします',
      imported: 'インポート済み',
      error: 'インポートできませんでした。提供されたデータが有効であることを確認してください。',
      success: '成功',
      do_import: '代わりにQRコードをインポート',
      scan_qr: 'またはスキャンしますか？',
    },
    scanQrWif: {
      go_back: '戻る',
      cancel: 'キャンセル',
      decoding: '復号',
      input_password: 'パスワードを入力する',
      password_explain: 'これはBIP38暗号化秘密鍵です',
      bad_password: '誤っているパスワード',
      wallet_already_exists: 'このウォレットはすでに存在しています',
      bad_wif: '誤っているWIF',
      imported_wif: 'インポート済みWIF',
      with_address: 'アドレスで',
      imported_segwit: 'インポート済みSegWit',
      imported_legacy: 'インポート済みLegacy',
      imported_watchonly: 'インポート済みWatch-only',
    },
    publicKey: {
      recoverySubtitle: 'TRANSLATION NEEDED | ENG: Integrate Recovery Key',
      recoveryDescription: 'TRANSLATION NEEDED | ENG: Go to the Web Key Generator on a separate device and use this app to scan the Recovery Key’s generated QR code.',
      instantSubtitle: 'TRANSLATION NEEDED | ENG: Integrate Instant Key',
      instantDescription: 'TRANSLATION NEEDED | ENG: Go to the Web Key Generator on a separate device and use this app to scan the Instant Key's generated QR code.',
      scan: 'TRANSLATION NEEDED | ENG: Scan',
    },
    errors: {
      invalidMnemonicWordsNumber: 'TRANSLATION NEEDED | ENG: Provided {receivedWordsNumber} words expected {expectedWordsNumber}',
      noIndexForWord: 'TRANSLATION NEEDED | ENG: Couldn't find index for word: {word}',
      invalidPrivateKey: 'TRANSLATION NEEDED | ENG: Invalid private key',
      invalidPublicKey: 'TRANSLATION NEEDED | ENG: Invalid public key',
      invalidMnemonic: 'TRANSLATION NEEDED | ENG: Invalid mnemonic',
      invalidQrCode: 'TRANSLATION NEEDED | ENG: Invalid QR code',
      invalidSign: 'TRANSLATION NEEDED | ENG: Couldn't sign transaction',
      duplicatedPublicKey: 'TRANSLATION NEEDED | ENG: The public key has already been added',
    },
  },
  transactions: {
    list: {
      conf: '確認',
    },
    details: {
      title: 'トランザクション',
      detailTitle: 'トランザクション詳細',
      transactionHex: 'トランザクションhex',
      transactionHexDescription: 'これは、署名済みで、ネットワークにブロードキャストする準備ができているトランザクションhexです',
      copyAndBoriadcast: '後ほどコピーおよびブロードキャスト',
      verify: 'coinb.inで確認',
      amount: '金額',
      fee: '料金',
      txSize: 'TXサイズ',
      satoshiPerByte: 'バイト当たりのSatoshi',
      from: '送信元',
      to: '送信先',
      bytes: 'バイト',
      copy: 'コピー',
      noLabel: 'ラベルなし',
      details: '詳細',
      transactionId: 'トランザクションID',
      confirmations: '確認',
      transactionDetails: 'トランザクション詳細',
      viewInBlockRxplorer: 'ブロックエクスプローラーの表示',
      addNote: 'メモの追加',
      note: 'メモ',
      inputs: '入力',
      ouputs: '出力',
      sendCoins: 'コインを送金する',
      transactionType: 'TRANSLATION NEEDED | ENG: Transaction type',
      transactioFee: 'TRANSLATION NEEDED | ENG: Transaction fee',
      walletType: 'TRANSLATION NEEDED | ENG: Wallet type',
      addToAddressBook: 'TRANSLATION NEEDED | ENG: Add to Address book',
      timePending: 'TRANSLATION NEEDED | ENG: Time pending',
    },
    label: {
      pending: 'TRANSLATION NEEDED | ENG: pending',
      recovered: 'TRANSLATION NEEDED | ENG: recovered',
      done: 'TRANSLATION NEEDED | ENG: done',
      cancelled: 'TRANSLATION NEEDED | ENG: cancelled',
    },
    transactionTypeLabel: {
      alert: 'TRANSLATION NEEDED | ENG: Alert',
      recovery: 'TRANSLATION NEEDED | ENG: Recovery',
      instant: 'TRANSLATION NEEDED | ENG: Instant',
      nonvault: 'TRANSLATION NEEDED | ENG: Standard',
    },
  },
  send: {
    header: 'コインを送金する',
    success: {
      title: '成功',
      description: '万歳！適切にトランザクションを終了しました。',
      done: '終了',
      return: 'ダッシュボードに戻る',
    },
    details: {
      title: 'トランザクションの作成',
      amount_field_is_not_valid: '金額フィールドが有効ではありません',
      fee_field_is_not_valid: '料金フィールドが有効ではありません',
      address_field_is_not_valid: 'アドレスフィールドが有効ではありません',
      create_tx_error: 'トランザクションの作成中にエラーがありました。アドレスが有効であることを確認してください。',
      address: 'アドレス',
      amount_placeholder: '（BTCVの）送信する金額',
      fee_placeholder: '（BTCVの）追加のトランザクション料金',
      note_placeholder: '自分のためのメモ',
      cancel: 'キャンセル',
      scan: 'スキャン',
      send: '送金',
      next: '次へ',
      note: 'メモ（オプション）',
      to: '送信先',
      feeUnit: 'Sat/B',
      fee: '料金：',
      create: 'インボイスの作成',
      remaining_balance: '残高',
      total_exceeds_balance: '送金する金額が利用可能な残高を上回っています。',
    },
    confirm: {
      sendNow: '今すぐ送金する',
      availableBalance: 'TRANSLATION NEEDED | ENG: Available balance after transaction',
      pendingBalance: 'TRANSLATION NEEDED | ENG: Pending balance after transaction',
    },
    create: {
      amount: '金額',
      fee: '料金',
      setTransactionFee: 'トランザクション料金の設定',
      headerText: 'ネットワークに多数の保留中のトランザクションがあるとき（1,500超）、より高い料金を支払うことにより、トランザクションの処理速度が早くなります。通常の金額は1～500 sat/bです',
    },
    recovery: {
      recover: 'TRANSLATION NEEDED | ENG: Recover',
      useWalletAddress: 'TRANSLATION NEEDED | ENG: Use address of this wallet',
      confirmSeed: 'TRANSLATION NEEDED | ENG: Confirm with Recovery Seed',
      confirmSeedDesc: 'TRANSLATION NEEDED | ENG: Please enter your Recovery Seed in order to proceed.',
      confirmFirstSeed: 'TRANSLATION NEEDED | ENG: Confirm with first Recovery Seed',
      confirmFirstSeedDesc: 'TRANSLATION NEEDED | ENG: Please enter your first Recovery Seed in order to proceed.',
      confirmSecondSeed: 'TRANSLATION NEEDED | ENG: Confirm with second Recovery Seed',
      confirmSecondSeedDesc: 'TRANSLATION NEEDED | ENG: Please enter your second Recovery Seed in order to proceed.',
    },
    transaction: {
      instant: 'TRANSLATION NEEDED | ENG: Instant',
      instantDesc: 'TRANSLATION NEEDED | ENG: This method allows you to send immediate transfers. Use with extreme caution.',
      alert: 'TRANSLATION NEEDED | ENG: Alert',
      alertDesc: 'TRANSLATION NEEDED | ENG: This transaction waits 144 blocks or ca. 24 hours to be confirmed. Within this time you can recover your coins.',
      type: 'TRANSLATION NEEDED | ENG: Transaction type',
      scanInstantKeyTitle: 'TRANSLATION NEEDED | ENG: Scan Instant Key',
      scanInstantKeyDesc: 'TRANSLATION NEEDED | ENG: Scan the Instant Key QR code to start the transaction.',
      lightningError: 'TRANSLATION NEEDED | ENG: This address appears to be for a Lightning invoice. Please, go to your Lightning wallet in order to make a payment for this invoice.',
      watchOnlyError: 'TRANSLATION NEEDED | ENG: Watch only wallets cannot send transactions',
    },
  },
  receive: {
    header: 'コインを受け取る',
    details: {
      amount: '金額',
      share: '共有する',
      receiveWithAmount: '金額とともに受け取る',
    },
  },
  settings: {
    language: '言語',
    general: '一般',
    security: 'セキュリティ',
    about: '情報',
    electrumServer: 'Electrumサーバー',
    advancedOptions: '高度なオプション',
    changePin: 'PINの変更',
    fingerprintLogin: '指紋でのログイン',
    aboutUs: '当社について',
    header: '設定',
    notSupportedFingerPrint: '該当デバイスはTouchIDをご利用いただけません。',
    TouchID: 'Touch IDを許可する',
    FaceID: 'Face IDを許可する',
    Biometrics: '生体認証を許可する',
  },
  aboutUs: {
    header: '当社について',
    releaseNotes: 'リリースノート',
    runSelfTest: 'セルフテストの実行',
    buildWithAwesome: '素晴らしいサービスを構築',
    rateGoldWallet: 'GoldWalletを評価する',
    goToOurGithub: '当社のGithubに進む',
    alwaysBackupYourKeys: '常に鍵をバックアップする',
    title: 'ゴールドウォレットは、Bitcoin Vaultウォレットのための無料のオープンソースです。ライセンス：MIT。',
  },
  electrumServer: {
    header: 'Electrumサーバー',
    title: 'Electrumサーバーの変更',
    description: 'アプリケーション連結のサーバー変更が可能です。基本的に提供されるアドレスのご利用をおすすめします。',
    save: '保存',
    useDefault: 'デフォルトを使用',
    host: 'ホスト',
    port: 'ポート',
    successfullSave: '変更は適切に保存されました。変更を有効にするために、再起動が必要な場合があります。',
    connectionError: '提供されたElectrumサーバーに接続できません',
  },
  advancedOptions: {
    title: '詳細設定',
    description: '詳細設定を活性化した場合、以下のウォレット設定が可能になります：P2SH, HD P2SH, HD segwit',
  },
  selectLanguage: {
    header: '言語',
    restartInfo: '新しい言語を選択したら、変更を有効にするために、GoldWalletの再起動が必要な場合があります',
    confirmation: '確認',
    confirm: '確認する',
    alertDescription: '言語を選択して、アプリケーションを再起動しますか？',
    cancel: 'キャンセル',
  },
  contactList: {
    cancel: 'キャンセル',
    search: '検索',
    screenTitle: 'アドレス帳',
    noContacts: '連絡先がありません',
    noContactsDesc1: '表示する連絡先がありません。 \nクリックして、',
    noContactsDesc2: '最初の連絡先を追加する。',
    noResults: '結果がありません',
  },
  contactCreate: {
    screenTitle: '新しい連絡先を追加する',
    subtitle: '新しい連絡先',
    description: '新しい連絡先の名前とアドレスを入力してください。',
    nameLabel: '名前',
    addressLabel: 'アドレス',
    buttonLabel: '新しい連絡先を追加する',
    successTitle: '成功',
    successDescription: '万歳！連絡先を適切に追加しました。',
    successButton: 'アドレス帳に戻る',
  },
  contactDetails: {
    nameLabel: '名前',
    addressLabel: 'アドレス',
    editName: '名前の変更',
    editAddress: 'アドレスの変更',
    sendCoinsButton: 'コインを送金する',
    showQRCodeButton: 'QRコードの表示',
    deleteButton: '連絡先の削除',
    share: '共有する',
  },
  contactDelete: {
    title: '連絡先を削除する',
    header: '連絡先の削除',
    description1: '削除してもよろしいですか',
    description2: '？\nそれを取り消すことはできません。',
    no: 'いいえ',
    yes: 'はい',
    success: '成功',
    successDescription: '連絡先は適切に削除されました。\nアドレス帳に戻ることができます。',
    successButton: 'アドレス帳に戻る',
  },
  scanQrCode: {
    permissionTitle: 'カメラを使用する許可',
    permissionMessage: 'カメラを使用する許可が必要です',
    ok: 'Ok',
    cancel: 'キャンセル',
  },
  filterTransactions: {
    header: 'トランザクション・フィルター',
    receive: '入金',
    send: '送金',
    filter: 'フィルター設定',
    to: '受領者',
    toAmount: '最大金額',
    toDate: '終了日',
    from: '送金者',
    fromAmount: '最小金額',
    fromDate: '開始日',
    clearFilters: 'フィルター解除',
    transactionType: 'TRANSLATION NEEDED | ENG: Transaction type',
    transactionStatus: 'TRANSLATION NEEDED | ENG: Transaction status',
    status: {
      pending: 'TRANSLATION NEEDED | ENG: Pending',
      recovered: 'TRANSLATION NEEDED | ENG: Recovered',
      done: 'TRANSLATION NEEDED | ENG: Done',
      cancelled: 'TRANSLATION NEEDED | ENG: Cancelled',
    },
  },
  authenticators: {
    sign: {
      error: 'TRANSLATION NEEDED | ENG: None of the authenticators were able to sign the transaction',
    },
    options: {
      title: 'TRANSLATION NEEDED | ENG: Authenticator options',
      export: 'TRANSLATION NEEDED | ENG: Export authenticator',
      pair: 'TRANSLATION NEEDED | ENG: Pair authenticator',
      sectionTitle: 'TRANSLATION NEEDED | ENG: General',
      delete: 'TRANSLATION NEEDED | ENG: Delete authenticator',
    },
    pair: {
      title: 'TRANSLATION NEEDED | ENG: Pair authenticator',
      pin: 'TRANSLATION NEEDED | ENG: PIN',
      publicKey: 'TRANSLATION NEEDED | ENG: Public Key',
      descPin: 'TRANSLATION NEEDED | ENG: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      descPublicKey: 'TRANSLATION NEEDED | ENG: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    import: {
      title: 'TRANSLATION NEEDED | ENG: Import authenticator',
      success: 'TRANSLATION NEEDED | ENG: Your authenticator has been successfully imported. You can now return to Authenticators.',
      subtitle: 'TRANSLATION NEEDED | ENG: Import your authenticator',
      desc1: 'TRANSLATION NEEDED | ENG: Please write your mnemonic in order to import your authenticator',
      desc2: 'TRANSLATION NEEDED | ENG: scan QR code by clicking on “or scan QR code” below',
      textAreaPlaceholder: 'TRANSLATION NEEDED | ENG: Mnemonic',
    },
    export: {
      title: 'TRANSLATION NEEDED | ENG: Export authenticator',
    },
    delete: {
      title: 'TRANSLATION NEEDED | ENG: Delete authenticator',
      subtitle: 'TRANSLATION NEEDED | ENG: Delete your authenticator',
      success: 'TRANSLATION NEEDED | ENG: Your authenticator has been successfully deleted. You can now return to Authenticators.',
    },
    list: {
      noAuthenticatorsDesc1: 'TRANSLATION NEEDED | ENG: No authenticators to show. \n Tap',
      noAuthenticatorsDesc2: 'TRANSLATION NEEDED | ENG: to add your first authenticator.',
      noAuthenticators: 'TRANSLATION NEEDED | ENG: No Authenticators',
      scan: 'TRANSLATION NEEDED | ENG: Scan',
      title: 'TRANSLATION NEEDED | ENG: Bitcoin Vault authenticators',
    },
    add: {
      title: 'TRANSLATION NEEDED | ENG: Add new authenticator',
      subtitle: 'TRANSLATION NEEDED | ENG: Pair authenticator',
      successDescription: 'TRANSLATION NEEDED | ENG: Your authenticator has been created. Please take a moment to write down this mnemonic phrase on a piece of paper. It’s your backup. You can use it to restore this authenticator on other devices. The authenticator allows you to confirm Instant and Recovery transactions.',
      description: 'TRANSLATION NEEDED | ENG: Select the option to “create wallet” on Electrum Vault (desktop application). Follow the steps until you see a QR code. Scan it using “Scan” button below to continue',
      subdescription: 'TRANSLATION NEEDED | ENG: import you authenticator by clicking on Import authenticator” below.',
    },
    enterPIN: {
      subtitle: 'TRANSLATION NEEDED | ENG: Enter PIN',
      description: 'TRANSLATION NEEDED | ENG: Please enter the following PIN into the Electrum Vault (desktop application).',
    },
  },
  calendar: {
    monthNames: {
      january: 'TRANSLATION NEEDED | ENG: January',
      february: 'TRANSLATION NEEDED | ENG: February',
      march: 'TRANSLATION NEEDED | ENG: March',
      april: 'TRANSLATION NEEDED | ENG: April',
      may: 'TRANSLATION NEEDED | ENG: May',
      june: 'TRANSLATION NEEDED | ENG: June',
      july: 'TRANSLATION NEEDED | ENG: July',
      august: 'TRANSLATION NEEDED | ENG: August',
      september: 'TRANSLATION NEEDED | ENG: September',
      october: 'TRANSLATION NEEDED | ENG: October',
      november: 'TRANSLATION NEEDED | ENG: November',
      december: 'TRANSLATION NEEDED | ENG: December',
    },
    monthNamesShort: {
      january: 'TRANSLATION NEEDED | ENG: Jan',
      february: 'TRANSLATION NEEDED | ENG: Feb',
      march: 'TRANSLATION NEEDED | ENG: Mar',
      april: 'TRANSLATION NEEDED | ENG: Apr',
      may: 'TRANSLATION NEEDED | ENG: May',
      june: 'TRANSLATION NEEDED | ENG: Jun',
      july: 'TRANSLATION NEEDED | ENG: Hul',
      august: 'TRANSLATION NEEDED | ENG: Aug',
      september: 'TRANSLATION NEEDED | ENG: Sep',
      october: 'TRANSLATION NEEDED | ENG: Oct',
      november: 'TRANSLATION NEEDED | ENG: Nov',
      december: 'TRANSLATION NEEDED | ENG: Dec',
    },
    dayNames: {
      sunday: 'TRANSLATION NEEDED | ENG: Sunday',
      monday: 'TRANSLATION NEEDED | ENG: Monday',
      tuesday: 'TRANSLATION NEEDED | ENG: Tuesday',
      wednesday: 'TRANSLATION NEEDED | ENG: Wednesday',
      thursday: 'TRANSLATION NEEDED | ENG: Thursday',
      friday: 'TRANSLATION NEEDED | ENG: Friday',
      saturday: 'TRANSLATION NEEDED | ENG: Saturday',
    },
    dayNamesShort: {
      sunday: 'TRANSLATION NEEDED | ENG: Sun',
      monday: 'TRANSLATION NEEDED | ENG: Mon',
      tuesday: 'TRANSLATION NEEDED | ENG: Tue',
      wednesday: 'TRANSLATION NEEDED | ENG: Wed',
      thursday: 'TRANSLATION NEEDED | ENG: Thu',
      friday: 'TRANSLATION NEEDED | ENG: Fri',
      saturday: 'TRANSLATION NEEDED | ENG: Sat',
    },
    today: 'TRANSLATION NEEDED | ENG: Today',
  },
}

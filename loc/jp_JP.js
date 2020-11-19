module.exports = {
  _: {
    bad_password: 'パスワードが間違っています。再度お試しください。',
    cancel: 'キャンセル',
    click: 'クリック',
    confirm: '確認',
    continue: '続行',
    copied: 'コピーされました！',
    copy: 'コピー',
    created: '作成日付',
    delete: '削除',
    enter_password: 'パスワード入力',
    here: 'こちらへ',
    invalid: '無効',
    languageCode: 'ja',
    never: 'いいえ',
    next: '次へ',
    ok: 'OK',
    or: 'または',
    satoshi: 'Sat',
    save: '保存',
    scan: 'スキャン',
    storage_is_encrypted: 'ストレージは暗号化されています。復号するためにはパスワードが必要です。',
  },
  aboutUs: {
    alwaysBackupYourKeys: '常にキーをバックアップしてください。',
    buildWithAwesome: '以下でビルド：',
    goToOurGithub: 'Githubに移動する',
    header: '会社紹介',
    rateGoldWallet: 'GoldWalletを評価する',
    releaseNotes: 'リリースノート',
    runSelfTest: 'セルフテスト実行',
    title: 'GoldWalletは無料オープンソースのBitcoin Vaultウォレットです。MITライセンス承認。',
  },
  advancedOptions: {
    description:
      '詳細オプションを有効にすると、以下にリストされているウォレットタイプから選択できます：P2SH、 HD P2SH、 HD segwit',
    title: '詳細オプションの設定',
  },
  authenticators: {
    add: {
      description:
        'GoldWalletをデスクトップアプリケーションであるElectrumVaultとペアリングするために必要になります。 これは、２段階認証システムとして機能します。',
      subdescription: '以下のオプションを選択して、認証システムを登録することができます。',
      subtitle: '認証システムの生成',
      successDescription:
        'このシードフレーズを安全な場所に記録してください。これは、認証システムを復元する場合に必要なバックアップです。 クイック取引および取引キャンセルを確認する際に、認証システムが必要になることをご注意ください。',
      successTitle: '認証システムが完了しました。',
      title: '新しい認証システムの追加',
    },
    delete: {
      subtitle: '認証システムを削除します',
      success: '認証システムを削除しました。新規登録はいつでも可能です。',
      title: '認証システムの削除',
    },
    enterPIN: {
      description: 'このPINをデスクトップアプリケーションであるElectrumVaultに入力し、ペアリングを完了します。',
      subtitle: 'PIN入力',
    },
    errors: {
      noEmpty: '空白にすることはできません。',
    },
    export: {
      title: '認証システムをエクスポート',
    },
    import: {
      code: 'コード：',
      desc1: 'シードフレーズを記録もしくは登録する認証システムのQRコードをスキャンしてください。',
      desc2: '下段の[QRコードをスキャン]でQRコードをスキャンできます。',
      inUseValidationError: '使用中の名前です。他の名前を入力してください。',
      mnemonicLength: 'シードフレーズには12個の単語が必要です。',
      multipleQrCodesDescription:
        '一部の取引は複数のQRコードを生成します。 Electrum Vaultアプリケーションからすべてのコードをスキャンしてください。',
      multipleQrCodesTitle: '他のQRコードをスキャン',
      scanNext: '次をスキャン',
      subtitle: '認証システムを登録',
      success: '認証システムが登録されました。これから使用可能です。',
      textAreaPlaceholder: 'シードフレーズ',
      title: '認証システムの登録',
    },
    list: {
      noAuthenticators: '認証システムが登録されていません',
      noAuthenticatorsDesc1: 'タップ',
      noAuthenticatorsDesc2: '認証システムを追加',
      scan: 'スキャン',
      title: 'Bitcoin Vault認証システム',
    },
    options: {
      delete: '認証システムの削除',
      export: '認証システムをエクスポート',
      pair: '認証システムのペアリング',
      sectionTitle: '一般',
      title: '認証システムのオプション',
    },
    pair: {
      descPin: 'このPINを使用して、デスクトップ・アプリケーションでの認証システムのペアリングを確認します。',
      descPublicKey:
        'GoldWalletオプションでのウォレット生成中に、この公開キーを使用してデスクトップ・アプリケーションに認証システムを登録できます。',
      pin: 'PIN',
      publicKey: '公開キー',
      title: '認証システムのペアリング',
    },
    publicKey: {
      okButton: 'はい、理解しました。',
      subtitle:
        '2段階認証ウォレットの生成中に、この公開キーを使用してデスクトップ・アプリケーションであるElectrum Vaultに認証システムを登録できます。',
      title: '公開キー',
    },
    sign: {
      error: '全ての認証システムから取引が承認されませんでした。',
    },
  },
  betaVersion: {
    button: '私はリスクを認識しています',
    description:
      '本アプリは正式リリース以前の最終テスト中にあります。このモバイルアプリおよびアプリ上の全てのコンテンツは「現状有姿」および「利用可能な範囲」のみで提供されます。ソフトウェアの使用は、ユーザーの自己責任で行ってください。',
    title: 'GoldWalletのベータ版です',
  },
  contactCreate: {
    addressLabel: 'アドレス',
    buttonLabel: '新しい連絡先を追加する',
    description: '新しい連絡先の名前とアドレスを入力してください。',
    nameCannotContainSpecialCharactersError: '名前に特殊文字を含めることはできません。',
    nameLabel: '名前',
    nameMissingAlphanumericCharacterError: '名前に英数字がありません。',
    screenTitle: '新しい連絡先の追加',
    subtitle: '新しい連絡先',
    successButton: 'アドレス帳に戻る',
    successDescription: '新しい連絡先の追加が完了しました。',
    successTitle: '成功',
  },
  contactDelete: {
    description1: '削除しますか',
    description2: '？\n削除後は元に戻せません。',
    header: '連絡先の削除',
    no: 'いいえ',
    success: '成功',
    successButton: 'アドレス帳に戻る',
    successDescription: '連絡先の削除が完了しました。アドレス帳に戻ります。',
    title: '連絡先の削除',
    yes: 'はい',
  },
  contactDetails: {
    addressLabel: 'アドレス',
    deleteButton: '連絡先を削除',
    editAddress: 'アドレス修正',
    editName: '名前修正',
    nameLabel: '名前',
    sendCoinsButton: 'コインの送金',
    share: '共有',
    showQRCodeButton: 'QRコードを表示する',
  },
  contactList: {
    cancel: 'キャンセル',
    noContacts: '連絡先無し',
    noContactsDesc1: '連絡先がありません。 \n  クリック',
    noContactsDesc2: '連絡先を追加します。',
    noResults: 'の結果がありません。',
    screenTitle: 'アドレス帳',
    search: '検索',
  },
  electrumServer: {
    connectionError: '提供されたElectrumサーバーに接続できません。',
    description:
      'アプリケーションが接続するサーバーのアドレスを変更できます。 デフォルトのアドレスをそのままご利用することをお勧めします。',
    header: 'Electrumサーバー',
    host: 'ホスト',
    port: 'ポート',
    save: '保存',
    successfullSave: '変更が正常に保存されました。 変更を有効にするには、再起動が必要な場合があります。',
    title: 'Electrumサーバー変更',
    useDefault: 'デフォルト値使用',
  },
  filterTransactions: {
    clearAll: 'すべてクリア',
    clearFilters: 'フィルターをクリア',
    filter: 'フィルター',
    from: '送金者',
    fromAmount: '最小金額',
    fromDate: '開始日',
    header: '取引検索フィルター',
    receive: '受取',
    received: '受取済み',
    send: '送金',
    sent: '送金済み',
    status: {
      canceled: 'キャンセル済み',
      canceledDone: 'キャンセル済み-完了',
      done: '完了',
      pending: '保留中',
    },
    to: '受領者',
    toAmount: '最大金額',
    toDate: '終了日',
    transactionStatus: '取引ステータス',
    transactionType: '取引タイプ',
  },
  message: {
    allDone: 'すべて完了しました!',
    bePatient: '時間がかかる場合がありますので、しばらくお待ちください。',
    cancelTxSuccess: '取引のキャンセルが正常に完了しました。\n  コインは間もなく返金されます。',
    creatingAuthenticator: '認証システムを生成中です。',
    creatingAuthenticatorDescription:
      '認証システムを生成しています。しばらくお待ちください。\n  しばらく時間がかかる場合があります。',
    creatingWallet: 'ウォレットを生成中です。',
    creatingWalletDescription: 'ウォレットの生成には時間がかかる場合がありますので、\n しばらくお待ちください。',
    generateAddressesError: 'アドレスを生成できません',
    hooray: 'おめでとうございます!',
    importingAuthenticator: '認証システムを登録しています',
    importingAuthenticatorDescription:
      '認証システムを登録しています。しばらくお待ちください。\n  しばらく時間がかかる場合があります。',
    noTransactions: 'このウォレットには取引がありません。',
    noTransactionsDesc: '使用したことのないウォレットを登録しようとしている可能性があります',
    processing: '処理中',
    returnToAuthenticators: '認証システムに戻る',
    returnToDashboard: 'ダッシュボードに戻る',
    returnToWalletChoose: 'ウォレットタイプの選択に戻る',
    returnToWalletImport: 'ウォレットの登録に戻る',
    somethingWentWrong: '問題が発生しました',
    somethingWentWrongWhileCreatingWallet:
      'ウォレットの生成中に問題が発生しました。ダッシュボードに戻って、再度お試しください。',
    success: '成功',
    successfullWalletDelete: 'ウォレットの削除に成功しました。ダッシュボードに戻ります。',
    successfullWalletImport: 'ウォレットの登録に成功しました。ウォレットを使用できます。',
    wrongMnemonic: 'ニーモニックが間違っています。',
    wrongMnemonicDesc:
      '指定されたニーモニックと一致するウォレットがありません。\n  無効なニーモニックまたは未使用のウォレットである可能性があります。',
  },
  onboarding: {
    changePin: 'PINコードの変更',
    confirmNewPin: '新しいPINコードの確認',
    confirmPassword: '取引パスワードの確認',
    confirmPin: 'PINコードの確認',
    createNewPin: '新しいPINコード',
    createPassword: '取引パスワードの生成',
    createPasswordDescription:
      '取引パスワードは、すべての取引を確認するために使用されます。 後で変更することはできません。 取引パスワードは、少なくとも8文字の英数字が含まれている必要があります。',
    createPin: 'PINコードの生成',
    createPinDescription: 'PINコードはアプリケーションのログインに利用されます。設定メニューから変更が可能です。',
    currentPin: '現在のPINコード',
    failedTimes: '失敗回数',
    failedTimesErrorInfo: '3回失敗すると、以下の入力がブロックされます。',
    goBack: '戻る',
    minutes: '分',
    numberOfAttemptsExceeded: '試行回数を超えました',
    onboarding: '設定実行',
    passwordDoesNotMatch: 'パスワードが一致しません。有効なパスワードを入力してください。',
    pin: 'PINコード',
    pinDoesNotMatch: 'PINコードが一致しません。有効なPINコードを入力してください。',
    seconds: '秒',
    successButton: 'ダッシュボードに戻る',
    successButtonChangedPin: '設定に戻る',
    successDescription: 'おめでとうございます！\n  PINコードの生成が正常に完了されました。',
    successDescriptionChangedPin: 'おめでとうございます！\n  PINコードの変更が正常に完了されました。',
    tryAgain: 'しばらくしてからもう一度お試しください',
  },
  receive: {
    details: {
      amount: '金額',
      receiveWithAmount: '金額で受取る',
      receiveWithAmountSubtitle: '受取る金額を入力してください。入力した金額に応じてQRコードがアップデートされます。',
      share: '共有',
      shareWalletAddress: 'ウォレットアドレスを共有',
    },
    header: '受取',
    label: 'ウォレットアドレス',
  },
  scanQrCode: {
    cancel: 'キャンセル',
    ok: 'OK',
    permissionMessage: 'カメラへのアクセス許可が必要です。',
    permissionTitle: 'カメラへのアクセス許可',
  },
  security: {
    jailBrokenPhone:
      'デバイスがジェイルブレイクされているようです。 これにより、セキュリティの問題、クラッシュ、またはその他の問題が発生する可能性があります。 ジェイルブレイクされたデバイスでGoldWalletを使用することはお勧めしません。',
    noPinOrFingerprintSet:
      'デバイスにPINコードまたは指紋が設定されていないようです。 安全でないデバイスでGoldWalletを使用することはお勧めしません。',
    rootedPhone:
      'お使いのデバイスはルート化されているようです。 これにより、セキュリティの問題、クラッシュ、またはその他の問題が発生する可能性があります。 ルート権限を取得されたデバイスでGoldWalletを使用することはお勧めしません。',
    title: 'セキュリティ問題',
  },
  selectLanguage: {
    alertDescription: '選択した言語でアプリケーションを再起動しますか？',
    cancel: 'キャンセル',
    confirm: '確認',
    confirmation: '確認',
    header: '言語',
    restartInfo: '新しい言語を選択する場合、変更を有効にするためにGoldWalletの再起動が必要になる場合があります。',
  },
  send: {
    confirm: {
      availableBalance: '取引後の利用可能残高',
      cancelNow: '今すぐキャンセル',
      pendingBalance: '取引後のブロックされた残高',
      sendNow: '今すぐ送金',
    },
    create: {
      amount: '金額',
      fee: '手数料',
      headerText:
        'ネットワーク上に保留中の取引が多数ある場合（>1500）、取引の処理を早めるため、手数料が高く策定されます。 一般的な値は1〜500 sat/bです。',
      setTransactionFee: '取引手数料の設定',
    },
    details: {
      address: 'アドレス',
      address_field_is_not_valid: 'アドレスが無効です',
      amount_field_is_not_valid: '金額が無効です',
      amount_placeholder: '送金する金額（BTCV）',
      cancel: 'キャンセル',
      create: '請求書の生成',
      create_tx_error: '取引中にエラーが発生しました。 アドレスが有効であるかを確認してください。',
      fee: '手数料：',
      fee_field_is_not_valid: '手数料が無効です',
      fee_placeholder: '追加手数料（BTCV）',
      feeUnit: 'Sat/B',
      next: '次へ',
      note: 'メモ（選択事項）',
      note_placeholder: '個人メモ',
      remaining_balance: '残高',
      scan: 'スキャン',
      send: '送金',
      title: '取引の生成',
      to: '送金先',
      total_exceeds_balance: '送金金額が利用可能な残高を超えています。',
    },
    error: {
      description: '取引の前に、Bitcoin Vaultウォレットを追加する必要があります。',
      title: 'エラー',
    },
    header: 'コインの送金',
    recovery: {
      confirmFirstSeed: 'キャンセル・シードフレーズ確定',
      confirmFirstSeedDesc:
        'ウォレットの作成時に生成された最初のPDFドキュメントを開き、個人キーのシードフレーズを同じ順序で書き取ってください。',
      confirmSecondSeed: 'クイック・シードフレーズ確定',
      confirmSecondSeedDesc:
        'ウォレットの作成時に生成された2番目のPDFドキュメントを開き、個人キーのシードフレーズを同じ順序で書き取ってください。',
      confirmSeed: 'キャンセル・シードフレーズ確定',
      confirmSeedDesc:
        'ウォレットの作成時に生成されたPDFドキュメントを開き、個人キーのシードフレーズを同じ順序で書き取ってください。',
      recover: 'キャンセル',
      useWalletAddress: 'このウォレットのアドレスを使用',
    },
    success: {
      description: 'コインの送金が完了しました。',
      done: '完了',
      return: 'ダッシュボードに戻る',
      title: '成功',
    },
    transaction: {
      alert: '保安',
      alertDesc: 'この取引を完了するには、144ブロックまたは約24時間が必要です。 この時間内に取引をキャンセルできます。',
      fastSuccess: 'クイック取引が正常に完了しました。',
      instant: '保安・クイック',
      instantDesc: 'この取引は、ただちに確定されます。細心の注意を払った上でご利用ください。',
      lightningError:
        'このアドレスは、Lightning用の請求書のようです。 この請求書の支払いを行うには、Lightningウォレットにアクセスしてください。',
      scanInstantKeyDesc:
        'ウォレットの作成時に生成したPDFドキュメントを開き、個人キーのQRコードをスキャンして送金してください。',
      scanInstantKeyTitle: 'クイックキーをスキャンする',
      type: '取引タイプ',
      watchOnlyError: '送金できないウォレットだけを表示する',
    },
    warning: '警告:',
    warningGeneral:
      '警告：保安取引機能を使用する過程で、ウォレットに残っている資金の一部がブロックされる可能性があることに注意してください。 これは、UTXOとBitcoin Vaultウォレットのブロックチェーンパラメータにリンクされた通常の手順です。 取引が確認（約24時間後）、またはキャンセルされると（24時間以内）、資金のブロックが解除されます。',
  },
  settings: {
    about: '紹介',
    aboutUs: '会社紹介',
    advancedOptions: '詳細設定',
    Biometrics: '生体認証を許可する',
    changePin: 'PINコード変更',
    electrumServer: 'Electrumサーバー',
    FaceID: 'Face IDを許可する',
    fingerprintLogin: '指紋ログイン',
    general: '一般',
    header: '設定',
    language: '言語',
    notSupportedFingerPrint: 'このデバイスでは指紋が認識できません。',
    security: 'セキュリティ',
    TouchID: '指紋認識を許可する',
  },
  tabNavigator: {
    addressBook: 'アドレス帳',
    authenticators: '認証システム',
    settings: '設定',
    wallets: 'ウォレット',
  },
  timeCounter: {
    closeTheApp: 'アプリケーションを閉じる',
    description:
      'ログインに失敗したため、アプリケーションがブロックされました。 再試行するには、しばらくお待ちください。',
    title: 'アプリケーションがブロックされました',
    tryAgain: 'もう一度お試しください',
  },
  transactions: {
    details: {
      addNote: 'メモの追加',
      addToAddressBook: 'アドレス帳に追加',
      amount: '金額',
      blocked: 'ブロック済み',
      bytes: 'バイト',
      confirmations: '確認',
      copy: 'コピー',
      copyAndBoriadcast: '後でコピー、ブロードキャストする。',
      details: '詳細',
      detailTitle: '取引詳細',
      fee: '手数料：',
      from: '送金元',
      inputs: '入力',
      noLabel: 'ラベル無し',
      note: 'メモ',
      numberOfCancelTransactions: 'キャンセルした取引数',
      ouputs: '出力',
      returnedFee: '返還手数料：',
      satoshiPerByte: 'Satoshi per byte',
      sendCoins: 'コインの送金',
      timePending: '保留時間',
      title: '取引',
      to: '受取先',
      toExternalWallet: '外部ウォレットへの送金',
      toInternalWallet: '内部ウォレットへの送金',
      totalReturnedFee: '総合返還手数料：',
      transactioFee: '取引手数料',
      transactionDetails: '取引詳細',
      transactionHex: '取引ヘックス',
      transactionHexDescription: 'この取引ヘックスは署名され、ネットワークにブロードキャストする準備ができています',
      transactionId: '取引ID',
      transactionType: '取引タイプ',
      txSize: 'TXサイズ',
      unblocked: 'ブロック解除',
      verify: 'coinb.inから認証',
      viewInBlockRxplorer: 'ブロックエクスプローラーで表示',
      walletType: 'ウォレットタイプ',
    },
    errors: {
      notEnoughBalance: '残高が不足しています。少額で送金してみてください。',
    },
    label: {
      blocked: 'ブロック済み',
      canceled: 'キャンセル済み',
      canceledDone: 'キャンセル済み-完了',
      done: '完了',
      pending: '保留中',
      unblocked: 'ブロック解除',
    },
    list: {
      conf: '確認',
    },
    transactionTypeLabel: {
      canceled: 'キャンセル済み',
      secure: '保安',
      secureFast: '保安・クイック',
      standard: 'スタンダード',
    },
  },
  unlock: {
    confirmButton: '続行するには指紋を確認してください。',
    enter: 'PINコードの入力',
    title: '解除',
    touchID: '「GoldWallet」 のTouch ID',
  },
  unlockTransaction: {
    description: '続行するには、取引パスワードを入力してください。',
    headerText: '取引の確認',
    title: '取引パスワードの確認',
  },
  wallets: {
    add: {
      addWalletButton: '新しいウォレットの追加',
      advancedOptions: '詳細設定',
      air: '保安取引、取引キャンセル、クイック取引が可能です。',
      ar: '保安取引、取引キャンセルが可能です。',
      description: '新しいウォレットのタイプと名前を選択してください。',
      failed: 'ウォレットの生成に失敗しました',
      importWalletButton: 'ウォレットの登録',
      inputLabel: '名前',
      legacy: 'デフォルトタイプの取引を生成します。',
      legacyHDP2SH: 'これには、単一の12ワードシードから生成されたP2SHアドレスのツリーが含まれています。',
      legacyHDP2SHTitle: 'スタンダード HD P2SH',
      LegacyHDSegWit: 'これには、単一の12ワードシードから生成されたネイティブsegwitアドレスのツリーが含まれています。',
      legacyHDSegWitTitle: 'スタンダード HD SegWit',
      LegacyP2SH: 'これには、単一のP2SHアドレスが含まれています',
      legacyP2SHTitle: 'スタンダード P2SH',
      legacyTitle: 'スタンダード',
      multipleAddresses: 'これには、単一の12ワードシードから生成されたP2SHアドレスのツリーが含まれています。',
      publicKeyError: '入力された公開キーが無効です。',
      segwidAddress: 'これには、単一の12ワードシードから生成されたネイティブsegwitアドレスのツリーが含まれています。',
      singleAddress: '単一のP2SHアドレスが含まれています。',
      subtitle: 'ウォレットに名前を付ける',
      title: '新しいウォレットの追加',
      walletType: 'ウォレットタイプ',
    },
    addSuccess: {
      description:
        'このシードフレーズを安全な場所に書き取ってください。 ウォレットを復元する場合に必要なバックアップです。',
      okButton: 'はい、これを書き取りました！',
      subtitle: 'ウォレットの生成を完了しました！',
      title: '新しいウォレットの追加',
    },
    dashboard: {
      allWallets: '全てのウォレット',
      availableBalance: '利用可能な残高',
      noTransactions: '表示できる取引がありません。',
      noWallets: 'ウォレットがありません',
      noWalletsDesc1: '表示できるウォレットがありません。',
      noWalletsDesc2: '最初のウォレットを追加する。',
      receive: '受取',
      recover: 'キャンセル',
      send: '送金',
      title: 'ウォレット',
      wallet: 'ウォレット',
    },
    deleteWallet: {
      description1: '削除してもよろしいですか',
      description2: '？取り消すことはできません。',
      header: 'ウォレットの削除',
      no: 'いいえ',
      title: 'ウォレットを削除する',
      yes: 'はい',
    },
    details: {
      deleteWallet: 'ウォレットの削除',
      details: '詳細',
      edit: '編集',
      exportWallet: 'ウォレットのエクスポート',
      latestTransaction: '最新の取引',
      nameEdit: '名前の編集',
      nameLabel: '名前',
      showWalletXPUB: 'ウォレットXPUBを表示する',
      typeLabel: 'タイプ',
    },
    errors: {
      duplicatedPublicKey: 'この公開キーはすでに追加されています。',
      invalidMnemonic: '無効なニーモニック',
      invalidMnemonicWordsNumber:
        '{receivedWordsNumber}文字が入力されました。{expectedWordsNumber}文字を入力してください。',
      invalidPrivateKey: '無効な個人キー',
      invalidPublicKey: '無効な公開キー',
      invalidQrCode: '無効なQRコード',
      invalidSign: '取引を署名できません。',
      noIndexForWord: '{word}についてのインデックスが見つかりませんでした。',
      wrongNetwork: `本アプリケーションのネットワークは{appNetworkName}ですが、お客様のウォレットはこちらのネットワーク {walletNetworkName} にあるようです。Telegramにて弊社サポートまでご連絡いただくようお願いいたします。`,
    },
    export: {
      title: 'ウォレットのエクスポート',
    },
    exportWallet: {
      header: 'ウォレットのエクスポート',
      title: 'シードフレーズ',
    },
    exportWalletXpub: {
      header: 'ウォレットXPUB',
    },
    import: {
      do_import: '登録',
      error: '登録に失敗しました。提供されたデータが有効であるかを確認してください。',
      explanation:
        'ここに、ニーモニック、個人キー、WIFまたはお客様が持っているものをすべて書き込んでください。 GoldWalletは、正しい形式を推測してウォレットを登録するため最善を尽くします。',
      imported: '登録完了',
      scan_qr: 'またはQRコードをスキャンしますか？',
      success: '成功',
      title: '登録',
    },
    importWallet: {
      chooseTypeDescription: '登録するウォレットタイプを選択してください。',
      customWords: 'カスタムワード',
      extendWithCustomWords: 'カスタムワードでシードを拡張',
      header: 'ウォレットの登録',
      import: '登録',
      importARDescription1: 'シードフレーズを入力してください',
      importARDescription2: '登録したいウォレットのQRコードをスキャンしてください',
      placeholder: 'シードフレーズ、個人キー、WIF',
      scanCancelPubKey: 'キャンセルキーのQRコードをスキャンする',
      scanFastPubKey: 'クイックキーのQRコードをスキャンする',
      scanPublicKeyDescription:
        '登録するウォレットを作成したときに生成された最初のPDFドキュメントを開き、このアプリで公開キーのQRコードをスキャンしてください。',
      scanQrCode: 'またはQRコードをスキャンする',
      scanWalletAddress: 'ウォレットアドレスをスキャンする',
      scanWalletAddressDescription: '公開アドレスのQRコードをスキャンして、GoldWalletとの統合を開始します。',
      subtitle:
        'ここに、ニーモニック、個人キー、WIFまたはお客様が持っているものをすべて書き込んでください。 GoldWalletは、正しい形式を推測してウォレットを登録するため最善を尽くします。',
      title: 'ウォレットの登録',
      unsupportedElectrumVaultMnemonic:
        'これはElectrum Vaultのシードです。このシードは現在サポートされていません。間もなくサポートを開始する予定です。',
      walletInUseValidationError: 'このウォレットはすでに使用されています。有効なウォレットを入力してください。',
      allWalletsValidationError: '「全てのウォレット」という名前は入力できません',
    },
    publicKey: {
      instantDescription:
        '別のデバイスでWebKey Generatorに再度アクセスし、ページを更新した後、このアプリで新しい公開キーのQRコードをスキャンしてください。 キーをPDFとしてエクスポートすることを忘れないでください！',
      instantSubtitle: 'クイックキーの追加',
      recoveryDescription:
        '別のデバイスでWebKey Generatorに再度アクセスし、このアプリで新しい公開キーのQRコードをスキャンしてください。 キーをPDFとしてエクスポートすることを忘れないでください！',
      recoverySubtitle: 'キャンセルキーの追加',
      scan: 'スキャン',
      webKeyGenerator: 'Webキー・ジェネレーター：',
    },
    scanQrWif: {
      bad_password: '間違ったパスワード',
      bad_wif: '間違ったWIF',
      cancel: 'キャンセル',
      decoding: 'デコード中',
      go_back: '戻る',
      imported_legacy: '登録済みのLegacy',
      imported_segwit: '登録済みのSegWit',
      imported_watchonly: '登録済みのWatch-only',
      imported_wif: '登録済みのWIF',
      input_password: 'パスワードの入力',
      password_explain: 'これはBIP38で暗号化された個人キーです',
      wallet_already_exists: 'ウォレットがすでに存在しています',
      with_address: 'アドレスで',
    },
    wallet: {
      latest: '最新の取引',
      none: '無し',
      pendingBalance: 'ブロック済みの残高',
    },
    walletModal: {
      btcv: 'BTCV',
      wallets: 'ウォレット',
    },
  },
};

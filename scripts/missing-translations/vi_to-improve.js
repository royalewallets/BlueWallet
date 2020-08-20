const vi = {
  _: {
    languageCode: 'vi',
    storage_is_encrypted: 'Ví lưu trữ của quý khách đã được mã hóa. Cần có mật khẩu để giải mã',
    enter_password: 'Nhập mật khẩu',
    bad_password: 'Mật khẩu kém, hãy thử lại',
    never: 'không bao giờ',
    continue: 'Tiếp tục',
    ok: 'OK',
    click: 'Nhấn',
    here: 'tại đây',
    save: 'Lưu',
    confirm: 'Xác nhận',
    copy: 'Sao chép ',
    copied: 'Đã sao chép!',
    or: 'TRANSLATION NEEDED | ENG: or',
    delete: 'TRANSLATION NEEDED | ENG: Delete',
    created: 'TRANSLATION NEEDED | ENG: Created',
    invalid: 'TRANSLATION NEEDED | ENG: Invalid',
    satoshi: 'TRANSLATION NEEDED | ENG: Sat',
    next: 'TRANSLATION NEEDED | ENG: Next',
  },
  tabNavigator: {
    dashboard: 'Bảng điều khiển',
    settings: 'Cài đặt',
    addressBook: 'Sổ địa chỉ',
    wallets: 'TRANSLATION NEEDED | ENG: Wallets',
    authenticators: 'TRANSLATION NEEDED | ENG: Authenticators',
  },
  message: {
    somethingWentWrong: 'Đã xảy ra lỗi',
    somethingWentWrongWhileCreatingWallet: 'Đã xảy ra lỗi khi chúng tôi tạo ví cho quý khách. Vui lòng quay lại Bảng điều khiển và thử lại.',
    success: 'Thành công',
    successfullWalletImport: 'Ví của quý khách đã được nhập thành công. Bây giờ quý khách có thể quay lại Bảng điều khiển.',
    successfullWalletDelete: 'Ví của quý khách đã được xóa thành công. Bây giờ quý khách có thể quay lại Bảng điều khiển.',
    returnToDashboard: 'Quay lại Bảng điều khiển',
    creatingWallet: 'Tạo ví của quý khách',
    creatingWalletDescription: 'Vui lòng đợi trong khi chúng tôi tạo ví cho quý khách. Quá trình này có thể mất một thời gian.',
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
    onboarding: 'Cài đặt ',
    pin: 'PIN',
    createPin: 'Tạo PIN',
    createNewPin: 'PIN mới',
    createPassword: 'Tạo mật khẩu cho giao dịch',
    createPinDescription: 'Mã PIN của quý khách sẽ được sử dụng để đăng nhập vào ứng dụng. Quý khách có thể thay đổi nó trong phần Cài đặt.',
    confirmPin: 'Xác nhận PIN ',
    confirmNewPin: 'Xác nhận PIN mới ',
    confirmPassword: 'Xác nhận mật khẩu cho giao dịch',
    passwordDoesNotMatch: 'Mật khẩu không khớp. Xin vui lòng nhập mật khẩu có hiệu lực.',
    createPasswordDescription: 'Mật khẩu cho giao dịch của quý khách sẽ được sử dụng để xác nhận tất cả các giao dịch. Quý khách không thể thay đổi nó. Mật khẩu giao dịch phải chứa ít nhất 8 ký tự chữ và số.',
    changePin: 'Thay đổi PIN',
    currentPin: 'PIN hiện tại',
    pinDoesNotMatch: 'PIN không khớp. Xin vui lòng nhập PIN có hiệu lực.',
    successDescription: 'Hooray! \nQuý khách đã tạo thành công PIN của mình.',
    successDescriptionChangedPin: 'Hooray!\nQuý khách đã thay đổi thành công PIN của mình.',
    successButton: 'Đi đến Bảng điều khiển ',
    successButtonChangedPin: 'Quay về Cài đặt',
  },
  unlock: {
    title: 'Mở khóa ',
    touchID: 'Chạm ID cho “Gold Wallet”',
    confirmButton: 'Xác nhận dấu vân tay để tiếp tục.',
    enter: 'Nhập PIN',
  },
  unlockTransaction: {
    headerText: 'Xác nhận giao dịch ',
    title: 'Xác nhận mật khẩu cho giao dịch',
    description: 'Xác nhận mật khẩu giao dịch để xử lý giao dịch. ',
  },
  wallets: {
    dashboard: {
      title: 'Ví',
      allWallets: 'Tất cả ví',
      noWallets: 'Không có ví',
      noWalletsDesc1: 'Không có ví nào.',
      noWalletsDesc2: ' thêm ví đầu tiên của quý khách.',
      send: 'Gửi coin',
      receive: 'Nhận coin',
      noTransactions: 'Không có giao dịch nào.',
      availableBalance: 'TRANSLATION NEEDED | ENG: Available balance',
      recover: 'TRANSLATION NEEDED | ENG: Recover',
    },
    walletModal: {
      btcv: 'BTCV',
      wallets: 'Ví',
    },
    importWallet: {
      title: 'Nhập ví của quý khách',
      header: 'Nhập ví',
      subtitle: 'Viết ra đây những thông tin cần ghi nhớ, khóa riêng tư, WIF hoặc bất cứ thông tin gì quý khách có được. GoldWallet tìm mọi cách để đoán đúng định dạng và nhập ví của quý khách.',
      placeholder: 'Thông tin ghi nhớ, khóa riêng tư, WIF',
      import: 'Nhập',
      scanQrCode: 'hoặc quét mã QR',
      walletInUseValidationError: 'Ví đã được sử dụng. Vui lòng nhập ví hợp lệ.',
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
      title: 'Cụm từ ghi nhớ',
      header: 'Xuất ví',
    },
    exportWalletXpub: {
      header: 'Ví XPUB',
    },
    deleteWallet: {
      title: 'Xóa ví của quý khách',
      header: 'Xóa ví',
      description1: 'Quý khách có chắc chắn muốn xóa không',
      description2: '? Quý khách không thể hoàn tác hành động này.',
      no: 'Không',
      yes: 'Có',
    },
    wallet: {
      none: 'Không có',
      latest: 'Giao dịch mới nhất',
      pendingBalance: 'TRANSLATION NEEDED | ENG: Pending balance',
    },
    add: {
      title: 'Thêm ví mới',
      subtitle: 'Đặt tên cho ví của quý khách',
      description: 'Vui lòng nhập tên cho ví mới của quý khách.',
      inputLabel: 'Tên',
      addWalletButton: 'Thêm ví mới',
      importWalletButton: 'Nhập ví',
      advancedOptions: 'Tùy chọn nâng cao',
      multipleAddresses: 'Nhiều địa chỉ',
      singleAddress: 'Một địa chỉ',
      segwidAddress: 'Nó chứa một cây bao gồm các địa chỉ ví segwit, được tạo từ một hạt giống 24 từ duy nhất',
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
      title: 'Thêm ví mới',
      subtitle: 'Thành công',
      description: 'Ví của quý khách đã được tạo. Vui lòng dành thời gian để viết cụm từ ghi nhớ này ra một tờ giấy. Đó là tờ sao lưu của quý khách. Quý khách có thể sử dụng nó để khôi phục ví trên các thiết bị khác.',
      okButton: 'OK, tôi đã viết nó ra!',
    },
    details: {
      edit: 'Chỉnh sửa',
      latestTransaction: 'Giao dịch mới nhất',
      typeLabel: 'Loại',
      nameLabel: 'Tên',
      exportWallet: 'Xuất ví',
      showWalletXPUB: 'Hiển thị ví XPUB',
      deleteWallet: 'Xóa ví',
      nameEdit: 'Chỉnh sửa tên',
    },
    export: {
      title: 'xuất ví',
    },
    import: {
      title: 'nhập',
      explanation: 'Viết ra đây thông tin ghi nhớ, khóa riêng tư, WIF hoặc bất cứ thông tin gì quý khách có được. GoldWallet tìm mọi cách để đoán đúng định dạng và nhập ví của quý khách.',
      imported: 'Đã nhập',
      error: 'Không nhập được. Vui lòng đảm bảo rằng dữ liệu được cung cấp là hợp lệ.',
      success: 'Thành công',
      do_import: 'Nhập',
      scan_qr: 'hoặc quét mã QR?',
    },
    scanQrWif: {
      go_back: 'Quay lại',
      cancel: 'Hủy',
      decoding: 'Giải mã',
      input_password: 'Nhập mật khẩu',
      password_explain: 'Đây là khóa mật được mã hóa BIP38',
      bad_password: 'Mật khẩu kém',
      wallet_already_exists: 'Ví này đã tồn tại',
      bad_wif: 'WIF kém',
      imported_wif: 'WIF đã nhập',
      with_address: 'có địa chỉ',
      imported_segwit: 'SegWit đã nhập',
      imported_legacy: 'Legacy đã nhập',
      imported_watchonly: 'Watch-only đã nhập',
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
      conf: 'Xác nhận',
    },
    details: {
      title: 'Giao dịch',
      detailTitle: 'Chi tiết giao dịch',
      transactionHex: 'Hex giao dịch',
      transactionHexDescription: 'Đây là mã hex giao dịch, đã ký và sẵn sàng để phát lên mạng',
      copyAndBoriadcast: 'Sao chép và phát sau',
      verify: 'Xác minh trên coinb.in',
      amount: 'Số tiền',
      fee: 'Phí',
      txSize: 'Kích thước TX',
      satoshiPerByte: 'Satoshi mỗi byte',
      from: 'Từ',
      to: 'Đến',
      bytes: 'byte',
      copy: 'Sao chép',
      noLabel: 'Không có nhãn',
      details: 'Chi tiết',
      transactionId: 'ID giao dịch',
      confirmations: 'xác nhận',
      transactionDetails: 'Chi tiết giao dịch',
      viewInBlockRxplorer: 'Xem trong block explorer (công cụ phân tích khối)',
      addNote: 'Thêm ghi chú',
      note: 'Ghi chú',
      inputs: 'Đầu vào',
      ouputs: 'Đầu ra',
      sendCoins: 'Gửi coin',
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
    header: 'Gửi coin',
    success: {
      title: 'Thành công',
      description: 'Xin chúc mừng! Quý khách đã hoàn tất giao dịch thành công.',
      done: 'Xong',
      return: 'Quay lại Bảng điều khiển',
    },
    details: {
      title: 'tạo giao dịch',
      amount_field_is_not_valid: 'Số tiền không hợp lệ',
      fee_field_is_not_valid: 'Phí không hợp lệ',
      address_field_is_not_valid: 'Địa chỉ không hợp lệ',
      create_tx_error: 'Đã xảy ra lỗi khi tạo giao dịch. Vui lòng đảm bảo địa chỉ là hợp lệ.',
      address: 'địa chỉ',
      amount_placeholder: 'số tiền cần gửi (tính bằng BTCV)',
      fee_placeholder: 'cộng với phí giao dịch (tính bằng BTCV)',
      note_placeholder: 'ghi chú cho bản thân',
      cancel: 'Hủy',
      scan: 'Quét',
      send: 'Gửi',
      next: 'Tiếp theo',
      note: 'Lưu ý (tùy chọn)',
      to: 'đến',
      feeUnit: 'Sat/B',
      fee: 'Phí:',
      create: 'Tạo hóa đơn',
      remaining_balance: 'Số dư còn lại',
      total_exceeds_balance: 'Số tiền gửi vượt quá số dư khả dụng.',
    },
    confirm: {
      sendNow: 'Gửi ngay',
      availableBalance: 'TRANSLATION NEEDED | ENG: Available balance after transaction',
      pendingBalance: 'TRANSLATION NEEDED | ENG: Pending balance after transaction',
    },
    create: {
      amount: 'Số tiền',
      fee: 'Phí',
      setTransactionFee: 'Đặt phí giao dịch',
      headerText: 'Khi đang có một lượng lớn giao dịch đang chờ xử lý trên mạng (>1500), việc đặt phí cao hơn sẽ giúp giao dịch của quý khách được xử lý nhanh hơn. Giá trị thông thường là 1-500 sat/b',
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
    header: 'Nhận coin',
    details: {
      amount: 'Số tiền',
      share: 'Chia sẻ',
      receiveWithAmount: 'Nhận với số tiền',
    },
  },
  settings: {
    language: 'Ngôn ngữ',
    general: 'Thông tin chung',
    security: 'Bảo mật',
    about: 'Khoảng',
    electrumServer: 'Máy chủ Electrum',
    advancedOptions: 'Tùy chọn nâng cao',
    changePin: 'Thay đổi mã PIN',
    fingerprintLogin: 'Đăng nhập bằng dấu vân tay',
    aboutUs: 'Giới thiệu',
    header: 'Cài đặt',
    notSupportedFingerPrint: 'Thiết bị của quý khách không hỗ trợ vân tay',
    TouchID: 'Cho phép nhận dạng vân tay',
    FaceID: 'Cho phép nhận dạng ID khuôn mặt',
    Biometrics: 'Cho phép sinh trắc học ',
  },
  aboutUs: {
    header: 'Giới thiệu',
    releaseNotes: 'Thông tin về phiên bản',
    runSelfTest: 'Chạy tự kiểm tra',
    buildWithAwesome: 'Xây dựng với:',
    rateGoldWallet: 'Đánh giá GoldWallet',
    goToOurGithub: 'Chuyển đến Github của chúng tôi',
    alwaysBackupYourKeys: 'Hãy luôn sao lưu mã khóa của quý khách',
    title: 'GoldWallet là ví Bitcoin Vault miễn phí và mã nguồn mở. MIT được cấp phép.',
  },
  electrumServer: {
    header: 'Máy chủ Electrum',
    title: 'Thay đổi máy chủ electrum',
    description: 'Quý khách có thể thay đổi địa chỉ của máy chủ mà ứng dụng của quý khách kết nối. Địa chỉ mặc định được khuyên dùng.',
    save: 'Lưu',
    useDefault: 'Sử dụng mặc định',
    host: 'host',
    port: 'cổng',
    successfullSave: 'Những thay đổi của quý khách đã được lưu thành công. Có thể cần khởi động lại để thay đổi có hiệu lực.',
    connectionError: 'Không thể kết nối với máy chủ Electrum được cung cấp',
  },
  advancedOptions: {
    title: 'Cấu hình tùy chọn nâng cao',
    description: 'Bật tùy chọn nâng cao sẽ cho phép quý khách chọn từ các loại ví được liệt kê bên dưới: P2SH, HD P2SH, HD segwit.',
  },
  selectLanguage: {
    header: 'Ngôn ngữ',
    restartInfo: 'Khi chọn ngôn ngữ mới, có thể cần khởi động lại GoldWallet để thay đổi có hiệu lực',
    confirmation: 'Xác nhận',
    confirm: 'Xác nhận',
    alertDescription: 'Chọn ngôn ngữ và khởi động lại ứng dụng?',
    cancel: 'Hủy',
  },
  contactList: {
    cancel: 'Hủy',
    search: 'Tìm kiếm',
    screenTitle: 'Sổ địa chỉ',
    noContacts: 'Không có thông tin liên lạc',
    noContactsDesc1: 'Không có thông tin liên lạc nào. \nNhấp vào',
    noContactsDesc2: 'để thêm thông tin liên lạc đầu tiên của quý khách.',
    noResults: 'Không có kết quả cho',
  },
  contactCreate: {
    screenTitle: 'Thêm thông tin liên lạc mới',
    subtitle: 'Thông tin liên lạc mới',
    description: 'Vui lòng nhập tên và địa chỉ\ncho thông tin liên lạc mới của quý khách.',
    nameLabel: 'Tên',
    addressLabel: 'Địa chỉ',
    buttonLabel: 'Thêm thông tin liên lạc mới',
    successTitle: 'Thành công',
    successDescription: 'Xin chúc mừng! Quý khách đã thêm thông tin\nliên lạc thành công.',
    successButton: 'Quay lại Sổ địa chỉ',
  },
  contactDetails: {
    nameLabel: 'Tên',
    addressLabel: 'Địa chỉ',
    editName: 'Chỉnh sửa tên',
    editAddress: 'Sửa địa chỉ',
    sendCoinsButton: 'Gửi coin',
    showQRCodeButton: 'Hiển thị mã QR',
    deleteButton: 'Xóa thông tin liên lạc',
    share: 'Chia sẻ',
  },
  contactDelete: {
    title: 'Xóa thông tin liên lạc của quý khách',
    header: 'Xóa thông tin liên lạc',
    description1: 'Quý khách có chắc chắn muốn xóa không',
    description2: '?\nQuý khách không thể hoàn tác hành động này.',
    no: 'Không',
    yes: 'Có',
    success: 'Thành công',
    successDescription: 'Thông tin liên lạc của quý khách đã được xóa thành công.\nBây giờ quý khách có thể quay lại Sổ địa chỉ.',
    successButton: 'Quay lại Sổ địa chỉ',
  },
  scanQrCode: {
    permissionTitle: 'Quyền sử dụng máy ảnh',
    permissionMessage: 'Chúng tôi cần quý khách cho phép để sử dụng máy ảnh của quý khách',
    ok: 'Ok',
    cancel: 'Hủy',
  },
  filterTransactions: {
    header: 'lọc giao dịch',
    receive: 'nhận',
    send: 'gửi',
    filter: 'lọc ',
    to: 'đến',
    toAmount: 'đến số tiền ',
    toDate: 'đến ngày',
    from: 'từ',
    fromAmount: 'từ số tiền ',
    fromDate: 'từ ngày',
    clearFilters: 'xóa lọc ',
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

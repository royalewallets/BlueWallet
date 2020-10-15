module.exports = {
  _: {
    bad_password: '잘못된 패스워드입니다. 다시 시도하십시오',
    click: '클릭하여',
    confirm: '승인',
    continue: '계속',
    copied: '복사 완료!',
    copy: '복사',
    created: '생성 날짜',
    delete: '삭제',
    enter_password: '패스워드를 입력하십시오',
    here: '여기 클릭',
    invalid: '유효하지 않음',
    languageCode: 'ko',
    never: '아니오',
    next: '다음',
    ok: '확인',
    or: '또는',
    satoshi: '사토시',
    save: '저장',
    storage_is_encrypted: '저장 공간이 암호화되었습니다. 암호를 해제하려면 패스워드가 필요합니다',
  },
  aboutUs: {
    alwaysBackupYourKeys: '항상 키를 백업하십시오',
    buildWithAwesome: '멋진 빌드:',
    goToOurGithub: '당사의 Github로 이동하기',
    header: '회사 소개',
    rateGoldWallet: 'GoldWallet 평가하기',
    releaseNotes: '릴리스 노트',
    runSelfTest: '자체 테스트 실행',
    title: 'GoldWallet은 무료이며 오픈 소스인 비트코인 볼트(Bitcoin Vault) 지갑입니다. 허가받은 MIT.',
  },
  advancedOptions: {
    description: '고급 옵션 설정을 통해 다음의 지갑 종류를 선택할 수 있습니다: P2SH, HD P2SH, HD segwit',
    title: '고급 옵션 설정하기',
  },
  authenticators: {
    add: {
      description:
        'Electrum Vault 데스크톱 애플리케이션을 열어 새 지갑을 생성합니다. QR 코드가 표시될 때까지 화면의 단계를 따릅니다. 계속하려면 이 앱을 사용하여 스캔합니다.',
      subdescription: '아래 옵션을 선택하여 인증기를 가져올 수도 있습니다.',
      subtitle: '인증기 페어링',
      successDescription:
        '백업을 위해 이 시드 문구를 안전한 곳에 적어두세요. 이 문구는 인증기 복원이 필요할 때 사용 합니다. 고속 거래나 취소 거래를 승인하기 위해서는 이 인증기가 필요합니다.',
      successTitle: '인증기가 준비되었습니다!',
      title: '새 인증기 추가',
    },
    delete: {
      subtitle: '인증기 삭제',
      success: '인증기가 성공적으로 삭제 되었습니다. 언제든 새로운 인증기를 생성할 수 있습니다.',
      title: '인증기 삭제',
    },
    enterPIN: {
      description: '페어링을 끝마치려면 Electrum Vault 데스크톱 애플리케이션에 이 PIN 코드를 입력하십시오.',
      subtitle: 'PIN 입력',
    },
    export: {
      title: '인증기 내보내기',
    },
    import: {
      desc1: '시드 문구를 적거나 가져오려는 인증기의 QR 코드를 스캔하십시오.',
      desc2: '아래 "또는 QR 코드 스캔"을 클릭하여 QR 코드 스캔',
      subtitle: '인증기 가져오기',
      success: '인증기를 성공적으로 가져왔습니다. 이제 사용할 준비가 됐습니다.',
      textAreaPlaceholder: '시드 문구',
      title: '인증기 가져오기',
    },
    list: {
      noAuthenticators: '인증기 아직 없음',
      noAuthenticatorsDesc1: '탭하여',
      noAuthenticatorsDesc2: '첫 번째 인증자 추가.',
      scan: '스캔',
      title: 'Bitcoin Vault 인증기',
    },
    options: {
      delete: '인증기 삭제',
      export: '인증기 내보내기',
      pair: '인증기 페어링',
      sectionTitle: '일반',
      title: '인증기 옵션',
    },
    pair: {
      descPin: '데스크톱 애플리케이션에서 인증기를 페어링할 때 이 PIN 코드를 사용하여 확인 하십시오.',
      descPublicKey:
        '데스크톱 애플리케이션에서 GoldWallet 옵션으로 지갑을 생성할 때 이 공개키를 사용하여 인증기를 가져올 수 있습니다.',
      pin: 'PIN',
      publicKey: '공개 키',
      title: '인증기 페어링',
    },
    sign: {
      error: '거래를 승인할 인증기가 없습니다.',
    },
  },
  betaVersion: {
    button: '위험을 감수하겠습니다',
    description:
      '아직 공식 출시 전 최종 테스트 중에 있습니다. 이곳에 보여지는 모든 컨텐츠와 모바일 앱은 "그대로"와 "사용가능" 기반에 제공되어 있습니다. 소프트웨어 사용은 사용자의 위험 감수하에 이루어집니다.',
    title: '이것은 GoldWallet의 베타버전입니다',
  },
  contactCreate: {
    addressLabel: '주소',
    buttonLabel: '새 연락처 추가하기',
    description: '새 연락처의 이름과 주소를 입력하십시오.',
    nameLabel: '이름',
    screenTitle: '새 연락처 추가하기',
    subtitle: '새 연락처',
    successButton: '주소록으로 돌아가기',
    successDescription: '만세! 새 연락처 추가에 성공했습니다.',
    successTitle: '성공',
  },
  contactDelete: {
    description1: '삭제 하시겠습니까',
    description2: '?\n 추후 삭제를 취소할 수 없습니다.',
    header: '연락처 삭제하기',
    no: '아니오',
    success: '성공',
    successButton: '주소록으로 돌아가기',
    successDescription: '연락처 삭제에 성공했습니다.\n 이제 주소록으로 돌아갈 수 있습니다.',
    title: '귀하의 연락처를 삭제하십시오',
    yes: '네',
  },
  contactDetails: {
    addressLabel: '주소',
    deleteButton: '연락처 삭제하기',
    editAddress: '주소 수정',
    editName: '이름 수정',
    nameLabel: '이름',
    sendCoinsButton: '코인 보내기',
    share: '공유',
    showQRCodeButton: 'QR 코드 표시하기',
  },
  contactList: {
    cancel: '취소',
    noContacts: '연락처 없음',
    noContactsDesc1: '표시할 연락처가 없습니다. \n 클릭하여',
    noContactsDesc2: '첫 번째 연락처를 추가합니다',
    noResults: '다음에 관한 결과가 없습니다.',
    screenTitle: '주소록',
    search: '검색하기',
  },
  electrumServer: {
    connectionError: '제공된 일렉트럼(Electrum) 서버에 연결할 수 없습니다',
    description: '애플리케이션을 연결할 서버의 주소를 변경할 수 있습니다. 기본 주소를 사용할 것을 권장합니다.',
    header: '일렉트럼(Electrum) 서버',
    host: '호스트',
    port: '포트',
    save: '저장하기',
    successfullSave: '변경 사항이 저장되었습니다. 변경 사항을 적용하려면 재시작이 필요할 수 있습니다.',
    title: '일렉트럼(Electrum) 서버 변경',
    useDefault: '기본값 사용',
  },
  filterTransactions: {
    clearFilters: '필터 지우기',
    filter: '필터 설정',
    from: '송금인',
    fromAmount: '최소 금액',
    fromDate: '시작일',
    header: '거래 분류',
    receive: '입금',
    received: '받음',
    send: '송금',
    sent: '보냄',
    status: {
      annulled: '무효화',
      canceled: '취소됨',
      done: '완료',
      pending: '보류 중',
      unblocked: '차단 해제됨',
    },
    to: '수취인',
    toAmount: '최대 금액',
    toDate: '종료일',
    transactionStatus: '거래 상태',
    transactionType: '거래 유형',
  },
  message: {
    allDone: '모두 완료!',
    cancelTxSuccess: '거래를 성공적으로 취소했습니다.\n 귀하의 코인이 들어오는 중입니다.',
    creatingAuthenticator: '인증기 생성',
    creatingAuthenticatorDescription: '인증기를 만드는 동안 잠시 기다려주십시오. 다소 시간이 걸릴 수 있습니다.',
    creatingWallet: '지갑 만들기',
    creatingWalletDescription: '지갑을 만드는 동안 잠시 기다려주십시오. 다소 시간이 걸릴 수 있습니다.',
    generateAddressesError: '주소를 생성할 수 없습니다',
    hooray: '만세!',
    importingAuthenticator: '인증기 가져오기',
    importingAuthenticatorDescription: '인증기를 가져오는 동안 잠시 기다려주십시오. 다소 시간이 걸릴 수 있습니다.',
    noTransactions: '지갑에 거래가 없습니다',
    noTransactionsDesc: '한 번도 사용하지 않은 지갑을 가져오려 하고 있습니다',
    returnToAuthenticators: '인증기로 돌아가기',
    returnToDashboard: '대시보드로 돌아가기',
    returnToWalletChoose: '지갑 유형 선택으로 돌아가기',
    returnToWalletImport: '지갑 가져오기로 돌아가기',
    somethingWentWrong: '문제가 발생했습니다',
    somethingWentWrongWhileCreatingWallet:
      '지갑을 생성하는 동안 문제가 발생했습니다. 대시보드로 돌아가 다시 시도해 주십시오.',
    success: '성공',
    successfullWalletDelete: '지갑이 성공적으로 삭제됐습니다. 이제 대시보드로 돌아갈 수 있습니다.',
    successfullWalletImport: '지갑을 성공적으로 가져왔습니다. 이제 사용할 준비가 됐습니다.',
    wrongMnemonic: '잘못된 니모닉',
    wrongMnemonicDesc:
      '니모닉이 지원되는 지갑과 일치하지 않습니다. 잘못된 니모닉 또는 한 번도 사용되지 않은 지갑을 가져 오려 하고 있습니다.',
  },
  onboarding: {
    changePin: 'PIN 코드 변경',
    confirmNewPin: '새로운 PIN 코드 확인하기',
    confirmPassword: '거래 패스워드 확인하기',
    confirmPin: 'PIN 코드 확인하기',
    createNewPin: '새로운 PIN 코드',
    createPassword: '거래 패스워드 생성하기',
    createPasswordDescription:
      '모든 거래를 확인하기 위해 거래 패스워드가 사용됩니다. 설정된 패스워드는 변경이 불가합니다. 거래 패스워드는 반드시 최소 8자 이상의 알파벳과 숫자가 혼용되도록 구성되어야 합니다.',
    createPin: 'PIN 코드 생성하기',
    createPinDescription:
      'PIN 코드를 이용하여 애플리케이션에 로그인 할 수 있습니다. PIN 코드는 나중에 설정에서 변경할 수 있습니다.',
    currentPin: '현재 PIN 코드',
    failedTimes: '시도 실패',
    failedTimesErrorInfo: '세 번 실패 시 액세스가 차단됩니다.',
    goBack: '뒤로 돌아가기',
    minutes: '분.',
    numberOfAttemptsExceeded: '시도 횟수 초과',
    onboarding: '온보딩',
    passwordDoesNotMatch: '패스워드 불일치. 유효한 패스워드를 입력하세요.',
    pin: 'PIN 코드',
    pinDoesNotMatch: 'PIN 코드 불일치. 유효한 PIN 코드를 입력하세요.',
    seconds: '초',
    successButton: '대시보드로 이동',
    successButtonChangedPin: '설정으로 되돌아가기',
    successDescription: '축하드립니다!\n PIN 코드를 성공적으로 생성하였습니다.',
    successDescriptionChangedPin: '축하드립니다!\n PIN 코드를 성공적으로 변경하였습니다.',
    tryAgain: '다음에 다시 시도',
  },
  receive: {
    details: {
      amount: '금액',
      receiveWithAmount: '금액으로 받기',
      share: '공유',
    },
    header: '코인 받기',
  },
  scanQrCode: {
    cancel: '취소',
    ok: '확인',
    permissionMessage: '카메라 사용에 대한 허용이 필요합니다',
    permissionTitle: '카메라 사용 허용',
  },
  security: {
    jailBrokenPhone:
      '귀하의 장치가 탈옥된 것 같습니다. 이런 경우 보안 문제나 충돌, 기타 다양한 문제가 발생할 수 있습니다. 탈옥된 장치에서는 GoldWallet을 사용하지 않는 것이 좋습니다.',
    noPinOrFingerprintSet:
      '기기에 암호나 지문이 등록되어 있지 않습니다. 안전하지 않은 기기로의 GoldWallet 사용을 권장하지 않습니다.',
    rootedPhone:
      '기기가 루팅된 것 같습니다. 이런 경우 보안 문제나 충돌, 기타 다양한 문제가 발생할 수 있습니다. 루팅된 장치에서는 GoldWallet을 사용하지 않는 것이 좋습니다.',
    title: '보안 문제',
  },
  selectLanguage: {
    alertDescription: '언어를 선택하고 애플리케이션을 다시 시작하시겠습니까?',
    cancel: '취소',
    confirm: '확인',
    confirmation: '확인',
    header: '언어',
    restartInfo: '새로운 언어를 선택할 때 변경 사항을 적용하려면 골드월렛(GoldWallet)을 다시 시작해야 할 수 있습니다',
  },
  send: {
    confirm: {
      availableBalance: '거래 후 사용 가능 잔액',
      cancelNow: '지금 취소',
      pendingBalance: '거래 후 미결제 잔액',
      sendNow: '지금 보내기',
    },
    create: {
      amount: '금액',
      fee: '수수료',
      headerText:
        '네트워크에 보류 중인 거래가 많을 때 (>1500), 수수료가 높을수록 거래가 더 빨리 처리됩니다. 일반적인 값은 1-500 sat/b입니다',
      setTransactionFee: '거래 수수료 설정하기',
    },
    details: {
      address: '주소',
      address_field_is_not_valid: '주소 입력창이 유효하지 않습니다',
      amount_field_is_not_valid: '금액 입력창이 유효하지 않습니다',
      amount_placeholder: '보낼 금액(BTCV)',
      cancel: '취소',
      create: '인보이스 생성하기',
      create_tx_error: '거래를 생성하는 중에 오류가 발생했습니다. 주소의 유효성 여부를 확인하십시오.',
      fee: '수수료:',
      fee_field_is_not_valid: '수수료 입력창이 유효하지 않습니다',
      fee_placeholder: '추가 거래 수수료(BTCV)',
      feeUnit: 'Sat/B',
      next: '다음',
      note: '메모 (선택)',
      note_placeholder: '개인 메모',
      remaining_balance: '잔액',
      scan: '스캔',
      send: '보내기',
      title: '거래 생성하기',
      to: '수신',
      total_exceeds_balance: '송금할 금액이 사용 가능한 잔액을 초과합니다.',
    },
    error: {
      description: '거래를 생성하기 전에 먼저 Bitcoin Vault 지갑을 추가해야 합니다.',
      title: '오류',
    },
    header: '코인 보내기',
    recovery: {
      confirmFirstSeed: '취소 시드 문구 확인',
      confirmFirstSeedDesc:
        '지갑을 만들 때 생성한 첫 번째 PDF 문서를 연 후 동일한 순서로 개인 키 시드 문구를 적어 둡니다.',
      confirmSecondSeed: '빠른 시드 문구로 확인',
      confirmSecondSeedDesc:
        '지갑을 만들 때 생성한 두 번째 PDF 문서를 연 후 동일한 순서로 개인 키 시드 문구를 적어 둡니다.',
      confirmSeed: '취소 시드 문구 확인',
      confirmSeedDesc: '지갑을 만들 때 생성한 PDF 문서를 연 후 동일한 순서로 개인 키 시드 문구를 적어 둡니다.',
      recover: '취소',
      useWalletAddress: '이 지갑의 주소 사용',
    },
    success: {
      description: '만세! 코인을 성공적으로 보냈습니다.',
      done: '완료',
      return: '대시보드로 돌아가기',
      title: '성공',
    },
    transaction: {
      alert: '보안 거래',
      alertDesc: '이 거래를 확정하려면 144 블록 또는 약 24시간이 필요합니다. 이 시간 내에 취소할 수 있습니다.',
      fastSuccess: '빠른 거래를 완료하셨습니다.',
      instant: '보안 고속 거래',
      instantDesc: '이 거래는 즉시 확정됩니다. 사용할 때 특별히 주의하시기 바랍니다.',
      lightningError:
        '이 주소는 Lightning 송장용으로 표시됩니다. 이 송장에 대해 지불하려면 Lightning 지갑으로 이동하십시오.',
      scanInstantKeyDesc: '지갑을 만들 때 생성한 PDF 문서를 연 후 개인 키 QR 코드를 스캔하여 거래를 보냅니다.',
      scanInstantKeyTitle: '빠른 키 스캔',
      type: '거래 유형',
      watchOnlyError: '거래를 보낼 수 없는 지갑만 표시',
    },
    warning: '경고:',
    warningGeneral:
      '경고: 안전한 거래 기능 사용 과정에서 귀하의 지갑의 일부 자금이 차단될 수 있습니다. 이것은 UTXO와 비트코인 볼트 지갑 블록체인 범위에 관련된 일반적인 과정입니다. 거래가 검증되거나 (약 24시간 후) 취소되면 (24시간 이내) 자금의 차단이 해제됩니다.',
  },
  settings: {
    about: '소개',
    aboutUs: '회사 소개',
    advancedOptions: '고급 옵션',
    Biometrics: '생체 인증 허용하기',
    changePin: '핀(PIN) 변경',
    electrumServer: '일렉트럼(Electrum) 서버',
    FaceID: 'FaceID 허용하기',
    fingerprintLogin: '지문 로그인',
    general: '일반',
    header: '설정',
    language: '언어',
    notSupportedFingerPrint: '해당 기기는 지문 인식을 지원하지 않습니다.',
    security: '보안',
    TouchID: '지문 인식 허용하기',
  },
  tabNavigator: {
    addressBook: '주소록',
    authenticators: '인증기',
    dashboard: '대시보드',
    settings: '설정',
    wallets: '지갑',
  },
  timeCounter: {
    closeTheApp: '애플리케이션 닫기',
    description: '로그인 시도가 실패하여 응용 프로그램이 차단되었습니다. 일정시간 후 다시 시도할 수 있습니다.',
    title: '애플리케이션이 차단됨',
    tryAgain: '다시 시도',
  },
  transactions: {
    details: {
      addNote: '메모 추가하기',
      addToAddressBook: '주소록에 추가',
      amount: '금액',
      bytes: '바이트',
      confirmations: '확인',
      copy: '복사',
      copyAndBoriadcast: '복사하여 나중에 게시하기',
      details: '세부 사항',
      detailTitle: '거래 상세 내역',
      fee: '수수료',
      from: '발신',
      inputs: '입력',
      noLabel: '라벨 없음',
      note: '메모',
      ouputs: '출력',
      satoshiPerByte: '바이트 당 사토시(Satoshi)',
      sendCoins: '코인 보내기',
      timePending: '보류 시간',
      title: '거래',
      to: '수신',
      transactioFee: '거래 비용',
      transactionDetails: '거래 상세 내역',
      transactionHex: '거래 헥스(hex)',
      transactionHexDescription: '서명된 거래 헥스가 네트워트로 게시될 준비가 되었습니다.',
      transactionId: '거래 ID',
      transactionType: '거래 유형',
      txSize: 'TX 크기',
      verify: 'Coinb.in에서 확인하기',
      viewInBlockRxplorer: '블록 익스플로러(block explorer)에서 보기',
      walletType: '지갑 유형',
    },
    errors: {
      notEnoughBalance: '잔액 부족. 적은 금액으로 시도해 보세요.',
    },
    label: {
      annulled: '무효화',
      canceled: '취소됨',
      done: '완료',
      pending: '보류 중',
      unblocked: '차단 해제됨',
    },
    list: {
      conf: '확인',
    },
    transactionTypeLabel: {
      canceled: '취소됨',
      fast: '빠른',
      secure: '보안 거래',
      secureFast: '보안 고속 거래',
      standard: '표준',
    },
  },
  unlock: {
    confirmButton: '지문 인증 후 넘어가기',
    enter: 'PIN 입력',
    title: '해제',
    touchID: '"Gold Wallet" Touch ID',
  },
  unlockTransaction: {
    description: '거래 패스워드를 입력하여 진행합니다',
    headerText: '거래 승인',
    title: '거래 패스워드 승인',
  },
  wallets: {
    add: {
      addWalletButton: '새 지갑 추가',
      advancedOptions: '고급 옵션',
      air: '보안 거래, 취소 거래 및 보안 고속 거래를 수행합니다.',
      ar: '보안 거래 및 취소 거래를 수행합니다.',
      description: '지갑의 이름과 유형을 선택하세요',
      failed: '지갑을 생성하지 못했습니다',
      importWalletButton: '지갑 가져오기',
      inputLabel: '이름',
      legacy: '기본 거래 유형을 만듭니다.',
      legacyHDP2SH: '단일 24-단어 시드에서 생성 된 P2SH 주소 트리를 포함합니다.',
      legacyHDP2SHTitle: '표준 HD P2SH',
      LegacyHDSegWit: '단일 24-단어 시드에서 생성 된 네이티브 SegWit 주소 트리를 포함합니다.',
      legacyHDSegWitTitle: '표준 HD SegWit',
      LegacyP2SH: '단일 P2SH 주소를 포함합니다.',
      legacyP2SHTitle: '표준 P2SH',
      legacyTitle: '표준',
      multipleAddresses: '단일 24-단어 시드에서 생성 된 P2SH 주소 트리를 포함합니다.',
      publicKeyError: '입력된 공개 키가 유효하지 않습니다',
      segwidAddress: '단일 24-단어 시드에서 생성 된 네이티브 SegWit 주소 트리를 포함합니다.',
      singleAddress: '단일 P2SH 주소를 포함합니다.',
      subtitle: '지갑 이름 짓기',
      title: '새 지갑 추가',
      walletType: '지갑 유형',
    },
    addSuccess: {
      description: '백업을 위해 이 시드 문구를 안전한 곳에 적어두세요. 이 문구는 지갑 복원이 필요할 때 사용 합니다.',
      okButton: '네, 적어 두었습니다.',
      subtitle: '지갑이 준비 됐습니다!\n지갑을 만들었습니다!',
      title: '새 지갑 추가',
    },
    dashboard: {
      allWallets: '모든 지갑',
      availableBalance: '사용 가능 잔액',
      noTransactions: '표시할 거래가 없습니다.',
      noWallets: '지갑 없음',
      noWalletsDesc1: '표시할 지갑이 없습니다.',
      noWalletsDesc2: '첫 번째 지갑을 추가합니다.',
      receive: '코인 받기',
      recover: '취소',
      send: '코인 보내기',
      title: '지갑',
      wallet: '지갑',
    },
    deleteWallet: {
      description1: '정말로 삭제하시겠습니까',
      description2: '? 이후엔 삭제를 취소할 수 없습니다.',
      header: '지갑 삭제하기',
      no: '아니오',
      title: '지갑 삭제하기',
      yes: '네',
    },
    details: {
      deleteWallet: '지갑 삭제하기',
      edit: '수정',
      exportWallet: '지갑 내보내기',
      latestTransaction: '최근 거래',
      nameEdit: '이름 수정하기',
      nameLabel: '이름',
      showWalletXPUB: '지갑 XPUB 표시하기',
      typeLabel: '유형',
    },
    errors: {
      duplicatedPublicKey: '해당 공개 키는 이미 추가되었음',
      invalidMnemonic: '유효하지 않은 니모닉',
      invalidMnemonicWordsNumber: '{expectedWordsNumber}이(가) 예상 {receivedWordsNumber}이(가) 입력',
      invalidPrivateKey: '유효하지 않은 개인 키',
      invalidPublicKey: '유효하지 않은 공개 키',
      invalidQrCode: '유효하지 않은 QR 코드',
      invalidSign: '거래에 서명할 수 없음',
      noIndexForWord: '다음 단어에 대한 인덱스를 찾을 수 없음: {word}',
    },
    export: {
      title: '지갑 내보내기',
    },
    exportWallet: {
      header: '지갑 내보내기',
      title: '시드 문구',
    },
    exportWalletXpub: {
      header: '지갑 XPUB',
    },
    import: {
      do_import: '가져오기',
      error: '가져오기 실패함. 기입한 데이터가 유효한지 확인 하십시오.',
      explanation:
        '여기에 니모닉, 개인 키, WIF 등을 적으십시오. GoldWallet은 올바른 형식으로 지갑을 가져오기 위해 최선을 다할 것입니다.',
      imported: '가져옴',
      scan_qr: '아니면 대신 QR 코드를 스캔하시겠습니까?',
      success: '성공',
      title: '가져오기',
    },
    importWallet: {
      chooseTypeDescription: '가져올 지갑 유형을 선택하십시오.',
      header: '지갑 가져오기',
      import: '가져오기',
      importARDescription1: '시드 문구 입력',
      importARDescription2: '가져올 지갑 QR 코드를 스캔하십시오',
      placeholder: '시드 문구, 개인 키, WIF',
      scanCancelPubKey: '취소 키 QR 코드 스캔',
      scanFastPubKey: '고속 거래 키 QR 코드 스캔',
      scanPublicKeyDescription:
        '가져오려는 지갑을 만들 때 생성한 첫 번째 PDF 문서를 열고 이 앱을 사용하여 공개 키 QR 코드를 스캔합니다.',
      scanQrCode: '또는 QR 코드 스캔하기',
      scanWalletAddress: '지갑 주소 스캔',
      scanWalletAddressDescription: 'GoldWallet과 통합하려면 공개 주소 QR 코드를 스캔하십시오.',
      subtitle:
        '여기에 니모닉, 개인 키, WIF 등을 적으십시오. GoldWallet은 올바른 형식으로 지갑을 가져오기 위해 최선을 다할 것입니다.',
      title: '지갑 가져오기',
      unsupportedElectrumVaultMnemonic:
        '이 시드는 Electrum Vault에서 가져 왔으며 현재 지원되지 않습니다. 곧 지원될 예정입니다.',
      walletInUseValidationError: '지갑이 이미 사용 중입니다. 유효한 지갑을 입력하십시오.',
    },
    publicKey: {
      instantDescription:
        '별도의 장치에서 웹 키 생성기로 이동한 후 이 앱을 사용하여 공개 키 QR 코드를 스캔합니다. 키는 반드시 PDF로 내보내야 합니다!',
      instantSubtitle: '빠른 키 추가',
      recoveryDescription:
        '별도의 장치에서 웹 키 생성기로 이동한 후 이 앱을 사용하여 공개 키 QR 코드를 스캔합니다. 키는 반드시 PDF로 내보내야 합니다!',
      recoverySubtitle: '취소 키 추가',
      scan: '스캔',
      webKeyGenerator: '웹 키 생성기:',
    },
    scanQrWif: {
      bad_password: '잘못된 패스워드',
      bad_wif: '잘못된 WIF',
      cancel: '취소',
      decoding: '디코딩',
      go_back: '돌아가기',
      imported_legacy: '가져온 레거시',
      imported_segwit: '가져온 SegWit',
      imported_watchonly: '가져온 워치 전용',
      imported_wif: '가져온 WIF',
      input_password: '패스워드 입력',
      password_explain: '이것은 BIP38 암호화 개인 키입니다',
      wallet_already_exists: '해당 지갑이 이미 존재합니다',
      with_address: '주소로',
    },
    wallet: {
      latest: '최근 거래',
      none: '없음',
      pendingBalance: '미결제 잔액',
    },
    walletModal: {
      btcv: 'BTCV',
      wallets: '지갑',
    },
  },
};

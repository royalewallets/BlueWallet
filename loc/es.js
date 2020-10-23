module.exports = {
  _: {
    bad_password: 'Contraseña incorrecta, inténtelo nuevamente',
    click: 'Haga click',
    confirm: 'Confirmar',
    continue: 'Continuar',
    copied: '¡Copiado!',
    copy: 'Copiar',
    created: 'Creado el',
    delete: 'Eliminar',
    enter_password: 'Escribir contraseña',
    here: 'aquí',
    invalid: 'No válido',
    languageCode: 'es',
    never: 'nunca',
    next: 'Siguiente',
    ok: 'Aceptar',
    or: 'o',
    satoshi: 'Satoshi',
    save: 'Guardar',
    storage_is_encrypted: 'Su almacenamiento está cifrado. Se requiere contraseña para descifrarlo',
  },
  aboutUs: {
    alwaysBackupYourKeys: 'Siempre guarde una copia de seguridad de sus claves',
    buildWithAwesome: 'Construido con genialidad:',
    goToOurGithub: 'Acceda a nuestro Github',
    header: 'Sobre nosotros',
    rateGoldWallet: 'Valorar GoldWallet',
    releaseNotes: 'Notas de la versión',
    runSelfTest: 'Ejecutar autocomprobación',
    title: 'Gold Wallet es un monedero de Bitcoin Vault gratuito y de código abierto. Con licencia MIT.',
  },
  advancedOptions: {
    description:
      'Al activar las opciones avanzadas, podrá elegir entre los tipos de cartera enumerados a continuación: \n P2SH, HD P2SH, HD segwit.',
    title: 'Configurar opciones avanzadas',
  },
  authenticators: {
    add: {
      description:
        'Abra su aplicación de escritorio de Electrum Vault y cree un nuevo monedero. Siga los pasos en la pantalla hasta que vea un código QR. Use esta aplicación para escanearlo y continuar.',
      subdescription: 'También puede importar su autenticador al escoger la siguiente opción.',
      subtitle: 'Emparejar autenticador',
      successDescription:
        'Escriba esta frase mnemotécnica en un lugar seguro. Es su copia de seguridad en caso de que necesite recuperar su autenticador. Recuerde que se necesita el autenticador para confirmar transacciones rápidas y de cancelación.',
      successTitle: '¡Su autenticador está listo!',
      title: 'Agregar un autenticador nuevo',
    },
    delete: {
      subtitle: 'Elimine su autenticador',
      success: 'Se ha eliminado su autenticador correctamente. Puede crear uno nuevo en cualquier momento.',
      title: 'Eliminar autenticador',
    },
    enterPIN: {
      description:
        'Introduzca este Pin en la aplicación de escritorio de Electrum Vault para terminar el proceso de emparejamiento.',
      subtitle: 'Introduzca el PIN',
    },
    export: {
      title: 'Exportar autenticador',
    },
    import: {
      desc1: 'Escriba la frase mnemotécnica o escanee el código QR del autenticador que desea importar.',
      desc2: 'escanee el código QR al hacer clic en "o escanee el código QR" debajo',
      subtitle: 'Importe su autenticador',
      success: 'Ha importado su autenticador correctamente. Ya está listo para usarse.',
      textAreaPlaceholder: 'Frase mnemotécnica',
      title: 'Importar autenticador',
    },
    list: {
      noAuthenticators: 'Aún no hay autenticadores',
      noAuthenticatorsDesc1: 'Presione',
      noAuthenticatorsDesc2: 'para agregar su primer autenticador.',
      scan: 'Escanear',
      title: 'Autenticadores de Bitcoin Vault',
    },
    options: {
      delete: 'Eliminar autenticador',
      export: 'Exportar autenticador',
      pair: 'Emparejar autenticador',
      sectionTitle: 'General',
      title: 'Opciones de autenticador',
    },
    pair: {
      descPin: 'Use este PIN para confirmar el emparejamiento del autenticador en su aplicación de escritorio.',
      descPublicKey:
        'Puede usar esta clave pública para importar su autenticador en la aplicación de escritorio durante el proceso de creación del monedero con la opción de GoldWallet.',
      pin: 'PIN',
      publicKey: 'Clave púbica',
      title: 'Emparejar autenticador',
    },
    sign: {
      error: 'Ninguno de los autenticadores pudo firmar la transacción',
    },
  },
  betaVersion: {
    button: 'Acepto el riesgo',
    description:
      'Aún está en fase de pruebas finales antes de su lanzamiento oficial. La aplicación móvil y todo el contenido que se encuentra en ella se proporciona "tal como está" y según "esté disponible". El uso del programa se realiza por cuenta y riesgo del usuario.',
    title: 'Es una versión beta de GoldWallet',
  },
  contactCreate: {
    addressLabel: 'Dirección',
    buttonLabel: 'Añadir nuevo contacto',
    description: 'Escriba nombre y dirección\n para su nuevo contacto.',
    nameLabel: 'Nombre',
    screenTitle: 'Añadir nuevo contacto',
    subtitle: 'Nuevo contacto',
    successButton: 'Volver a la libreta de direcciones',
    successDescription: '¡Bravo! Ha añadido su contacto correctamente.',
    successTitle: 'Completado',
  },
  contactDelete: {
    description1: '¿Está seguro de que quiere eliminarlo',
    description2: '?\n No podrá deshacer esta operación.',
    header: 'Borrar contacto',
    no: 'No',
    success: 'Completado',
    successButton: 'Volver a la libreta de direcciones',
    successDescription:
      'Su contacto ha sido eliminado correctamente.\n Ahora puede volver a la libreta de direcciones.',
    title: 'Eliminar su contacto',
    yes: 'Sí',
  },
  contactDetails: {
    addressLabel: 'Dirección',
    deleteButton: 'Borrar contacto',
    editAddress: 'Editar dirección',
    editName: 'Editar nombre',
    nameLabel: 'Nombre',
    sendCoinsButton: 'Enviar monedas',
    share: 'Compartir',
    showQRCodeButton: 'Mostrar código QR',
  },
  contactList: {
    cancel: 'Cancelar',
    noContacts: 'No hay contactos',
    noContactsDesc1: 'No hay contactos para mostrar.\n Haga clic',
    noContactsDesc2: 'para añadir su primer contacto.',
    noResults: 'No hay resultados para',
    screenTitle: 'Libreta de direcciones',
    search: 'Buscar',
  },
  electrumServer: {
    connectionError: 'No se puede conectar al servidor Electrum proporcionado',
    description:
      'Puede cambiar la dirección del servidor al que se conectará su aplicación. Se recomienda la dirección por defecto.',
    header: 'Servidor Electrum',
    host: 'host',
    port: 'puerto',
    save: 'Guardar',
    successfullSave:
      'Sus cambios se han guardado correctamente. Puede ser necesario reiniciar para que los cambios surtan efecto.',
    title: 'Cambiar servidor electrum',
    useDefault: 'Usar predeterminado',
  },
  filterTransactions: {
    clearFilters: 'borrar filtros',
    filter: 'filtrar',
    from: 'de',
    fromAmount: 'monto mínimo',
    fromDate: 'fecha de inicio',
    header: 'filtrar transacciones',
    receive: 'recibir',
    received: 'Recibida',
    send: 'enviar',
    sent: 'Enviada',
    status: {
      annulled: 'Anulada',
      canceled: 'Cancelada',
      done: 'Finalizada',
      pending: 'Pendiente',
      unblocked: 'Desbloqueado',
    },
    to: 'para',
    toAmount: 'monto máximo',
    toDate: 'fecha de finalización',
    transactionStatus: 'Estado de la transacción',
    transactionType: 'Tipo de transacción',
  },
  message: {
    allDone: '¡Todo listo!',
    cancelTxSuccess: 'Ha cancelado la transacción correctamente.\nSus monedas están de camino.',
    creatingAuthenticator: 'Creando su autenticador',
    creatingAuthenticatorDescription: 'Tenga paciencia mientras se crea su autenticador.\n Puede tardar un poco.',
    creatingWallet: 'Creación de su monedero',
    creatingWalletDescription: 'Tenga paciencia mientras creamos su monedero. Puede que lleve un tiempo.',
    generateAddressesError: 'No se ha podido generar la dirección',
    hooray: '¡Hurra!',
    importingAuthenticator: 'Importando tus autentificadores',
    importingAuthenticatorDescription: 'Tenga paciencia mientras importamos su autenticador.\n Puede tardar un poco.',
    noTransactions: 'No se ha encontrado ninguna transacción en el monedero',
    noTransactionsDesc: 'Es probable que esté intentando importar un monedero que nunca se ha usado',
    returnToAuthenticators: 'Volver a Autenticadores',
    returnToDashboard: 'Volver al Panel',
    returnToWalletChoose: 'Volver a selección del tipo de monedero',
    returnToWalletImport: 'Volver a importar el monedero',
    somethingWentWrong: 'Algo salió mal',
    somethingWentWrongWhileCreatingWallet:
      'Algo salió mal mientras estábamos creando su monedero. Vuelva al Panel e inténtelo nuevamente.',
    success: 'Completado',
    successfullWalletDelete: 'Su monedero ha sido eliminado correctamente. Ahora puede volver al Panel.',
    successfullWalletImport: 'Su monedero ha sido importado correctamente. Ahora puede volver al Panel.',
    wrongMnemonic: 'Frase mnemotécnica incorrecta',
    wrongMnemonicDesc:
      'Su frase mnemotécnica no coincide con ningún monedero compatible. Está intentado importar una frase mnemotécnica no válida o un monedero que no se ha usado nunca.',
  },
  onboarding: {
    changePin: 'Cambiar PIN',
    confirmNewPin: 'Confirmar nuevo PIN',
    confirmPassword: 'Confirmar contraseña de transacción',
    confirmPin: 'Confirmar PIN',
    createNewPin: 'Nuevo PIN',
    createPassword: 'Crear contraseña de transacción',
    createPasswordDescription:
      'Su contraseña de transacción se utilizará para verificar todas las transacciones. No podrá cambiarla más tarde. La contraseña de transacción debe contener al menos 8 caracteres alfanuméricos.',
    createPin: 'Crear PIN',
    createPinDescription:
      'Su PIN se utilizará para acceder a la aplicación. Puede cambiarlo más tarde en la sección de Configuración.',
    currentPin: 'PIN actual',
    failedTimes: 'Veces que ha fallado',
    failedTimesErrorInfo: 'Después de tres intentos sin éxito, se bloqueará el acceso para',
    goBack: 'Volver',
    minutes: 'minutos.',
    numberOfAttemptsExceeded: 'Se ha excedido el número de intentos',
    onboarding: 'Configuración inicial',
    passwordDoesNotMatch: 'La contraseña no coincide. Por favor, introduzca una contraseña válida.',
    pin: 'PIN',
    pinDoesNotMatch: 'El PIN no coincide. Por favor, introduzca un PIN válido.',
    seconds: 'segundos',
    successButton: 'Ir al Panel',
    successButtonChangedPin: 'Volver a Configuración',
    successDescription: '¡Bravo! \n  Ha creado con éxito su PIN.',
    successDescriptionChangedPin: '¡Bravo! \n  Ha cambiado con éxito su PIN.',
    tryAgain: 'Vuelva intentarlo luego de',
  },
  receive: {
    details: {
      amount: 'Cantidad',
      receiveWithAmount: 'Recibir la cantidad de',
      share: 'Compartir',
    },
    header: 'Recibir monedas',
  },
  scanQrCode: {
    cancel: 'Cancelar',
    ok: 'Aceptar',
    permissionMessage: 'Necesitamos su permiso para usar su cámara',
    permissionTitle: 'Permiso para usar la cámara',
  },
  security: {
    jailBrokenPhone:
      'Su dispositivo parece estar liberado. Esto puede producir riesgos de seguridad, errores u otros problemas. No recomendamos usar GoldWallet con un dispositivo liberado.',
    noPinOrFingerprintSet:
      'Parece que su dispositivo no tiene PIN o huella dactilar configurada. No recomendamos usar el Monedero de Oro en un dispositivo no asegurado.',
    rootedPhone:
      'Su dispositivo parece estar enraizado. Esto puede riesgos de seguridad, errores u otros problemas. No recomendamos usar GoldWallet con un dispositivo enraizado.',
    title: 'Problema de seguridad',
  },
  selectLanguage: {
    alertDescription: '¿Seleccionar idioma y reiniciar la aplicación?',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    confirmation: 'Confirmación',
    header: 'Idioma',
    restartInfo:
      'Al seleccionar un nuevo idioma, puede ser necesario reiniciar GoldWallet para que el cambio surta efecto',
  },
  send: {
    confirm: {
      availableBalance: 'Saldo disponible después de la transacción',
      cancelNow: 'Cancelar ahora',
      pendingBalance: 'Saldo bloqueado después de la transacción',
      sendNow: 'Enviar ahora',
    },
    create: {
      amount: 'Cantidad',
      fee: 'Comisión',
      headerText:
        'Cuando hay una gran cantidad de transacciones pendientes en la red (> 1500), la tarifa más alta dará como resultado que su transacción se procese más rápido. Los valores típicos son 1-500 sat/b',
      setTransactionFee: 'Establezca una comisión de transacción',
    },
    details: {
      address: 'dirección',
      address_field_is_not_valid: 'El campo de dirección no es válido',
      amount_field_is_not_valid: 'El campo de cantidad no es válido',
      amount_placeholder: 'cantidad a enviar (en BTCV)',
      cancel: 'Cancelar',
      create: 'Crear factura',
      create_tx_error: 'Se produjo un error al crear la transacción. Asegúrese de que la dirección sea válida.',
      fee: 'Comisión:',
      fee_field_is_not_valid: 'El campo de comisión no es válido',
      fee_placeholder: 'más la comisión de transacción (en BTCV)',
      feeUnit: 'Sat/B',
      next: 'Siguiente',
      note: 'Nota (opcional)',
      note_placeholder: 'nota personal',
      remaining_balance: 'Saldo restante',
      scan: 'Escanear',
      send: 'Enviar',
      title: 'crear transacción',
      to: 'para',
      total_exceeds_balance: 'El monto de envío excede el saldo disponible.',
    },
    error: {
      description: 'Antes de crear una transacción, primero debe agregar un monedero de Bitcoin Vault.',
      title: 'Error',
    },
    header: 'Enviar monedas',
    recovery: {
      confirmFirstSeed: 'Confirmar con Cancelar Frase Mnemotécnica',
      confirmFirstSeedDesc:
        'Abra el primer documento PDF que generó al crear su monedero y escriba la frase mnemotécnica de la clave privada en el mismo orden',
      confirmSecondSeed: 'Confirmar con Frase Mnemotécnica Rápida',
      confirmSecondSeedDesc:
        'Abre el segundo documento PDF que generó al crear su monedero y escriba la frase mnemotécnica de la clave privada en el mismo orden.',
      confirmSeed: 'Confirmar con Cancelar Frase Mnemotécnica',
      confirmSeedDesc:
        'Abra el documento PDF que generó al crear su monedero y escriba la frase mnemotécnica de la clave privada en el mismo orden.',
      recover: 'Cancelar',
      useWalletAddress: 'Usar la dirección de este monedero',
    },
    success: {
      description: '¡Bravo! Ha finalizado la transacción correctamente.',
      done: 'Hecho',
      return: 'Volver al Panel',
      title: 'Completado',
    },
    transaction: {
      alert: 'Estándar',
      alertDesc:
        'Esta transacción necesita 144 bloques o unas 24 horas para confirmarse. Puede cancelarla durante este tiempo.',
      fastSuccess: 'Su transacción rápida se ha realizado correctamente.',
      instant: 'Rápida',
      instantDesc: 'Esta transacción será confirmada inmediatamente. Úsela con extrema precaución.',
      lightningError:
        'Esta dirección aparece para la factura de Lightning. Vaya a su monedero de Lightning para poder realizar el pago de esta factura.',
      scanInstantKeyDesc:
        'Abra el documento PDF que generó al crear su monedero y escanee el código QR de la clave privada para enviar la transacción.',
      scanInstantKeyTitle: 'Escanee la Clave Rápida',
      type: 'Tipo de transacción',
      watchOnlyError: 'Los monederos de solo lectura no pueden enviar transacciones',
    },
    warning: 'Aviso:',
    warningGeneral:
      'Aviso: Tenga en cuenta que en el proceso de utilizar la función de Transacción Segura, una parte de los fondos dejados en su monedero puede quedarse bloqueada. Es un procedimiento normal vinculado con UTXO y con los parámetros de la Blockchain del monedero de Bitcoin Vault. Sus fondos serán desbloqueados una vez la transacción se haya verificado (después de unas 24 horas) o cancelado (dentro de las 24 horas).',
  },
  settings: {
    about: 'Acerca de',
    aboutUs: 'Sobre nosotros',
    advancedOptions: 'Opciones avanzadas',
    Biometrics: 'Permitir biometría',
    changePin: 'Cambiar PIN',
    electrumServer: 'Servidor Electrum',
    FaceID: 'Permitir FaceID',
    fingerprintLogin: 'Inicio de sesión con huella digital',
    general: 'General',
    header: 'Configuración',
    language: 'Idioma',
    notSupportedFingerPrint: 'Su dispositivo no admite huellas digitales',
    security: 'Seguridad',
    TouchID: 'Permitir huella digital',
  },
  tabNavigator: {
    addressBook: 'Libreta de direcciones',
    authenticators: 'Autenticadores',
    dashboard: 'Panel',
    settings: 'Configuración',
    wallets: 'Monederos',
  },
  timeCounter: {
    closeTheApp: 'Cerrar la aplicación',
    description:
      'Se ha bloqueado su aplicación debido a los intentos de iniciar sesión sin éxito. Espere el tiempo necesario para poder volver a intentarlo.',
    title: 'Aplicación bloqueada',
    tryAgain: 'Volver a intentarlo',
  },
  transactions: {
    details: {
      addNote: 'Añadir nota',
      addToAddressBook: 'Agregar a la libreta de direcciones',
      amount: 'Cantidad',
      bytes: 'bytes',
      confirmations: 'confirmaciones',
      copy: 'Copiar',
      copyAndBoriadcast: 'Copiar y transmitir más tarde',
      details: 'Detalles',
      detailTitle: 'Detalles de la transacción',
      fee: 'Comisión',
      from: 'De',
      inputs: 'Inputs',
      noLabel: 'Sin etiqueta',
      note: 'Nota',
      ouputs: 'Outputs',
      satoshiPerByte: 'Satoshi por byte',
      sendCoins: 'Enviar monedas',
      timePending: 'Tiempo restante',
      title: 'Transacción',
      to: 'Para',
      transactioFee: 'Tarifa de transacción',
      transactionDetails: 'Detalles de la transacción',
      transactionHex: 'Transacción en hexadecimal',
      transactionHexDescription: 'Esta es una transacción hexadecimal, firmada y lista para ser transmitida a la red',
      transactionId: 'ID de transacción',
      transactionType: 'Tipo de transacción',
      txSize: 'Tamaño TX',
      verify: 'Verificar en coinb.in',
      viewInBlockRxplorer: 'Ver en el explorador de bloques',
      walletType: 'Tipo de monedero',
    },
    errors: {
      notEnoughBalance: 'No hay saldo suficiente. Por favor, intente enviar una cantidad menor.',
    },
    label: {
      annulled: 'anulada',
      canceled: 'cancelada',
      done: 'finalizada',
      pending: 'pendiente',
      unblocked: 'desbloqueado',
    },
    list: {
      conf: 'Confirmaciones',
    },
    transactionTypeLabel: {
      canceled: 'Cancelación',
      fast: 'Rápida',
      secure: 'Seguro',
      secureFast: 'Rápida y segura',
      standard: 'Estándar',
    },
  },
  unlock: {
    confirmButton: 'Confirmar la huella digital para continuar.',
    enter: 'Introducir PIN',
    title: 'Desbloquear',
    touchID: 'Touch ID para «Gold Wallet»',
  },
  unlockTransaction: {
    description: 'Ingrese la contraseña de la transacción para proceder.',
    headerText: 'Confirmar transacción',
    title: 'Confirmar la contraseña de transacción',
  },
  wallets: {
    add: {
      addWalletButton: 'Añadir nuevo monedero',
      advancedOptions: 'Opciones avanzadas',
      air: 'Realiza transacciones estándar, de cancelación y rápidas.',
      ar: 'Realiza transacciones estándar y de cancelación.',
      description: 'Introduzca un nombre para su nuevo monedero.',
      failed: 'No se ha podido crear el monedero',
      importWalletButton: 'Importar monedero',
      inputLabel: 'Nombre',
      legacy: 'Realiza tipos de transacciones predeterminadas.',
      legacyHDP2SH: 'Contiene un árbol de direcciones P2SH generado de una semilla única de 12 palabras',
      legacyHDP2SHTitle: 'Legacy HD P2SH',
      LegacyHDSegWit:
        'Contiene un árbol de direcciones de segwit nativas, generadas a partir de una semilla única de 12 palabras',
      legacyHDSegWitTitle: 'LegacyHD SegWit',
      LegacyP2SH: 'Contiene una única dirección P2SH',
      legacyP2SHTitle: 'Legacy P2SH',
      legacyTitle: 'Legacy',
      multipleAddresses: 'Múltiples direcciones',
      publicKeyError: 'La clave pública proporcionada no es válida',
      segwidAddress:
        'Contiene un árbol de direcciones SegWit nativas, generadas a partir de una única semilla de 12 palabras',
      singleAddress: 'Dirección única',
      subtitle: 'Ponga un nombre a su monedero',
      title: 'Añadir nuevo monedero',
      walletType: 'Tipo de monedero',
    },
    addSuccess: {
      description:
        'Su monedero ha sido creado. Tómese un momento para escribir esta frase mnemotécnica en una hoja de papel. Esta será su copia de seguridad en caso de que necesite recuperar el monedero.',
      okButton: 'De acuerdo, ¡ya lo he escrito!',
      subtitle: 'Completado',
      title: 'Añadir nuevo monedero',
    },
    dashboard: {
      allWallets: 'Todas las carteras',
      availableBalance: 'Saldo disponible',
      noTransactions: 'No hay transacciones para mostrar.',
      noWallets: 'No hay monederos',
      noWalletsDesc1: 'No hay monederos para mostrar.',
      noWalletsDesc2: 'para agregar su primer monedero.',
      receive: 'Recibir monedas',
      recover: 'Cancelar',
      send: 'Enviar monedas',
      title: 'Monederos',
      wallet: 'monedero',
    },
    deleteWallet: {
      description1: '¿Está seguro de que quiere eliminarlo',
      description2: '? No podrá deshacer esta operación.',
      header: 'Eliminar monedero',
      no: 'No',
      title: 'Elimine su monedero',
      yes: 'Sí',
    },
    details: {
      deleteWallet: 'Eliminar monedero',
      edit: 'Editar',
      exportWallet: 'Exportar monedero',
      latestTransaction: 'Última transacción',
      nameEdit: 'Editar nombre',
      nameLabel: 'Nombre',
      showWalletXPUB: 'Mostrar monedero XPUB',
      typeLabel: 'Tipo',
    },
    errors: {
      duplicatedPublicKey: 'Ya se ha agregado la clave pública',
      invalidMnemonic: 'Frase mnemotécnica no válida',
      invalidMnemonicWordsNumber: 'Palabras proporcionadas {receivedWordsNumber} esperadas {expectedWordsNumber}',
      invalidPrivateKey: 'Clave privada no válida',
      invalidPublicKey: 'Clave pública no válida',
      invalidQrCode: 'Código QR no válido',
      invalidSign: 'No se ha podido firmar la transacción',
      noIndexForWord: 'No se ha podido encontrar el índice por palabra: {word}',
    },
    export: {
      title: 'exportar monedero',
    },
    exportWallet: {
      header: 'Exportar monedero',
      title: 'Frase mnemotécnica',
    },
    exportWalletXpub: {
      header: 'Monedero XPUB',
    },
    import: {
      do_import: '¿Importar',
      error: 'Error al importar. Asegúrese de que los datos proporcionados sean válidos.',
      explanation:
        'Escriba aquí su clave mnemotécnica privada, WIF o cualquier cosa que tenga. GoldWallet hará todo lo posible para adivinar el formato correcto e importar su monedero',
      imported: 'Importado',
      scan_qr: 'o escanear el código QR en su lugar?',
      success: 'Completado',
      title: 'importar',
    },
    importWallet: {
      chooseTypeDescription: 'Seleccione el tipo de monedero que desea importar',
      header: 'Importar monedero',
      import: 'Importar',
      importARDescription1: 'Introduzca la frase mnemotécnica',
      importARDescription2: 'Escanee el código QR del monedero que desea importar',
      placeholder: 'Frase mnemotécnica, clave privada, WIF',
      scanCancelPubKey: 'Escanee el código QR de la clave de Cancelación',
      scanFastPubKey: 'Escanee el código QR de la Clave Rápida',
      scanPublicKeyDescription:
        'Abra el primer documento PDF que generó cuando creó el monedero que desea importar y use esta aplicación para escanear el código QR de la clave pública.',
      scanQrCode: 'o escanear el código QR',
      scanWalletAddress: 'Escanee la dirección del monedero',
      scanWalletAddressDescription:
        'Escanee el código QR de la dirección pública para iniciar la integración con GoldWallet.',
      subtitle:
        'Escriba aquí su frase mnemotécnica, clave privada, WIF o cualquier dato que tenga. GoldWallet hará todo lo posible para adivinar el formato correcto e importar su monedero.',
      title: 'Importe su monedero',
      unsupportedElectrumVaultMnemonic:
        'Esta frase mnemotécnica es de Electrum Vault y actualmente no es compatible. Será compatible próximamente.',
      walletInUseValidationError: 'El monedero ya está en uso. Introduzca un monedero válido.',
    },
    publicKey: {
      instantDescription:
        'Vaya al Generador de Claves web en un dispositivo diferente y use esta aplicación para escanear el código QR público. ¡Recuerde exportar sus claves como PDF!',
      instantSubtitle: 'Agregar Clave Rápida',
      recoveryDescription:
        'Vaya al Generador de Claves web en un dispositivo diferente y use esta aplicación para escanear el código QR público. ¡Recuerde exportar sus claves como PDF!',
      recoverySubtitle: 'Agregar Clave de Cancelación',
      scan: 'Escanear',
      webKeyGenerator: 'Generador de claves web:',
    },
    scanQrWif: {
      bad_password: 'Contraseña incorrecta',
      bad_wif: 'WIF incorrecto',
      cancel: 'Cancelar',
      decoding: 'Descifrando',
      go_back: 'Volver',
      imported_legacy: 'Legacy importado',
      imported_segwit: 'SegWit importado',
      imported_watchonly: 'Versión de solo lectura importada',
      imported_wif: 'WIF importado',
      input_password: 'Introduzca la contraseña',
      password_explain: 'Esta es la clave privada cifrada BIP38',
      wallet_already_exists: 'Este monedero ya existe',
      with_address: 'con dirección',
    },
    wallet: {
      latest: 'Última transacción',
      none: 'Ninguna',
      pendingBalance: 'Saldo bloqueado',
    },
    walletModal: {
      btcv: 'BTCV',
      wallets: 'Monederos',
    },
  },
  connectionIssue: {
    noInternetTitle: 'Sin conexión a internet',
    noInternetDescription: 'Asegúrese de que el WI-FI o los datos móviles están encendidos e inténtelo de nuevo.',
    offlineMessageTitle: "Está offline",
    offlineMessageDescription: 'Conéctese a internet para restaurar la funcionalidad total.',
    offlineMessageDescription2: 'Conéctese a internet para continuar a usar estas funciones.',
    noNetworkTitle: 'No hay red',
    noNetworkDescription:
      'Su internet funciona, pero no está conectado a la red. Por favor, espere unos minutos e inténtelo de nuevo.',
  },
};

module.exports = {
  _: {
    languageCode: 'es',
    storage_is_encrypted: 'Su almacenamiento está cifrado. Se requiere contraseña para descifrarlo',
    enter_password: 'Escribir contraseña',
    bad_password: 'Contraseña incorrecta, inténtelo nuevamente',
    never: 'nunca',
    continue: 'Continuar',
    ok: 'Aceptar',
    click: 'Clic',
    here: 'aquí',
    save: 'Guardar',
    confirm: 'Confirmar',
    copy: 'Copiar',
    copied: '¡Copiado!',
  },
  tabNavigator: {
    dashboard: 'Panel',
    settings: 'Configuración',
  },
  message: {
    somethingWentWrong: 'Algo salió mal',
    somethingWentWrongWhileCreatingWallet:
      'Algo salió mal mientras estábamos creando su monedero. Vuelva al Panel e inténtelo nuevamente.',
    success: 'Completado',
    successfullWalletImport: 'Su monedero ha sido importado correctamente. Ahora puede volver al Panel.',
    successfullWalletDelete: 'Su monedero ha sido eliminado correctamente. Ahora puede volver al Panel.',
    returnToDashboard: 'Volver al Panel',
    creatingWallet: 'Creación de su monedero',
    creatingWalletDescription: 'Tenga paciencia mientras creamos su monedero. Puede que lleve un tiempo.',
  },
  onboarding: {
    onboarding: 'Configuración inicial',
    pin: 'PIN',
    createPin: 'Crear PIN',
    createNewPin: 'Nuevo PIN',
    createPassword: 'Crear contraseña de transacción',
    createPinDescription:
      'Su PIN se utilizará para acceder a la aplicación. Puede cambiarlo más tarde en la sección de Configuración.',
    confirmPin: 'Confirmar PIN',
    confirmNewPin: 'Confirmar nuevo PIN',
    confirmPassword: 'Confirmar contraseña de transacción',
    passwordDoesNotMatch: 'La contraseña no coincide. Por favor, introduzca una contraseña válida.',
    createPasswordDescription:
      'Su contraseña de transacción se utilizará para verificar todas las transacciones. No podrá cambiarla más tarde. La contraseña de transacción debe contener al menos 8 caracteres alfanuméricos.',
    changePin: 'Cambiar PIN',
    currentPin: 'PIN actual',
    pinDoesNotMatch: 'El PIN no coincide. Por favor, introduzca un PIN válido.',
    successDescription: '¡Bravo! \n Ha creado con éxito su PIN.',
    successDescriptionChangedPin: '¡Bravo! \n Ha cambiado con éxito su PIN.',
    successButton: 'Ir al Panel',
    successButtonChangedPin: 'Volver a Configuración',
  },
  unlock: {
    title: 'Desbloquear',
    touchID: 'Touch ID para «Gold Wallet»',
    confirmButton: 'Confirmar la huella digital para continuar.',
    enter: 'Introducir PIN',
  },
  unlockTransaction: {
    headerText: 'Confirmar transacción',
    title: 'Confirmar la contraseña de transacción',
    description: 'Confirmar la contraseña de transacción para proceder a la transacción.',
  },
  wallets: {
    dashboard: {
      title: 'Monederos',
      allWallets: 'Todas las carteras',
      noWallets: 'No hay monederos',
      noWalletsDesc1: 'No hay monederos para mostrar.',
      noWalletsDesc2: 'para agregar su primer monedero.',
      send: 'Enviar monedas',
      receive: 'Recibir monedas',
      noTransactions: 'No hay transacciones para mostrar.',
    },
    walletModal: { btcv: 'BTCV', wallets: 'Monederos' },
    importWallet: {
      title: 'Importe su monedero',
      header: 'Importar monedero',
      subtitle:
        'Escriba aquí su frase mnemotécnica, clave privada, WIF o cualquier dato que tenga. GoldWallet hará todo lo posible para adivinar el formato correcto e importar su monedero.',
      placeholder: 'Frase mnemotécnica, clave privada, WIF',
      import: 'Importar',
      scanQrCode: 'o escanear el código QR',
      walletInUseValidationError: 'El monedero ya está en uso. Introduzca un monedero válido.',
    },
    exportWallet: { title: 'Frase mnemotécnica', header: 'Exportar monedero' },
    exportWalletXpub: { header: 'Monedero XPUB' },
    deleteWallet: {
      title: 'Elimine su monedero',
      header: 'Eliminar monedero',
      description1: '¿Está seguro que quiere eliminarlo',
      description2: '? No podrá deshacer esta operación.',
      no: 'No',
      yes: 'Sí',
    },
    wallet: { none: 'Ninguna', latest: 'Última transacción' },
    add: {
      title: 'Añadir nuevo monedero',
      subtitle: 'Ponga un nombre a su monedero',
      description: 'Introduzca un nombre para su nuevo monedero.',
      inputLabel: 'Nombre',
      addWalletButton: 'Añadir nuevo monedero',
      importWalletButton: 'Importar monedero',
      advancedOptions: 'Opciones avanzadas',
      multipleAddresses: 'Múltiples direcciones',
      singleAddress: 'Dirección única',
      segwidAddress:
        'Contiene un árbol de direcciones SegWit nativas, generadas a partir de una única semilla de 24 palabras',
    },
    addSuccess: {
      title: 'Añadir nuevo monedero',
      subtitle: 'Completado',
      description:
        'Su monedero ha sido creado. Tómese un momento para escribir esta frase mnemotécnica en una hoja de papel. Es su copia de seguridad. Puede usarlo para restaurar el monedero en otros dispositivos.',
      okButton: 'De acuerdo, ¡ya lo he escrito!',
    },
    details: {
      edit: 'Editar',
      latestTransaction: 'Última transacción',
      typeLabel: 'Tipo',
      nameLabel: 'Nombre',
      exportWallet: 'Exportar monedero',
      showWalletXPUB: 'Mostrar monedero XPUB',
      deleteWallet: 'Eliminar monedero',
      nameEdit: 'Editar nombre',
    },
    export: { title: 'exportar monedero' },
    import: {
      title: 'importar',
      explanation:
        'Escriba aquí su clave mnemotécnica privada, WIF o cualquier cosa que tenga. GoldWallet hará todo lo posible para adivinar el formato correcto e importar su monedero',
      imported: 'Importado',
      error: 'Error al importar. Asegúrese de que los datos proporcionados sean válidos.',
      success: 'Completado',
      do_import: '¿Importar',
      scan_qr: 'o escanear el código QR en su lugar?',
    },
    scanQrWif: {
      go_back: 'Volver',
      cancel: 'Cancelar',
      decoding: 'Descifrando',
      input_password: 'Introduzca la contraseña',
      password_explain: 'Esta es la clave privada cifrada BIP38',
      bad_password: 'Contraseña incorrecta',
      wallet_already_exists: 'Este monedero ya existe',
      bad_wif: 'WIF incorrecto',
      imported_wif: 'WIF importado',
      with_address: 'con direccion',
      imported_segwit: 'SegWit importado',
      imported_legacy: 'Legacy importado',
      imported_watchonly: 'Versión de solo lectura importada',
    },
  },
  transactions: {
    list: { conf: 'Confirmaciones' },
    details: {
      title: 'Transacción',
      detailTitle: 'Detalles de la transacción',
      transactionHex: 'Transacción en hexadecimal',
      transactionHexDescription: 'Esta es una transacción hexadecimal, firmada y lista para ser transmitida a la red',
      copyAndBoriadcast: 'Copiar y transmitir más tarde',
      verify: 'Verificar en coinb.in',
      amount: 'Cantidad',
      fee: 'Comisión',
      txSize: 'Tamaño TX',
      satoshiPerByte: 'Satoshi por byte',
      from: 'De',
      to: 'Para',
      bytes: 'bytes',
      copy: 'Copiar',
      noLabel: 'Sin etiqueta',
      details: 'Detalles',
      transactionId: 'ID de transacción',
      confirmations: 'confirmaciones',
      transactionDetails: 'Detalles de la transacción',
      viewInBlockRxplorer: 'Ver en el explorador de bloques',
      addNote: 'Añadir nota',
      note: 'Nota',
      inputs: 'Inputs',
      ouputs: 'Outputs',
      sendCoins: 'Enviar monedas',
    },
  },
  send: {
    header: 'Enviar monedas',
    success: {
      title: 'Completado',
      description: '¡Bravo! Ha finalizado la transacción correctamente.',
      done: 'Hecho',
      return: 'Volver al Panel',
    },
    details: {
      title: 'crear transacción',
      amount_field_is_not_valid: 'El campo de cantidad no es válido',
      fee_field_is_not_valid: 'El campo de comisión no es válido',
      address_field_is_not_valid: 'El campo de dirección no es válido',
      create_tx_error: 'Se produjo un error al crear la transacción. Asegúrese de que la dirección sea válida.',
      address: 'dirección',
      amount_placeholder: 'cantidad a enviar (en BTCV)',
      fee_placeholder: 'más la comisión de transacción (en BTCV)',
      note_placeholder: 'nota personal',
      cancel: 'Cancelar',
      scan: 'Escanear',
      send: 'Enviar',
      next: 'Siguiente',
      note: 'Nota (opcional)',
      to: 'para',
      feeUnit: 'Sat/B',
      fee: 'Comisión:',
      create: 'Crear factura',
      remaining_balance: 'Saldo restante',
      total_exceeds_balance: 'El monto de envío excede el saldo disponible.',
    },
    confirm: { sendNow: 'Enviar ahora' },
    create: {
      amount: 'Cantidad',
      fee: 'Comisión',
      setTransactionFee: 'Establezca una comisión de transacción',
      headerText:
        'Cuando hay una gran cantidad de transacciones pendientes en la red (> 1500), la tarifa más alta dará como resultado que su transacción se procese más rápido. Los valores típicos son 1-500 sat/b',
    },
  },
  receive: {
    header: 'Recibir monedas',
    details: {
      amount: 'Cantidad',
      share: 'Compartir',
      receiveWithAmount: 'Recibir con cantidad',
    },
  },
  settings: {
    language: 'Idioma',
    general: 'General',
    security: 'Seguridad',
    about: 'Acerca de',
    electrumServer: 'Servidor Electrum',
    advancedOptions: 'Opciones avanzadas',
    changePin: 'Cambiar PIN',
    fingerprintLogin: 'Inicio de sesión con huella digital',
    aboutUs: 'Sobre nosotros',
    header: 'Configuración',
    notSupportedFingerPrint: 'Su dispositivo no admite huellas digitales',
    TouchID: 'Permitir huella digital',
    FaceID: 'Permitir FaceID',
    Biometrics: 'Permitir biometría',
  },
  aboutUs: {
    header: 'Sobre nosotros',
    releaseNotes: 'Notas de la versión',
    runSelfTest: 'Ejecutar autocomprobación',
    buildWithAwesome: 'Construido con genialidad:',
    rateGoldWallet: 'Valorar GoldWallet',
    goToOurGithub: 'Acceda a nuestro Github',
    alwaysBackupYourKeys: 'Siempre guarde una copia de seguridad de sus claves',
    title: 'Gold Wallet es un monedero de Bitcoin Vault gratuito y de código abierto. Con licencia MIT.',
  },
  electrumServer: {
    header: 'Servidor Electrum',
    title: 'Cambiar servidor electrum',
    description:
      'Puede cambiar la dirección del servidor al que se conectará su aplicación. Se recomienda la dirección por defecto.',
    save: 'Guardar',
    useDefault: 'Usar predeterminado',
    host: 'host',
    port: 'puerto',
    successfullSave:
      'Sus cambios se han guardado correctamente. Puede ser necesario reiniciar para que los cambios surtan efecto.',
    connectionError: 'No se puede conectar al servidor Electrum proporcionado',
  },
  advancedOptions: {
    title: 'Configurar opciones avanzadas',
    description:
      'Al activar las opciones avanzadas, podrá elegir entre los tipos de cartera enumerados a continuación: \n' +
      'P2SH, HD P2SH, HD segwit.',
  },
  selectLanguage: {
    header: 'Idioma',
    restartInfo:
      'Al seleccionar un nuevo idioma, puede ser necesario reiniciar GoldWallet para que el cambio surta efecto',
    confirmation: 'Confirmación',
    confirm: 'Confirmar',
    alertDescription: '¿Seleccionar idioma y reiniciar la aplicación?',
    cancel: 'Cancelar',
  },
  contactList: {
    cancel: 'Cancelar',
    search: 'Buscar',
    bottomNavigationLabel: 'Libreta de direcciones',
    screenTitle: 'Libreta de direcciones',
    noContacts: 'No hay contactos',
    noContactsDesc1: 'No hay contactos para mostrar.\nHaga clic',
    noContactsDesc2: 'para añadir su primer contacto.',
    noResults: 'No hay resultados para',
  },
  contactCreate: {
    screenTitle: 'Añadir nuevo contacto',
    subtitle: 'Nuevo contacto',
    description: 'Escriba nombre y dirección\npara su nuevo contacto.',
    nameLabel: 'Nombre',
    addressLabel: 'Dirección',
    buttonLabel: 'Añadir nuevo contacto',
    successTitle: 'Completado',
    successDescription: '¡Bravo! Ha añadido su contacto correctamente.',
    successButton: 'Volver a la libreta de direcciones',
  },
  contactDetails: {
    nameLabel: 'Nombre',
    addressLabel: 'Dirección',
    editName: 'Editar nombre',
    editAddress: 'Editar dirección',
    sendCoinsButton: 'Enviar monedas',
    showQRCodeButton: 'Mostrar código QR',
    deleteButton: 'Borrar contacto',
    share: 'Compartir',
  },
  contactDelete: {
    title: 'Eliminar su contacto',
    header: 'Borrar contacto',
    description1: '¿Está seguro que quiere eliminarlo',
    description2: '?\nNo podrá deshacer esta operación.',
    no: 'No',
    yes: 'Sí',
    success: 'Completado',
    successDescription:
      'Su contacto ha sido eliminado correctamente.\n' + 'Ahora puede volver a la libreta de direcciones.',
    successButton: 'Volver a la libreta de direcciones',
  },
  scanQrCode: {
    permissionTitle: 'Permiso para usar la cámara',
    permissionMessage: 'Necesitamos su permiso para usar su cámara',
    ok: 'Aceptar',
    cancel: 'Cancelar',
  },
  filterTransactions: {
    header: 'filtrar transacciones',
    receive: 'recibir',
    send: 'enviar',
    filter: 'filtrar',
    to: 'para',
    toAmount: 'monto máximo',
    toDate: 'fecha de finalización',
    from: 'de',
    fromAmount: 'monto mínimo',
    fromDate: 'fecha de inicio',
    clearFilters: 'borrar filtros',
  },
};

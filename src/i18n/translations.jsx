// src/i18n/translations.jsx
export const SUPPORTED_LANGS = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'pt', label: 'Português' },
  { code: 'it', label: 'Italiano' },
];

export const DEFAULT_LANG = 'es';

// ⚠️ “Luz Psíquica” NO se traduce (marca fija)
export const translations = {
  es: {
    nav_home: 'Inicio',
    nav_legal: 'Legal',
    nav_lang: 'Idioma',
    lang_title: 'Selecciona el idioma',
    legal_title: 'Legalidad de la app',
    legal_body: 'Aquí iremos integrando Términos, Privacidad y avisos legales antes de producción final.',
    close: 'Cerrar',

    // mínimos para pantallas (puedes ampliar luego)
    login_header_title: 'Iniciar sesión',
    login_title: 'Luz Psíquica',
    login_subtitle: 'Accede a tu cuenta para continuar',
    login_email_or_phone: 'Correo o teléfono',
    login_phone_helper: 'Si usas teléfono, ingrésalo en formato internacional (ej. +573001234567).',
    login_password: 'Contraseña',
    login_enter: 'Ingresar',
    login_forgot: '¿Olvidaste tu contraseña?',
    login_client_register: '¿Eres cliente? Crear cuenta',
    login_psychic_apply: '¿Eres psíquico? Postúlate para trabajar con nosotros',
    login_error_title: 'Error de inicio de sesión',
    login_missing_credentials: 'Por favor ingresa tu número y contraseña.',

    agora_title: 'Llamada (placeholder)',
    agora_psychic: 'Psíquico',
    agora_room: 'Sala',
    agora_call_id: 'CallId',
    agora_initial_minutes: 'Minutos iniciales',
    agora_socket: 'Socket',
    agora_status: 'Estado',
    agora_back: 'Volver',
    agora_note:
      '* Si el cliente cuelga o el psíquico rechaza, esta pantalla debe cerrarse automáticamente (socket + polling).',

    call_end_title: 'Llamada finalizada',
    call_end_ok: 'OK',
    call_end_default: 'La llamada finalizó.',
    call_end_missed: 'La llamada fue rechazada/perdida.',
    call_end_cancelled: 'La llamada fue cancelada (sin cobro).',
    call_end_caller_hungup: 'El cliente colgó la llamada.',

    cfg_error_title: 'Error de configuración',
    cfg_error_body: 'No se ha configurado EXPO_PUBLIC_API_URL.',
    error_title: 'Error',
    error_no_callid: 'No se recibió callId.',
    session_expired_title: 'Sesión expirada',
    session_expired_body: 'No se encontró el usuario autenticado.',
    psychic_fallback_name: 'Psíquico',
    dash_placeholder: '—',

    buy_minutes_header_title: 'Comprar minutos',

    buy_minutes_title: 'Comprar minutos',
    buy_minutes_subtitle:
      'Compra paquetes de minutos (PayPal). El consumo se descuenta en llamadas y chat.',
    buy_minutes_current_balance: 'Tus minutos actuales',
    buy_minutes_pending_title: 'Pago pendiente',
    buy_minutes_order: 'Orden',
    buy_minutes_total: 'Total',
    buy_minutes_confirming: 'Confirmando pago...',
    buy_minutes_return_hint: 'Vuelve a la app tras aprobar en PayPal.',
    buy_minutes_paid_fallback: 'Ya pagué (fallback)',
    buy_minutes_cancel: 'Cancelar',
    buy_minutes_pkg_minutes: 'minutos',
    buy_minutes_tap_to_pay: 'Toca para iniciar pago en PayPal',

    session_expired: 'Tu sesión expiró. Inicia sesión de nuevo.',
    paypal_approve_url_missing: 'PayPal no devolvió la URL de aprobación.',

    payment_success_balance:
      'Pago exitoso. Se acreditaron {{added}} minutos. Nuevo saldo: {{balance}}.',
    payment_confirmed_balance:
      'Pago confirmado. Saldo actualizado: {{balance}}.',

    discount_label: 'Descuento: {{pct}}%',

    paypal_continue_title: 'Continúa en PayPal',
    paypal_continue_body:
      'Aprueba el pago en PayPal.\n\nAl volver a la app, se confirmará automáticamente.',

    purchase_success_title: 'Compra exitosa',
    purchase_success_body:
      'Pago confirmado.\nSe agregaron {{added}} minutos.',

    payment_cancelled_title: 'Pago cancelado',
    payment_cancelled_body: 'Cancelaste el pago en PayPal.',

    err_title: 'Error',
    err_load_minutes: 'No se pudo cargar el saldo de minutos.',
    err_no_config: 'EXPO_PUBLIC_API_URL no está configurado',
    err_not_auth: 'Usuario no autenticado',
    err_create_order: 'No se pudo crear la orden de PayPal.',
    err_open_paypal: 'No se pudo abrir PayPal en este dispositivo.',
    err_capture_payment: 'No se pudo capturar el pago.',
    err_auto_finish_title: 'No se pudo finalizar automáticamente',
    err_auto_finish_body:
      'El pago aún no se confirma. Si acabas de aprobar, intenta de nuevo en unos segundos.',
    err_read_paypal_token: 'No se pudo leer el token de PayPal para finalizar la compra.',

    pending_still_not_confirmed_title: 'Aún no se confirma el pago',
    pending_still_not_confirmed_body:
      'No se pudo capturar todavía. Verifica que hayas aprobado el pago en PayPal y vuelve a intentar.',
    retry: 'Reintentar',
    dash_placeholder2: '--',
    minutes_suffix: 'min',

    callhist_header_title: 'Historial de llamadas',

    callhist_title_default: 'Historial de llamadas',
    callhist_title_with_name: 'Historial de llamadas',

    callhist_loading: 'Cargando historial…',
    callhist_back_dashboard: 'Volver al panel',
    callhist_refresh: 'Actualizar historial',
    callhist_empty: 'Aún no tienes sesiones registradas.',
    callhist_not_enough_data: 'Aún no hay datos suficientes.',

    callhist_summary_minutes_title: 'Resumen de minutos',
    callhist_summary_earnings_title: 'Resumen de ganancias',

    callhist_minutes_available: 'Minutos disponibles',
    callhist_minutes_spent_calls: 'Minutos gastados (📞)',
    callhist_minutes_spent_chats: 'Minutos gastados (💬)',
    callhist_minutes_spent_total: 'Total gastados',

    callhist_minutes_earned_calls: 'Minutos ganados (📞)',
    callhist_minutes_earned_chats: 'Minutos ganados (💬)',
    callhist_minutes_earned_total: 'Total minutos ganados',
    callhist_earnings_total: 'Ganancia acumulada',

    callhist_summary_by_client: 'Resumen por cliente',
    callhist_summary_by_psychic: 'Resumen por psíquico',

    callhist_status_finished: 'Finalizada',
    callhist_status_missed: 'Rechazada/Perdida',
    callhist_status_ongoing: 'En curso',
    callhist_status_cancelled: 'Cancelada',
    callhist_placeholder: '—',

    callhist_type_chat: '💬 Chat',
    callhist_type_voice: '📞 Llamada',

    callhist_start: 'Inicio',
    callhist_end: 'Fin',

    callhist_duration: '⏱ {{secs}}s',
    callhist_minutes_charged: '⌛ {{mins}} min cobrados',
    callhist_no_charge: ' · Sin cobro',
    callhist_earning_line: ' · 💰 ${{usd}} USD',

    callhist_rate_your_rating: 'Tu calificación: {{rating}}/5',
    callhist_rate_prompt: 'Calificar esta llamada:',
    callhist_rate_saving: 'Guardando…',

    callhist_rate_confirm_title: 'Confirmar calificación',
    callhist_rate_confirm_body: '¿Quieres calificar con {{stars}} estrellas?',
    callhist_cancel: 'Cancelar',
    callhist_yes: 'Sí',

    callhist_thanks: 'Gracias',
    callhist_rate_saved: 'Tu calificación fue guardada.',

    callhist_err_config_title: 'Error de configuración',
    callhist_err_config_body: 'No se ha configurado EXPO_PUBLIC_API_URL.',
    callhist_err_session_title: 'Sesión expirada',
    callhist_err_session_body_token: 'No se encontró el token. Inicia sesión nuevamente.',
    callhist_err_session_body_login: 'Vuelve a iniciar sesión.',
    callhist_err_title: 'Error',
    callhist_err_load: 'No se pudo cargar el historial.',
    callhist_err_rate_save: 'No se pudo guardar la calificación.',

    callhist_psychic_fallback: 'Psíquico',

    chat_header_title: 'Chat con {{name}}',

    chat_loading_session: 'Cargando sesión…',
    chat_not_available_title: 'Chat no disponible',
    chat_not_available_body: 'Faltan datos para abrir el chat: {{missing}}.',
    chat_not_available_hint: '(Revisa que estés navegando con otherUserId y que EXPO_PUBLIC_API_URL exista)',

    chat_block_unavailable: '⛔ El psíquico no está disponible. Puedes ver el chat, pero no enviar mensajes.',
    chat_block_no_minutes: '⛔ No tienes minutos disponibles. Puedes ver el historial, pero debes comprar minutos para chatear.',

    chat_inactivity_warning_prefix: '⚠️ Inactividad detectada. El chat se pausará en {{sec}}s.',
    chat_timeout_bar: '⏸️ Chat pausado por inactividad. {{msg}}',
    chat_timeout_client_hint: 'Escribe o toca “Reanudar”.',
    chat_timeout_other_hint: 'Espera al cliente.',
    chat_resume: 'Reanudar',

    chat_loading_conversation: 'Cargando conversación…',
    chat_block_offline_psychic: 'Psíquico desconectado. Intenta más tarde.',
    chat_policy_personal_info: '⚠️ No puedes enviar datos personales (teléfono, correo o dirección). Reformula tu mensaje.',
    chat_block_unavailable_short: '⛔ El psíquico no está disponible en este momento. No puedes enviar mensajes.',
    chat_block_no_minutes_short: '⛔ No tienes minutos disponibles para chatear. Compra minutos para continuar.',
    chat_block_wait_client_start: '⏳ Esperando que el cliente inicie el chat (primer mensaje del cliente).',
    chat_block_client_inactive: '⏸️ Chat en pausa por inactividad del cliente. Espera a que el cliente reanude.',
    chat_block_session_closed: '⛔ La sesión está cerrada. Debes iniciar una nueva sesión.',
    chat_network_error_send: 'Error de red enviando el mensaje.',

    chat_placeholder_unavailable: 'Psíquico no disponible…',
    chat_placeholder_no_minutes: 'Sin minutos…',
    chat_placeholder_paused: 'Chat en pausa…',
    chat_placeholder_timeout: 'Chat pausado por inactividad…',
    chat_placeholder_write: 'Escribe tu mensaje…',
    chat_placeholder_offline_psychic: 'No puedes enviar mensajes',

    chat_send: 'Enviar',
    chat_sending_dots: '…',

    chat_other_psychic: 'Psíquico',
    chat_other_client: 'Cliente',
    chat_other_chat: 'Chat',

    clientdash_header_title: 'Panel del Cliente',

    clientdash_title: 'Mi Panel',
    clientdash_subtitle: '{{name}}, aquí puedes revisar tu saldo de minutos y tus llamadas.',

    clientdash_quick_summary: 'Resumen rápido',
    clientdash_loading_info: 'Cargando información…',
    clientdash_minutes_available: 'Minutos disponibles:',
    clientdash_calls_made: 'Llamadas realizadas:',

    clientdash_last_calls: 'Últimas llamadas',
    clientdash_view_history: 'Ver historial',
    clientdash_loading_history: 'Cargando historial…',
    clientdash_status_finished: "Finalizada",
    clientdash_status_missed: "Rechazada/Perdida",
    clientdash_status_ongoing: "En curso",
    clientdash_status_cancelled: "Cancelada",
    clientdash_status_unknown: "—",
    clientdash_no_calls: 'Aún no tienes llamadas registradas.',
    clientdash_view_full_history: 'Ver historial completo',

    clientdash_actions: 'Acciones',
    clientdash_go_psychics: 'Ir a la lista de psíquicos',
    clientdash_go_chat: 'Ir al chat',

    clientdash_select_psychic_title: 'Selecciona un psíquico',
    clientdash_select_psychic_body: 'Para abrir el chat primero debes elegir un psíquico en la lista.',

    clientdash_error_config_title: 'Error de configuración',
    clientdash_error_config_body: 'No se ha configurado EXPO_PUBLIC_API_URL.',

    clientdash_session_expired_title: 'Sesión expirada',
    clientdash_session_expired_body: 'No se encontró el token. Inicia sesión nuevamente.',

    clientdash_error_title: 'Error',
    clientdash_error_body: 'No se pudo obtener la información del panel. Inténtalo más tarde.',
    clientdash_chat_error_body: 'No se pudo abrir el chat en este momento. Intenta nuevamente.',

    clientdash_buy_minutes: 'Comprar minutos',

    clientdash_no_minutes_title: 'No tienes minutos disponibles',
    clientdash_no_minutes_body: 'Compra minutos para iniciar chats y llamadas con tus psíquicos.',

    clientdash_low_minutes_title: 'Tus minutos están por acabarse',
    clientdash_low_minutes_body: 'Te quedan {{n}} minutos. Compra más para seguir usando la app sin interrupciones.',
    clientdash_delete_account_title: 'Eliminar cuenta',
    clientdash_delete_account_body: 'Si deseas cerrar tu cuenta de forma permanente, puedes continuar desde aquí. Esta acción te llevará a una pantalla segura de confirmación.',
    clientdash_delete_account_cta:'Continuar para eliminar cuenta',

    delete_account_header_title: 'Eliminar cuenta',
    delete_account_title: 'Eliminar cuenta',
    delete_account_subtitle_with_name: 'Estás gestionando la eliminación de la cuenta de {{name}}.',
    delete_account_success_title: 'Cuenta eliminada',
    delete_account_success_body: 'Tu cuenta fue eliminada correctamente.',
    delete_account_success_ok: 'Aceptar',
    delete_account_error_title: 'Error al eliminar cuenta',
    delete_account_error_body: 'No se pudo eliminar la cuenta. Inténtalo de nuevo.',
    delete_account_confirm_title: 'Confirmar eliminación',
    delete_account_confirm_body: 'Esta acción es permanente y no se puede deshacer.',
    delete_account_confirm_cta: 'Eliminar mi cuenta',
    delete_account_confirm_section_title: 'Confirmación',
    delete_account_confirm_check_label: 'Entiendo que esta acción es permanente y deseo continuar.',
    delete_account_confirm_required_title: 'Confirmación requerida',
    delete_account_confirm_required_body:  'Debes confirmar que entiendes que esta acción es permanente.',
    delete_account_cancel_cta: 'Cancelar',
    delete_account_password_label: 'Contraseña actual',
    delete_account_password_helper: 'Puedes escribir tu contraseña como validación adicional. Este campo es opcional.',
    delete_account_password_placeholder: 'Escribe tu contraseña (opcional)',
    delete_account_warning_title: 'Advertencia importante',
    delete_account_warning_body: 'Al eliminar tu cuenta perderás el acceso a tu perfil y a la información asociada.',
    delete_account_warning_point_1: 'No podrás volver a ingresar con esta cuenta después de eliminarla.',
    delete_account_warning_point_2: 'Esta acción está pensada como una eliminación permanente.',
    delete_account_warning_point_3: 'Antes de continuar, asegúrate de que realmente deseas cerrar tu cuenta.',
    delete_account_processing: 'Eliminando cuenta...',

    clienthome_header_title: 'Inicio del Cliente',
    clienthome_register: 'Registrarse',
    clienthome_logout: 'Cerrar sesión',

    clienthome_welcome: 'Bienvenido',
    clienthome_welcome_name: 'Bienvenido, {{name}}',

    clienthome_subtitle: 'Elige un psíquico disponible para iniciar una consulta de audio o chat.',
    clienthome_my_panel: 'Mi Panel',
    clienthome_login: 'Iniciar sesión',
    clienthome_loading_psychics: 'Cargando psíquicos…',
    clienthome_empty: 'No hay psíquicos registrados en este momento.',

    languages: {
      es: 'Español',
      en: 'Inglés',
      fr: 'Francés',
      de: 'Alemán',
      pt: 'Portugués',
      it: 'Italiano',
    },

    clienthome_psychic_available: 'Disponible',
    clienthome_psychic_not_available: 'No disponible',
    clienthome_psychic_busy_label: 'Ocupado',
    clienthome_psychic_offline_suffix: ' (Desconectado)',
    clienthome_busy_in_call: 'Ocupado (en llamada)',

    clienthome_call_now: 'Llamar ahora',
    clienthome_chat: 'Chat',

    clienthome_comments: 'Comentarios',
    clienthome_comments_sent: 'Comentarios (enviado)',

    clienthome_psychic_not_available_title: 'Psíquico no disponible',
    clienthome_psychic_not_available_body: 'Este psíquico no está disponible en este momento.',

    clienthome_session_expired_title: 'Sesión expirada',
    clienthome_session_expired_body: 'Vuelve a iniciar sesión.',

    clienthome_no_minutes_title: 'Sin minutos',
    clienthome_no_minutes_body: 'No tienes saldo suficiente.',
    clienthome_no_minutes_cancel: 'Cancelar',
    clienthome_no_minutes_buy: 'Comprar minutos',

    clienthome_error_title: 'Error',
    clienthome_error_load_psychics: 'No se pudo cargar la lista de psíquicos.',
    clienthome_error_invalid_server: 'Respuesta no válida del servidor.',
    clienthome_error_unexpected_format: 'Formato inesperado en la lista de psíquicos.',
    clienthome_error_invalid_response: 'Respuesta inválida del servidor.',

    clienthome_snippet_fallback: 'Psíquico disponible para atenderte.',

    clienthome_call_start_error: 'No fue posible iniciar la llamada. Inténtalo de nuevo.',

    app_layout_default_title: "Luz Psíquica",
    app_layout_logo_alt: "Luz Psíquica",
    app_layout_footer_home: "Inicio",
    app_layout_footer_legal: "Legal",
    app_layout_footer_language: "Idioma",
    app_layout_language_modal_title: "Seleccionar idioma",
    app_layout_language_name_es: "Español",
    app_layout_language_name_en: "Inglés",
    app_layout_language_name_fr: "Francés",
    app_layout_language_name_de: "Alemán",
    app_layout_language_name_pt: "Portugués",
    app_layout_language_name_it: "Italiano",
    common: {
      close: "Cerrar"
    },

    network_error_title: 'Error',
    network_error_message: 'No se pudo conectar con el servidor. Verifica tu conexión e inténtalo de nuevo.',
    generic_error_message: 'Ocurrió un error inesperado. Inténtalo de nuevo.',

    directcall_config_error_title: 'Error de configuración',
    directcall_config_error_body: 'No se ha configurado EXPO_PUBLIC_API_URL.',

    directcall_session_expired_title: 'Sesión expirada',
    directcall_session_expired_body_login_again: 'Por favor inicia sesión de nuevo.',
    directcall_session_expired_body_token_missing: 'No se encontró el token. Inicia sesión nuevamente.',
    directcall_session_expired_body_call: 'Vuelve a iniciar sesión para realizar una llamada.',

    directcall_error_title: 'Error',
    directcall_error_missing_psychic: 'No se encontró información del psíquico.',
    directcall_error_start_call: 'No se pudo iniciar la llamada.',
    directcall_error_invalid_call_params: 'El servidor no devolvió parámetros válidos de llamada.',

    directcall_cannot_start_title: 'No se puede iniciar la llamada',
    directcall_cannot_start_no_minutes_fallback: 'Sin saldo de minutos',
    directcall_cancel: 'Cancelar',
    directcall_buy_minutes: 'Comprar minutos',

    directcall_connecting_with: 'Conectando consulta con',
    directcall_psychic_fallback: 'Psíquico',

    directcall_hint_starting: 'Iniciando llamada…',
    directcall_hint_loading: 'Cargando…',
    directcall_hint_ready: 'Listo',

    directcall_note_no_answer: '* Si el psíquico no contesta, podrás intentar con otro desde la lista.',

    forgot_header_title: 'Recuperar contraseña',
    
    forgot_title: 'Recuperar contraseña',

    forgot_subtitle: 'Ingresa tu correo o teléfono para recibir el código de recuperación.',

    forgot_field_label_email_or_phone: 'Correo o teléfono',
    forgot_placeholder_email_or_phone: 'Correo o teléfono',

    forgot_required_title: 'Dato requerido',
    forgot_required_email_or_phone: 'Escribe tu correo o tu teléfono.',
    forgot_required_code: 'Escribe el código que recibiste.',

    forgot_send_code: 'Enviar código',
    forgot_step2_help: 'Te enviamos un código. Escríbelo aquí y define tu nueva contraseña.',

    forgot_done_body_sms: 'Te hemos enviado un código por SMS para restablecer tu contraseña. Revísalo e ingrésalo a continuación.',
    forgot_step2_help_sms: 'Si no recibes el código, revisa que tu número sea correcto o solicita uno nuevo.',

    forgot_code_label: 'Código',
    forgot_code_placeholder: 'Código (6 dígitos)',

    forgot_new_password_label: 'Nueva contraseña',
    forgot_new_password_placeholder: 'Nueva contraseña',

    forgot_confirm_password_label: 'Confirmar contraseña',
    forgot_confirm_password_placeholder: 'Confirmar contraseña',

    forgot_weak_password_title: 'Contraseña débil',
    forgot_weak_password_body: 'La contraseña debe tener al menos 6 caracteres.',

    forgot_not_match_title: 'No coincide',
    forgot_not_match_body: 'Las contraseñas no coinciden.',

    forgot_done_title: 'Listo',
    forgot_done_body_generic: 'Si el usuario existe, enviaremos un código para recuperar la contraseña.',

    forgot_error_title: 'Error',
    forgot_error_send_code: 'No se pudo enviar el código.',
    forgot_error_reset: 'No se pudo cambiar la contraseña.',

    forgot_password_updated_title: 'Contraseña actualizada',
    forgot_password_updated_body: 'Ya puedes iniciar sesión con tu nueva contraseña.',

    forgot_change_password: 'Cambiar contraseña',

    forgot_resend_code: 'Reenviar código',
    forgot_back_to_login: 'Volver al inicio de sesión',

    forgot_show_password_a11y: 'Mostrar contraseña',
    forgot_hide_password_a11y: 'Ocultar contraseña',

    legal_home_header_title: 'Legal',
    legal_home_title: 'Legal',
    legal_home_meta: 'Selecciona el documento que deseas consultar.',

    legal_home_card_privacy_title: 'Normas y Privacidad',
    legal_home_card_privacy_desc: 'Términos de uso, privacidad, reembolsos y reglas generales.',

    legal_home_card_operational_title: 'Documento de Funcionamiento Operativo de la Plataforma',
    legal_home_card_operational_desc:
      'Funcionamiento técnico-operativo, roles, sesiones, minutos y reglas de operación.',

    common_back: 'Volver',

    psych_callhist_header_title: 'Historial de llamadas',

    psych_callhist_title: 'Historial de llamadas',
    psych_callhist_session_expired_title: 'Sesión expirada',
    psych_callhist_session_expired_body: 'Inicia sesión nuevamente.',
    psych_callhist_error_title: 'Error',
    psych_callhist_error_load_history: 'Error cargando historial',
    psych_callhist_error_load_history_fallback: 'No se pudo cargar el historial.',
    psych_callhist_error_load_payout: 'Error cargando resumen de pagos',

    psych_callhist_status_finished: 'Finalizada',
    psych_callhist_status_missed: 'Rechazada/Perdida',
    psych_callhist_status_ongoing: 'En curso',
    psych_callhist_status_cancelled: 'Cancelada',
    psych_callhist_status_unknown: '—',

    psych_callhist_client_fallback: 'Cliente',

    psych_callhist_start: 'Inicio',
    psych_callhist_end: 'Fin',
    psych_callhist_no_charge: 'Sin cobro',

    psych_callhist_payout_block_title: 'Resumen de pagos (PayPal)',
    psych_callhist_earned_total: 'Ganado total:',
    psych_callhist_paid_total: 'Pagado:',
    psych_callhist_pending_total: 'Pendiente por pagar:',
    psych_callhist_last_payout: 'Último pago:',

    psych_callhist_info_block_title: 'Resumen informativo',
    psych_callhist_calls: 'Llamadas:',
    psych_callhist_minutes_charged: 'Minutos cobrados:',
    psych_callhist_estimated_earnings: 'Ganancia estimada:',
    psych_callhist_info_hint: '*Este valor es informativo. El pago real se basa en liquidaciones.',

    psych_callhist_empty: 'Aún no tienes llamadas.',

    psych_call_perm_title: 'Permiso de micrófono',
    psych_call_perm_message_appname: 'Luz Psíquica necesita acceso al micrófono para las llamadas de voz.',
    psych_call_perm_allow: 'Aceptar',
    psych_call_perm_deny: 'Cancelar',

    psych_call_client_fallback: 'Cliente',
    psych_call_dash: '—',

    psych_call_end_title: 'Llamada finalizada',
    psych_call_end_client_cancelled: 'El cliente canceló la llamada.',
    psych_call_end_missed_or_incomplete: 'La llamada fue rechazada o no se completó.',
    psych_call_end_error_title: 'Error',
    psych_call_end_error_body: 'No se pudo finalizar la llamada correctamente.',

    psych_call_audio_no_mic_permission: 'Sin permiso de micrófono',
    psych_call_audio_session_expired: 'Sesión expirada',
    psych_call_audio_invalid_token: 'Token de voz inválido',
    psych_call_audio_incomplete_data: 'Datos incompletos de Agora',
    psych_call_audio_sdk_unavailable: 'SDK Agora no disponible',
    psych_call_audio_connect_error: 'Error al conectar audio',

    psych_call_audio_status_error_prefix: 'Error de audio: {{msg}}',
    psych_call_audio_status_connecting: 'Conectando audio…',
    psych_call_audio_status_waiting_client: 'Audio conectado. Esperando al cliente…',
    psych_call_audio_status_connected_client: 'Audio conectado con el cliente.',

    psych_call_title_in_progress: 'Llamada en curso',
    psych_call_room_label: 'Sala:',
    psych_call_time_label: 'Tiempo:',
    psych_call_end_button: 'Finalizar llamada',

    psych_chathist_title: 'Historial de chats',
    psych_chathist_refresh: 'Actualizar',
    psych_chathist_refresh_busy: '…',
    psych_chathist_loading: 'Cargando conversaciones…',
    psych_chathist_empty: 'Aún no hay chats para mostrar.',
    psych_chathist_error_load: 'No se pudo cargar el historial',

    psych_chathist_readonly_note: 'Solo lectura (el psíquico no inicia chats)',

    psych_chathist_client_fallback: 'Cliente',
    psych_chathist_dash: '—',
    psych_chathist_initials_fallback: 'LP',

    psych_chatthread_title_with_name: 'Chat con {{name}}',
    psych_chatthread_readonly_note: 'Solo lectura (el psíquico no inicia chats)',
    psych_chatthread_loading: 'Cargando mensajes…',
    psych_chatthread_empty: 'No hay mensajes para mostrar.',
    psych_chatthread_error_load: 'No se pudo cargar el chat',

    psych_chatthread_client_fallback: 'Cliente',
    psych_chatthread_dash: '—',

    psych_comments_nav_title_with_name: 'Comentarios - {{name}}',
    psych_comments_psychic_fallback: 'Psíquico',
    psych_comments_client_prefix: 'Cliente',
    psych_comments_dash: '—',

    psych_comments_loading: 'Cargando comentarios…',
    psych_comments_loading_fallback: 'Cargando comentarios…',
    psych_comments_error_title: 'Error',
    psych_comments_err_no_api_url: 'No se ha configurado EXPO_PUBLIC_API_URL.',
    psych_comments_err_no_psychic_id: 'No se recibió psychicId.',
    psych_comments_err_load_comments: 'No se pudieron cargar los comentarios',

    psych_comments_not_available_title: 'No disponible',
    psych_comments_not_available_body: 'Solo puedes calificar después de finalizar una consulta.',
    psych_comments_session_expired_title: 'Sesión expirada',
    psych_comments_session_expired_body: 'Vuelve a iniciar sesión.',

    psych_comments_saved_title: '¡Listo!',
    psych_comments_saved_only_rating: 'Calificación guardada. Ya habías dejado un comentario para este psíquico.',
    psych_comments_saved: 'Calificación guardada.',

    psych_comments_err_save_rating: 'No se pudo guardar la calificación',

    psych_comments_info_line1_a: 'Esta pantalla es para ',
    psych_comments_info_line1_strong: 'visualizar',
    psych_comments_info_line1_b: ' comentarios.',
    psych_comments_info_line2_a: 'La ',
    psych_comments_info_line2_strong: 'calificación',
    psych_comments_info_line2_b: ' se hace por consulta finalizada.',
    psych_comments_info_line3_a: 'El ',
    psych_comments_info_line3_strong1: 'comentario',
    psych_comments_info_line3_b: ' (texto) es opcional y solo se permite ',
    psych_comments_info_line3_strong2: 'una vez por psíquico',
    psych_comments_info_line3_c: '.',

    psych_comments_form_title: 'Califica esta consulta',
    psych_comments_form_label_rating: 'Calificación',
    psych_comments_form_label_comment: 'Comentario (opcional)',
    psych_comments_locked_text:
      '✅ Ya dejaste un comentario para este psíquico. Puedes seguir calificando tus consultas, pero no escribir otro comentario.',
    psych_comments_input_placeholder: 'Escribe tu comentario (opcional)...',

    psych_comments_saving: 'Guardando…',
    psych_comments_save_button: 'Guardar calificación',

    psych_comments_empty: 'Aún no hay comentarios.',

    psych_dash_header_title: 'Panel del Psíquico',
    psych_dash_logout: 'Cerrar sesión',

    psych_dash_psychic_fallback: 'Psíquico',
    psych_dash_client_fallback: 'Cliente',
    psych_dash_room_dash: '—',

    psych_dash_config_error_title: 'Error de configuración',
    psych_dash_config_error_body_missing_api: 'No se ha configurado EXPO_PUBLIC_API_URL.',
    psych_dash_config_error_body_missing_api_env: 'No se ha definido EXPO_PUBLIC_API_URL. Revisa tu archivo .env.',

    psych_dash_session_expired_title: 'Sesión expirada',
    psych_dash_session_expired_body: 'Vuelve a iniciar sesión.',
    psych_dash_session_expired_body_and_logout: 'Vuelve a iniciar sesión.',

    psych_dash_info_title: 'Info',
    psych_dash_info_cant_load_application: 'No se pudo cargar tu postulación. Intenta nuevamente.',

    psych_dash_nav_error_title: 'Error de navegación',
    psych_dash_nav_error_body_missing_route:
      'En este Stack no está registrada la ruta "PsychicRegister".\n\nSolución: agrega esta screen en el MISMO Stack donde está PsychicDashboard:\n<Stack.Screen name="PsychicRegister" component={PsychicRegisterScreen} />',

    psych_dash_error_title: 'Error',
    psych_dash_error_refresh_info: 'No se pudo actualizar la información',
    psych_dash_error_open_form: 'No se pudo abrir el formulario.',

    psych_dash_call_end_title: 'Llamada finalizada',
    psych_dash_call_end_body_caller_cancelled: 'El cliente canceló la llamada.',
    psych_dash_call_end_body_finished: 'La llamada terminó.',

    psych_dash_not_available_title: 'No disponible',
    psych_dash_not_available_call_cancelled: 'La llamada ya fue cancelada por el cliente.',

    psych_dash_modal_incoming_title: 'Llamada entrante',
    psych_dash_modal_incoming_sub: 'Responde para iniciar la consulta',
    psych_dash_modal_client_label: 'Cliente:',
    psych_dash_modal_room_label: 'Sala:',
    psych_dash_modal_processing: 'Procesando…',
    psych_dash_modal_reject: 'Rechazar',
    psych_dash_modal_accept: 'Aceptar',
    psych_dash_modal_footnote: '* El cobro inicia cuando el psíquico contesta.',

    psych_dash_header_role_line: 'Psíquico · Luz Psíquica',
    psych_dash_header_hint_calls: 'Cuando estés disponible, recibirás aquí las llamadas de los clientes en tiempo real.',
    psych_dash_socket_status: 'Estado del socket: {{status}}',
    psych_dash_socket_connected: 'Conectado',
    psych_dash_socket_disconnected: 'Desconectado',

    psych_dash_profile_review_title: 'Revisión del perfil',

    psych_dash_team_note_label: 'Nota del equipo:',
    psych_dash_fields_to_fix_label: 'Contenedores a corregir:',
    psych_dash_fix_button: 'Corregir y reenviar formulario',
    psych_dash_loading: 'Cargando…',

    psych_dash_revision_hint: 'Aquí verás cualquier ajuste o recomendación que el equipo te solicite sobre tu perfil.',

    psych_dash_new_messages_title: 'Mensajes nuevos',
    psych_dash_new_messages_new_suffix: 'nuevo(s)',
    psych_dash_new_messages_open: 'Abrir',
    psych_dash_new_messages_close: 'X',

    psych_dash_availability_title: 'Disponibilidad',
    psych_dash_availability_currently: 'Actualmente estás',
    psych_dash_available: 'Disponible',
    psych_dash_not_available: 'No disponible',
    psych_dash_updating: 'Actualizando...',
    psych_dash_set_not_available: 'Ponerme No disponible',
    psych_dash_set_available: 'Ponerme Disponible',

    psych_dash_rating_title: 'Calificación',
    psych_dash_refresh: 'Actualizar',
    psych_dash_based_on: 'Basado en {{count}}',
    psych_dash_ratings_word: 'valoraciones',
    psych_dash_loading_comments: 'Cargando comentarios…',
    psych_dash_no_visible_comments: 'Aún no tienes comentarios visibles aquí.',
    psych_dash_recent_comments_title: 'Comentarios recientes',
    psych_dash_view_all_comments: 'Ver todos los comentarios',

    psych_dash_calls_history_title: 'Historial de llamadas',
    psych_dash_calls_history_body: 'Revisa las llamadas que has atendido y su estado.',
    psych_dash_view_calls_history: 'Ver historial de llamadas',

    psych_dash_chats_history_title: 'Historial de chats',
    psych_dash_chats_history_body: 'Revisa los chats que has tenido con tus clientes.',
    psych_dash_view_chats_history: 'Ver historial de chats',

    psych_dash_info_block_title: 'Información',
    psych_dash_info_bullet_1: '• Cuando un cliente inicie una llamada y estés disponible, verás una alerta de llamada entrante.',
    psych_dash_info_bullet_2: '• Al aceptar, entrarás a la pantalla de llamada para atender al cliente.',
    psych_dash_info_bullet_3: '• ✅ Cuando un cliente envíe un mensaje, lo verás en “Mensajes nuevos” y podrás abrir el chat.',

    psych_profile_header_title: 'Perfil del Psíquico',

    psych_profile_loading_profile: 'Cargando perfil...',

    psych_profile_psychic_fallback: 'Psíquico',
    psych_profile_no_info: 'No se encontró información del psíquico.',
    psych_profile_back: 'Volver',

    psych_profile_available: 'Disponible',
    psych_profile_not_available: 'No disponible',
    psych_profile_busy: 'Ocupado',
    psych_profile_stats_calls_word: 'llamadas',

    psych_profile_featured_review_tag: '⭐ Comentario destacado',
    psych_profile_featured_review_rating_label: 'Calificación',
    psych_profile_featured_review_client_prefix: '— Cliente',

    psych_profile_bio_title: 'Biografía',
    psych_profile_bio_rate_label: 'Tarifa: US$1.25/min',
    psych_profile_bio_phrase_label: 'Frase:',
    psych_profile_bio_languages_label: 'Idiomas:',
    psych_profile_bio_areas_label: 'Áreas:',
    psych_profile_bio_tools_label: 'Herramientas:',
    psych_profile_bio_experience_label: 'Experiencia:',
    psych_profile_bio_about_me_label: 'Sobre mí:',

    psych_profile_work_info_title: 'Información de trabajo',
    psych_profile_work_exp_phone_chat_label: 'Experiencia por teléfono/chat:',
    psych_profile_yes: 'Sí',
    psych_profile_no: 'No',
    psych_profile_work_start_year_label: 'Año de inicio:',
    psych_profile_work_hours_per_week_label: 'Horas por semana:',
    psych_profile_work_channels_label: 'Canales (teléfono y chat):',

    psych_profile_comments_title: 'Comentarios',
    psych_profile_loading_comments: 'Cargando comentarios…',
    psych_profile_no_comments: 'Aún no hay comentarios para este psíquico.',
    psych_profile_showing_comments_prefix: 'Mostrando',
    psych_profile_showing_comments_suffix: 'comentario(s), del más reciente al más antiguo.',

    psych_profile_history_title: 'Historial',
    psych_profile_history_body: 'Consulta el historial de tus llamadas con este psíquico.',
    psych_profile_view_call_history: 'Ver historial de llamadas',

    psych_profile_call_now: 'Llamar ahora',
    psych_profile_chat: 'Chat',
    psych_profile_unavailable_short: 'No disponible',

    psych_profile_psychic_unavailable_title: 'Psíquico no disponible',
    psych_profile_psychic_unavailable_body_try_later: 'Este psíquico no está disponible en este momento. Intenta más tarde.',
    psych_profile_psychic_unavailable_body: 'Este psíquico no está disponible en este momento.',

    psych_profile_config_error_title: 'Error de configuración',
    psych_profile_config_error_body_missing_api: 'No se ha configurado EXPO_PUBLIC_API_URL.',

    psych_profile_session_expired_title: 'Sesión expirada',
    psych_profile_session_expired_body_call: 'Vuelve a iniciar sesión para realizar una llamada.',

    psych_profile_call_cannot_start_title: 'No se puede iniciar la llamada',
    psych_profile_call_cannot_start_body_no_minutes: 'Sin saldo de minutos',
    psych_profile_call_cannot_start_cancel: 'Cancelar',
    psych_profile_call_cannot_start_buy_minutes: 'Comprar minutos',

    psych_profile_call_error_title: 'Error',
    psych_profile_call_error_invalid_params: 'El servidor no devolvió parámetros válidos de llamada.',
    psych_profile_call_error_start_failed: 'No se pudo iniciar la llamada.',
    psych_profile_call_error_server: 'Ocurrió un error en el servidor.',

    psych_profile_error_title: 'Error',
    psych_profile_error_call_failed: 'No se pudo iniciar la llamada.',

    psych_register_title_edit: 'Corregir y reenviar postulación',
    psych_register_title_register: 'Registro de Psíquico',

    psych_register_revision_title: 'Correcciones solicitadas',
    psych_register_revision_note_prefix: 'Nota: ',
    psych_register_revision_hint: 'Corrige lo indicado y presiona “Reenviar postulación”.',

    psych_register_label_full_name: 'Nombre completo *',
    psych_register_ph_full_name: 'Ej: Laura Pérez',

    psych_register_label_psychic_name: 'Nombre de Psíquico (identidad pública) *',
    psych_register_ph_psychic_name: 'Ej: Luna',
    psych_register_help_psychic_name_unique: 'Este nombre será visible para los clientes. Debe ser único.',

    psych_register_label_paypal_email: 'Email de PayPal (obligatorio) *',
    psych_register_ph_paypal_email: 'ej: tuemail@paypal.com',
    psych_register_help_paypal_email: 'Este email se usará para pagos al psíquico.',

    psych_register_label_public_bio: 'Biografía pública (bio) *',
    psych_register_ph_public_bio: 'Escribe tu biografía (esto lo verán los clientes)',
    psych_register_help_public_bio: 'Esta biografía se mostrará al cliente en tu perfil.',

    psych_register_label_email: 'Correo electrónico',
    psych_register_ph_email: 'ejemplo@correo.com',

    psych_register_label_phone: 'Teléfono / WhatsApp',
    psych_register_ph_phone: '+57 300 000 0000',
    psych_register_help_phone_international: 'Si usas teléfono, ingrésalo en formato internacional (ej. +573001234567).',

    psych_register_label_password: 'Contraseña *',
    psych_register_ph_password: 'Mínimo 6 caracteres',
    psych_register_accessibility_show_password: 'Mostrar contraseña',
    psych_register_accessibility_hide_password: 'Ocultar contraseña',

    psych_register_help_edit_credentials:
      'Email/teléfono y contraseña se gestionan en login/soporte. Aquí solo corriges la postulación.',

    psych_register_label_location: 'País / Ciudad *',
    psych_register_ph_location: 'Ej: Colombia, Bogotá',

    psych_register_label_languages: 'Idiomas en los que atiendes *',
    psych_register_ph_languages: 'Ej: Español, Inglés',

    psych_register_section_additional_required: 'Información adicional (obligatoria)',

    psych_register_label_tagline: 'Describe una frase que te identifique *',
    psych_register_ph_tagline: 'Ej: Creer es crear',

    psych_register_label_areas: 'Áreas que manejas (puedes escoger varias) *',
    psych_register_label_areas_other: 'Especifica "Otros" (Áreas) *',
    psych_register_ph_areas_other: 'Escribe tu(s) área(s) adicional(es)',
    psych_register_label_applicant_photo: 'Foto del aspirante (obligatoria) *',
    psych_register_permission_hint_denied: 'Si denegaste el permiso, puedes habilitarlo desde la configuración del dispositivo.',
    psych_register_permission_request: 'Autorizar acceso a fotos',
    psych_register_permission_granted: 'Permiso concedido',
    psych_register_permission_container_first_body: 'Antes de seleccionar la foto, autoriza el acceso a tus fotos desde el botón del contenedor.',
    psych_register_open_settings: 'Abrir configuración',
    psych_register_permissions_error_body: 'No se pudo solicitar el permiso. Intenta de nuevo.',
    psych_register_cancel: 'Cancelar',
    psych_register_permission_box_title: 'Permiso para seleccionar fotos.',
    psych_register_permission_box_body: 'Luz Psíquica solo accede a tus fotos cuando tú decides subir una imagen. Este acceso no se utiliza en segundo plano.',

    psych_register_photo_change: 'Cambiar foto',
    psych_register_photo_select: 'Seleccionar foto',

    psych_register_label_tools: 'Herramientas que utilizas (puedes escoger varias) *',
    psych_register_label_tools_other: 'Especifica "Otros" (Herramientas) *',
    psych_register_ph_tools_other: 'Escribe tu(s) herramienta(s) adicional(es)',

    psych_register_label_experience: 'Haz una descripción adicional de tu experiencia *',
    psych_register_ph_experience: 'Ej: métodos de trabajo, confiabilidad, etc.',

    psych_register_label_worked_phone_chat: '¿Has trabajado anteriormente como psíquico por teléfono o chat? *',

    psych_register_label_start_year: '¿En qué año comenzaste a trabajar como psíquico profesionalmente? *',
    psych_register_year_select: 'Selecciona un año',
    psych_register_year_modal_title: 'Selecciona el año',
    psych_register_year_modal_close: 'Cerrar',

    psych_register_label_hours_per_week: '¿Cuántas horas a la semana estarías dispuest@ a trabajar en la app? *',
    psych_register_ph_hours_per_week: 'Ej: 10, 12, 40, full time',

    psych_register_label_can_do_phone_chat: 'Confirma si puedes realizar consultas por teléfono y chat *',

    psych_register_label_private_experience:
      '(Solo para información interna) Cuéntanos tu experiencia en privado u otros servicios *',
    psych_register_ph_private_experience: 'Ej: experiencia con clientes privados...',

    psych_register_label_photo_marketing_consent: 'Consentimiento uso foto (marketing/redes) *',

    psych_register_label_declaration: 'Declaración obligatoria *',
    psych_register_declaration_accept: 'Acepto la declaración *',

    psych_register_label_about: 'Mensaje adicional / Sobre ti *',
    psych_register_ph_about: '¿Qué te gustaría que el equipo sepa de ti?',

    psych_register_terms_title: 'Normas y Privacidad',
    psych_register_terms_body: 'He leído y acepto ',
    psych_register_terms_link: 'Normas y Privacidad',

    psych_register_submit_edit: 'Reenviar postulación',
    psych_register_submit_register: 'Enviar solicitud',

    psych_register_back: 'Volver',

    psych_register_yes: 'Sí',
    psych_register_no: 'No',

    psych_register_validation_title: 'Validación',
    psych_register_error_title: 'Error',
    psych_register_config_error_title: 'Error de configuración',
    psych_register_config_error_body: 'No se ha definido EXPO_PUBLIC_API_URL. Revisa tu archivo .env.',

    psych_register_permissions_required_title: 'Permiso requerido',
    psych_register_permissions_required_body: 'Necesitamos acceso a tu galería para seleccionar una foto.',

    psych_register_invalid_photo_title: 'Foto no válida',
    psych_register_invalid_photo_body:
      'No se pudo leer la imagen en base64. Intenta con otra foto o reinicia la app.',

    psych_register_photo_pick_error_title: 'Error',
    psych_register_photo_pick_error_body: 'No se pudo seleccionar la foto.',

    psych_register_terms_alert_title: 'Normas y Privacidad',
    psych_register_terms_alert_body: 'Debes aceptar las Normas y Privacidad para continuar.',

    psych_register_session_expired_body: 'Sesión expirada. Inicia sesión de nuevo.',

    psych_register_success_title: 'Solicitud enviada',
    psych_register_success_resubmit_default: 'Postulación reenviada correctamente.',
    psych_register_success_register_default:
      'Tu solicitud fue enviada. El equipo de Luz Psíquica revisará tu perfil y te contactará para una entrevista.',

    psych_reviews_config_error_title: 'Error de configuración',
    psych_reviews_config_error_body: 'No se ha definido EXPO_PUBLIC_API_URL en tu .env.',

    psych_reviews_session_expired_title: 'Sesión expirada',
    psych_reviews_session_expired_body: 'Vuelve a iniciar sesión.',

    psych_reviews_error_title: 'Error',
    psych_reviews_load_error_body: 'No se pudo cargar el historial de calificaciones.',

    psych_reviews_title: 'Calificaciones y comentarios',

    psych_reviews_summary_title: 'Resumen',
    psych_reviews_based_on: 'Basado en {count} valoraciones',
    psych_reviews_refresh: 'Actualizar',

    psych_reviews_loading: 'Cargando…',

    psych_reviews_comments_title: 'Comentarios',
    psych_reviews_no_comments: 'Aún no tienes comentarios visibles.',

    psych_reviews_load_more: 'Cargar más',
    psych_reviews_limit_reached: 'Límite máximo alcanzado',

    psych_reviews_hint_rule:
      '* Los comentarios visibles dependen de la regla anti-spam (un comentario por cliente por psíquico).',

    psych_reviews_back_arrow: '←',
    psych_reviews_refresh_busy: '...',
    psych_reviews_dash_placeholder: '—',

    realcall_mic_permission_title: 'Permiso de micrófono',
    realcall_mic_permission_message: 'Luz Psíquica necesita acceso al micrófono para las llamadas de voz.',
    realcall_mic_permission_accept: 'Aceptar',
    realcall_mic_permission_cancel: 'Cancelar',

    realcall_call_ended_title: 'Llamada finalizada',
    realcall_call_ended_no_minutes: 'La llamada se ha terminado porque se agotaron tus minutos.',

    realcall_call_ended_rejected_body: 'El psíquico rechazó la llamada. Intenta con otro psíquico o vuelve a intentar más tarde.',
    realcall_ok: 'OK',

    realcall_rating_title: 'Calificación',
    realcall_rating_pick_stars: 'Selecciona una calificación (1 a 5).',

    realcall_error_title: 'Error',
    realcall_rating_save_error: 'No se pudo guardar la calificación',

    realcall_back: '← Volver',
    realcall_call_title: 'Llamada de audio',
    realcall_room_label: 'Sala:',

    realcall_psychic_role_brand: 'Psíquico · Luz Psíquica',

    realcall_audio_error_prefix: 'Error de audio:',
    realcall_audio_connecting: 'Conectando audio…',
    realcall_audio_waiting_psychic: 'Audio conectado. Esperando al psíquico…',
    realcall_audio_connected_psychic: 'Audio conectado con el psíquico.',

    realcall_time_label: 'Tiempo:',
    realcall_remaining_minutes_label: 'Minutos restantes:',
    realcall_billing_starts_note: '* El cobro inicia cuando el psíquico contesta.',

    realcall_hangup: 'Colgar',

    realcall_rate_title: 'Califica tu consulta',
    realcall_rate_subtitle: '¿Cómo fue tu experiencia con {name}?',

    realcall_review_label: 'Comentario (opcional)',
    realcall_review_placeholder: 'Escribe un comentario breve…',
    realcall_skip: 'Omitir',
    realcall_send: 'Enviar',
    realcall_sending: 'Enviando…',

    register_header_title: 'Registro',
    
    register_title_create_account: 'Crear Cuenta',

    register_subtitle_client: 'Regístrate como cliente para continuar',

    register_required_fields_title: 'Campos requeridos',
    register_required_fields_body: 'Completa todos los campos.',

    register_link_psychic_apply: '¿Eres psíquico? Postúlate para trabajar con nosotros',

    register_legal_title: 'Normas y Privacidad',
    register_legal_body_client: 'Debes aceptar los Términos, Privacidad y Reembolsos para registrarte.',

    register_success_title: 'Cuenta creada',
    register_success_body: 'Tu cuenta fue registrada correctamente. Inicia sesión.',
    
    register_error_title: 'Registro',
    register_failed_msg: 'No pudimos completar tu registro. Inténtalo nuevamente.',
    common_ok: 'Aceptar',

    register_placeholder_full_name: 'Nombre completo',
    register_placeholder_email_or_phone: 'Correo o teléfono',
    register_phone_helper: 'Puedes usar correo o teléfono. Si usas teléfono, ingrésalo en formato internacional (ej. +573002568974).',
    register_placeholder_password: 'Contraseña',

    register_accessibility_show_password: 'Mostrar contraseña',
    register_accessibility_hide_password: 'Ocultar contraseña',

    register_label_account_type: 'Tipo de cuenta',
    register_role_client: 'Cliente',
    register_role_psychic: 'Psíquico',

    register_terms_prefix: 'He leído y acepto',
    register_terms_link: 'Normas y Privacidad',

    register_btn_create_account: 'Crear cuenta',
    register_link_have_account_login: '¿Ya tienes cuenta? Inicia sesión',



    common: {
      back: "Volver",
      ok: "OK",
      psychic: "Psíquico",
      dash: "—"
    },
    legal_header_title: 'Normas y Privacidad',
    legal: {
      title: "Normas y Privacidad",
      meta: "Versión: {{version}} · Titular legal: {{owner}} · Jurisdicción: {{country}}",
      jurisdictionCountry: "Colombia",
      mailSubject: "Soporte legal - Luz Psíquica",
      openFailTitle: "No se pudo abrir",
      openFailGeneric: "No se pudo abrir el enlace.",
      emailFailMessage: "No se pudo abrir el correo. Verifica que tengas una app de Email configurada en el teléfono.",
      whatsappFailMessage: "No se pudo abrir WhatsApp. Verifica que tengas WhatsApp instalado o intenta de nuevo.",
      emailLabel: "Email: {{email}}",
      whatsappLabel: "WhatsApp: +1 (813) 618-7770",

      s1Title: "1. Aceptación de términos",
      s1Body: "Al registrarse y utilizar la aplicación, y mediante la marcación expresa de la casilla de aceptación correspondiente, el usuario declara haber leído, comprendido y aceptado de forma íntegra y voluntaria las normas, políticas, condiciones y disposiciones de uso operativo de la plataforma aquí descritas.\n\nLa aceptación de estos términos constituye un requisito indispensable y vinculante para el acceso, registro y uso de la aplicación. En caso de no estar de acuerdo con cualquiera de las disposiciones aquí establecidas, el usuario deberá abstenerse de registrarse o utilizar la plataforma.\n\nLos documentos legales, incluyendo Normas y Privacidad y el Documento de Funcionamiento Operativo de la Plataforma, podrán ser consultados en cualquier momento desde esta sección legal.\n",

      s2Title: "2. Naturaleza del servicio",
      s2Body: "Luz Psíquica es una aplicación de entretenimiento y orientación personal, cuyo contenido y servicios tienen un carácter exclusivamente informativo y recreativo.\n\nLa plataforma no ofrece, ni pretende ofrecer, asesoría médica, psicológica, psiquiátrica, legal, financiera, terapéutica ni ningún otro tipo de asesoramiento profesional regulado. La información, opiniones o interacciones generadas dentro de la aplicación no sustituyen, bajo ninguna circunstancia, la consulta con profesionales debidamente certificados en las áreas correspondientes.\n\nEl usuario reconoce y acepta que el uso de la plataforma se realiza bajo su exclusiva responsabilidad, y que cualquier decisión tomada a partir del contenido o de las interacciones mantenidas en Luz Psíquica es asumida íntegramente por el propio usuario, conforme a las directrices y condiciones establecidas por la plataforma.\n",

      s3Title: "3. Cobro y pago por minutos",
      s3Body: "Los servicios ofrecidos dentro de Luz Psíquica se cobran al usuario y se liquidan al psíquico exclusivamente con base en los minutos efectivamente consumidos por concepto de comunicación, ya sea mediante conversación hablada o intercambio de mensajes de texto, realizados dentro de la aplicación.\n\nNo se reconocerán pagos por tiempo de espera, disponibilidad, conexión activa sin consumo efectivo, resultados obtenidos, promesas, expectativas ni por cualquier otro concepto distinto al uso real, medible y verificable del servicio dentro de la plataforma.\n\nTodas las transacciones económicas realizadas dentro de la aplicación se gestionan a través de la plataforma de pagos PayPal, de conformidad con sus propios términos, condiciones y políticas de uso. Luz Psíquica no almacena, procesa ni gestiona directamente información financiera sensible de los usuarios o de los psíquicos.\n\nEn razón de lo anterior, y al no estar legalmente autorizada para ello, la plataforma no solicita ni está obligada a solicitar, almacenar o verificar números de cuentas bancarias, tarjetas de crédito, tarjetas débito u otros datos financieros personales. El uso de los medios de pago se rige exclusivamente por las condiciones establecidas por PayPal.\n\nLa relación entre Luz Psíquica y los psíquicos es de carácter estrictamente independiente. En consecuencia, no existe vínculo laboral alguno, ni relación de subordinación, ni obligación de pago de primas, prestaciones sociales, beneficios laborales, indemnizaciones o compensaciones de naturaleza similar.\n\nLa plataforma no realiza préstamos, anticipos, adelantos de dinero ni garantías de ingresos, y no expide certificaciones laborales, constancias de ingresos, cartas para trámites financieros, subsidios, avales ni documentos de naturaleza análoga.\n\nLos minutos consumidos son calculados mediante los sistemas técnicos de medición de la plataforma. En caso de presentarse ajustes técnicos, fallos de conexión, interrupciones del servicio o discrepancias en la medición del tiempo consumido, los registros internos de Luz Psíquica prevalecerán como referencia válida. Cualquier reclamación relacionada con la medición de minutos deberá realizarse conforme a los canales y procedimientos establecidos por la plataforma, sin que ello implique reconocimiento automático de reembolsos, compensaciones o pagos adicionales.\n",

      s4Title: "4. Prohibición de compartir información personal",
      s4Body: "Con el fin de proteger la seguridad, la privacidad y el correcto funcionamiento de la plataforma, queda estrictamente prohibido el intercambio de información personal o sensible entre clientes y psíquicos dentro o fuera de la aplicación.\n\nSe considera información personal, de manera enunciativa y no limitativa, cualquier dato que permita la identificación, contacto o localización de una persona, incluyendo números de teléfono, direcciones físicas, direcciones de correo electrónico, perfiles en redes sociales, documentos de identidad, datos bancarios, números de cuentas, enlaces de pago, medios de contacto externo u otros datos de naturaleza similar.\n\nAsimismo, queda expresamente prohibido trasladar conversaciones, acuerdos, pagos o cualquier tipo de interacción fuera de la aplicación, así como intentar eludir los sistemas de comunicación y pago habilitados por Luz Psíquica.\n\nEsta prohibición aplica de manera obligatoria tanto para los clientes como para los psíquicos, y su incumplimiento podrá dar lugar a las medidas correctivas previstas en las normas y condiciones de la plataforma.\n",

      s5Title: "5. Términos y condiciones",
      s5Body: "El uso de Luz Psíquica está sujeto al cumplimiento de normas de convivencia, respeto mutuo y observancia de las disposiciones internas establecidas por la plataforma, las cuales tienen como finalidad garantizar un entorno seguro, funcional y adecuado para todos los usuarios.\n\nLuz Psíquica se reserva el derecho de suspender temporalmente o cancelar de forma definitiva cuentas de usuarios o psíquicos cuando existan razones operativas, técnicas o de seguridad que lo justifiquen, incluyendo, de manera enunciativa y no limitativa, situaciones de fraude, abuso, acoso, comportamiento inapropiado, uso indebido de la plataforma, intento de elusión de controles internos, o incumplimiento de las normas, políticas y condiciones aquí establecidas.\n\nLas medidas adoptadas tendrán un carácter preventivo o correctivo, según el caso, y se aplicarán con el fin de proteger la integridad de la plataforma, a sus usuarios y al correcto funcionamiento de los servicios, sin que ello genere derecho a indemnización, compensación o reclamación alguna frente a Luz Psíquica.\n",

      s6Title: "6. Privacidad y tratamiento de datos",
      s6Body: "Luz Psíquica trata únicamente los datos personales mínimos y estrictamente necesarios para el funcionamiento operativo de la plataforma, incluyendo, de manera enunciativa y no limitativa, la identificación de la cuenta, el historial de sesiones, las compras realizadas, el consumo de minutos y la gestión de solicitudes de soporte.\n\nEn ningún caso se permite a los usuarios intercambiar datos personales entre sí, ni acceder a información personal de otros usuarios o psíquicos, fuera de los mecanismos estrictamente necesarios para la prestación del servicio dentro de la aplicación.\n\nLos datos tratados por la plataforma se utilizan exclusivamente para fines operativos, de soporte técnico, seguridad, prevención de fraude, mejora del servicio y cumplimiento de obligaciones legales o regulatorias aplicables. Luz Psíquica no comercializa, vende ni cede datos personales a terceros con fines ajenos a la operación de la plataforma.\n\nEl tratamiento de los datos se realiza conforme a los principios de legalidad, finalidad, proporcionalidad y seguridad, adoptando las medidas técnicas y organizativas razonables para proteger la información frente a accesos no autorizados, uso indebido o pérdida.\n\nPara los usuarios que soliciten su vinculación como psíquicos dentro de la plataforma, Luz Psíquica podrá requerir información adicional de identificación, incluyendo copia del documento oficial de identidad vigente, con el fin exclusivo de verificar la identidad real del solicitante, su mayoría de edad, la autenticidad de los datos suministrados y el cumplimiento de las obligaciones contractuales y legales aplicables.\n\nDicha información será tratada conforme a los principios de legalidad, finalidad, libertad, proporcionalidad, seguridad y confidencialidad establecidos en la Ley 1581 de 2012 y demás normas concordantes, y será utilizada únicamente para la validación y formalización del vínculo contractual, prevención de fraude y cumplimiento de obligaciones regulatorias.\n\nEn ningún caso esta información será comercializada, cedida o utilizada para fines distintos a los aquí descritos, y será conservada únicamente por el tiempo estrictamente necesario para el cumplimiento de la finalidad para la cual fue recolectada.\n",

      s7Title: "7. Limitación de responsabilidad",
      s7Body: "Luz Psíquica presta sus servicios en la forma y condiciones descritas en la plataforma, sin otorgar garantías expresas o implícitas sobre resultados, exactitud, expectativas personales o consecuencias derivadas del uso de la aplicación.\n\nLa plataforma no será responsable por decisiones, acciones, omisiones, interpretaciones o resultados derivados directa o indirectamente del uso de los contenidos, servicios o interacciones realizadas dentro de la aplicación, los cuales son asumidos bajo la exclusiva responsabilidad del usuario.\n\nLuz Psíquica tampoco será responsable por interrupciones del servicio, errores técnicos, fallos de conectividad, indisponibilidad temporal de la plataforma, pérdida de información, ajustes de medición de minutos, ni por daños directos o indirectos que se deriven de causas técnicas, operativas o de fuerza mayor.\n\nEn ningún caso la responsabilidad de Luz Psíquica excederá el valor efectivamente pagado por el usuario dentro de la aplicación por los servicios objeto de reclamación, ni dará lugar a indemnizaciones por daños morales, lucro cesante, pérdida de oportunidades, expectativas no cumplidas u otros perjuicios indirectos.\n",

      s8Title: "8. Naturaleza del servicio y carácter no reembolsable",
      s8Body: "En la plataforma, el uso de los servicios de chat y/o llamada se factura bajo la modalidad de minuto iniciado, minuto cobrado. En virtud de lo anterior, cualquier fracción de minuto que haya sido iniciada será considerada como un minuto completo para efectos de su contabilización y cobro.\n\nLa presente política aplica tanto al consumo de minutos por parte del cliente como al cómputo del tiempo efectivamente atendido por el psíquico, con el fin de garantizar una compensación equitativa por el tiempo dedicado, así como una medición clara, objetiva y transparente del servicio prestado. La duración de cada interacción es registrada automáticamente por el sistema, y el usuario reconoce y acepta expresamente esta modalidad de facturación desde el momento en que hace uso de la plataforma.\n\nLos minutos adquiridos dentro de la plataforma Luz Psíquica constituyen créditos digitales de uso exclusivo dentro del ecosistema del servicio, y no representan dinero en efectivo, depósitos, saldos retirables, instrumentos financieros ni valores transferibles. En consecuencia, todas las compras de minutos realizadas dentro de la aplicación son finales, definitivas y no reembolsables, incluyendo aquellos casos en los que el usuario decida no utilizar total o parcialmente los minutos adquiridos.\n\nEl no uso del servicio por parte del usuario, ya sea total o parcial, no genera derecho a devolución de dinero, compensación, indemnización ni reconocimiento económico de ninguna naturaleza. Los minutos no podrán ser convertidos en dinero, transferidos a terceros, retirados de la plataforma ni reclamados como saldo a favor fuera del entorno de Luz Psíquica.\n\nEl usuario reconoce expresamente que, al realizar una compra dentro de la plataforma, adquiere un servicio digital de consumo inmediato o bajo demanda, y renuncia, en la medida permitida por la ley aplicable, a cualquier derecho de retracto, desistimiento o devolución posterior. De manera excepcional, la plataforma podrá evaluar solicitudes únicamente cuando existan fallas técnicas comprobables, atribuibles directamente a Luz Psíquica, que hayan impedido de manera efectiva la prestación del servicio.\n\nEn tales casos, cualquier medida se limitará estrictamente a la corrección del error o a la reposición proporcional del servicio dentro de la plataforma, sin que ello implique devolución monetaria. La plataforma se reserva el derecho de rechazar cualquier solicitud cuando existan indicios de fraude, abuso, uso indebido del sistema, intento de elusión de controles, manipulación técnica o incumplimiento de las normas establecidas. Las decisiones adoptadas por Luz Psíquica en relación con estas disposiciones serán definitivas dentro del ámbito operativo de la plataforma y no generarán derecho a compensaciones adicionales, intereses, indemnizaciones ni reclamaciones distintas a los ajustes técnicos que, en caso de proceder, se determinen.\n",

      s9Title: "9. Faltas graves",
      s9Body: "Se consideran faltas graves, de manera enunciativa y no limitativa, los comportamientos que vulneren de forma grave la seguridad, el respeto, la legalidad o la convivencia dentro de la plataforma, incluyendo insultos, amenazas, acoso, difusión de pornografía, contenido sexual explícito, conductas ofensivas, discriminatorias o contrarias a la moral, al orden público y al respeto entre las personas.\n\nLa comisión de faltas graves podrá dar lugar al cierre definitivo e inmediato de la cuenta del usuario o del psíquico, sin necesidad de advertencia previa, cuando así lo justifiquen la gravedad de los hechos, la reiteración de la conducta o los riesgos para otros usuarios o para la integridad de la plataforma.\n\nEn los casos de especial gravedad, y cuando existan evidencias internas suficientes y verificables de incumplimiento de las normas, Luz Psíquica podrá proceder al cierre definitivo de la cuenta sin reconocimiento de pagos, saldos acumulados, beneficios pendientes o compensaciones de cualquier naturaleza, sin perjuicio de las acciones legales que pudieran corresponder.\n",

      s10Title: "10. Retiro voluntario del cliente",
      s10Body: "El usuario podrá solicitar en cualquier momento el retiro voluntario de la plataforma mediante el uso de los mecanismos y herramientas habilitados dentro de la aplicación.\n\nUna vez realizada la solicitud y confirmada de manera expresa por el usuario, la eliminación de la cuenta se efectuará de forma inmediata, dando por terminada la relación entre el usuario y la plataforma, sin perjuicio del cumplimiento de las obligaciones previamente adquiridas.\n\nEl retiro voluntario no genera, en ningún caso, derecho a reembolso, compensación, indemnización ni devolución de los valores pagados por servicios adquiridos, incluidos los minutos no consumidos al momento de la eliminación de la cuenta.\n\nLos minutos disponibles al momento del retiro no podrán ser convertidos en dinero, transferidos ni reclamados como saldo a favor fuera de la plataforma.\n\nEl usuario reconoce y acepta expresamente que los servicios adquiridos tienen carácter no reembolsable, y que esta condición ha sido informada de manera clara y previa al uso de la plataforma.\n\nLa solicitud de retiro y su procesamiento se realizarán conforme a los procedimientos internos de Luz Psíquica, sin que ello implique obligación de reconocimiento económico alguno por parte de la plataforma.\n",

      s11Title: "11. Uso de tecnologías incorporadas del dispositivo",
      s11Body: "La aplicación Luz Psíquica podrá solicitar acceso a determinadas tecnologías incorporadas del dispositivo del usuario, tales como la cámara y el micrófono, únicamente cuando el propio usuario decida utilizarlas de manera voluntaria dentro de las funcionalidades disponibles de la aplicación.\n\nEl acceso a la cámara se solicita exclusivamente cuando el usuario opta por subir una imagen, por ejemplo, una fotografía de perfil. El acceso al micrófono se utiliza únicamente durante las interacciones de comunicación por voz dentro de la plataforma. En ningún caso la aplicación utiliza funciones de grabación de video.\n\nLa aplicación no utiliza la cámara ni el micrófono en segundo plano, ni accede a estas tecnologías sin la interacción directa y el consentimiento explícito del usuario. Asimismo, Luz Psíquica no captura imágenes, audio ni ningún otro contenido sin la autorización expresa del usuario.\n\nLas imágenes y audios proporcionados por el usuario se utilizan exclusivamente para fines funcionales y operativos dentro de la aplicación y no se comparten con terceros sin autorización expresa del usuario, salvo cuando sea estrictamente necesario para la prestación del servicio conforme a las condiciones de la plataforma.\n\nEl usuario podrá revocar en cualquier momento los permisos otorgados a la cámara y al micrófono desde la configuración del sistema operativo de su dispositivo, lo cual podrá limitar o impedir el uso de determinadas funcionalidades de la aplicación.\n",

      s12Title: "12. Contacto",
      s12Intro: "Para cualquier duda, queja, reclamo o consulta relacionada con el funcionamiento de la aplicación, el usuario podrá comunicarse con Luz Psíquica a través de los canales de contacto habilitados dentro de la plataforma.\n\nLas comunicaciones recibidas serán atendidas conforme a los procedimientos internos de la aplicación y dentro de los plazos razonables, según la naturaleza de la solicitud.\n",
    },
    
    operational_header_title: 'Documento Operativo',
    operational: {
      title: "Documento de Funcionamiento Operativo de la Plataforma",
      meta: "Versión: {{version}} · Fecha: {{date}} · Plataforma: {{platform}}",

      s1Heading: "1. Objeto del documento",
      s1Body: "El presente Documento de Funcionamiento Operativo tiene como finalidad describir de manera clara, transparente y técnica el funcionamiento general de la plataforma Luz Psíquica, así como establecer las reglas operativas, técnicas y funcionales bajo las cuales se presta el servicio a clientes y psíquicos. Este documento forma parte integral del marco legal de la plataforma y es de obligatorio cumplimiento para todos los usuarios que utilicen la aplicación.",

      s2Heading: "2. Descripción general de la plataforma",
      s2Body: "Luz Psíquica es una plataforma digital que permite la comunicación entre clientes y psíquicos mediante servicios de chat y llamadas de voz, utilizando un sistema de minutos prepagados adquiridos por los clientes. Adicionalmente, la plataforma podrá ofrecer contenidos audiovisuales asociados a su actividad, con fines informativos, promocionales, comerciales o de posicionamiento de marca. La plataforma actúa como intermediaria tecnológica, proporcionando la infraestructura técnica, los sistemas de pago, el control de sesiones, la gestión de minutos y la liquidación económica correspondiente a los psíquicos.",

      s3Heading: "3. Roles dentro de la plataforma",
      s31Heading: "3.1 Cliente",
      s31Body: "Usuario que adquiere minutos y accede a los servicios de consulta mediante chat o llamada.",
      s32Heading: "3.2 Psíquico",
      s32Body: "Usuario autorizado que presta servicios de consulta a los clientes y recibe una remuneración\neconómica según el tiempo efectivamente consumido.",
      s33Heading: "3.3 Administrador",
      s33Body: "Usuario encargado de la supervisión, validación, mantenimiento y operación general de la\nplataforma.",

      s4Heading: "4. Funcionamiento operativo del servicio",
      s41Heading: "4.1 Registro y acceso",
      s41Body: "• Los usuarios deben registrarse con información válida.\n• Los clientes pueden crear cuenta y comprar minutos.\n• Los psíquicos deben ser autorizados por la plataforma antes de prestar el servicio.",
      s42Heading: "4.2 Compra de minutos",
      s42Body: "• Los minutos se adquieren mediante pasarela de pago.\n• Los minutos son prepagados y se consumen en sesiones.\n• La plataforma define precios, paquetes, descuentos y reglas operativas.",
      s43Heading: "4.3 Inicio de sesión y disponibilidad",
      s43Body: "• El cliente selecciona un psíquico disponible.\n• La sesión solo inicia si hay minutos suficientes adquiridos por parte del cliente\n• La plataforma administra el control de tiempo y consumo.",

      s5Heading: "5. Sesiones, consumo de minutos y control antifraude",
      s51Heading: "5.1 Control de sesiones",
      s51Body: "• El consumo se contabiliza por minuto en chat o llamada.\n• El sistema cierra sesiones por inactividad o finalización.\n• Se aplican controles para evitar usos anómalos o fraude.",
      s52Heading: "5.2 Prohibición de intercambio de datos personales",
      s52Body: "• Está prohibido intercambiar datos personales o de contacto.\n• Está prohibido sacar la relación comercial fuera de la plataforma.\n• El incumplimiento puede implicar suspensión o cierre.",

      s6Heading: "6. Validación y funcionamiento del rol psíquico",
      s61Heading: "6.1 Condiciones del psíquico",
      s61Body: "• El psíquico debe ser aprobado por la plataforma.\n• Debe operar bajo las reglas internas.\n• Puede ser suspendido por incumplimientos, quejas o fraude.",

      s7Heading: "7. Pago a psíquicos y liquidación económica",
      s71Heading: "7.1 Liquidación económica",
      s71Body: "• La plataforma realiza liquidación según minutos consumidos efectivamente.\n• La remuneración se determina conforme a las reglas internas de la plataforma y al registro interno de las transacciones efectuadas.\n• Los pagos se agrupan y ejecutan en ciclos definidos.",

      s8Heading: "8. Activos sonoros, musicales y audiovisuales de la plataforma",
      s81Heading: "8.1 Naturaleza de los activos",
      s81Body: "La plataforma utiliza activos digitales que incluyen, entre otros:\n• ringtones de llamadas entrantes\n• sonidos de notificación y alertas del sistema\n• música incorporada en contenidos audiovisuales\n• videos promocionales, informativos o comerciales\nEstos activos forman parte integral de la experiencia funcional, comunicativa y de marca\nde Luz Psíquica.",
      s82Heading: "8.2 Origen de los activos",
      s82Body: "Los activos sonoros, musicales y audiovisuales utilizados por la plataforma:\n• han sido creados específicamente para Luz Psíquica\n• se desarrollan mediante procesos creativos propios, que pueden incluir el uso de herramientas de inteligencia artificial generativa, siempre bajo la dirección, control y curaduría de la plataforma\n• no corresponden a obras musicales comerciales ni a contenidos audiovisuales de terceros con explotación independiente",
      s83Heading: "8.3 Contenidos audiovisuales y difusión externa",
      s83Body: "Los contenidos audiovisuales producidos por Luz Psíquica:\n• pueden ser comercializados, distribuidos o difundidos dentro y fuera de la aplicación\n• pueden publicarse en plataformas digitales y redes sociales\n• pueden incluir música, imágenes, animaciones, textos y voces generadas o asistidas por inteligencia artificial\nLa difusión de estos contenidos no implica cesión de derechos a usuarios, psíquicos ni terceros.",
      s84Heading: "8.4 Propiedad intelectual",
      s84Body: "• Todos los activos sonoros, musicales y audiovisuales son propiedad exclusiva de Luz Psíquica, o cuentan con las licencias necesarias para su uso.\n• No son personalizables por los usuarios.\n• No pueden ser extraídos, reutilizados, distribuidos, revendidos ni explotados fuera de la plataforma sin autorización expresa y escrita.",
      s85Heading: "8.5 Finalidad de uso",
      s85Body: "Los activos descritos:\n• cumplen una función técnica, operativa, comunicativa y comercial\n• no constituyen obras artísticas independientes para explotación individual\n• no generan derechos económicos, autorales ni de participación para los usuarios o psíquicos",

      s9Heading: "9. Limitaciones técnicas y operativas",
      s9Body: "• La plataforma depende de conectividad a internet.\n• Fallos técnicos, interrupciones de red o mantenimiento pueden afectar temporalmente el servicio.\n• Luz Psíquica no garantiza disponibilidad continua e ininterrumpida.",

      s10Heading: "10. Modificaciones del servicio",
      s10Body: "Luz Psíquica se reserva el derecho de:\n• modificar funcionalidades\n• ajustar reglas operativas\n• actualizar sistemas de pago, comunicación o contenidos\nEstas modificaciones podrán realizarse para mejorar la experiencia del usuario o por razones técnicas, legales u operativas.",

      s11Heading: "11. Aceptación del documento",
      s11Body: "El uso de la plataforma implica la aceptación expresa de este Documento de\nFuncionamiento Operativo, así como de los demás documentos legales asociados.",

      s12Heading: "12. Información adicional",
      s12Body: "Responsable del desarrollo tecnológico de la plataforma:\nAndrés Loaiza\nEl diseño, desarrollo técnico, arquitectura funcional y operación tecnológica de la plataforma Luz Psíquica han sido realizados bajo la dirección del responsable mencionado, en coordinación con los objetivos, principios éticos y lineamientos operativos de la plataforma.\nNota final\nEste documento se publica como parte del compromiso de Luz Psíquica con la transparencia, la ética tecnológica, la creatividad responsable y la claridad operativa."
    }
  },

  en: {
    nav_home: 'Home',
    nav_legal: 'Legal',
    nav_lang: 'Language',
    lang_title: 'Select language',
    legal_title: 'App legality',
    legal_body: 'Here we will add Terms, Privacy, and legal notices before final production.',
    close: 'Close',

    login_header_title: 'Sign in',
    login_title: 'Luz Psíquica',
    login_subtitle: 'Access your account to continue',
    login_email_or_phone: 'Email or phone',
    login_phone_helper: 'If using a phone number, enter it in international format (e.g. +1 555 000 0000).',
    login_password: 'Password',
    login_enter: 'Sign in',
    login_forgot: 'Forgot your password?',
    login_client_register: 'Client? Create account',
    login_psychic_apply: 'Psychic? Apply to work with us',
    login_error_title: 'Login error',
    login_missing_credentials: 'Please enter your phone number and password.',

    agora_title: 'Call (placeholder)',
    agora_psychic: 'Psychic',
    agora_room: 'Room',
    agora_call_id: 'CallId',
    agora_initial_minutes: 'Initial minutes',
    agora_socket: 'Socket',
    agora_status: 'Status',
    agora_back: 'Back',
    agora_note:
      '* If the client hangs up or the psychic rejects, this screen should close automatically (socket + polling).',

    call_end_title: 'Call ended',
    call_end_ok: 'OK',
    call_end_default: 'The call has ended.',
    call_end_missed: 'The call was rejected/missed.',
    call_end_cancelled: 'The call was cancelled (no charge).',
    call_end_caller_hungup: 'The client hung up.',

    cfg_error_title: 'Configuration error',
    cfg_error_body: 'EXPO_PUBLIC_API_URL is not configured.',
    error_title: 'Error',
    error_no_callid: 'callId was not received.',
    session_expired_title: 'Session expired',
    session_expired_body: 'Authenticated user not found.',
    psychic_fallback_name: 'Psychic',
    dash_placeholder: '—',

    buy_minutes_header_title: 'Buy minutes',

    buy_minutes_title: 'Buy minutes',
    buy_minutes_subtitle:
      'Buy minute packages (PayPal). Usage is deducted in calls and chat.',
    buy_minutes_current_balance: 'Your current minutes',
    buy_minutes_pending_title: 'Pending payment',
    buy_minutes_order: 'Order',
    buy_minutes_total: 'Total',
    buy_minutes_confirming: 'Confirming payment...',
    buy_minutes_return_hint: 'Return to the app after approving in PayPal.',
    buy_minutes_paid_fallback: 'I already paid (fallback)',
    buy_minutes_cancel: 'Cancel',
    buy_minutes_pkg_minutes: 'minutes',
    buy_minutes_tap_to_pay: 'Tap to start PayPal payment',

    session_expired: 'Your session has expired. Please log in again.',
    paypal_approve_url_missing: 'PayPal did not return an approval URL.',

    payment_success_balance:
      'Payment successful. {{added}} minutes have been added. New balance: {{balance}}.',
    payment_confirmed_balance:
      'Payment confirmed. Updated balance: {{balance}}.',

    discount_label: 'Discount: {{pct}}%',

    paypal_continue_title: 'Continue in PayPal',
    paypal_continue_body:
      'Approve the payment in PayPal.\n\nWhen you return to the app, it will confirm automatically.',

    purchase_success_title: 'Purchase successful',
    purchase_success_body:
      'Payment confirmed.\n{{added}} minutes were added.',

    payment_cancelled_title: 'Payment cancelled',
    payment_cancelled_body: 'You cancelled the payment in PayPal.',

    err_title: 'Error',
    err_load_minutes: 'Could not load your minutes balance.',
    err_no_config: 'EXPO_PUBLIC_API_URL is not configured',
    err_not_auth: 'User not authenticated',
    err_create_order: 'Could not create the PayPal order.',
    err_open_paypal: 'Could not open PayPal on this device.',
    err_capture_payment: 'Could not capture the payment.',
    err_auto_finish_title: 'Could not finish automatically',
    err_auto_finish_body:
      'The payment is not confirmed yet. If you just approved it, try again in a few seconds.',
    err_read_paypal_token: 'Could not read PayPal token to finalize the purchase.',

    pending_still_not_confirmed_title: 'Payment not confirmed yet',
    pending_still_not_confirmed_body:
      'Could not capture yet. Make sure you approved the payment in PayPal and try again.',
    retry: 'Retry',
    dash_placeholder2: '--',
    minutes_suffix: 'min',

    callhist_header_title: 'Call history',

    callhist_title_default: 'Call history',
    callhist_title_with_name: 'Call history',

    callhist_loading: 'Loading history…',
    callhist_back_dashboard: 'Back to dashboard',
    callhist_refresh: 'Refresh history',
    callhist_empty: 'You don’t have any recorded sessions yet.',
    callhist_not_enough_data: 'Not enough data yet.',

    callhist_summary_minutes_title: 'Minutes summary',
    callhist_summary_earnings_title: 'Earnings summary',

    callhist_minutes_available: 'Available minutes',
    callhist_minutes_spent_calls: 'Minutes spent (📞)',
    callhist_minutes_spent_chats: 'Minutes spent (💬)',
    callhist_minutes_spent_total: 'Total spent',

    callhist_minutes_earned_calls: 'Minutes earned (📞)',
    callhist_minutes_earned_chats: 'Minutes earned (💬)',
    callhist_minutes_earned_total: 'Total minutes earned',
    callhist_earnings_total: 'Total earnings',

    callhist_summary_by_client: 'Summary by client',
    callhist_summary_by_psychic: 'Summary by psychic',

    callhist_status_finished: 'Finished',
    callhist_status_missed: 'Rejected/Missed',
    callhist_status_ongoing: 'Ongoing',
    callhist_status_cancelled: 'Cancelled',
    callhist_placeholder: '—',

    callhist_type_chat: '💬 Chat',
    callhist_type_voice: '📞 Call',

    callhist_start: 'Start',
    callhist_end: 'End',

    callhist_duration: '⏱ {{secs}}s',
    callhist_minutes_charged: '⌛ {{mins}} billed minutes',
    callhist_no_charge: ' · No charge',
    callhist_earning_line: ' · 💰 ${{usd}} USD',

    callhist_rate_your_rating: 'Your rating: {{rating}}/5',
    callhist_rate_prompt: 'Rate this call:',
    callhist_rate_saving: 'Saving…',

    callhist_rate_confirm_title: 'Confirm rating',
    callhist_rate_confirm_body: 'Do you want to rate {{stars}} stars?',
    callhist_cancel: 'Cancel',
    callhist_yes: 'Yes',

    callhist_thanks: 'Thank you',
    callhist_rate_saved: 'Your rating was saved.',

    callhist_err_config_title: 'Configuration error',
    callhist_err_config_body: 'EXPO_PUBLIC_API_URL is not configured.',
    callhist_err_session_title: 'Session expired',
    callhist_err_session_body_token: 'Token not found. Please sign in again.',
    callhist_err_session_body_login: 'Please sign in again.',
    callhist_err_title: 'Error',
    callhist_err_load: 'Could not load history.',
    callhist_err_rate_save: 'Could not save the rating.',

    callhist_psychic_fallback: 'Psychic',

    chat_header_title: 'Chat with {{name}}',

    chat_loading_session: 'Loading session…',
    chat_not_available_title: 'Chat unavailable',
    chat_not_available_body: 'Missing data to open chat: {{missing}}.',
    chat_not_available_hint: '(Make sure you navigate with otherUserId and EXPO_PUBLIC_API_URL exists)',

    chat_block_unavailable: '⛔ The psychic is not available. You can view the chat, but you can’t send messages.',
    chat_block_no_minutes: '⛔ You have no minutes available. You can view history, but you must buy minutes to chat.',

    chat_inactivity_warning_prefix: '⚠️ Inactivity detected. Chat will pause in {{sec}}s.',
    chat_timeout_bar: '⏸️ Chat paused due to inactivity. {{msg}}',
    chat_timeout_client_hint: 'Type or tap “Resume”.',
    chat_timeout_other_hint: 'Wait for the client.',
    chat_resume: 'Resume',

    chat_loading_conversation: 'Loading conversation…',
    chat_block_offline_psychic: 'Psychic offline. Try again later.',
    chat_policy_personal_info: '⚠️ You can’t send personal info (phone, email, or address). Please rephrase.',
    chat_block_unavailable_short: '⛔ The psychic is not available right now. You can’t send messages.',
    chat_block_no_minutes_short: '⛔ You have no minutes to chat. Buy minutes to continue.',
    chat_block_wait_client_start: '⏳ Waiting for the client to start the chat (first client message).',
    chat_block_client_inactive: '⏸️ Chat paused due to client inactivity. Wait for the client to resume.',
    chat_block_session_closed: '⛔ The session is closed. You must start a new session.',
    chat_network_error_send: 'Network error while sending the message.',

    chat_placeholder_unavailable: 'Psychic unavailable…',
    chat_placeholder_no_minutes: 'No minutes…',
    chat_placeholder_paused: 'Chat paused…',
    chat_placeholder_timeout: 'Chat paused due to inactivity…',
    chat_placeholder_write: 'Write your message…',
    chat_placeholder_offline_psychic: 'You cannot send messages',

    chat_send: 'Send',
    chat_sending_dots: '…',

    chat_other_psychic: 'Psychic',
    chat_other_client: 'Client',
    chat_other_chat: 'Chat',

    clientdash_header_title: 'Client Dashboard',

    clientdash_title: 'My Dashboard',
    clientdash_subtitle: '{{name}}, here you can check your minutes balance and your calls.',

    clientdash_quick_summary: 'Quick summary',
    clientdash_loading_info: 'Loading information…',
    clientdash_minutes_available: 'Available minutes:',
    clientdash_calls_made: 'Calls made:',

    clientdash_last_calls: 'Recent calls',
    clientdash_view_history: 'View history',
    clientdash_loading_history: 'Loading history…',
    clientdash_status_finished: "Finished",
    clientdash_status_missed: "Rejected/Missed",
    clientdash_status_ongoing: "Ongoing",
    clientdash_status_cancelled: "Cancelled",
    clientdash_status_unknown: "—",
    clientdash_no_calls: 'You don’t have any calls yet.',
    clientdash_view_full_history: 'View full history',

    clientdash_actions: 'Actions',
    clientdash_go_psychics: 'Go to psychics list',
    clientdash_go_chat: 'Go to chat',

    clientdash_select_psychic_title: 'Select a psychic',
    clientdash_select_psychic_body: 'To open the chat, you must first choose a psychic from the list.',

    clientdash_error_config_title: 'Configuration error',
    clientdash_error_config_body: 'EXPO_PUBLIC_API_URL is not configured.',

    clientdash_session_expired_title: 'Session expired',
    clientdash_session_expired_body: 'Token not found. Please log in again.',

    clientdash_error_title: 'Error',
    clientdash_error_body: 'Could not load dashboard information. Please try again later.',
    clientdash_chat_error_body: 'Could not open the chat right now. Please try again.',

    clientdash_buy_minutes: 'Buy minutes',

    clientdash_no_minutes_title: 'You have no minutes available',
    clientdash_no_minutes_body: 'Purchase minutes to start chats and calls with your psychic advisors.',

    clientdash_low_minutes_title: 'Your minutes are running low',
    clientdash_low_minutes_body: 'You have {{n}} minutes remaining. Buy more to continue using the app without interruptions.',
    clientdash_delete_account_title: 'Delete account',
    clientdash_delete_account_body: 'If you want to permanently close your account, you can continue from here. This action will take you to a secure confirmation screen.',
    clientdash_delete_account_cta:'Continue to delete account',

    delete_account_header_title: 'Delete account',
    delete_account_title: 'Delete account',
    delete_account_subtitle: 'You are managing the permanent deletion of your account.',
    delete_account_subtitle_with_name: 'You are managing the deletion of {{name}}\'s account.',
    delete_account_success_title: 'Account deleted',
    delete_account_success_body: 'Your account was deleted successfully.',
    delete_account_success_ok: 'OK',
    delete_account_error_title: 'Error deleting account',
    delete_account_error_body: 'The account could not be deleted. Please try again.',
    delete_account_confirm_title: 'Confirm deletion',
    delete_account_confirm_body: 'This action is permanent and cannot be undone.',
    delete_account_confirm_cta: 'Delete my account',
    delete_account_confirm_section_title: 'Confirmation',
    delete_account_confirm_check_label: 'I understand that this action is permanent and I want to continue.',
    delete_account_confirm_required_title: 'Confirmation required',
    delete_account_confirm_required_body:  'You must confirm that you understand this action is permanent.',
    delete_account_cancel_cta: 'Cancel',
    delete_account_password_label: 'Current password',
    delete_account_password_helper: 'You can enter your password as an additional validation. This field is optional.',
    delete_account_password_placeholder: 'Enter your password (optional)',
    delete_account_warning_title: 'Important warning',
    delete_account_warning_body: 'When you delete your account, you will lose access to your profile and associated information.',
    delete_account_warning_point_1: 'You will not be able to sign in again with this account after deleting it.',
    delete_account_warning_point_2: 'This action is intended to be a permanent deletion.',
    delete_account_warning_point_3: 'Before continuing, make sure you really want to close your account.',
    delete_account_processing: 'Deleting account...',    

    clienthome_header_title: 'Client Home',
    clienthome_register: 'Sign up',
    clienthome_logout: 'Log out',

    clienthome_welcome: 'Welcome',
    clienthome_welcome_name: 'Welcome, {{name}}',

    clienthome_subtitle: 'Choose an available psychic to start an audio or chat consultation.',
    clienthome_my_panel: 'My Dashboard',
    clienthome_login: 'Log in',
    clienthome_loading_psychics: 'Loading psychics…',
    clienthome_empty: 'There are no registered psychics at the moment.',

    languages: {
      es: 'Spanish',
      en: 'English',
      fr: 'French',
      de: 'German',
      pt: 'Portuguese',
      it: 'Italian',
    },

    clienthome_psychic_available: 'Available',
    clienthome_psychic_not_available: 'Not available',
    clienthome_psychic_busy_label: 'Busy',
    clienthome_psychic_offline_suffix: ' (offline)',
    clienthome_busy_in_call: 'Busy (on a call)',

    clienthome_call_now: 'Call now',
    clienthome_chat: 'Chat',

    clienthome_comments: 'Reviews',
    clienthome_comments_sent: 'Reviews (sent)',

    clienthome_psychic_not_available_title: 'Psychic not available',
    clienthome_psychic_not_available_body: 'This psychic is not available right now.',

    clienthome_session_expired_title: 'Session expired',
    clienthome_session_expired_body: 'Please log in again.',

    clienthome_no_minutes_title: 'No minutes',
    clienthome_no_minutes_body: 'You don’t have enough balance.',
    clienthome_no_minutes_cancel: 'Cancel',
    clienthome_no_minutes_buy: 'Buy minutes',

    clienthome_error_title: 'Error',
    clienthome_error_load_psychics: 'Could not load the list of psychics.',
    clienthome_error_invalid_server: 'Invalid server response.',
    clienthome_error_unexpected_format: 'Unexpected format for the psychics list.',
    clienthome_error_invalid_response: 'Invalid server response.',

    clienthome_snippet_fallback: 'Psychic available to assist you.',

    clienthome_call_start_error: 'Unable to start the call. Please try again.',

    app_layout_default_title: "Psychic Light",
    app_layout_logo_alt: "Psychic Light",
    app_layout_footer_home: "Home",
    app_layout_footer_legal: "Legal",
    app_layout_footer_language: "Language",
    app_layout_language_modal_title: "Select language",
    app_layout_language_name_es: "Spanish",
    app_layout_language_name_en: "English",
    app_layout_language_name_fr: "French",
    app_layout_language_name_de: "German",
    app_layout_language_name_pt: "Portuguese",
    app_layout_language_name_it: "Italian",
    common: {
      close: "Close"
    },

    network_error_title: 'Error',
    network_error_message: 'Could not connect to the server. Please check your connection and try again.',
    generic_error_message: 'An unexpected error occurred. Please try again.',

    directcall_config_error_title: 'Configuration error',
    directcall_config_error_body: 'EXPO_PUBLIC_API_URL is not configured.',

    directcall_session_expired_title: 'Session expired',
    directcall_session_expired_body_login_again: 'Please log in again.',
    directcall_session_expired_body_token_missing: 'Token not found. Please log in again.',
    directcall_session_expired_body_call: 'Log in again to place a call.',

    directcall_error_title: 'Error',
    directcall_error_missing_psychic: 'Psychic information was not found.',
    directcall_error_start_call: 'Could not start the call.',
    directcall_error_invalid_call_params: 'The server did not return valid call parameters.',

    directcall_cannot_start_title: 'Cannot start the call',
    directcall_cannot_start_no_minutes_fallback: 'No minutes balance',
    directcall_cancel: 'Cancel',
    directcall_buy_minutes: 'Buy minutes',

    directcall_connecting_with: 'Connecting session with',
    directcall_psychic_fallback: 'Psychic',

    directcall_hint_starting: 'Starting call…',
    directcall_hint_loading: 'Loading…',
    directcall_hint_ready: 'Ready',

    directcall_note_no_answer: '* If the psychic doesn’t answer, you can try another one from the list.',

    forgot_header_title: 'Reset password',
    
    forgot_title: 'Reset password',

    forgot_subtitle: 'Enter your email or phone number to receive the recovery code.',

    forgot_field_label_email_or_phone: 'Email or phone',
    forgot_placeholder_email_or_phone: 'Email or phone',

    forgot_required_title: 'Required',
    forgot_required_email_or_phone: 'Enter your email or phone number.',
    forgot_required_code: 'Enter the code you received.',

    forgot_send_code: 'Send code',
    forgot_step2_help: 'We sent you a code. Enter it here and set your new password.',

    forgot_done_body_sms: 'We’ve sent you a code via SMS to reset your password. Please check it and enter it below.',
    forgot_step2_help_sms: 'If you don’t receive the code, make sure your phone number is correct or request a new one.',

    forgot_code_label: 'Code',
    forgot_code_placeholder: 'Code (6 digits)',

    forgot_new_password_label: 'New password',
    forgot_new_password_placeholder: 'New password',

    forgot_confirm_password_label: 'Confirm password',
    forgot_confirm_password_placeholder: 'Confirm password',

    forgot_weak_password_title: 'Weak password',
    forgot_weak_password_body: 'Password must be at least 6 characters long.',

    forgot_not_match_title: "Doesn't match",
    forgot_not_match_body: 'Passwords do not match.',

    forgot_done_title: 'Done',
    forgot_done_body_generic: 'If the user exists, we will send a code to reset the password.',

    forgot_error_title: 'Error',
    forgot_error_send_code: 'Could not send the code.',
    forgot_error_reset: 'Could not reset the password.',

    forgot_password_updated_title: 'Password updated',
    forgot_password_updated_body: 'You can now log in with your new password.',

    forgot_change_password: 'Change password',

    forgot_resend_code: 'Resend code',
    forgot_back_to_login: 'Back to login',

    forgot_show_password_a11y: 'Show password',
    forgot_hide_password_a11y: 'Hide password',

    legal_home_header_title: 'Legal',
    legal_home_title: 'Legal',
    legal_home_meta: 'Select the document you want to review.',

    legal_home_card_privacy_title: 'Rules & Privacy',
    legal_home_card_privacy_desc: 'Terms of use, privacy, refunds, and general rules.',

    legal_home_card_operational_title: 'Platform Operational Document',
    legal_home_card_operational_desc:
      'Technical-operational flow, roles, sessions, minutes, and operating rules.',

    common_back: 'Back',

    psych_callhist_header_title: 'Call history',

    psych_callhist_title: 'Call history',
    psych_callhist_session_expired_title: 'Session expired',
    psych_callhist_session_expired_body: 'Please sign in again.',
    psych_callhist_error_title: 'Error',
    psych_callhist_error_load_history: 'Error loading history',
    psych_callhist_error_load_history_fallback: 'Could not load history.',
    psych_callhist_error_load_payout: 'Error loading payout summary',

    psych_callhist_status_finished: 'Finished',
    psych_callhist_status_missed: 'Declined/Missed',
    psych_callhist_status_ongoing: 'Ongoing',
    psych_callhist_status_cancelled: 'Cancelled',
    psych_callhist_status_unknown: '—',

    psych_callhist_client_fallback: 'Client',

    psych_callhist_start: 'Start',
    psych_callhist_end: 'End',
    psych_callhist_no_charge: 'No charge',

    psych_callhist_payout_block_title: 'Payout summary (PayPal)',
    psych_callhist_earned_total: 'Total earned:',
    psych_callhist_paid_total: 'Paid:',
    psych_callhist_pending_total: 'Pending payout:',
    psych_callhist_last_payout: 'Last payout:',

    psych_callhist_info_block_title: 'Informational summary',
    psych_callhist_calls: 'Calls:',
    psych_callhist_minutes_charged: 'Minutes charged:',
    psych_callhist_estimated_earnings: 'Estimated earnings:',
    psych_callhist_info_hint: '*This value is for reference. Actual payout is based on settlements.',

    psych_callhist_empty: 'You don’t have any calls yet.',

    psych_call_perm_title: 'Microphone permission',
    psych_call_perm_message_appname: 'Luz Psíquica needs access to the microphone for voice calls.',
    psych_call_perm_allow: 'Allow',
    psych_call_perm_deny: 'Cancel',

    psych_call_client_fallback: 'Client',
    psych_call_dash: '—',

    psych_call_end_title: 'Call ended',
    psych_call_end_client_cancelled: 'The client cancelled the call.',
    psych_call_end_missed_or_incomplete: 'The call was declined or did not complete.',
    psych_call_end_error_title: 'Error',
    psych_call_end_error_body: 'Could not end the call properly.',

    psych_call_audio_no_mic_permission: 'Microphone permission not granted',
    psych_call_audio_session_expired: 'Session expired',
    psych_call_audio_invalid_token: 'Invalid voice token',
    psych_call_audio_incomplete_data: 'Incomplete Agora data',
    psych_call_audio_sdk_unavailable: 'Agora SDK not available',
    psych_call_audio_connect_error: 'Error connecting audio',

    psych_call_audio_status_error_prefix: 'Audio error: {{msg}}',
    psych_call_audio_status_connecting: 'Connecting audio…',
    psych_call_audio_status_waiting_client: 'Audio connected. Waiting for the client…',
    psych_call_audio_status_connected_client: 'Audio connected with the client.',

    psych_call_title_in_progress: 'Call in progress',
    psych_call_room_label: 'Room:',
    psych_call_time_label: 'Time:',
    psych_call_end_button: 'End call',

    psych_chathist_title: 'Chat history',
    psych_chathist_refresh: 'Refresh',
    psych_chathist_refresh_busy: '…',
    psych_chathist_loading: 'Loading conversations…',
    psych_chathist_empty: 'There are no chats to display yet.',
    psych_chathist_error_load: 'Could not load history',

    psych_chathist_readonly_note: 'Read-only (the psychic does not start chats)',

    psych_chathist_client_fallback: 'Client',
    psych_chathist_dash: '—',
    psych_chathist_initials_fallback: 'LP',

    psych_chatthread_title_with_name: 'Chat with {{name}}',
    psych_chatthread_readonly_note: 'Read-only (the psychic does not start chats)',
    psych_chatthread_loading: 'Loading messages…',
    psych_chatthread_empty: 'No messages to display.',
    psych_chatthread_error_load: 'Could not load the chat',

    psych_chatthread_client_fallback: 'Client',
    psych_chatthread_dash: '—',

    psych_comments_nav_title_with_name: 'Comments - {{name}}',
    psych_comments_psychic_fallback: 'Psychic',
    psych_comments_client_prefix: 'Client',
    psych_comments_dash: '—',

    psych_comments_loading: 'Loading comments…',
    psych_comments_loading_fallback: 'Loading comments…',
    psych_comments_error_title: 'Error',
    psych_comments_err_no_api_url: 'EXPO_PUBLIC_API_URL is not configured.',
    psych_comments_err_no_psychic_id: 'psychicId was not received.',
    psych_comments_err_load_comments: 'Could not load comments',

    psych_comments_not_available_title: 'Not available',
    psych_comments_not_available_body: 'You can only rate after a session ends.',
    psych_comments_session_expired_title: 'Session expired',
    psych_comments_session_expired_body: 'Please sign in again.',

    psych_comments_saved_title: 'Done!',
    psych_comments_saved_only_rating: 'Rating saved. You already left a comment for this psychic.',
    psych_comments_saved: 'Rating saved.',

    psych_comments_err_save_rating: 'Could not save the rating',

    psych_comments_info_line1_a: 'This screen is for ',
    psych_comments_info_line1_strong: 'viewing',
    psych_comments_info_line1_b: ' comments.',
    psych_comments_info_line2_a: 'The ',
    psych_comments_info_line2_strong: 'rating',
    psych_comments_info_line2_b: ' is done after a completed session.',
    psych_comments_info_line3_a: 'The ',
    psych_comments_info_line3_strong1: 'comment',
    psych_comments_info_line3_b: ' (text) is optional and is only allowed ',
    psych_comments_info_line3_strong2: 'once per psychic',
    psych_comments_info_line3_c: '.',

    psych_comments_form_title: 'Rate this session',
    psych_comments_form_label_rating: 'Rating',
    psych_comments_form_label_comment: 'Comment (optional)',
    psych_comments_locked_text:
      '✅ You already left a comment for this psychic. You can keep rating your sessions, but you can’t write another comment.',
    psych_comments_input_placeholder: 'Write your comment (optional)...',

    psych_comments_saving: 'Saving…',
    psych_comments_save_button: 'Save rating',

    psych_comments_empty: 'No comments yet.',

    psych_dash_header_title: 'Psychic Dashboard',
    psych_dash_logout: 'Log out',

    psych_dash_psychic_fallback: 'Psychic',
    psych_dash_client_fallback: 'Client',
    psych_dash_room_dash: '—',

    psych_dash_config_error_title: 'Configuration error',
    psych_dash_config_error_body_missing_api: 'EXPO_PUBLIC_API_URL is not configured.',
    psych_dash_config_error_body_missing_api_env: 'EXPO_PUBLIC_API_URL is not set. Check your .env file.',

    psych_dash_session_expired_title: 'Session expired',
    psych_dash_session_expired_body: 'Please sign in again.',
    psych_dash_session_expired_body_and_logout: 'Please sign in again.',

    psych_dash_info_title: 'Info',
    psych_dash_info_cant_load_application: 'We could not load your application. Please try again.',

    psych_dash_nav_error_title: 'Navigation error',
    psych_dash_nav_error_body_missing_route:
      'This stack does not include the route "PsychicRegister".\n\nFix: add this screen in the SAME stack where PsychicDashboard is:\n<Stack.Screen name="PsychicRegister" component={PsychicRegisterScreen} />',

    psych_dash_error_title: 'Error',
    psych_dash_error_refresh_info: 'Could not refresh the information',
    psych_dash_error_open_form: 'Could not open the form.',

    psych_dash_call_end_title: 'Call ended',
    psych_dash_call_end_body_caller_cancelled: 'The client cancelled the call.',
    psych_dash_call_end_body_finished: 'The call ended.',

    psych_dash_not_available_title: 'Not available',
    psych_dash_not_available_call_cancelled: 'The client already cancelled the call.',

    psych_dash_modal_incoming_title: 'Incoming call',
    psych_dash_modal_incoming_sub: 'Answer to start the session',
    psych_dash_modal_client_label: 'Client:',
    psych_dash_modal_room_label: 'Room:',
    psych_dash_modal_processing: 'Processing…',
    psych_dash_modal_reject: 'Reject',
    psych_dash_modal_accept: 'Accept',
    psych_dash_modal_footnote: '* Billing starts when the psychic answers.',

    psych_dash_header_role_line: 'Psychic · Luz Psíquica',
    psych_dash_header_hint_calls: 'When you are available, you will receive clients’ calls here in real time.',
    psych_dash_socket_status: 'Socket status: {{status}}',
    psych_dash_socket_connected: 'Connected',
    psych_dash_socket_disconnected: 'Disconnected',

    psych_dash_profile_review_title: 'Profile Review',

    psych_dash_team_note_label: 'Team note:',
    psych_dash_fields_to_fix_label: 'Sections to update:',
    psych_dash_fix_button: 'Fix and resubmit form',
    psych_dash_loading: 'Loading…',

    psych_dash_revision_hint: 'Here you will see any adjustments or recommendations the team may request for your profile.',

    psych_dash_new_messages_title: 'New messages',
    psych_dash_new_messages_new_suffix: 'new',
    psych_dash_new_messages_open: 'Open',
    psych_dash_new_messages_close: 'X',

    psych_dash_availability_title: 'Availability',
    psych_dash_availability_currently: 'You are currently',
    psych_dash_available: 'Available',
    psych_dash_not_available: 'Unavailable',
    psych_dash_updating: 'Updating...',
    psych_dash_set_not_available: 'Set Unavailable',
    psych_dash_set_available: 'Set Available',

    psych_dash_rating_title: 'Rating',
    psych_dash_refresh: 'Refresh',
    psych_dash_based_on: 'Based on {{count}}',
    psych_dash_ratings_word: 'ratings',
    psych_dash_loading_comments: 'Loading comments…',
    psych_dash_no_visible_comments: 'You have no visible comments here yet.',
    psych_dash_recent_comments_title: 'Recent comments',
    psych_dash_view_all_comments: 'View all comments',

    psych_dash_calls_history_title: 'Call history',
    psych_dash_calls_history_body: 'Review the calls you have handled and their status.',
    psych_dash_view_calls_history: 'View call history',

    psych_dash_chats_history_title: 'Chat history',
    psych_dash_chats_history_body: 'Review the chats you have had with your clients.',
    psych_dash_view_chats_history: 'View chat history',

    psych_dash_info_block_title: 'Information',
    psych_dash_info_bullet_1: '• When a client starts a call and you are available, you will see an incoming call alert.',
    psych_dash_info_bullet_2: '• When you accept, you will enter the call screen to assist the client.',
    psych_dash_info_bullet_3: '• ✅ When a client sends a message, you will see it under “New messages” and you can open the chat.',

    psych_profile_header_title: 'Psychic Profile',

    psych_profile_loading_profile: 'Loading profile...',

    psych_profile_psychic_fallback: 'Psychic',
    psych_profile_no_info: 'No psychic information was found.',
    psych_profile_back: 'Back',

    psych_profile_available: 'Available',
    psych_profile_not_available: 'Unavailable',
    psych_profile_busy: 'Occupied',
    psych_profile_stats_calls_word: 'calls',

    psych_profile_featured_review_tag: '⭐ Featured comment',
    psych_profile_featured_review_rating_label: 'Rating',
    psych_profile_featured_review_client_prefix: '— Client',

    psych_profile_bio_title: 'Biography',
    psych_profile_bio_rate_label: 'Rate: US$1.25/min',
    psych_profile_bio_phrase_label: 'Tagline:',
    psych_profile_bio_languages_label: 'Languages:',
    psych_profile_bio_areas_label: 'Areas:',
    psych_profile_bio_tools_label: 'Tools:',
    psych_profile_bio_experience_label: 'Experience:',
    psych_profile_bio_about_me_label: 'About me:',

    psych_profile_work_info_title: 'Work information',
    psych_profile_work_exp_phone_chat_label: 'Phone/chat experience:',
    psych_profile_yes: 'Yes',
    psych_profile_no: 'No',
    psych_profile_work_start_year_label: 'Start year:',
    psych_profile_work_hours_per_week_label: 'Hours per week:',
    psych_profile_work_channels_label: 'Channels (phone and chat):',

    psych_profile_comments_title: 'Reviews',
    psych_profile_loading_comments: 'Loading reviews…',
    psych_profile_no_comments: 'There are no reviews for this psychic yet.',
    psych_profile_showing_comments_prefix: 'Showing',
    psych_profile_showing_comments_suffix: 'review(s), from newest to oldest.',

    psych_profile_history_title: 'History',
    psych_profile_history_body: 'View your call history with this psychic.',
    psych_profile_view_call_history: 'View call history',

    psych_profile_call_now: 'Call now',
    psych_profile_chat: 'Chat',
    psych_profile_unavailable_short: 'Unavailable',

    psych_profile_psychic_unavailable_title: 'Psychic unavailable',
    psych_profile_psychic_unavailable_body_try_later: 'This psychic is not available right now. Please try again later.',
    psych_profile_psychic_unavailable_body: 'This psychic is not available right now.',

    psych_profile_config_error_title: 'Configuration error',
    psych_profile_config_error_body_missing_api: 'EXPO_PUBLIC_API_URL is not configured.',

    psych_profile_session_expired_title: 'Session expired',
    psych_profile_session_expired_body_call: 'Please sign in again to place a call.',

    psych_profile_call_cannot_start_title: 'Cannot start the call',
    psych_profile_call_cannot_start_body_no_minutes: 'Not enough minutes',
    psych_profile_call_cannot_start_cancel: 'Cancel',
    psych_profile_call_cannot_start_buy_minutes: 'Buy minutes',

    psych_profile_call_error_title: 'Error',
    psych_profile_call_error_invalid_params: 'The server did not return valid call parameters.',
    psych_profile_call_error_start_failed: 'Could not start the call.',
    psych_profile_call_error_server: 'A server error occurred.',

    psych_profile_error_title: 'Error',
    psych_profile_error_call_failed: 'Could not start the call.',

    psych_register_title_edit: 'Fix and resubmit application',
    psych_register_title_register: 'Psychic Registration',

    psych_register_revision_title: 'Requested corrections',
    psych_register_revision_note_prefix: 'Note: ',
    psych_register_revision_hint: 'Fix what’s indicated and press “Resubmit application”.',

    psych_register_label_full_name: 'Full name *',
    psych_register_ph_full_name: 'e.g., Laura Pérez',

    psych_register_label_psychic_name: 'Psychic name (public identity) *',
    psych_register_ph_psychic_name: 'e.g., Luna',
    psych_register_help_psychic_name_unique: 'This name will be visible to clients. It must be unique.',

    psych_register_label_paypal_email: 'PayPal email (required) *',
    psych_register_ph_paypal_email: 'e.g., youremail@paypal.com',
    psych_register_help_paypal_email: 'This email will be used for payments to the psychic.',

    psych_register_label_public_bio: 'Public biography (bio) *',
    psych_register_ph_public_bio: 'Write your biography (clients will see this)',
    psych_register_help_public_bio: 'This biography will be shown to clients on your profile.',

    psych_register_label_email: 'Email',
    psych_register_ph_email: 'example@email.com',

    psych_register_label_phone: 'Phone / WhatsApp',
    psych_register_ph_phone: '+1 555 000 0000',
    psych_register_help_phone_international: 'If using a phone number, enter it in international format (e.g. +1 555 000 0000).',

    psych_register_label_password: 'Password *',
    psych_register_ph_password: 'Minimum 6 characters',
    psych_register_accessibility_show_password: 'Show password',
    psych_register_accessibility_hide_password: 'Hide password',

    psych_register_help_edit_credentials:
      'Email/phone and password are managed in login/support. Here you only fix your application.',

    psych_register_label_location: 'Country / City *',
    psych_register_ph_location: 'e.g., USA, New York',

    psych_register_label_languages: 'Languages you serve in *',
    psych_register_ph_languages: 'e.g., Spanish, English',

    psych_register_section_additional_required: 'Additional information (required)',

    psych_register_label_tagline: 'Write a tagline that identifies you *',
    psych_register_ph_tagline: 'e.g., Believing is creating',

    psych_register_label_areas: 'Areas you cover (you can select multiple) *',
    psych_register_label_areas_other: 'Specify “Other” (Areas) *',
    psych_register_ph_areas_other: 'Write your additional area(s)',

    psych_register_label_applicant_photo: 'Applicant photo (required) *',
    psych_register_permission_box_title: 'Permission to select photos',
    psych_register_permission_box_body: 'Luz Psíquica accesses your photos only when you choose to upload an image. This access is not used in the background.',
    psych_register_permission_hint_denied: 'If you denied the permission, you can enable it in your device settings.',
    psych_register_permission_request: 'Allow access to photos',
    psych_register_permission_granted: 'Permission granted',
    psych_register_permission_container_first_body: 'Before selecting the photo, allow access to your photos using the button in this section.',
    psych_register_open_settings: 'Open settings',
    psych_register_permissions_error_body: 'The permission could not be requested. Please try again.',
    psych_register_cancel: 'Cancel',
    psych_register_photo_change: 'Change photo',
    psych_register_photo_select: 'Select photo',

    psych_register_label_tools: 'Tools you use (you can select multiple) *',
    psych_register_label_tools_other: 'Specify “Other” (Tools) *',
    psych_register_ph_tools_other: 'Write your additional tool(s)',

    psych_register_label_experience: 'Write an additional description of your experience *',
    psych_register_ph_experience: 'e.g., methods, reliability, etc.',

    psych_register_label_worked_phone_chat: 'Have you previously worked as a psychic by phone or chat? *',

    psych_register_label_start_year: 'What year did you start working professionally as a psychic? *',
    psych_register_year_select: 'Select a year',
    psych_register_year_modal_title: 'Select the year',
    psych_register_year_modal_close: 'Close',

    psych_register_label_hours_per_week: 'How many hours per week would you be willing to work in the app? *',
    psych_register_ph_hours_per_week: 'e.g., 10, 12, 40, full time',

    psych_register_label_can_do_phone_chat: 'Confirm whether you can provide consultations by phone and chat *',

    psych_register_label_private_experience:
      '(Internal only) Tell us about your private experience or other services *',
    psych_register_ph_private_experience: 'e.g., experience with private clients...',

    psych_register_label_photo_marketing_consent: 'Consent to use photo (marketing/social media) *',

    psych_register_label_declaration: 'Required declaration *',
    psych_register_declaration_accept: 'I accept the declaration *',

    psych_register_label_about: 'Additional message / About you *',
    psych_register_ph_about: 'What would you like the team to know about you?',

    psych_register_terms_title: 'Rules and Privacy',
    psych_register_terms_body: 'I have read and accept ',
    psych_register_terms_link: 'Rules and Privacy',

    psych_register_submit_edit: 'Resubmit application',
    psych_register_submit_register: 'Submit application',

    psych_register_back: 'Back',

    psych_register_yes: 'Yes',
    psych_register_no: 'No',

    psych_register_validation_title: 'Validation',
    psych_register_error_title: 'Error',
    psych_register_config_error_title: 'Configuration error',
    psych_register_config_error_body: 'EXPO_PUBLIC_API_URL is not defined. Check your .env file.',

    psych_register_permissions_required_title: 'Permission required',
    psych_register_permissions_required_body: 'We need access to your gallery to select a photo.',

    psych_register_invalid_photo_title: 'Invalid photo',
    psych_register_invalid_photo_body:
      'Could not read the image as base64. Try another photo or restart the app.',

    psych_register_photo_pick_error_title: 'Error',
    psych_register_photo_pick_error_body: 'Could not select the photo.',

    psych_register_terms_alert_title: 'Rules and Privacy',
    psych_register_terms_alert_body: 'You must accept the Rules and Privacy to continue.',

    psych_register_session_expired_body: 'Session expired. Please sign in again.',

    psych_register_success_title: 'Application submitted',
    psych_register_success_resubmit_default: 'Application resubmitted successfully.',
    psych_register_success_register_default:
      'Your application was submitted. The Luz Psíquica team will review your profile and contact you for an interview.',

    psych_reviews_config_error_title: 'Configuration error',
    psych_reviews_config_error_body: 'EXPO_PUBLIC_API_URL is not defined in your .env.',

    psych_reviews_session_expired_title: 'Session expired',
    psych_reviews_session_expired_body: 'Please sign in again.',

    psych_reviews_error_title: 'Error',
    psych_reviews_load_error_body: 'Could not load the ratings history.',

    psych_reviews_title: 'Ratings and comments',

    psych_reviews_summary_title: 'Summary',
    psych_reviews_based_on: 'Based on {count} ratings',
    psych_reviews_refresh: 'Refresh',

    psych_reviews_loading: 'Loading…',

    psych_reviews_comments_title: 'Comments',
    psych_reviews_no_comments: 'You don’t have any visible comments yet.',

    psych_reviews_load_more: 'Load more',
    psych_reviews_limit_reached: 'Maximum limit reached',

    psych_reviews_hint_rule:
      '* Visible comments depend on the anti-spam rule (one comment per client per psychic).',

    psych_reviews_back_arrow: '←',
    psych_reviews_refresh_busy: '...',
    psych_reviews_dash_placeholder: '—',

    realcall_mic_permission_title: 'Microphone permission',
    realcall_mic_permission_message: 'Luz Psíquica needs access to the microphone for voice calls.',
    realcall_mic_permission_accept: 'Allow',
    realcall_mic_permission_cancel: 'Cancel',

    realcall_call_ended_title: 'Call ended',
    realcall_call_ended_no_minutes: 'The call ended because you ran out of minutes.',

    realcall_call_ended_rejected_body: 'The psychic rejected the call. Try another psychic or try again later.',
    realcall_ok: 'OK',

    realcall_rating_title: 'Rating',
    realcall_rating_pick_stars: 'Select a rating (1 to 5).',

    realcall_error_title: 'Error',
    realcall_rating_save_error: 'Could not save the rating',

    realcall_back: '← Back',
    realcall_call_title: 'Audio call',
    realcall_room_label: 'Room:',

    realcall_psychic_role_brand: 'Psychic · Luz Psíquica',

    realcall_audio_error_prefix: 'Audio error:',
    realcall_audio_connecting: 'Connecting audio…',
    realcall_audio_waiting_psychic: 'Audio connected. Waiting for the psychic…',
    realcall_audio_connected_psychic: 'Audio connected with the psychic.',

    realcall_time_label: 'Time:',
    realcall_remaining_minutes_label: 'Minutes remaining:',
    realcall_billing_starts_note: '* Billing starts when the psychic answers.',

    realcall_hangup: 'Hang up',

    realcall_rate_title: 'Rate your session',
    realcall_rate_subtitle: 'How was your experience with {name}?',

    realcall_review_label: 'Comment (optional)',
    realcall_review_placeholder: 'Write a short comment…',
    realcall_skip: 'Skip',
    realcall_send: 'Send',
    realcall_sending: 'Sending…',

    register_header_title: 'Register',

    register_title_create_account: 'Create Account',

    register_subtitle_client: 'Sign up as a client to continue',

    register_required_fields_title: 'Required fields',
    register_required_fields_body: 'Please fill out all fields.',

    register_link_psychic_apply: 'Are you a psychic? Apply to work with us',

    register_legal_title: 'Terms & Privacy',
    register_legal_body_client: 'You must accept the Terms, Privacy, and Refunds to register.',

    register_success_title: 'Account created',
    register_success_body: 'Your account was created successfully. Please log in.',

    register_error_title: 'Sign up',
    register_failed_msg: 'We could not complete your registration. Please try again.',
    common_ok: 'OK',

    register_placeholder_full_name: 'Full name',
    register_placeholder_email_or_phone: 'Email or phone',
    register_phone_helper: 'You can use email or phone. If using a phone number, enter it in international format (e.g. +1 555 000 0000).',
    register_placeholder_password: 'Password',

    register_accessibility_show_password: 'Show password',
    register_accessibility_hide_password: 'Hide password',

    register_label_account_type: 'Account type',
    register_role_client: 'Client',
    register_role_psychic: 'Psychic',

    register_terms_prefix: 'I have read and accept',
    register_terms_link: 'Terms & Privacy',

    register_btn_create_account: 'Create account',
    register_link_have_account_login: 'Already have an account? Log in',

    common: {
      back: "Back",
      ok: "OK",
      psychic: "Psychic",
      dash: "—"
    },
    legal_header_title: 'Rules and Privacy',
    legal: {
      title: "Rules and Privacy",
      meta: "Version: {{version}} · Legal owner: {{owner}} · Jurisdiction: {{country}}",
      jurisdictionCountry: "Colombia",
      mailSubject: "Legal support - Luz Psíquica",
      openFailTitle: "Unable to open",
      openFailGeneric: "The link could not be opened.",
      emailFailMessage: "We couldn't open your email app. Please make sure an email app is configured on your phone.",
      whatsappFailMessage: "We couldn't open WhatsApp. Please make sure WhatsApp is installed or try again.",
      emailLabel: "Email: {{email}}",
      whatsappLabel: "WhatsApp: +1 (813) 618-7770",

      s1Title: "1. Acceptance of terms",
      s1Body: "By registering for and using the application, and by expressly selecting the corresponding acceptance checkbox, the user declares that they have read, understood, and fully and voluntarily accepted the rules, policies, conditions, and operational use provisions of the platform described herein.\n\nAcceptance of these terms constitutes a mandatory and binding requirement for access to, registration on, and use of the application. If the user does not agree with any of the provisions set forth herein, they must refrain from registering or using the platform.\n\nThe legal documents, including Norms and Privacy and the Operational Functioning Document of the Platform, may be consulted at any time from this legal section.\n",

      s2Title: "2. Nature of the service",
      s2Body: "Luz Psíquica is an application for entertainment and personal guidance, whose content and services are exclusively informative and recreational in nature.\n\nThe platform does not offer, nor does it intend to offer, medical, psychological, psychiatric, legal, financial, therapeutic, or any other type of regulated professional advice. The information, opinions, or interactions generated within the application do not, under any circumstances, replace consultation with duly licensed professionals in the corresponding fields.\n\nThe user acknowledges and accepts that the use of the platform is carried out under their sole responsibility, and that any decision made based on the content or interactions within Luz Psíquica is assumed entirely by the user, in accordance with the guidelines and conditions established by the platform.\n",

      s3Title: "3. Charging and payment by minutes",
      s3Body: "The services offered within Luz Psíquica are charged to the user and settled with the psychic exclusively on the basis of the minutes effectively consumed for communication, whether through spoken conversation or exchange of text messages, carried out within the application.\n\nNo payments shall be recognized for waiting time, availability, active connection without effective consumption, obtained results, promises, expectations, or for any concept other than the real, measurable, and verifiable use of the service within the platform.\n\nAll financial transactions carried out within the application are managed through the PayPal payment platform, in accordance with its own terms, conditions, and usage policies. Luz Psíquica does not store, process, or directly manage sensitive financial information of users or psychics.\n\nFor this reason, and as it is not legally authorized to do so, the platform does not request nor is it obliged to request, store, or verify bank account numbers, credit card numbers, debit card numbers, or other personal financial data. The use of payment methods is governed exclusively by the conditions established by PayPal.\n\nThe relationship between Luz Psíquica and the psychics is strictly independent in nature. Consequently, there is no employment relationship, no subordination, and no obligation to pay bonuses, employment benefits, social benefits, indemnities, or any compensation of a similar nature.\n\nThe platform does not grant loans, advances, prepayments, or income guarantees, and does not issue employment certificates, income statements, letters for financial procedures, subsidies, guarantees, or documents of a similar nature.\n\nThe minutes consumed are calculated through the technical measurement systems of the platform. In the event of technical adjustments, connection failures, service interruptions, or discrepancies in time measurement, the internal records of Luz Psíquica shall prevail as the valid reference. Any claim related to minute measurement must be submitted through the channels and procedures established by the platform, without implying automatic recognition of refunds, compensations, or additional payments.\n",

      s4Title: "4. Prohibition on sharing personal information",
      s4Body: "In order to protect the security, privacy, and proper functioning of the platform, the exchange of personal or sensitive information between clients and psychics, whether inside or outside the application, is strictly prohibited.\n\nPersonal information is understood, by way of example and not limitation, as any data that allows the identification, contact, or location of a person, including telephone numbers, physical addresses, email addresses, social media profiles, identity documents, banking data, account numbers, payment links, external contact methods, or other data of a similar nature.\n\nLikewise, it is expressly prohibited to move conversations, agreements, payments, or any type of interaction outside the application, as well as to attempt to circumvent the communication and payment systems enabled by Luz Psíquica.\n\nThis prohibition applies equally and mandatorily to both clients and psychics, and its violation may give rise to the corrective measures provided for in the platform’s rules and conditions.\n",

      s5Title: "5. Terms and conditions",
      s5Body: "The use of Luz Psíquica is subject to compliance with rules of coexistence, mutual respect, and observance of the internal provisions established by the platform, which are intended to ensure a safe, functional, and appropriate environment for all users.\n\nLuz Psíquica reserves the right to temporarily suspend or permanently terminate user or psychic accounts when operational, technical, or security reasons so require, including, by way of example and not limitation, situations involving fraud, abuse, harassment, inappropriate behavior, improper use of the platform, attempts to circumvent internal controls, or non-compliance with the rules, policies, and conditions set forth herein.\n\nThe measures adopted shall be preventive or corrective in nature, as applicable, and shall be applied for the purpose of protecting the integrity of the platform, its users, and the proper functioning of the services, without giving rise to any right to compensation, indemnification, or claim against Luz Psíquica.\n",

      s6Title: "6. Privacy and data processing",
      s6Body: "Luz Psíquica processes only the minimum and strictly necessary personal data required for the operational functioning of the platform, including, by way of example and not limitation, account identification, session history, purchases made, minute consumption, and the management of support requests.\n\nUnder no circumstances are users permitted to exchange personal data with one another or to access personal information of other users or psychics, except through the mechanisms strictly necessary for the provision of the service within the application.\n\nThe data processed by the platform is used exclusively for operational purposes, technical support, security, fraud prevention, service improvement, and compliance with applicable legal or regulatory obligations. Luz Psíquica does not commercialize, sell, or transfer personal data to third parties for purposes unrelated to the operation of the platform.\n\nData processing is carried out in accordance with the principles of lawfulness, purpose limitation, proportionality, and security, adopting reasonable technical and organizational measures to protect information against unauthorized access, misuse, or loss.\n\nUsers requesting to be formally engaged as psychics on the platform may be required to provide additional identification information, including a copy of a valid official identity document, for the exclusive purpose of verifying the applicant’s true identity, legal age, authenticity of the provided data, and compliance with applicable contractual and legal obligations.\n\nSuch information shall be processed in accordance with the principles of legality, purpose limitation, consent, proportionality, security, and confidentiality established under applicable data protection regulations, including Colombian Law 1581 of 2012. The data will be used solely for contractual validation, fraud prevention, and regulatory compliance purposes.\n\nUnder no circumstances shall this information be sold, transferred, or used for purposes other than those expressly stated herein, and it shall be retained only for the time strictly necessary to fulfill its intended purpose.\n",

      s7Title: "7. Limitation of liability",
      s7Body: "Luz Psíquica provides its services in the manner and under the conditions described on the platform, without granting any express or implied warranties regarding results, accuracy, personal expectations, or consequences derived from the use of the application.\n\nThe platform shall not be liable for decisions, actions, omissions, interpretations, or outcomes derived directly or indirectly from the use of the content, services, or interactions carried out within the application, which are assumed under the sole responsibility of the user.\n\nLuz Psíquica shall also not be liable for service interruptions, technical errors, connectivity failures, temporary unavailability of the platform, loss of information, minute measurement adjustments, or for any direct or indirect damages arising from technical, operational, or force majeure causes.\n\nIn no event shall Luz Psíquica’s liability exceed the amount effectively paid by the user within the application for the services subject to the claim, nor shall it give rise to compensation for non-material damages, loss of profits, loss of opportunities, unmet expectations, or other indirect damages.\n",

      s8Title: "8. Nature of the Service and Non-Refundable Policy",
      s8Body: "On the platform, the use of chat and/or call services is billed under the “started minute, charged minute” model. Accordingly, any fraction of a minute that has been initiated shall be considered a full minute for billing and accounting purposes.\n\nThis policy applies both to the consumption of minutes by the client and to the calculation of the time effectively attended by the psychic, in order to ensure fair compensation for the time dedicated, as well as a clear, objective, and transparent measurement of the service provided.\n\nThe duration of each interaction is automatically recorded by the system, and the user expressly acknowledges and accepts this billing model from the moment they use the platform.\n\nMinutes purchased within the Luz Psíquica platform constitute digital credits for exclusive use within the service ecosystem and do not represent cash, deposits, withdrawable balances, financial instruments, or transferable securities.\n\nAccordingly, all purchases of minutes made within the application are final, definitive, and non-refundable, including cases where the user chooses not to use all or part of the purchased minutes.\n\nNon-use of the service by the user, whether total or partial, does not generate any right to refund, compensation, indemnification, or any form of monetary recognition.\n\nMinutes may not be converted into money, transferred to third parties, withdrawn from the platform, or claimed as a balance outside the Luz Psíquica environment.\n\nThe user expressly acknowledges that, by making a purchase within the platform, they are acquiring a digital service for immediate or on-demand consumption, and waives, to the extent permitted by applicable law, any right of withdrawal, cancellation, or subsequent refund.\n\nExceptionally, the platform may evaluate requests only in cases of verifiable technical failures directly attributable to Luz Psíquica that have effectively prevented the provision of the service.\n\nIn such cases, any measure shall be strictly limited to correcting the error or proportionally restoring the service within the platform, without implying any monetary refund.\n\nThe platform reserves the right to reject any request where there are indications of fraud, abuse, misuse of the system, attempts to bypass controls, technical manipulation, or breach of the established rules.\n\nDecisions made by Luz Psíquica in relation to these provisions shall be final within the operational scope of the platform and shall not give rise to additional compensation, interest, indemnification, or claims beyond the technical adjustments that may be determined, if applicable.\n",

      s9Title: "9. Serious violations",
      s9Body: "Serious violations are understood, by way of example and not limitation, as behaviors that seriously undermine safety, respect, legality, or coexistence within the platform, including insults, threats, harassment, dissemination of pornography, explicit sexual content, offensive or discriminatory conduct, or actions contrary to morality, public order, and mutual respect.\n\nThe commission of serious violations may result in the immediate and permanent termination of the user’s or psychic’s account, without prior notice, when justified by the seriousness of the facts, repeated conduct, or risks posed to other users or to the integrity of the platform.\n\nIn cases of particular severity, and where sufficient and verifiable internal evidence of non-compliance with the rules exists, Luz Psíquica may proceed with the definitive closure of the account without recognition of payments, accumulated balances, pending benefits, or compensation of any kind, without prejudice to any legal actions that may be applicable.\n",

      s10Title: "10. Voluntary Withdrawal of the User",
      s10Body: "The user may request voluntary withdrawal from the platform at any time through the mechanisms and tools made available within the application.\n\nOnce the request has been submitted and expressly confirmed by the user, the account will be immediately deleted, thereby terminating the relationship between the user and the platform, without prejudice to the fulfillment of previously acquired obligations.\n\nVoluntary withdrawal does not, under any circumstances, give rise to any right to refund, compensation, indemnification, or reimbursement of amounts paid for acquired services, including unused minutes at the time of account deletion.\n\nAny remaining minutes at the time of withdrawal cannot be converted into money, transferred, or claimed as a balance outside the platform.\n\nThe user expressly acknowledges and agrees that the services acquired are non-refundable in nature, and that this condition has been clearly communicated prior to the use of the platform.\n\nThe withdrawal request and its processing shall be carried out in accordance with the internal procedures of Luz Psíquica, without implying any obligation of financial compensation on the part of the platform.\n",

      s11Title: "11. Use of built-in device technologies",
      s11Body:  "The Luz Psíquica application may request access to certain built-in technologies of the user’s device, such as the camera and the microphone, solely when the user voluntarily decides to use them within the functionalities available in the application.\n\nAccess to the camera is requested exclusively when the user chooses to upload an image, for example, a profile photograph. Access to the microphone is used only during voice communication interactions within the platform. Under no circumstances does the application use video recording functions.\n\nThe application does not use the camera or the microphone in the background, nor does it access these technologies without the user’s direct interaction and explicit consent. Likewise, Luz Psíquica does not capture images, audio, or any other content without the user’s express authorization.\n\nImages and audio provided by the user are used exclusively for functional and operational purposes within the application and are not shared with third parties without the user’s express authorization, except where strictly necessary for the provision of the service in accordance with the platform’s conditions.\n\nThe user may revoke the permissions granted to the camera and microphone at any time through the operating system settings of their device, which may limit or prevent the use of certain functionalities of the application.\n",

      s12Title: "12. Contact",
      s12Intro: "For any questions, complaints, claims, or inquiries related to the operation of the application, the user may contact Luz Psíquica through the contact channels enabled within the platform.\n\nCommunications received will be addressed in accordance with the application’s internal procedures and within reasonable timeframes, depending on the nature of the request.\n"
    },

    operational_header_title: 'Operational Document',
    operational: {
      title: "Operational Document",
      meta: "Version: {{version}} · Date: {{date}} · Platform: {{platform}}",

      s1Heading: "1. Purpose of this document",
      s1Body: "This Operational Functioning Document aims to clearly, transparently, and technically describe the general operation of the Luz Psíquica platform, and to establish the operational, technical, and functional rules under which the service is provided to clients and psychics. This document is an integral part of the platform’s legal framework and is mandatory for all users who use the application.",

      s2Heading: "2. General description of the platform",
      s2Body: "Luz Psíquica is a digital platform that enables communication between clients and psychics through chat and voice call services, using a prepaid minutes system purchased by clients. Additionally, the platform may offer audiovisual content related to its activity for informational, promotional, commercial, or brand-positioning purposes. The platform acts as a technological intermediary, providing the technical infrastructure, payment systems, session control, minutes management, and the corresponding economic settlement to psychics.",

      s3Heading: "3. Roles within the platform",
      s31Heading: "3.1 Client",
      s31Body: "User who purchases minutes and accesses consultation services via chat or call.",
      s32Heading: "3.2 Psychic",
      s32Body: "Authorized user who provides consultation services to clients and receives financial\ncompensation according to the time effectively consumed.",
      s33Heading: "3.3 Administrator",
      s33Body: "User in charge of supervision, validation, maintenance, and the overall operation of the\nplatform.",

      s4Heading: "4. Operational service flow",
      s41Heading: "4.1 Registration and access",
      s41Body: "• Users must register with valid information.\n• Clients can create an account and purchase minutes.\n• Psychics must be authorized by the platform before providing the service.",
      s42Heading: "4.2 Purchase of minutes",
      s42Body: "• Minutes are purchased through a payment gateway.\n• Minutes are prepaid and consumed in sessions.\n• The platform defines prices, packages, discounts, and operational rules.",
      s43Heading: "4.3 Login and availability",
      s43Body: "• The client selects an available psychic.\n• The session starts only if the client has enough purchased minutes.\n• The platform manages time and consumption control.",

      s5Heading: "5. Sessions, minute consumption, and anti-fraud control",
      s51Heading: "5.1 Session control",
      s51Body: "• Consumption is counted per minute in chat or call.\n• The system closes sessions due to inactivity or completion.\n• Controls are applied to prevent abnormal usage or fraud.",
      s52Heading: "5.2 Prohibition of exchanging personal data",
      s52Body: "• Exchanging personal or contact information is prohibited.\n• Taking the commercial relationship outside the platform is prohibited.\n• Violations may result in suspension or closure.",

      s6Heading: "6. Validation and operation of the psychic role",
      s61Heading: "6.1 Psychic conditions",
      s61Body: "• The psychic must be approved by the platform.\n• Must operate under internal rules.\n• May be suspended due to breaches, complaints, or fraud.",

      s7Heading: "7. Payments to psychics and financial settlement",
      s71Heading: "7.1 Financial settlement",
      s71Body: "• The platform settles based on minutes effectively consumed.\n• Compensation is determined according to the platform’s internal rules and the internal record of completed transactions.\n• Payments are grouped and executed in defined cycles.",

      s8Heading: "8. Sound, music, and audiovisual assets of the platform",
      s81Heading: "8.1 Nature of the assets",
      s81Body: "The platform uses digital assets that include, among others:\n• incoming call ringtones\n• notification sounds and system alerts\n• music embedded in audiovisual content\n• promotional, informational, or commercial videos\nThese assets are an integral part of Luz Psíquica’s functional, communicative, and brand experience.",
      s82Heading: "8.2 Origin of the assets",
      s82Body: "The sound, music, and audiovisual assets used by the platform:\n• have been created specifically for Luz Psíquica\n• are developed through proprietary creative processes, which may include the use of generative AI tools, always under the platform’s direction, control, and curation\n• are not commercial music works nor third-party audiovisual content intended for independent exploitation",
      s83Heading: "8.3 Audiovisual content and external distribution",
      s83Body: "Audiovisual content produced by Luz Psíquica:\n• may be marketed, distributed, or shared within and outside the application\n• may be published on digital platforms and social networks\n• may include music, images, animations, texts, and voices generated or assisted by AI\nDistributing such content does not imply any transfer of rights to users, psychics, or third parties.",
      s84Heading: "8.4 Intellectual property",
      s84Body: "• All sound, music, and audiovisual assets are the exclusive property of Luz Psíquica, or are used under the necessary licenses.\n• They are not customizable by users.\n• They may not be extracted, reused, distributed, resold, or exploited outside the platform without express written authorization.",
      s85Heading: "8.5 Purpose of use",
      s85Body: "The assets described:\n• serve a technical, operational, communicative, and commercial function\n• are not independent artistic works for individual exploitation\n• do not generate economic, authorship, or participation rights for users or psychics",

      s9Heading: "9. Technical and operational limitations",
      s9Body: "• The platform depends on internet connectivity.\n• Technical failures, network interruptions, or maintenance may temporarily affect the service.\n• Luz Psíquica does not guarantee continuous and uninterrupted availability.",

      s10Heading: "10. Service modifications",
      s10Body: "Luz Psíquica reserves the right to:\n• modify functionalities\n• adjust operational rules\n• update payment, communication, or content systems\nThese modifications may be made to improve the user experience or for technical, legal, or operational reasons.",

      s11Heading: "11. Acceptance of this document",
      s11Body: "Using the platform implies express acceptance of this Operational Functioning Document,\nas well as the other associated legal documents.",

      s12Heading: "12. Additional information",
      s12Body: "Person responsible for the technological development of the platform:\nAndrés Loaiza\nThe design, technical development, functional architecture, and technological operation of the Luz Psíquica platform have been carried out under the direction of the responsible person mentioned, in coordination with the platform’s objectives, ethical principles, and operational guidelines.\nFinal note\nThis document is published as part of Luz Psíquica’s commitment to transparency, technological ethics, responsible creativity, and operational clarity."
    }
  },

  fr: {
    nav_home: 'Accueil',
    nav_legal: 'Mentions',
    nav_lang: 'Langue',
    lang_title: 'Choisir la langue',
    legal_title: 'Légalité de l’app',
    legal_body: 'Ici nous intégrerons Conditions, Confidentialité et mentions légales avant la production finale.',
    close: 'Fermer',

    login_header_title: 'Se connecter',
    login_title: 'Luz Psíquica',
    login_subtitle: 'Accédez à votre compte pour continuer',
    login_email_or_phone: 'Email ou téléphone',
    login_phone_helper: 'Si vous utilisez un téléphone, saisissez-le au format international (ex. +33 6 00 00 00 00).',
    login_password: 'Mot de passe',
    login_enter: 'Se connecter',
    login_forgot: 'Mot de passe oublié ?',
    login_client_register: 'Client ? Créer un compte',
    login_psychic_apply: 'Voyant ? Postuler pour travailler avec nous',
    login_error_title: 'Erreur de connexion',
    login_missing_credentials: 'Veuillez entrer votre numéro et votre mot de passe.',

    agora_title: 'Appel (placeholder)',
    agora_psychic: 'Médium',
    agora_room: 'Salle',
    agora_call_id: 'CallId',
    agora_initial_minutes: 'Minutes initiales',
    agora_socket: 'Socket',
    agora_status: 'Statut',
    agora_back: 'Retour',
    agora_note:
      '* Si le client raccroche ou si le médium refuse, cet écran doit se fermer automatiquement (socket + polling).',

    call_end_title: 'Appel terminé',
    call_end_ok: 'OK',
    call_end_default: "L'appel est terminé.",
    call_end_missed: "L'appel a été refusé/manqué.",
    call_end_cancelled: "L'appel a été annulé (sans facturation).",
    call_end_caller_hungup: 'Le client a raccroché.',

    cfg_error_title: 'Erreur de configuration',
    cfg_error_body: "EXPO_PUBLIC_API_URL n'est pas configuré.",
    error_title: 'Erreur',
    error_no_callid: 'callId non reçu.',
    session_expired_title: 'Session expirée',
    session_expired_body: "Utilisateur authentifié introuvable.",
    psychic_fallback_name: 'Médium',
    dash_placeholder: '—',

    buy_minutes_header_title: 'Acheter des minutes',

    buy_minutes_title: 'Acheter des minutes',
    buy_minutes_subtitle:
      'Achetez des forfaits de minutes (PayPal). La consommation est déduite des appels et du chat.',
    buy_minutes_current_balance: 'Vos minutes actuelles',
    buy_minutes_pending_title: 'Paiement en attente',
    buy_minutes_order: 'Commande',
    buy_minutes_total: 'Total',
    buy_minutes_confirming: 'Confirmation du paiement...',
    buy_minutes_return_hint: 'Revenez dans l’app après validation sur PayPal.',
    buy_minutes_paid_fallback: 'J’ai déjà payé (secours)',
    buy_minutes_cancel: 'Annuler',
    buy_minutes_pkg_minutes: 'minutes',
    buy_minutes_tap_to_pay: 'Touchez pour lancer le paiement PayPal',

    session_expired: 'Votre session a expiré. Veuillez vous reconnecter.',
    paypal_approve_url_missing: "PayPal n'a pas renvoyé l'URL d'approbation.",

    payment_success_balance:
      'Paiement réussi. {{added}} minutes ont été ajoutées. Nouveau solde : {{balance}}.',
    payment_confirmed_balance:
      'Paiement confirmé. Solde mis à jour : {{balance}}.',

    discount_label: 'Remise : {{pct}}%',

    paypal_continue_title: 'Continuer sur PayPal',
    paypal_continue_body:
      'Validez le paiement sur PayPal.\n\nEn revenant dans l’app, la confirmation se fera automatiquement.',

    purchase_success_title: 'Achat réussi',
    purchase_success_body:
      'Paiement confirmé.\n{{added}} minutes ajoutées.',

    payment_cancelled_title: 'Paiement annulé',
    payment_cancelled_body: 'Vous avez annulé le paiement sur PayPal.',

    err_title: 'Erreur',
    err_load_minutes: 'Impossible de charger le solde de minutes.',
    err_no_config: "EXPO_PUBLIC_API_URL n'est pas configuré",
    err_not_auth: 'Utilisateur non authentifié',
    err_create_order: 'Impossible de créer la commande PayPal.',
    err_open_paypal: "Impossible d’ouvrir PayPal sur cet appareil.",
    err_capture_payment: 'Impossible de capturer le paiement.',
    err_auto_finish_title: 'Finalisation automatique impossible',
    err_auto_finish_body:
      'Le paiement n’est pas encore confirmé. Si vous venez de valider, réessayez dans quelques secondes.',
    err_read_paypal_token: 'Impossible de lire le token PayPal pour finaliser l’achat.',

    pending_still_not_confirmed_title: 'Paiement pas encore confirmé',
    pending_still_not_confirmed_body:
      'Capture impossible pour le moment. Vérifiez que vous avez validé sur PayPal et réessayez.',
    retry: 'Réessayer',
    dash_placeholder2: '--',
    minutes_suffix: 'min',

    callhist_header_title: 'Historique des appels',

    callhist_title_default: 'Historique des appels',
    callhist_title_with_name: 'Historique des appels',

    callhist_loading: 'Chargement de l’historique…',
    callhist_back_dashboard: 'Retour au tableau de bord',
    callhist_refresh: 'Actualiser l’historique',
    callhist_empty: 'Vous n’avez pas encore de sessions enregistrées.',
    callhist_not_enough_data: 'Pas encore assez de données.',

    callhist_summary_minutes_title: 'Résumé des minutes',
    callhist_summary_earnings_title: 'Résumé des gains',

    callhist_minutes_available: 'Minutes disponibles',
    callhist_minutes_spent_calls: 'Minutes dépensées (📞)',
    callhist_minutes_spent_chats: 'Minutes dépensées (💬)',
    callhist_minutes_spent_total: 'Total dépensé',

    callhist_minutes_earned_calls: 'Minutes gagnées (📞)',
    callhist_minutes_earned_chats: 'Minutes gagnées (💬)',
    callhist_minutes_earned_total: 'Total minutes gagnées',
    callhist_earnings_total: 'Gains cumulés',

    callhist_summary_by_client: 'Résumé par client',
    callhist_summary_by_psychic: 'Résumé par médium',

    callhist_status_finished: 'Terminée',
    callhist_status_missed: 'Refusée/Manquée',
    callhist_status_ongoing: 'En cours',
    callhist_status_cancelled: 'Annulée',
    callhist_placeholder: '—',

    callhist_type_chat: '💬 Chat',
    callhist_type_voice: '📞 Appel',

    callhist_start: 'Début',
    callhist_end: 'Fin',

    callhist_duration: '⏱ {{secs}}s',
    callhist_minutes_charged: '⌛ {{mins}} min facturées',
    callhist_no_charge: ' · Sans frais',
    callhist_earning_line: ' · 💰 ${{usd}} USD',

    callhist_rate_your_rating: 'Votre note : {{rating}}/5',
    callhist_rate_prompt: 'Noter cet appel :',
    callhist_rate_saving: 'Enregistrement…',

    callhist_rate_confirm_title: 'Confirmer la note',
    callhist_rate_confirm_body: 'Voulez-vous noter {{stars}} étoiles ?',
    callhist_cancel: 'Annuler',
    callhist_yes: 'Oui',

    callhist_thanks: 'Merci',
    callhist_rate_saved: 'Votre note a été enregistrée.',

    callhist_err_config_title: 'Erreur de configuration',
    callhist_err_config_body: "EXPO_PUBLIC_API_URL n'est pas configuré.",
    callhist_err_session_title: 'Session expirée',
    callhist_err_session_body_token: 'Token introuvable. Veuillez vous reconnecter.',
    callhist_err_session_body_login: 'Veuillez vous reconnecter.',
    callhist_err_title: 'Erreur',
    callhist_err_load: "Impossible de charger l’historique.",
    callhist_err_rate_save: "Impossible d’enregistrer la note.",

    callhist_psychic_fallback: 'Médium',

    chat_header_title: 'Chat avec {{name}}',

    chat_loading_session: 'Chargement de la session…',
    chat_not_available_title: 'Chat indisponible',
    chat_not_available_body: 'Données manquantes pour ouvrir le chat : {{missing}}.',
    chat_not_available_hint: '(Vérifie la navigation avec otherUserId et que EXPO_PUBLIC_API_URL existe)',

    chat_block_unavailable: '⛔ Le médium n’est pas disponible. Tu peux voir le chat, mais pas envoyer de messages.',
    chat_block_no_minutes: '⛔ Tu n’as plus de minutes. Tu peux voir l’historique, mais tu dois acheter des minutes pour chatter.',

    chat_inactivity_warning_prefix: '⚠️ Inactivité détectée. Le chat sera mis en pause dans {{sec}}s.',
    chat_timeout_bar: '⏸️ Chat en pause pour inactivité. {{msg}}',
    chat_timeout_client_hint: 'Écris ou touche “Reprendre”.',
    chat_timeout_other_hint: 'Attends le client.',
    chat_resume: 'Reprendre',

    chat_loading_conversation: 'Chargement de la conversation…',
    chat_block_offline_psychic: 'Voyant hors ligne. Réessayez plus tard.',
    chat_policy_personal_info: '⚠️ Tu ne peux pas envoyer de données personnelles (téléphone, email ou adresse). Reformule.',
    chat_block_unavailable_short: '⛔ Le médium n’est pas disponible pour le moment. Tu ne peux pas envoyer de messages.',
    chat_block_no_minutes_short: '⛔ Tu n’as pas de minutes pour chatter. Achète des minutes pour continuer.',
    chat_block_wait_client_start: '⏳ En attente que le client démarre le chat (premier message du client).',
    chat_block_client_inactive: '⏸️ Chat en pause pour inactivité du client. Attends que le client reprenne.',
    chat_block_session_closed: '⛔ La session est fermée. Tu dois en démarrer une nouvelle.',
    chat_network_error_send: 'Erreur réseau lors de l’envoi du message.',

    chat_placeholder_unavailable: 'Médium indisponible…',
    chat_placeholder_no_minutes: 'Plus de minutes…',
    chat_placeholder_paused: 'Chat en pause…',
    chat_placeholder_timeout: 'Chat en pause pour inactivité…',
    chat_placeholder_write: 'Écris ton message…',
    chat_placeholder_offline_psychic: 'Vous ne pouvez pas envoyer de messages',

    chat_send: 'Envoyer',
    chat_sending_dots: '…',

    chat_other_psychic: 'Médium',
    chat_other_client: 'Client',
    chat_other_chat: 'Chat',

    clientdash_header_title: 'Tableau de bord du client',

    clientdash_title: 'Mon tableau de bord',
    clientdash_subtitle: '{{name}}, ici tu peux consulter ton solde de minutes et tes appels.',

    clientdash_quick_summary: 'Résumé rapide',
    clientdash_loading_info: 'Chargement des informations…',
    clientdash_minutes_available: 'Minutes disponibles :',
    clientdash_calls_made: 'Appels effectués :',

    clientdash_last_calls: 'Derniers appels',
    clientdash_view_history: 'Voir l’historique',
    clientdash_loading_history: 'Chargement de l’historique…',
    clientdash_status_finished: "Terminée",
    clientdash_status_missed: "Manquée",
    clientdash_status_ongoing: "En cours",
    clientdash_status_cancelled: "Annulée",
    clientdash_status_unknown: "—",
    clientdash_no_calls: 'Tu n’as pas encore d’appels enregistrés.',
    clientdash_view_full_history: 'Voir l’historique complet',

    clientdash_actions: 'Actions',
    clientdash_go_psychics: 'Aller à la liste des médiums',
    clientdash_go_chat: 'Aller au chat',

    clientdash_select_psychic_title: 'Choisis un médium',
    clientdash_select_psychic_body: 'Pour ouvrir le chat, tu dois d’abord choisir un médium dans la liste.',

    clientdash_error_config_title: 'Erreur de configuration',
    clientdash_error_config_body: 'EXPO_PUBLIC_API_URL n’est pas configuré.',

    clientdash_session_expired_title: 'Session expirée',
    clientdash_session_expired_body: 'Token introuvable. Reconnecte-toi.',

    clientdash_error_title: 'Erreur',
    clientdash_error_body: 'Impossible de charger les informations du tableau de bord. Réessaie plus tard.',
    clientdash_chat_error_body: 'Impossible d’ouvrir le chat pour le moment. Réessaie.',

    clientdash_buy_minutes: 'Acheter des minutes',

    clientdash_no_minutes_title: 'Vous n’avez plus de minutes disponibles',
    clientdash_no_minutes_body: 'Achetez des minutes pour commencer des chats et des appels avec vos conseillers spirituels.',

    clientdash_low_minutes_title: 'Vos minutes sont presque épuisées',
    clientdash_low_minutes_body: 'Il vous reste {{n}} minutes. Achetez-en davantage pour continuer à utiliser l’application sans interruption.',
    clientdash_delete_account_title: 'Supprimer le compte',
    clientdash_delete_account_body: 'Si vous souhaitez fermer définitivement votre compte, vous pouvez continuer ici. Cette action vous mènera à un écran de confirmation sécurisé.',
    clientdash_delete_account_cta:'Continuer pour supprimer le compte',

    delete_account_header_title: 'Supprimer le compte',
    delete_account_title: 'Supprimer le compte',
    delete_account_subtitle: 'Vous êtes en train de gérer la suppression définitive de votre compte.',
    delete_account_subtitle_with_name: 'Vous gérez la suppression du compte de {{name}}.',
    delete_account_success_title: 'Compte supprimé',
    delete_account_success_body: 'Votre compte a été supprimé avec succès.',
    delete_account_success_ok: 'OK',
    delete_account_error_title: 'Erreur lors de la suppression du compte',
    delete_account_error_body: 'Le compte n’a pas pu être supprimé. Veuillez réessayer.',
    delete_account_confirm_title: 'Confirmer la suppression',
    delete_account_confirm_body: 'Cette action est permanente et ne peut pas être annulée.',
    delete_account_confirm_cta: 'Supprimer mon compte',
    delete_account_confirm_section_title: 'Confirmation',
    delete_account_confirm_check_label: 'Je comprends que cette action est permanente et je souhaite continuer.',
    delete_account_confirm_required_title: 'Confirmation requise',
    delete_account_confirm_required_body:  'Vous devez confirmer que vous comprenez que cette action est permanente.',
    delete_account_cancel_cta: 'Annuler',
    delete_account_password_label: 'Mot de passe actuel',
    delete_account_password_helper: 'Vous pouvez saisir votre mot de passe comme validation supplémentaire. Ce champ est facultatif.',
    delete_account_password_placeholder: 'Saisissez votre mot de passe (facultatif)',
    delete_account_warning_title: 'Avertissement important',
    delete_account_warning_body: 'En supprimant votre compte, vous perdrez l’accès à votre profil et aux informations associées.',
    delete_account_warning_point_1: 'Vous ne pourrez plus vous connecter avec ce compte après sa suppression.',
    delete_account_warning_point_2: 'Cette action est conçue comme une suppression permanente.',
    delete_account_warning_point_3: 'Avant de continuer, assurez-vous de vouloir réellement fermer votre compte.',
    delete_account_processing: 'Suppression du compte...',    

    clienthome_header_title: 'Accueil client',
    clienthome_register: "S'inscrire",
    clienthome_logout: 'Se déconnecter',

    clienthome_welcome: 'Bienvenue',
    clienthome_welcome_name: 'Bienvenue, {{name}}',

    clienthome_subtitle: 'Choisis un médium disponible pour démarrer une consultation audio ou chat.',
    clienthome_my_panel: 'Mon tableau de bord',
    clienthome_login: 'Se connecter',
    clienthome_loading_psychics: 'Chargement des médiums…',
    clienthome_empty: "Aucun médium n'est enregistré pour le moment.",

    languages: {
      es: 'Espagnol',
      en: 'Anglais',
      fr: 'Français',
      de: 'Allemand',
      pt: 'Portugais',
      it: 'Italien',
    },

    clienthome_psychic_available: 'Disponible',
    clienthome_psychic_not_available: 'Indisponible',
    clienthome_psychic_busy_label: 'Occupé',
    clienthome_psychic_offline_suffix: ' (hors ligne)',
    clienthome_busy_in_call: 'Occupé (en appel)',

    clienthome_call_now: 'Appeler',
    clienthome_chat: 'Chat',

    clienthome_comments: 'Avis',
    clienthome_comments_sent: 'Avis (envoyé)',

    clienthome_psychic_not_available_title: 'Médium indisponible',
    clienthome_psychic_not_available_body: "Ce médium n'est pas disponible pour le moment.",

    clienthome_session_expired_title: 'Session expirée',
    clienthome_session_expired_body: 'Reconnecte-toi.',

    clienthome_no_minutes_title: 'Plus de minutes',
    clienthome_no_minutes_body: "Tu n'as pas assez de solde.",
    clienthome_no_minutes_cancel: 'Annuler',
    clienthome_no_minutes_buy: 'Acheter des minutes',

    clienthome_error_title: 'Erreur',
    clienthome_error_load_psychics: 'Impossible de charger la liste des médiums.',
    clienthome_error_invalid_server: 'Réponse serveur invalide.',
    clienthome_error_unexpected_format: 'Format inattendu de la liste des médiums.',
    clienthome_error_invalid_response: 'Réponse serveur invalide.',

    clienthome_snippet_fallback: 'Médium disponible pour t’aider.',

    clienthome_call_start_error: 'Impossible de démarrer l\'appel. Veuillez réessayer.',

    app_layout_default_title: "Luz Psíquica",
    app_layout_logo_alt: "Luz Psíquica",
    app_layout_footer_home: "Accueil",
    app_layout_footer_legal: "Mentions légales",
    app_layout_footer_language: "Langue",
    app_layout_language_modal_title: "Choisir la langue",
    app_layout_language_name_es: "Espagnol",
    app_layout_language_name_en: "Anglais",
    app_layout_language_name_fr: "Français",
    app_layout_language_name_de: "Allemand",
    app_layout_language_name_pt: "Portugais",
    app_layout_language_name_it: "Italien",
    common: {
      close: "Fermer"
    },

    network_error_title: 'Erreur',
    network_error_message: 'Impossible de se connecter au serveur. Vérifiez votre connexion et réessayez.',
    generic_error_message: 'Une erreur inattendue s\'est produite. Veuillez réessayer.',

    directcall_config_error_title: 'Erreur de configuration',
    directcall_config_error_body: "EXPO_PUBLIC_API_URL n'est pas configurée.",

    directcall_session_expired_title: 'Session expirée',
    directcall_session_expired_body_login_again: 'Merci de te reconnecter.',
    directcall_session_expired_body_token_missing: "Token introuvable. Reconnecte-toi.",
    directcall_session_expired_body_call: 'Reconnecte-toi pour passer un appel.',

    directcall_error_title: 'Erreur',
    directcall_error_missing_psychic: "Les informations du médium n'ont pas été trouvées.",
    directcall_error_start_call: "Impossible de démarrer l'appel.",
    directcall_error_invalid_call_params: "Le serveur n'a pas renvoyé des paramètres d'appel valides.",

    directcall_cannot_start_title: "Impossible de démarrer l'appel",
    directcall_cannot_start_no_minutes_fallback: 'Solde de minutes insuffisant',
    directcall_cancel: 'Annuler',
    directcall_buy_minutes: 'Acheter des minutes',

    directcall_connecting_with: 'Connexion de la consultation avec',
    directcall_psychic_fallback: 'Médium',

    directcall_hint_starting: "Démarrage de l'appel…",
    directcall_hint_loading: 'Chargement…',
    directcall_hint_ready: 'Prêt',

    directcall_note_no_answer: "* Si le médium ne répond pas, tu pourras essayer un autre depuis la liste.",

    forgot_header_title: 'Récupérer le mot de passe',
    
    forgot_title: 'Récupérer le mot de passe',

    forgot_subtitle: 'Saisissez votre e-mail ou votre numéro de téléphone pour recevoir le code de récupération.',

    forgot_field_label_email_or_phone: 'E-mail ou téléphone',
    forgot_placeholder_email_or_phone: 'E-mail ou téléphone',

    forgot_required_title: 'Champ requis',
    forgot_required_email_or_phone: 'Saisis ton e-mail ou ton téléphone.',
    forgot_required_code: 'Saisis le code que tu as reçu.',

    forgot_send_code: 'Envoyer le code',
    forgot_step2_help: 'Nous t’avons envoyé un code. Saisis-le ici et définis ton nouveau mot de passe.',

    forgot_done_body_sms: 'Nous vous avons envoyé un code par SMS pour réinitialiser votre mot de passe. Veuillez le vérifier et le saisir ci-dessous.',
    forgot_step2_help_sms: 'Si vous ne recevez pas le code, vérifiez que votre numéro est correct ou demandez-en un nouveau.',

    forgot_code_label: 'Code',
    forgot_code_placeholder: 'Code (6 chiffres)',

    forgot_new_password_label: 'Nouveau mot de passe',
    forgot_new_password_placeholder: 'Nouveau mot de passe',

    forgot_confirm_password_label: 'Confirmer le mot de passe',
    forgot_confirm_password_placeholder: 'Confirmer le mot de passe',

    forgot_weak_password_title: 'Mot de passe faible',
    forgot_weak_password_body: 'Le mot de passe doit contenir au moins 6 caractères.',

    forgot_not_match_title: 'Ne correspond pas',
    forgot_not_match_body: 'Les mots de passe ne correspondent pas.',

    forgot_done_title: 'OK',
    forgot_done_body_generic: "Si l’utilisateur existe, nous enverrons un code pour réinitialiser le mot de passe.",

    forgot_error_title: 'Erreur',
    forgot_error_send_code: "Impossible d'envoyer le code.",
    forgot_error_reset: "Impossible de changer le mot de passe.",

    forgot_password_updated_title: 'Mot de passe mis à jour',
    forgot_password_updated_body: 'Tu peux maintenant te connecter avec ton nouveau mot de passe.',

    forgot_change_password: 'Changer le mot de passe',

    forgot_resend_code: 'Renvoyer le code',
    forgot_back_to_login: 'Retour à la connexion',

    forgot_show_password_a11y: 'Afficher le mot de passe',
    forgot_hide_password_a11y: 'Masquer le mot de passe',

    legal_home_header_title: 'Mentions légales',
    legal_home_title: 'Mentions légales',
    legal_home_meta: 'Sélectionne le document que tu souhaites consulter.',

    legal_home_card_privacy_title: 'Règles et confidentialité',
    legal_home_card_privacy_desc: "Conditions d'utilisation, confidentialité, remboursements et règles générales.",

    legal_home_card_operational_title: 'Document de fonctionnement opérationnel de la plateforme',
    legal_home_card_operational_desc:
      'Fonctionnement technique et opérationnel, rôles, sessions, minutes et règles.',

    common_back: 'Retour',

    psych_callhist_header_title: 'Historique des appels',

    psych_callhist_title: 'Historique des appels',
    psych_callhist_session_expired_title: 'Session expirée',
    psych_callhist_session_expired_body: 'Veuillez vous reconnecter.',
    psych_callhist_error_title: 'Erreur',
    psych_callhist_error_load_history: 'Erreur lors du chargement de l’historique',
    psych_callhist_error_load_history_fallback: 'Impossible de charger l’historique.',
    psych_callhist_error_load_payout: 'Erreur lors du chargement du récapitulatif des paiements',

    psych_callhist_status_finished: 'Terminée',
    psych_callhist_status_missed: 'Refusée/Manquée',
    psych_callhist_status_ongoing: 'En cours',
    psych_callhist_status_cancelled: 'Annulée',
    psych_callhist_status_unknown: '—',

    psych_callhist_client_fallback: 'Client',

    psych_callhist_start: 'Début',
    psych_callhist_end: 'Fin',
    psych_callhist_no_charge: 'Sans facturation',

    psych_callhist_payout_block_title: 'Récapitulatif des paiements (PayPal)',
    psych_callhist_earned_total: 'Total gagné :',
    psych_callhist_paid_total: 'Payé :',
    psych_callhist_pending_total: 'En attente de paiement :',
    psych_callhist_last_payout: 'Dernier paiement :',

    psych_callhist_info_block_title: 'Récapitulatif informatif',
    psych_callhist_calls: 'Appels :',
    psych_callhist_minutes_charged: 'Minutes facturées :',
    psych_callhist_estimated_earnings: 'Gain estimé :',
    psych_callhist_info_hint: '*Valeur indicative. Le paiement réel est basé sur les liquidations.',

    psych_callhist_empty: 'Vous n’avez pas encore d’appels.',

    psych_call_perm_title: 'Autorisation du micro',
    psych_call_perm_message_appname: 'Luz Psíquica a besoin d’accéder au micro pour les appels vocaux.',
    psych_call_perm_allow: 'Autoriser',
    psych_call_perm_deny: 'Annuler',

    psych_call_client_fallback: 'Client',
    psych_call_dash: '—',

    psych_call_end_title: 'Appel terminé',
    psych_call_end_client_cancelled: 'Le client a annulé l’appel.',
    psych_call_end_missed_or_incomplete: 'L’appel a été refusé ou n’a pas abouti.',
    psych_call_end_error_title: 'Erreur',
    psych_call_end_error_body: 'Impossible de terminer l’appel correctement.',

    psych_call_audio_no_mic_permission: 'Autorisation du micro refusée',
    psych_call_audio_session_expired: 'Session expirée',
    psych_call_audio_invalid_token: 'Jeton vocal invalide',
    psych_call_audio_incomplete_data: 'Données Agora incomplètes',
    psych_call_audio_sdk_unavailable: 'SDK Agora indisponible',
    psych_call_audio_connect_error: 'Erreur lors de la connexion audio',

    psych_call_audio_status_error_prefix: 'Erreur audio : {{msg}}',
    psych_call_audio_status_connecting: 'Connexion audio…',
    psych_call_audio_status_waiting_client: 'Audio connecté. En attente du client…',
    psych_call_audio_status_connected_client: 'Audio connecté avec le client.',

    psych_call_title_in_progress: 'Appel en cours',
    psych_call_room_label: 'Salle :',
    psych_call_time_label: 'Temps :',
    psych_call_end_button: 'Terminer l’appel',

    psych_chathist_title: 'Historique des chats',
    psych_chathist_refresh: 'Actualiser',
    psych_chathist_refresh_busy: '…',
    psych_chathist_loading: 'Chargement des conversations…',
    psych_chathist_empty: 'Aucune conversation à afficher pour le moment.',
    psych_chathist_error_load: 'Impossible de charger l’historique',

    psych_chathist_readonly_note: 'Lecture seule (le voyant ne démarre pas les chats)',

    psych_chathist_client_fallback: 'Client',
    psych_chathist_dash: '—',
    psych_chathist_initials_fallback: 'LP',

    psych_chatthread_title_with_name: 'Chat avec {{name}}',
    psych_chatthread_readonly_note: 'Lecture seule (le voyant ne démarre pas les chats)',
    psych_chatthread_loading: 'Chargement des messages…',
    psych_chatthread_empty: 'Aucun message à afficher.',
    psych_chatthread_error_load: 'Impossible de charger le chat',

    psych_chatthread_client_fallback: 'Client',
    psych_chatthread_dash: '—',

    psych_comments_nav_title_with_name: 'Commentaires - {{name}}',
    psych_comments_psychic_fallback: 'Voyant',
    psych_comments_client_prefix: 'Client',
    psych_comments_dash: '—',

    psych_comments_loading: 'Chargement des commentaires…',
    psych_comments_loading_fallback: 'Chargement des commentaires…',
    psych_comments_error_title: 'Erreur',
    psych_comments_err_no_api_url: 'EXPO_PUBLIC_API_URL n’est pas configuré.',
    psych_comments_err_no_psychic_id: 'psychicId n’a pas été reçu.',
    psych_comments_err_load_comments: 'Impossible de charger les commentaires',

    psych_comments_not_available_title: 'Non disponible',
    psych_comments_not_available_body: 'Vous ne pouvez noter qu’après la fin d’une consultation.',
    psych_comments_session_expired_title: 'Session expirée',
    psych_comments_session_expired_body: 'Veuillez vous reconnecter.',

    psych_comments_saved_title: 'C’est fait !',
    psych_comments_saved_only_rating: 'Note enregistrée. Vous aviez déjà laissé un commentaire pour ce voyant.',
    psych_comments_saved: 'Note enregistrée.',

    psych_comments_err_save_rating: 'Impossible d’enregistrer la note',

    psych_comments_info_line1_a: 'Cet écran sert à ',
    psych_comments_info_line1_strong: 'consulter',
    psych_comments_info_line1_b: ' les commentaires.',
    psych_comments_info_line2_a: 'La ',
    psych_comments_info_line2_strong: 'note',
    psych_comments_info_line2_b: ' se fait après une consultation terminée.',
    psych_comments_info_line3_a: 'Le ',
    psych_comments_info_line3_strong1: 'commentaire',
    psych_comments_info_line3_b: ' (texte) est optionnel et n’est autorisé que ',
    psych_comments_info_line3_strong2: 'une fois par voyant',
    psych_comments_info_line3_c: '.',

    psych_comments_form_title: 'Notez cette consultation',
    psych_comments_form_label_rating: 'Note',
    psych_comments_form_label_comment: 'Commentaire (optionnel)',
    psych_comments_locked_text:
      '✅ Vous avez déjà laissé un commentaire pour ce voyant. Vous pouvez continuer à noter vos consultations, mais pas écrire un autre commentaire.',
    psych_comments_input_placeholder: 'Écrivez votre commentaire (optionnel)...',

    psych_comments_saving: 'Enregistrement…',
    psych_comments_save_button: 'Enregistrer la note',

    psych_comments_empty: 'Aucun commentaire pour le moment.',

    psych_dash_header_title: 'Tableau de bord du voyant',
    psych_dash_logout: 'Se déconnecter',

    psych_dash_psychic_fallback: 'Voyant',
    psych_dash_client_fallback: 'Client',
    psych_dash_room_dash: '—',

    psych_dash_config_error_title: 'Erreur de configuration',
    psych_dash_config_error_body_missing_api: 'EXPO_PUBLIC_API_URL n’est pas configuré.',
    psych_dash_config_error_body_missing_api_env: 'EXPO_PUBLIC_API_URL n’est pas défini. Vérifie ton fichier .env.',

    psych_dash_session_expired_title: 'Session expirée',
    psych_dash_session_expired_body: 'Veuillez vous reconnecter.',
    psych_dash_session_expired_body_and_logout: 'Veuillez vous reconnecter.',

    psych_dash_info_title: 'Info',
    psych_dash_info_cant_load_application: 'Impossible de charger votre candidature. Réessayez.',

    psych_dash_nav_error_title: 'Erreur de navigation',
    psych_dash_nav_error_body_missing_route:
      'Dans ce stack, la route "PsychicRegister" n’est pas enregistrée.\n\nSolution : ajoute cette screen dans le MÊME stack où se trouve PsychicDashboard :\n<Stack.Screen name="PsychicRegister" component={PsychicRegisterScreen} />',

    psych_dash_error_title: 'Erreur',
    psych_dash_error_refresh_info: 'Impossible de mettre à jour les informations',
    psych_dash_error_open_form: 'Impossible d’ouvrir le formulaire.',

    psych_dash_call_end_title: 'Appel terminé',
    psych_dash_call_end_body_caller_cancelled: 'Le client a annulé l’appel.',
    psych_dash_call_end_body_finished: 'L’appel est terminé.',

    psych_dash_not_available_title: 'Non disponible',
    psych_dash_not_available_call_cancelled: 'L’appel a déjà été annulé par le client.',

    psych_dash_modal_incoming_title: 'Appel entrant',
    psych_dash_modal_incoming_sub: 'Répondez pour démarrer la consultation',
    psych_dash_modal_client_label: 'Client :',
    psych_dash_modal_room_label: 'Salle :',
    psych_dash_modal_processing: 'Traitement…',
    psych_dash_modal_reject: 'Refuser',
    psych_dash_modal_accept: 'Accepter',
    psych_dash_modal_footnote: '* La facturation commence lorsque le voyant répond.',

    psych_dash_header_role_line: 'Voyant · Luz Psíquica',
    psych_dash_header_hint_calls: 'Quand vous êtes disponible, vous recevrez ici les appels des clients en temps réel.',
    psych_dash_socket_status: 'Statut du socket : {{status}}',
    psych_dash_socket_connected: 'Connecté',
    psych_dash_socket_disconnected: 'Déconnecté',

    psych_dash_profile_review_title: 'Révision du profil',

    psych_dash_team_note_label: 'Note de l’équipe :',
    psych_dash_fields_to_fix_label: 'Sections à corriger :',
    psych_dash_fix_button: 'Corriger et renvoyer le formulaire',
    psych_dash_loading: 'Chargement…',

    psych_dash_revision_hint: 'Vous verrez ici tout ajustement ou recommandation que l’équipe pourrait demander concernant votre profil.',

    psych_dash_new_messages_title: 'Nouveaux messages',
    psych_dash_new_messages_new_suffix: 'nouveau(x)',
    psych_dash_new_messages_open: 'Ouvrir',
    psych_dash_new_messages_close: 'X',

    psych_dash_availability_title: 'Disponibilité',
    psych_dash_availability_currently: 'Vous êtes actuellement',
    psych_dash_available: 'Disponible',
    psych_dash_not_available: 'Indisponible',
    psych_dash_updating: 'Mise à jour...',
    psych_dash_set_not_available: 'Me rendre indisponible',
    psych_dash_set_available: 'Me rendre disponible',

    psych_dash_rating_title: 'Note',
    psych_dash_refresh: 'Actualiser',
    psych_dash_based_on: 'Basé sur {{count}}',
    psych_dash_ratings_word: 'évaluations',
    psych_dash_loading_comments: 'Chargement des commentaires…',
    psych_dash_no_visible_comments: 'Aucun commentaire visible ici pour le moment.',
    psych_dash_recent_comments_title: 'Commentaires récents',
    psych_dash_view_all_comments: 'Voir tous les commentaires',

    psych_dash_calls_history_title: 'Historique des appels',
    psych_dash_calls_history_body: 'Consultez les appels que vous avez traités et leur statut.',
    psych_dash_view_calls_history: 'Voir l’historique des appels',

    psych_dash_chats_history_title: 'Historique des chats',
    psych_dash_chats_history_body: 'Consultez les chats que vous avez eus avec vos clients.',
    psych_dash_view_chats_history: 'Voir l’historique des chats',

    psych_dash_info_block_title: 'Informations',
    psych_dash_info_bullet_1: '• Lorsqu’un client lance un appel et que vous êtes disponible, vous verrez une alerte d’appel entrant.',
    psych_dash_info_bullet_2: '• En acceptant, vous entrerez dans l’écran d’appel pour aider le client.',
    psych_dash_info_bullet_3: '• ✅ Lorsqu’un client envoie un message, vous le verrez dans “Nouveaux messages” et pourrez ouvrir le chat.',

    psych_profile_header_title: 'Profil du voyant',

    psych_profile_loading_profile: 'Chargement du profil...',

    psych_profile_psychic_fallback: 'Voyant',
    psych_profile_no_info: 'Aucune information sur le voyant n’a été trouvée.',
    psych_profile_back: 'Retour',

    psych_profile_available: 'Disponible',
    psych_profile_not_available: 'Indisponible',
    psych_profile_busy: 'Occupé',
    psych_profile_stats_calls_word: 'appels',

    psych_profile_featured_review_tag: '⭐ Commentaire à la une',
    psych_profile_featured_review_rating_label: 'Note',
    psych_profile_featured_review_client_prefix: '— Client',

    psych_profile_bio_title: 'Biographie',
    psych_profile_bio_rate_label: 'Tarif : US$1.25/min',
    psych_profile_bio_phrase_label: 'Phrase :',
    psych_profile_bio_languages_label: 'Langues :',
    psych_profile_bio_areas_label: 'Domaines :',
    psych_profile_bio_tools_label: 'Outils :',
    psych_profile_bio_experience_label: 'Expérience :',
    psych_profile_bio_about_me_label: 'À propos de moi :',

    psych_profile_work_info_title: 'Informations de travail',
    psych_profile_work_exp_phone_chat_label: 'Expérience téléphone/chat :',
    psych_profile_yes: 'Oui',
    psych_profile_no: 'Non',
    psych_profile_work_start_year_label: 'Année de début :',
    psych_profile_work_hours_per_week_label: 'Heures par semaine :',
    psych_profile_work_channels_label: 'Canaux (téléphone et chat) :',

    psych_profile_comments_title: 'Commentaires',
    psych_profile_loading_comments: 'Chargement des commentaires…',
    psych_profile_no_comments: 'Il n’y a pas encore de commentaires pour ce voyant.',
    psych_profile_showing_comments_prefix: 'Affichage de',
    psych_profile_showing_comments_suffix: 'commentaire(s), du plus récent au plus ancien.',

    psych_profile_history_title: 'Historique',
    psych_profile_history_body: 'Consultez l’historique de vos appels avec ce voyant.',
    psych_profile_view_call_history: 'Voir l’historique des appels',

    psych_profile_call_now: 'Appeler maintenant',
    psych_profile_chat: 'Chat',
    psych_profile_unavailable_short: 'Indisponible',

    psych_profile_psychic_unavailable_title: 'Voyant indisponible',
    psych_profile_psychic_unavailable_body_try_later: 'Ce voyant n’est pas disponible pour le moment. Réessayez plus tard.',
    psych_profile_psychic_unavailable_body: 'Ce voyant n’est pas disponible pour le moment.',

    psych_profile_config_error_title: 'Erreur de configuration',
    psych_profile_config_error_body_missing_api: 'EXPO_PUBLIC_API_URL n’est pas configuré.',

    psych_profile_session_expired_title: 'Session expirée',
    psych_profile_session_expired_body_call: 'Veuillez vous reconnecter pour passer un appel.',

    psych_profile_call_cannot_start_title: 'Impossible de démarrer l’appel',
    psych_profile_call_cannot_start_body_no_minutes: 'Solde de minutes insuffisant',
    psych_profile_call_cannot_start_cancel: 'Annuler',
    psych_profile_call_cannot_start_buy_minutes: 'Acheter des minutes',

    psych_profile_call_error_title: 'Erreur',
    psych_profile_call_error_invalid_params: 'Le serveur n’a pas renvoyé des paramètres d’appel valides.',
    psych_profile_call_error_start_failed: 'Impossible de démarrer l’appel.',
    psych_profile_call_error_server: 'Une erreur serveur est survenue.',

    psych_profile_error_title: 'Erreur',
    psych_profile_error_call_failed: 'Impossible de démarrer l’appel.',

    psych_register_title_edit: 'Corriger et renvoyer la candidature',
    psych_register_title_register: 'Inscription du voyant',

    psych_register_revision_title: 'Corrections demandées',
    psych_register_revision_note_prefix: 'Note : ',
    psych_register_revision_hint: 'Corrigez ce qui est indiqué puis appuyez sur « Renvoyer la candidature ».',

    psych_register_label_full_name: 'Nom complet *',
    psych_register_ph_full_name: 'Ex : Laura Pérez',

    psych_register_label_psychic_name: 'Nom de voyant (identité publique) *',
    psych_register_ph_psychic_name: 'Ex : Luna',
    psych_register_help_psychic_name_unique: 'Ce nom sera visible par les clients. Il doit être unique.',

    psych_register_label_paypal_email: 'Email PayPal (obligatoire) *',
    psych_register_ph_paypal_email: 'ex : votreemail@paypal.com',
    psych_register_help_paypal_email: 'Cet email sera utilisé pour les paiements au voyant.',

    psych_register_label_public_bio: 'Biographie publique (bio) *',
    psych_register_ph_public_bio: 'Écrivez votre biographie (les clients la verront)',
    psych_register_help_public_bio: 'Cette biographie sera affichée aux clients sur votre profil.',

    psych_register_label_email: 'Email',
    psych_register_ph_email: 'exemple@email.com',

    psych_register_label_phone: 'Téléphone / WhatsApp',
    psych_register_ph_phone: '+33 6 00 00 00 00',
    psych_register_help_phone_international: 'Si vous utilisez un téléphone, saisissez-le au format international (ex. +33 6 00 00 00 00).',

    psych_register_label_password: 'Mot de passe *',
    psych_register_ph_password: 'Minimum 6 caractères',
    psych_register_accessibility_show_password: 'Afficher le mot de passe',
    psych_register_accessibility_hide_password: 'Masquer le mot de passe',

    psych_register_help_edit_credentials:
      'Email/téléphone et mot de passe se gèrent via connexion/support. Ici, vous corrigez seulement la candidature.',

    psych_register_label_location: 'Pays / Ville *',
    psych_register_ph_location: 'Ex : Colombie, Bogotá',

    psych_register_label_languages: 'Langues dans lesquelles vous consultez *',
    psych_register_ph_languages: 'Ex : Espagnol, Anglais',

    psych_register_section_additional_required: 'Informations supplémentaires (obligatoires)',

    psych_register_label_tagline: 'Décrivez une phrase qui vous identifie *',
    psych_register_ph_tagline: 'Ex : Croire, c’est créer',

    psych_register_label_areas: 'Domaines (vous pouvez en sélectionner plusieurs) *',
    psych_register_label_areas_other: 'Précisez « Autres » (Domaines) *',
    psych_register_ph_areas_other: 'Écrivez vos domaines supplémentaires',

    psych_register_label_applicant_photo: 'Photo du candidat (obligatoire) *',
    psych_register_permission_box_title: 'Autorisation d’accès aux photos',
    psych_register_permission_box_body: 'Luz Psíquica accède à vos photos uniquement lorsque vous choisissez de téléverser une image. Cet accès n’est pas utilisé en arrière-plan.',
    psych_register_permission_hint_denied: 'Si vous avez refusé l’autorisation, vous pouvez l’activer dans les réglages de l’appareil.',
    psych_register_permission_request: 'Autoriser l’accès aux photos',
    psych_register_permission_granted: 'Autorisation accordée',
    psych_register_permission_container_first_body: 'Avant de sélectionner la photo, autorisez l’accès à vos photos à l’aide du bouton de cette section.',
    psych_register_open_settings: 'Ouvrir les réglages',
    psych_register_permissions_error_body: 'Impossible de demander l’autorisation. Veuillez réessayer.',
    psych_register_cancel: 'Annuler',
    psych_register_photo_change: 'Changer la photo',
    psych_register_photo_select: 'Sélectionner une photo',

    psych_register_label_tools: 'Outils que vous utilisez (sélection multiple possible) *',
    psych_register_label_tools_other: 'Précisez « Autres » (Outils) *',
    psych_register_ph_tools_other: 'Écrivez vos outils supplémentaires',

    psych_register_label_experience: 'Décrivez davantage votre expérience *',
    psych_register_ph_experience: 'Ex : méthodes, fiabilité, etc.',

    psych_register_label_worked_phone_chat: 'Avez-vous déjà travaillé comme voyant par téléphone ou chat ? *',

    psych_register_label_start_year: 'En quelle année avez-vous commencé à travailler professionnellement ? *',
    psych_register_year_select: 'Sélectionnez une année',
    psych_register_year_modal_title: 'Sélectionnez l’année',
    psych_register_year_modal_close: 'Fermer',

    psych_register_label_hours_per_week: 'Combien d’heures par semaine seriez-vous prêt(e) à travailler dans l’app ? *',
    psych_register_ph_hours_per_week: 'Ex : 10, 12, 40, temps plein',

    psych_register_label_can_do_phone_chat: 'Confirmez si vous pouvez consulter par téléphone et chat *',

    psych_register_label_private_experience:
      '(Interne uniquement) Parlez-nous de votre expérience privée ou d’autres services *',
    psych_register_ph_private_experience: 'Ex : expérience avec des clients privés...',

    psych_register_label_photo_marketing_consent: 'Consentement d’utilisation de la photo (marketing/réseaux) *',

    psych_register_label_declaration: 'Déclaration obligatoire *',
    psych_register_declaration_accept: 'J’accepte la déclaration *',

    psych_register_label_about: 'Message complémentaire / À propos de vous *',
    psych_register_ph_about: 'Que souhaitez-vous que l’équipe sache de vous ?',

    psych_register_terms_title: 'Règles et Confidentialité',
    psych_register_terms_body: 'J’ai lu et j’accepte ',
    psych_register_terms_link: 'Règles et Confidentialité',

    psych_register_submit_edit: 'Renvoyer la candidature',
    psych_register_submit_register: 'Envoyer la demande',

    psych_register_back: 'Retour',

    psych_register_yes: 'Oui',
    psych_register_no: 'Non',

    psych_register_validation_title: 'Validation',
    psych_register_error_title: 'Erreur',
    psych_register_config_error_title: 'Erreur de configuration',
    psych_register_config_error_body: 'EXPO_PUBLIC_API_URL n’est pas défini. Vérifiez votre fichier .env.',

    psych_register_permissions_required_title: 'Autorisation requise',
    psych_register_permissions_required_body: 'Nous avons besoin d’accès à votre galerie pour sélectionner une photo.',

    psych_register_invalid_photo_title: 'Photo invalide',
    psych_register_invalid_photo_body:
      'Impossible de lire l’image en base64. Essayez une autre photo ou redémarrez l’app.',

    psych_register_photo_pick_error_title: 'Erreur',
    psych_register_photo_pick_error_body: 'Impossible de sélectionner la photo.',

    psych_register_terms_alert_title: 'Règles et Confidentialité',
    psych_register_terms_alert_body: 'Vous devez accepter les Règles et Confidentialité pour continuer.',

    psych_register_session_expired_body: 'Session expirée. Veuillez vous reconnecter.',

    psych_register_success_title: 'Demande envoyée',
    psych_register_success_resubmit_default: 'Candidature renvoyée avec succès.',
    psych_register_success_register_default:
      'Votre demande a été envoyée. L’équipe de Luz Psíquica examinera votre profil et vous contactera pour un entretien.',

    psych_reviews_config_error_title: 'Erreur de configuration',
    psych_reviews_config_error_body: 'EXPO_PUBLIC_API_URL n’est pas défini dans votre .env.',

    psych_reviews_session_expired_title: 'Session expirée',
    psych_reviews_session_expired_body: 'Veuillez vous reconnecter.',

    psych_reviews_error_title: 'Erreur',
    psych_reviews_load_error_body: 'Impossible de charger l’historique des évaluations.',

    psych_reviews_title: 'Notes et commentaires',

    psych_reviews_summary_title: 'Résumé',
    psych_reviews_based_on: 'Basé sur {count} évaluations',
    psych_reviews_refresh: 'Actualiser',

    psych_reviews_loading: 'Chargement…',

    psych_reviews_comments_title: 'Commentaires',
    psych_reviews_no_comments: 'Vous n’avez pas encore de commentaires visibles.',

    psych_reviews_load_more: 'Charger plus',
    psych_reviews_limit_reached: 'Limite maximale atteinte',

    psych_reviews_hint_rule:
      '* Les commentaires visibles dépendent de la règle anti-spam (un commentaire par client et par voyant).',

    psych_reviews_back_arrow: '←',
    psych_reviews_refresh_busy: '...',
    psych_reviews_dash_placeholder: '—',

    realcall_mic_permission_title: 'Autorisation du micro',
    realcall_mic_permission_message: 'Luz Psíquica a besoin d’accéder au micro pour les appels vocaux.',
    realcall_mic_permission_accept: 'Autoriser',
    realcall_mic_permission_cancel: 'Annuler',

    realcall_call_ended_title: 'Appel terminé',
    realcall_call_ended_no_minutes: 'L’appel s’est terminé car vous n’avez plus de minutes.',

    realcall_call_ended_rejected_body: 'Le voyant a refusé l’appel. Essayez un autre voyant ou réessayez plus tard.',
    realcall_ok: 'OK',

    realcall_rating_title: 'Évaluation',
    realcall_rating_pick_stars: 'Sélectionnez une note (de 1 à 5).',

    realcall_error_title: 'Erreur',
    realcall_rating_save_error: 'Impossible d’enregistrer l’évaluation',

    realcall_back: '← Retour',
    realcall_call_title: 'Appel audio',
    realcall_room_label: 'Salle :',

    realcall_psychic_role_brand: 'Voyant · Luz Psíquica',

    realcall_audio_error_prefix: 'Erreur audio :',
    realcall_audio_connecting: 'Connexion audio…',
    realcall_audio_waiting_psychic: 'Audio connecté. En attente du voyant…',
    realcall_audio_connected_psychic: 'Audio connecté avec le voyant.',

    realcall_time_label: 'Temps :',
    realcall_remaining_minutes_label: 'Minutes restantes :',
    realcall_billing_starts_note: '* La facturation commence lorsque le voyant répond.',

    realcall_hangup: 'Raccrocher',

    realcall_rate_title: 'Évaluez votre consultation',
    realcall_rate_subtitle: 'Comment s’est passée votre expérience avec {name} ?',

    realcall_review_label: 'Commentaire (facultatif)',
    realcall_review_placeholder: 'Écrivez un court commentaire…',
    realcall_skip: 'Ignorer',
    realcall_send: 'Envoyer',
    realcall_sending: 'Envoi…',

    register_header_title: 'Inscription',

    register_title_create_account: 'Créer un compte',

    register_subtitle_client: 'Inscrivez-vous en tant que client pour continuer',

    register_required_fields_title: 'Champs obligatoires',
    register_required_fields_body: 'Complète tous les champs.',

    register_link_psychic_apply: 'Êtes-vous médium ? Postulez pour travailler avec nous',

    register_legal_title: 'Règles et confidentialité',
    register_legal_body_client: 'Tu dois accepter les Conditions, la Confidentialité et les Remboursements pour t’inscrire.',

    register_success_title: 'Compte créé',
    register_success_body: 'Ton compte a été créé avec succès. Connecte-toi.',

    register_error_title: 'Inscription',
    register_failed_msg: 'Nous n’avons pas pu finaliser votre inscription. Veuillez réessayer.',
    common_ok: 'OK',

    register_placeholder_full_name: 'Nom complet',
    register_placeholder_email_or_phone: 'E-mail ou téléphone',
    register_phone_helper: 'Vous pouvez utiliser un e-mail ou un numéro de téléphone. Si vous utilisez un téléphone, saisissez-le au format international (ex. +33 6 00 00 00 00).',
    register_placeholder_password: 'Mot de passe',

    register_accessibility_show_password: 'Afficher le mot de passe',
    register_accessibility_hide_password: 'Masquer le mot de passe',

    register_label_account_type: 'Type de compte',
    register_role_client: 'Client',
    register_role_psychic: 'Voyant',

    register_terms_prefix: 'J’ai lu et j’accepte',
    register_terms_link: 'Règles et confidentialité',

    register_btn_create_account: 'Créer un compte',
    register_link_have_account_login: 'Tu as déjà un compte ? Connecte-toi',

    common: {
      back: "Retour",
      ok: "OK",
      psychic: "Voyant",
      dash: "—"
    },
    legal_header_title: 'Règles et confidentialité',
    legal: {
      title: "Règles et confidentialité",
      meta: "Version : {{version}} · Titulaire légal : {{owner}} · Juridiction : {{country}}",
      jurisdictionCountry: "Colombie",
      mailSubject: "Assistance juridique - Luz Psíquica",
      openFailTitle: "Impossible d’ouvrir",
      openFailGeneric: "Impossible d’ouvrir le lien.",
      emailFailMessage: "Impossible d’ouvrir l’application e-mail. Vérifiez qu’une application e-mail est configurée sur le téléphone.",
      whatsappFailMessage: "Impossible d’ouvrir WhatsApp. Vérifiez que WhatsApp est installé ou réessayez.",
      emailLabel: "E-mail : {{email}}",
      whatsappLabel: "WhatsApp : +1 (813) 618-7770",

      s1Title: "1. Acceptation des conditions",
      s1Body: "En s’inscrivant et en utilisant l’application, et par la sélection expresse de la case d’acceptation correspondante, l’utilisateur déclare avoir lu, compris et accepté intégralement et volontairement les règles, politiques, conditions et dispositions relatives à l’utilisation opérationnelle de la plateforme décrites dans le présent document.\n\nL’acceptation de ces conditions constitue une exigence obligatoire et contraignante pour l’accès, l’inscription et l’utilisation de l’application. En cas de désaccord avec l’une quelconque des dispositions établies ci-dessus, l’utilisateur doit s’abstenir de s’inscrire ou d’utiliser la plateforme.\n\nLes documents juridiques, y compris Normes et Privacité et le Document de Fonctionnement Opérationnel de la Plateforme, peuvent être consultés à tout moment depuis cette section juridique.\n",

      s2Title: "2. Nature du service",
      s2Body: "Luz Psíquica est une application de divertissement et d’orientation personnelle, dont les contenus et services ont un caractère exclusivement informatif et récréatif.\n\nLa plateforme n’offre pas, et n’a pas vocation à offrir, de conseils médicaux, psychologiques, psychiatriques, juridiques, financiers, thérapeutiques ou tout autre type de conseil professionnel réglementé. Les informations, opinions ou interactions générées au sein de l’application ne remplacent en aucun cas la consultation de professionnels dûment qualifiés dans les domaines concernés.\n\nL’utilisateur reconnaît et accepte que l’utilisation de la plateforme s’effectue sous sa seule responsabilité, et que toute décision prise à partir du contenu ou des interactions réalisées sur Luz Psíquica est assumée intégralement par l’utilisateur, conformément aux directives et conditions établies par la plateforme.\n",

      s3Title: "3. Facturation et paiement à la minute",
      s3Body: "Les services proposés au sein de Luz Psíquica sont facturés à l’utilisateur et réglés au médium exclusivement sur la base des minutes effectivement consommées au titre de la communication, que ce soit par conversation vocale ou par échange de messages écrits, réalisées à l’intérieur de l’application.\n\nAucun paiement ne sera reconnu au titre du temps d’attente, de la disponibilité, de la connexion active sans consommation effective, des résultats obtenus, des promesses, des attentes ou de tout autre concept différent de l’utilisation réelle, mesurable et vérifiable du service au sein de la plateforme.\n\nToutes les transactions financières effectuées dans l’application sont gérées par la plateforme de paiement PayPal, conformément à ses propres conditions générales et politiques d’utilisation. Luz Psíquica ne conserve, ne traite ni ne gère directement les informations financières sensibles des utilisateurs ou des médiums.\n\nÀ ce titre, et n’étant pas légalement autorisée à le faire, la plateforme ne demande pas et n’est pas tenue de demander, de stocker ou de vérifier des numéros de comptes bancaires, de cartes de crédit, de cartes de débit ou toute autre donnée financière personnelle. L’utilisation des moyens de paiement est exclusivement régie par les conditions établies par PayPal.\n\nLa relation entre Luz Psíquica et les médiums est de nature strictement indépendante. En conséquence, il n’existe aucun lien de travail, aucune relation de subordination, ni aucune obligation de versement de primes, d’avantages sociaux, de prestations salariales, d’indemnités ou de compensations de nature similaire.\n\nLa plateforme n’accorde aucun prêt, avance, acompte ou garantie de revenus, et n’émet pas de certificats de travail, d’attestations de revenus, de lettres pour des démarches financières, de subventions, de garanties ou de documents de nature analogue.\n\nLes minutes consommées sont calculées à l’aide des systèmes techniques de mesure de la plateforme. En cas d’ajustements techniques, de défaillances de connexion, d’interruptions de service ou de divergences dans la mesure du temps consommé, les enregistrements internes de Luz Psíquica prévaudront comme référence valable. Toute réclamation relative à la mesure des minutes devra être effectuée selon les canaux et procédures établis par la plateforme, sans que cela n’implique la reconnaissance automatique de remboursements, de compensations ou de paiements supplémentaires.\n",

      s4Title: "4. Interdiction de partager des informations personnelles",
      s4Body: "Afin de protéger la sécurité, la confidentialité et le bon fonctionnement de la plateforme, tout échange d’informations personnelles ou sensibles entre les clients et les médiums, que ce soit à l’intérieur ou à l’extérieur de l’application, est strictement interdit.\n\nSont considérées comme informations personnelles, à titre indicatif et non limitatif, toutes les données permettant l’identification, le contact ou la localisation d’une personne, notamment les numéros de téléphone, adresses physiques, adresses électroniques, profils sur les réseaux sociaux, documents d’identité, données bancaires, numéros de compte, liens de paiement, moyens de contact externes ou toute autre donnée de nature similaire.\n\nIl est également expressément interdit de transférer des conversations, accords, paiements ou tout type d’interaction en dehors de l’application, ainsi que de tenter de contourner les systèmes de communication et de paiement mis en place par Luz Psíquica.\n\nCette interdiction s’applique de manière obligatoire tant aux clients qu’aux médiums, et son non-respect peut entraîner l’application des mesures correctives prévues par les règles et conditions de la plateforme.\n",

      s5Title: "5. Conditions générales d’utilisation",
      s5Body: "L’utilisation de Luz Psíquica est soumise au respect des règles de coexistence, du respect mutuel et des dispositions internes établies par la plateforme, lesquelles ont pour objectif de garantir un environnement sûr, fonctionnel et approprié pour l’ensemble des utilisateurs.\n\nLuz Psíquica se réserve le droit de suspendre temporairement ou de fermer définitivement les comptes des utilisateurs ou des médiums lorsqu’il existe des raisons opérationnelles, techniques ou de sécurité le justifiant, notamment, à titre indicatif et non limitatif, en cas de fraude, d’abus, de harcèlement, de comportement inapproprié, d’utilisation abusive de la plateforme, de tentative de contournement des contrôles internes ou de non-respect des règles, politiques et conditions établies dans le présent document.\n\nLes mesures adoptées auront un caractère préventif ou correctif, selon le cas, et seront appliquées dans le but de protéger l’intégrité de la plateforme, ses utilisateurs et le bon fonctionnement des services, sans ouvrir droit à une quelconque indemnisation, compensation ou réclamation à l’encontre de Luz Psíquica.\n",

      s6Title: "6. Confidentialité et traitement des données",
      s6Body: "Luz Psíquica traite uniquement les données personnelles minimales et strictement nécessaires au fonctionnement opérationnel de la plateforme, notamment, à titre indicatif et non limitatif, l’identification du compte, l’historique des sessions, les achats effectués, la consommation de minutes et la gestion des demandes d’assistance.\n\nEn aucun cas les utilisateurs ne sont autorisés à échanger des données personnelles entre eux ni à accéder aux informations personnelles d’autres utilisateurs ou médiums, en dehors des mécanismes strictement nécessaires à la fourniture du service au sein de l’application.\n\nLes données traitées par la plateforme sont utilisées exclusivement à des fins opérationnelles, d’assistance technique, de sécurité, de prévention de la fraude, d’amélioration du service et de respect des obligations légales ou réglementaires applicables. Luz Psíquica ne commercialise, ne vend ni ne cède des données personnelles à des tiers à des fins étrangères au fonctionnement de la plateforme.\n\nLe traitement des données est effectué conformément aux principes de légalité, de finalité, de proportionnalité et de sécurité, en adoptant des mesures techniques et organisationnelles raisonnables afin de protéger les informations contre tout accès non autorisé, utilisation abusive ou perte.\n\nLes utilisateurs souhaitant être liés à la plateforme en tant que voyants pourront être tenus de fournir des informations d’identification supplémentaires, y compris une copie d’un document officiel d’identité valide, exclusivement afin de vérifier l’identité réelle du demandeur, sa majorité légale, l’authenticité des données fournies et le respect des obligations contractuelles et légales applicables.\n\nCes informations seront traitées conformément aux principes de légalité, de finalité, de proportionnalité, de sécurité et de confidentialité établis par la législation applicable en matière de protection des données, notamment la Loi colombienne 1581 de 2012.\n\nElles ne seront en aucun cas commercialisées, cédées ou utilisées à des fins autres que celles expressément décrites, et seront conservées uniquement pendant la durée strictement nécessaire à la réalisation de leur finalité.\n",

      s7Title: "7. Limitation de responsabilité",
      s7Body: "Luz Psíquica fournit ses services selon les modalités et conditions décrites sur la plateforme, sans accorder de garanties expresses ou implicites quant aux résultats, à l’exactitude, aux attentes personnelles ou aux conséquences découlant de l’utilisation de l’application.\n\nLa plateforme ne saurait être tenue responsable des décisions, actions, omissions, interprétations ou résultats découlant directement ou indirectement de l’utilisation des contenus, services ou interactions réalisés au sein de l’application, lesquels relèvent de la seule responsabilité de l’utilisateur.\n\nLuz Psíquica ne pourra également être tenue responsable des interruptions de service, erreurs techniques, défaillances de connectivité, indisponibilités temporaires de la plateforme, pertes d’informations, ajustements de mesure des minutes, ni des dommages directs ou indirects résultant de causes techniques, opérationnelles ou de force majeure.\n\nEn aucun cas la responsabilité de Luz Psíquica ne pourra excéder le montant effectivement payé par l’utilisateur au sein de l’application pour les services faisant l’objet de la réclamation, ni ouvrir droit à une indemnisation pour préjudice moral, perte de bénéfices, perte d’opportunités, attentes non satisfaites ou autres dommages indirects.\n",

      s8Title: "8. Nature du service et caractère non remboursable",
      s8Body: "Sur la plateforme, l’utilisation des services de chat et/ou d’appel est facturée selon le modèle minute entamée, minute facturée. Par conséquent, toute fraction de minute entamée sera considérée comme une minute complète aux fins de facturation et de comptabilisation.\n\nCette politique s’applique à la fois à la consommation de minutes par le client et au calcul du temps effectivement assuré par le médium, afin de garantir une rémunération équitable du temps consacré ainsi qu’une mesure claire, objective et transparente du service fourni.\n\nLa durée de chaque interaction est enregistrée automatiquement par le système, et l’utilisateur reconnaît et accepte expressément ce mode de facturation dès qu’il utilise la plateforme.\n\nLes minutes achetées sur la plateforme Luz Psíquica constituent des crédits numériques à usage exclusif au sein de l’écosystème du service et ne représentent ni de l’argent liquide, ni des dépôts, ni des soldes retirables, ni des instruments financiers, ni des valeurs transférables.\n\nEn conséquence, tous les achats de minutes effectués dans l’application sont finaux, définitifs et non remboursables, y compris dans les cas où l’utilisateur décide de ne pas utiliser tout ou partie des minutes achetées.\n\nLa non-utilisation du service par l’utilisateur, totale ou partielle, ne donne droit à aucun remboursement, compensation, indemnisation ou reconnaissance financière de quelque nature que ce soit.\n\nLes minutes ne peuvent être converties en argent, transférées à des tiers, retirées de la plateforme ni revendiquées comme solde en dehors de l’environnement Luz Psíquica.\n\nL’utilisateur reconnaît expressément qu’en effectuant un achat sur la plateforme, il acquiert un service numérique à consommation immédiate ou à la demande, et renonce, dans la mesure permise par la loi applicable, à tout droit de rétractation, d’annulation ou de remboursement ultérieur.\n\nÀ titre exceptionnel, la plateforme pourra examiner les demandes uniquement en cas de défaillances techniques vérifiables directement imputables à Luz Psíquica ayant empêché la fourniture effective du service.\n\nDans ces cas, toute mesure sera strictement limitée à la correction de l’erreur ou à la restitution proportionnelle du service au sein de la plateforme, sans qu’aucun remboursement monétaire ne soit accordé.\n\nLa plateforme se réserve le droit de rejeter toute demande en cas d’indices de fraude, d’abus, d’utilisation abusive du système, de tentative de contournement des contrôles, de manipulation technique ou de non-respect des règles établies.\n\nLes décisions prises par Luz Psíquica à cet égard seront définitives dans le cadre opérationnel de la plateforme et ne donneront lieu à aucune compensation supplémentaire, intérêts, indemnisation ou réclamation autre que les ajustements techniques éventuellement déterminés.\n",
      
      s9Title: "9. Infractions graves",
      s9Body: "Sont considérées comme infractions graves, à titre indicatif et non limitatif, les comportements portant gravement atteinte à la sécurité, au respect, à la légalité ou à la coexistence au sein de la plateforme, notamment les insultes, menaces, harcèlement, diffusion de contenus pornographiques, contenus sexuels explicites, comportements offensants ou discriminatoires, ou actes contraires à la morale, à l’ordre public et au respect mutuel.\n\nLa commission d’infractions graves peut entraîner la fermeture définitive et immédiate du compte de l’utilisateur ou du médium, sans avertissement préalable, lorsque la gravité des faits, la répétition des comportements ou les risques pour les autres utilisateurs ou pour l’intégrité de la plateforme le justifient.\n\nDans les cas d’une gravité particulière, et lorsqu’il existe des preuves internes suffisantes et vérifiables de non-respect des règles, Luz Psíquica peut procéder à la fermeture définitive du compte sans reconnaissance de paiements, de soldes accumulés, d’avantages en attente ou de toute forme de compensation, sans préjudice des actions judiciaires éventuellement applicables.\n",

      s10Title: "10. Retrait volontaire de l’utilisateur",
      s10Body: "L’utilisateur peut demander à tout moment son retrait volontaire de la plateforme au moyen des mécanismes et outils mis à disposition au sein de l’application.\n\nUne fois la demande effectuée et expressément confirmée par l’utilisateur, le compte sera supprimé immédiatement, mettant fin à la relation entre l’utilisateur et la plateforme, sans préjudice de l’exécution des obligations préalablement contractées.\n\nLe retrait volontaire ne donne en aucun cas droit à un remboursement, une compensation, une indemnisation ou une restitution des sommes versées pour les services acquis, y compris les minutes non utilisées au moment de la suppression du compte.\n\nLes minutes disponibles au moment du retrait ne peuvent être converties en argent, transférées ou revendiquées comme solde en dehors de la plateforme.\n\nL’utilisateur reconnaît et accepte expressément que les services acquis sont de nature non remboursable et que cette condition a été clairement communiquée avant l’utilisation de la plateforme.\n\nLa demande de retrait et son traitement seront effectués conformément aux procédures internes de Luz Psíquica, sans que cela n’implique une quelconque obligation de compensation financière de la part de la plateforme.\n",

      s11Title: "11. Utilisation des technologies intégrées de l’appareil",
      s11Body: "L’application Luz Psíquica peut demander l’accès à certaines technologies intégrées de l’appareil de l’utilisateur, telles que la caméra et le microphone, uniquement lorsque l’utilisateur décide volontairement de les utiliser dans le cadre des fonctionnalités disponibles de l’application.\n\nL’accès à la caméra est demandé exclusivement lorsque l’utilisateur choisit de téléverser une image, par exemple une photo de profil. L’accès au microphone est utilisé uniquement lors des interactions de communication vocale au sein de la plateforme. En aucun cas l’application n’utilise des fonctions d’enregistrement vidéo.\n\nL’application n’utilise pas la caméra ni le microphone en arrière-plan et n’accède pas à ces technologies sans l’interaction directe et le consentement explicite de l’utilisateur. De même, Luz Psíquica ne capture aucune image, aucun son ni aucun autre contenu sans l’autorisation expresse de l’utilisateur.\n\nLes images et les enregistrements audio fournis par l’utilisateur sont utilisés exclusivement à des fins fonctionnelles et opérationnelles au sein de l’application et ne sont pas partagés avec des tiers sans l’autorisation expresse de l’utilisateur, sauf lorsque cela est strictement nécessaire à la fourniture du service conformément aux conditions de la plateforme.\n\nL’utilisateur peut révoquer à tout moment les autorisations accordées à la caméra et au microphone depuis les paramètres du système d’exploitation de son appareil, ce qui peut limiter ou empêcher l’utilisation de certaines fonctionnalités de l’application.\n",

      s12Title: "12. Contact",
      s12Intro: "Pour toute question, plainte, réclamation ou demande relative au fonctionnement de l’application, l’utilisateur peut contacter Luz Psíquica par le biais des canaux de contact mis à disposition au sein de la plateforme.\n\nLes communications reçues seront traitées conformément aux procédures internes de l’application et dans des délais raisonnables, selon la nature de la demande.\n"
    },

    operational_header_title: 'Document opérationnel',
    operational: {
      title: "Document opérationnel",
      meta: "Version : {{version}} · Date : {{date}} · Plateforme : {{platform}}",

      s1Heading: "1. Objet du document",
      s1Body: "Le présent Document de Fonctionnement Opérationnel a pour finalité de décrire de manière claire, transparente et technique le fonctionnement général de la plateforme Luz Psíquica, ainsi que d’établir les règles opérationnelles, techniques et fonctionnelles selon lesquelles le service est fourni aux clients et aux voyants. Ce document fait partie intégrante du cadre juridique de la plateforme et est obligatoire pour tous les utilisateurs qui utilisent l’application.",

      s2Heading: "2. Description générale de la plateforme",
      s2Body: "Luz Psíquica est une plateforme numérique qui permet la communication entre clients et voyants via des services de chat et d’appels vocaux, en utilisant un système de minutes prépayées achetées par les clients. De plus, la plateforme peut proposer des contenus audiovisuels liés à son activité, à des fins informatives, promotionnelles, commerciales ou de positionnement de marque. La plateforme agit en tant qu’intermédiaire technologique, en fournissant l’infrastructure technique, les systèmes de paiement, le contrôle des sessions, la gestion des minutes et la liquidation économique correspondante aux voyants.",

      s3Heading: "3. Rôles au sein de la plateforme",
      s31Heading: "3.1 Client",
      s31Body: "Utilisateur qui achète des minutes et accède aux services de consultation via chat ou appel.",
      s32Heading: "3.2 Voyant",
      s32Body: "Utilisateur autorisé qui fournit des services de consultation aux clients et reçoit une rémunération\nfinancière selon le temps effectivement consommé.",
      s33Heading: "3.3 Administrateur",
      s33Body: "Utilisateur chargé de la supervision, de la validation, de la maintenance et de l’exploitation générale de la\nplateforme.",

      s4Heading: "4. Fonctionnement opérationnel du service",
      s41Heading: "4.1 Inscription et accès",
      s41Body: "• Les utilisateurs doivent s’inscrire avec des informations valides.\n• Les clients peuvent créer un compte et acheter des minutes.\n• Les voyants doivent être autorisés par la plateforme avant de fournir le service.",
      s42Heading: "4.2 Achat de minutes",
      s42Body: "• Les minutes sont achetées via une passerelle de paiement.\n• Les minutes sont prépayées et consommées pendant les sessions.\n• La plateforme définit les prix, les forfaits, les remises et les règles opérationnelles.",
      s43Heading: "4.3 Connexion et disponibilité",
      s43Body: "• Le client sélectionne un voyant disponible.\n• La session ne démarre que si le client dispose de suffisamment de minutes achetées.\n• La plateforme gère le contrôle du temps et de la consommation.",

      s5Heading: "5. Sessions, consommation de minutes et contrôle antifraude",
      s51Heading: "5.1 Contrôle des sessions",
      s51Body: "• La consommation est comptabilisée à la minute en chat ou en appel.\n• Le système ferme les sessions en cas d’inactivité ou de fin.\n• Des contrôles sont appliqués pour éviter des usages anormaux ou la fraude.",
      s52Heading: "5.2 Interdiction d’échanger des données personnelles",
      s52Body: "• Il est interdit d’échanger des données personnelles ou de contact.\n• Il est interdit de déplacer la relation commerciale hors de la plateforme.\n• Le non-respect peut entraîner une suspension ou une fermeture.",

      s6Heading: "6. Validation et fonctionnement du rôle de voyant",
      s61Heading: "6.1 Conditions du voyant",
      s61Body: "• Le voyant doit être approuvé par la plateforme.\n• Il doit fonctionner selon les règles internes.\n• Il peut être suspendu en cas de manquements, de plaintes ou de fraude.",

      s7Heading: "7. Paiement des voyants et liquidation économique",
      s71Heading: "7.1 Liquidation économique",
      s71Body: "• La plateforme effectue la liquidation selon les minutes effectivement consommées.\n• La rémunération est déterminée conformément aux règles internes de la plateforme et à l’enregistrement interne des transactions effectuées.\n• Les paiements sont regroupés et exécutés selon des cycles définis.",

      s8Heading: "8. Actifs sonores, musicaux et audiovisuels de la plateforme",
      s81Heading: "8.1 Nature des actifs",
      s81Body: "La plateforme utilise des actifs numériques qui incluent, entre autres :\n• sonneries d’appels entrants\n• sons de notification et alertes du système\n• musique intégrée dans des contenus audiovisuels\n• vidéos promotionnelles, informatives ou commerciales\nCes actifs font partie intégrante de l’expérience fonctionnelle, communicative et de marque\nde Luz Psíquica.",
      s82Heading: "8.2 Origine des actifs",
      s82Body: "Les actifs sonores, musicaux et audiovisuels utilisés par la plateforme :\n• ont été créés spécifiquement pour Luz Psíquica\n• sont développés via des processus créatifs propres, pouvant inclure l’utilisation d’outils d’intelligence artificielle générative, toujours sous la direction, le contrôle et la curation de la plateforme\n• ne correspondent pas à des œuvres musicales commerciales ni à des contenus audiovisuels de tiers destinés à une exploitation indépendante",
      s83Heading: "8.3 Contenus audiovisuels et diffusion externe",
      s83Body: "Les contenus audiovisuels produits par Luz Psíquica :\n• peuvent être commercialisés, distribués ou diffusés dans et hors de l’application\n• peuvent être publiés sur des plateformes numériques et des réseaux sociaux\n• peuvent inclure de la musique, des images, des animations, des textes et des voix générés ou assistés par l’IA\nLa diffusion de ces contenus n’implique aucune cession de droits aux utilisateurs, voyants ou tiers.",
      s84Heading: "8.4 Propriété intellectuelle",
      s84Body: "• Tous les actifs sonores, musicaux et audiovisuels sont la propriété exclusive de Luz Psíquica, ou disposent des licences nécessaires à leur utilisation.\n• Ils ne sont pas personnalisables par les utilisateurs.\n• Ils ne peuvent pas être extraits, réutilisés, distribués, revendus ni exploités hors de la plateforme sans autorisation expresse et écrite.",
      s85Heading: "8.5 Finalité d’utilisation",
      s85Body: "Les actifs décrits :\n• remplissent une fonction technique, opérationnelle, communicative et commerciale\n• ne constituent pas des œuvres artistiques indépendantes pour une exploitation individuelle\n• ne génèrent aucun droit économique, d’auteur ou de participation pour les utilisateurs ou voyants",

      s9Heading: "9. Limitations techniques et opérationnelles",
      s9Body: "• La plateforme dépend d’une connexion internet.\n• Des pannes techniques, interruptions réseau ou opérations de maintenance peuvent affecter temporairement le service.\n• Luz Psíquica ne garantit pas une disponibilité continue et ininterrompue.",

      s10Heading: "10. Modifications du service",
      s10Body: "Luz Psíquica se réserve le droit de :\n• modifier les fonctionnalités\n• ajuster les règles opérationnelles\n• mettre à jour les systèmes de paiement, de communication ou les contenus\nCes modifications peuvent être réalisées pour améliorer l’expérience utilisateur ou pour des raisons techniques, juridiques ou opérationnelles.",

      s11Heading: "11. Acceptation du document",
      s11Body: "L’utilisation de la plateforme implique l’acceptation expresse de ce Document de\nFonctionnement Opérationnel, ainsi que des autres documents juridiques associés.",

      s12Heading: "12. Informations supplémentaires",
      s12Body: "Responsable du développement technologique de la plateforme :\nAndrés Loaiza\nLa conception, le développement technique, l’architecture fonctionnelle et l’exploitation technologique de la plateforme Luz Psíquica ont été réalisés sous la direction du responsable mentionné, en coordination avec les objectifs, principes éthiques et lignes directrices opérationnelles de la plateforme.\nNote finale\nCe document est publié dans le cadre de l’engagement de Luz Psíquica en faveur de la transparence, de l’éthique technologique, de la créativité responsable et de la clarté opérationnelle."
    }
  },

  de: {
    nav_home: 'Start',
    nav_legal: 'Rechtliches',
    nav_lang: 'Sprache',
    lang_title: 'Sprache auswählen',
    legal_title: 'Rechtliches',
    legal_body: 'Hier integrieren wir AGB, Datenschutz und rechtliche Hinweise vor dem finalen Release.',
    close: 'Schließen',

    login_header_title: 'Anmelden',
    login_title: 'Luz Psíquica',
    login_subtitle: 'Melden Sie sich an, um fortzufahren',
    login_email_or_phone: 'E-Mail oder Telefon',
    login_phone_helper: 'Wenn Sie eine Telefonnummer verwenden, geben Sie diese im internationalen Format ein (z. B. +49 170 0000000).',
    login_password: 'Passwort',
    login_enter: 'Anmelden',
    login_forgot: 'Passwort vergessen?',
    login_client_register: 'Kunde? Konto erstellen',
    login_psychic_apply: 'Hellseher? Jetzt bewerben',
    login_error_title: 'Anmeldefehler',
    login_missing_credentials: 'Bitte geben Sie Ihre Telefonnummer und Ihr Passwort ein.',

    agora_title: 'Anruf (Platzhalter)',
    agora_psychic: 'Hellseher',
    agora_room: 'Raum',
    agora_call_id: 'CallId',
    agora_initial_minutes: 'Startminuten',
    agora_socket: 'Socket',
    agora_status: 'Status',
    agora_back: 'Zurück',
    agora_note:
      '* Wenn der Kunde auflegt oder der Hellseher ablehnt, sollte sich dieser Bildschirm automatisch schließen (Socket + Polling).',

    call_end_title: 'Anruf beendet',
    call_end_ok: 'OK',
    call_end_default: 'Der Anruf wurde beendet.',
    call_end_missed: 'Der Anruf wurde abgelehnt/verpasst.',
    call_end_cancelled: 'Der Anruf wurde abgebrochen (keine Kosten).',
    call_end_caller_hungup: 'Der Kunde hat aufgelegt.',

    cfg_error_title: 'Konfigurationsfehler',
    cfg_error_body: 'EXPO_PUBLIC_API_URL ist nicht konfiguriert.',
    error_title: 'Fehler',
    error_no_callid: 'callId wurde nicht empfangen.',
    session_expired_title: 'Sitzung abgelaufen',
    session_expired_body: 'Kein authentifizierter Benutzer gefunden.',
    psychic_fallback_name: 'Hellseher',
    dash_placeholder: '—',

    buy_minutes_header_title: 'Minuten kaufen',

    buy_minutes_title: 'Minuten kaufen',
    buy_minutes_subtitle:
      'Kaufe Minutenpakete (PayPal). Der Verbrauch wird bei Anrufen und Chat abgezogen.',
    buy_minutes_current_balance: 'Deine aktuellen Minuten',
    buy_minutes_pending_title: 'Zahlung ausstehend',
    buy_minutes_order: 'Bestellung',
    buy_minutes_total: 'Gesamt',
    buy_minutes_confirming: 'Zahlung wird bestätigt...',
    buy_minutes_return_hint: 'Kehre zur App zurück, nachdem du in PayPal bestätigt hast.',
    buy_minutes_paid_fallback: 'Ich habe bereits bezahlt (Fallback)',
    buy_minutes_cancel: 'Abbrechen',
    buy_minutes_pkg_minutes: 'Minuten',
    buy_minutes_tap_to_pay: 'Tippe, um PayPal-Zahlung zu starten',

    session_expired: 'Ihre Sitzung ist abgelaufen. Bitte melden Sie sich erneut an.',
    paypal_approve_url_missing: 'PayPal hat keine Genehmigungs-URL zurückgegeben.',

    payment_success_balance:
      'Zahlung erfolgreich. {{added}} Minuten wurden gutgeschrieben. Neuer Kontostand: {{balance}}.',
    payment_confirmed_balance:
      'Zahlung bestätigt. Aktualisierter Kontostand: {{balance}}.',

    discount_label: 'Rabatt: {{pct}}%',

    paypal_continue_title: 'Weiter zu PayPal',
    paypal_continue_body:
      'Bestätige die Zahlung in PayPal.\n\nWenn du zur App zurückkehrst, wird sie automatisch bestätigt.',

    purchase_success_title: 'Kauf erfolgreich',
    purchase_success_body:
      'Zahlung bestätigt.\n{{added}} Minuten wurden hinzugefügt.',

    payment_cancelled_title: 'Zahlung abgebrochen',
    payment_cancelled_body: 'Du hast die Zahlung in PayPal abgebrochen.',

    err_title: 'Fehler',
    err_load_minutes: 'Minutensaldo konnte nicht geladen werden.',
    err_no_config: 'EXPO_PUBLIC_API_URL ist nicht konfiguriert',
    err_not_auth: 'Benutzer nicht authentifiziert',
    err_create_order: 'PayPal-Bestellung konnte nicht erstellt werden.',
    err_open_paypal: 'PayPal konnte auf diesem Gerät nicht geöffnet werden.',
    err_capture_payment: 'Zahlung konnte nicht erfasst werden.',
    err_auto_finish_title: 'Automatisches Abschließen nicht möglich',
    err_auto_finish_body:
      'Die Zahlung ist noch nicht bestätigt. Wenn du gerade bestätigt hast, versuche es in ein paar Sekunden erneut.',
    err_read_paypal_token: 'PayPal-Token konnte nicht gelesen werden, um den Kauf abzuschließen.',

    pending_still_not_confirmed_title: 'Zahlung noch nicht bestätigt',
    pending_still_not_confirmed_body:
      'Noch keine Erfassung möglich. Prüfe, ob du in PayPal bestätigt hast, und versuche es erneut.',
    retry: 'Erneut versuchen',
    dash_placeholder2: '--',
    minutes_suffix: 'min',

    callhist_header_title: 'Anrufverlauf',

    callhist_title_default: 'Anrufverlauf',
    callhist_title_with_name: 'Anrufverlauf',

    callhist_loading: 'Verlauf wird geladen…',
    callhist_back_dashboard: 'Zurück zum Dashboard',
    callhist_refresh: 'Verlauf aktualisieren',
    callhist_empty: 'Du hast noch keine Sitzungen gespeichert.',
    callhist_not_enough_data: 'Noch nicht genug Daten.',

    callhist_summary_minutes_title: 'Minutenübersicht',
    callhist_summary_earnings_title: 'Einnahmenübersicht',

    callhist_minutes_available: 'Verfügbare Minuten',
    callhist_minutes_spent_calls: 'Verbrauchte Minuten (📞)',
    callhist_minutes_spent_chats: 'Verbrauchte Minuten (💬)',
    callhist_minutes_spent_total: 'Gesamt verbraucht',

    callhist_minutes_earned_calls: 'Verdiente Minuten (📞)',
    callhist_minutes_earned_chats: 'Verdiente Minuten (💬)',
    callhist_minutes_earned_total: 'Gesamt verdiente Minuten',
    callhist_earnings_total: 'Gesamteinnahmen',

    callhist_summary_by_client: 'Zusammenfassung nach Kunde',
    callhist_summary_by_psychic: 'Zusammenfassung nach Hellseher',

    callhist_status_finished: 'Beendet',
    callhist_status_missed: 'Abgelehnt/Verpasst',
    callhist_status_ongoing: 'Läuft',
    callhist_status_cancelled: 'Abgebrochen',
    callhist_placeholder: '—',

    callhist_type_chat: '💬 Chat',
    callhist_type_voice: '📞 Anruf',

    callhist_start: 'Start',
    callhist_end: 'Ende',

    callhist_duration: '⏱ {{secs}}s',
    callhist_minutes_charged: '⌛ {{mins}} berechnete Minuten',
    callhist_no_charge: ' · Keine Kosten',
    callhist_earning_line: ' · 💰 ${{usd}} USD',

    callhist_rate_your_rating: 'Deine Bewertung: {{rating}}/5',
    callhist_rate_prompt: 'Diesen Anruf bewerten:',
    callhist_rate_saving: 'Wird gespeichert…',

    callhist_rate_confirm_title: 'Bewertung bestätigen',
    callhist_rate_confirm_body: 'Möchtest du {{stars}} Sterne vergeben?',
    callhist_cancel: 'Abbrechen',
    callhist_yes: 'Ja',

    callhist_thanks: 'Danke',
    callhist_rate_saved: 'Deine Bewertung wurde gespeichert.',

    callhist_err_config_title: 'Konfigurationsfehler',
    callhist_err_config_body: 'EXPO_PUBLIC_API_URL ist nicht konfiguriert.',
    callhist_err_session_title: 'Sitzung abgelaufen',
    callhist_err_session_body_token: 'Token nicht gefunden. Bitte erneut anmelden.',
    callhist_err_session_body_login: 'Bitte erneut anmelden.',
    callhist_err_title: 'Fehler',
    callhist_err_load: 'Verlauf konnte nicht geladen werden.',
    callhist_err_rate_save: 'Bewertung konnte nicht gespeichert werden.',

    callhist_psychic_fallback: 'Hellseher',

    chat_header_title: 'Chat mit {{name}}',

    chat_loading_session: 'Sitzung wird geladen…',
    chat_not_available_title: 'Chat nicht verfügbar',
    chat_not_available_body: 'Fehlende Daten zum Öffnen des Chats: {{missing}}.',
    chat_not_available_hint: '(Prüfe, ob otherUserId übergeben wird und EXPO_PUBLIC_API_URL existiert)',

    chat_block_unavailable: '⛔ Der Hellseher ist nicht verfügbar. Du kannst den Chat sehen, aber keine Nachrichten senden.',
    chat_block_no_minutes: '⛔ Du hast keine Minuten mehr. Du kannst den Verlauf sehen, musst aber Minuten kaufen, um zu chatten.',

    chat_inactivity_warning_prefix: '⚠️ Inaktivität erkannt. Der Chat wird in {{sec}}s pausiert.',
    chat_timeout_bar: '⏸️ Chat wegen Inaktivität pausiert. {{msg}}',
    chat_timeout_client_hint: 'Schreibe oder tippe auf „Fortsetzen“.',
    chat_timeout_other_hint: 'Warte auf den Kunden.',
    chat_resume: 'Fortsetzen',

    chat_loading_conversation: 'Konversation wird geladen…',
    chat_block_offline_psychic: 'Berater offline. Versuche es später erneut.',
    chat_policy_personal_info: '⚠️ Du darfst keine persönlichen Daten senden (Telefon, E-Mail oder Adresse). Bitte umformulieren.',
    chat_block_unavailable_short: '⛔ Der Hellseher ist gerade nicht verfügbar. Du kannst keine Nachrichten senden.',
    chat_block_no_minutes_short: '⛔ Du hast keine Minuten zum Chatten. Kaufe Minuten, um fortzufahren.',
    chat_block_wait_client_start: '⏳ Warte, bis der Kunde den Chat startet (erste Nachricht des Kunden).',
    chat_block_client_inactive: '⏸️ Chat wegen Inaktivität des Kunden pausiert. Warte, bis der Kunde fortsetzt.',
    chat_block_session_closed: '⛔ Die Sitzung ist geschlossen. Du musst eine neue Sitzung starten.',
    chat_network_error_send: 'Netzwerkfehler beim Senden der Nachricht.',

    chat_placeholder_unavailable: 'Hellseher nicht verfügbar…',
    chat_placeholder_no_minutes: 'Keine Minuten…',
    chat_placeholder_paused: 'Chat pausiert…',
    chat_placeholder_timeout: 'Chat wegen Inaktivität pausiert…',
    chat_placeholder_write: 'Schreibe deine Nachricht…',
    chat_placeholder_offline_psychic: 'Du kannst keine Nachrichten senden',

    chat_send: 'Senden',
    chat_sending_dots: '…',

    chat_other_psychic: 'Hellseher',
    chat_other_client: 'Kunde',
    chat_other_chat: 'Chat',

    clientdash_header_title: 'Kunden-Dashboard',

    clientdash_title: 'Mein Dashboard',
    clientdash_subtitle: '{{name}}, hier kannst du dein Minuten-Guthaben und deine Anrufe prüfen.',

    clientdash_quick_summary: 'Schnellübersicht',
    clientdash_loading_info: 'Informationen werden geladen…',
    clientdash_minutes_available: 'Verfügbare Minuten:',
    clientdash_calls_made: 'Getätigte Anrufe:',

    clientdash_last_calls: 'Letzte Anrufe',
    clientdash_view_history: 'Verlauf ansehen',
    clientdash_loading_history: 'Verlauf wird geladen…',
    clientdash_status_finished: "Abgeschlossen",
    clientdash_status_missed: "Verpasst",
    clientdash_status_ongoing: "Laufend",
    clientdash_status_cancelled: "Abgebrochen",
    clientdash_status_unknown: "—",
    clientdash_no_calls: 'Du hast noch keine Anrufe.',
    clientdash_view_full_history: 'Gesamten Verlauf ansehen',

    clientdash_actions: 'Aktionen',
    clientdash_go_psychics: 'Zur Hellseher-Liste',
    clientdash_go_chat: 'Zum Chat',

    clientdash_select_psychic_title: 'Wähle einen Hellseher',
    clientdash_select_psychic_body: 'Um den Chat zu öffnen, musst du zuerst einen Hellseher aus der Liste wählen.',

    clientdash_error_config_title: 'Konfigurationsfehler',
    clientdash_error_config_body: 'EXPO_PUBLIC_API_URL ist nicht konfiguriert.',

    clientdash_session_expired_title: 'Sitzung abgelaufen',
    clientdash_session_expired_body: 'Token nicht gefunden. Bitte erneut anmelden.',

    clientdash_error_title: 'Fehler',
    clientdash_error_body: 'Dashboard-Daten konnten nicht geladen werden. Bitte später erneut versuchen.',
    clientdash_chat_error_body: 'Chat kann gerade nicht geöffnet werden. Bitte erneut versuchen.',

    clientdash_buy_minutes: 'Minuten kaufen',

    clientdash_no_minutes_title: 'Sie haben keine Minuten verfügbar',
    clientdash_no_minutes_body: 'Kaufen Sie Minuten, um Chats und Anrufe mit Ihren spirituellen Beratern zu starten.',

    clientdash_low_minutes_title: 'Ihre Minuten gehen zur Neige',
    clientdash_low_minutes_body: 'Sie haben noch {{n}} Minuten. Kaufen Sie weitere, um die App ohne Unterbrechungen weiter zu nutzen.',
    clientdash_delete_account_title: 'Konto löschen',
    clientdash_delete_account_body: 'Wenn Sie Ihr Konto dauerhaft schließen möchten, können Sie hier fortfahren. Diese Aktion führt Sie zu einem sicheren Bestätigungsbildschirm.',
    clientdash_delete_account_cta:'Weiter zum Löschen des Kontos',

    delete_account_header_title: 'Konto löschen',
    delete_account_title: 'Konto löschen',
    delete_account_subtitle: 'Sie verwalten die dauerhafte Löschung Ihres Kontos.',
    delete_account_subtitle_with_name: 'Sie verwalten die Löschung des Kontos von {{name}}.',
    delete_account_success_title: 'Konto gelöscht',
    delete_account_success_body: 'Ihr Konto wurde erfolgreich gelöscht.',
    delete_account_success_ok: 'OK',
    delete_account_error_title: 'Fehler beim Löschen des Kontos',
    delete_account_error_body: 'Das Konto konnte nicht gelöscht werden. Bitte versuchen Sie es erneut.',
    delete_account_confirm_title: 'Löschung bestätigen',
    delete_account_confirm_body: 'Diese Aktion ist dauerhaft und kann nicht rückgängig gemacht werden.',
    delete_account_confirm_cta: 'Mein Konto löschen',
    delete_account_confirm_section_title: 'Bestätigung',
    delete_account_confirm_check_label: 'Ich verstehe, dass diese Aktion dauerhaft ist und möchte fortfahren.',
    delete_account_confirm_required_title: 'Bestätigung erforderlich',
    delete_account_confirm_required_body:  'Sie müssen bestätigen, dass Sie verstehen, dass diese Aktion dauerhaft ist.',
    delete_account_cancel_cta: 'Abbrechen',
    delete_account_password_label: 'Aktuelles Passwort',
    delete_account_password_helper: 'Sie können Ihr Passwort als zusätzliche Bestätigung eingeben. Dieses Feld ist optional.',
    delete_account_password_placeholder: 'Geben Sie Ihr Passwort ein (optional)',
    delete_account_warning_title: 'Wichtiger Hinweis',
    delete_account_warning_body: 'Wenn Sie Ihr Konto löschen, verlieren Sie den Zugriff auf Ihr Profil und die zugehörigen Informationen.',
    delete_account_warning_point_1: 'Sie können sich nach der Löschung nicht mehr mit diesem Konto anmelden.',
    delete_account_warning_point_2: 'Diese Aktion ist als dauerhafte Löschung vorgesehen.',
    delete_account_warning_point_3: 'Bevor Sie fortfahren, stellen Sie sicher, dass Sie Ihr Konto wirklich schließen möchten.',
    delete_account_processing: 'Konto wird gelöscht...',

    clienthome_header_title: 'Start (Kunde)',
    clienthome_register: 'Registrieren',
    clienthome_logout: 'Abmelden',

    clienthome_welcome: 'Willkommen',
    clienthome_welcome_name: 'Willkommen, {{name}}',

    clienthome_subtitle: 'Wähle einen verfügbaren Hellseher für Audio- oder Chat-Beratung.',
    clienthome_my_panel: 'Mein Dashboard',
    clienthome_login: 'Anmelden',
    clienthome_loading_psychics: 'Hellseher werden geladen…',
    clienthome_empty: 'Derzeit sind keine Hellseher registriert.',

    languages: {
      es: 'Spanisch',
      en: 'Englisch',
      fr: 'Französisch',
      de: 'Deutsch',
      pt: 'Portugiesisch',
      it: 'Italienisch',
    },

    clienthome_psychic_available: 'Verfügbar',
    clienthome_psychic_not_available: 'Nicht verfügbar',
    clienthome_psychic_busy_label: 'Beschäftigt',
    clienthome_psychic_offline_suffix: ' (offline)',
    clienthome_busy_in_call: 'Beschäftigt (im Anruf)',

    clienthome_call_now: 'Jetzt anrufen',
    clienthome_chat: 'Chat',

    clienthome_comments: 'Kommentare',
    clienthome_comments_sent: 'Kommentare (gesendet)',

    clienthome_psychic_not_available_title: 'Hellseher nicht verfügbar',
    clienthome_psychic_not_available_body: 'Dieser Hellseher ist im Moment nicht verfügbar.',

    clienthome_session_expired_title: 'Sitzung abgelaufen',
    clienthome_session_expired_body: 'Bitte erneut anmelden.',

    clienthome_no_minutes_title: 'Keine Minuten',
    clienthome_no_minutes_body: 'Du hast nicht genug Guthaben.',
    clienthome_no_minutes_cancel: 'Abbrechen',
    clienthome_no_minutes_buy: 'Minuten kaufen',

    clienthome_error_title: 'Fehler',
    clienthome_error_load_psychics: 'Liste der Hellseher konnte nicht geladen werden.',
    clienthome_error_invalid_server: 'Ungültige Serverantwort.',
    clienthome_error_unexpected_format: 'Unerwartetes Format der Hellseher-Liste.',
    clienthome_error_invalid_response: 'Ungültige Serverantwort.',

    clienthome_snippet_fallback: 'Hellseher verfügbar, um dir zu helfen.',

    clienthome_call_start_error: 'Der Anruf konnte nicht gestartet werden. Bitte versuche es erneut.',

    app_layout_default_title: "Luz Psíquica",
    app_layout_logo_alt: "Luz Psíquica",
    app_layout_footer_home: "Startseite",
    app_layout_footer_legal: "Rechtliches",
    app_layout_footer_language: "Sprache",
    app_layout_language_modal_title: "Sprache auswählen",
    app_layout_language_name_es: "Spanisch",
    app_layout_language_name_en: "Englisch",
    app_layout_language_name_fr: "Französisch",
    app_layout_language_name_de: "Deutsch",
    app_layout_language_name_pt: "Portugiesisch",
    app_layout_language_name_it: "Italienisch",
    common: {
      close: "Schließen"
    },

    network_error_title: 'Fehler',
    network_error_message: 'Verbindung zum Server fehlgeschlagen. Bitte überprüfe deine Verbindung und versuche es erneut.',
    generic_error_message: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.',

    directcall_config_error_title: 'Konfigurationsfehler',
    directcall_config_error_body: 'EXPO_PUBLIC_API_URL ist nicht konfiguriert.',

    directcall_session_expired_title: 'Sitzung abgelaufen',
    directcall_session_expired_body_login_again: 'Bitte melde dich erneut an.',
    directcall_session_expired_body_token_missing: 'Token nicht gefunden. Bitte erneut anmelden.',
    directcall_session_expired_body_call: 'Bitte melde dich an, um einen Anruf zu starten.',

    directcall_error_title: 'Fehler',
    directcall_error_missing_psychic: 'Keine Informationen zum Hellseher gefunden.',
    directcall_error_start_call: 'Der Anruf konnte nicht gestartet werden.',
    directcall_error_invalid_call_params: 'Der Server hat keine gültigen Anruf-Parameter zurückgegeben.',

    directcall_cannot_start_title: 'Anruf kann nicht gestartet werden',
    directcall_cannot_start_no_minutes_fallback: 'Nicht genug Minuten',
    directcall_cancel: 'Abbrechen',
    directcall_buy_minutes: 'Minuten kaufen',

    directcall_connecting_with: 'Verbinde Beratung mit',
    directcall_psychic_fallback: 'Hellseher',

    directcall_hint_starting: 'Anruf wird gestartet…',
    directcall_hint_loading: 'Lädt…',
    directcall_hint_ready: 'Bereit',

    directcall_note_no_answer: '* Wenn der Hellseher nicht antwortet, kannst du einen anderen aus der Liste wählen.',

    forgot_header_title: 'Passwort zurücksetzen',
    
    forgot_title: 'Passwort zurücksetzen',

    forgot_subtitle: 'Gib deine E-Mail-Adresse oder Telefonnummer ein, um den Wiederherstellungscode zu erhalten.',

    forgot_field_label_email_or_phone: 'E-Mail oder Telefon',
    forgot_placeholder_email_or_phone: 'E-Mail oder Telefon',

    forgot_required_title: 'Pflichtfeld',
    forgot_required_email_or_phone: 'Gib deine E-Mail oder Telefonnummer ein.',
    forgot_required_code: 'Gib den erhaltenen Code ein.',

    forgot_send_code: 'Code senden',
    forgot_step2_help: 'Wir haben dir einen Code gesendet. Gib ihn hier ein und setze dein neues Passwort.',

    forgot_done_body_sms: 'Wir haben Ihnen einen Code per SMS gesendet, um Ihr Passwort zurückzusetzen. Bitte überprüfen Sie ihn und geben Sie ihn unten ein.',
    forgot_step2_help_sms: 'Wenn Sie den Code nicht erhalten, überprüfen Sie Ihre Telefonnummer oder fordern Sie einen neuen an.',

    forgot_code_label: 'Code',
    forgot_code_placeholder: 'Code (6 Ziffern)',

    forgot_new_password_label: 'Neues Passwort',
    forgot_new_password_placeholder: 'Neues Passwort',

    forgot_confirm_password_label: 'Passwort bestätigen',
    forgot_confirm_password_placeholder: 'Passwort bestätigen',

    forgot_weak_password_title: 'Schwaches Passwort',
    forgot_weak_password_body: 'Das Passwort muss mindestens 6 Zeichen lang sein.',

    forgot_not_match_title: 'Stimmt nicht überein',
    forgot_not_match_body: 'Die Passwörter stimmen nicht überein.',

    forgot_done_title: 'Erledigt',
    forgot_done_body_generic: 'Wenn der Benutzer existiert, senden wir einen Code zum Zurücksetzen des Passworts.',

    forgot_error_title: 'Fehler',
    forgot_error_send_code: 'Der Code konnte nicht gesendet werden.',
    forgot_error_reset: 'Das Passwort konnte nicht geändert werden.',

    forgot_password_updated_title: 'Passwort aktualisiert',
    forgot_password_updated_body: 'Du kannst dich jetzt mit deinem neuen Passwort anmelden.',

    forgot_change_password: 'Passwort ändern',

    forgot_resend_code: 'Code erneut senden',
    forgot_back_to_login: 'Zurück zum Login',

    forgot_show_password_a11y: 'Passwort anzeigen',
    forgot_hide_password_a11y: 'Passwort verbergen',

    legal_home_header_title: 'Rechtliches',
    legal_home_title: 'Rechtliches',
    legal_home_meta: 'Wähle das Dokument aus, das du ansehen möchtest.',

    legal_home_card_privacy_title: 'Regeln & Datenschutz',
    legal_home_card_privacy_desc: 'Nutzungsbedingungen, Datenschutz, Rückerstattungen und allgemeine Regeln.',

    legal_home_card_operational_title: 'Betriebsdokument der Plattform',
    legal_home_card_operational_desc:
      'Technisch-operativer Ablauf, Rollen, Sitzungen, Minuten und Betriebsregeln.',

    common_back: 'Zurück',

    psych_callhist_header_title: 'Anrufverlauf',

    psych_callhist_title: 'Anrufverlauf',
    psych_callhist_session_expired_title: 'Sitzung abgelaufen',
    psych_callhist_session_expired_body: 'Bitte melde dich erneut an.',
    psych_callhist_error_title: 'Fehler',
    psych_callhist_error_load_history: 'Fehler beim Laden des Verlaufs',
    psych_callhist_error_load_history_fallback: 'Verlauf konnte nicht geladen werden.',
    psych_callhist_error_load_payout: 'Fehler beim Laden der Auszahlungssumme',

    psych_callhist_status_finished: 'Beendet',
    psych_callhist_status_missed: 'Abgelehnt/Verpasst',
    psych_callhist_status_ongoing: 'Laufend',
    psych_callhist_status_cancelled: 'Storniert',
    psych_callhist_status_unknown: '—',

    psych_callhist_client_fallback: 'Kunde',

    psych_callhist_start: 'Start',
    psych_callhist_end: 'Ende',
    psych_callhist_no_charge: 'Keine Belastung',

    psych_callhist_payout_block_title: 'Auszahlungsübersicht (PayPal)',
    psych_callhist_earned_total: 'Insgesamt verdient:',
    psych_callhist_paid_total: 'Ausgezahlt:',
    psych_callhist_pending_total: 'Ausstehend:',
    psych_callhist_last_payout: 'Letzte Auszahlung:',

    psych_callhist_info_block_title: 'Info-Übersicht',
    psych_callhist_calls: 'Anrufe:',
    psych_callhist_minutes_charged: 'Abgerechnete Minuten:',
    psych_callhist_estimated_earnings: 'Geschätzter Verdienst:',
    psych_callhist_info_hint: '*Dieser Wert ist informativ. Die tatsächliche Auszahlung basiert auf Abrechnungen.',

    psych_callhist_empty: 'Du hast noch keine Anrufe.',

    psych_call_perm_title: 'Mikrofonberechtigung',
    psych_call_perm_message_appname: 'Luz Psíquica benötigt Mikrofonzugriff für Sprachanrufe.',
    psych_call_perm_allow: 'Zulassen',
    psych_call_perm_deny: 'Abbrechen',

    psych_call_client_fallback: 'Kunde',
    psych_call_dash: '—',

    psych_call_end_title: 'Anruf beendet',
    psych_call_end_client_cancelled: 'Der Kunde hat den Anruf abgebrochen.',
    psych_call_end_missed_or_incomplete: 'Der Anruf wurde abgelehnt oder nicht abgeschlossen.',
    psych_call_end_error_title: 'Fehler',
    psych_call_end_error_body: 'Der Anruf konnte nicht korrekt beendet werden.',

    psych_call_audio_no_mic_permission: 'Keine Mikrofonberechtigung',
    psych_call_audio_session_expired: 'Sitzung abgelaufen',
    psych_call_audio_invalid_token: 'Ungültiges Sprach-Token',
    psych_call_audio_incomplete_data: 'Unvollständige Agora-Daten',
    psych_call_audio_sdk_unavailable: 'Agora-SDK nicht verfügbar',
    psych_call_audio_connect_error: 'Fehler beim Verbinden von Audio',

    psych_call_audio_status_error_prefix: 'Audiofehler: {{msg}}',
    psych_call_audio_status_connecting: 'Audio wird verbunden…',
    psych_call_audio_status_waiting_client: 'Audio verbunden. Warte auf den Kunden…',
    psych_call_audio_status_connected_client: 'Audio mit dem Kunden verbunden.',

    psych_call_title_in_progress: 'Anruf läuft',
    psych_call_room_label: 'Raum:',
    psych_call_time_label: 'Zeit:',
    psych_call_end_button: 'Anruf beenden',

    psych_chathist_title: 'Chatverlauf',
    psych_chathist_refresh: 'Aktualisieren',
    psych_chathist_refresh_busy: '…',
    psych_chathist_loading: 'Unterhaltungen werden geladen…',
    psych_chathist_empty: 'Es gibt noch keine Chats zum Anzeigen.',
    psych_chathist_error_load: 'Verlauf konnte nicht geladen werden',

    psych_chathist_readonly_note: 'Nur lesen (der/die Hellseher/in startet keine Chats)',

    psych_chathist_client_fallback: 'Kunde',
    psych_chathist_dash: '—',
    psych_chathist_initials_fallback: 'LP',

    psych_chatthread_title_with_name: 'Chat mit {{name}}',
    psych_chatthread_readonly_note: 'Nur lesen (der/die Hellseher/in startet keine Chats)',
    psych_chatthread_loading: 'Nachrichten werden geladen…',
    psych_chatthread_empty: 'Keine Nachrichten zum Anzeigen.',
    psych_chatthread_error_load: 'Chat konnte nicht geladen werden',

    psych_chatthread_client_fallback: 'Kunde',
    psych_chatthread_dash: '—',

    psych_comments_nav_title_with_name: 'Kommentare - {{name}}',
    psych_comments_psychic_fallback: 'Hellseher/in',
    psych_comments_client_prefix: 'Kunde',
    psych_comments_dash: '—',

    psych_comments_loading: 'Kommentare werden geladen…',
    psych_comments_loading_fallback: 'Kommentare werden geladen…',
    psych_comments_error_title: 'Fehler',
    psych_comments_err_no_api_url: 'EXPO_PUBLIC_API_URL ist nicht konfiguriert.',
    psych_comments_err_no_psychic_id: 'psychicId wurde nicht empfangen.',
    psych_comments_err_load_comments: 'Kommentare konnten nicht geladen werden',

    psych_comments_not_available_title: 'Nicht verfügbar',
    psych_comments_not_available_body: 'Du kannst erst nach dem Ende einer Beratung bewerten.',
    psych_comments_session_expired_title: 'Sitzung abgelaufen',
    psych_comments_session_expired_body: 'Bitte melde dich erneut an.',

    psych_comments_saved_title: 'Fertig!',
    psych_comments_saved_only_rating: 'Bewertung gespeichert. Du hast für diese/n Hellseher/in bereits einen Kommentar hinterlassen.',
    psych_comments_saved: 'Bewertung gespeichert.',

    psych_comments_err_save_rating: 'Bewertung konnte nicht gespeichert werden',

    psych_comments_info_line1_a: 'Dieser Bildschirm ist zum ',
    psych_comments_info_line1_strong: 'Ansehen',
    psych_comments_info_line1_b: ' von Kommentaren.',
    psych_comments_info_line2_a: 'Die ',
    psych_comments_info_line2_strong: 'Bewertung',
    psych_comments_info_line2_b: ' erfolgt nach einer abgeschlossenen Beratung.',
    psych_comments_info_line3_a: 'Der ',
    psych_comments_info_line3_strong1: 'Kommentar',
    psych_comments_info_line3_b: ' (Text) ist optional und nur ',
    psych_comments_info_line3_strong2: 'einmal pro Hellseher/in',
    psych_comments_info_line3_c: ' erlaubt.',

    psych_comments_form_title: 'Bewerte diese Beratung',
    psych_comments_form_label_rating: 'Bewertung',
    psych_comments_form_label_comment: 'Kommentar (optional)',
    psych_comments_locked_text:
      '✅ Du hast bereits einen Kommentar für diese/n Hellseher/in hinterlassen. Du kannst weiterhin Beratungen bewerten, aber keinen weiteren Kommentar schreiben.',
    psych_comments_input_placeholder: 'Schreibe deinen Kommentar (optional)...',

    psych_comments_saving: 'Wird gespeichert…',
    psych_comments_save_button: 'Bewertung speichern',

    psych_comments_empty: 'Noch keine Kommentare.',

    psych_dash_header_title: 'Dashboard des Hellsehers',
    psych_dash_logout: 'Abmelden',

    psych_dash_psychic_fallback: 'Hellseher/in',
    psych_dash_client_fallback: 'Kunde',
    psych_dash_room_dash: '—',

    psych_dash_config_error_title: 'Konfigurationsfehler',
    psych_dash_config_error_body_missing_api: 'EXPO_PUBLIC_API_URL ist nicht konfiguriert.',
    psych_dash_config_error_body_missing_api_env: 'EXPO_PUBLIC_API_URL ist nicht gesetzt. Prüfe deine .env-Datei.',

    psych_dash_session_expired_title: 'Sitzung abgelaufen',
    psych_dash_session_expired_body: 'Bitte melde dich erneut an.',
    psych_dash_session_expired_body_and_logout: 'Bitte melde dich erneut an.',

    psych_dash_info_title: 'Info',
    psych_dash_info_cant_load_application: 'Deine Bewerbung konnte nicht geladen werden. Bitte erneut versuchen.',

    psych_dash_nav_error_title: 'Navigationsfehler',
    psych_dash_nav_error_body_missing_route:
      'In diesem Stack ist die Route "PsychicRegister" nicht registriert.\n\nLösung: Füge diese Screen im SELBEN Stack hinzu, in dem PsychicDashboard ist:\n<Stack.Screen name="PsychicRegister" component={PsychicRegisterScreen} />',

    psych_dash_error_title: 'Fehler',
    psych_dash_error_refresh_info: 'Informationen konnten nicht aktualisiert werden',
    psych_dash_error_open_form: 'Formular konnte nicht geöffnet werden.',

    psych_dash_call_end_title: 'Anruf beendet',
    psych_dash_call_end_body_caller_cancelled: 'Der Kunde hat den Anruf abgebrochen.',
    psych_dash_call_end_body_finished: 'Der Anruf wurde beendet.',

    psych_dash_not_available_title: 'Nicht verfügbar',
    psych_dash_not_available_call_cancelled: 'Der Kunde hat den Anruf bereits abgebrochen.',

    psych_dash_modal_incoming_title: 'Eingehender Anruf',
    psych_dash_modal_incoming_sub: 'Antworte, um die Beratung zu starten',
    psych_dash_modal_client_label: 'Kunde:',
    psych_dash_modal_room_label: 'Raum:',
    psych_dash_modal_processing: 'Wird verarbeitet…',
    psych_dash_modal_reject: 'Ablehnen',
    psych_dash_modal_accept: 'Annehmen',
    psych_dash_modal_footnote: '* Die Abrechnung startet, sobald der/die Hellseher/in abnimmt.',

    psych_dash_header_role_line: 'Hellseher/in · Luz Psíquica',
    psych_dash_header_hint_calls: 'Wenn du verfügbar bist, erhältst du hier die Anrufe der Kunden in Echtzeit.',
    psych_dash_socket_status: 'Socket-Status: {{status}}',
    psych_dash_socket_connected: 'Verbunden',
    psych_dash_socket_disconnected: 'Getrennt',

    psych_dash_profile_review_title: 'Profilüberprüfung',

    psych_dash_team_note_label: 'Hinweis des Teams:',
    psych_dash_fields_to_fix_label: 'Zu bearbeitende Bereiche:',
    psych_dash_fix_button: 'Korrigieren und Formular erneut senden',
    psych_dash_loading: 'Wird geladen…',

    psych_dash_revision_hint: 'Hier siehst du alle Anpassungen oder Empfehlungen, die das Team für dein Profil anfordert.',

    psych_dash_new_messages_title: 'Neue Nachrichten',
    psych_dash_new_messages_new_suffix: 'neu',
    psych_dash_new_messages_open: 'Öffnen',
    psych_dash_new_messages_close: 'X',

    psych_dash_availability_title: 'Verfügbarkeit',
    psych_dash_availability_currently: 'Du bist derzeit',
    psych_dash_available: 'Verfügbar',
    psych_dash_not_available: 'Nicht verfügbar',
    psych_dash_updating: 'Wird aktualisiert...',
    psych_dash_set_not_available: 'Auf „Nicht verfügbar“ setzen',
    psych_dash_set_available: 'Auf „Verfügbar“ setzen',

    psych_dash_rating_title: 'Bewertung',
    psych_dash_refresh: 'Aktualisieren',
    psych_dash_based_on: 'Basierend auf {{count}}',
    psych_dash_ratings_word: 'Bewertungen',
    psych_dash_loading_comments: 'Kommentare werden geladen…',
    psych_dash_no_visible_comments: 'Hier sind noch keine Kommentare sichtbar.',
    psych_dash_recent_comments_title: 'Neueste Kommentare',
    psych_dash_view_all_comments: 'Alle Kommentare ansehen',

    psych_dash_calls_history_title: 'Anrufverlauf',
    psych_dash_calls_history_body: 'Sieh dir die Anrufe an, die du angenommen hast, und ihren Status.',
    psych_dash_view_calls_history: 'Anrufverlauf anzeigen',

    psych_dash_chats_history_title: 'Chatverlauf',
    psych_dash_chats_history_body: 'Sieh dir die Chats an, die du mit deinen Kunden hattest.',
    psych_dash_view_chats_history: 'Chatverlauf anzeigen',

    psych_dash_info_block_title: 'Informationen',
    psych_dash_info_bullet_1: '• Wenn ein Kunde einen Anruf startet und du verfügbar bist, siehst du eine eingehende Anrufmeldung.',
    psych_dash_info_bullet_2: '• Wenn du annimmst, gelangst du in den Anrufbildschirm, um den Kunden zu betreuen.',
    psych_dash_info_bullet_3: '• ✅ Wenn ein Kunde eine Nachricht sendet, siehst du sie unter „Neue Nachrichten“ und kannst den Chat öffnen.',

    psych_profile_header_title: 'Profil des Hellsehers',

    psych_profile_loading_profile: 'Profil wird geladen...',

    psych_profile_psychic_fallback: 'Hellseher/in',
    psych_profile_no_info: 'Keine Informationen zum Hellseher wurden gefunden.',
    psych_profile_back: 'Zurück',

    psych_profile_available: 'Verfügbar',
    psych_profile_not_available: 'Nicht verfügbar',
    psych_profile_busy: 'Beschäftigt',
    psych_profile_stats_calls_word: 'Anrufe',

    psych_profile_featured_review_tag: '⭐ Hervorgehobener Kommentar',
    psych_profile_featured_review_rating_label: 'Bewertung',
    psych_profile_featured_review_client_prefix: '— Kunde',

    psych_profile_bio_title: 'Biografie',
    psych_profile_bio_rate_label: 'Tarif: US$1.25/Min',
    psych_profile_bio_phrase_label: 'Spruch:',
    psych_profile_bio_languages_label: 'Sprachen:',
    psych_profile_bio_areas_label: 'Bereiche:',
    psych_profile_bio_tools_label: 'Werkzeuge:',
    psych_profile_bio_experience_label: 'Erfahrung:',
    psych_profile_bio_about_me_label: 'Über mich:',

    psych_profile_work_info_title: 'Arbeitsinformationen',
    psych_profile_work_exp_phone_chat_label: 'Erfahrung per Telefon/Chat:',
    psych_profile_yes: 'Ja',
    psych_profile_no: 'Nein',
    psych_profile_work_start_year_label: 'Startjahr:',
    psych_profile_work_hours_per_week_label: 'Stunden pro Woche:',
    psych_profile_work_channels_label: 'Kanäle (Telefon und Chat):',

    psych_profile_comments_title: 'Kommentare',
    psych_profile_loading_comments: 'Kommentare werden geladen…',
    psych_profile_no_comments: 'Es gibt noch keine Kommentare zu diesem Hellseher.',
    psych_profile_showing_comments_prefix: 'Anzeige von',
    psych_profile_showing_comments_suffix: 'Kommentar(en), vom neuesten zum ältesten.',

    psych_profile_history_title: 'Verlauf',
    psych_profile_history_body: 'Sieh dir deinen Anrufverlauf mit diesem Hellseher an.',
    psych_profile_view_call_history: 'Anrufverlauf anzeigen',

    psych_profile_call_now: 'Jetzt anrufen',
    psych_profile_chat: 'Chat',
    psych_profile_unavailable_short: 'Nicht verfügbar',

    psych_profile_psychic_unavailable_title: 'Hellseher nicht verfügbar',
    psych_profile_psychic_unavailable_body_try_later: 'Dieser Hellseher ist gerade nicht verfügbar. Bitte versuche es später erneut.',
    psych_profile_psychic_unavailable_body: 'Dieser Hellseher ist gerade nicht verfügbar.',

    psych_profile_config_error_title: 'Konfigurationsfehler',
    psych_profile_config_error_body_missing_api: 'EXPO_PUBLIC_API_URL ist nicht konfiguriert.',

    psych_profile_session_expired_title: 'Sitzung abgelaufen',
    psych_profile_session_expired_body_call: 'Bitte melde dich erneut an, um einen Anruf zu starten.',

    psych_profile_call_cannot_start_title: 'Anruf kann nicht gestartet werden',
    psych_profile_call_cannot_start_body_no_minutes: 'Kein Minuten-Guthaben',
    psych_profile_call_cannot_start_cancel: 'Abbrechen',
    psych_profile_call_cannot_start_buy_minutes: 'Minuten kaufen',

    psych_profile_call_error_title: 'Fehler',
    psych_profile_call_error_invalid_params: 'Der Server hat keine gültigen Anrufparameter zurückgegeben.',
    psych_profile_call_error_start_failed: 'Anruf konnte nicht gestartet werden.',
    psych_profile_call_error_server: 'Es ist ein Serverfehler aufgetreten.',

    psych_profile_error_title: 'Fehler',
    psych_profile_error_call_failed: 'Anruf konnte nicht gestartet werden.',

    psych_register_title_edit: 'Bewerbung korrigieren und erneut senden',
    psych_register_title_register: 'Anmeldung als Hellseher/in',

    psych_register_revision_title: 'Angeforderte Korrekturen',
    psych_register_revision_note_prefix: 'Hinweis: ',
    psych_register_revision_hint: 'Korrigiere das Markierte und tippe dann auf „Bewerbung erneut senden“.',

    psych_register_label_full_name: 'Vollständiger Name *',
    psych_register_ph_full_name: 'z. B. Laura Pérez',

    psych_register_label_psychic_name: 'Hellseher-Name (öffentliche Identität) *',
    psych_register_ph_psychic_name: 'z. B. Luna',
    psych_register_help_psychic_name_unique: 'Dieser Name ist für Kunden sichtbar. Er muss eindeutig sein.',

    psych_register_label_paypal_email: 'PayPal-E-Mail (erforderlich) *',
    psych_register_ph_paypal_email: 'z. B. deineemail@paypal.com',
    psych_register_help_paypal_email: 'Diese E-Mail wird für Auszahlungen an den Hellseher genutzt.',

    psych_register_label_public_bio: 'Öffentliche Biografie (Bio) *',
    psych_register_ph_public_bio: 'Schreibe deine Biografie (Kunden sehen das)',
    psych_register_help_public_bio: 'Diese Biografie wird Kunden in deinem Profil angezeigt.',

    psych_register_label_email: 'E-Mail',
    psych_register_ph_email: 'beispiel@email.com',

    psych_register_label_phone: 'Telefon / WhatsApp',
    psych_register_ph_phone: '+49 170 0000000',
    psych_register_help_phone_international: 'Wenn Sie eine Telefonnummer verwenden, geben Sie diese im internationalen Format ein (z. B. +49 170 0000000).',

    psych_register_label_password: 'Passwort *',
    psych_register_ph_password: 'Mindestens 6 Zeichen',
    psych_register_accessibility_show_password: 'Passwort anzeigen',
    psych_register_accessibility_hide_password: 'Passwort verbergen',

    psych_register_help_edit_credentials:
      'E-Mail/Telefon und Passwort werden über Login/Support verwaltet. Hier korrigierst du nur die Bewerbung.',

    psych_register_label_location: 'Land / Stadt *',
    psych_register_ph_location: 'z. B. Kolumbien, Bogotá',

    psych_register_label_languages: 'Sprachen, in denen du berätst *',
    psych_register_ph_languages: 'z. B. Spanisch, Englisch',

    psych_register_section_additional_required: 'Zusätzliche Informationen (erforderlich)',

    psych_register_label_tagline: 'Beschreibe einen Satz, der dich auszeichnet *',
    psych_register_ph_tagline: 'z. B. Glauben heißt erschaffen',

    psych_register_label_areas: 'Bereiche (Mehrfachauswahl möglich) *',
    psych_register_label_areas_other: '„Andere“ (Bereiche) angeben *',
    psych_register_ph_areas_other: 'Schreibe deine zusätzlichen Bereiche',

    psych_register_label_applicant_photo: 'Foto des Bewerbers (erforderlich) *',
    psych_register_permission_box_title: 'Zugriff auf Fotos erlauben',
    psych_register_permission_box_body: 'Luz Psíquica greift nur dann auf Ihre Fotos zu, wenn Sie sich ausdrücklich dafür entscheiden, ein Bild hochzuladen. Dieser Zugriff erfolgt nicht im Hintergrund.',
    psych_register_permission_hint_denied: 'Wenn Sie die Berechtigung abgelehnt haben, können Sie sie in den Geräteeinstellungen aktivieren.',
    psych_register_permission_request: 'Zugriff auf Fotos erlauben',
    psych_register_permission_granted: 'Berechtigung erteilt',
    psych_register_permission_container_first_body: 'Bevor Sie das Foto auswählen, erlauben Sie den Zugriff auf Ihre Fotos über die Schaltfläche in diesem Abschnitt.',
    psych_register_open_settings: 'Einstellungen öffnen',
    psych_register_permissions_error_body: 'Die Berechtigung konnte nicht angefordert werden. Bitte versuchen Sie es erneut.',
    psych_register_cancel: 'Abbrechen',
    psych_register_photo_change: 'Foto ändern',
    psych_register_photo_select: 'Foto auswählen',

    psych_register_label_tools: 'Werkzeuge, die du nutzt (Mehrfachauswahl möglich) *',
    psych_register_label_tools_other: '„Andere“ (Werkzeuge) angeben *',
    psych_register_ph_tools_other: 'Schreibe deine zusätzlichen Werkzeuge',

    psych_register_label_experience: 'Beschreibe deine Erfahrung genauer *',
    psych_register_ph_experience: 'z. B. Methoden, Zuverlässigkeit usw.',

    psych_register_label_worked_phone_chat: 'Hast du schon als Hellseher per Telefon oder Chat gearbeitet? *',

    psych_register_label_start_year: 'In welchem Jahr hast du professionell begonnen? *',
    psych_register_year_select: 'Jahr auswählen',
    psych_register_year_modal_title: 'Jahr auswählen',
    psych_register_year_modal_close: 'Schließen',

    psych_register_label_hours_per_week: 'Wie viele Stunden pro Woche würdest du in der App arbeiten? *',
    psych_register_ph_hours_per_week: 'z. B. 10, 12, 40, Vollzeit',

    psych_register_label_can_do_phone_chat: 'Bestätige, ob du per Telefon und Chat beraten kannst *',

    psych_register_label_private_experience:
      '(Nur intern) Erzähle uns von deiner privaten Erfahrung oder anderen Dienstleistungen *',
    psych_register_ph_private_experience: 'z. B. Erfahrung mit privaten Kunden...',

    psych_register_label_photo_marketing_consent: 'Einwilligung zur Fotonnutzung (Marketing/Social Media) *',

    psych_register_label_declaration: 'Pflichterklärung *',
    psych_register_declaration_accept: 'Ich akzeptiere die Erklärung *',

    psych_register_label_about: 'Zusätzliche Nachricht / Über dich *',
    psych_register_ph_about: 'Was soll das Team über dich wissen?',

    psych_register_terms_title: 'Regeln und Datenschutz',
    psych_register_terms_body: 'Ich habe gelesen und akzeptiere ',
    psych_register_terms_link: 'Regeln und Datenschutz',

    psych_register_submit_edit: 'Bewerbung erneut senden',
    psych_register_submit_register: 'Antrag senden',

    psych_register_back: 'Zurück',

    psych_register_yes: 'Ja',
    psych_register_no: 'Nein',

    psych_register_validation_title: 'Validierung',
    psych_register_error_title: 'Fehler',
    psych_register_config_error_title: 'Konfigurationsfehler',
    psych_register_config_error_body: 'EXPO_PUBLIC_API_URL ist nicht definiert. Prüfe deine .env-Datei.',

    psych_register_permissions_required_title: 'Berechtigung erforderlich',
    psych_register_permissions_required_body: 'Wir brauchen Zugriff auf deine Galerie, um ein Foto auszuwählen.',

    psych_register_invalid_photo_title: 'Ungültiges Foto',
    psych_register_invalid_photo_body:
      'Das Bild konnte nicht als Base64 gelesen werden. Wähle ein anderes Foto oder starte die App neu.',

    psych_register_photo_pick_error_title: 'Fehler',
    psych_register_photo_pick_error_body: 'Das Foto konnte nicht ausgewählt werden.',

    psych_register_terms_alert_title: 'Regeln und Datenschutz',
    psych_register_terms_alert_body: 'Du musst Regeln und Datenschutz akzeptieren, um fortzufahren.',

    psych_register_session_expired_body: 'Sitzung abgelaufen. Bitte melde dich erneut an.',

    psych_register_success_title: 'Antrag gesendet',
    psych_register_success_resubmit_default: 'Bewerbung erfolgreich erneut gesendet.',
    psych_register_success_register_default:
      'Dein Antrag wurde gesendet. Das Luz Psíquica-Team prüft dein Profil und kontaktiert dich für ein Interview.',

    psych_reviews_config_error_title: 'Konfigurationsfehler',
    psych_reviews_config_error_body: 'EXPO_PUBLIC_API_URL ist in deiner .env nicht definiert.',

    psych_reviews_session_expired_title: 'Sitzung abgelaufen',
    psych_reviews_session_expired_body: 'Bitte melde dich erneut an.',

    psych_reviews_error_title: 'Fehler',
    psych_reviews_load_error_body: 'Der Bewertungsverlauf konnte nicht geladen werden.',

    psych_reviews_title: 'Bewertungen und Kommentare',

    psych_reviews_summary_title: 'Zusammenfassung',
    psych_reviews_based_on: 'Basierend auf {count} Bewertungen',
    psych_reviews_refresh: 'Aktualisieren',

    psych_reviews_loading: 'Wird geladen…',

    psych_reviews_comments_title: 'Kommentare',
    psych_reviews_no_comments: 'Du hast noch keine sichtbaren Kommentare.',

    psych_reviews_load_more: 'Mehr laden',
    psych_reviews_limit_reached: 'Maximales Limit erreicht',

    psych_reviews_hint_rule:
      '* Sichtbare Kommentare hängen von der Anti-Spam-Regel ab (ein Kommentar pro Kunde und pro Hellseher).',

    psych_reviews_back_arrow: '←',
    psych_reviews_refresh_busy: '...',
    psych_reviews_dash_placeholder: '—',

    realcall_mic_permission_title: 'Mikrofonberechtigung',
    realcall_mic_permission_message: 'Luz Psíquica benötigt Zugriff auf das Mikrofon für Sprachanrufe.',
    realcall_mic_permission_accept: 'Zulassen',
    realcall_mic_permission_cancel: 'Abbrechen',

    realcall_call_ended_title: 'Anruf beendet',
    realcall_call_ended_no_minutes: 'Der Anruf wurde beendet, weil deine Minuten aufgebraucht sind.',

    realcall_call_ended_rejected_body: 'Der Hellseher hat den Anruf abgelehnt. Versuche einen anderen Hellseher oder später erneut.',
    realcall_ok: 'OK',

    realcall_rating_title: 'Bewertung',
    realcall_rating_pick_stars: 'Wähle eine Bewertung (1 bis 5).',

    realcall_error_title: 'Fehler',
    realcall_rating_save_error: 'Bewertung konnte nicht gespeichert werden',

    realcall_back: '← Zurück',
    realcall_call_title: 'Audioanruf',
    realcall_room_label: 'Raum:',

    realcall_psychic_role_brand: 'Hellseher · Luz Psíquica',

    realcall_audio_error_prefix: 'Audiofehler:',
    realcall_audio_connecting: 'Audio wird verbunden…',
    realcall_audio_waiting_psychic: 'Audio verbunden. Warte auf den Hellseher…',
    realcall_audio_connected_psychic: 'Audio mit dem Hellseher verbunden.',

    realcall_time_label: 'Zeit:',
    realcall_remaining_minutes_label: 'Verbleibende Minuten:',
    realcall_billing_starts_note: '* Die Abrechnung beginnt, wenn der Hellseher annimmt.',

    realcall_hangup: 'Auflegen',

    realcall_rate_title: 'Bewerte deine Beratung',
    realcall_rate_subtitle: 'Wie war deine Erfahrung mit {name}?',

    realcall_review_label: 'Kommentar (optional)',
    realcall_review_placeholder: 'Schreibe einen kurzen Kommentar…',
    realcall_skip: 'Überspringen',
    realcall_send: 'Senden',
    realcall_sending: 'Wird gesendet…',

    register_header_title: 'Registrierung',

    register_title_create_account: 'Konto erstellen',

    register_subtitle_client: 'Registrieren Sie sich als Kunde, um fortzufahren',

    register_required_fields_title: 'Pflichtfelder',
    register_required_fields_body: 'Bitte fülle alle Felder aus.',

    register_link_psychic_apply: 'Sind Sie ein Medium? Bewerben Sie sich, um mit uns zu arbeiten',

    register_legal_title: 'Regeln & Datenschutz',
    register_legal_body_client: 'Du musst den AGB, dem Datenschutz und den Rückerstattungen zustimmen, um dich zu registrieren.',

    register_success_title: 'Konto erstellt',
    register_success_body: 'Dein Konto wurde erfolgreich erstellt. Bitte melde dich an.',

    register_error_title: 'Registrierung',
    register_failed_msg: 'Wir konnten Ihre Registrierung nicht abschließen. Bitte versuchen Sie es erneut.',
    common_ok: 'OK',

    register_placeholder_full_name: 'Vollständiger Name',
    register_placeholder_email_or_phone: 'E-Mail oder Telefon',
    register_phone_helper: 'Sie können E-Mail oder Telefonnummer verwenden. Wenn Sie eine Telefonnummer verwenden, geben Sie diese im internationalen Format ein (z. B. +49 170 0000000).',
    register_placeholder_password: 'Passwort',

    register_accessibility_show_password: 'Passwort anzeigen',
    register_accessibility_hide_password: 'Passwort ausblenden',

    register_label_account_type: 'Kontotyp',
    register_role_client: 'Kunde',
    register_role_psychic: 'Hellseher',

    register_terms_prefix: 'Ich habe gelesen und akzeptiere',
    register_terms_link: 'Regeln & Datenschutz',

    register_btn_create_account: 'Konto erstellen',
    register_link_have_account_login: 'Schon ein Konto? Anmelden',

    common: {
      back: "Zurück",
      ok: "OK",
      psychic: "Hellseher",
      dash: "—"
    },
    legal_header_title: 'Regeln und Datenschutz',
    legal: {
      title: "Regeln und Datenschutz",
      meta: "Version: {{version}} · Rechtlicher Inhaber: {{owner}} · Gerichtsstand: {{country}}",
      jurisdictionCountry: "Kolumbien",
      mailSubject: "Rechtlicher Support - Luz Psíquica",
      openFailTitle: "Konnte nicht geöffnet werden",
      openFailGeneric: "Der Link konnte nicht geöffnet werden.",
      emailFailMessage: "Die E-Mail-App konnte nicht geöffnet werden. Bitte stelle sicher, dass eine E-Mail-App auf dem Telefon eingerichtet ist.",
      whatsappFailMessage: "WhatsApp konnte nicht geöffnet werden. Bitte stelle sicher, dass WhatsApp installiert ist oder versuche es erneut.",
      emailLabel: "E-Mail: {{email}}",
      whatsappLabel: "WhatsApp: +1 (813) 618-7770",

      s1Title: "1. Annahme der Bedingungen",
      s1Body: "Durch die Registrierung und Nutzung der Anwendung sowie durch das ausdrückliche Aktivieren des entsprechenden Kontrollkästchens erklärt der Nutzer, dass er die hierin beschriebenen Regeln, Richtlinien, Bedingungen und Bestimmungen zur operativen Nutzung der Plattform gelesen, verstanden und vollständig sowie freiwillig akzeptiert hat.\n\nDie Annahme dieser Bedingungen stellt eine verbindliche und zwingende Voraussetzung für den Zugang zur Anwendung, die Registrierung und deren Nutzung dar. Sofern der Nutzer mit einer der hier festgelegten Bestimmungen nicht einverstanden ist, hat er von der Registrierung oder Nutzung der Plattform abzusehen.\n\nDie rechtlichen Dokumente, einschließlich Normen und Datenschutz sowie das Dokument zum Operativen Betrieb der Plattform, können jederzeit über diesen rechtlichen Bereich eingesehen werden.\n",

      s2Title: "2. Art des Dienstes",
      s2Body: "Luz Psíquica ist eine Unterhaltungs- und Orientierungsanwendung für persönliche Themen, deren Inhalte und Dienstleistungen ausschließlich informativen und freizeitbezogenen Charakter haben.\n\nDie Plattform bietet weder medizinische, psychologische, psychiatrische, rechtliche, finanzielle, therapeutische noch sonstige gesetzlich geregelte professionelle Beratung an und beabsichtigt dies auch nicht. Die innerhalb der Anwendung bereitgestellten Informationen, Meinungen oder Interaktionen ersetzen unter keinen Umständen die Beratung durch entsprechend qualifizierte Fachkräfte.\n\nDer Nutzer erkennt an und akzeptiert, dass die Nutzung der Plattform auf eigene Verantwortung erfolgt und dass sämtliche Entscheidungen, die auf Grundlage der Inhalte oder Interaktionen von Luz Psíquica getroffen werden, vollständig vom Nutzer selbst getragen werden, gemäß den von der Plattform festgelegten Richtlinien und Bedingungen.\n",

      s3Title: "3. Abrechnung und Vergütung nach Minuten",
      s3Body: "Die innerhalb von Luz Psíquica angebotenen Dienstleistungen werden dem Nutzer in Rechnung gestellt und dem Medium ausschließlich auf Grundlage der tatsächlich verbrauchten Minuten für die Kommunikation vergütet, sei es durch gesprochene Gespräche oder den Austausch von Textnachrichten innerhalb der Anwendung.\n\nEs werden keine Zahlungen für Wartezeiten, Verfügbarkeit, aktive Verbindung ohne tatsächlichen Verbrauch, erzielte Ergebnisse, Versprechen, Erwartungen oder für andere Konzepte anerkannt, die nicht der realen, messbaren und überprüfbaren Nutzung des Dienstes innerhalb der Plattform entsprechen.\n\nAlle innerhalb der Anwendung durchgeführten finanziellen Transaktionen werden über die Zahlungsplattform PayPal abgewickelt, gemäß deren eigenen Bedingungen, Richtlinien und Nutzungsbestimmungen. Luz Psíquica speichert, verarbeitet oder verwaltet keine sensiblen Finanzinformationen von Nutzern oder Medien direkt.\n\nAus diesem Grund und da hierfür keine rechtliche Befugnis besteht, fordert die Plattform keine Bankkontonummern, Kreditkartennummern, Debitkartennummern oder sonstigen persönlichen Finanzdaten an und ist hierzu auch nicht verpflichtet. Die Nutzung der Zahlungsmittel unterliegt ausschließlich den von PayPal festgelegten Bedingungen.\n\nDie Beziehung zwischen Luz Psíquica und den Medien ist strikt unabhängiger Natur. Folglich besteht kein Arbeitsverhältnis, keine Unterordnung und keine Verpflichtung zur Zahlung von Prämien, Sozialleistungen, arbeitsrechtlichen Leistungen, Entschädigungen oder vergleichbaren Ausgleichszahlungen.\n\nDie Plattform gewährt keine Darlehen, Vorschüsse, Vorauszahlungen oder Einkommensgarantien und stellt keine Arbeitsbescheinigungen, Einkommensnachweise, Schreiben für finanzielle Vorgänge, Zuschüsse, Bürgschaften oder Dokumente ähnlicher Art aus.\n\nDie verbrauchten Minuten werden durch die technischen Messsysteme der Plattform berechnet. Im Falle technischer Anpassungen, Verbindungsstörungen, Dienstunterbrechungen oder Abweichungen bei der Zeitmessung gelten die internen Aufzeichnungen von Luz Psíquica als maßgebliche Referenz. Jegliche Beanstandung in Bezug auf die Minutenmessung ist über die von der Plattform vorgesehenen Kanäle und Verfahren einzureichen, ohne dass daraus automatisch Erstattungen, Ausgleichszahlungen oder zusätzliche Vergütungen entstehen.\n",

      s4Title: "4. Verbot der Weitergabe personenbezogener Informationen",
      s4Body: "Zum Schutz der Sicherheit, der Privatsphäre und des ordnungsgemäßen Betriebs der Plattform ist der Austausch personenbezogener oder sensibler Informationen zwischen Nutzern und Medien sowohl innerhalb als auch außerhalb der Anwendung strikt untersagt.\n\nAls personenbezogene Informationen gelten, beispielhaft und nicht abschließend, sämtliche Daten, die eine Identifizierung, Kontaktaufnahme oder Lokalisierung einer Person ermöglichen, einschließlich Telefonnummern, physischer Adressen, E-Mail-Adressen, Profile in sozialen Netzwerken, Identitätsdokumente, Bankdaten, Kontonummern, Zahlungslinks, externe Kontaktmöglichkeiten oder andere Daten ähnlicher Art.\n\nEbenso ist es ausdrücklich untersagt, Gespräche, Vereinbarungen, Zahlungen oder jegliche Art von Interaktionen außerhalb der Anwendung zu verlagern oder zu versuchen, die von Luz Psíquica bereitgestellten Kommunikations- und Zahlungssysteme zu umgehen.\n\nDieses Verbot gilt verbindlich sowohl für Nutzer als auch für Medien, und ein Verstoß kann zu den in den Regeln und Bedingungen der Plattform vorgesehenen Korrekturmaßnahmen führen.\n",

      s5Title: "5. Nutzungsbedingungen",
      s5Body: "Die Nutzung von Luz Psíquica setzt die Einhaltung von Regeln des respektvollen Zusammenlebens, gegenseitigen Respekts sowie der von der Plattform festgelegten internen Bestimmungen voraus, die darauf abzielen, ein sicheres, funktionsfähiges und angemessenes Umfeld für alle Nutzer zu gewährleisten.\n\nLuz Psíquica behält sich das Recht vor, Nutzer- oder Medienkonten vorübergehend zu sperren oder dauerhaft zu schließen, sofern hierfür operative, technische oder sicherheitsrelevante Gründe vorliegen, einschließlich, jedoch nicht beschränkt auf, Fälle von Betrug, Missbrauch, Belästigung, unangemessenem Verhalten, unsachgemäßer Nutzung der Plattform, dem Versuch der Umgehung interner Kontrollmechanismen oder der Nichteinhaltung der hier festgelegten Regeln, Richtlinien und Bedingungen.\n\nDie ergriffenen Maßnahmen sind je nach Fall präventiver oder korrigierender Natur und dienen dem Schutz der Integrität der Plattform, ihrer Nutzer sowie dem ordnungsgemäßen Betrieb der Dienste, ohne dass hieraus ein Anspruch auf Entschädigung, Ausgleichszahlungen oder sonstige Forderungen gegenüber Luz Psíquica entsteht.\n",

      s6Title: "6. Datenschutz und Datenverarbeitung",
      s6Body: "Luz Psíquica verarbeitet ausschließlich die minimalen und strikt erforderlichen personenbezogenen Daten, die für den operativen Betrieb der Plattform notwendig sind, einschließlich, jedoch nicht beschränkt auf, die Identifizierung des Nutzerkontos, den Sitzungsverlauf, getätigte Käufe, den Minutenverbrauch sowie die Bearbeitung von Supportanfragen.\n\nUnter keinen Umständen ist es Nutzern gestattet, personenbezogene Daten untereinander auszutauschen oder auf personenbezogene Informationen anderer Nutzer oder Medien zuzugreifen, außer über die für die Erbringung der Dienstleistung innerhalb der Anwendung strikt erforderlichen Mechanismen.\n\nDie von der Plattform verarbeiteten Daten werden ausschließlich zu operativen Zwecken, für den technischen Support, zur Sicherheit, zur Betrugsprävention, zur Verbesserung des Dienstes sowie zur Erfüllung gesetzlicher oder regulatorischer Verpflichtungen verwendet. Luz Psíquica verkauft, vermarktet oder übermittelt keine personenbezogenen Daten an Dritte zu Zwecken, die nicht mit dem Betrieb der Plattform zusammenhängen.\n\nDie Datenverarbeitung erfolgt gemäß den Grundsätzen der Rechtmäßigkeit, Zweckbindung, Verhältnismäßigkeit und Sicherheit unter Anwendung angemessener technischer und organisatorischer Maßnahmen zum Schutz der Informationen vor unbefugtem Zugriff, Missbrauch oder Verlust.\n\nNutzer, die eine vertragliche Einbindung als Psychic auf der Plattform beantragen, können verpflichtet werden, zusätzliche Identifikationsinformationen, einschließlich einer Kopie eines gültigen amtlichen Ausweisdokuments, bereitzustellen. Dies dient ausschließlich der Überprüfung der tatsächlichen Identität, der Volljährigkeit, der Authentizität der angegebenen Daten sowie der Einhaltung vertraglicher und gesetzlicher Verpflichtungen.\n\nDiese Informationen werden gemäß den Grundsätzen der Rechtmäßigkeit, Zweckbindung, Verhältnismäßigkeit, Sicherheit und Vertraulichkeit gemäß den geltenden Datenschutzbestimmungen, einschließlich des kolumbianischen Gesetzes 1581 von 2012, verarbeitet.\n\nEine kommerzielle Nutzung, Weitergabe oder Verwendung zu anderen Zwecken ist ausgeschlossen. Die Daten werden nur so lange gespeichert, wie es zur Erfüllung des vorgesehenen Zwecks erforderlich ist.\n",

      s7Title: "7. Haftungsbeschränkung",
      s7Body: "Luz Psíquica erbringt seine Dienstleistungen in der auf der Plattform beschriebenen Form und unter den dort festgelegten Bedingungen, ohne ausdrückliche oder stillschweigende Garantien hinsichtlich Ergebnissen, Genauigkeit, persönlicher Erwartungen oder der aus der Nutzung der Anwendung resultierenden Folgen zu übernehmen.\n\nDie Plattform haftet nicht für Entscheidungen, Handlungen, Unterlassungen, Auslegungen oder Ergebnisse, die direkt oder indirekt aus der Nutzung der Inhalte, Dienstleistungen oder Interaktionen innerhalb der Anwendung entstehen, da diese ausschließlich in der Verantwortung des Nutzers liegen.\n\nLuz Psíquica haftet ebenfalls nicht für Dienstunterbrechungen, technische Fehler, Verbindungsstörungen, vorübergehende Nichtverfügbarkeit der Plattform, Informationsverluste, Anpassungen der Minutenmessung oder für direkte oder indirekte Schäden, die aus technischen, betrieblichen oder durch höhere Gewalt verursachten Umständen entstehen.\n\nIn keinem Fall übersteigt die Haftung von Luz Psíquica den Betrag, den der Nutzer innerhalb der Anwendung tatsächlich für die Gegenstand der Reklamation bildenden Dienstleistungen bezahlt hat, noch begründet sie Ansprüche auf Ersatz immaterieller Schäden, entgangenen Gewinn, Verlust von Chancen, nicht erfüllte Erwartungen oder sonstige indirekte Schäden.\n",

      s8Title: "8. Art der Dienstleistung und Nicht-Erstattungsfähigkeit",
      s8Body: "Auf der Plattform erfolgt die Abrechnung der Chat- und/oder Anrufdienste nach dem Prinzip „begonnene Minute = berechnete Minute“. Demnach wird jede angebrochene Minute als volle Minute für Abrechnungs- und Buchungszwecke berücksichtigt. Diese Regelung gilt sowohl für den Verbrauch von Minuten durch den Kunden als auch für die Berechnung der tatsächlich vom Berater erbrachten Zeit, um eine faire Vergütung sowie eine klare, objektive und transparente Messung der erbrachten Dienstleistung sicherzustellen.\n\nDie Dauer jeder Interaktion wird automatisch vom System erfasst, und der Nutzer erkennt dieses Abrechnungsmodell ausdrücklich an und akzeptiert es ab dem Zeitpunkt der Nutzung der Plattform. Die innerhalb der Luz Psíquica-Plattform erworbenen Minuten stellen digitale Guthaben zur ausschließlichen Nutzung innerhalb des Service-Ökosystems dar und gelten nicht als Bargeld, Einlagen, auszahlbare Guthaben, Finanzinstrumente oder übertragbare Werte.\n\nAlle Käufe von Minuten innerhalb der Anwendung sind endgültig, verbindlich und nicht erstattungsfähig, einschließlich der Fälle, in denen der Nutzer die erworbenen Minuten ganz oder teilweise nicht nutzt. Die Nichtnutzung des Dienstes begründet keinen Anspruch auf Rückerstattung, Entschädigung oder sonstige finanzielle Leistungen.\n\nMinuten können weder in Geld umgewandelt, noch an Dritte übertragen, ausgezahlt oder außerhalb der Plattform als Guthaben geltend gemacht werden. Der Nutzer erkennt ausdrücklich an, dass er mit dem Kauf einen digitalen Dienst zur sofortigen oder bedarfsgerechten Nutzung erwirbt und, soweit gesetzlich zulässig, auf ein Widerrufs-, Rücktritts- oder Erstattungsrecht verzichtet.\n\nAusnahmsweise kann die Plattform Anträge prüfen, sofern nachweisbare technische Fehler vorliegen, die direkt Luz Psíquica zuzurechnen sind und die Leistungserbringung verhindert haben. In solchen Fällen beschränkt sich jede Maßnahme ausschließlich auf die Behebung des Fehlers oder die anteilige Wiederherstellung des Dienstes innerhalb der Plattform, ohne dass eine monetäre Rückerstattung erfolgt.\n\nDie Plattform behält sich das Recht vor, Anträge bei Anzeichen von Betrug, Missbrauch, unzulässiger Nutzung des Systems, Manipulation oder Verstößen gegen die geltenden Bestimmungen abzulehnen. Die von Luz Psíquica in Bezug auf diese Bestimmungen getroffenen Entscheidungen sind im operativen Rahmen der Plattform endgültig und begründen keinen Anspruch auf zusätzliche Entschädigungen, Zinsen oder Forderungen über die gegebenenfalls festgelegten technischen Anpassungen hinaus.\n",

      s9Title: "9. Schwere Verstöße",
      s9Body: "Als schwere Verstöße gelten, beispielhaft und nicht abschließend, Verhaltensweisen, die die Sicherheit, den gegenseitigen Respekt, die Rechtmäßigkeit oder das Zusammenleben innerhalb der Plattform erheblich beeinträchtigen, einschließlich Beleidigungen, Drohungen, Belästigungen, Verbreitung pornografischer Inhalte, explizit sexueller Inhalte, beleidigendem oder diskriminierendem Verhalten sowie Handlungen, die gegen die Moral, die öffentliche Ordnung und den gegenseitigen Respekt verstoßen.\n\nDie Begehung schwerer Verstöße kann zur sofortigen und dauerhaften Schließung des Nutzer- oder Medienkontos führen, ohne vorherige Abmahnung, sofern dies durch die Schwere der Tatsachen, wiederholtes Fehlverhalten oder Risiken für andere Nutzer oder die Integrität der Plattform gerechtfertigt ist.\n\nIn Fällen besonderer Schwere und bei Vorliegen ausreichender und überprüfbarer interner Beweise für einen Verstoß gegen die Regeln kann Luz Psíquica das Konto endgültig schließen, ohne Anerkennung von Zahlungen, angesammelten Guthaben, ausstehenden Vorteilen oder sonstigen Entschädigungen, unbeschadet etwaiger rechtlicher Schritte.\n",

      s10Title: "10. Freiwilliger Rückzug des Nutzers",
      s10Body: "Der Nutzer kann jederzeit seinen freiwilligen Rücktritt von der Plattform über die innerhalb der Anwendung bereitgestellten Mechanismen und Tools beantragen.\n\nSobald der Antrag gestellt und vom Nutzer ausdrücklich bestätigt wurde, wird das Konto unverzüglich gelöscht, wodurch das Vertragsverhältnis zwischen dem Nutzer und der Plattform beendet wird, unbeschadet der Erfüllung zuvor eingegangener Verpflichtungen.\n\nDer freiwillige Rücktritt begründet unter keinen Umständen einen Anspruch auf Rückerstattung, Entschädigung oder Erstattung der für erworbene Dienstleistungen gezahlten Beträge, einschließlich nicht genutzter Minuten zum Zeitpunkt der Kontolöschung.\n\nDie zum Zeitpunkt des Rücktritts verbleibenden Minuten können weder in Geld umgewandelt, noch übertragen oder als Guthaben außerhalb der Plattform geltend gemacht werden.\n\nDer Nutzer erkennt ausdrücklich an und erklärt sich damit einverstanden, dass die erworbenen Dienstleistungen nicht erstattungsfähig sind und dass diese Bedingung vor der Nutzung der Plattform klar kommuniziert wurde.\n\nDer Antrag auf Rücktritt sowie dessen Bearbeitung erfolgen gemäß den internen Verfahren von Luz Psíquica, ohne dass hieraus eine Verpflichtung zur finanziellen Entschädigung seitens der Plattform entsteht.\n",

      s11Title: "11. Nutzung integrierter Gerätefunktionen",
      s11Body:  "Die Anwendung Luz Psíquica kann den Zugriff auf bestimmte im Gerät des Nutzers integrierte Funktionen, wie Kamera und Mikrofon, ausschließlich dann anfordern, wenn der Nutzer diese innerhalb der verfügbaren Funktionen der Anwendung freiwillig verwenden möchte.\n\nDer Zugriff auf die Kamera erfolgt ausschließlich, wenn der Nutzer sich entscheidet, ein Bild hochzuladen, beispielsweise ein Profilfoto. Der Zugriff auf das Mikrofon wird ausschließlich während der sprachbasierten Kommunikationsfunktionen innerhalb der Plattform genutzt. In keinem Fall verwendet die Anwendung Funktionen zur Videoaufzeichnung.\n\nDie Anwendung nutzt weder Kamera noch Mikrofon im Hintergrund und greift nicht ohne direkte Interaktion und ausdrückliche Zustimmung des Nutzers auf diese Funktionen zu. Ebenso erfasst Luz Psíquica keine Bilder, Audioaufnahmen oder sonstigen Inhalte ohne die ausdrückliche Genehmigung des Nutzers.\n\nDie vom Nutzer bereitgestellten Bilder und Audioinhalte werden ausschließlich zu funktionalen und betrieblichen Zwecken innerhalb der Anwendung verwendet und nicht ohne ausdrückliche Zustimmung des Nutzers an Dritte weitergegeben, es sei denn, dies ist für die Erbringung der Dienstleistung gemäß den Bedingungen der Plattform zwingend erforderlich.\n\nDer Nutzer kann die für Kamera und Mikrofon erteilten Berechtigungen jederzeit über die Einstellungen des Betriebssystems seines Geräts widerrufen, was die Nutzung bestimmter Funktionen der Anwendung einschränken oder verhindern kann.\n",

      s12Title: "12. Kontakt",
      s12Intro: "Für Fragen, Beschwerden, Reklamationen oder sonstige Anfragen im Zusammenhang mit dem Betrieb der Anwendung kann der Nutzer über die innerhalb der Plattform bereitgestellten Kontaktkanäle mit Luz Psíquica in Verbindung treten.\n\nEingehende Mitteilungen werden gemäß den internen Verfahren der Anwendung und innerhalb angemessener Fristen bearbeitet, abhängig von der Art der Anfrage.\n"
    },

    operational_header_title: 'Betriebsdokument',
    operational: {
      title: "Betriebsdokument",
      meta: "Version: {{version}} · Datum: {{date}} · Plattform: {{platform}}",

      s1Heading: "1. Zweck des Dokuments",
      s1Body: "Dieses Dokument zum operativen Betrieb hat das Ziel, die allgemeine Funktionsweise der Plattform Luz Psíquica klar, transparent und technisch zu beschreiben sowie die operativen, technischen und funktionalen Regeln festzulegen, unter denen der Service für Kunden und Hellseher bereitgestellt wird. Dieses Dokument ist integraler Bestandteil des rechtlichen Rahmens der Plattform und für alle Nutzer, die die Anwendung verwenden, verbindlich.",

      s2Heading: "2. Allgemeine Beschreibung der Plattform",
      s2Body: "Luz Psíquica ist eine digitale Plattform, die die Kommunikation zwischen Kunden und Hellseher über Chat- und Sprachanrufdienste ermöglicht und dabei ein System vorausbezahlter Minuten nutzt, die von Kunden erworben werden. Darüber hinaus kann die Plattform audiovisuelle Inhalte im Zusammenhang mit ihrer Tätigkeit zu Informations-, Promotions-, kommerziellen oder Markenpositionierungszwecken anbieten. Die Plattform fungiert als technologischer Vermittler und stellt die technische Infrastruktur, Zahlungssysteme, Sitzungssteuerung, Minutenverwaltung und die entsprechende wirtschaftliche Abrechnung für Hellseher bereit.",

      s3Heading: "3. Rollen innerhalb der Plattform",
      s31Heading: "3.1 Kunde",
      s31Body: "Nutzer, der Minuten kauft und Beratungsleistungen per Chat oder Anruf nutzt.",
      s32Heading: "3.2 Psychic",
      s32Body: "Autorisierter Nutzer, der Beratungsleistungen für Kunden erbringt und eine\nfinanzielle Vergütung entsprechend der tatsächlich verbrauchten Zeit erhält.",
      s33Heading: "3.3 Administrator",
      s33Body: "Nutzer, der für Aufsicht, Validierung, Wartung und den allgemeinen Betrieb der\nPlattform verantwortlich ist.",

      s4Heading: "4. Operativer Ablauf des Dienstes",
      s41Heading: "4.1 Registrierung und Zugang",
      s41Body: "• Nutzer müssen sich mit gültigen Informationen registrieren.\n• Kunden können ein Konto erstellen und Minuten kaufen.\n• Hellseher müssen von der Plattform autorisiert werden, bevor sie den Dienst anbieten.",
      s42Heading: "4.2 Kauf von Minuten",
      s42Body: "• Minuten werden über ein Zahlungs-Gateway erworben.\n• Minuten sind vorausbezahlt und werden in Sitzungen verbraucht.\n• Die Plattform definiert Preise, Pakete, Rabatte und operative Regeln.",
      s43Heading: "4.3 Anmeldung und Verfügbarkeit",
      s43Body: "• Der Kunde wählt einen verfügbaren Psychic aus.\n• Die Sitzung beginnt nur, wenn der Kunde ausreichend gekaufte Minuten hat.\n• Die Plattform verwaltet die Kontrolle von Zeit und Verbrauch.",

      s5Heading: "5. Sitzungen, Minutenverbrauch und Anti-Betrugs-Kontrollen",
      s51Heading: "5.1 Sitzungssteuerung",
      s51Body: "• Der Verbrauch wird pro Minute im Chat oder Anruf gezählt.\n• Das System schließt Sitzungen bei Inaktivität oder Beendigung.\n• Es werden Kontrollen angewendet, um anomale Nutzung oder Betrug zu verhindern.",
      s52Heading: "5.2 Verbot des Austauschs persönlicher Daten",
      s52Body: "• Der Austausch persönlicher oder Kontaktdaten ist verboten.\n• Es ist verboten, die kommerzielle Beziehung außerhalb der Plattform fortzusetzen.\n• Verstöße können eine Sperrung oder Schließung zur Folge haben.",

      s6Heading: "6. Validierung und Betrieb der Psychic-Rolle",
      s61Heading: "6.1 Bedingungen für Hellseher",
      s61Body: "• Der Psychic muss von der Plattform genehmigt werden.\n• Er muss nach den internen Regeln arbeiten.\n• Er kann bei Verstößen, Beschwerden oder Betrug gesperrt werden.",

      s7Heading: "7. Auszahlung an Hellseher und wirtschaftliche Abrechnung",
      s71Heading: "7.1 Wirtschaftliche Abrechnung",
      s71Body: "• Die Plattform rechnet auf Basis tatsächlich verbrauchter Minuten ab.\n• Die Vergütung wird gemäß den internen Regeln der Plattform und dem internen Protokoll der durchgeführten Transaktionen bestimmt.\n• Auszahlungen werden gebündelt und in definierten Zyklen ausgeführt.",

      s8Heading: "8. Audio-, Musik- und audiovisuelle Assets der Plattform",
      s81Heading: "8.1 Art der Assets",
      s81Body: "Die Plattform verwendet digitale Assets, die unter anderem Folgendes umfassen:\n• Klingeltöne für eingehende Anrufe\n• Benachrichtigungstöne und Systemalarme\n• in audiovisuelle Inhalte eingebettete Musik\n• Werbe-, Informations- oder kommerzielle Videos\nDiese Assets sind integraler Bestandteil der funktionalen, kommunikativen und Marken-\nErfahrung von Luz Psíquica.",
      s82Heading: "8.2 Herkunft der Assets",
      s82Body: "Die von der Plattform verwendeten Audio-, Musik- und audiovisuellen Assets:\n• wurden speziell für Luz Psíquica erstellt\n• werden durch eigene kreative Prozesse entwickelt, die die Nutzung generativer KI-Tools einschließen können – stets unter Leitung, Kontrolle und Kuratierung der Plattform\n• sind keine kommerziellen Musikwerke und keine audiovisuellen Inhalte Dritter zur unabhängigen Verwertung",
      s83Heading: "8.3 Audiovisuelle Inhalte und externe Verbreitung",
      s83Body: "Von Luz Psíquica produzierte audiovisuelle Inhalte:\n• können innerhalb und außerhalb der Anwendung vermarktet, verteilt oder veröffentlicht werden\n• können auf digitalen Plattformen und in sozialen Netzwerken veröffentlicht werden\n• können Musik, Bilder, Animationen, Texte und durch KI generierte oder unterstützte Stimmen enthalten\nDie Verbreitung dieser Inhalte bedeutet keine Rechteübertragung an Nutzer, Hellseher oder Dritte.",
      s84Heading: "8.4 Geistiges Eigentum",
      s84Body: "• Alle Audio-, Musik- und audiovisuellen Assets sind ausschließliches Eigentum von Luz Psíquica oder werden mit den erforderlichen Lizenzen genutzt.\n• Sie sind nicht durch Nutzer anpassbar.\n• Sie dürfen ohne ausdrückliche schriftliche Genehmigung nicht extrahiert, wiederverwendet, verteilt, weiterverkauft oder außerhalb der Plattform verwertet werden.",
      s85Heading: "8.5 Verwendungszweck",
      s85Body: "Die beschriebenen Assets:\n• erfüllen eine technische, operative, kommunikative und kommerzielle Funktion\n• sind keine eigenständigen künstlerischen Werke zur individuellen Verwertung\n• begründen keine wirtschaftlichen, urheberrechtlichen oder Beteiligungsrechte für Nutzer oder Hellseher",

      s9Heading: "9. Technische und operative Einschränkungen",
      s9Body: "• Die Plattform ist von einer Internetverbindung abhängig.\n• Technische Störungen, Netzunterbrechungen oder Wartungen können den Dienst vorübergehend beeinträchtigen.\n• Luz Psíquica garantiert keine kontinuierliche und unterbrechungsfreie Verfügbarkeit.",

      s10Heading: "10. Änderungen des Dienstes",
      s10Body: "Luz Psíquica behält sich das Recht vor:\n• Funktionen zu ändern\n• operative Regeln anzupassen\n• Zahlungs-, Kommunikations- oder Inhaltssysteme zu aktualisieren\nDiese Änderungen können zur Verbesserung der Nutzererfahrung oder aus technischen, rechtlichen oder operativen Gründen vorgenommen werden.",

      s11Heading: "11. Annahme des Dokuments",
      s11Body: "Die Nutzung der Plattform beinhaltet die ausdrückliche Annahme dieses Dokuments zum\noperativen Betrieb sowie der übrigen zugehörigen rechtlichen Dokumente.",

      s12Heading: "12. Zusätzliche Informationen",
      s12Body: "Verantwortlich für die technologische Entwicklung der Plattform:\nAndrés Loaiza\nDesign, technische Entwicklung, funktionale Architektur und technologischer Betrieb der Plattform Luz Psíquica wurden unter der Leitung der genannten verantwortlichen Person in Abstimmung mit den Zielen, ethischen Grundsätzen und operativen Leitlinien der Plattform durchgeführt.\nSchlusshinweis\nDieses Dokument wird im Rahmen des Engagements von Luz Psíquica für Transparenz, technologische Ethik, verantwortungsvolle Kreativität und operative Klarheit veröffentlicht."
    }
  },

  pt: {
    nav_home: 'Início',
    nav_legal: 'Legal',
    nav_lang: 'Idioma',
    lang_title: 'Selecionar idioma',
    legal_title: 'Regras e Privacidade',
    legal_body: 'Aqui vamos integrar Termos, Privacidade e avisos legais antes da produção final.',
    close: 'Fechar',

    login_header_title: 'Iniciar sessão',
    login_title: 'Luz Psíquica',
    login_subtitle: 'Acesse sua conta para continuar',
    login_email_or_phone: 'E-mail ou telefone',
    login_phone_helper: 'Se usar telefone, insira-o no formato internacional (ex.: +55 11 90000-0000).',
    login_password: 'Senha',
    login_enter: 'Entrar',
    login_forgot: 'Esqueceu sua senha?',
    login_client_register: 'Cliente? Criar conta',
    login_psychic_apply: 'Psíquico? Candidate-se',
    login_error_title: 'Erro de login',
    login_missing_credentials: 'Por favor, insira seu número e senha.',

    agora_title: 'Chamada (placeholder)',
    agora_psychic: 'Psíquico',
    agora_room: 'Sala',
    agora_call_id: 'CallId',
    agora_initial_minutes: 'Minutos iniciais',
    agora_socket: 'Socket',
    agora_status: 'Status',
    agora_back: 'Voltar',
    agora_note:
      '* Se o cliente desligar ou o psíquico recusar, esta tela deve fechar automaticamente (socket + polling).',

    call_end_title: 'Chamada finalizada',
    call_end_ok: 'OK',
    call_end_default: 'A chamada terminou.',
    call_end_missed: 'A chamada foi recusada/perdida.',
    call_end_cancelled: 'A chamada foi cancelada (sem cobrança).',
    call_end_caller_hungup: 'O cliente desligou.',

    cfg_error_title: 'Erro de configuração',
    cfg_error_body: 'EXPO_PUBLIC_API_URL não foi configurado.',
    error_title: 'Erro',
    error_no_callid: 'callId não foi recebido.',
    session_expired_title: 'Sessão expirada',
    session_expired_body: 'Usuário autenticado não encontrado.',
    psychic_fallback_name: 'Psíquico',
    dash_placeholder: '—',

    buy_minutes_header_title: 'Comprar minutos',

    buy_minutes_title: 'Comprar minutos',
    buy_minutes_subtitle:
      'Compre pacotes de minutos (PayPal). O consumo é descontado em chamadas e chat.',
    buy_minutes_current_balance: 'Seus minutos atuais',
    buy_minutes_pending_title: 'Pagamento pendente',
    buy_minutes_order: 'Pedido',
    buy_minutes_total: 'Total',
    buy_minutes_confirming: 'Confirmando pagamento...',
    buy_minutes_return_hint: 'Volte ao app após aprovar no PayPal.',
    buy_minutes_paid_fallback: 'Já paguei (fallback)',
    buy_minutes_cancel: 'Cancelar',
    buy_minutes_pkg_minutes: 'minutos',
    buy_minutes_tap_to_pay: 'Toque para iniciar o pagamento no PayPal',

    session_expired: 'Sua sessão expirou. Faça login novamente.',
    paypal_approve_url_missing: 'O PayPal não retornou a URL de aprovação.',

    payment_success_balance:
      'Pagamento realizado com sucesso. {{added}} minutos foram adicionados. Novo saldo: {{balance}}.',
    payment_confirmed_balance:
      'Pagamento confirmado. Saldo atualizado: {{balance}}.',

    buy_minutes_available_packages: 'Pacotes disponíveis',
    buy_minutes_summary: 'Resumo',
    buy_minutes_selected_minutes: 'Minutos selecionados',
    buy_minutes_rate_per_minute: 'Preço por minuto',
    buy_minutes_base_price: 'Preço base',
    buy_minutes_savings: 'Economia',
    buy_minutes_total_to_pay: 'Total a pagar',
    buy_minutes_redirect_note:
      'Você será redirecionado para o PayPal para aprovar o pagamento. Ao retornar, seus minutos serão creditados automaticamente.',

    session_expired: 'Sua sessão expirou. Faça login novamente.',
    paypal_approve_url_missing: 'O PayPal não retornou a URL de aprovação.',

    payment_success_balance:
      'Pagamento realizado com sucesso. {{added}} minutos foram adicionados. Novo saldo: {{balance}}.',
    payment_confirmed_balance:
      'Pagamento confirmado. Saldo atualizado: {{balance}}.',

    discount_label: 'Desconto: {{pct}}%',

    paypal_continue_title: 'Continue no PayPal',
    paypal_continue_body:
      'Aprove o pagamento no PayPal.\n\nAo voltar ao app, a confirmação será automática.',

    purchase_success_title: 'Compra realizada',
    purchase_success_body:
      'Pagamento confirmado.\nForam adicionados {{added}} minutos.',

    payment_cancelled_title: 'Pagamento cancelado',
    payment_cancelled_body: 'Você cancelou o pagamento no PayPal.',

    err_title: 'Erro',
    err_load_minutes: 'Não foi possível carregar o saldo de minutos.',
    err_no_config: 'EXPO_PUBLIC_API_URL não está configurado',
    err_not_auth: 'Usuário não autenticado',
    err_create_order: 'Não foi possível criar o pedido do PayPal.',
    err_open_paypal: 'Não foi possível abrir o PayPal neste dispositivo.',
    err_capture_payment: 'Não foi possível capturar o pagamento.',
    err_auto_finish_title: 'Não foi possível finalizar automaticamente',
    err_auto_finish_body:
      'O pagamento ainda não foi confirmado. Se você acabou de aprovar, tente novamente em alguns segundos.',
    err_read_paypal_token: 'Não foi possível ler o token do PayPal para finalizar a compra.',

    pending_still_not_confirmed_title: 'Pagamento ainda não confirmado',
    pending_still_not_confirmed_body:
      'Ainda não foi possível capturar. Verifique se aprovou no PayPal e tente novamente.',
    retry: 'Tentar novamente',
    dash_placeholder2: '--',
    minutes_suffix: 'min',

    callhist_header_title: 'Histórico de chamadas',

    callhist_title_default: 'Histórico de chamadas',
    callhist_title_with_name: 'Histórico de chamadas',

    callhist_loading: 'Carregando histórico…',
    callhist_back_dashboard: 'Voltar ao painel',
    callhist_refresh: 'Atualizar histórico',
    callhist_empty: 'Você ainda não tem sessões registradas.',
    callhist_not_enough_data: 'Ainda não há dados suficientes.',

    callhist_summary_minutes_title: 'Resumo de minutos',
    callhist_summary_earnings_title: 'Resumo de ganhos',

    callhist_minutes_available: 'Minutos disponíveis',
    callhist_minutes_spent_calls: 'Minutos gastos (📞)',
    callhist_minutes_spent_chats: 'Minutos gastos (💬)',
    callhist_minutes_spent_total: 'Total gasto',

    callhist_minutes_earned_calls: 'Minutos ganhos (📞)',
    callhist_minutes_earned_chats: 'Minutos ganhos (💬)',
    callhist_minutes_earned_total: 'Total de minutos ganhos',
    callhist_earnings_total: 'Ganho acumulado',

    callhist_summary_by_client: 'Resumo por cliente',
    callhist_summary_by_psychic: 'Resumo por psíquico',

    callhist_status_finished: 'Finalizada',
    callhist_status_missed: 'Recusada/Perdida',
    callhist_status_ongoing: 'Em andamento',
    callhist_status_cancelled: 'Cancelada',
    callhist_placeholder: '—',

    callhist_type_chat: '💬 Chat',
    callhist_type_voice: '📞 Chamada',

    callhist_start: 'Início',
    callhist_end: 'Fim',

    callhist_duration: '⏱ {{secs}}s',
    callhist_minutes_charged: '⌛ {{mins}} min cobrados',
    callhist_no_charge: ' · Sem cobrança',
    callhist_earning_line: ' · 💰 ${{usd}} USD',

    callhist_rate_your_rating: 'Sua avaliação: {{rating}}/5',
    callhist_rate_prompt: 'Avaliar esta chamada:',
    callhist_rate_saving: 'Salvando…',

    callhist_rate_confirm_title: 'Confirmar avaliação',
    callhist_rate_confirm_body: 'Quer avaliar com {{stars}} estrelas?',
    callhist_cancel: 'Cancelar',
    callhist_yes: 'Sim',

    callhist_thanks: 'Obrigado',
    callhist_rate_saved: 'Sua avaliação foi salva.',

    callhist_err_config_title: 'Erro de configuração',
    callhist_err_config_body: 'EXPO_PUBLIC_API_URL não está configurado.',
    callhist_err_session_title: 'Sessão expirada',
    callhist_err_session_body_token: 'Token não encontrado. Faça login novamente.',
    callhist_err_session_body_login: 'Faça login novamente.',
    callhist_err_title: 'Erro',
    callhist_err_load: 'Não foi possível carregar o histórico.',
    callhist_err_rate_save: 'Não foi possível salvar a avaliação.',

    callhist_psychic_fallback: 'Psíquico',

    chat_header_title: 'Chat com {{name}}',

    chat_loading_session: 'Carregando sessão…',
    chat_not_available_title: 'Chat indisponível',
    chat_not_available_body: 'Faltam dados para abrir o chat: {{missing}}.',
    chat_not_available_hint: '(Verifique se está navegando com otherUserId e se EXPO_PUBLIC_API_URL existe)',

    chat_block_unavailable: '⛔ O psíquico não está disponível. Você pode ver o chat, mas não enviar mensagens.',
    chat_block_no_minutes: '⛔ Você não tem minutos disponíveis. Você pode ver o histórico, mas precisa comprar minutos para conversar.',

    chat_inactivity_warning_prefix: '⚠️ Inatividade detectada. O chat será pausado em {{sec}}s.',
    chat_timeout_bar: '⏸️ Chat pausado por inatividade. {{msg}}',
    chat_timeout_client_hint: 'Escreva ou toque em “Retomar”.',
    chat_timeout_other_hint: 'Aguarde o cliente.',
    chat_resume: 'Retomar',

    chat_loading_conversation: 'Carregando conversa…',
    chat_block_offline_psychic: 'Psíquico offline. Tente novamente mais tarde.',
    chat_policy_personal_info: '⚠️ Você não pode enviar dados pessoais (telefone, e-mail ou endereço). Reformule.',
    chat_block_unavailable_short: '⛔ O psíquico não está disponível no momento. Você não pode enviar mensagens.',
    chat_block_no_minutes_short: '⛔ Você não tem minutos para conversar. Compre minutos para continuar.',
    chat_block_wait_client_start: '⏳ Aguardando o cliente iniciar o chat (primeira mensagem do cliente).',
    chat_block_client_inactive: '⏸️ Chat em pausa por inatividade do cliente. Aguarde o cliente retomar.',
    chat_block_session_closed: '⛔ A sessão está encerrada. Você precisa iniciar uma nova sessão.',
    chat_network_error_send: 'Erro de rede ao enviar a mensagem.',

    chat_placeholder_unavailable: 'Psíquico indisponível…',
    chat_placeholder_no_minutes: 'Sem minutos…',
    chat_placeholder_paused: 'Chat em pausa…',
    chat_placeholder_timeout: 'Chat pausado por inatividade…',
    chat_placeholder_write: 'Escreva sua mensagem…',
    chat_placeholder_offline_psychic: 'Não é possível enviar mensagens',

    chat_send: 'Enviar',
    chat_sending_dots: '…',

    chat_other_psychic: 'Psíquico',
    chat_other_client: 'Cliente',
    chat_other_chat: 'Chat',

    clientdash_header_title: 'Painel do Cliente',

    clientdash_title: 'Meu painel',
    clientdash_subtitle: '{{name}}, aqui você pode ver seu saldo de minutos e suas chamadas.',

    clientdash_quick_summary: 'Resumo rápido',
    clientdash_loading_info: 'Carregando informações…',
    clientdash_minutes_available: 'Minutos disponíveis:',
    clientdash_calls_made: 'Chamadas realizadas:',

    clientdash_last_calls: 'Últimas chamadas',
    clientdash_view_history: 'Ver histórico',
    clientdash_loading_history: 'Carregando histórico…',
    clientdash_status_finished: "Finalizada",
    clientdash_status_missed: "Perdida",
    clientdash_status_ongoing: "Em andamento",
    clientdash_status_cancelled: "Cancelada",
    clientdash_status_unknown: "—",
    clientdash_no_calls: 'Você ainda não tem chamadas registradas.',
    clientdash_view_full_history: 'Ver histórico completo',

    clientdash_actions: 'Ações',
    clientdash_go_psychics: 'Ir para a lista de psíquicos',
    clientdash_go_chat: 'Ir para o chat',

    clientdash_select_psychic_title: 'Selecione um psíquico',
    clientdash_select_psychic_body: 'Para abrir o chat, você deve primeiro escolher um psíquico na lista.',

    clientdash_error_config_title: 'Erro de configuração',
    clientdash_error_config_body: 'EXPO_PUBLIC_API_URL não está configurado.',

    clientdash_session_expired_title: 'Sessão expirada',
    clientdash_session_expired_body: 'Token não encontrado. Faça login novamente.',

    clientdash_error_title: 'Erro',
    clientdash_error_body: 'Não foi possível carregar as informações do painel. Tente novamente mais tarde.',
    clientdash_chat_error_body: 'Não foi possível abrir o chat agora. Tente novamente.',

    clientdash_buy_minutes: 'Comprar minutos',

    clientdash_no_minutes_title: 'Você não tem minutos disponíveis',
    clientdash_no_minutes_body: 'Compre minutos para iniciar chats e chamadas com seus conselheiros espirituais.',

    clientdash_low_minutes_title: 'Seus minutos estão acabando',
    clientdash_low_minutes_body: 'Você tem {{n}} minutos restantes. Compre mais para continuar usando o aplicativo sem interrupções.',
    clientdash_delete_account_title: 'Excluir conta',
    clientdash_delete_account_body: 'Se você deseja encerrar sua conta permanentemente, pode continuar por aqui. Esta ação o levará a uma tela segura de confirmação.',
    clientdash_delete_account_cta:'Continuar para excluir a conta',

    delete_account_header_title: 'Excluir conta',
    delete_account_title: 'Excluir conta',
    delete_account_subtitle: 'Você está gerenciando a exclusão permanente da sua conta.',
    delete_account_subtitle_with_name: 'Você está gerenciando a exclusão da conta de {{name}}.',
    delete_account_success_title: 'Conta excluída',
    delete_account_success_body: 'Sua conta foi excluída com sucesso.',
    delete_account_success_ok: 'OK',
    delete_account_error_title: 'Erro ao excluir conta',
    delete_account_error_body: 'Não foi possível excluir a conta. Tente novamente.',
    delete_account_confirm_title: 'Confirmar exclusão',
    delete_account_confirm_body: 'Esta ação é permanente e não pode ser desfeita.',
    delete_account_confirm_cta: 'Excluir minha conta',
    delete_account_confirm_section_title: 'Confirmação',
    delete_account_confirm_check_label: 'Entendo que esta ação é permanente e desejo continuar.',
    delete_account_confirm_required_title: 'Confirmação necessária',
    delete_account_confirm_required_body:  'Você deve confirmar que entende que esta ação é permanente.',
    delete_account_cancel_cta: 'Cancelar',
    delete_account_password_label: 'Senha atual',
    delete_account_password_helper: 'Você pode inserir sua senha como validação adicional. Este campo é opcional.',
    delete_account_password_placeholder: 'Digite sua senha (opcional)',
    delete_account_warning_title: 'Aviso importante',
    delete_account_warning_body: 'Ao excluir sua conta, você perderá o acesso ao seu perfil e às informações associadas.',
    delete_account_warning_point_1: 'Você não poderá entrar novamente com esta conta após excluí-la.',
    delete_account_warning_point_2: 'Esta ação é pensada como uma exclusão permanente.',
    delete_account_warning_point_3: 'Antes de continuar, certifique-se de que realmente deseja encerrar sua conta.',
    delete_account_processing: 'Excluindo conta...',

    clienthome_header_title: 'Início do cliente',
    clienthome_register: 'Cadastrar',
    clienthome_logout: 'Sair',

    clienthome_welcome: 'Bem-vindo',
    clienthome_welcome_name: 'Bem-vindo, {{name}}',

    clienthome_subtitle: 'Escolha um psíquico disponível para iniciar uma consulta por áudio ou chat.',
    clienthome_my_panel: 'Meu painel',
    clienthome_login: 'Iniciar sessão',
    clienthome_loading_psychics: 'Carregando psíquicos…',
    clienthome_empty: 'Não há psíquicos cadastrados no momento.',

    languages: {
      es: 'Espanhol',
      en: 'Inglês',
      fr: 'Francês',
      de: 'Alemão',
      pt: 'Português',
      it: 'Italiano',
    },

    clienthome_psychic_available: 'Disponível',
    clienthome_psychic_not_available: 'Indisponível',
    clienthome_psychic_busy_label: 'Ocupado',
    clienthome_psychic_offline_suffix: ' (offline)',
    clienthome_busy_in_call: 'Ocupado (em chamada)',

    clienthome_call_now: 'Ligar agora',
    clienthome_chat: 'Chat',

    clienthome_comments: 'Comentários',
    clienthome_comments_sent: 'Comentários (enviado)',

    clienthome_psychic_not_available_title: 'Psíquico indisponível',
    clienthome_psychic_not_available_body: 'Este psíquico não está disponível no momento.',

    clienthome_session_expired_title: 'Sessão expirada',
    clienthome_session_expired_body: 'Faça login novamente.',

    clienthome_no_minutes_title: 'Sem minutos',
    clienthome_no_minutes_body: 'Você não tem saldo suficiente.',
    clienthome_no_minutes_cancel: 'Cancelar',
    clienthome_no_minutes_buy: 'Comprar minutos',

    clienthome_error_title: 'Erro',
    clienthome_error_load_psychics: 'Não foi possível carregar a lista de psíquicos.',
    clienthome_error_invalid_server: 'Resposta inválida do servidor.',
    clienthome_error_unexpected_format: 'Formato inesperado na lista de psíquicos.',
    clienthome_error_invalid_response: 'Resposta inválida do servidor.',

    clienthome_snippet_fallback: 'Psíquico disponível para te atender.',

    clienthome_call_start_error: 'Não foi possível iniciar a chamada. Tente novamente.',

    app_layout_default_title: "Luz Psíquica",
    app_layout_logo_alt: "Luz Psíquica",
    app_layout_footer_home: "Início",
    app_layout_footer_legal: "Legal",
    app_layout_footer_language: "Idioma",
    app_layout_language_modal_title: "Selecionar idioma",
    app_layout_language_name_es: "Espanhol",
    app_layout_language_name_en: "Inglês",
    app_layout_language_name_fr: "Francês",
    app_layout_language_name_de: "Alemão",
    app_layout_language_name_pt: "Português",
    app_layout_language_name_it: "Italiano",
    common: {
      close: "Fechar"
    },

    network_error_title: 'Erro',
    network_error_message: 'Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.',
    generic_error_message: 'Ocorreu um erro inesperado. Tente novamente.',

    directcall_config_error_title: 'Erro de configuração',
    directcall_config_error_body: 'EXPO_PUBLIC_API_URL não foi configurada.',

    directcall_session_expired_title: 'Sessão expirada',
    directcall_session_expired_body_login_again: 'Faça login novamente.',
    directcall_session_expired_body_token_missing: 'Token não encontrado. Faça login novamente.',
    directcall_session_expired_body_call: 'Faça login novamente para fazer uma chamada.',

    directcall_error_title: 'Erro',
    directcall_error_missing_psychic: 'Não foi possível encontrar as informações do psíquico.',
    directcall_error_start_call: 'Não foi possível iniciar a chamada.',
    directcall_error_invalid_call_params: 'O servidor não retornou parâmetros válidos da chamada.',

    directcall_cannot_start_title: 'Não é possível iniciar a chamada',
    directcall_cannot_start_no_minutes_fallback: 'Sem saldo de minutos',
    directcall_cancel: 'Cancelar',
    directcall_buy_minutes: 'Comprar minutos',

    directcall_connecting_with: 'Conectando consulta com',
    directcall_psychic_fallback: 'Psíquico',

    directcall_hint_starting: 'Iniciando chamada…',
    directcall_hint_loading: 'Carregando…',
    directcall_hint_ready: 'Pronto',

    directcall_note_no_answer: '* Se o psíquico não atender, você pode tentar outro na lista.',

    forgot_header_title: 'Redefinir senha',
    
    forgot_title: 'Redefinir senha',

    forgot_subtitle: 'Digite seu e-mail ou telefone para receber o código de recuperação.',

    forgot_field_label_email_or_phone: 'E-mail ou telefone',
    forgot_placeholder_email_or_phone: 'E-mail ou telefone',

    forgot_required_title: 'Campo obrigatório',
    forgot_required_email_or_phone: 'Digite seu e-mail ou telefone.',
    forgot_required_code: 'Digite o código que você recebeu.',

    forgot_send_code: 'Enviar código',
    forgot_step2_help: 'Enviamos um código. Digite-o aqui e defina sua nova senha.',

    forgot_done_body_sms: 'Enviamos um código por SMS para redefinir sua senha. Verifique-o e insira abaixo.',
    forgot_step2_help_sms: 'Se você não receber o código, verifique se seu número está correto ou solicite um novo.',

    forgot_code_label: 'Código',
    forgot_code_placeholder: 'Código (6 dígitos)',

    forgot_new_password_label: 'Nova senha',
    forgot_new_password_placeholder: 'Nova senha',

    forgot_confirm_password_label: 'Confirmar senha',
    forgot_confirm_password_placeholder: 'Confirmar senha',

    forgot_weak_password_title: 'Senha fraca',
    forgot_weak_password_body: 'A senha deve ter pelo menos 6 caracteres.',

    forgot_not_match_title: 'Não coincide',
    forgot_not_match_body: 'As senhas não coincidem.',

    forgot_done_title: 'Pronto',
    forgot_done_body_generic: 'Se o usuário existir, enviaremos um código para recuperar a senha.',

    forgot_error_title: 'Erro',
    forgot_error_send_code: 'Não foi possível enviar o código.',
    forgot_error_reset: 'Não foi possível alterar a senha.',

    forgot_password_updated_title: 'Senha atualizada',
    forgot_password_updated_body: 'Agora você pode fazer login com sua nova senha.',

    forgot_change_password: 'Alterar senha',

    forgot_resend_code: 'Reenviar código',
    forgot_back_to_login: 'Voltar ao login',

    forgot_show_password_a11y: 'Mostrar senha',
    forgot_hide_password_a11y: 'Ocultar senha',

    legal_home_header_title: 'Legal',
    legal_home_title: 'Legal',
    legal_home_meta: 'Selecione o documento que deseja consultar.',

    legal_home_card_privacy_title: 'Regras e Privacidade',
    legal_home_card_privacy_desc: 'Termos de uso, privacidade, reembolsos e regras gerais.',

    legal_home_card_operational_title: 'Documento de Funcionamento Operacional da Plataforma',
    legal_home_card_operational_desc:
      'Funcionamento técnico-operacional, papéis, sessões, minutos e regras de operação.',

    common_back: 'Voltar',

    psych_callhist_header_title: 'Histórico de chamadas',

    psych_callhist_title: 'Histórico de chamadas',
    psych_callhist_session_expired_title: 'Sessão expirada',
    psych_callhist_session_expired_body: 'Faça login novamente.',
    psych_callhist_error_title: 'Erro',
    psych_callhist_error_load_history: 'Erro ao carregar o histórico',
    psych_callhist_error_load_history_fallback: 'Não foi possível carregar o histórico.',
    psych_callhist_error_load_payout: 'Erro ao carregar o resumo de pagamentos',

    psych_callhist_status_finished: 'Finalizada',
    psych_callhist_status_missed: 'Recusada/Perdida',
    psych_callhist_status_ongoing: 'Em andamento',
    psych_callhist_status_cancelled: 'Cancelada',
    psych_callhist_status_unknown: '—',

    psych_callhist_client_fallback: 'Cliente',

    psych_callhist_start: 'Início',
    psych_callhist_end: 'Fim',
    psych_callhist_no_charge: 'Sem cobrança',

    psych_callhist_payout_block_title: 'Resumo de pagamentos (PayPal)',
    psych_callhist_earned_total: 'Total ganho:',
    psych_callhist_paid_total: 'Pago:',
    psych_callhist_pending_total: 'Pendente:',
    psych_callhist_last_payout: 'Último pagamento:',

    psych_callhist_info_block_title: 'Resumo informativo',
    psych_callhist_calls: 'Chamadas:',
    psych_callhist_minutes_charged: 'Minutos cobrados:',
    psych_callhist_estimated_earnings: 'Ganho estimado:',
    psych_callhist_info_hint: '*Este valor é informativo. O pagamento real é baseado nas liquidações.',

    psych_callhist_empty: 'Você ainda não tem chamadas.',

    psych_call_perm_title: 'Permissão do microfone',
    psych_call_perm_message_appname: 'Luz Psíquica precisa de acesso ao microfone para chamadas de voz.',
    psych_call_perm_allow: 'Permitir',
    psych_call_perm_deny: 'Cancelar',

    psych_call_client_fallback: 'Cliente',
    psych_call_dash: '—',

    psych_call_end_title: 'Chamada encerrada',
    psych_call_end_client_cancelled: 'O cliente cancelou a chamada.',
    psych_call_end_missed_or_incomplete: 'A chamada foi recusada ou não foi concluída.',
    psych_call_end_error_title: 'Erro',
    psych_call_end_error_body: 'Não foi possível encerrar a chamada corretamente.',

    psych_call_audio_no_mic_permission: 'Sem permissão do microfone',
    psych_call_audio_session_expired: 'Sessão expirada',
    psych_call_audio_invalid_token: 'Token de voz inválido',
    psych_call_audio_incomplete_data: 'Dados do Agora incompletos',
    psych_call_audio_sdk_unavailable: 'SDK do Agora indisponível',
    psych_call_audio_connect_error: 'Erro ao conectar o áudio',

    psych_call_audio_status_error_prefix: 'Erro de áudio: {{msg}}',
    psych_call_audio_status_connecting: 'Conectando áudio…',
    psych_call_audio_status_waiting_client: 'Áudio conectado. Aguardando o cliente…',
    psych_call_audio_status_connected_client: 'Áudio conectado com o cliente.',

    psych_call_title_in_progress: 'Chamada em andamento',
    psych_call_room_label: 'Sala:',
    psych_call_time_label: 'Tempo:',
    psych_call_end_button: 'Encerrar chamada',

    psych_chathist_title: 'Histórico de chats',
    psych_chathist_refresh: 'Atualizar',
    psych_chathist_refresh_busy: '…',
    psych_chathist_loading: 'Carregando conversas…',
    psych_chathist_empty: 'Ainda não há chats para mostrar.',
    psych_chathist_error_load: 'Não foi possível carregar o histórico',

    psych_chathist_readonly_note: 'Somente leitura (o psíquico não inicia chats)',

    psych_chathist_client_fallback: 'Cliente',
    psych_chathist_dash: '—',
    psych_chathist_initials_fallback: 'LP',

    psych_chatthread_title_with_name: 'Chat com {{name}}',
    psych_chatthread_readonly_note: 'Somente leitura (o psíquico não inicia chats)',
    psych_chatthread_loading: 'Carregando mensagens…',
    psych_chatthread_empty: 'Não há mensagens para mostrar.',
    psych_chatthread_error_load: 'Não foi possível carregar o chat',

    psych_chatthread_client_fallback: 'Cliente',
    psych_chatthread_dash: '—',

    psych_comments_nav_title_with_name: 'Comentários - {{name}}',
    psych_comments_psychic_fallback: 'Psíquico',
    psych_comments_client_prefix: 'Cliente',
    psych_comments_dash: '—',

    psych_comments_loading: 'Carregando comentários…',
    psych_comments_loading_fallback: 'Carregando comentários…',
    psych_comments_error_title: 'Erro',
    psych_comments_err_no_api_url: 'EXPO_PUBLIC_API_URL não está configurado.',
    psych_comments_err_no_psychic_id: 'psychicId não foi recebido.',
    psych_comments_err_load_comments: 'Não foi possível carregar os comentários',

    psych_comments_not_available_title: 'Não disponível',
    psych_comments_not_available_body: 'Você só pode avaliar após finalizar uma consulta.',
    psych_comments_session_expired_title: 'Sessão expirada',
    psych_comments_session_expired_body: 'Faça login novamente.',

    psych_comments_saved_title: 'Pronto!',
    psych_comments_saved_only_rating: 'Avaliação salva. Você já havia deixado um comentário para este psíquico.',
    psych_comments_saved: 'Avaliação salva.',

    psych_comments_err_save_rating: 'Não foi possível salvar a avaliação',

    psych_comments_info_line1_a: 'Esta tela é para ',
    psych_comments_info_line1_strong: 'visualizar',
    psych_comments_info_line1_b: ' comentários.',
    psych_comments_info_line2_a: 'A ',
    psych_comments_info_line2_strong: 'avaliação',
    psych_comments_info_line2_b: ' é feita após uma consulta finalizada.',
    psych_comments_info_line3_a: 'O ',
    psych_comments_info_line3_strong1: 'comentário',
    psych_comments_info_line3_b: ' (texto) é opcional e só é permitido ',
    psych_comments_info_line3_strong2: 'uma vez por psíquico',
    psych_comments_info_line3_c: '.',

    psych_comments_form_title: 'Avalie esta consulta',
    psych_comments_form_label_rating: 'Avaliação',
    psych_comments_form_label_comment: 'Comentário (opcional)',
    psych_comments_locked_text:
      '✅ Você já deixou um comentário para este psíquico. Você pode continuar avaliando suas consultas, mas não escrever outro comentário.',
    psych_comments_input_placeholder: 'Escreva seu comentário (opcional)...',

    psych_comments_saving: 'Salvando…',
    psych_comments_save_button: 'Salvar avaliação',

    psych_comments_empty: 'Ainda não há comentários.',

    psych_dash_header_title: 'Painel do Psíquico',
    psych_dash_logout: 'Sair',

    psych_dash_psychic_fallback: 'Psíquico',
    psych_dash_client_fallback: 'Cliente',
    psych_dash_room_dash: '—',

    psych_dash_config_error_title: 'Erro de configuração',
    psych_dash_config_error_body_missing_api: 'EXPO_PUBLIC_API_URL não está configurado.',
    psych_dash_config_error_body_missing_api_env: 'EXPO_PUBLIC_API_URL não foi definido. Verifique seu arquivo .env.',

    psych_dash_session_expired_title: 'Sessão expirada',
    psych_dash_session_expired_body: 'Faça login novamente.',
    psych_dash_session_expired_body_and_logout: 'Faça login novamente.',

    psych_dash_info_title: 'Info',
    psych_dash_info_cant_load_application: 'Não foi possível carregar sua candidatura. Tente novamente.',

    psych_dash_nav_error_title: 'Erro de navegação',
    psych_dash_nav_error_body_missing_route:
      'Neste stack, a rota "PsychicRegister" não está registrada.\n\nSolução: adicione esta screen no MESMO stack onde está PsychicDashboard:\n<Stack.Screen name="PsychicRegister" component={PsychicRegisterScreen} />',

    psych_dash_error_title: 'Erro',
    psych_dash_error_refresh_info: 'Não foi possível atualizar as informações',
    psych_dash_error_open_form: 'Não foi possível abrir o formulário.',

    psych_dash_call_end_title: 'Chamada finalizada',
    psych_dash_call_end_body_caller_cancelled: 'O cliente cancelou a chamada.',
    psych_dash_call_end_body_finished: 'A chamada terminou.',

    psych_dash_not_available_title: 'Não disponível',
    psych_dash_not_available_call_cancelled: 'A chamada já foi cancelada pelo cliente.',

    psych_dash_modal_incoming_title: 'Chamada recebida',
    psych_dash_modal_incoming_sub: 'Atenda para iniciar a consulta',
    psych_dash_modal_client_label: 'Cliente:',
    psych_dash_modal_room_label: 'Sala:',
    psych_dash_modal_processing: 'Processando…',
    psych_dash_modal_reject: 'Recusar',
    psych_dash_modal_accept: 'Aceitar',
    psych_dash_modal_footnote: '* A cobrança começa quando o psíquico atende.',

    psych_dash_header_role_line: 'Psíquico · Luz Psíquica',
    psych_dash_header_hint_calls: 'Quando você estiver disponível, receberá aqui as chamadas dos clientes em tempo real.',
    psych_dash_socket_status: 'Status do socket: {{status}}',
    psych_dash_socket_connected: 'Conectado',
    psych_dash_socket_disconnected: 'Desconectado',

    psych_dash_profile_review_title: 'Revisão do perfil',

    psych_dash_team_note_label: 'Nota da equipe:',
    psych_dash_fields_to_fix_label: 'Seções a corrigir:',
    psych_dash_fix_button: 'Corrigir e reenviar formulário',
    psych_dash_loading: 'Carregando…',

    psych_dash_revision_hint: 'Aqui você verá quaisquer ajustes ou recomendações que a equipe solicitar para o seu perfil.',

    psych_dash_new_messages_title: 'Novas mensagens',
    psych_dash_new_messages_new_suffix: 'novo(s)',
    psych_dash_new_messages_open: 'Abrir',
    psych_dash_new_messages_close: 'X',

    psych_dash_availability_title: 'Disponibilidade',
    psych_dash_availability_currently: 'No momento você está',
    psych_dash_available: 'Disponível',
    psych_dash_not_available: 'Indisponível',
    psych_dash_updating: 'Atualizando...',
    psych_dash_set_not_available: 'Ficar indisponível',
    psych_dash_set_available: 'Ficar disponível',

    psych_dash_rating_title: 'Avaliação',
    psych_dash_refresh: 'Atualizar',
    psych_dash_based_on: 'Com base em {{count}}',
    psych_dash_ratings_word: 'avaliações',
    psych_dash_loading_comments: 'Carregando comentários…',
    psych_dash_no_visible_comments: 'Ainda não há comentários visíveis aqui.',
    psych_dash_recent_comments_title: 'Comentários recentes',
    psych_dash_view_all_comments: 'Ver todos os comentários',

    psych_dash_calls_history_title: 'Histórico de chamadas',
    psych_dash_calls_history_body: 'Veja as chamadas que você atendeu e o status delas.',
    psych_dash_view_calls_history: 'Ver histórico de chamadas',

    psych_dash_chats_history_title: 'Histórico de chats',
    psych_dash_chats_history_body: 'Veja os chats que você teve com seus clientes.',
    psych_dash_view_chats_history: 'Ver histórico de chats',

    psych_dash_info_block_title: 'Informações',
    psych_dash_info_bullet_1: '• Quando um cliente iniciar uma chamada e você estiver disponível, você verá um alerta de chamada recebida.',
    psych_dash_info_bullet_2: '• Ao aceitar, você entrará na tela de chamada para atender o cliente.',
    psych_dash_info_bullet_3: '• ✅ Quando um cliente enviar uma mensagem, você verá em “Novas mensagens” e poderá abrir o chat.',

    psych_profile_header_title: 'Perfil do Psíquico',

    psych_profile_loading_profile: 'Carregando perfil...',

    psych_profile_psychic_fallback: 'Psíquico',
    psych_profile_no_info: 'Não foi encontrada informação do psíquico.',
    psych_profile_back: 'Voltar',

    psych_profile_available: 'Disponível',
    psych_profile_not_available: 'Indisponível',
    psych_profile_busy: 'Ocupado',
    psych_profile_stats_calls_word: 'chamadas',

    psych_profile_featured_review_tag: '⭐ Comentário em destaque',
    psych_profile_featured_review_rating_label: 'Avaliação',
    psych_profile_featured_review_client_prefix: '— Cliente',

    psych_profile_bio_title: 'Biografia',
    psych_profile_bio_rate_label: 'Tarifa: US$1.25/min',
    psych_profile_bio_phrase_label: 'Frase:',
    psych_profile_bio_languages_label: 'Idiomas:',
    psych_profile_bio_areas_label: 'Áreas:',
    psych_profile_bio_tools_label: 'Ferramentas:',
    psych_profile_bio_experience_label: 'Experiência:',
    psych_profile_bio_about_me_label: 'Sobre mim:',

    psych_profile_work_info_title: 'Informações de trabalho',
    psych_profile_work_exp_phone_chat_label: 'Experiência por telefone/chat:',
    psych_profile_yes: 'Sim',
    psych_profile_no: 'Não',
    psych_profile_work_start_year_label: 'Ano de início:',
    psych_profile_work_hours_per_week_label: 'Horas por semana:',
    psych_profile_work_channels_label: 'Canais (telefone e chat):',

    psych_profile_comments_title: 'Comentários',
    psych_profile_loading_comments: 'Carregando comentários…',
    psych_profile_no_comments: 'Ainda não há comentários para este psíquico.',
    psych_profile_showing_comments_prefix: 'Mostrando',
    psych_profile_showing_comments_suffix: 'comentário(s), do mais recente ao mais antigo.',

    psych_profile_history_title: 'Histórico',
    psych_profile_history_body: 'Consulte o histórico das suas chamadas com este psíquico.',
    psych_profile_view_call_history: 'Ver histórico de chamadas',

    psych_profile_call_now: 'Ligar agora',
    psych_profile_chat: 'Chat',
    psych_profile_unavailable_short: 'Indisponível',

    psych_profile_psychic_unavailable_title: 'Psíquico indisponível',
    psych_profile_psychic_unavailable_body_try_later: 'Este psíquico não está disponível no momento. Tente mais tarde.',
    psych_profile_psychic_unavailable_body: 'Este psíquico não está disponível no momento.',

    psych_profile_config_error_title: 'Erro de configuração',
    psych_profile_config_error_body_missing_api: 'EXPO_PUBLIC_API_URL não está configurado.',

    psych_profile_session_expired_title: 'Sessão expirada',
    psych_profile_session_expired_body_call: 'Faça login novamente para realizar uma chamada.',

    psych_profile_call_cannot_start_title: 'Não é possível iniciar a chamada',
    psych_profile_call_cannot_start_body_no_minutes: 'Sem saldo de minutos',
    psych_profile_call_cannot_start_cancel: 'Cancelar',
    psych_profile_call_cannot_start_buy_minutes: 'Comprar minutos',

    psych_profile_call_error_title: 'Erro',
    psych_profile_call_error_invalid_params: 'O servidor não retornou parâmetros válidos da chamada.',
    psych_profile_call_error_start_failed: 'Não foi possível iniciar a chamada.',
    psych_profile_call_error_server: 'Ocorreu um erro no servidor.',

    psych_profile_error_title: 'Erro',
    psych_profile_error_call_failed: 'Não foi possível iniciar a chamada.',

    psych_register_title_edit: 'Corrigir e reenviar candidatura',
    psych_register_title_register: 'Cadastro de Psíquico',

    psych_register_revision_title: 'Correções solicitadas',
    psych_register_revision_note_prefix: 'Nota: ',
    psych_register_revision_hint: 'Corrija o indicado e pressione “Reenviar candidatura”.',

    psych_register_label_full_name: 'Nome completo *',
    psych_register_ph_full_name: 'Ex: Laura Pérez',

    psych_register_label_psychic_name: 'Nome de psíquico (identidade pública) *',
    psych_register_ph_psychic_name: 'Ex: Luna',
    psych_register_help_psychic_name_unique: 'Este nome será visível para os clientes. Deve ser único.',

    psych_register_label_paypal_email: 'Email do PayPal (obrigatório) *',
    psych_register_ph_paypal_email: 'ex: seuemail@paypal.com',
    psych_register_help_paypal_email: 'Este email será usado para pagamentos ao psíquico.',

    psych_register_label_public_bio: 'Biografia pública (bio) *',
    psych_register_ph_public_bio: 'Escreva sua biografia (os clientes verão isso)',
    psych_register_help_public_bio: 'Esta biografia será exibida ao cliente no seu perfil.',

    psych_register_label_email: 'Email',
    psych_register_ph_email: 'exemplo@email.com',

    psych_register_label_phone: 'Telefone / WhatsApp',
    psych_register_ph_phone: '+55 11 90000-0000',
    psych_register_help_phone_international: 'Se usar telefone, insira-o no formato internacional (ex.: +55 11 90000-0000).',

    psych_register_label_password: 'Senha *',
    psych_register_ph_password: 'Mínimo de 6 caracteres',
    psych_register_accessibility_show_password: 'Mostrar senha',
    psych_register_accessibility_hide_password: 'Ocultar senha',

    psych_register_help_edit_credentials:
      'Email/telefone e senha são gerenciados no login/suporte. Aqui você apenas corrige a candidatura.',

    psych_register_label_location: 'País / Cidade *',
    psych_register_ph_location: 'Ex: Colômbia, Bogotá',

    psych_register_label_languages: 'Idiomas em que você atende *',
    psych_register_ph_languages: 'Ex: Espanhol, Inglês',

    psych_register_section_additional_required: 'Informações adicionais (obrigatórias)',

    psych_register_label_tagline: 'Escreva uma frase que te identifique *',
    psych_register_ph_tagline: 'Ex: Crer é criar',

    psych_register_label_areas: 'Áreas que você atende (pode selecionar várias) *',
    psych_register_label_areas_other: 'Especifique “Outros” (Áreas) *',
    psych_register_ph_areas_other: 'Escreva sua(s) área(s) adicional(is)',

    psych_register_label_applicant_photo: 'Foto do candidato (obrigatória) *',
    psych_register_permission_box_title: 'Permissão para selecionar fotos',
    psych_register_permission_box_body: 'A Luz Psíquica acessa suas fotos somente quando você decide enviar uma imagem. Esse acesso não é usado em segundo plano.',
    psych_register_permission_hint_denied: 'Se você negou a permissão, pode ativá-la nas configurações do dispositivo.',
    psych_register_permission_request: 'Permitir acesso às fotos',
    psych_register_permission_granted: 'Permissão concedida',
    psych_register_permission_container_first_body: 'Antes de selecionar a foto, permita o acesso às suas fotos pelo botão desta seção.',
    psych_register_open_settings: 'Abrir configurações',
    psych_register_permissions_error_body: 'Não foi possível solicitar a permissão. Tente novamente.',
    psych_register_cancel: 'Cancelar',
    psych_register_photo_change: 'Trocar foto',
    psych_register_photo_select: 'Selecionar foto',

    psych_register_label_tools: 'Ferramentas que você utiliza (pode selecionar várias) *',
    psych_register_label_tools_other: 'Especifique “Outros” (Ferramentas) *',
    psych_register_ph_tools_other: 'Escreva sua(s) ferramenta(s) adicional(is)',

    psych_register_label_experience: 'Descreva melhor sua experiência *',
    psych_register_ph_experience: 'Ex: métodos, confiabilidade, etc.',

    psych_register_label_worked_phone_chat: 'Você já trabalhou como psíquico por telefone ou chat? *',

    psych_register_label_start_year: 'Em que ano você começou profissionalmente? *',
    psych_register_year_select: 'Selecione um ano',
    psych_register_year_modal_title: 'Selecione o ano',
    psych_register_year_modal_close: 'Fechar',

    psych_register_label_hours_per_week: 'Quantas horas por semana você estaria disposto(a) a trabalhar no app? *',
    psych_register_ph_hours_per_week: 'Ex: 10, 12, 40, tempo integral',

    psych_register_label_can_do_phone_chat: 'Confirme se você pode atender por telefone e chat *',

    psych_register_label_private_experience:
      '(Apenas interno) Conte sua experiência em particular ou outros serviços *',
    psych_register_ph_private_experience: 'Ex: experiência com clientes particulares...',

    psych_register_label_photo_marketing_consent: 'Consentimento de uso da foto (marketing/redes) *',

    psych_register_label_declaration: 'Declaração obrigatória *',
    psych_register_declaration_accept: 'Aceito a declaração *',

    psych_register_label_about: 'Mensagem adicional / Sobre você *',
    psych_register_ph_about: 'O que você gostaria que a equipe soubesse sobre você?',

    psych_register_terms_title: 'Regras e Privacidade',
    psych_register_terms_body: 'Li e aceito ',
    psych_register_terms_link: 'Regras e Privacidade',

    psych_register_submit_edit: 'Reenviar candidatura',
    psych_register_submit_register: 'Enviar solicitação',

    psych_register_back: 'Voltar',

    psych_register_yes: 'Sim',
    psych_register_no: 'Não',

    psych_register_validation_title: 'Validação',
    psych_register_error_title: 'Erro',
    psych_register_config_error_title: 'Erro de configuração',
    psych_register_config_error_body: 'EXPO_PUBLIC_API_URL não foi definido. Verifique seu arquivo .env.',

    psych_register_permissions_required_title: 'Permissão necessária',
    psych_register_permissions_required_body: 'Precisamos de acesso à sua galeria para selecionar uma foto.',

    psych_register_invalid_photo_title: 'Foto inválida',
    psych_register_invalid_photo_body:
      'Não foi possível ler a imagem em base64. Tente outra foto ou reinicie o app.',

    psych_register_photo_pick_error_title: 'Erro',
    psych_register_photo_pick_error_body: 'Não foi possível selecionar a foto.',

    psych_register_terms_alert_title: 'Regras e Privacidade',
    psych_register_terms_alert_body: 'Você deve aceitar as Regras e Privacidade para continuar.',

    psych_register_session_expired_body: 'Sessão expirada. Faça login novamente.',

    psych_register_success_title: 'Solicitação enviada',
    psych_register_success_resubmit_default: 'Candidatura reenviada com sucesso.',
    psych_register_success_register_default:
      'Sua solicitação foi enviada. A equipe de Luz Psíquica analisará seu perfil e entrará em contato para uma entrevista.',

    psych_reviews_config_error_title: 'Erro de configuração',
    psych_reviews_config_error_body: 'EXPO_PUBLIC_API_URL não foi definido no seu .env.',

    psych_reviews_session_expired_title: 'Sessão expirada',
    psych_reviews_session_expired_body: 'Faça login novamente.',

    psych_reviews_error_title: 'Erro',
    psych_reviews_load_error_body: 'Não foi possível carregar o histórico de avaliações.',

    psych_reviews_title: 'Avaliações e comentários',

    psych_reviews_summary_title: 'Resumo',
    psych_reviews_based_on: 'Com base em {count} avaliações',
    psych_reviews_refresh: 'Atualizar',

    psych_reviews_loading: 'Carregando…',

    psych_reviews_comments_title: 'Comentários',
    psych_reviews_no_comments: 'Você ainda não tem comentários visíveis.',

    psych_reviews_load_more: 'Carregar mais',
    psych_reviews_limit_reached: 'Limite máximo atingido',

    psych_reviews_hint_rule:
      '* Os comentários visíveis dependem da regra anti-spam (um comentário por cliente por psíquico).',

    psych_reviews_back_arrow: '←',
    psych_reviews_refresh_busy: '...',
    psych_reviews_dash_placeholder: '—',

    realcall_mic_permission_title: 'Permissão do microfone',
    realcall_mic_permission_message: 'Luz Psíquica precisa de acesso ao microfone para chamadas de voz.',
    realcall_mic_permission_accept: 'Permitir',
    realcall_mic_permission_cancel: 'Cancelar',

    realcall_call_ended_title: 'Chamada encerrada',
    realcall_call_ended_no_minutes: 'A chamada terminou porque seus minutos acabaram.',

    realcall_call_ended_rejected_body: 'O psíquico recusou a chamada. Tente outro psíquico ou tente novamente mais tarde.',
    realcall_ok: 'OK',

    realcall_rating_title: 'Avaliação',
    realcall_rating_pick_stars: 'Selecione uma avaliação (de 1 a 5).',

    realcall_error_title: 'Erro',
    realcall_rating_save_error: 'Não foi possível salvar a avaliação',

    realcall_back: '← Voltar',
    realcall_call_title: 'Chamada de áudio',
    realcall_room_label: 'Sala:',

    realcall_psychic_role_brand: 'Psíquico · Luz Psíquica',

    realcall_audio_error_prefix: 'Erro de áudio:',
    realcall_audio_connecting: 'Conectando áudio…',
    realcall_audio_waiting_psychic: 'Áudio conectado. Aguardando o psíquico…',
    realcall_audio_connected_psychic: 'Áudio conectado com o psíquico.',

    realcall_time_label: 'Tempo:',
    realcall_remaining_minutes_label: 'Minutos restantes:',
    realcall_billing_starts_note: '* A cobrança começa quando o psíquico atende.',

    realcall_hangup: 'Desligar',

    realcall_rate_title: 'Avalie sua consulta',
    realcall_rate_subtitle: 'Como foi sua experiência com {name}?',

    realcall_review_label: 'Comentário (opcional)',
    realcall_review_placeholder: 'Escreva um comentário breve…',
    realcall_skip: 'Pular',
    realcall_send: 'Enviar',
    realcall_sending: 'Enviando…',

    register_header_title: 'Registro',

    register_title_create_account: 'Criar conta',

    register_subtitle_client: 'Cadastre-se como cliente para continuar',

    register_required_fields_title: 'Campos obrigatórios',
    register_required_fields_body: 'Preencha todos os campos.',

    register_link_psychic_apply: 'Você é psíquico? Candidate-se para trabalhar conosco',

    register_legal_title: 'Regras e Privacidade',
    register_legal_body_client: 'Você precisa aceitar os Termos, a Privacidade e os Reembolsos para se cadastrar.',

    register_success_title: 'Conta criada',
    register_success_body: 'Sua conta foi criada com sucesso. Faça login.',

    register_error_title: 'Cadastro',
    register_failed_msg: 'Não foi possível concluir seu registro. Tente novamente.',
    common_ok: 'OK',

    register_placeholder_full_name: 'Nome completo',
    register_placeholder_email_or_phone: 'E-mail ou telefone',
    register_phone_helper: 'Você pode usar e-mail ou telefone. Se usar telefone, insira-o no formato internacional (ex.: +55 11 90000-0000).',
    register_placeholder_password: 'Senha',

    register_accessibility_show_password: 'Mostrar senha',
    register_accessibility_hide_password: 'Ocultar senha',

    register_label_account_type: 'Tipo de conta',
    register_role_client: 'Cliente',
    register_role_psychic: 'Psíquico',

    register_terms_prefix: 'Li e aceito',
    register_terms_link: 'Regras e Privacidade',

    register_btn_create_account: 'Criar conta',
    register_link_have_account_login: 'Já tem conta? Faça login',

    common: {
      back: "Voltar",
      ok: "OK",
      psychic: "Psíquico",
      dash: "—"
    },
    legal_header_title: 'Regras e Privacidade',
    legal: {
      title: "Regras e Privacidade",
      meta: "Versão: {{version}} · Responsável legal: {{owner}} · Jurisdição: {{country}}",
      jurisdictionCountry: "Colômbia",
      mailSubject: "Suporte legal - Luz Psíquica",
      openFailTitle: "Não foi possível abrir",
      openFailGeneric: "Não foi possível abrir o link.",
      emailFailMessage: "Não foi possível abrir o e-mail. Verifique se há um aplicativo de e-mail configurado no telefone.",
      whatsappFailMessage: "Não foi possível abrir o WhatsApp. Verifique se o WhatsApp está instalado ou tente novamente.",
      emailLabel: "E-mail: {{email}}",
      whatsappLabel: "WhatsApp: +1 (813) 618-7770",

      s1Title: "1. Aceitação dos termos",
      s1Body: "Ao registar-se e utilizar a aplicação, e mediante a marcação expressa da respetiva caixa de aceitação, o utilizador declara ter lido, compreendido e aceite de forma integral e voluntária as normas, políticas, condições e disposições de utilização operacional da plataforma aqui descritas.\n\nA aceitação destes termos constitui um requisito obrigatório e vinculativo para o acesso, registo e utilização da aplicação. Caso o utilizador não concorde com qualquer das disposições aqui estabelecidas, deverá abster-se de se registar ou de utilizar a plataforma.\n\nOs documentos legais, incluindo Normas e Privacidade e o Documento de Funcionamento Operacional da Plataforma, podem ser consultados a qualquer momento nesta secção jurídica.\n",

      s2Title: "2. Natureza do serviço",
      s2Body: "Luz Psíquica é uma aplicação de entretenimento e orientação pessoal, cujos conteúdos e serviços possuem caráter exclusivamente informativo e recreativo.\n\nA plataforma não oferece, nem pretende oferecer, aconselhamento médico, psicológico, psiquiátrico, jurídico, financeiro, terapêutico ou qualquer outro tipo de aconselhamento profissional regulamentado. As informações, opiniões ou interações geradas no âmbito da aplicação não substituem, em nenhuma circunstância, a consulta a profissionais devidamente habilitados nas áreas correspondentes.\n\nO utilizador reconhece e aceita que a utilização da plataforma é realizada sob sua exclusiva responsabilidade, e que qualquer decisão tomada com base nos conteúdos ou interações ocorridas em Luz Psíquica é integralmente assumida pelo próprio utilizador, de acordo com as diretrizes e condições estabelecidas pela plataforma.\n",

      s3Title: "3. Cobrança e pagamento por minutos",
      s3Body: "Os serviços oferecidos no âmbito da Luz Psíquica são cobrados ao utilizador e liquidados ao médium exclusivamente com base nos minutos efetivamente consumidos para fins de comunicação, seja por conversa falada ou por troca de mensagens escritas, realizadas dentro da aplicação.\n\nNão serão reconhecidos pagamentos por tempo de espera, disponibilidade, ligação ativa sem consumo efetivo, resultados obtidos, promessas, expectativas ou por qualquer outro conceito distinto da utilização real, mensurável e verificável do serviço no âmbito da plataforma.\n\nTodas as transações financeiras realizadas na aplicação são geridas através da plataforma de pagamentos PayPal, de acordo com os seus próprios termos, condições e políticas de utilização. A Luz Psíquica não armazena, processa nem gere diretamente informações financeiras sensíveis dos utilizadores ou dos médiuns.\n\nPor este motivo, e por não estar legalmente autorizada para tal, a plataforma não solicita nem está obrigada a solicitar, armazenar ou verificar números de contas bancárias, cartões de crédito, cartões de débito ou outros dados financeiros pessoais. A utilização dos meios de pagamento rege-se exclusivamente pelas condições estabelecidas pela PayPal.\n\nA relação entre a Luz Psíquica e os médiuns é de natureza estritamente independente. Consequentemente, não existe qualquer vínculo laboral, relação de subordinação ou obrigação de pagamento de prémios, prestações sociais, benefícios laborais, indemnizações ou compensações de natureza semelhante.\n\nA plataforma não concede empréstimos, adiantamentos, antecipações de valores ou garantias de rendimentos, nem emite certificados de trabalho, declarações de rendimentos, cartas para procedimentos financeiros, subsídios, garantias ou documentos de natureza análoga.\n\nOs minutos consumidos são calculados através dos sistemas técnicos de medição da plataforma. Em caso de ajustes técnicos, falhas de ligação, interrupções do serviço ou divergências na medição do tempo consumido, os registos internos da Luz Psíquica prevalecerão como referência válida. Qualquer reclamação relacionada com a medição dos minutos deverá ser efetuada de acordo com os canais e procedimentos estabelecidos pela plataforma, sem que isso implique o reconhecimento automático de reembolsos, compensações ou pagamentos adicionais.\n",

      s4Title: "4. Proibição de partilha de informações pessoais",
      s4Body: "Com o objetivo de proteger a segurança, a privacidade e o correto funcionamento da plataforma, é estritamente proibida a troca de informações pessoais ou sensíveis entre clientes e médiuns, tanto no interior como fora da aplicação.\n\nConsideram-se informações pessoais, de forma exemplificativa e não limitativa, todos os dados que permitam a identificação, o contacto ou a localização de uma pessoa, incluindo números de telefone, endereços físicos, endereços de correio eletrónico, perfis em redes sociais, documentos de identificação, dados bancários, números de conta, ligações de pagamento, meios de contacto externos ou outros dados de natureza semelhante.\n\nÉ igualmente expressamente proibido transferir conversas, acordos, pagamentos ou qualquer tipo de interação para fora da aplicação, bem como tentar contornar os sistemas de comunicação e pagamento disponibilizados pela Luz Psíquica.\n\nEsta proibição aplica-se de forma obrigatória tanto aos clientes como aos médiuns, e o seu incumprimento pode dar origem à aplicação das medidas corretivas previstas nas normas e condições da plataforma.\n",

      s5Title: "5. Termos e condições",
      s5Body: "A utilização da Luz Psíquica está sujeita ao cumprimento das regras de convivência, ao respeito mútuo e à observância das disposições internas estabelecidas pela plataforma, cujo objetivo é garantir um ambiente seguro, funcional e adequado para todos os utilizadores.\n\nA Luz Psíquica reserva-se o direito de suspender temporariamente ou encerrar definitivamente contas de utilizadores ou médiuns sempre que existam razões operacionais, técnicas ou de segurança que o justifiquem, incluindo, de forma exemplificativa e não limitativa, situações de fraude, abuso, assédio, comportamento inadequado, utilização indevida da plataforma, tentativa de evasão dos controlos internos ou incumprimento das normas, políticas e condições aqui estabelecidas.\n\nAs medidas adotadas terão caráter preventivo ou corretivo, conforme o caso, e serão aplicadas com o objetivo de proteger a integridade da plataforma, os seus utilizadores e o correto funcionamento dos serviços, sem que disso resulte qualquer direito a indemnização, compensação ou reclamação contra a Luz Psíquica.\n",

      s6Title: "6. Privacidade e tratamento de dados",
      s6Body: "A Luz Psíquica trata apenas os dados pessoais mínimos e estritamente necessários ao funcionamento operacional da plataforma, incluindo, de forma exemplificativa e não limitativa, a identificação da conta, o histórico de sessões, as compras realizadas, o consumo de minutos e a gestão de pedidos de suporte.\n\nEm nenhuma circunstância é permitido aos utilizadores trocar dados pessoais entre si, nem aceder a informações pessoais de outros utilizadores ou médiuns, fora dos mecanismos estritamente necessários à prestação do serviço no âmbito da aplicação.\n\nOs dados tratados pela plataforma são utilizados exclusivamente para fins operacionais, de suporte técnico, de segurança, de prevenção de fraude, de melhoria do serviço e de cumprimento de obrigações legais ou regulamentares aplicáveis. A Luz Psíquica não comercializa, não vende nem cede dados pessoais a terceiros para fins alheios à operação da plataforma.\n\nO tratamento de dados é realizado de acordo com os princípios da legalidade, finalidade, proporcionalidade e segurança, adotando medidas técnicas e organizacionais razoáveis para proteger as informações contra acessos não autorizados, uso indevido ou perda.\n\nOs usuários que solicitarem vinculação como psíquicos na plataforma poderão ser obrigados a fornecer informações adicionais de identificação, incluindo cópia de documento oficial de identidade válido, exclusivamente para verificação da identidade real do solicitante, maioridade legal, autenticidade das informações fornecidas e cumprimento das obrigações contratuais e legais aplicáveis.\n\nEssas informações serão tratadas de acordo com os princípios de legalidade, finalidade, proporcionalidade, segurança e confidencialidade previstos na legislação aplicável de proteção de dados, incluindo a Lei Colombiana 1581 de 2012.\n\nEm nenhuma hipótese essas informações serão comercializadas, transferidas ou utilizadas para fins distintos dos aqui descritos, sendo armazenadas apenas pelo tempo estritamente necessário ao cumprimento de sua finalidade.\n",

      s7Title: "7. Limitação de responsabilidade",
      s7Body: "A Luz Psíquica presta os seus serviços nos termos e condições descritos na plataforma, sem conceder garantias expressas ou implícitas quanto a resultados, exatidão, expectativas pessoais ou consequências decorrentes da utilização da aplicação.\n\nA plataforma não será responsável por decisões, ações, omissões, interpretações ou resultados derivados direta ou indiretamente da utilização dos conteúdos, serviços ou interações realizadas no âmbito da aplicação, os quais são assumidos sob a exclusiva responsabilidade do utilizador.\n\nA Luz Psíquica também não será responsável por interrupções do serviço, erros técnicos, falhas de conectividade, indisponibilidade temporária da plataforma, perda de informações, ajustes na medição dos minutos ou por danos diretos ou indiretos decorrentes de causas técnicas, operacionais ou de força maior.\n\nEm nenhuma circunstância a responsabilidade da Luz Psíquica excederá o montante efetivamente pago pelo utilizador na aplicação pelos serviços objeto da reclamação, nem dará origem a indemnizações por danos morais, lucros cessantes, perda de oportunidades, expectativas não cumpridas ou outros prejuízos indiretos.\n",

      s8Title: "8. Natureza do serviço e caráter não reembolsável",
      s8Body: "Na plataforma, o uso dos serviços de chat e/ou chamadas é cobrado sob a modalidade “minuto iniciado, minuto cobrado”. Em virtude disso, qualquer fração de minuto iniciada será considerada como um minuto completo para fins de contabilização e cobrança. Esta política se aplica tanto ao consumo de minutos por parte do cliente quanto ao cálculo do tempo efetivamente atendido pelo psíquico, com o objetivo de garantir uma compensação justa pelo tempo dedicado e uma medição clara, objetiva e transparente do serviço prestado.\n\nA duração de cada interação é registrada automaticamente pelo sistema, e o usuário reconhece e aceita expressamente essa modalidade de cobrança a partir do momento em que utiliza a plataforma. Os minutos adquiridos dentro da plataforma Luz Psíquica constituem créditos digitais de uso exclusivo dentro do ecossistema do serviço e não representam dinheiro em espécie, depósitos, saldos sacáveis, instrumentos financeiros ou valores transferíveis.\n\nTodas as compras de minutos realizadas dentro da aplicação são finais, definitivas e não reembolsáveis, inclusive nos casos em que o usuário decida não utilizar total ou parcialmente os minutos adquiridos. A não utilização do serviço não gera direito a reembolso, compensação, indenização ou qualquer reconhecimento financeiro.\n\nOs minutos não podem ser convertidos em dinheiro, transferidos a terceiros, retirados da plataforma ou reclamados como saldo fora do ambiente Luz Psíquica. O usuário reconhece que está adquirindo um serviço digital de consumo imediato ou sob demanda, renunciando, na medida permitida pela legislação aplicável, a qualquer direito de arrependimento ou reembolso.\n\nEm caráter excepcional, a plataforma poderá analisar solicitações apenas em casos de falhas técnicas comprovadas atribuíveis diretamente à Luz Psíquica. Nesses casos, qualquer medida será limitada à correção do erro ou reposição proporcional do serviço, sem devolução monetária. A plataforma se reserva o direito de rejeitar solicitações em casos de fraude, abuso ou uso indevido.\n",

      s9Title: "9. Infrações graves",
      s9Body: "Consideram-se infrações graves, de forma exemplificativa e não limitativa, os comportamentos que violem de forma grave a segurança, o respeito, a legalidade ou a convivência no âmbito da plataforma, incluindo insultos, ameaças, assédio, divulgação de pornografia, conteúdos sexuais explícitos, condutas ofensivas ou discriminatórias, ou atos contrários à moral, à ordem pública e ao respeito mútuo.\n\nA prática de infrações graves pode resultar no encerramento definitivo e imediato da conta do utilizador ou do médium, sem necessidade de aviso prévio, quando tal se justifique pela gravidade dos factos, pela reincidência da conduta ou pelos riscos para outros utilizadores ou para a integridade da plataforma.\n\nNos casos de especial gravidade, e quando existam provas internas suficientes e verificáveis de incumprimento das normas, a Luz Psíquica poderá proceder ao encerramento definitivo da conta sem reconhecimento de pagamentos, saldos acumulados, benefícios pendentes ou compensações de qualquer natureza, sem prejuízo das ações legais que possam ser aplicáveis.\n",

      s10Title: "10. Retirada voluntária do usuário",
      s10Body: "O usuário poderá solicitar, a qualquer momento, a retirada voluntária da plataforma por meio dos mecanismos e ferramentas disponibilizados dentro da aplicação.\n\nUma vez realizada a solicitação e confirmada de forma expressa pelo usuário, a conta será excluída de forma imediata, encerrando a relação entre o usuário e a plataforma, sem prejuízo do cumprimento das obrigações previamente assumidas.\n\nA retirada voluntária não gera, em nenhuma hipótese, direito a reembolso, compensação, indenização ou devolução dos valores pagos pelos serviços adquiridos, incluindo minutos não utilizados no momento da exclusão da conta.\n\nOs minutos disponíveis no momento da retirada não poderão ser convertidos em dinheiro, transferidos ou reclamados como saldo fora da plataforma.\n\nO usuário reconhece e aceita expressamente que os serviços adquiridos possuem caráter não reembolsável, e que essa condição foi claramente informada antes da utilização da plataforma.\n\nA solicitação de retirada e seu processamento serão realizados de acordo com os procedimentos internos da Luz Psíquica, sem que isso implique qualquer obrigação de compensação financeira por parte da plataforma.\n",

      s11Title: "11. Utilização de tecnologias incorporadas no dispositivo",
      s11Body:  "A aplicação Luz Psíquica pode solicitar acesso a determinadas tecnologias incorporadas no dispositivo do utilizador, tais como a câmara e o microfone, apenas quando o próprio utilizador decide utilizá-las de forma voluntária no âmbito das funcionalidades disponíveis da aplicação.\n\nO acesso à câmara é solicitado exclusivamente quando o utilizador opta por carregar uma imagem, por exemplo, uma fotografia de perfil. O acesso ao microfone é utilizado apenas durante as interações de comunicação por voz dentro da plataforma. Em nenhum caso a aplicação utiliza funcionalidades de gravação de vídeo.\n\nA aplicação não utiliza a câmara nem o microfone em segundo plano, nem acede a estas tecnologias sem a interação direta e o consentimento explícito do utilizador. Do mesmo modo, a Luz Psíquica não capta imagens, áudio ou qualquer outro conteúdo sem a autorização expressa do utilizador.\n\nAs imagens e os áudios fornecidos pelo utilizador são utilizados exclusivamente para fins funcionais e operacionais dentro da aplicação e não são partilhados com terceiros sem a autorização expressa do utilizador, salvo quando tal seja estritamente necessário para a prestação do serviço nos termos das condições da plataforma.\n\nO utilizador pode revogar, a qualquer momento, as permissões concedidas à câmara e ao microfone através das definições do sistema operativo do seu dispositivo, o que poderá limitar ou impedir a utilização de determinadas funcionalidades da aplicação.\n",

      s12Title: "12. Contacto",
      s12Intro: "Para qualquer dúvida, queixa, reclamação ou consulta relacionada com o funcionamento da aplicação, o utilizador poderá contactar a Luz Psíquica através dos canais de contacto disponibilizados na plataforma.\n\nAs comunicações recebidas serão tratadas de acordo com os procedimentos internos da aplicação e dentro de prazos razoáveis, conforme a natureza do pedido.\n"
    },

    operational_header_title: 'Documento Operacional',
    operational: {
      title: "Documento Operacional",
      meta: "Versão: {{version}} · Data: {{date}} · Plataforma: {{platform}}",

      s1Heading: "1. Objeto do documento",
      s1Body: "O presente Documento de Funcionamento Operacional tem como finalidade descrever de forma clara, transparente e técnica o funcionamento geral da plataforma Luz Psíquica, bem como estabelecer as regras operacionais, técnicas e funcionais sob as quais o serviço é prestado a clientes e psíquicos. Este documento faz parte integrante do marco legal da plataforma e é de cumprimento obrigatório para todos os usuários que utilizem o aplicativo.",

      s2Heading: "2. Descrição geral da plataforma",
      s2Body: "Luz Psíquica é uma plataforma digital que permite a comunicação entre clientes e psíquicos por meio de serviços de chat e chamadas de voz, utilizando um sistema de minutos pré-pagos adquiridos pelos clientes. Adicionalmente, a plataforma poderá oferecer conteúdos audiovisuais associados à sua atividade, com fins informativos, promocionais, comerciais ou de posicionamento de marca. A plataforma atua como intermediária tecnológica, fornecendo a infraestrutura técnica, os sistemas de pagamento, o controle de sessões, a gestão de minutos e a liquidação econômica correspondente aos psíquicos.",

      s3Heading: "3. Papéis dentro da plataforma",
      s31Heading: "3.1 Cliente",
      s31Body: "Usuário que adquire minutos e acessa os serviços de consulta por chat ou chamada.",
      s32Heading: "3.2 Psíquico",
      s32Body: "Usuário autorizado que presta serviços de consulta aos clientes e recebe uma remuneração\nfinanceira de acordo com o tempo efetivamente consumido.",
      s33Heading: "3.3 Administrador",
      s33Body: "Usuário responsável pela supervisão, validação, manutenção e operação geral da\nplataforma.",

      s4Heading: "4. Funcionamento operacional do serviço",
      s41Heading: "4.1 Cadastro e acesso",
      s41Body: "• Os usuários devem se cadastrar com informações válidas.\n• Os clientes podem criar conta e comprar minutos.\n• Os psíquicos devem ser autorizados pela plataforma antes de prestar o serviço.",
      s42Heading: "4.2 Compra de minutos",
      s42Body: "• Os minutos são adquiridos por meio de uma plataforma de pagamento.\n• Os minutos são pré-pagos e consumidos em sessões.\n• A plataforma define preços, pacotes, descontos e regras operacionais.",
      s43Heading: "4.3 Login e disponibilidade",
      s43Body: "• O cliente seleciona um psíquico disponível.\n• A sessão só inicia se houver minutos suficientes adquiridos pelo cliente.\n• A plataforma administra o controle de tempo e consumo.",

      s5Heading: "5. Sessões, consumo de minutos e controle antifraude",
      s51Heading: "5.1 Controle de sessões",
      s51Body: "• O consumo é contabilizado por minuto em chat ou chamada.\n• O sistema encerra sessões por inatividade ou finalização.\n• Aplicam-se controles para evitar usos anômalos ou fraude.",
      s52Heading: "5.2 Proibição de troca de dados pessoais",
      s52Body: "• É proibido trocar dados pessoais ou de contato.\n• É proibido levar a relação comercial para fora da plataforma.\n• O descumprimento pode implicar suspensão ou encerramento.",

      s6Heading: "6. Validação e funcionamento do papel psíquico",
      s61Heading: "6.1 Condições do psíquico",
      s61Body: "• O psíquico deve ser aprovado pela plataforma.\n• Deve operar sob as regras internas.\n• Pode ser suspenso por descumprimentos, reclamações ou fraude.",

      s7Heading: "7. Pagamento a psíquicos e liquidação econômica",
      s71Heading: "7.1 Liquidação econômica",
      s71Body: "• A plataforma realiza a liquidação conforme os minutos efetivamente consumidos.\n• A remuneração é determinada de acordo com as regras internas da plataforma e com o registro interno das transações efetuadas.\n• Os pagamentos são agrupados e executados em ciclos definidos.",

      s8Heading: "8. Ativos sonoros, musicais e audiovisuais da plataforma",
      s81Heading: "8.1 Natureza dos ativos",
      s81Body: "A plataforma utiliza ativos digitais que incluem, entre outros:\n• toques de chamadas recebidas\n• sons de notificação e alertas do sistema\n• música incorporada em conteúdos audiovisuais\n• vídeos promocionais, informativos ou comerciais\nEsses ativos fazem parte integrante da experiência funcional, comunicativa e de marca\nda Luz Psíquica.",
      s82Heading: "8.2 Origem dos ativos",
      s82Body: "Os ativos sonoros, musicais e audiovisuais utilizados pela plataforma:\n• foram criados especificamente para Luz Psíquica\n• são desenvolvidos por processos criativos próprios, que podem incluir o uso de ferramentas de IA generativa, sempre sob a direção, controle e curadoria da plataforma\n• não correspondem a obras musicais comerciais nem a conteúdos audiovisuais de terceiros com exploração independente",
      s83Heading: "8.3 Conteúdos audiovisuais e difusão externa",
      s83Body: "Os conteúdos audiovisuais produzidos pela Luz Psíquica:\n• podem ser comercializados, distribuídos ou divulgados dentro e fora do aplicativo\n• podem ser publicados em plataformas digitais e redes sociais\n• podem incluir música, imagens, animações, textos e vozes geradas ou assistidas por IA\nA difusão desses conteúdos não implica cessão de direitos a usuários, psíquicos ou terceiros.",
      s84Heading: "8.4 Propriedade intelectual",
      s84Body: "• Todos os ativos sonoros, musicais e audiovisuais são propriedade exclusiva da Luz Psíquica ou possuem as licenças necessárias para seu uso.\n• Não são personalizáveis pelos usuários.\n• Não podem ser extraídos, reutilizados, distribuídos, revendidos nem explorados fora da plataforma sem autorização expressa e por escrito.",
      s85Heading: "8.5 Finalidade de uso",
      s85Body: "Os ativos descritos:\n• cumprem uma função técnica, operacional, comunicativa e comercial\n• não constituem obras artísticas independentes para exploração individual\n• não geram direitos econômicos, autorais nem de participação para usuários ou psíquicos",

      s9Heading: "9. Limitações técnicas e operacionais",
      s9Body: "• A plataforma depende de conectividade com a internet.\n• Falhas técnicas, interrupções de rede ou manutenção podem afetar temporariamente o serviço.\n• A Luz Psíquica não garante disponibilidade contínua e ininterrupta.",

      s10Heading: "10. Modificações do serviço",
      s10Body: "A Luz Psíquica reserva-se o direito de:\n• modificar funcionalidades\n• ajustar regras operacionais\n• atualizar sistemas de pagamento, comunicação ou conteúdos\nEssas modificações podem ser realizadas para melhorar a experiência do usuário ou por razões técnicas, legais ou operacionais.",

      s11Heading: "11. Aceitação do documento",
      s11Body: "O uso da plataforma implica a aceitação expressa deste Documento de\nFuncionamento Operacional, bem como dos demais documentos legais associados.",

      s12Heading: "12. Informações adicionais",
      s12Body: "Responsável pelo desenvolvimento tecnológico da plataforma:\nAndrés Loaiza\nO design, o desenvolvimento técnico, a arquitetura funcional e a operação tecnológica da plataforma Luz Psíquica foram realizados sob a direção do responsável mencionado, em coordenação com os objetivos, princípios éticos e diretrizes operacionais da plataforma.\nNota final\nEste documento é publicado como parte do compromisso da Luz Psíquica com a transparência, a ética tecnológica, a criatividade responsável e a clareza operacional."
    }
  },

  it: {
    nav_home: 'Home',
    nav_legal: 'Legale',
    nav_lang: 'Lingua',
    lang_title: 'Seleziona la lingua',
    legal_title: 'Aspetti legali dell’app',
    legal_body: 'Qui integreremo Termini, Privacy e avvisi legali prima della produzione finale.',
    close: 'Chiudi',

    login_header_title: 'Accedi',
    login_title: 'Luz Psíquica',
    login_subtitle: 'Accedi al tuo account per continuare',
    login_email_or_phone: 'Email o telefono',
    login_phone_helper: 'Se utilizzi il telefono, inseriscilo in formato internazionale (es. +39 333 000 0000).',
    login_password: 'Password',
    login_enter: 'Accedi',
    login_forgot: 'Hai dimenticato la password?',
    login_client_register: 'Sei un cliente? Crea un account',
    login_psychic_apply: 'Sei un sensitivo? Candidati per lavorare con noi',
    login_error_title: 'Errore di accesso',
    login_missing_credentials: 'Inserisci il tuo numero e la tua password.',

    agora_title: 'Chiamata (placeholder)',
    agora_psychic: 'Sensitivo',
    agora_room: 'Stanza',
    agora_call_id: 'ID chiamata',
    agora_initial_minutes: 'Minuti iniziali',
    agora_socket: 'Socket',
    agora_status: 'Stato',
    agora_back: 'Indietro',
    agora_note:
      '* Se il cliente riaggancia o il sensitivo rifiuta, questa schermata deve chiudersi automaticamente (socket + polling).',

    call_end_title: 'Chiamata terminata',
    call_end_ok: 'OK',
    call_end_default: 'La chiamata è terminata.',
    call_end_missed: 'La chiamata è stata rifiutata/persa.',
    call_end_cancelled: 'La chiamata è stata annullata (senza addebito).',
    call_end_caller_hungup: 'Il cliente ha riagganciato.',

    cfg_error_title: 'Errore di configurazione',
    cfg_error_body: 'EXPO_PUBLIC_API_URL non è configurato.',
    error_title: 'Errore',
    error_no_callid: 'callId non ricevuto.',
    session_expired_title: 'Sessione scaduta',
    session_expired_body: 'Sessione non valida o utente non trovato.',
    psychic_fallback_name: 'Sensitivo disponibile',
    dash_placeholder: '—',

    buy_minutes_header_title: 'Acquista minuti',

    buy_minutes_title: 'Acquista minuti',
    buy_minutes_subtitle:
      'Acquista pacchetti di minuti (PayPal). Il consumo viene scalato da chiamate e chat.',
    buy_minutes_current_balance: 'I tuoi minuti attuali',
    buy_minutes_pending_title: 'Pagamento in sospeso',
    buy_minutes_order: 'Ordine',
    buy_minutes_total: 'Totale',
    buy_minutes_confirming: 'Conferma del pagamento...',
    buy_minutes_return_hint: 'Torna nell’app dopo aver approvato su PayPal.',
    buy_minutes_paid_fallback: 'Ho già pagato (opzione alternativa)',
    buy_minutes_cancel: 'Annulla',
    buy_minutes_pkg_minutes: 'minuti',
    buy_minutes_tap_to_pay: 'Tocca per avviare il pagamento PayPal',

    session_expired: 'La tua sessione è scaduta. Accedi nuovamente.',
    paypal_approve_url_missing: 'PayPal non ha restituito l’URL di approvazione.',

    payment_success_balance:
      'Pagamento riuscito. Sono stati aggiunti {{added}} minuti. Nuovo saldo: {{balance}}.',
    payment_confirmed_balance:
      'Pagamento confermato. Saldo aggiornato: {{balance}}.',

    discount_label: 'Sconto: {{pct}}%',

    paypal_continue_title: 'Continua su PayPal',
    paypal_continue_body:
      'Approva il pagamento su PayPal.\n\nQuando torni nell’app, verrà confermato automaticamente.',

    purchase_success_title: 'Acquisto riuscito',
    purchase_success_body:
      'Pagamento confermato.\nSono stati aggiunti {{added}} minuti.',

    payment_cancelled_title: 'Pagamento annullato',
    payment_cancelled_body: 'Hai annullato il pagamento su PayPal.',

    err_title: 'Errore',
    err_load_minutes: 'Impossibile caricare il saldo minuti.',
    err_no_config: 'EXPO_PUBLIC_API_URL non è configurato',
    err_not_auth: 'Utente non autenticato',
    err_create_order: 'Impossibile creare l’ordine PayPal.',
    err_open_paypal: 'Impossibile aprire PayPal su questo dispositivo.',
    err_capture_payment: 'Impossibile catturare il pagamento.',
    err_auto_finish_title: 'Impossibile completare automaticamente',
    err_auto_finish_body:
      'Il pagamento non è ancora confermato. Se hai appena approvato, riprova tra qualche secondo.',
    err_read_paypal_token: 'Impossibile leggere il token PayPal per completare l’acquisto.',

    pending_still_not_confirmed_title: 'Pagamento non ancora confermato',
    pending_still_not_confirmed_body:
      'Impossibile catturare per ora. Verifica di aver approvato su PayPal e riprova.',
    retry: 'Riprova',
    dash_placeholder2: '--',
    minutes_suffix: 'min',

    callhist_header_title: 'Cronologia chiamate',

    callhist_title_default: 'Cronologia chiamate',
    callhist_title_with_name: 'Cronologia chiamate',

    callhist_loading: 'Caricamento cronologia…',
    callhist_back_dashboard: 'Torna alla dashboard',
    callhist_refresh: 'Aggiorna cronologia',
    callhist_empty: 'Non hai ancora sessioni registrate.',
    callhist_not_enough_data: 'Non ci sono ancora dati sufficienti.',

    callhist_summary_minutes_title: 'Riepilogo minuti',
    callhist_summary_earnings_title: 'Riepilogo guadagni',

    callhist_minutes_available: 'Minuti disponibili',
    callhist_minutes_spent_calls: 'Minuti spesi (📞)',
    callhist_minutes_spent_chats: 'Minuti spesi (💬)',
    callhist_minutes_spent_total: 'Totale speso',

    callhist_minutes_earned_calls: 'Minuti guadagnati (📞)',
    callhist_minutes_earned_chats: 'Minuti guadagnati (💬)',
    callhist_minutes_earned_total: 'Totale minuti guadagnati',
    callhist_earnings_total: 'Guadagno totale',

    callhist_summary_by_client: 'Riepilogo per cliente',
    callhist_summary_by_psychic: 'Riepilogo per sensitivo',

    callhist_status_finished: 'Terminata',
    callhist_status_missed: 'Rifiutata/Persa',
    callhist_status_ongoing: 'In corso',
    callhist_status_cancelled: 'Annullata',
    callhist_placeholder: '—',

    callhist_type_chat: '💬 Chat',
    callhist_type_voice: '📞 Chiamata',

    callhist_start: 'Inizio',
    callhist_end: 'Fine',

    callhist_duration: '⏱ {{secs}}s',
    callhist_minutes_charged: '⌛ {{mins}} min addebitati',
    callhist_no_charge: ' · Nessun addebito',
    callhist_earning_line: ' · 💰 ${{usd}} USD',

    callhist_rate_your_rating: 'La tua valutazione: {{rating}}/5',
    callhist_rate_prompt: 'Valuta questa chiamata:',
    callhist_rate_saving: 'Salvataggio…',

    callhist_rate_confirm_title: 'Conferma valutazione',
    callhist_rate_confirm_body: 'Vuoi valutare con {{stars}} stelle?',
    callhist_cancel: 'Annulla',
    callhist_yes: 'Sì',

    callhist_thanks: 'Grazie',
    callhist_rate_saved: 'La tua valutazione è stata salvata.',

    callhist_err_config_title: 'Errore di configurazione',
    callhist_err_config_body: 'EXPO_PUBLIC_API_URL non è configurato.',
    callhist_err_session_title: 'Sessione scaduta',
    callhist_err_session_body_token: 'Token non trovato. Accedi di nuovo.',
    callhist_err_session_body_login: 'Accedi di nuovo.',
    callhist_err_title: 'Errore',
    callhist_err_load: 'Impossibile caricare la cronologia.',
    callhist_err_rate_save: 'Impossibile salvare la valutazione.',

    callhist_psychic_fallback: 'Sensitivo',

    chat_header_title: 'Chat con {{name}}',

    chat_loading_session: 'Caricamento sessione…',
    chat_not_available_title: 'Chat non disponibile',
    chat_not_available_body: 'Mancano dati per aprire la chat: {{missing}}.',
    chat_not_available_hint: '(Verifica di navigare con otherUserId e che EXPO_PUBLIC_API_URL esista)',

    chat_block_unavailable: '⛔ Il sensitivo non è disponibile. Puoi vedere la chat, ma non inviare messaggi.',
    chat_block_no_minutes: '⛔ Non hai minuti disponibili. Puoi vedere la cronologia, ma devi acquistare minuti per chattare.',

    chat_inactivity_warning_prefix: '⚠️ Inattività rilevata. La chat verrà messa in pausa tra {{sec}}s.',
    chat_timeout_bar: '⏸️ Chat in pausa per inattività. {{msg}}',
    chat_timeout_client_hint: 'Scrivi o tocca “Riprendi”.',
    chat_timeout_other_hint: 'Attendi il cliente.',
    chat_resume: 'Riprendi',

    chat_loading_conversation: 'Caricamento conversazione…',
    chat_block_offline_psychic: 'Sensitivo offline. Riprova più tardi.',
    chat_policy_personal_info: '⚠️ Non puoi inviare dati personali (telefono, email o indirizzo). Riformula il messaggio.',
    chat_block_unavailable_short: '⛔ Il sensitivo non è disponibile al momento. Non puoi inviare messaggi.',
    chat_block_no_minutes_short: '⛔ Non hai minuti per chattare. Acquista minuti per continuare.',
    chat_block_wait_client_start: '⏳ In attesa che il cliente inizi la chat (primo messaggio del cliente).',
    chat_block_client_inactive: '⏸️ Chat in pausa per inattività del cliente. Attendi che il cliente riprenda.',
    chat_block_session_closed: '⛔ La sessione è chiusa. Devi iniziarne una nuova.',
    chat_network_error_send: 'Errore di rete durante l’invio del messaggio.',

    chat_placeholder_unavailable: 'Sensitivo non disponibile…',
    chat_placeholder_no_minutes: 'Senza minuti…',
    chat_placeholder_paused: 'Chat in pausa…',
    chat_placeholder_timeout: 'Chat in pausa per inattività…',
    chat_placeholder_write: 'Scrivi il tuo messaggio…',
    chat_placeholder_offline_psychic: 'Non puoi inviare messaggi',

    chat_send: 'Invia',
    chat_sending_dots: '…',

    chat_other_psychic: 'Sensitivo',
    chat_other_client: 'Cliente',
    chat_other_chat: 'Chat',

    clientdash_header_title: 'Dashboard cliente',

    clientdash_title: 'Il mio pannello',
    clientdash_subtitle: '{{name}}, qui puoi controllare il saldo minuti e le tue chiamate.',

    clientdash_quick_summary: 'Riepilogo rapido',
    clientdash_loading_info: 'Caricamento informazioni…',
    clientdash_minutes_available: 'Minuti disponibili:',
    clientdash_calls_made: 'Chiamate effettuate:',

    clientdash_last_calls: 'Ultime chiamate',
    clientdash_view_history: 'Vedi cronologia',
    clientdash_loading_history: 'Caricamento cronologia…',
    clientdash_status_finished: "Terminata",
    clientdash_status_missed: "Persa",
    clientdash_status_ongoing: "In corso",
    clientdash_status_cancelled: "Annullata",
    clientdash_status_unknown: "—",
    clientdash_no_calls: 'Non hai ancora chiamate registrate.',
    clientdash_view_full_history: 'Vedi cronologia completa',

    clientdash_actions: 'Azioni',
    clientdash_go_psychics: 'Vai alla lista dei sensitivi',
    clientdash_go_chat: 'Vai alla chat',

    clientdash_select_psychic_title: 'Seleziona un sensitivo',
    clientdash_select_psychic_body: 'Per aprire la chat devi prima scegliere un sensitivo dalla lista.',

    clientdash_error_config_title: 'Errore di configurazione',
    clientdash_error_config_body: 'EXPO_PUBLIC_API_URL non è configurato.',

    clientdash_session_expired_title: 'Sessione scaduta',
    clientdash_session_expired_body: 'Token non trovato. Accedi di nuovo.',

    clientdash_error_title: 'Errore',
    clientdash_error_body: 'Impossibile caricare le informazioni del pannello. Riprova più tardi.',
    clientdash_chat_error_body: 'Impossibile aprire la chat in questo momento. Riprova.',

    clientdash_buy_minutes: 'Acquista minuti',

    clientdash_no_minutes_title: 'Non hai minuti disponibili',
    clientdash_no_minutes_body: 'Acquista minuti per iniziare chat e chiamate con i tuoi consulenti spirituali.',

    clientdash_low_minutes_title: 'I tuoi minuti stanno per terminare',
    clientdash_low_minutes_body: 'Hai ancora {{n}} minuti disponibili. Acquistane altri per continuare a usare l’app senza interruzioni.',
    clientdash_delete_account_title: 'Elimina account',
    clientdash_delete_account_body: 'Se desideri chiudere definitivamente il tuo account, puoi continuare da qui. Questa azione ti porterà a una schermata di conferma sicura.',
    clientdash_delete_account_cta:'Continua per eliminare l’account',

    delete_account_header_title: 'Elimina account',
    delete_account_title: 'Elimina account',
    delete_account_subtitle: 'Stai gestendo l’eliminazione permanente del tuo account.',
    delete_account_subtitle_with_name: 'Stai gestendo l’eliminazione dell’account di {{name}}.',
    delete_account_success_title: 'Account eliminato',
    delete_account_success_body: 'Il tuo account è stato eliminato con successo.',
    delete_account_success_ok: 'OK',
    delete_account_error_title: 'Errore durante l’eliminazione dell’account',
    delete_account_error_body: 'Non è stato possibile eliminare l’account. Riprova.',
    delete_account_confirm_title: 'Conferma eliminazione',
    delete_account_confirm_body: 'Questa azione è permanente e non può essere annullata.',
    delete_account_confirm_cta: 'Elimina il mio account',
    delete_account_confirm_section_title: 'Conferma',
    delete_account_confirm_check_label: 'Comprendo che questa azione è permanente e desidero continuare.',
    delete_account_confirm_required_title: 'Conferma richiesta',
    delete_account_confirm_required_body:  'Devi confermare di comprendere che questa azione è permanente.',
    delete_account_cancel_cta: 'Annulla',
    delete_account_password_label: 'Password attuale',
    delete_account_password_helper: 'Puoi inserire la tua password come verifica aggiuntiva. Questo campo è facoltativo.',
    delete_account_password_placeholder: 'Inserisci la tua password (facoltativo)',
    delete_account_warning_title: 'Avviso importante',
    delete_account_warning_body: 'Eliminando il tuo account perderai l’accesso al tuo profilo e alle informazioni associate.',
    delete_account_warning_point_1: 'Non potrai più accedere con questo account dopo averlo eliminato.',
    delete_account_warning_point_2: 'Questa azione è pensata come una eliminazione permanente.',
    delete_account_warning_point_3: 'Prima di continuare, assicurati di voler davvero chiudere il tuo account.',
    delete_account_processing: 'Eliminazione dell’account...',

    clienthome_header_title: 'Area cliente',
    clienthome_register: 'Registrati',
    clienthome_logout: 'Esci',

    clienthome_welcome: 'Benvenuto',
    clienthome_welcome_name: 'Benvenuto, {{name}}',

    clienthome_subtitle: 'Scegli un sensitivo disponibile per iniziare una consulenza audio o chat.',
    clienthome_my_panel: 'Il mio pannello',
    clienthome_login: 'Accedi',
    clienthome_loading_psychics: 'Caricamento sensitivi…',
    clienthome_empty: 'Al momento non ci sono sensitivi registrati.',

    languages: {
      es: 'Spagnolo',
      en: 'Inglese',
      fr: 'Francese',
      de: 'Tedesco',
      pt: 'Portoghese',
      it: 'Italiano',
    },

    clienthome_psychic_available: 'Disponibile',
    clienthome_psychic_not_available: 'Non disponibile',
    clienthome_psychic_busy_label: 'Occupato',
    clienthome_psychic_offline_suffix: ' (offline)',
    clienthome_busy_in_call: 'Occupato (in chiamata)',

    clienthome_call_now: 'Chiama ora',
    clienthome_chat: 'Chat',

    clienthome_comments: 'Commenti',
    clienthome_comments_sent: 'Commenti (inviato)',

    clienthome_psychic_not_available_title: 'Sensitivo non disponibile',
    clienthome_psychic_not_available_body: 'Questo sensitivo non è disponibile in questo momento.',

    clienthome_session_expired_title: 'Sessione scaduta',
    clienthome_session_expired_body: 'Accedi di nuovo.',

    clienthome_no_minutes_title: 'Senza minuti',
    clienthome_no_minutes_body: 'Non hai credito sufficiente.',
    clienthome_no_minutes_cancel: 'Annulla',
    clienthome_no_minutes_buy: 'Compra minuti',

    clienthome_error_title: 'Errore',
    clienthome_error_load_psychics: 'Impossibile caricare la lista dei sensitivi.',
    clienthome_error_invalid_server: 'Risposta del server non valida.',
    clienthome_error_unexpected_format: 'Formato inatteso nella lista dei sensitivi.',
    clienthome_error_invalid_response: 'Risposta del server non valida.',

    clienthome_snippet_fallback: 'Sensitivo disponibile per aiutarti.',

    clienthome_call_start_error: 'Impossibile avviare la chiamata. Riprova.',

    app_layout_default_title: "Luz Psíquica",
    app_layout_logo_alt: "Luz Psíquica",
    app_layout_footer_home: "Home",
    app_layout_footer_legal: "Legale",
    app_layout_footer_language: "Lingua",
    app_layout_language_modal_title: "Seleziona lingua",
    app_layout_language_name_es: "Spagnolo",
    app_layout_language_name_en: "Inglese",
    app_layout_language_name_fr: "Francese",
    app_layout_language_name_de: "Tedesco",
    app_layout_language_name_pt: "Portoghese",
    app_layout_language_name_it: "Italiano",
    common: {
      close: "Chiudi"
    },

    network_error_title: 'Errore',
    network_error_message: 'Impossibile connettersi al server. Controlla la connessione e riprova.',
    generic_error_message: 'Si è verificato un errore imprevisto. Riprova.',

    directcall_config_error_title: 'Errore di configurazione',
    directcall_config_error_body: 'EXPO_PUBLIC_API_URL non è configurata.',

    directcall_session_expired_title: 'Sessione scaduta',
    directcall_session_expired_body_login_again: 'Per favore accedi di nuovo.',
    directcall_session_expired_body_token_missing: 'Token non trovato. Accedi di nuovo.',
    directcall_session_expired_body_call: 'Accedi di nuovo per effettuare una chiamata.',

    directcall_error_title: 'Errore',
    directcall_error_missing_psychic: 'Informazioni sul sensitivo non trovate.',
    directcall_error_start_call: 'Impossibile avviare la chiamata.',
    directcall_error_invalid_call_params: 'Il server non ha restituito parametri validi della chiamata.',

    directcall_cannot_start_title: 'Impossibile avviare la chiamata',
    directcall_cannot_start_no_minutes_fallback: 'Minuti insufficienti',
    directcall_cancel: 'Annulla',
    directcall_buy_minutes: 'Compra minuti',

    directcall_connecting_with: 'Connessione della consulenza con',
    directcall_psychic_fallback: 'Sensitivo',

    directcall_hint_starting: 'Avvio chiamata…',
    directcall_hint_loading: 'Caricamento…',
    directcall_hint_ready: 'Pronto',

    directcall_note_no_answer: '* Se il sensitivo non risponde, puoi provare con un altro dalla lista.',

    forgot_header_title: 'Reimposta password',
    
    forgot_title: 'Reimposta password',

    forgot_subtitle: 'Inserisci la tua e-mail o il tuo numero di telefono per ricevere il codice di recupero.',

    forgot_field_label_email_or_phone: 'Email o telefono',
    forgot_placeholder_email_or_phone: 'Email o telefono',

    forgot_required_title: 'Dato richiesto',
    forgot_required_email_or_phone: 'Inserisci la tua email o il tuo telefono.',
    forgot_required_code: 'Inserisci il codice ricevuto.',

    forgot_send_code: 'Invia codice',
    forgot_step2_help: 'Ti abbiamo inviato un codice. Inseriscilo qui e imposta la nuova password.',

    forgot_done_body_sms: 'Ti abbiamo inviato un codice via SMS per reimpostare la tua password. Controllalo e inseriscilo qui sotto.',
    forgot_step2_help_sms: 'Se non ricevi il codice, verifica che il tuo numero sia corretto oppure richiedine uno nuovo.',

    forgot_code_label: 'Codice',
    forgot_code_placeholder: 'Codice (6 cifre)',

    forgot_new_password_label: 'Nuova password',
    forgot_new_password_placeholder: 'Nuova password',

    forgot_confirm_password_label: 'Conferma password',
    forgot_confirm_password_placeholder: 'Conferma password',

    forgot_weak_password_title: 'Password debole',
    forgot_weak_password_body: 'La password deve avere almeno 6 caratteri.',

    forgot_not_match_title: 'Non coincide',
    forgot_not_match_body: 'Le password non coincidono.',

    forgot_done_title: 'Fatto',
    forgot_done_body_generic: 'Se l’utente esiste, invieremo un codice per recuperare la password.',

    forgot_error_title: 'Errore',
    forgot_error_send_code: 'Impossibile inviare il codice.',
    forgot_error_reset: 'Impossibile cambiare la password.',

    forgot_password_updated_title: 'Password aggiornata',
    forgot_password_updated_body: 'Ora puoi accedere con la tua nuova password.',

    forgot_change_password: 'Cambia password',

    forgot_resend_code: 'Reinvia codice',
    forgot_back_to_login: 'Torna al login',

    forgot_show_password_a11y: 'Mostra password',
    forgot_hide_password_a11y: 'Nascondi password',

    legal_home_header_title: 'Note legali',
    legal_home_title: 'Note legali',
    legal_home_meta: 'Seleziona il documento che desideri consultare.',

    legal_home_card_privacy_title: 'Regole e Privacy',
    legal_home_card_privacy_desc: 'Termini di utilizzo, privacy, rimborsi e regole generali.',

    legal_home_card_operational_title: 'Documento operativo della piattaforma',
    legal_home_card_operational_desc:
      'Flusso tecnico-operativo, ruoli, sessioni, minuti e regole operative.',

    common_back: 'Indietro',

    psych_callhist_header_title: 'Cronologia chiamate',

    psych_callhist_title: 'Cronologia chiamate',
    psych_callhist_session_expired_title: 'Sessione scaduta',
    psych_callhist_session_expired_body: 'Accedi di nuovo.',
    psych_callhist_error_title: 'Errore',
    psych_callhist_error_load_history: 'Errore durante il caricamento della cronologia',
    psych_callhist_error_load_history_fallback: 'Impossibile caricare la cronologia.',
    psych_callhist_error_load_payout: 'Errore durante il caricamento del riepilogo pagamenti',

    psych_callhist_status_finished: 'Terminata',
    psych_callhist_status_missed: 'Rifiutata/Persa',
    psych_callhist_status_ongoing: 'In corso',
    psych_callhist_status_cancelled: 'Annullata',
    psych_callhist_status_unknown: '—',

    psych_callhist_client_fallback: 'Cliente',

    psych_callhist_start: 'Inizio',
    psych_callhist_end: 'Fine',
    psych_callhist_no_charge: 'Nessun addebito',

    psych_callhist_payout_block_title: 'Riepilogo pagamenti (PayPal)',
    psych_callhist_earned_total: 'Totale guadagnato:',
    psych_callhist_paid_total: 'Pagato:',
    psych_callhist_pending_total: 'In attesa di pagamento:',
    psych_callhist_last_payout: 'Ultimo pagamento:',

    psych_callhist_info_block_title: 'Riepilogo informativo',
    psych_callhist_calls: 'Chiamate:',
    psych_callhist_minutes_charged: 'Minuti addebitati:',
    psych_callhist_estimated_earnings: 'Guadagno stimato:',
    psych_callhist_info_hint: '*Questo valore è informativo. Il pagamento reale si basa sulle liquidazioni.',

    psych_callhist_empty: 'Non hai ancora chiamate.',

    psych_call_perm_title: 'Permesso microfono',
    psych_call_perm_message_appname: 'Luz Psíquica necessita dell’accesso al microfono per le chiamate vocali.',
    psych_call_perm_allow: 'Consenti',
    psych_call_perm_deny: 'Annulla',

    psych_call_client_fallback: 'Cliente',
    psych_call_dash: '—',

    psych_call_end_title: 'Chiamata terminata',
    psych_call_end_client_cancelled: 'Il cliente ha annullato la chiamata.',
    psych_call_end_missed_or_incomplete: 'La chiamata è stata rifiutata o non si è completata.',
    psych_call_end_error_title: 'Errore',
    psych_call_end_error_body: 'Impossibile terminare correttamente la chiamata.',

    psych_call_audio_no_mic_permission: 'Nessun permesso microfono',
    psych_call_audio_session_expired: 'Sessione scaduta',
    psych_call_audio_invalid_token: 'Token vocale non valido',
    psych_call_audio_incomplete_data: 'Dati Agora incompleti',
    psych_call_audio_sdk_unavailable: 'SDK Agora non disponibile',
    psych_call_audio_connect_error: 'Errore di connessione audio',

    psych_call_audio_status_error_prefix: 'Errore audio: {{msg}}',
    psych_call_audio_status_connecting: 'Connessione audio…',
    psych_call_audio_status_waiting_client: 'Audio connesso. In attesa del cliente…',
    psych_call_audio_status_connected_client: 'Audio connesso con il cliente.',

    psych_call_title_in_progress: 'Chiamata in corso',
    psych_call_room_label: 'Stanza:',
    psych_call_time_label: 'Tempo:',
    psych_call_end_button: 'Termina chiamata',

    psych_chathist_title: 'Cronologia chat',
    psych_chathist_refresh: 'Aggiorna',
    psych_chathist_refresh_busy: '…',
    psych_chathist_loading: 'Caricamento conversazioni…',
    psych_chathist_empty: 'Non ci sono ancora chat da mostrare.',
    psych_chathist_error_load: 'Impossibile caricare la cronologia',

    psych_chathist_readonly_note: 'Solo lettura (il sensitivo non avvia le chat)',

    psych_chathist_client_fallback: 'Cliente',
    psych_chathist_dash: '—',
    psych_chathist_initials_fallback: 'LP',

    psych_chatthread_title_with_name: 'Chat con {{name}}',
    psych_chatthread_readonly_note: 'Solo lettura (il sensitivo non avvia le chat)',
    psych_chatthread_loading: 'Caricamento messaggi…',
    psych_chatthread_empty: 'Non ci sono messaggi da mostrare.',
    psych_chatthread_error_load: 'Impossibile caricare la chat',

    psych_chatthread_client_fallback: 'Cliente',
    psych_chatthread_dash: '—',

    psych_comments_nav_title_with_name: 'Commenti - {{name}}',
    psych_comments_psychic_fallback: 'Sensitivo',
    psych_comments_client_prefix: 'Cliente',
    psych_comments_dash: '—',

    psych_comments_loading: 'Caricamento commenti…',
    psych_comments_loading_fallback: 'Caricamento commenti…',
    psych_comments_error_title: 'Errore',
    psych_comments_err_no_api_url: 'EXPO_PUBLIC_API_URL non è configurato.',
    psych_comments_err_no_psychic_id: 'psychicId non ricevuto.',
    psych_comments_err_load_comments: 'Impossibile caricare i commenti',

    psych_comments_not_available_title: 'Non disponibile',
    psych_comments_not_available_body: 'Puoi valutare solo dopo aver terminato una consulenza.',
    psych_comments_session_expired_title: 'Sessione scaduta',
    psych_comments_session_expired_body: 'Accedi di nuovo.',

    psych_comments_saved_title: 'Fatto!',
    psych_comments_saved_only_rating: 'Valutazione salvata. Avevi già lasciato un commento per questo sensitivo.',
    psych_comments_saved: 'Valutazione salvata.',

    psych_comments_err_save_rating: 'Impossibile salvare la valutazione',

    psych_comments_info_line1_a: 'Questa schermata serve per ',
    psych_comments_info_line1_strong: 'visualizzare',
    psych_comments_info_line1_b: ' i commenti.',
    psych_comments_info_line2_a: 'La ',
    psych_comments_info_line2_strong: 'valutazione',
    psych_comments_info_line2_b: ' si fa dopo una consulenza terminata.',
    psych_comments_info_line3_a: 'Il ',
    psych_comments_info_line3_strong1: 'commento',
    psych_comments_info_line3_b: ' (testo) è opzionale ed è consentito solo ',
    psych_comments_info_line3_strong2: 'una volta per sensitivo',
    psych_comments_info_line3_c: '.',

    psych_comments_form_title: 'Valuta questa consulenza',
    psych_comments_form_label_rating: 'Valutazione',
    psych_comments_form_label_comment: 'Commento (facoltativo)',
    psych_comments_locked_text:
      '✅ Hai già lasciato un commento per questo sensitivo. Puoi continuare a valutare le tue consulenze, ma non scrivere un altro commento.',
    psych_comments_input_placeholder: 'Scrivi il tuo commento (facoltativo)...',

    psych_comments_saving: 'Salvataggio…',
    psych_comments_save_button: 'Salva valutazione',

    psych_comments_empty: 'Non ci sono ancora commenti.',

    psych_dash_header_title: 'Dashboard del sensitivo',
    psych_dash_logout: 'Esci',

    psych_dash_psychic_fallback: 'Sensitivo',
    psych_dash_client_fallback: 'Cliente',
    psych_dash_room_dash: '—',

    psych_dash_config_error_title: 'Errore di configurazione',
    psych_dash_config_error_body_missing_api: 'EXPO_PUBLIC_API_URL non è configurato.',
    psych_dash_config_error_body_missing_api_env: 'EXPO_PUBLIC_API_URL non è impostato. Controlla il file .env.',

    psych_dash_session_expired_title: 'Sessione scaduta',
    psych_dash_session_expired_body: 'Accedi di nuovo.',
    psych_dash_session_expired_body_and_logout: 'Accedi di nuovo.',

    psych_dash_info_title: 'Info',
    psych_dash_info_cant_load_application: 'Impossibile caricare la tua candidatura. Riprova.',

    psych_dash_nav_error_title: 'Errore di navigazione',
    psych_dash_nav_error_body_missing_route:
      'In questo stack la route "PsychicRegister" non è registrata.\n\nSoluzione: aggiungi questa screen nello STESSO stack dove si trova PsychicDashboard:\n<Stack.Screen name="PsychicRegister" component={PsychicRegisterScreen} />',

    psych_dash_error_title: 'Errore',
    psych_dash_error_refresh_info: 'Impossibile aggiornare le informazioni',
    psych_dash_error_open_form: 'Impossibile aprire il modulo.',

    psych_dash_call_end_title: 'Chiamata terminata',
    psych_dash_call_end_body_caller_cancelled: 'Il cliente ha annullato la chiamata.',
    psych_dash_call_end_body_finished: 'La chiamata è terminata.',

    psych_dash_not_available_title: 'Non disponibile',
    psych_dash_not_available_call_cancelled: 'La chiamata è già stata annullata dal cliente.',

    psych_dash_modal_incoming_title: 'Chiamata in arrivo',
    psych_dash_modal_incoming_sub: 'Rispondi per iniziare la consulenza',
    psych_dash_modal_client_label: 'Cliente:',
    psych_dash_modal_room_label: 'Stanza:',
    psych_dash_modal_processing: 'Elaborazione…',
    psych_dash_modal_reject: 'Rifiuta',
    psych_dash_modal_accept: 'Accetta',
    psych_dash_modal_footnote: '* L’addebito inizia quando il sensitivo risponde.',

    psych_dash_header_role_line: 'Sensitivo · Luz Psíquica',
    psych_dash_header_hint_calls: 'Quando sei disponibile, riceverai qui le chiamate dei clienti in tempo reale.',
    psych_dash_socket_status: 'Stato socket: {{status}}',
    psych_dash_socket_connected: 'Connesso',
    psych_dash_socket_disconnected: 'Disconnesso',

    psych_dash_profile_review_title: 'Revisione del profilo',

    psych_dash_team_note_label: 'Nota del team:',
    psych_dash_fields_to_fix_label: 'Sezioni da correggere:',
    psych_dash_fix_button: 'Correggi e invia nuovamente il modulo',
    psych_dash_loading: 'Caricamento…',

    psych_dash_revision_hint: 'Qui vedrai eventuali modifiche o raccomandazioni richieste dal team per il tuo profilo.',

    psych_dash_new_messages_title: 'Nuovi messaggi',
    psych_dash_new_messages_new_suffix: 'nuovo(i)',
    psych_dash_new_messages_open: 'Apri',
    psych_dash_new_messages_close: 'X',

    psych_dash_availability_title: 'Disponibilità',
    psych_dash_availability_currently: 'Al momento sei',
    psych_dash_available: 'Disponibile',
    psych_dash_not_available: 'Non disponibile',
    psych_dash_updating: 'Aggiornamento...',
    psych_dash_set_not_available: 'Impostami non disponibile',
    psych_dash_set_available: 'Impostami disponibile',

    psych_dash_rating_title: 'Valutazione',
    psych_dash_refresh: 'Aggiorna',
    psych_dash_based_on: 'Basato su {{count}}',
    psych_dash_ratings_word: 'valutazioni',
    psych_dash_loading_comments: 'Caricamento commenti…',
    psych_dash_no_visible_comments: 'Non hai ancora commenti visibili qui.',
    psych_dash_recent_comments_title: 'Commenti recenti',
    psych_dash_view_all_comments: 'Vedi tutti i commenti',

    psych_dash_calls_history_title: 'Storico chiamate',
    psych_dash_calls_history_body: 'Controlla le chiamate che hai gestito e il loro stato.',
    psych_dash_view_calls_history: 'Vedi storico chiamate',

    psych_dash_chats_history_title: 'Storico chat',
    psych_dash_chats_history_body: 'Controlla le chat che hai avuto con i tuoi clienti.',
    psych_dash_view_chats_history: 'Vedi storico chat',

    psych_dash_info_block_title: 'Informazioni',
    psych_dash_info_bullet_1: '• Quando un cliente avvia una chiamata e sei disponibile, vedrai un avviso di chiamata in arrivo.',
    psych_dash_info_bullet_2: '• Accettando, entrerai nella schermata di chiamata per assistere il cliente.',
    psych_dash_info_bullet_3: '• ✅ Quando un cliente invia un messaggio, lo vedrai in “Nuovi messaggi” e potrai aprire la chat.',

    psych_profile_header_title: 'Profilo del sensitivo',

    psych_profile_loading_profile: 'Caricamento profilo...',

    psych_profile_psychic_fallback: 'Sensitivo',
    psych_profile_no_info: 'Non sono state trovate informazioni sul sensitivo.',
    psych_profile_back: 'Indietro',

    psych_profile_available: 'Disponibile',
    psych_profile_not_available: 'Non disponibile',
    psych_profile_busy: 'Occupato',
    psych_profile_stats_calls_word: 'chiamate',

    psych_profile_featured_review_tag: '⭐ Commento in evidenza',
    psych_profile_featured_review_rating_label: 'Valutazione',
    psych_profile_featured_review_client_prefix: '— Cliente',

    psych_profile_bio_title: 'Biografia',
    psych_profile_bio_rate_label: 'Tariffa: US$1.25/min',
    psych_profile_bio_phrase_label: 'Frase:',
    psych_profile_bio_languages_label: 'Lingue:',
    psych_profile_bio_areas_label: 'Aree:',
    psych_profile_bio_tools_label: 'Strumenti:',
    psych_profile_bio_experience_label: 'Esperienza:',
    psych_profile_bio_about_me_label: 'Su di me:',

    psych_profile_work_info_title: 'Informazioni di lavoro',
    psych_profile_work_exp_phone_chat_label: 'Esperienza via telefono/chat:',
    psych_profile_yes: 'Sì',
    psych_profile_no: 'No',
    psych_profile_work_start_year_label: 'Anno di inizio:',
    psych_profile_work_hours_per_week_label: 'Ore a settimana:',
    psych_profile_work_channels_label: 'Canali (telefono e chat):',

    psych_profile_comments_title: 'Commenti',
    psych_profile_loading_comments: 'Caricamento commenti…',
    psych_profile_no_comments: 'Non ci sono ancora commenti per questo sensitivo.',
    psych_profile_showing_comments_prefix: 'Mostrando',
    psych_profile_showing_comments_suffix: 'commento(i), dal più recente al più vecchio.',

    psych_profile_history_title: 'Storico',
    psych_profile_history_body: 'Consulta lo storico delle tue chiamate con questo sensitivo.',
    psych_profile_view_call_history: 'Vedi storico chiamate',

    psych_profile_call_now: 'Chiama ora',
    psych_profile_chat: 'Chat',
    psych_profile_unavailable_short: 'Non disponibile',

    psych_profile_psychic_unavailable_title: 'Sensitivo non disponibile',
    psych_profile_psychic_unavailable_body_try_later: 'Questo sensitivo non è disponibile in questo momento. Riprova più tardi.',
    psych_profile_psychic_unavailable_body: 'Questo sensitivo non è disponibile in questo momento.',

    psych_profile_config_error_title: 'Errore di configurazione',
    psych_profile_config_error_body_missing_api: 'EXPO_PUBLIC_API_URL non è configurato.',

    psych_profile_session_expired_title: 'Sessione scaduta',
    psych_profile_session_expired_body_call: 'Accedi di nuovo per effettuare una chiamata.',

    psych_profile_call_cannot_start_title: 'Impossibile avviare la chiamata',
    psych_profile_call_cannot_start_body_no_minutes: 'Saldo minuti insufficiente',
    psych_profile_call_cannot_start_cancel: 'Annulla',
    psych_profile_call_cannot_start_buy_minutes: 'Compra minuti',

    psych_profile_call_error_title: 'Errore',
    psych_profile_call_error_invalid_params: 'Il server non ha restituito parametri di chiamata validi.',
    psych_profile_call_error_start_failed: 'Impossibile avviare la chiamata.',
    psych_profile_call_error_server: 'Si è verificato un errore del server.',

    psych_profile_error_title: 'Errore',
    psych_profile_error_call_failed: 'Impossibile avviare la chiamata.',

    psych_register_title_edit: 'Correggi e reinvia la candidatura',
    psych_register_title_register: 'Registrazione del sensitivo',

    psych_register_revision_title: 'Correzioni richieste',
    psych_register_revision_note_prefix: 'Nota: ',
    psych_register_revision_hint: 'Correggi quanto indicato e premi “Reinvia candidatura”.',

    psych_register_label_full_name: 'Nome completo *',
    psych_register_ph_full_name: 'Es: Laura Pérez',

    psych_register_label_psychic_name: 'Nome da sensitivo (identità pubblica) *',
    psych_register_ph_psychic_name: 'Es: Luna',
    psych_register_help_psychic_name_unique: 'Questo nome sarà visibile ai clienti. Deve essere unico.',

    psych_register_label_paypal_email: 'Email PayPal (obbligatoria) *',
    psych_register_ph_paypal_email: 'es: tuaemail@paypal.com',
    psych_register_help_paypal_email: 'Questa email verrà usata per i pagamenti al sensitivo.',

    psych_register_label_public_bio: 'Biografia pubblica (bio) *',
    psych_register_ph_public_bio: 'Scrivi la tua biografia (la vedranno i clienti)',
    psych_register_help_public_bio: 'Questa biografia verrà mostrata ai clienti nel tuo profilo.',

    psych_register_label_email: 'Email',
    psych_register_ph_email: 'esempio@email.com',

    psych_register_label_phone: 'Telefono / WhatsApp',
    psych_register_ph_phone: '+39 333 000 0000',
    psych_register_help_phone_international: 'Se utilizzi il telefono, inseriscilo in formato internazionale (es. +39 333 000 0000).',

    psych_register_label_password: 'Password *',
    psych_register_ph_password: 'Minimo 6 caratteri',
    psych_register_accessibility_show_password: 'Mostra password',
    psych_register_accessibility_hide_password: 'Nascondi password',

    psych_register_help_edit_credentials:
      'Email/telefono e password sono gestiti nel login/supporto. Qui correggi solo la candidatura.',

    psych_register_label_location: 'Paese / Città *',
    psych_register_ph_location: 'Es: Colombia, Bogotá',

    psych_register_label_languages: 'Lingue in cui offri consulti *',
    psych_register_ph_languages: 'Es: Spagnolo, Inglese',

    psych_register_section_additional_required: 'Informazioni aggiuntive (obbligatorie)',

    psych_register_label_tagline: 'Scrivi una frase che ti identifichi *',
    psych_register_ph_tagline: 'Es: Credere è creare',

    psych_register_label_areas: 'Aree che tratti (puoi selezionare più opzioni) *',
    psych_register_label_areas_other: 'Specifica “Altro” (Aree) *',
    psych_register_ph_areas_other: 'Scrivi le tue aree aggiuntive',

    psych_register_label_applicant_photo: 'Foto del candidato (obbligatoria) *',
    psych_register_permission_box_title: 'Autorizzazione per selezionare le foto',
    psych_register_permission_box_body: 'Luz Psíquica accede alle tue foto solo quando decidi di caricare un’immagine. Questo accesso non viene utilizzato in background.',
    psych_register_permission_hint_denied: 'Se hai negato l’autorizzazione, puoi abilitarla dalle impostazioni del dispositivo.',
    psych_register_permission_request: 'Consenti accesso alle foto',
    psych_register_permission_granted: 'Autorizzazione concessa',
    psych_register_permission_container_first_body: 'Prima di selezionare la foto, consenti l’accesso alle tue foto tramite il pulsante di questa sezione.',
    psych_register_open_settings: 'Apri impostazioni',
    psych_register_permissions_error_body: 'Non è stato possibile richiedere l’autorizzazione. Riprova.',
    psych_register_cancel: 'Annulla',
    psych_register_photo_change: 'Cambia foto',
    psych_register_photo_select: 'Seleziona foto',

    psych_register_label_tools: 'Strumenti che utilizzi (puoi selezionare più opzioni) *',
    psych_register_label_tools_other: 'Specifica “Altro” (Strumenti) *',
    psych_register_ph_tools_other: 'Scrivi i tuoi strumenti aggiuntivi',

    psych_register_label_experience: 'Descrivi meglio la tua esperienza *',
    psych_register_ph_experience: 'Es: metodi, affidabilità, ecc.',

    psych_register_label_worked_phone_chat: 'Hai già lavorato come sensitivo via telefono o chat? *',

    psych_register_label_start_year: 'In che anno hai iniziato professionalmente? *',
    psych_register_year_select: 'Seleziona un anno',
    psych_register_year_modal_title: 'Seleziona l’anno',
    psych_register_year_modal_close: 'Chiudi',

    psych_register_label_hours_per_week: 'Quante ore a settimana saresti disposto/a a lavorare nell’app? *',
    psych_register_ph_hours_per_week: 'Es: 10, 12, 40, tempo pieno',

    psych_register_label_can_do_phone_chat: 'Conferma se puoi fare consulti via telefono e chat *',

    psych_register_label_private_experience:
      '(Solo interno) Raccontaci la tua esperienza privata o altri servizi *',
    psych_register_ph_private_experience: 'Es: esperienza con clienti privati...',

    psych_register_label_photo_marketing_consent: 'Consenso all’uso della foto (marketing/social) *',

    psych_register_label_declaration: 'Dichiarazione obbligatoria *',
    psych_register_declaration_accept: 'Accetto la dichiarazione *',

    psych_register_label_about: 'Messaggio aggiuntivo / Su di te *',
    psych_register_ph_about: 'Cosa vorresti che il team sapesse di te?',

    psych_register_terms_title: 'Regole e Privacy',
    psych_register_terms_body: 'Ho letto e accetto ',
    psych_register_terms_link: 'Regole e Privacy',

    psych_register_submit_edit: 'Reinvia candidatura',
    psych_register_submit_register: 'Invia richiesta',

    psych_register_back: 'Indietro',

    psych_register_yes: 'Sì',
    psych_register_no: 'No',

    psych_register_validation_title: 'Validazione',
    psych_register_error_title: 'Errore',
    psych_register_config_error_title: 'Errore di configurazione',
    psych_register_config_error_body: 'EXPO_PUBLIC_API_URL non è definito. Controlla il tuo file .env.',

    psych_register_permissions_required_title: 'Permesso richiesto',
    psych_register_permissions_required_body: 'Abbiamo bisogno dell’accesso alla galleria per selezionare una foto.',

    psych_register_invalid_photo_title: 'Foto non valida',
    psych_register_invalid_photo_body:
      'Non è stato possibile leggere l’immagine in base64. Prova un’altra foto o riavvia l’app.',

    psych_register_photo_pick_error_title: 'Errore',
    psych_register_photo_pick_error_body: 'Non è stato possibile selezionare la foto.',

    psych_register_terms_alert_title: 'Regole e Privacy',
    psych_register_terms_alert_body: 'Devi accettare Regole e Privacy per continuare.',

    psych_register_session_expired_body: 'Sessione scaduta. Accedi di nuovo.',

    psych_register_success_title: 'Richiesta inviata',
    psych_register_success_resubmit_default: 'Candidatura reinviata correttamente.',
    psych_register_success_register_default:
      'La tua richiesta è stata inviata. Il team di Luz Psíquica esaminerà il tuo profilo e ti contatterà per un colloquio.',

    psych_reviews_config_error_title: 'Errore di configurazione',
    psych_reviews_config_error_body: 'EXPO_PUBLIC_API_URL non è definito nel tuo .env.',

    psych_reviews_session_expired_title: 'Sessione scaduta',
    psych_reviews_session_expired_body: 'Accedi di nuovo.',

    psych_reviews_error_title: 'Errore',
    psych_reviews_load_error_body: 'Impossibile caricare la cronologia delle valutazioni.',

    psych_reviews_title: 'Valutazioni e commenti',

    psych_reviews_summary_title: 'Riepilogo',
    psych_reviews_based_on: 'Basato su {count} valutazioni',
    psych_reviews_refresh: 'Aggiorna',

    psych_reviews_loading: 'Caricamento…',

    psych_reviews_comments_title: 'Commenti',
    psych_reviews_no_comments: 'Non hai ancora commenti visibili.',

    psych_reviews_load_more: 'Carica altro',
    psych_reviews_limit_reached: 'Limite massimo raggiunto',

    psych_reviews_hint_rule:
      '* I commenti visibili dipendono dalla regola anti-spam (un commento per cliente per sensitivo).',

    psych_reviews_back_arrow: '←',
    psych_reviews_refresh_busy: '...',
    psych_reviews_dash_placeholder: '—',

    realcall_mic_permission_title: 'Permesso microfono',
    realcall_mic_permission_message: 'Luz Psíquica ha bisogno dell’accesso al microfono per le chiamate vocali.',
    realcall_mic_permission_accept: 'Consenti',
    realcall_mic_permission_cancel: 'Annulla',

    realcall_call_ended_title: 'Chiamata terminata',
    realcall_call_ended_no_minutes: 'La chiamata è terminata perché hai esaurito i minuti.',

    realcall_call_ended_rejected_body: 'Il sensitivo ha rifiutato la chiamata. Prova un altro sensitivo o riprova più tardi.',
    realcall_ok: 'OK',

    realcall_rating_title: 'Valutazione',
    realcall_rating_pick_stars: 'Seleziona una valutazione (da 1 a 5).',

    realcall_error_title: 'Errore',
    realcall_rating_save_error: 'Impossibile salvare la valutazione',

    realcall_back: '← Indietro',
    realcall_call_title: 'Chiamata audio',
    realcall_room_label: 'Stanza:',

    realcall_psychic_role_brand: 'Sensitivo · Luz Psíquica',

    realcall_audio_error_prefix: 'Errore audio:',
    realcall_audio_connecting: 'Connessione audio…',
    realcall_audio_waiting_psychic: 'Audio connesso. In attesa del sensitivo…',
    realcall_audio_connected_psychic: 'Audio connesso con il sensitivo.',

    realcall_time_label: 'Tempo:',
    realcall_remaining_minutes_label: 'Minuti rimanenti:',
    realcall_billing_starts_note: '* L’addebito inizia quando il sensitivo risponde.',

    realcall_hangup: 'Riagganciare',

    realcall_rate_title: 'Valuta la tua consulenza',
    realcall_rate_subtitle: 'Com’è stata la tua esperienza con {name}?',

    realcall_review_label: 'Commento (facoltativo)',
    realcall_review_placeholder: 'Scrivi un breve commento…',
    realcall_skip: 'Salta',
    realcall_send: 'Invia',
    realcall_sending: 'Invio…',

    register_header_title: 'Registrazione',

    register_title_create_account: 'Crea account',

    register_subtitle_client: 'Registrati come cliente per continuare',

    register_required_fields_title: 'Campi obbligatori',
    register_required_fields_body: 'Compila tutti i campi.',

    register_link_psychic_apply: 'Sei un sensitivo? Candidati per lavorare con noi',

    register_legal_title: 'Regole e Privacy',
    register_legal_body_client: 'Devi accettare Termini, Privacy e Rimborsi per registrarti.',

    register_success_title: 'Account creato',
    register_success_body: 'Il tuo account è stato creato correttamente. Accedi.',

    register_error_title: 'Registrazione',
    register_failed_msg: 'Non è stato possibile completare la registrazione. Riprova.',
    common_ok: 'OK',

    register_placeholder_full_name: 'Nome completo',
    register_placeholder_email_or_phone: 'Email o telefono',
    register_phone_helper: 'Puoi utilizzare e-mail o numero di telefono. Se utilizzi il telefono, inseriscilo in formato internazionale (es. +39 333 000 0000).',
    register_placeholder_password: 'Password',

    register_accessibility_show_password: 'Mostra password',
    register_accessibility_hide_password: 'Nascondi password',

    register_label_account_type: 'Tipo di account',
    register_role_client: 'Cliente',
    register_role_psychic: 'Sensitivo',

    register_terms_prefix: 'Ho letto e accetto',
    register_terms_link: 'Regole e Privacy',

    register_btn_create_account: 'Crea account',
    register_link_have_account_login: 'Hai già un account? Accedi',

    common: {
      back: "Indietro",
      ok: "OK",
      psychic: "Sensitivo",
      dash: "—"
    },
    legal_header_title: 'Regole e Privacy',
    legal: {
      title: "Regole e Privacy",
      meta: "Versione: {{version}} · Titolare legale: {{owner}} · Giurisdizione: {{country}}",
      jurisdictionCountry: "Colombia",
      mailSubject: "Supporto legale - Luz Psíquica",
      openFailTitle: "Impossibile aprire",
      openFailGeneric: "Impossibile aprire il link.",
      emailFailMessage: "Impossibile aprire l’email. Verifica di avere un’app email configurata sul telefono.",
      whatsappFailMessage: "Impossibile aprire WhatsApp. Verifica che WhatsApp sia installato o riprova.",
      emailLabel: "Email: {{email}}",
      whatsappLabel: "WhatsApp: +1 (813) 618-7770",

      s1Title: "1. Accettazione dei termini",
      s1Body: "Con la registrazione e l’utilizzo dell’applicazione, e mediante la selezione espressa della relativa casella di accettazione, l’utente dichiara di aver letto, compreso e accettato integralmente e volontariamente le norme, le politiche, le condizioni e le disposizioni relative all’uso operativo della piattaforma qui descritte.\n\nL’accettazione di tali termini costituisce un requisito obbligatorio e vincolante per l’accesso, la registrazione e l’utilizzo dell’applicazione. Qualora l’utente non sia d’accordo con una qualsiasi delle disposizioni qui stabilite, dovrà astenersi dal registrarsi o dall’utilizzare la piattaforma.\n\nI documenti legali, inclusi Norme e Privacy e il Documento di Funzionamento Operativo della Piattaforma, sono consultabili in qualsiasi momento da questa sezione legale.\n",

      s2Title: "2. Natura del servizio",
      s2Body: "Luz Psíquica è un’applicazione di intrattenimento e orientamento personale, i cui contenuti e servizi hanno carattere esclusivamente informativo e ricreativo.\n\nLa piattaforma non offre, né intende offrire, consulenza medica, psicologica, psichiatrica, legale, finanziaria, terapeutica o qualsiasi altro tipo di consulenza professionale regolamentata. Le informazioni, le opinioni o le interazioni generate all’interno dell’applicazione non sostituiscono in alcun caso il consulto con professionisti debitamente qualificati nei rispettivi ambiti.\n\nL’utente riconosce e accetta che l’utilizzo della piattaforma avviene sotto la propria esclusiva responsabilità e che qualsiasi decisione presa sulla base dei contenuti o delle interazioni presenti su Luz Psíquica è interamente assunta dall’utente stesso, nel rispetto delle linee guida e delle condizioni stabilite dalla piattaforma.\n",

      s3Title: "3. Addebito e pagamento a minuti",
      s3Body: "I servizi offerti all’interno di Luz Psíquica sono addebitati all’utente e liquidati al sensitivo esclusivamente sulla base dei minuti effettivamente consumati per la comunicazione, sia tramite conversazioni vocali sia tramite lo scambio di messaggi scritti, effettuati all’interno dell’applicazione.\n\nNon saranno riconosciuti pagamenti per tempi di attesa, disponibilità, connessione attiva senza consumo effettivo, risultati ottenuti, promesse, aspettative o per qualsiasi altro elemento diverso dall’utilizzo reale, misurabile e verificabile del servizio all’interno della piattaforma.\n\nTutte le transazioni economiche effettuate all’interno dell’applicazione sono gestite tramite la piattaforma di pagamento PayPal, in conformità ai suoi termini, condizioni e politiche di utilizzo. Luz Psíquica non conserva, non elabora né gestisce direttamente informazioni finanziarie sensibili degli utenti o dei sensitivi.\n\nPer tale motivo, e non essendo legalmente autorizzata a farlo, la piattaforma non richiede né è obbligata a richiedere, conservare o verificare numeri di conti bancari, carte di credito, carte di debito o altri dati finanziari personali. L’utilizzo dei mezzi di pagamento è regolato esclusivamente dalle condizioni stabilite da PayPal.\n\nIl rapporto tra Luz Psíquica e i sensitivi è di natura strettamente indipendente. Di conseguenza, non esiste alcun rapporto di lavoro, alcun vincolo di subordinazione, né alcun obbligo di pagamento di premi, benefici previdenziali, prestazioni lavorative, indennità o compensazioni di natura analoga.\n\nLa piattaforma non concede prestiti, anticipi, acconti o garanzie di reddito e non rilascia certificazioni di lavoro, attestazioni di reddito, lettere per pratiche finanziarie, sussidi, garanzie o documenti di natura simile.\n\nI minuti consumati sono calcolati attraverso i sistemi tecnici di misurazione della piattaforma. In caso di adeguamenti tecnici, problemi di connessione, interruzioni del servizio o discrepanze nella misurazione del tempo consumato, i registri interni di Luz Psíquica prevarranno come riferimento valido. Qualsiasi reclamo relativo alla misurazione dei minuti dovrà essere presentato secondo i canali e le procedure stabilite dalla piattaforma, senza che ciò comporti il riconoscimento automatico di rimborsi, compensazioni o pagamenti aggiuntivi.\n",

      s4Title: "4. Divieto di condivisione di informazioni personali",
      s4Body: "Al fine di tutelare la sicurezza, la riservatezza e il corretto funzionamento della piattaforma, è severamente vietato lo scambio di informazioni personali o sensibili tra clienti e sensitivi, sia all’interno che all’esterno dell’applicazione.\n\nPer informazioni personali si intendono, a titolo esemplificativo e non esaustivo, tutti i dati che consentono l’identificazione, il contatto o la localizzazione di una persona, inclusi numeri di telefono, indirizzi fisici, indirizzi di posta elettronica, profili sui social network, documenti di identità, dati bancari, numeri di conto, link di pagamento, modalità di contatto esterne o altri dati di natura analoga.\n\nÈ inoltre espressamente vietato trasferire conversazioni, accordi, pagamenti o qualsiasi tipo di interazione al di fuori dell’applicazione, nonché tentare di eludere i sistemi di comunicazione e di pagamento messi a disposizione da Luz Psíquica.\n\nQuesto divieto si applica in modo obbligatorio sia ai clienti sia ai sensitivi, e la sua violazione può comportare l’adozione delle misure correttive previste dalle norme e condizioni della piattaforma.\n",

      s5Title: "5. Termini e condizioni",
      s5Body: "L’utilizzo di Luz Psíquica è subordinato al rispetto delle regole di convivenza, del rispetto reciproco e delle disposizioni interne stabilite dalla piattaforma, finalizzate a garantire un ambiente sicuro, funzionale e adeguato per tutti gli utenti.\n\nLuz Psíquica si riserva il diritto di sospendere temporaneamente o chiudere definitivamente gli account di utenti o sensitivi qualora sussistano motivi operativi, tecnici o di sicurezza che lo rendano necessario, inclusi, a titolo esemplificativo e non esaustivo, casi di frode, abuso, molestie, comportamento inappropriato, uso improprio della piattaforma, tentativi di elusione dei controlli interni o violazione delle norme, politiche e condizioni qui stabilite.\n\nLe misure adottate avranno natura preventiva o correttiva, a seconda dei casi, e saranno applicate al fine di tutelare l’integrità della piattaforma, i suoi utenti e il corretto funzionamento dei servizi, senza che ciò comporti alcun diritto a indennizzi, compensazioni o rivendicazioni nei confronti di Luz Psíquica.\n",

      s6Title: "6. Privacy e trattamento dei dati",
      s6Body: "Luz Psíquica tratta esclusivamente i dati personali minimi e strettamente necessari al funzionamento operativo della piattaforma, inclusi, a titolo esemplificativo e non esaustivo, l’identificazione dell’account, la cronologia delle sessioni, gli acquisti effettuati, il consumo dei minuti e la gestione delle richieste di assistenza.\n\nIn nessun caso è consentito agli utenti scambiarsi dati personali tra loro né accedere alle informazioni personali di altri utenti o sensitivi, al di fuori dei meccanismi strettamente necessari alla prestazione del servizio all’interno dell’applicazione.\n\nI dati trattati dalla piattaforma sono utilizzati esclusivamente per finalità operative, di assistenza tecnica, di sicurezza, di prevenzione delle frodi, di miglioramento del servizio e di adempimento degli obblighi legali o regolamentari applicabili. Luz Psíquica non commercializza, non vende né cede dati personali a terzi per finalità estranee al funzionamento della piattaforma.\n\nIl trattamento dei dati avviene nel rispetto dei principi di liceità, finalità, proporzionalità e sicurezza, adottando misure tecniche e organizzative adeguate per proteggere le informazioni da accessi non autorizzati, usi impropri o perdite.\n\nGli utenti che richiedano l’attivazione come sensitivi sulla piattaforma potranno essere tenuti a fornire informazioni identificative aggiuntive, inclusa copia di un documento ufficiale di identità valido, al solo scopo di verificare l’identità reale del richiedente, la maggiore età, l’autenticità dei dati forniti e il rispetto degli obblighi contrattuali e legali applicabili.\n\nTali informazioni saranno trattate in conformità ai principi di legalità, limitazione della finalità, proporzionalità, sicurezza e riservatezza previsti dalla normativa applicabile in materia di protezione dei dati, inclusa la Legge colombiana 1581 del 2012.\n\nIn nessun caso tali dati saranno venduti, ceduti o utilizzati per finalità diverse da quelle qui espressamente indicate, e saranno conservati esclusivamente per il tempo strettamente necessario al raggiungimento della finalità prevista.\n",

      s7Title: "7. Limitazione di responsabilità",
      s7Body: "Luz Psíquica fornisce i propri servizi secondo le modalità e le condizioni descritte sulla piattaforma, senza concedere garanzie espresse o implicite in merito a risultati, accuratezza, aspettative personali o conseguenze derivanti dall’utilizzo dell’applicazione.\n\nLa piattaforma non è responsabile per decisioni, azioni, omissioni, interpretazioni o risultati derivanti direttamente o indirettamente dall’uso dei contenuti, dei servizi o delle interazioni effettuate all’interno dell’applicazione, che restano sotto l’esclusiva responsabilità dell’utente.\n\nLuz Psíquica non è altresì responsabile per interruzioni del servizio, errori tecnici, problemi di connettività, indisponibilità temporanea della piattaforma, perdita di informazioni, adeguamenti nella misurazione dei minuti, né per danni diretti o indiretti derivanti da cause tecniche, operative o di forza maggiore.\n\nIn nessun caso la responsabilità di Luz Psíquica potrà eccedere l’importo effettivamente pagato dall’utente all’interno dell’applicazione per i servizi oggetto di contestazione, né darà luogo a risarcimenti per danni morali, mancato guadagno, perdita di opportunità, aspettative non soddisfatte o altri danni indiretti.\n",

      s8Title: "8. Natura del servizio e carattere non rimborsabile",
      s8Body: "Sulla piattaforma, l’utilizzo dei servizi di chat e/o chiamata è fatturato secondo il criterio “minuto iniziato, minuto addebitato”. Pertanto, qualsiasi frazione di minuto iniziata sarà considerata come un minuto completo ai fini della contabilizzazione e del pagamento. Questa politica si applica sia al consumo di minuti da parte del cliente sia al calcolo del tempo effettivamente prestato dal consulente, al fine di garantire una compensazione equa e una misurazione chiara, oggettiva e trasparente del servizio.\n\nLa durata di ogni interazione è registrata automaticamente dal sistema, e l’utente riconosce e accetta espressamente tale modalità di fatturazione. I minuti acquistati sulla piattaforma Luz Psíquica costituiscono crediti digitali ad uso esclusivo e non rappresentano denaro contante, depositi, saldi prelevabili o strumenti finanziari.\n\nTutti gli acquisti sono definitivi e non rimborsabili, anche in caso di mancato utilizzo totale o parziale. I minuti non possono essere convertiti in denaro, trasferiti o reclamati al di fuori della piattaforma.\n\nL’utente riconosce di acquistare un servizio digitale immediato o su richiesta, rinunciando a eventuali diritti di recesso, nei limiti consentiti dalla legge. Eventuali eccezioni saranno valutate solo in caso di problemi tecnici comprovati imputabili alla piattaforma.\n",

      s9Title: "9. Violazioni gravi",
      s9Body: "Sono considerate violazioni gravi, a titolo esemplificativo e non esaustivo, le condotte che compromettono in modo grave la sicurezza, il rispetto, la legalità o la convivenza all’interno della piattaforma, inclusi insulti, minacce, molestie, diffusione di materiale pornografico, contenuti sessuali espliciti, comportamenti offensivi o discriminatori, o atti contrari alla morale, all’ordine pubblico e al rispetto reciproco.\n\nLa commissione di violazioni gravi può comportare la chiusura immediata e definitiva dell’account dell’utente o del sensitivo, senza necessità di preavviso, qualora ciò sia giustificato dalla gravità dei fatti, dalla reiterazione della condotta o dai rischi per altri utenti o per l’integrità della piattaforma.\n\nNei casi di particolare gravità, e qualora sussistano prove interne sufficienti e verificabili di violazione delle norme, Luz Psíquica potrà procedere alla chiusura definitiva dell’account senza riconoscimento di pagamenti, saldi accumulati, benefici pendenti o compensazioni di qualsiasi natura, fatti salvi eventuali ulteriori rimedi legali applicabili.\n",

      s10Title: "10. Recesso volontario dell’utente",
      s10Body: "L’utente può richiedere in qualsiasi momento il recesso volontario dalla piattaforma tramite i meccanismi e gli strumenti messi a disposizione all’interno dell’applicazione.\n\nUna volta effettuata la richiesta e confermata espressamente dall’utente, l’account sarà eliminato immediatamente, determinando la cessazione del rapporto tra l’utente e la piattaforma, fatto salvo l’adempimento degli obblighi precedentemente assunti.\n\nIl recesso volontario non dà luogo, in alcun caso, a rimborsi, compensazioni, indennizzi o restituzioni degli importi pagati per i servizi acquistati, inclusi i minuti non utilizzati al momento dell’eliminazione dell’account.\n\nI minuti disponibili al momento del recesso non possono essere convertiti in denaro, trasferiti né rivendicati come credito al di fuori della piattaforma.\n\nL’utente riconosce e accetta espressamente che i servizi acquistati sono di natura non rimborsabile e che tale condizione è stata chiaramente comunicata prima dell’utilizzo della piattaforma.\n\nLa richiesta di recesso e il relativo trattamento saranno effettuati conformemente alle procedure interne di Luz Psíquica, senza che ciò comporti alcun obbligo di compensazione economica da parte della piattaforma.\n",

      s11Title: "11. Utilizzo delle tecnologie integrate del dispositivo",
      s11Body: "L’applicazione Luz Psíquica può richiedere l’accesso a determinate tecnologie integrate nel dispositivo dell’utente, quali la fotocamera e il microfono, esclusivamente quando l’utente decide volontariamente di utilizzarle nell’ambito delle funzionalità disponibili dell’applicazione.\n\nL’accesso alla fotocamera è richiesto esclusivamente quando l’utente sceglie di caricare un’immagine, ad esempio una foto del profilo. L’accesso al microfono è utilizzato unicamente durante le interazioni di comunicazione vocale all’interno della piattaforma. In nessun caso l’applicazione utilizza funzioni di registrazione video.\n\nL’applicazione non utilizza la fotocamera né il microfono in background e non accede a tali tecnologie senza l’interazione diretta e il consenso esplicito dell’utente. Allo stesso modo, Luz Psíquica non acquisisce immagini, audio o qualsiasi altro contenuto senza l’autorizzazione espressa dell’utente.\n\nLe immagini e i contenuti audio forniti dall’utente sono utilizzati esclusivamente per finalità funzionali e operative all’interno dell’applicazione e non vengono condivisi con terzi senza l’autorizzazione espressa dell’utente, salvo quando ciò sia strettamente necessario per l’erogazione del servizio secondo le condizioni della piattaforma.\n\nL’utente può revocare in qualsiasi momento i permessi concessi alla fotocamera e al microfono dalle impostazioni del sistema operativo del proprio dispositivo, il che può limitare o impedire l’utilizzo di determinate funzionalità dell’applicazione.\n",

      s12Title: "12. Contatto",
      s12Intro: "Per qualsiasi dubbio, reclamo, segnalazione o richiesta relativa al funzionamento dell’applicazione, l’utente può contattare Luz Psíquica attraverso i canali di contatto messi a disposizione all’interno della piattaforma.\n\nLe comunicazioni ricevute saranno gestite in conformità con le procedure interne dell’applicazione e entro termini ragionevoli, in base alla natura della richiesta.\n"
    },

    operational_header_title: 'Documento operativo',
    operational: {
      title: "Documento operativo",
      meta: "Versione: {{version}} · Data: {{date}} · Piattaforma: {{platform}}",

      s1Heading: "1. Oggetto del documento",
      s1Body: "Il presente Documento di Funzionamento Operativo ha lo scopo di descrivere in modo chiaro, trasparente e tecnico il funzionamento generale della piattaforma Luz Psíquica, nonché di stabilire le regole operative, tecniche e funzionali in base alle quali il servizio viene prestato a clienti e sensitivi. Questo documento costituisce parte integrante del quadro legale della piattaforma ed è obbligatorio per tutti gli utenti che utilizzano l’applicazione.",

      s2Heading: "2. Descrizione generale della piattaforma",
      s2Body: "Luz Psíquica è una piattaforma digitale che consente la comunicazione tra clienti e sensitivo tramite servizi di chat e chiamate vocali, utilizzando un sistema di minuti prepagati acquistati dai clienti. Inoltre, la piattaforma può offrire contenuti audiovisivi associati alla propria attività, con finalità informative, promozionali, commerciali o di posizionamento del brand. La piattaforma agisce come intermediario tecnologico, fornendo l’infrastruttura tecnica, i sistemi di pagamento, il controllo delle sessioni, la gestione dei minuti e la relativa liquidazione economica a favore dei sensitivi.",

      s3Heading: "3. Ruoli all’interno della piattaforma",
      s31Heading: "3.1 Cliente",
      s31Body: "Utente che acquista minuti e accede ai servizi di consulto tramite chat o chiamata.",
      s32Heading: "3.2 Sensitivo",
      s32Body: "Utente autorizzato che presta servizi di consulto ai clienti e riceve una remunerazione\nfinanziaria in base al tempo effettivamente consumato.",
      s33Heading: "3.3 Amministratore",
      s33Body: "Utente incaricato della supervisione, validazione, manutenzione e operatività generale della\npiattaforma.",

      s4Heading: "4. Funzionamento operativo del servizio",
      s41Heading: "4.1 Registrazione e accesso",
      s41Body: "• Gli utenti devono registrarsi con informazioni valide.\n• I clienti possono creare un account e acquistare minuti.\n• I sensitivi devono essere autorizzati dalla piattaforma prima di prestare il servizio.",
      s42Heading: "4.2 Acquisto di minuti",
      s42Body: "• I minuti vengono acquistati tramite una piattaforma di pagamento.\n• I minuti sono prepagati e vengono consumati durante le sessioni.\n• La piattaforma definisce prezzi, pacchetti, sconti e regole operative.",
      s43Heading: "4.3 Accesso e disponibilità",
      s43Body: "• Il cliente seleziona un sensitivo disponibile.\n• La sessione inizia solo se il cliente dispone di minuti acquistati sufficienti.\n• La piattaforma gestisce il controllo del tempo e dei consumi.",

      s5Heading: "5. Sessioni, consumo di minuti e controllo antifrode",
      s51Heading: "5.1 Controllo delle sessioni",
      s51Body: "• Il consumo viene conteggiato al minuto in chat o chiamata.\n• Il sistema chiude le sessioni per inattività o conclusione.\n• Vengono applicati controlli per evitare usi anomali o frodi.",
      s52Heading: "5.2 Divieto di scambio di dati personali",
      s52Body: "• È vietato scambiare dati personali o di contatto.\n• È vietato spostare il rapporto commerciale fuori dalla piattaforma.\n• La violazione può comportare sospensione o chiusura.",

      s6Heading: "6. Validazione e funzionamento del ruolo sensitivo",
      s61Heading: "6.1 Condizioni dello sensitivo",
      s61Body: "• Lo sensitivo deve essere approvato dalla piattaforma.\n• Deve operare secondo le regole interne.\n• Può essere sospeso per violazioni, reclami o frode.",

      s7Heading: "7. Pagamento ai sensitivi e liquidazione economica",
      s71Heading: "7.1 Liquidazione economica",
      s71Body: "• La piattaforma effettua la liquidazione in base ai minuti effettivamente consumati.\n• La remunerazione è determinata secondo le regole interne della piattaforma e il registro interno delle transazioni effettuate.\n• I pagamenti vengono raggruppati ed eseguiti in cicli definiti.",

      s8Heading: "8. Asset sonori, musicali e audiovisivi della piattaforma",
      s81Heading: "8.1 Natura degli asset",
      s81Body: "La piattaforma utilizza asset digitali che includono, tra gli altri:\n• suonerie per chiamate in arrivo\n• suoni di notifica e avvisi di sistema\n• musica incorporata in contenuti audiovisivi\n• video promozionali, informativi o commerciali\nQuesti asset sono parte integrante dell’esperienza funzionale, comunicativa e di brand\ndi Luz Psíquica.",
      s82Heading: "8.2 Origine degli asset",
      s82Body: "Gli asset sonori, musicali e audiovisivi utilizzati dalla piattaforma:\n• sono stati creati specificamente per Luz Psíquica\n• sono sviluppati tramite processi creativi propri, che possono includere l’uso di strumenti di IA generativa, sempre sotto la direzione, il controllo e la curatela della piattaforma\n• non corrispondono a opere musicali commerciali né a contenuti audiovisivi di terzi con sfruttamento indipendente",
      s83Heading: "8.3 Contenuti audiovisivi e diffusione esterna",
      s83Body: "I contenuti audiovisivi prodotti da Luz Psíquica:\n• possono essere commercializzati, distribuiti o diffusi dentro e fuori dall’applicazione\n• possono essere pubblicati su piattaforme digitali e social network\n• possono includere musica, immagini, animazioni, testi e voci generate o assistite dall’IA\nLa diffusione di tali contenuti non implica alcuna cessione di diritti a utenti, sensitivi o terzi.",
      s84Heading: "8.4 Proprietà intellettuale",
      s84Body: "• Tutti gli asset sonori, musicali e audiovisivi sono di proprietà esclusiva di Luz Psíquica o dispongono delle licenze necessarie per il loro utilizzo.\n• Non sono personalizzabili dagli utenti.\n• Non possono essere estratti, riutilizzati, distribuiti, rivenduti né sfruttati al di fuori della piattaforma senza autorizzazione espressa e scritta.",
      s85Heading: "8.5 Finalità d’uso",
      s85Body: "Gli asset descritti:\n• svolgono una funzione tecnica, operativa, comunicativa e commerciale\n• non costituiscono opere artistiche indipendenti per sfruttamento individuale\n• non generano diritti economici, d’autore o di partecipazione per utenti o sensitivi",

      s9Heading: "9. Limitazioni tecniche e operative",
      s9Body: "• La piattaforma dipende dalla connettività a internet.\n• Guasti tecnici, interruzioni di rete o manutenzione possono influire temporaneamente sul servizio.\n• Luz Psíquica non garantisce disponibilità continua e ininterrotta.",

      s10Heading: "10. Modifiche del servizio",
      s10Body: "Luz Psíquica si riserva il diritto di:\n• modificare funzionalità\n• adeguare regole operative\n• aggiornare sistemi di pagamento, comunicazione o contenuti\nTali modifiche possono essere effettuate per migliorare l’esperienza utente o per ragioni tecniche, legali o operative.",

      s11Heading: "11. Accettazione del documento",
      s11Body: "L’uso della piattaforma implica l’accettazione espressa di questo Documento di\nFunzionamento Operativo, nonché degli altri documenti legali associati.",

      s12Heading: "12. Informazioni aggiuntive",
      s12Body: "Responsabile dello sviluppo tecnologico della piattaforma:\nAndrés Loaiza\nLa progettazione, lo sviluppo tecnico, l’architettura funzionale e l’operatività tecnologica della piattaforma Luz Psíquica sono stati realizzati sotto la direzione del responsabile menzionato, in coordinamento con gli obiettivi, i principi etici e le linee guida operative della piattaforma.\nNota finale\nQuesto documento viene pubblicato come parte dell’impegno di Luz Psíquica verso la trasparenza, l’etica tecnologica, la creatività responsabile e la chiarezza operativa."
    }
  },
};
# Laravel 11 special routes

## Laravel\Sanctum

    GET|HEAD  sanctum/csrf-cookie ... sanctum.csrf-cookie ... CsrfCookieController@show

## Laravel\Fortify

    GET|HEAD  forgot-password ... password.request ......... PasswordResetLinkController@create
    GET|HEAD  login ... login .............................. AuthenticatedSessionController@create
    GET|HEAD  register ... register ........................ RegisteredUserController@create
    GET|HEAD  reset-password/{token} ... password.reset .... NewPasswordController@create
    GET|HEAD  two-factor-challenge ... two-factor.login .... TwoFactorAuthenticatedSessionController@create
    GET|HEAD  user/confirm-password ........................ ConfirmablePasswordController@show
    GET|HEAD  user/confirmed-password-status ... password.confirmation ... ConfirmedPasswordStatusController@show
    GET|HEAD  user/two-factor-qr-code ... two-factor.qr-code ... TwoFactorQrCodeController@show
    GET|HEAD  user/two-factor-recovery-codes ... two-factor.recovery-codes ... RecoveryCodeController@index
    GET|HEAD  user/two-factor-secret-key ... two-factor.secret-key ... TwoFactorSecretKeyController@show
    POST      forgot-password ... password.email ........... PasswordResetLinkController@store
    POST      login ........................................ AuthenticatedSessionController@store
    POST      logout ... logout ............................ AuthenticatedSessionController@destroy
    POST      register ..................................... RegisteredUserController@store
    POST      reset-password ... password.update ........... NewPasswordController@store
    POST      two-factor-challenge ......................... TwoFactorAuthenticatedSessionController@store
    POST      user/confirm-password . password.confirm ..... ConfirmablePasswordController@store
    POST      user/confirmed-two-factor-authentication ... two-factor.confirm ... ConfirmedTwoFactorAuthenticationController@store
    POST      user/two-factor-authentication two-factor.enable ... TwoFactorAuthenticationController@store
    POST      user/two-factor-recovery-codes ............... RecoveryCodeController@store
    PUT       user/password ... user-password.update ....... PasswordController@update
    PUT       user/profile-information ... user-profile-information.update ... ProfileInformationController@update
    DELETE    user/two-factor-authentication ... two-factor.disable ... TwoFactorAuthenticationController@destroy

##  Livewire\Mechanisms

    GET|HEAD  livewire/livewire.js ......................... FrontendAssets@returnJavaScriptAsFile
    GET|HEAD  livewire/livewire.min.js.map ................. FrontendAssets@maps
    GET|HEAD  livewire/preview-file/{filename} ... livewire.preview-file ... FilePreviewCon…
    POST      livewire/update ........ livewire.update ..... HandleRequests@handleUpdate
    POST      livewire/upload-file ... livewire.upload-file ... FileUploadController@handle


***

[Go to index](../../README.md)

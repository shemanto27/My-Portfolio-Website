from djoser.email import (
    ActivationEmail,
    ConfirmationEmail,
    PasswordResetEmail,
    PasswordChangedConfirmationEmail,
)

class CustomActivationEmail(ActivationEmail):
    template_name = 'email_templates/activation.html'

class CustomConfirmationEmail(ConfirmationEmail):
    template_name = 'email_templates/confirmation.html'

class CustomPasswordResetEmail(PasswordResetEmail):
    template_name = 'email_templates/password_reset.html'

class CustomPasswordChangedConfirmationEmail(PasswordChangedConfirmationEmail):
    template_name = 'email_templates/password_changed_confirmation.html'
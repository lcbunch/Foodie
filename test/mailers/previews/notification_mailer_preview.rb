# Preview all emails at http://localhost:3000/rails/mailers/notification_mailer
class NotificationMailerPreview < ActionMailer::Preview

  def contact_form
    params = {user_email: 'billy@cheese.info', in_regards_to: 'eating cheese', content: 'BLAH! dude'}
    NotificationMailer.contact_form(params)

  end
end

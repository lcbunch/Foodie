class UserMailer < ActionMailer::Base
  default from: "http://floating-oasis-7973.herokuapp.com"

  def welcome(user_email)
    @user_email = user_email
    mail(to: @user_email, subject: 'Welcome to the club')
  end
end

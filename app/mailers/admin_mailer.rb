class AdminMailer < ActionMailer::Base
  default from: "application@myapp.com"

  def report
    @number_of_users = rand(1000)
    mail(to: 'admin@myapp.com', subject: 'Your user number')
  end
end

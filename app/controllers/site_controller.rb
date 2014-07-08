class SiteController < ApplicationController
  def index
    @event = Event.new
  end

  def places
      respond_to do |format|
    format.html do
      render :index
    end
    format.json do
      render json: {name: 'Jeremy'}
      end
    end
  end

  def contact
    if request.post?
      NotificationMailer.contact_form(params).deliver
      redirect_to root_path
    end
  end

  def login
    UserMailer.welcome('dude@party.house').deliver
    redirect_to root_path
  end

  def report
    AdminMailer.report.deliver
    redirect_to root_path
  end

  def
  def show
  end

  def new
  end

  def create
  end
end

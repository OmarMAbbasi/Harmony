# frozen_string_literal: true

class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  helper_method :current_user, :logged_in?, :require_login!

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !current_user.nil?
  end

  def login(user)
    session[:session_token] = user.reset_session!
    @current_user = user
  end

  def logout
    current_user.reset_session!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_login!
    render json: ['Redirecting to Login quietly'], status: 401
  end
end

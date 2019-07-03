# frozen_string_literal: true

class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if user
      login(user)
      render 'api/user/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
    if @user == current_user
      logout
    else
      render json: ['Some Error Page Here'], status: 404
    end
    render 'api/user/show'
    # redirect_to new_session_url
  end
end

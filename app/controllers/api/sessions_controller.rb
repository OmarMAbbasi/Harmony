# frozen_string_literal: true

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login(@user)
      debugger
      render 'api/users/show'
    else
      render json: ['Invalid Credentials'], status: 401
    end
  end

  def destroy
    if (@user = current_user)
      logout
      render 'api/users/show'
    else
      render json: ['Some Error Page Here'], status: 404
    end
    # redirect_to new_session_url
  end
end

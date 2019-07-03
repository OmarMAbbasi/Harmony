# frozen_string_literal: true

class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if user
      login(user)
      render json
    else
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end
end

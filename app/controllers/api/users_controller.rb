# frozen_string_literal: true

class Api::UsersController < ApplicationController
  # before_action :ensure_user_tag, only: [:create]
  before_action :set_user, only: [:update, :destroy]

  def create
    @user = User.new(user_params)
    if @user.save
      
      GuildMembership.create!(guild_id: 5, user_id: @user.id)
      GuildMembership.create!(guild_id: 6, user_id: @user.id)
      GuildMembership.create!(guild_id: 13, user_id: @user.id)

      login(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def update
  #   @user = current_user
  #   if @user.save
  #     logout
  #     login(@user)
  #     render 'api/users/show'
  #   else
  #     render json: @user.errors.full_messages, status: 422
  #   end
  # end

  # def destroy
  #   logout
  #   @user.destroy
  #   render 'api/users/show'
  # end


  private

  def set_user
    @user = User.find(params[:id])
  rescue
    render json: ['No such user'], status: 404
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :digits)
  end
end

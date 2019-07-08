class Api::GuildsController < ApplicationController
  before_action :set_guild, only: [:show, :update, :destroy]

  
    def show
        if @guild
          render '/api/guild/show'
        end
    end

  def create
    @guild = Guild.new(guild_params)
    if @user.save
      login(@guild)
      render '/api/guild/show'
    else
      render json: @guild.errors.full_messages, status: 422
    end
  end

def update 
    if @guild.owner_id == current_user.id
        @guild.update(guild_params)
      render '/api/guilds/show'
    else
      render json: @guild.errors.full_messages, status: 422
    end
end


def delete 
    if @guild.owner_id == current_user.id 
        @guild.destroy
        render '/api/guild/show'
    end
end
    private

    def set_guild
        @guild = Guild.find(params[:id])
    rescue
      render json: ['No such guild'], status: 404
    end

    def guild_params
      params.require(:guild).permit(:name, :owner_id, :is_home?)
    end
end

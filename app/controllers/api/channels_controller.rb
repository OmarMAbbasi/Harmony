class Api::ChannelsController < ApplicationController
  before_action :set_channel, only: [:show, :update, :destroy]

  
    def show
        if @channel
          render `/api/channels/show`
        else 
          render json: @channel.errors.full_messages, status: 422
        end
    end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render '/api/channels/show'
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

def update 
    if @channel.owner_id == current_user.id
        @channel.update(channel_params)
      render '/api/channels/show'
    else
      render json: @channel.errors.full_messages, status: 422
    end
end


def delete 
    if @channel 
        @channel.destroy
        render '/api/channels/show'
    end
end
    private
    def set_channel
        @channel = Channel.find(params[:id])
    rescue
      render json: ['No such channel'], status: 404
    end

    def channel_params
      params.require(:channel).permit(:name, :guild_id, :is_home?)
    end
end

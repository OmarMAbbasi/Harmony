class ChannelChannel < ApplicationCable::Channel
  def subscribed
    @channel = Channel.find(params[:id])
    stream_for @channel
  end

  def speak(data)
    message = @channel.messages.new(body: data['message'], author_id: data['authorId'] )
    if message.save
      socket = { messages: message, users: message.author, channels: message.channel, type: 'message' }
      ChannelChannel.broadcast_to(@channel, socket)
    end
  end

  def load
    messages = @channel.messages
    socket = { messages: messages, type: 'messages' }
    ChannelChannel.broadcast_to(@channel, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
  
end




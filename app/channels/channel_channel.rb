class ChannelChannel < ApplicationCable::Channel
  def subscribed
    @channel = Channel.find(params[:id])
    stream_for @channel
  end

  def speak(data)
    message = @channel.messages.new(body: data['message'], author_id: data['authorId'] )
    if message.save
      author = message.author
      channel = message.channel
      message = message.attributes
      message["channelId"] = message.delete("channel_id")
      message["authorId"] = message.delete("author_id")
      message["createdAt"] = message.delete("created_at")
      message["updatedAt"] = message.delete("updated_at")
      socket = { messages: message, users: author, channels: channel, type: 'message' }
      ChannelChannel.broadcast_to(@channel, socket)
    end
  end

  def load
    if messages
      messages = messages.each do |message|
        message = message.attributes
        message["channelId"] = message.delete("channel_id")
        message["authorId"] = message.delete("author_id")
        message["createdAt"] = message.delete("created_at")
        message["updatedAt"] = message.delete("updated_at")
      end
      socket = { messages: messages, type: 'messages' }
      
    else
      socket = { messages: null, type: 'no
        messages'}
    end
    ChannelChannel.broadcast_to(@channel, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
  
end




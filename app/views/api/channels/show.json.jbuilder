json.partial! 'api/channels/channel', channel: @channel

@channel.messages.each do |message|
    json.partial! 'api/messages/message', message: message
end

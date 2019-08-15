json.channels do
    json.set! channel.id do 
        json.extract! channel, :id, :name, :guild_id
    end
end

channel.messages.each do |message|
    json.partial! 'api/messages/message', message: message
end

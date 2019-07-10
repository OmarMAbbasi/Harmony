
json.guilds do
    json.set! @guild.id do 
        json.extract! @guild, :id, :name, :owner_id
    end
end


@guild.channels.each do |channel|
    json.partial! 'api/channels/show', channel: channel
end

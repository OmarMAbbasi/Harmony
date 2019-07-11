json.partial! 'api/guilds/guild', guild: @guild

@guild.channels.each do |channel|
    json.partial! 'api/channels/channel', channel: channel
end

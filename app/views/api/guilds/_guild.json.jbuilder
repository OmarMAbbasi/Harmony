json.guilds do    
    json.set! guild.id do 
        json.extract! guild, :id, :name, :owner_id
    end
end

guild.channels.each do |channel|
    json.partial! 'api/channels/channel', channel: channel
end

guild.members.each do |user|
    json.users do
        json.set! user.id do 
            json.extract! user, :id, :username, :digits
        end
    end
end 
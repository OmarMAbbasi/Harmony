
json.channels do
    json.set! channel.id do 
        json.extract! channel, :id, :name, :guild_id
    end
end
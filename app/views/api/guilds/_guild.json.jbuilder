json.guilds do    
    json.set! guild.id do 
        json.extract! guild, :id, :name, :owner_id
    end
end

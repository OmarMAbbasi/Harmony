json.extract! @guild, :id, :name, :owner_id
json.channels @guild.channels.pluck(:id, :name)
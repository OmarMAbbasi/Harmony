json.extract! user, :id, :username, :digits

json.guilds user.guilds do |guild|
  json.id guild.id  
  json.name guild.name
end  


json.home user.home
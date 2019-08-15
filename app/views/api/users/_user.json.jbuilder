# json.extract! user, :id, :username, :digits



# json.home user.home

json.currentUser do
  json.guilds user.guilds do |guild|
    json.id guild.id  
    json.name guild.name
  end  

  json.extract! user, :id, :username, :digits
  json.home user.home
end

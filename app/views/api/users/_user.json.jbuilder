json.extract! user, :id, :username, :digits
json.guilds user.guilds.pluck(:id, :name)
json.home user.home
json.extract! user, :id, :username, :digits
debugger
json.guilds user.guilds.pluck(:id, :name)
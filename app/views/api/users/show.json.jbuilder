json.partial! "api/users/user", user: @user

# json.payload do
@user.guilds.each do |guild|
        json.partial! 'api/guilds/guild', guild: guild
end
# end
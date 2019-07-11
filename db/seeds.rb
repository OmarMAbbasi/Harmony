# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Message.delete_all
Guild.delete_all
Channel.delete_all

demo = User.create!(
    username: "demouser",
    email: "demouser@gmail.com",
    password: "password1234"
  )
  
30.times do 
    User.create!(
        username: Faker::Esport.player.gsub(/[@#:`"']/, ""),
        email: Faker::Internet.unique.email,
        password: Faker::Internet.password(8)
    )
end

10.times do 
    guild = Guild.create!(
        name: Faker::Game.title,
        owner_id: 0
    )
    5.times do
    Channel.create!(
        name: Faker::Lorem.word,
        guild_id: guild.id
        )
    end
    GuildMembership.create!(guild_id: guild.id, user_id: demo.id)
end

3.times do 
    guild = Guild.create!(
        name: Faker::Game.title,
        owner_id: demo.id
    )
    5.times do
        Channel.create!(
            name: Faker::Lorem.word,
            guild_id: guild.id
            )
    end
    GuildMembership.create!(guild_id: guild.id, user_id: demo.id)
end

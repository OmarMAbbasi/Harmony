# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create!(
    username: "demouser",
    email: "demouser@gmail.com",
    password: "password1234"
  )
  
100.times do 
    User.create!(
        username: Faker::Esport.player.gsub(/[@#:`"']/, ""),
        email: Faker::Internet.unique.email,
        password: Faker::Internet.password(8)
    )
end
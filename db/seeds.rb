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

  me = User.create!(
      username: "Omar",
      email: "omarmabbasi@gmail.com",
      password:"password1234"
  )



  
  icarus = User.create!(
      username: "Icarus",
      email: "icarus@gmail.com",
      password:"password1234"
  )
  jellybean = User.create!(
      username: "Jellybean",
      email: "jellybean@gmail.com",
      password:"password1234"
  )


recruiter = User.create!(
    username: "AwesomeRecruiter",
    email: "recruiter@gmail.com",
    password: "password1234"
  )


  ##Horde

      horde = Guild.create!(
        name: "For The Horde!",
        owner_id: me.id
    )
GuildMembership.create!(guild_id: horde.id, user_id: me.id)
GuildMembership.create!(guild_id: horde.id, user_id: icarus.id)
GuildMembership.create!(guild_id: horde.id, user_id: jellybean.id)
GuildMembership.create!(guild_id: horde.id, user_id: recruiter.id)

  sylvanas = User.create!(
      username: "Sylvanas",
      email: "sylvanas@gmail.com",
      password:"password1234"
  )

GuildMembership.create!(guild_id: horde.id, user_id: sylvanas.id)


  
  thrall = User.create!(
      username: "Thrall",
      email: "thrall@gmail.com",
      password:"password1234"
  )

GuildMembership.create!(guild_id: horde.id, user_id: thrall.id)


  saurfang = User.create!(
      username: "Saurfang",
      email: "saurfang@gmail.com",
      password:"password1234"
  )

GuildMembership.create!(guild_id: horde.id, user_id: saurfang.id)


  cairne = User.create!(
      username: "Cairne",
      email: "cairne@gmail.com",
      password:"password1234"
  )

GuildMembership.create!(guild_id: horde.id, user_id: cairne.id)


    voljin = User.create!(
      username: "Voljin",
      email: "voljin@gmail.com",
      password:"password1234"
  )

GuildMembership.create!(guild_id: horde.id, user_id: voljin.id)


    gallywix = User.create!(
      username: "Gallywix",
      email: "gallywix@gmail.com",
      password:"password1234"
  )

GuildMembership.create!(guild_id: horde.id, user_id: gallywix.id)



    general =  Channel.create!(
        name: "general",
        guild_id: horde.id
        )

        Message.create!(
            author_id:  voljin.id,
            channel_id: general.id,
            body: "How's everyone doin?"
        )

        Message.create!(
            author_id:  gallywix.id,
            channel_id: general.id,
            body: "Wait? Aren't you dead?"
        )
        
        Message.create!(
            author_id:  voljin.id,
            channel_id: general.id,
            body: "Yea, I'm a ghost now, just checkin in"
        )

        Message.create!(
            author_id:  gallywix.id,
            channel_id: general.id,
            body: "Horde's doin great, we're rollin in gold."
        )

        Message.create!(
            author_id:  saurfang.id,
            channel_id: general.id,
            body: "@Sylvanas tried to kill me and @Thrall."
        )        
        
        Message.create!(
            author_id:  sylvanas.id,
            channel_id: general.id,
            body: "No clue what you're talking about."
        )

    raids =  Channel.create!(
        name: "raids",
        guild_id: horde.id
        )

                Message.create!(
            author_id:  saurfang.id,
            channel_id: raids.id,
            body: "We need to figure out how to get @Cairne safe"
        )

        Message.create!(
            author_id:  thrall.id,
            channel_id: raids.id,
            body: "Where you at?"
        )
        
        Message.create!(
            author_id:  cairne.id,
            channel_id: raids.id,
            body: "I'm fine, Alliance broke me out. What next."
        )

        Message.create!(
            author_id:  saurfang.id,
            channel_id: raids.id,
            body: "Get the Horde back."
        )

    pvp =  Channel.create!(
        name: "pvp",
        guild_id: horde.id
        )

        Message.create!(
            author_id:  sylvanas.id,
            channel_id: pvp.id,
            body: "So we've burned that pesky tree down. What next"
        )

        Message.create!(
            author_id:  sylvanas.id,
            channel_id: pvp.id,
            body: "Guys...."
        )

        Message.create!(
            author_id:  sylvanas.id,
            channel_id: pvp.id,
            body: "Is anyone here?"
        )

        Message.create!(
            author_id:  sylvanas.id,
            channel_id: pvp.id,
            body: "Is anyone here?"
        )
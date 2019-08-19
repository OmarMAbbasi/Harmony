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

welcome = Guild.create!(
    name: "Welcome to Harmony",
    owner_id: me.id
)

welch = Channel.create!(
    name: "welcome",
    guild_id: welcome.id

)

        Message.create!(
            author_id:  me.id,
            channel_id: welch.id,
            body: "Hi! My name is Omar and I'm a full stack developer."
        )
                Message.create!(
            author_id:  me.id,
            channel_id: welch.id,
            body: "Welcome to Harmony, my final project from my App Academy days."
        )
                Message.create!(
            author_id:  me.id,
            channel_id: welch.id,
            body: "Harmony is a clone of the Discord communication platform I built in a few weeks."
        )
                Message.create!(
            author_id:  me.id,
            channel_id: welch.id,
            body: "In this server you will see some information about some of my other projects and the technologies they use. The other servers are just me being a silly gamer nerd."
        )

        Message.create!(
            author_id:  me.id,
            channel_id: welch.id,
            body: 'Feel free to test the app in the #message-testing channel'
        )

        Message.create!(
            author_id:  me.id,
            channel_id: welch.id,
            body: "Here are all the relevant links to some of the essential information you'd need if you want to hire me"
        )
        
        Message.create!(
            author_id:  me.id,
            channel_id: welch.id,
            body: "OmarMAbbasi@gmail.com"
        )

        Message.create!(
            author_id:  me.id,
            channel_id: welch.id,
            body: "650-518-6090"
        )

        Message.create!(
            author_id:  me.id,
            channel_id: welch.id,
            body: "https://github.com/OmarMAbbasi/"
        )


        Message.create!(
            author_id:  me.id,
            channel_id: welch.id,
            body: "https://www.linkedin.com/in/omar-abbasi-9a790683/"
        )

        harmony = Channel.create!(
            name: "harmony",
            guild_id: welcome.id
        )

        Message.create!(
            author_id:  me.id,
            channel_id: harmony.id,
            body: "https://github.com/OmarMAbbasi/Harmony/"
        )

        Message.create!(
            author_id:  me.id,
            channel_id: harmony.id,
            body: "https://harmony-gg.herokuapp.com"
        )
        

        Message.create!(
            author_id:  me.id,
            channel_id: harmony.id,
            body: "Having always been a gamer and a nerd, Discord was an obvious choice for my final project."
        )

        Message.create!(
            author_id:  me.id,
            channel_id: harmony.id,
            body: "Overall I would say it was one of the more difficult ones I could have tackled, but I learned a lot. "
        )        
        
        Message.create!(
            author_id:  me.id,
            channel_id: harmony.id,
            body: "Harmony is built using a Ruby on Rails backend with a React / Redux frontend."
        )        
        
        Message.create!(
            author_id:  me.id,
            channel_id: harmony.id,
            body: "For the chat aspect of Harmony to function, ActionCable was needed to implement websockets to function."
        )

        Message.create!(
            author_id:  me.id,
            channel_id: harmony.id,
            body: "The way Harmony is designed is entirely a single page React app. Once a user enters the main page, everything is handled with Routers and Modals."
        )

     Message.create!(
            author_id:  me.id,
            channel_id: harmony.id,
            body: "Because of how Redux works, there were optimization advantages to prefetching some data with my AJAX requests."
        )
        
        Message.create!(
            author_id:  me.id,
            channel_id: harmony.id,
            body: "Almost everything required for the app to function is prefetched on load. From there Websockets take care of all the message loading and updates"
        )

        Message.create!(
            author_id:  me.id,
            channel_id: harmony.id,
            body: "While the initial design didn't do exactly that, because my AJAX responses used payloads from the start, I was able to refactor easily."
        )
            

                starfighter = Channel.create!(
            name: "starfighter",
            guild_id: welcome.id
        )

                    Message.create!(
            author_id:  me.id,
            channel_id: starfighter.id,
            body: "https://github.com/OmarMAbbasi/StarfighterPvP/"
        )
                    Message.create!(
            author_id:  me.id,
            channel_id: starfighter.id,
            body: "https://starfight.herokuapp.com/"
        )
        


        Message.create!(
            author_id:  me.id,
            channel_id: starfighter.id,
            body: "Starfighter PvP is a team project built using the MERN stack.  "
        )

        Message.create!(
            author_id:  me.id,
            channel_id: starfighter.id,
            body: "It is a multi-user take on Asteroids drawn on a Javascript Canvas"
        )        
        
        Message.create!(
            author_id:  me.id,
            channel_id: starfighter.id,
            body: "I leveraged what I had learned about websockets while building Harmony to create the multiplayer aspect of the game. Including writing an especially useful Socket Manager on the backend that acted as a hub for sockets on the backend."
        )        

        Message.create!(
            author_id:  me.id,
            channel_id: starfighter.id,
            body: "The most fun project I took on in this game was writing and implementing the powerups. I wanted to create something fun to add flavor like shotguns and increased damage between rounds."
        )

        
        Message.create!(
            author_id:  me.id,
            channel_id: starfighter.id,
            body: "My other major role in this project was the team leader. I acted as the scrum-master for the team, leading the daily standups. Treating the 5 day timeframe we had to build the app as an Agile sprint"
        )

        Message.create!(
            author_id:  me.id,
            channel_id: starfighter.id,
            body: "I also handled the development pipeline, creating test and staging environments to ensure that only a fully functioning product was ever pushed to live "
        )

     Message.create!(
            author_id:  me.id,
            channel_id: starfighter.id,
            body: "I had to be familiar with the entire codebase as I spent about 40% of my time ensuring each developer's deliverables integrated into the user experience cleanly"
        )
        
        Message.create!(
            author_id:  me.id,
            channel_id: starfighter.id,
            body: "I also wrote and executed the unit tests to make sure that all tests were passed before being pushed to a production environment. This involved writing the bulk of the error handling logic."
        )

                magicdungeon = Channel.create!(
            name: "magic-dungeon",
            guild_id: welcome.id
        )

        Message.create!(
            author_id:  me.id,
            channel_id: magicdungeon.id,
            body: "https://github.com/OmarMAbbasi/MagicDungeon/"
        )

        Message.create!(
            author_id:  me.id,
            channel_id: magicdungeon.id,
            body: "https://omarmabbasi.github.io/MagicDungeon/dist/index.html"
        )
        

        Message.create!(
            author_id:  me.id,
            channel_id: magicdungeon.id,
            body: "Magic Dungeon is a procedurally generated dungeon crawler where the maze is built using a recursive backtracking algorithm built using vanilla DOM and CSS Keyframe animations."
        )

        Message.create!(
            author_id:  me.id,
            channel_id: magicdungeon.id,
            body: "This game is very much a work in progress. The backend works beautifully, but actual gameplay needs a lot of work"
        )              
        
        Message.create!(
            author_id:  me.id,
            channel_id: magicdungeon.id,
            body: "I chose to build the game in the way I did in part because I wanted learn more about CSS Keyframe Animations"
        )

        Message.create!(
            author_id:  me.id,
            channel_id: magicdungeon.id,
            body: "I wanted to see just how far I could push the limitations of CSS Keyframes without relying on Javascript canvas."
        )

     Message.create!(
            author_id:  me.id,
            channel_id: magicdungeon.id,
            body: "One of the most valuable skills I picked up during the process of building the game is learning how to throttle and debounce user input. I needed to control how often and when functions were being called to prevent unintended movement and allow for clean diagonal movement. "
        )
        
        Message.create!(
            author_id:  me.id,
            channel_id: magicdungeon.id,
            body: "In the process of learning about keyframe animation, I learned a lot about its limitations. I feel like the project has hit an impasse where the technical limitations of keyframes do not allow me to build the vision I want"
        )

        Message.create!(
            author_id:  me.id,
            channel_id: magicdungeon.id,
            body: "Sometimes a creator has to know when to scrap a project or put it on the backburner to rebuild. This is very much a lesson in that, and I am leaving it in my profile as a testament to that."
        )

        testing = Channel.create!(
            name: "message-testing",
            guild_id: welcome.id
        )

        Message.create!(
            author_id:  me.id,
            channel_id: testing.id,
            body: "Hi there! Feel free to test the app over here, leave any feedback for me, or any messages you want for future users in this channel!"
        )


GuildMembership.create!(guild_id: welcome.id, user_id: me.id)
GuildMembership.create!(guild_id: welcome.id, user_id: icarus.id)
GuildMembership.create!(guild_id: welcome.id, user_id: jellybean.id)
GuildMembership.create!(guild_id: welcome.id, user_id: recruiter.id)
##Horde
      horde = Guild.create!(
        name: "Horde: For The Horde!",
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


##Alliance

    alliance = Guild.create!(
        name: "Alliance: For The Alliance!",
        owner_id: me.id
    )

GuildMembership.create!(guild_id: alliance.id, user_id: me.id)
GuildMembership.create!(guild_id: alliance.id, user_id: icarus.id)
GuildMembership.create!(guild_id: alliance.id, user_id: jellybean.id)
GuildMembership.create!(guild_id: alliance.id, user_id: recruiter.id)

  anduin = User.create!(
      username: "Anduin",
      email: "anduin@gmail.com",
      password:"password1234"
  )

GuildMembership.create!(guild_id: alliance.id, user_id: anduin.id)


  
  jaina = User.create!(
      username: "Jaina",
      email: "jaina@gmail.com",
      password:"password1234"
  )

GuildMembership.create!(guild_id: alliance.id, user_id: jaina.id)


  malfurion = User.create!(
      username: "Malfurion",
      email: "malfurion@gmail.com",
      password:"password1234"
  )

GuildMembership.create!(guild_id: alliance.id, user_id: malfurion.id)


  tyrande = User.create!(
      username: "Tyrande",
      email: "tyrande@gmail.com",
      password:"password1234"
  )

GuildMembership.create!(guild_id: alliance.id, user_id: tyrande.id)


    graymane = User.create!(
      username: "Graymane",
      email: "graymane@gmail.com",
      password:"password1234"
  )

GuildMembership.create!(guild_id: alliance.id, user_id: graymane.id)


    velen = User.create!(
      username: "Velen",
      email: "velen@gmail.com",
      password:"password1234"
  )

GuildMembership.create!(guild_id: alliance.id, user_id: velen.id)



     general =  Channel.create!(
        name: "general",
        guild_id: alliance.id
    )

    Message.create!(
            author_id:  anduin.id,
            channel_id: general.id,
            body: "How's everyone's morning so far?"
    )

    Message.create!(
        author_id:  velen.id,
        channel_id: general.id,
        body: "Just checked with the Lightforged. Their giant laser is still broken"
    )

    Message.create!(
        author_id:  graymane.id,
        channel_id: general.id,
        body: "Would make everything easier"
    )

    raid =  Channel.create!(
        name: "raid",
        guild_id: alliance.id
    )

    Message.create!(
        author_id:  jaina.id,
        channel_id: raid.id,
        body: "How's Mekkatorque?"
    )

    Message.create!(
        author_id:  anduin.id,
        channel_id: raid.id,
        body: "Still in asleep"
    )

    Message.create!(
        author_id:  jaina.id,
        channel_id: raid.id,
        body: "...."
    )

    Message.create!(
        author_id:  graymane.id,
        channel_id: raid.id,
        body: "you're the one who lost to a bunch of trolls"
    )


    pvp =  Channel.create!(
        name: "pvp",
        guild_id: alliance.id
    )

    Message.create!(
        author_id:  tyrande.id,
        channel_id: pvp.id,
        body: "@Malfurion how do you like my new contacts"
    )

    Message.create!(
        author_id:  malfurion.id,
        channel_id: pvp.id,
        body: "A little dark, but they're alright"
    )

    Message.create!(
        author_id:  malfurion.id,
        channel_id: pvp.id,
        body: "Don't we have a tree to avenge?"
    )
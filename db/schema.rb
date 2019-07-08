# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< Updated upstream
ActiveRecord::Schema.define(version: 2019_07_08_161732) do
=======
ActiveRecord::Schema.define(version: 2019_07_08_192549) do
>>>>>>> Stashed changes

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channel_subscriptions", force: :cascade do |t|
<<<<<<< Updated upstream
    t.integer "user_id"
    t.integer "channel_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_channel_subscriptions_on_channel_id"
    t.index ["user_id"], name: "index_channel_subscriptions_on_user_id"
  end

  create_table "channels", force: :cascade do |t|
    t.string "name"
    t.integer "guild_id"
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guild_id"], name: "index_channels_on_guild_id"
  end

  create_table "guild_memberships", force: :cascade do |t|
    t.integer "user_id"
    t.integer "guild_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guild_id"], name: "index_guild_memberships_on_guild_id"
    t.index ["user_id"], name: "index_guild_memberships_on_user_id"
  end

  create_table "guilds", force: :cascade do |t|
    t.boolean "is_home", default: false
    t.string "name", null: false
    t.integer "owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_guilds_on_name"
=======
    t.integer "channel_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "channel_id"], name: "index_channel_subscriptions_on_user_id_and_channel_id", unique: true
  end

  create_table "channels", force: :cascade do |t|
    t.string "name", null: false
    t.integer "guild_id", null: false
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "guild_memberships", force: :cascade do |t|
    t.integer "guild_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "guild_id"], name: "index_guild_memberships_on_user_id_and_guild_id", unique: true
  end

  create_table "guilds", force: :cascade do |t|
    t.string "name", null: false
    t.integer "owner_id", null: false
    t.boolean "is_home?", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
>>>>>>> Stashed changes
    t.index ["owner_id"], name: "index_guilds_on_owner_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.integer "digits", null: false
    t.string "email"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "home_id", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["home_id"], name: "index_users_on_home_id", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username", "digits"], name: "index_users_on_username_and_digits", unique: true
  end

end

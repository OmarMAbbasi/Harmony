class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.integer :guild_id, null: false
      t.integer :position

      t.timestamps
    end
    #Ex:- add_index("admin_users", "username")
  end
end

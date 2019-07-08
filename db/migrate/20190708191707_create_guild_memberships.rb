class CreateGuildMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :guild_memberships do |t|
      t.integer :guild_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :guild_memberships, [:user_id, :guild_id], unique:true    #Ex:- add_index("admin_users", "username")
  end
end

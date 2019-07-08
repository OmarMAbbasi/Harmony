class CreateGuildMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :guild_memberships do |t|
      t.integer :user_id
      t.integer :guild_id

      t.timestamps
    end
    add_index :guild_memberships, :guild_id
    add_index :guild_memberships, :user_id
  end
end


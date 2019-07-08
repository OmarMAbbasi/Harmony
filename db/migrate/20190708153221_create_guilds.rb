class CreateGuilds < ActiveRecord::Migration[5.2]
  def change
    create_table :guilds do |t|
      t.boolean :is_home, default: false
      t.string :name, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end
    add_index :guilds, :name;
    add_index :guilds, :owner_id, unique: true
  end
end

class CreateGuilds < ActiveRecord::Migration[5.2]
  def change
    create_table :guilds do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false
      t.boolean :is_home?, :default => false

      t.timestamps
    end

    add_index :guilds, :owner_id, unique: true
  end
end

class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name
      t.integer :guild_id
      t.integer :position

      t.timestamps
    end
    add_index :channels, :guild_id
  end
end

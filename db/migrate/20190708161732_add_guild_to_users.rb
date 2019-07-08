class AddGuildToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :home_id, :integer, null: false
    add_index :users, :home_id, unique: true

  end
end

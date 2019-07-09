class AddNullFalseToChannelName < ActiveRecord::Migration[5.2]
  def change
    change_column :channels, :name, :string, null: false
  end
end

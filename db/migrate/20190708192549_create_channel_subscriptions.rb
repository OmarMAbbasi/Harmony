class CreateChannelSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_subscriptions do |t|
      t.integer :channel_id
      t.integer :user_id

      t.timestamps
    end
    add_index :channel_subscriptions, [:user_id, :channel_id], unique:true    #Ex:- add_index("admin_users", "username")
  end
end

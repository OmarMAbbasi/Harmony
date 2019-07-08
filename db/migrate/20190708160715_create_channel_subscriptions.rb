class CreateChannelSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_subscriptions do |t|
      t.integer :user_id
      t.integer :channel_id

      t.timestamps
    end
    add_index :channel_subscriptions, :channel_id
    add_index :channel_subscriptions, :user_id
  end
end

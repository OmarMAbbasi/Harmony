class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      ##table with author_id, channel_id, and body 
      t.timestamps
    end
  end
end

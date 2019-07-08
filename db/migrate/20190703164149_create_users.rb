# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.integer :digits, null: false
      t.string :email
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    add_index :users, %i[username digits], unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
  end
end

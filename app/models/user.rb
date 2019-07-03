# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  digits          :integer          not null
#  email           :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :user_tag, uniqueness: { scope: %i[username digits] }
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validate :username_constraints

  attr_reader :password

  #   after_initialize :ensure_session_token

  def username_constraints
    if username =~ /[@#:`"']/
      errors.add(:username, 'username cannot contain characters (@, #, :, `, ", or \'')
    elsif username == 'here' || username == 'everyone'
      erros.add(:username, "cannot user 'here' or 'everyone")
    end
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    return nil unless user.valid_password?(password)

    user
  end

  def valid_password?(password)
    epass = BCrypt::Password.new(password_digest)
    epass.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session!
    self.session_token = SecureRandom.urlsafe_base64(16)
    save!
    self.session_token
  end
end
defaults: {format: :json} 
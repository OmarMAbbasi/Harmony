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

  ##Validations
  validates :username, uniqueness: { scope: [:digits] }
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validate :username_constraints

  before_create :ensure_user_tag
  after_create :create_home
  after_initialize :ensure_session_token
  attr_reader :password

  ##Associations

  has_one :home, 
    class_name: :Guild, 
    foreign_key: :owner_id

  has_many :guild_memberships
  has_many :guilds,
    through: :guild_memberships

  has_many :channel_subscriptions
  has_many :channels,
    through: :channel_subscriptions,
    source: :channel_id

  has_many :guilds_owned,
    class_name: :Guild,
    foreign_key: :owner_id

  ##Methods
  def username_constraints
    if username =~ /[@#:`"']/
      @errors.add(:user, 'username cannot contain characters (@, #, :, `, ", or \'')
    elsif username == 'here' || username == 'everyone'
      @errors.add(:user, "cannot user 'here' or 'everyone")
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

  def create_home 
    Guild.create_home(self)
  end

  def ensure_user_tag
    self.digits ||= generate_unique_user_tag
  end

  def reset_session!
    self.session_token = SecureRandom.urlsafe_base64(16)
    while User.find_by(session_token: session_token)
      self.session_token = SecureRandom.urlsafe_base64(16)
    end
    save!
    self.session_token
  end

  def generate_unique_user_tag
    exists = false
    unless exists
      digits = rand(1..9999)
      exists = User.where(username: username, digits: digits).exists?(conditions = :none)
    end
    digits
  end
end

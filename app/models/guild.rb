# == Schema Information
#
# Table name: guilds
#
#  id         :bigint           not null, primary key
#  is_home?    :boolean          default(FALSE)
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Guild < ApplicationRecord

    validates :owner_id, :name, presence: true

    has_many :guild_memberships

    has_many :members,
        through: :guild_memberships,
        source: :user

    has_many :channels

    def self.create_home(user)
        home = Guild.new(name: user.username, owner_id: user.id, is_home?: true)
        home.save!
    end


end

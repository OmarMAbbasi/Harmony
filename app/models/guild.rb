# == Schema Information
#
# Table name: guilds
#
#  id         :bigint           not null, primary key
<<<<<<< Updated upstream
#  is_home    :boolean          default(FALSE)
#  name       :string           not null
#  owner_id   :integer          not null
=======
#  name       :string           not null
#  owner_id   :integer          not null
#  is_home?   :boolean          default(FALSE)
>>>>>>> Stashed changes
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Guild < ApplicationRecord
<<<<<<< Updated upstream
    has_one :owner,
        class_name: :User

        has_many :guild_memberships
        has_many :guild_members,
            through: :guild_memberships,
            source: :user_id
=======

    validates :owner_id, :name, presence: true

    has_many :guild_memberships

    has_many :members,
        through: :guild_memberships,
        source: :user

    has_many :channels

    def self.create_home(user)
        home = Guild.new(name: user.name, owner_id: user.id, is_home?: true)
        home.save!
    end


>>>>>>> Stashed changes
end

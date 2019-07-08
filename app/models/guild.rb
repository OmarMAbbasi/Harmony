# == Schema Information
#
# Table name: guilds
#
#  id         :bigint           not null, primary key
#  is_home    :boolean          default(FALSE)
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Guild < ApplicationRecord
    has_one :owner,
        class_name: :User

        has_many :guild_memberships
        has_many :guild_members,
            through: :guild_memberships,
            source: :user_id
end

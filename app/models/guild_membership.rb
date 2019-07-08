# == Schema Information
#
# Table name: guild_memberships
#
#  id         :bigint           not null, primary key
#  guild_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GuildMembership < ApplicationRecord

    belongs_to :user

    belongs_to :guild
end

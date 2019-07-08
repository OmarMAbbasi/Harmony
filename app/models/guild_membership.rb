# == Schema Information
#
# Table name: guild_memberships
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  guild_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GuildMembership < ApplicationRecord
end

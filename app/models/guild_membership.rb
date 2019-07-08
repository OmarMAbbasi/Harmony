# == Schema Information
#
# Table name: guild_memberships
#
#  id         :bigint           not null, primary key
<<<<<<< Updated upstream
#  user_id    :integer
#  guild_id   :integer
=======
#  guild_id   :integer          not null
#  user_id    :integer          not null
>>>>>>> Stashed changes
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GuildMembership < ApplicationRecord
<<<<<<< Updated upstream
=======

    belongs_to :user

    belongs_to :guild
>>>>>>> Stashed changes
end

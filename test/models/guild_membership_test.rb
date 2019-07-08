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

require 'test_helper'

class GuildMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

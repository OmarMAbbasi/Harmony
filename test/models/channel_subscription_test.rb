# == Schema Information
#
# Table name: channel_subscriptions
#
#  id         :bigint           not null, primary key
#  channel_id :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
<<<<<<< Updated upstream
#  user_id    :integer
#  channel_id :integer
=======
#  channel_id :integer
#  user_id    :integer
>>>>>>> Stashed changes
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ChannelSubscriptionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

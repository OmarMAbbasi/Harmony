# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  name       :string
#  guild_id   :integer
#  position   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

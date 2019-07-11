# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  guild_id   :integer
#  position   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
<<<<<<< Updated upstream
#  name       :string
#  guild_id   :integer
=======
#  name       :string           not null
#  guild_id   :integer          not null
>>>>>>> Stashed changes
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

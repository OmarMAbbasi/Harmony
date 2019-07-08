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

require 'test_helper'

class GuildTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

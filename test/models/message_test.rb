# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  author_id  :integer
#  channel_id :integer
#  body       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

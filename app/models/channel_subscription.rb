# == Schema Information
#
# Table name: channel_subscriptions
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  channel_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelSubscription < ApplicationRecord
end

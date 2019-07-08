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

class ChannelSubscription < ApplicationRecord
    belongs_to :user

    belongs_to :channel  
end

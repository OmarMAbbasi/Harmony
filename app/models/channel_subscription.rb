# == Schema Information
#
# Table name: channel_subscriptions
#
#  id         :bigint           not null, primary key
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

class ChannelSubscription < ApplicationRecord
<<<<<<< Updated upstream
=======
    belongs_to :user

    belongs_to :channel  
>>>>>>> Stashed changes
end

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

class Channel < ApplicationRecord
    has_many :channel_subscriptions
    has_many :channel_subscribers,
        through: :channel_subscriptions,
        source: :user_id
end

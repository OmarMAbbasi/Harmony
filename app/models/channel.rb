# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
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

class Channel < ApplicationRecord
<<<<<<< Updated upstream
    has_many :channel_subscriptions
    has_many :channel_subscribers,
        through: :channel_subscriptions,
        source: :user_id
=======

    validates :guild_id, :name, presence: true

    has_many :channel_subscriptions

    belongs_to :guild

>>>>>>> Stashed changes
end

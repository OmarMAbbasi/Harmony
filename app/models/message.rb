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

class Message < ApplicationRecord
    # def created_at
    #     attributes['created_at'].strftime("%m/%d/%Y%l:%M %P")
    # end
    belongs_to :author,
        class_name: :User

    belongs_to :channel,
        class_name: :Channel
end

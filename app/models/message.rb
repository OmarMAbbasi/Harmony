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

    belongs_to :author,
        class_name: :User

    belongs_to :channel,
        class_name: :Channel
end

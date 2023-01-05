class EventSetting < ApplicationRecord
  belongs_to :event
  belongs_to :user

  validates :plus_one, inclusion: { in: [true, false] }

end

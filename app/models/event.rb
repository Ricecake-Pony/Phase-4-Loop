class Event < ApplicationRecord
    has_many :event_settings
    has_many :users, through: :event_settings
end

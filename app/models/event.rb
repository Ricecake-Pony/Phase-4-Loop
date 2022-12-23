class Event < ApplicationRecord
    has_many :event_settings, dependent: :destroy
    has_many :users, through: :event_settings
end

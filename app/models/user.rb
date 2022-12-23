class User < ApplicationRecord
    has_many :event_settings
    has_many :events, through: :event_settings

    has_secure_password
end

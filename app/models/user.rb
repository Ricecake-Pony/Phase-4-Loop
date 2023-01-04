class User < ApplicationRecord
    has_many :event_settings, dependent: :destroy
    has_many :events, through: :event_settings

    has_secure_password

    def all_event_details
        self.event_settings.map{ |a| 
    byebug
    }
    end
end

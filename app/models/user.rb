class User < ApplicationRecord
    has_many :event_settings, dependent: :destroy
    has_many :events, through: :event_settings

    has_secure_password

    def all_event_details
        self.event_settings + self.events
    # self.event_settings + self.events cluttered objects but works.
    end
end

# All below are wrong: (trying to grab both the event_settings array and iterate to each object and grab that object's corresponding event, so all infromation would go together instead of being an unorganized mess.)

# self.event_settings.map{ |a| a.event[:id]} only returns the actual id and not the instance

# self.event_settings.map{ |a| a.event + a} wont work

# self.event_settings.map{ |a| a.event } => the events only
#[#<Event id: 2, title: "Go to Porong Ri", description: "To be, or not to be, that is the question", attire: "business casual">, #<Event id: 1, title: "Go to Ismoil Somoni Peak", description: "Neither a borrower nor a lender be; For loan oft l...", attire: "business">]


# self.event_settings.map{ |a| a } => returns just the event_settings 
#[#<EventSetting id: 2, plus_one: false, event_id: 2, user_id: 1>, #<EventSetting id: 4, plus_one: true, event_id: 1, user_id: 1>]

#self.event_settings.map{ |a| a.event }.sort => in proper numerical order so it's a start I suppose..

#[#<Event id: 1, title: "Go to Ismoil Somoni Peak", description: "Neither a borrower nor a lender be; For loan oft l...", attire: "business">, #<Event id: 2, title: "Go to Porong Ri", description: "To be, or not to be, that is the question", attire: "business casual">]


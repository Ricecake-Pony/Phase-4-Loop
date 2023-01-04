class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :event_details
  has_many :events
  has_many :event_settings

  def event_details
    self.object.all_event_details 
  end
  # self.object allows access to the instance of a user instead of just a serializer.
  # mapping event_details returns undefined for their corresponding columns/keys. 
end

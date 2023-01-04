class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :potato
  has_many :events
  has_many :event_settings

  def potato
    self.object.all_event_details 
  end
  # self.object allows access to the instance of a user instead of just a serializer.
end

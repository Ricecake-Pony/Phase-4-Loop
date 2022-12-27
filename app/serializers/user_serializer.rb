class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password
  has_many :events
  has_many :event_settings
end

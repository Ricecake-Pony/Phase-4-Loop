class EventSettingSerializer < ActiveModel::Serializer
  attributes :id, :plus_one
  has_one :event
  has_one :user

end

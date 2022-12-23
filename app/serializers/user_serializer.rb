class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :birthdate, :password_digest
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :avatar
end

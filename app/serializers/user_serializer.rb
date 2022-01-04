class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :avatar
  has_many :follow_books
end

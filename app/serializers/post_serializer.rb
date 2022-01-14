class PostSerializer < ActiveModel::Serializer
  attributes :id, :subject, :body
  has_one :user
  has_many :comments
  has_one :book
end

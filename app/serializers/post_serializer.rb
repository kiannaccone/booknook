class PostSerializer < ActiveModel::Serializer
  attributes :id, :subject, :body
  has_one :user
  has_one :book
end

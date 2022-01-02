class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user, :comments
  has_one :user
  has_one :commentable

  def comments
    ActiveModel::SerializableResource.new(object.comments, each_serialiser: CommentSerializer)
  end
  
end

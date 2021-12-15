class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :summary, :date, :image
end

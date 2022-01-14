class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :summary, :date, :image, :google_book_id
end

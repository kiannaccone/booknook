class Post < ApplicationRecord
  belongs_to :user
  belongs_to :book
  has_many :comments, as: :commentable
end

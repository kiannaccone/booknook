class FollowBook < ApplicationRecord
  belongs_to :book
  belongs_to :user

  # validates :google_book_id, uniqueness: {scope: :user_id, message: "You are already following this book"}


end

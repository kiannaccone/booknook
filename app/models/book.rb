class Book < ApplicationRecord
    has_many :follow_books
    has_many :users, through: :follow_books
end

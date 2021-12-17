class User < ApplicationRecord
    has_secure_password

    has_many :posts
    has_many :comments
    has_many :follow_books
    has_many :books, through: :follow_books

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: { in: 4..24 }, on: :create
    validates :avatar, presence: true
    
end

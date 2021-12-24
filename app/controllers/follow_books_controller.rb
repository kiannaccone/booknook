class FollowBooksController < ApplicationController


    def index
        follows = FollowBook.all
        render json: follows, status: :ok
    end
    
    def show
        follow = FollowBook.find(params[:id])
        render json: follow, status: :ok
    end

    
    def create
        book = Book.find_or_create_by(book_params)
        post = Post.new(post_params)
        post.book_id = book.id
        post.save
        render json: post, status: :created
    end

  
    def update
        follow = FollowBook.find(params[:id])
        follow.update(follow_params)
        render json: follow, status: :accepted
    end

    private

    def follow_params
        params.permit(:user_id, :book_id, :google_book_id)
    end

    def book_params
        params.require(:new_follow_book).permit(:title, :author, :image, :google_book_id, :summary, :date)
    end

end

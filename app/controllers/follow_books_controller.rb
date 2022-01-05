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
        # byebug
        book = Book.find_or_create_by(book_params)
        follow = FollowBook.new(follow_params)
        follow.book_id = book.id
        follow.save
        render json: follow, status: :created
    end

  
    def update
        follow = FollowBook.find(params[:id])
        follow.update(follow_params)
        render json: follow, status: :accepted
    end

    def destroy
        unfollow = FollowBook.findby(id: params[:id])
        unfollow.destroy
        head :no_content
    end

    private

    def follow_params
        params.permit(:user_id)
    end

    def book_params
        params.require(:new_follow_book).permit(:title, :author, :image, :google_book_id, :summary, :date)
    end

end

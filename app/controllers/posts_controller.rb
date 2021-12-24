class PostsController < ApplicationController

    skip_before_action :authorize, only: :create

    def index
        posts = Post.all
        render json: posts, status: :ok
    end
    
    def show
        post = Post.find(params[:id])
        render json: post, status: :ok
    end
      
    def create
        # byebug
        book = Book.find_or_create_by(book_params)
        post = Post.new(post_params)
        post.book_id = book.id
        post.save
        render json: post, status: :created
    end
    
    def update
        post = Post.find(params[:id])
        post.update(post_params)
        render json: post, status: :accepted
    end
    
    # def destroy
    #     post = Post.find(params[:id])
    #     post.destroy
    #     head :no_content
    # end
      
    private

    def post_params
        params.permit(:subject, :body, :user_id, :book_id, :google_book_id)
    end

    def book_params
        params.require(:new_book).permit(:title, :author, :image, :google_book_id, :summary, :date)
    end

end

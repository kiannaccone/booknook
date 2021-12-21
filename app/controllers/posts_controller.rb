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
        post = Post.create(post_params)
        render json: post, status: :created
    end
    
    def update
        post = Post.find(params[:id])
        post.update(post_params)
        render json: post, status: :accepted
    end
    
    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end
      
    private

    def post_params
        params.permit(:subject, :body, :user_id, :book_id)
    end
    

end

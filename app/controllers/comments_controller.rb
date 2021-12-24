class CommentsController < ApplicationController
    
    def index
        comments = Comment.all
        render json: comments, status: :ok
    end
    
    def create 
        comment = Comment.find_or_create_by(comment_params)
        render json: comment, status: :created
    end

    private

    def comment_params
        params.permit(:body, :google_book_id)
    end
end

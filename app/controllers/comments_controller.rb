class CommentsController < ApplicationController
    
    def index
        comments = Comment.all
        render json: comments, status: :ok
    end
    
    def create 
        comment = Comment.create(comment_params)
        render json: comment, status: :created
    end

    private

    def comment_params
        params.permit(:body, :user_id, :commentable_type, :commentable_id)
    end
end

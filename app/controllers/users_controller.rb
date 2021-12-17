class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index
        user = User.all
        render json: user, status: :ok
    end
    
    def show 
        render json: @current_user
    end
    
    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content 
    end
    
    def update
        user = User.find(params[:id])
        user.update(bio_params)
        render json: user, status: :accepted
    end
    
    
    private
    
    def user_params
        params.permit(:email, :username, :password, :avatar) 
    end
    

end

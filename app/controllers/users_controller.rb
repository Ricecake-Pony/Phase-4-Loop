class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvald, with: :authorize


    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else 
            render json: {error: "User not found"}, status: :not_found
        end
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
    params.permit(:username, :password, :password_confirmation)
    end

end

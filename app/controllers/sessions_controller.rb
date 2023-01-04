class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def show
        user_logged_in = User.find_by_id(session[:user_id])
        render json: user_logged_in
    end

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: ["invalid username or password"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end

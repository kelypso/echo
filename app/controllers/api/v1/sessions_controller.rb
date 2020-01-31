class Api::V1::SessionsController < ApplicationController
    def create
        @user = User.find_by(username: params[:session][:username])
        if @user && @user.authenticate(params[:session][:password])
          session[:user_id] = @user.id
          render json: UserSerializer.new(@user), status: :ok
        else
          render json: {
            error: "Invalid credentials"
          }
        end
      end

    def find
        if logged_in? 
          render json: current_user
          # render json: UserSerializer.new(current_user)
        else
          render json: {
            error: "User not logged in"
          }
        end
    end

    def destroy 
      session.clear
      render json: {
          notice: "Successfully logged out"
      }, status: :ok
    end
end
class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize
  rescue_from ActiveRecord::RecordInvalid, with: :authorize
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_error
  
  def authorize 
        render json: {error: "Not authorized username or password"}, status: :unauthorized unless session.include? :user_id
    end

    def invalid_error error
      render json: {"errors": error.record.errors.full_messages}, status: :unprocessable_entity
    end

end

class ApplicationRecord < ActiveRecord::Base
  include ActionController::Cookies
  before_action :authorize
  self.abstract_class = true
  
  def authorize 
        render json: {error: "Not authorized username or password"}, status: :unauthorized unless session.include? :user_id
    end
end

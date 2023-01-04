class EventSettingsController < ApplicationController
    
    def index
        event_setters = EventSetting.all
        render json: event_setters
    end
    
    def show
        event_setting_plusone = EventSetting.find_by_id( params[:id] ).value

    end

end

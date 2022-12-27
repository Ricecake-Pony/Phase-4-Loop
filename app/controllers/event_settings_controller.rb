class EventSettingsController < ApplicationController
    
    def index
        event_setters = EventSetting.all
        render json: event_setters
    end
    
end

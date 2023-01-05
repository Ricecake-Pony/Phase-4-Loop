class EventsController < ApplicationController

    def index
        events = Event.all
        render json: events
    end

    def create
        
        new_event = Event.create (new_event_params)
        if new_event.valid?
            render json: new_event
        else
            render json: {
                "errors": new_event.errors.full_messages
            }
        end
    end

private ########################################

    def new_event_params
        params.permit(:title, :description, :attire)
    end

end

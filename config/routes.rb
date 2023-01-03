Rails.application.routes.draw do
  
  resources :event_settings, only: [:index]
  resources :events, only: [:index]

  get "/users", to: "users#index"

  get "/users/:id", to: "users#show"
  post "/signup", to: "users#create"

  get "/user_logged_in", to: "sessions#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
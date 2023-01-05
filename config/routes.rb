Rails.application.routes.draw do
  
  resources :event_settings, only: [:index]
  resources :events, only: [:index, :create]
  # resources :users, only: [:index, :create]


  get "/users", to: "users#index"

  get "/users/:id", to: "users#show"
  post "/signup", to: "users#create"

  get "/user_logged_in", to: "sessions#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/createvent", to: "events#create"

  get "/eventcard", to: "event_settings#show"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
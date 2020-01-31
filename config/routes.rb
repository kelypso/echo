Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do
      resources :users, only: [:index, :show, :create]
      resources :flights
      # get '/:username', to: 'users#show', as: :user
      get "/find_user", to: "sessions#find_user"
      post '/login', to: 'sessions#create'
      post '/signup', to: 'users#create'
      delete '/logout', to: 'sessions#destroy'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

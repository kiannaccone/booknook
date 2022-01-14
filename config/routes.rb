Rails.application.routes.draw do
  resources :comments
  resources :posts
  resources :follow_books
  resources :books
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/books", to: "books#index"

  post "/signup", to: "users#create"

  get "/me", to: "users#show"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  delete "/unfollow/:id", to: "follow_books#destroy"

end

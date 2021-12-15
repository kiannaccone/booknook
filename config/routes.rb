Rails.application.routes.draw do
  resources :comments
  resources :posts
  resources :follow_books
  resources :books
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/hello", to: "application#hello_world"
end

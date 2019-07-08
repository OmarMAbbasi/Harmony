# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :destroy]
    resources :guilds, only: [:create, :update, :destroy]
    resources :channels, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root 'static_pages#root'
end

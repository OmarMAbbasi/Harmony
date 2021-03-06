# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :destroy]
    resources :guilds, only: [:show, :create, :update, :destroy] do
      resources :channels, only: [:show]
    end
    resources :messages, only: [:create, :update, :destroy]
    resources :channels, only: [:show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end

  mount ActionCable.server => '/cable'
  root 'static_pages#root'
end

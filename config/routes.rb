AngularDemo::Application.routes.draw do
  resources :notes, only: [:index, :create, :destroy],
            defaults: { format: :json }

  root to: 'notes#index'
end

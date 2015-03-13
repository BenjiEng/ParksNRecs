class Park < ActiveRecord::Base
  validates :name, :address, :city, :state, :zip, presence: true


end

# == Schema Information
#
# Table name: parks
#
#  id             :integer          not null, primary key
#  name           :string(255)      not null
#  address        :string(255)      not null
#  city           :string(255)      not null
#  state          :string(255)      not null
#  zip            :string(255)      not null
#  weekday_hours  :string(255)
#  saturday_hours :string(255)
#  sunday_hours   :string(255)
#  parking        :boolean
#  restrooms      :boolean
#  telephone      :boolean
#  created_at     :datetime
#  updated_at     :datetime
#

class Park < ActiveRecord::Base

  validates :name, :address, :city, :state, :zip, presence: true
  validates :zip, length: { is: 5 }

  geocoded_by :full_address
  after_validation :geocode

  has_many :reviews
  has_many :photos


  def full_address
    [address, city, state, zip].join(', ')
  end
end

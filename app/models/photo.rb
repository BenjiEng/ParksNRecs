class Photo < ActiveRecord::Base

  validates :user_id, :park_id, :file_url, presence: true

  belongs_to :user
  belongs_to :park_id

end

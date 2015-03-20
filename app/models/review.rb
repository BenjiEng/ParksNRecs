class Review < ActiveRecord::Base
  validates :user_id, :overall_score,  presence: true
  validates :park_id, uniqueness: {scope: :user_id}
  
  belongs_to :user
  belongs_to :park

end

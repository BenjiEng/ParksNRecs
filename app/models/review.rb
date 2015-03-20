class Review < ActiveRecord::Base
  validates :user_id, :overall_score,  presence: true

  
end

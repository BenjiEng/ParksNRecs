class Review < ActiveRecord::Base
  validates :user_id, :overall_score, :safety_score, :seating_score,
  :run_score, :kid_score, :view_score, :drug_score,  presence: true
  validates :park_id, uniqueness: {scope: :user_id}

  belongs_to :user
  belongs_to :park

end

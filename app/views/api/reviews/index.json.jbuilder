json.array! @recent_reviews do |recent_review|
  json.extract! recent_review, :id, :user_id, :overall_score, :safety_score, :seating_score, :run_score, :kid_score, :view_score, :drug_score, :comments, :created_at
  json.user_name recent_review.user.name

end

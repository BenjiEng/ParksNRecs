json.extract! @park, :name, :address, :city, :state, :zip, :weekday_hours,
:saturday_hours, :sunday_hours, :parking, :restrooms, :telephone

json.reviews @park.reviews do |review|
  json.extract! review, :overall_score, :safety_score, :seating_score, :run_score,
                        :kid_score, :view_score, :drug_score, :comments, :user_id
end

json.array! @parks do |park|

json.extract!  park, :name, :address, :city, :state, :zip, :weekday_hours,
:saturday_hours, :sunday_hours, :parking, :restrooms, :telephone, :latitude, :longitude

json.avg_score @avg_scores[park.id]

end

json.extract! @park, :name, :address, :city, :state, :zip, :weekday_hours,
:saturday_hours, :sunday_hours, :parking, :restrooms, :telephone, :latitude, :longitude

json.avg_scores @avg_scores

json.reviews @park.reviews

json.photos @park.photos

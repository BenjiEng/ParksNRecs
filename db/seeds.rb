# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Park.create([{name: 'Dolores Park', address: '19th & Dolores St', city: 'San Francisco',
              state: 'CA', zip: "94114"},
              {name: 'Buena Vista Park', address: 'Buena Vista & Haight', city: 'San Francisco',
              state: 'CA', zip: "94117"},
              {name: 'South Sunset Playgroud', address: '40th and Wawona', city: 'San Francisco',
              state: 'CA', zip: "94116"}])

Review.create([{user_id: 1, park_id: 1, overall_score: 3, safety_score: 4, run_score: 3, seating_score: 1, kid_score: 2, view_score: 5,
                drug_score: 5, comments: "This is a dank park. SO many HOES!"}, {user_id: 2, park_id: 1, overall_score: 3, safety_score: 4, run_score: 3, seating_score: 1, kid_score: 2, view_score: 5,
                  drug_score: 5, comments: "This is not a dank park. Not enough HOES!"}])

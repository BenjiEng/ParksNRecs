User.create!([
  {name: "test", email: "test@test.com", password_digest: "$2a$10$lB4SFF49t70lE83V5p1uMuLdqdFFlGy4Wx5oh25W.TPH5qVwR2n8u", session_token: "Uq0B-7g-9wm5Cn0sUg_WQg"},
  {name: "test2", email: "test2@test2.com", password_digest: "$2a$10$lLkOmkqQChqMaAGkIoTK6eyHQsmwOmsb70jpKdUfXqC0H/jIKCQYC", session_token: "YROKQ3EjhPh3qlxhPYGokA"},
  {name: "test3", email: "test3@test3.com", password_digest: "$2a$10$Aa/THfPCUatmX8h82guEXudJHLhdHtysQ279CmLQ7OKjx/WIX4eZO", session_token: "L2fvbjzE6qDB3vDl8TAwHw"}
])
Park.create!([
  {name: "Dolores Park", address: "19th & Dolores St", city: "San Francisco", state: "CA", zip: "94114", weekday_hours: nil, saturday_hours: nil, sunday_hours: nil, parking: nil, restrooms: nil, telephone: nil, latitude: 37.7598191, longitude: -122.4260362},
  {name: "Buena Vista Park", address: "Buena Vista & Haight", city: "San Francisco", state: "CA", zip: "94117", weekday_hours: nil, saturday_hours: nil, sunday_hours: nil, parking: nil, restrooms: nil, telephone: nil, latitude: 37.770437, longitude: -122.442954},
  {name: "South Sunset Playground", address: "40th & Wawona", city: "San Francisco", state: "CA", zip: "94116", weekday_hours: nil, saturday_hours: nil, sunday_hours: nil, parking: nil, restrooms: nil, telephone: nil, latitude: 37.7364677, longitude: -122.4978034},
  {name: "West Sunset Playground", address: "3223 Ortega St.", city: "San Francisco", state: "CA", zip: "94116", weekday_hours: nil, saturday_hours: nil, sunday_hours: nil, parking: true, restrooms: true, telephone: nil, latitude: 37.7490 , longitude: -122.4980},
  {name: "Golden Gate Park", address: "501 Stanyan St.", city: "San Francisco", state: "CA", zip: "94117", weekday_hours: nil, saturday_hours: nil, sunday_hours: nil, parking: nil, restrooms: nil, telephone: nil, latitude: 37.7718, longitude: -122.4547},
  {name: "Argonne Playground", address: "18th & Geary", city: "San Francisco", state: "CA", zip: "94121", weekday_hours: nil, saturday_hours: nil, sunday_hours: nil, parking: false, restrooms: true, telephone: nil, latitude: 37.7794, longitude: -122.4777}
])
Review.create!([
  {user_id: 1, overall_score: 3, safety_score: 4, seating_score: 1, run_score: 3, kid_score: 2, view_score: 5, drug_score: 5, comments: "This park is fairly nice. There is a lot of seating and I enjoy coming here during the evenings.", park_id: 1},
  {user_id: 1, overall_score: 1, safety_score: 1, seating_score: 1, run_score: 1, kid_score: 1, view_score: 1, drug_score: 1, comments: "Not too shabby.", park_id: 2},
  {user_id: 1, overall_score: 5, safety_score: 1, seating_score: 1, run_score: 1, kid_score: 3, view_score: 3, drug_score: 3, comments: "I really like how well kept the grass is.", park_id: 3},
  {user_id: 2, overall_score: 3, safety_score: 4, seating_score: 1, run_score: 3, kid_score: 2, view_score: 5, drug_score: 5, comments: "If there were more trees this park would be great!", park_id: 1},
  {user_id: 3, overall_score: 2, safety_score: 3, seating_score: 2, run_score: 2, kid_score: 4, view_score: 2, drug_score: 2, comments: "Too many ruffians.", park_id: 2},
  {user_id: 3, overall_score: 1, safety_score: 1, seating_score: 1, run_score: 1, kid_score: 1, view_score: 1, drug_score: 1, comments: "The bathrooms are surprisingly clean.", park_id: 1}
])
Photo.create!([
  {user_id: 1, park_id: 1, title: "Dolores Park, January 2015", description: "Such a great view from the top!", picture_url: "https://www.filepicker.io/api/file/vpiKMjLGR7eEhiwooJQY"},
  {user_id: 1, park_id: 1, title: "Dolores January 2015 pt. 2", description: "More views", picture_url: "https://www.filepicker.io/api/file/M7lijMSIalUfrbN3LjwQ"},
  {user_id: 1, park_id: 1, title: "Night Life", description: "Dolores at night", picture_url: "https://www.filepicker.io/api/file/oQb5EUcyShkARVKIQ4wY"}
])

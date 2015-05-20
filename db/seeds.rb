User.create!([
  {name: "test", email: "test@test.com", password_digest: "$2a$10$lB4SFF49t70lE83V5p1uMuLdqdFFlGy4Wx5oh25W.TPH5qVwR2n8u", session_token: "Uq0B-7g-9wm5Cn0sUg_WQg"},
  {name: "test2", email: "test2@test2.com", password_digest: "$2a$10$lLkOmkqQChqMaAGkIoTK6eyHQsmwOmsb70jpKdUfXqC0H/jIKCQYC", session_token: "YROKQ3EjhPh3qlxhPYGokA"},
  {name: "test3", email: "test3@test3.com", password_digest: "$2a$10$Aa/THfPCUatmX8h82guEXudJHLhdHtysQ279CmLQ7OKjx/WIX4eZO", session_token: "L2fvbjzE6qDB3vDl8TAwHw"}
])
Park.create!([
  {name: "Dolores Park", address: "19th & Dolores St", city: "San Francisco", state: "CA", zip: "94114", weekday_hours: nil, saturday_hours: nil, sunday_hours: nil, parking: nil, restrooms: nil, telephone: nil, latitude: 37.7598191, longitude: -122.4260362},
  {name: "Buena Vista Park", address: "Buena Vista & Haight", city: "San Francisco", state: "CA", zip: "94117", weekday_hours: nil, saturday_hours: nil, sunday_hours: nil, parking: nil, restrooms: nil, telephone: nil, latitude: 37.770437, longitude: -122.442954},
  {name: "South Sunset Playgroud", address: "40th and Wawona", city: "San Francisco", state: "CA", zip: "94116", weekday_hours: nil, saturday_hours: nil, sunday_hours: nil, parking: nil, restrooms: nil, telephone: nil, latitude: 37.7364677, longitude: -122.4978034}
])
Review.create!([
  {user_id: 1, overall_score: 3, safety_score: 4, seating_score: 1, run_score: 3, kid_score: 2, view_score: 5, drug_score: 5, comments: "This is a dank park. SO many HOES!", park_id: 1},
  {user_id: 1, overall_score: 1, safety_score: 1, seating_score: 1, run_score: 1, kid_score: 1, view_score: 1, drug_score: 1, comments: nil, park_id: 2},
  {user_id: 1, overall_score: 5, safety_score: 1, seating_score: 1, run_score: 1, kid_score: 3, view_score: 3, drug_score: 3, comments: nil, park_id: 3},
  {user_id: 2, overall_score: 3, safety_score: 4, seating_score: 1, run_score: 3, kid_score: 2, view_score: 5, drug_score: 5, comments: "This is not a dank park. Not enough HOES!", park_id: 1},
  {user_id: 3, overall_score: 2, safety_score: 3, seating_score: 2, run_score: 2, kid_score: 4, view_score: 2, drug_score: 2, comments: "Not enough hobos", park_id: 2},
  {user_id: 3, overall_score: 1, safety_score: 1, seating_score: 1, run_score: 1, kid_score: 1, view_score: 1, drug_score: 1, comments: nil, park_id: 1}
])

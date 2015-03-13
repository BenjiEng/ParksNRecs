# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Park.create([{name: 'Dolores Park', address: '123 drive', city: 'San Francisco',
              state: 'CA', zip: "94116"},
              {name: 'Buena Vista Park', address: '123 drive', city: 'San Francisco',
              state: 'CA', zip: "94116"}])

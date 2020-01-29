# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'database_cleaner'
DatabaseCleaner.clean_with(:truncation)

roamer = User.create!(name: "Conrad", email: "roamer@email.com", username: "roamer", password: "roamer")
scout = User.create!(name: "Lacey", email: "scout@email.com", username: "scout", password: "scout")

flight_a = Flight.create!(date: "11/11/2019", aircraft: "C152", aircraft_id: "5443L", 
                        departure: "OXR", arrival: "SZP", classification: "single engine land",
                        position: "dual", duration: "1.4", conditions: "day",
                        ground: "0.5", landings: "1 day", 
                        remarks: "Climbs, turns, cleaning trim, stalls, steep turns, slow flight",                        
                        user_id: "1")
flight_b = Flight.create!(date: "12/21/2019", aircraft: "C150M", aircraft_id: "714HH", 
                        departure: "SZP", arrival: "SZN", classification: "single engine land",
                        position: "dual", duration: "1.2", conditions: "day",
                        ground: "0.4", landings: "1 day", 
                        remarks: "Cross wind to landing, s-turns",
                        user_id: "2")
flight_c = Flight.create!(date: "12/27/2019", aircraft: "C150M", aircraft_id: "704UT", 
                        departure: "SZP", arrival: "SBA", classification: "single engine land",
                        position: "dual", duration: "1.7", conditions: "day",
                        ground: "0.3", landings: "4 day", 
                        remarks: "Steep turns, slow flight, descent high low, stall, SP traffic pattern, take off/land",
                        user_id: "2")
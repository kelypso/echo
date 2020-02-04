# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'database_cleaner'
DatabaseCleaner.clean_with(:truncation)

scout = User.create!(name: "Kelsey", email: "scout@email.com", username: "scout", password: "scout")
roamer = User.create!(name: "Conrad", email: "roamer@email.com", username: "ranger", password: "ranger")

flight_a = Flight.create!(date: "2019-10-05", aircraft: "C150M Cessna", aircraft_id: "714HH", 
                        departure: "SZP", arrival: "SZP", classification: "Airplane single-engine land",
                        position: "Dual", duration: "1.3", conditions: "Day",
                        ground: "0.5", landings: "1 day", 
                        remarks: "Climbs, turns, descents, climbing turns and descents, descent high/low drag, trim, slow flight, power off stalls",                        
                        user_id: "1")
flight_b = Flight.create!(date: "2019-10-09", aircraft: "C150M Cessna", aircraft_id: "704UT", 
                        departure: "SZP", arrival: "SZP", classification: "Airplane single-engine land",
                        position: "Dual", duration: "1.4", conditions: "Day",
                        ground: "0", landings: "1 day", 
                        remarks: "Climbs, turns, clearing turns, trim, power off stalls with rudder, steep turns, slow flight",
                        user_id: "1")
flight_c = Flight.create!(date: "2019-10-11", aircraft: "C150M Cessna", aircraft_id: "714HH", 
                        departure: "SZP", arrival: "SZP", classification: "Airplane single-engine land",
                        position: "Dual", duration: "1.7", conditions: "Day",
                        ground: "0.3", landings: "1 day", 
                        remarks: "Steep turns, slow flight, descent high/low, power on/off stalls, SP traffic pattern, take off/landing, aircraft systems",                        
                        user_id: "1")
flight_d = Flight.create!(date: "2019-10-16", aircraft: "C152 Cessna", aircraft_id: "5443L", 
                        departure: "SZP", arrival: "SZP", classification: "Airplane single-engine land",
                        position: "Dual", duration: "1.3", conditions: "Day",
                        ground: "0.1", landings: "1 day", 
                        remarks: "Ground reference maneuvers, turns around a point, rectangular pattern",
                        user_id: "1")
flight_e = Flight.create!(date: "2019-10-23", aircraft: "C150M Cessna", aircraft_id: "714HH", 
                        departure: "SZP", arrival: "OXR - SZP", classification: "Airplane single-engine land",
                        position: "Pilot-in-Command", duration: "1.4", conditions: "Day",
                        ground: "0.2", landings: "4 day", 
                        remarks: "Power on/off stalls, falling leaf, intro to OXR traffic pattern",
                        user_id: "1")
flight_f = Flight.create!(date: "2019-11-14", aircraft: "C150M Cessna", aircraft_id: "714HH", 
                        departure: "SZP", arrival: "SZP", classification: "Airplane single-engine land",
                        position: "Pilot-in-Command", duration: "1.2", conditions: "Day",
                        ground: "0", landings: "4 day", 
                        remarks: "Cross wind to landings, s-turns",                        
                        user_id: "1")                        
flight_g = Flight.create!(date: "2019-05-25", aircraft: "C172 Cessna", aircraft_id: "172CA", 
                        departure: "SQL", arrival: "SQL", classification: "Airplane single-engine land",
                        position: "Dual", duration: "0.8", conditions: "Day",
                        ground: "0.8", landings: "1 day",  
                        remarks: "Bay Tour, taxi, climb, turns, straight and level, descents, landing",
                        user_id: "2")
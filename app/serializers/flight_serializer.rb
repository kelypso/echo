class FlightSerializer
  include FastJsonapi::ObjectSerializer
  attributes :date, :aircraft, :aircraft_id, :departure, :arrival, :classification, :position, :duration, :conditions, :ground, :landings, :remarks, :user_id
end

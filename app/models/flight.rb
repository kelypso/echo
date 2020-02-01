class Flight < ApplicationRecord
    belongs_to :user

    validates :date, :aircraft_id, :departure, :arrival, :duration, presence: true
end
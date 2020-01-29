class Flight < ApplicationRecord
    belongs_to :user

    validates :date, :aircraft, :duration, presence: true
end
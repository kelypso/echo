class User < ApplicationRecord
    has_secure_password

    has_many :flights, dependent: :destroy

    validates :name, :email, :username, presence: true
    validates :email, :username, uniqueness: true
end
class CreateFlights < ActiveRecord::Migration[6.0]
  def change
    create_table :flights do |t|
      t.date :date
      t.string :aircraft
      t.string :aircraft_id
      t.string :departure
      t.string :arrival
      t.string :classification
      t.string :position
      t.string :duration
      t.string :conditions
      t.string :ground
      t.string :landings
      t.text :remarks
      t.integer :user_id

      t.timestamps
    end
  end
end

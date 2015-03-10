class CreateParks < ActiveRecord::Migration
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :weekday_hours
      t.string :saturday_hours
      t.string :sunday_hours
      t.boolean :parking
      t.boolean :restrooms
      t.boolean :telephone

      t.timestamps
    end
    add_index :parks, :name
    add_index :parks, :zip
  end
end

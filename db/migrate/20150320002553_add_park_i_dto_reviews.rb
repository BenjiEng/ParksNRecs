class AddParkIDtoReviews < ActiveRecord::Migration
  def change
    add_column :reviews, :park_id, :integer, null: false
  end
end

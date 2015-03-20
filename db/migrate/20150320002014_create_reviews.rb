class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null:false
      t.integer :overall_score, null:false
      t.integer :safety_score, null:false
      t.integer :seating_score, null:false
      t.integer :run_score, null:false
      t.integer :kid_score, null:false
      t.integer :view_score, null:false
      t.integer :drug_score, null:false
      t.text    :comments
      t.timestamps
    end
    add_index :reviews, :overall_score
  end
end

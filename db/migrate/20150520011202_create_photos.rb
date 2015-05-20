class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer  "user_id",      null: false
      t.integer  "park_id",      null: false
      t.string   "title"
      t.text     "description"
      t.string   "picture_url",  null: false
      t.timestamps
    end
  end
end

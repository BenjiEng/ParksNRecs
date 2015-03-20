# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150320002553) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "parks", force: true do |t|
    t.string   "name",           null: false
    t.string   "address",        null: false
    t.string   "city",           null: false
    t.string   "state",          null: false
    t.string   "zip",            null: false
    t.string   "weekday_hours"
    t.string   "saturday_hours"
    t.string   "sunday_hours"
    t.boolean  "parking"
    t.boolean  "restrooms"
    t.boolean  "telephone"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "latitude"
    t.float    "longitude"
  end

  add_index "parks", ["name"], name: "index_parks_on_name", using: :btree
  add_index "parks", ["zip"], name: "index_parks_on_zip", using: :btree

  create_table "reviews", force: true do |t|
    t.integer  "user_id",       null: false
    t.integer  "overall_score", null: false
    t.integer  "safety_score",  null: false
    t.integer  "seating_score", null: false
    t.integer  "run_score",     null: false
    t.integer  "kid_score",     null: false
    t.integer  "view_score",    null: false
    t.integer  "drug_score",    null: false
    t.text     "comments"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "park_id",       null: false
  end

  add_index "reviews", ["overall_score"], name: "index_reviews_on_overall_score", using: :btree

  create_table "users", force: true do |t|
    t.string   "name",            null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["name"], name: "index_users_on_name", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_12_23_145608) do

  create_table "event_settings", force: :cascade do |t|
    t.boolean "plus_one"
    t.integer "event_id", null: false
    t.integer "user_id", null: false
    t.index ["event_id"], name: "index_event_settings_on_event_id"
    t.index ["user_id"], name: "index_event_settings_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "attire"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.date "birthdate"
    t.string "password_digest"
  end

  add_foreign_key "event_settings", "events"
  add_foreign_key "event_settings", "users"
end

class CreateEventSettings < ActiveRecord::Migration[6.1]
  def change
    create_table :event_settings do |t|
      t.boolean :plus_one
      t.belongs_to :event, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
    end
  end
end

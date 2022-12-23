# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
puts "Clearing DB"
User.destroy_all
Event.destroy_all
Event_settings.destroy_all
puts "DB cleared!"

puts "creating the users!"
5.times {User.create(name:)}


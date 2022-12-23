# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
puts "Clearing DB"
User.destroy_all
Event.destroy_all
EventSetting.destroy_all
puts "DB cleared!"

puts "creating the users!"
5.times {User.create(
    name: Faker::FunnyName.name, 
    username:Faker::Name.first_name, 
    birthdate: Faker::Date.between(from: '1903-09-23', to: '2022-09-25'), password_digest: Faker::Color.color_name)}
    
    puts "Users created yo!"
    
    puts "Events being planned"
    strings = ["casual","business casual", "business"]
    10.times {Event.create(title:"Go to" + Faker::Mountain.name, 
    description: Faker::Quotes::Shakespeare.hamlet_quote,
    attire: strings.sample)}
    puts "Events planned my man!"

    puts " Looking at Event Settings"
    8.times {EventSetting.create(plus_one: Faker::Boolean.boolean, user: User.all.sample, event: Event.all.sample )}
    puts "Event Settings Set, bro!"

    puts "Seeding done!"
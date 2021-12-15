# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rails g resource User email username password_digest avatar

rails g resource Books title author summary date:date image 

rails g resource FollowBook book:belongs_to user:belongs_to

rails g resource Post subject body user:belongs_to book:belongs_to

rails g resource Comments body user:belongs_to commentable:references{polymorphic}
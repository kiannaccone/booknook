class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :summary
      t.date :date
      t.string :image
      t.string :google_book_id

      t.timestamps
    end
  end
end

class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :Title
      t.string :Year
      t.string :Poster

      t.timestamps
    end
  end
end

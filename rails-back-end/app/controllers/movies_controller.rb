class MoviesController < ApplicationController
  def index
    movies = Movie.all
    render json: movies
  end

  def movie_params
    params.require(:movie).permit(:name, :list_id)
  end
end

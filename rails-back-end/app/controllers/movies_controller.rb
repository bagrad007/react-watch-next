class MoviesController < ApplicationController
  def index
    movies = Movie.all
    render json: movies
  end

  def create
    movie = Movie.create(movie_params)
    render json: movie
  end

  def movie_params
    params.require(:movie).permit(:name, :year, :img)
  end
end

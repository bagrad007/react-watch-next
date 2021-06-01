class ListsController < ApplicationController
  def index
    list = List.all
    render json: list
  end

  def list_params
    params.require(:list).permit(:name)
  end
end

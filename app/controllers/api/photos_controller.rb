class Api::PhotosController < ApplicationController
  def create
  end

  def index
  end

  def show
  end

  def destroy
  end

  private

    def photo_params
      params.require(:photo).permit(:)
    end

end

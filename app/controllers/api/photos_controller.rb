class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    if @photo.save
      render json: @photo
    else
      render json: @photo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @photos = Photos.all
    render :index
  end

  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.delete
    render :show
  end

  private

    def photo_params
      params.require(:photo).permit(:user_id, :park_id, :photo_url, :title, :description)
    end

end

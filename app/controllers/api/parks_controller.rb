class Api::ParksController < ApplicationController

  def create
    @park = Park.new(park_params)
    if @park.save
      render json: @park
    else
      flash.new[:errors] = @park.errors.full_messages
    end
  end

  def show
    @park = Park.find(params[:id])
    @overall = overall_total
    render :show
  end

  def index
    if params[:name]
      @parks = Park.where('lower(parks.name) LIKE ?', "%#{params[:name].downcase}%")
    else
    @parks = Park.all
    end
    render json: @parks
  end

  private

  def park_params
    params.require(:park).permit(:name, :address, :city, :state, :zip,
    :weekday_hours, :saturday_hours, :parking, :restrooms, :telephone)
  end

  def overall_total
    @park = Park.find(params[:id])
    arr = @park.reviews.pluck(:overall_score)
    total = arr.inject{ |sum, n| sum + n }
    avg = total / @park.reviews.count
  end

end

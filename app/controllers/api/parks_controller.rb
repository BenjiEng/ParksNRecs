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
    reviews = @park.reviews
    @avg_scores = {}
    reviews.each do |review|
      @avg_scores[:overall_score] = average(:overall_score, @park)
      @avg_scores[:safety_score] = average(:safety_score, @park)
      @avg_scores[:seating_score] = average(:seating_score, @park)
      @avg_scores[:run_score] = average(:run_score, @park)
      @avg_scores[:kid_score] = average(:kid_score, @park)
      @avg_scores[:view_score] = average(:view_score, @park)
      @avg_scores[:drug_score] = average(:drug_score, @park)
    end
    render :show
  end

  def index
    if params[:name]
      @parks = Park.where('lower(parks.name) LIKE ?', "%#{params[:name].downcase}%")
    else
      @parks = Park.all
    end

    @avg_scores = {}
    @parks.each do |park|
      @avg_scores[park.id] = average(:overall_score, park)
    end
    render :index
  end

  private

  def park_params
    params.require(:park).permit(:name, :address, :city, :state, :zip,
    :weekday_hours, :saturday_hours, :parking, :restrooms, :telephone)
  end

  def average(category, park)
    scores = park.reviews.pluck(category.to_sym)
    total = scores.inject{ |sum, n| sum + n }
    avg = (total.to_f / park.reviews.count).to_f
  end
end

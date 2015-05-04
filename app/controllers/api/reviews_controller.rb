class Api::ReviewsController < ApplicationController
  before_action :require_signed_in!

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def edit
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
    render :show
  end

  private

    def review_params
      params.require(:review).permit(:overall_score, :safety_score, :seating_score,
                                     :run_score, :kid_score, :view_score, :drug_score,
                                     :comments, :park_id)
    end


end

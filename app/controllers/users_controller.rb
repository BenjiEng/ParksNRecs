class UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      redirect_to("#")
    else
      flash.new[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find_by_params([:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end

class Api::V1::FlightsController < ApplicationController
    before_action :set_flight, only: [:show, :update, :destroy]
    
    # GET /flights
    def index
        @flights = Flight.all
        render json: FlightSerializer.new(@flights)
    end
    
    # GET /flights/1
    def show
        flight_json = FlightSerializer.new(@flight)
        render json: flight_json
    end
    
    # POST /flights
    def create
        @flight = Flight.new(user_params)
        if @flight.save
            session[:user_id] = @flight.id
            render json: FlightSerializer.new(@flight), status: :created
        else
            resp = {
                error: @flight.errors.full_messages.to_sentence
            }
            render json: resp, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /flights/1
    def update
        if @flight.update(flight_params)
            render json:  FlightSerializer.new(@flight), status: :ok
        else
            resp = {
                error: @flight.errors.full_messages.to_sentence
            }
            render json: resp, status: :unprocessable_entity
        end
    end

    # DELETE /flights/1
    def destroy
        if @flight.destroy
            render json:  {message: "Flight successfully destroyed"}, status: :ok
        else
            resp = {
                error: "Flight not found and not destroyed"
            }
            render json: resp, status: :unprocessable_entity
        end
    end
    
    private
    # Use callbacks to share common setup or constraints between actions.
    def set_flight
        @flight = Flight.find(params[:id])
    end
    
    # Only allow a trusted parameter "white list" through.
    def user_params
        params.require(:flight).permit(:name, :email, :username, :password)
    end
end

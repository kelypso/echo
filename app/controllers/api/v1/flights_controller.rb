class Api::V1::FlightsController < ApplicationController
    before_action :set_flight, only: [:show, :update, :destroy]
    
    # GET /flights
    def index
        if logged_in?
            @flights = current_user.flights
            render json: FlightSerializer.new(@flights)
        else 
            render json: {
                error: "Must be logged in to view flight log"
            }
        end
    end
    
    # GET /flights/1
    def show
        flight_json = FlightSerializer.new(@flight)
        render json: flight_json
    end
    
    # POST /flights
    def create
        @flight = current_user.flights.build(flight_params)
        if @flight.save
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
                error: "Flight could not be found and was not destroyed"
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
    def flight_params
        params.require(:flight).permit(:date, :aircraft, :aircraft_id, :departure, :arrival, :classification, :position, :duration, :conditions, :ground, :landings, :remarks)
    end
end

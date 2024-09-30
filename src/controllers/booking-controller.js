const { StatusCodes } = require('http-status-codes');
const { BookingService } = require('../services');
const { ErrorResponse, SuccessResponse } = require('../utils/common');

async function createBooking(req, res) {
    try {
        //console.log("hi");
        //console.log(req.body);
        //console.log("after req.body");
        const response = await BookingService.createBooking({
            flightId: req.body.flightId,
            userId: req.body.userId,
            noOfSeats: req.body.noOfSeats
        });
        //console.log('SuccessResponse object is: ',SuccessResponse);
        SuccessResponse.data = response;
        //console.log('second SuccessResponse object is: ',SuccessResponse);
        return res                                          
                .status(StatusCodes.OK)                
                .json(SuccessResponse)
                                                            
    } catch (error) {
        console.log('ErrorResponse object: ', ErrorResponse);                                         
        ErrorResponse.error = error; 
        console.log('After assigning error object', ErrorResponse);               
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)  
                .json(ErrorResponse);
    
    }
}


module.exports = {
    createBooking
}
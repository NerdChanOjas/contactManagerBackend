import constants from "../constants.js";

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json( { title: "Validation Failed", message: err.message, stackTrace: err.stack } )
            break;

        case constants.NOT_FOUND:
            res.json( { title: "Not Found",message: err.message, stackTrace: err.stack })
            break;

        case constants.UNAUTHORIZED:
            res.json( { title: "unauthorized Access",message: err.message, stackTrace: err.stack })
            break;

        case constants.FORBIDDEN:
            res.json( { title: "Forbidden access",message: err.message, stackTrace: err.stack })
            break;

        case constants.SERVER_ERROR:
            res.json( { title: "Server Error",message: err.message, stackTrace: err.stack })
            break;
        
        default:
            console.log("No errors. everything is fine")
            break;
    }
};

export default errorHandler;
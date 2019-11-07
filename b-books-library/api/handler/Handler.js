const HTTPStatus = require('http-status');

function onSuccess(res, data) {
  return res.status(HTTPStatus.OK).json({
    success: true,
    response: data,
  });
}

function onError(res, err, message) {
  console.log(err);
  if (err) {
    const errorCode = err.status || err.errorCode;
    const jsonResponse = {
        success: false,
        message,
    }
    switch (errorCode) {
      case 500:
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(jsonResponse);
        break;
      case 400:
        res.status(HTTPStatus.BAD_REQUEST).json(jsonResponse);
        break;
      case 401:
        res.status(HTTPStatus.UNAUTHORIZED).json(jsonResponse);
        break;
      case 403:
        res.status(HTTPStatus.FORBIDDEN).json(jsonResponse);
        break;
      case 404:
        res.status(HTTPStatus.NOT_FOUND).json(jsonResponse);
        break;
      case 409:
        res.status(HTTPStatus.CONFLICT).json(jsonResponse);
        break;
      default:
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(jsonResponse);
        break;
    }
  } else {
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(HTTPStatus[500]);
  }
}

module.exports = {
  onError,
  onSuccess,
};
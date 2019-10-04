const functions = require('firebase-functions');
exports.division = functions.https.onRequest(
  (request, response) => {
    try {
      if (!request.query.divisor) {
        throw new Error("Falta el numero divisor");
    } else if (!request.query.dividendo) {
        throw new Error("Falta el numero dividendo");
      }
      response.send(
        `El cociente es de ${request.query.dividendo/request.query.divisor}`);
    } catch (e) {
      response.send(e.message);
    }
  });

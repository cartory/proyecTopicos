const dialogflow = require("dialogflow");
const { project_id } = require("../../app/credentials.json");
const { DialogFlowResponse } = require("../models/DialogFlowReponse");

const json = {
  session: "sessionPath",
  queryInput: {
    text: {
      text: "query",
      languageCode: "ES",
    },
  },
  outputAudioConfig: {
    audioEncoding: "OUTPUT_AUDIO_ENCODING_OGG_OPUS",
  },
};

class DialogFlowController {
  static async detectIntent(req, res, next) {
    const sessionClient = new dialogflow.SessionsClient();
    const { query = "DEFAULT", sessionID = "DEFAULT" } = req.body;

    json.session = sessionClient.sessionPath(project_id, sessionID);
    json.queryInput.text.text = query;

    const { queryResult, outputAudio, outputAudioConfig } = (
      await sessionClient.detectIntent(json)
    )[0];

    req.body = {
      queryResult,
      outputAudio,
      outputAudioConfig,
    };

    next();
  }

  static async proccessAction(req, res) {
    const { queryResult, outputAudio, outputAudioConfig } = req.body;
    var data = null;

    switch (queryResult.action) {
      case "get_bills":
          data = await DialogFlowResponse.filterOrderByUserClient("-MAyGL1jK-Q8piBh_vZE","cliendID");
        break;
      case "get_orders":
        // userID, clientID
        data = await DialogFlowResponse.getPreviousOrders(
          "-MAyGL1jK-Q8piBh_vZE",
          "cliendID"
        );
        break;
      case "get_payment_methods":
        // userID, clientID
        data = await DialogFlowResponse.getPaymentsMethods(
          "-MAyGL1jK-Q8piBh_vZE",
          "cliendID"
        );
        break;
      case "edit_payment_method":
        // registrar = string, eliminar = string
        console.log("redirect view payment method");
        break;
      case "manage_order":
        // registrar = string, eliminar = string => FLUTTER
        console.log(queryResult.parameters);
        // FLUTTER LLAMARÁ DIRECTAMENTE A LA RUTA PARA REGISTRAR&ELIMINAR
        break;
      case "edit_product":
        // cantidad = number, producto = string => FLUTTER
        console.log(queryResult.parameters);
        break;
      case "delete_product":
        // producto = string => FLUTTER
        console.log(queryResult.parameters);
        break;
      //  REALIZAR UN PEDIDO
      case "get_category":
        // category = string =>
        console.log(queryResult.parameters);
        /**
         * Si la llamada es desde el homepage se hará la consulta
         * sino la filtrada se aplicará en FLUTTER
         */
        break;
      case "get_promo":
        console.log("redirect/update view");
        /**
         * Si es el primer filtro aplicado se hará la consulta
         * sino la filtrada se aplicará en FLUTTER
         */
        break;
      case "get_name":
        //  producto = string
        console.log("redirect/update view");
        /**
         * Si es el primer filtro aplicado se hará la conulta
         * sino la filtrada se aplicará en FLUTTER
         */
        break;
      case "get_product":
        //  producto = string, cantidad = number => FLUTTER
        console.log(queryResult.parameters);
        break;
      default:
          console.log("ENTRANDO");
        break;
    }
    res.json({
      fulfillmentText: queryResult.fulfillmentText,
      action: {
        name: queryResult.action,
        parameters: queryResult.parameters,
        data: data,
      },
      end_conversation: queryResult.diagnosticInfo != null,
      outputAudioConfig: outputAudioConfig,
      //outputAudio: outputAudio,
    });
  }
}

module.exports = { DialogFlowController };
/**
 * get_bills
 * get_orders
 * get_payment_methods
 * edit_payment_method
 * manage_order
 * edit_product
 * delete_product
 * get_category
 * get_promo
 * get_name
 * get_product
 */

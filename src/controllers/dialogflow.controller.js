const { project_id } = require("../../app/credentials.json");
const dialogflow = require("dialogflow");
const { query } = require("express");
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
 */

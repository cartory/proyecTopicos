const { project_id } = require("../../app/credentials.json");
const dialogflow = require("dialogflow");

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
    const { query = "DEFAULT", sessionID = "DEFAULT"} = req.body;

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
    res.json(queryResult);
  }
}

module.exports = { DialogFlowController };

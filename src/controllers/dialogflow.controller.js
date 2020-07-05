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
  static async detectIntent(req, res) {
    const sessionClient = new dialogflow.SessionsClient();
    const { query = "DEFAULT" } = req.body;

    json.session = sessionClient.sessionPath(project_id, Date.now().toString());
    json.queryInput.text.text = query;

    res.status(200).json(await sessionClient.detectIntent(json));
  }
}

module.exports = { DialogFlowController };

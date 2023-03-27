import dialogFlow from "dialogFlow";
const dialogFlow = dialogFlow();
const dialogRouter = require("./dialogFlow");
export const dialogRouter = dialogFlow.Router();

// Set up dialogFlow client
const sessionClient = new dialogFlow.SessionsClient({
  credentials: {
    private_key:
      "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCuompv8FX/Lmjx\nlFv84eEtZqonRI5AYDuJ3pPRHe3UblAP8HrlhMl+5bqFJsm9djaX/+x+HNMtHUw8\ndurhY6my0CSfEdFpRQ+MiGywfwKTxWIv1tIIFMe+XZPT9/YMDfuZd/EB++Rkpy2S\nyl53W2exoPmBbDEnM3YoLc7vATlvc6I2m9GRnOFSkfNe1EQWpbs1hMUHYBesPbb+\n/PebByiTXho2nGEfaoKqBXkaIpS3v4t7/Qo64EHwCIiM6bbbm/P5lkZQWGRkdc2U\n+0POPPn6lxHOqIX3KsTiBJNTZ4Pi59FvppkQrNHqp44gu/IKNZFbI/0fzTVUodHa\nsNq6V54TAgMBAAECggEACIwDaJIbK1+SnEw2ClTlx+qP5lcZHTZ4g4Fku6Xa13xE\np9sNsMEEeZT1wYGJ+x9Xga3xXaS8gyc9bXImgbx2eD1upWhiVuQd5DNjGmpE7oWJ\nDi1V3zZhJkR/MS8gGCvxBexUW9P/tBtohBgqcm4DT7LAs2BfsXr3y/Sd/Z2SOY2b\nBHuFHnImEIc9ABp0ldKT0LLqaDQpMZjmqhG+qKCE7mx9rnRYjD/oKdlm6gSQyIj+\n5cGzfoSKnph2WGnR9i8dBYlypBQR3oc1VnE2vyWQ3CB5GbWBV11UU2qfJ4RuftAy\nedWJg1rCnEb1Y0tz1j6nFlffLzKoNViOhmFqJo53FQKBgQDhJ6Wo+vkCgCn/gYuw\nG1+VNrSmFm6SPoO0pBnKei9Owr44q0d3OBwyuThhiv6FEQ1i47s7xYRfC6idQhCf\nbml4+JsxVo4cj5kzzbr+ZUzt3L/J3cNTvJO9iJ4nASKkCw1kZAi7HczmMrgJl53k\nHXQj2f+1XxMqr+aIVnY0NSzadwKBgQDGjvqAEO6dSAayv+p2qwJWGbs9x4PdzQQD\ny0VynZ3Segigin3RUEN28t79L/cupoOX1Xc4oc/X8mAVXRypw2Og+5iJ5kyKG7q7\nFpS88N/D1KA7Wx4tutXyLd3HGPTcZETLJG/8mwTMEdbh20ws/wiYKjBUcAIzMC78\ngIXKt7gkRQKBgQC8x4ZBgXRpIVaVUWPy23Cv5jdfDm3VFq9NNU4ek4W4ztW5I/r+\nvb/+04evWV//6AVGRdUFz50mJ9tPR0YyttuePyu4GW98CPaWFcfUZtEymqT/t31/\nZxykjLi10WDfFBk9dBZR9TGITTw7ZrFOw1dOfAjHZJjocKWk6IGhUnhyDwKBgHG6\nv5zPFf2cncmQx5lFBkeO4YLXXp6SqXQK4DJwOU+venWKHdrgYGQnZLYc3TYpRkKX\nkHwtosEMISDbfml2cwBoW8zQzpJko6Y5nuRCC8k9ZrHY1QZYd+cJgnhhwQ7jl8vL\niSFlIXBJ34zqcU1snt2ZfKlApuHu/Vq/uuKMLLsJAoGBANjHg7E27fe8Zc8LIP12\nbt9f1y/77OMEVGKa2AYzwvPaB+6xpB05s7czqYL7BxHfI2kfPCOB4zK1EP1LI9Jm\nUCuHG2Bi1e2chPKCnV81rJ8judqzwXG3XwuP/OmVy1SHD2B5ftKsr61iGnhrTAFk\n7cNQI7ZAUmFyZDeoluIquyjN",
    client_email: "fromfresh@fromfresh.iam.gserviceaccount.com",
  },
});
const sessionPath = sessionClient.sessionPath(
  "fromfresh",
  "110613854781616882427"
);

// Send user message to Dialogflow agent
const request = {
  session: sessionPath,
  queryInput: {
    text: {
      text: "<user_message>",
      languageCode: "en-US",
    },
  },
};
const response = await sessionClient.detectIntent(request);

// Get response from Dialogflow agent
const fulfillmentMessages = response.queryResult.fulfillmentMessages;
const textResponse = fulfillmentMessages.find(
  (message) => message.message === "text"
).text.text[0];

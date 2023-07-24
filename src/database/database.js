import { MongoClient } from "mongodb";

const databaseName = "chat";

export const database = {
  _databaseClient: null,
  connect: async function (url) {
    const client = await MongoClient.connect(url);
    this._databaseClient = client;
  },
  getConnection: function () {
    if (!this._databaseClient) {
      console.log("First Initiliase connection");
    }
    return this._databaseClient.db(databaseName);
  },
};

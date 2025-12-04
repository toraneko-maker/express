// insertMany.js
const { MongoClient } = require("mongodb");

// ★ notes.js と同じ URI をコピペする！
const uri = "**********";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db("notes");           // notes.js と同じ DB 名
    const collection = db.collection("notes"); // 同じコレクション名

    const docs = [
      {
        id: 1,
        title: "ノート１のタイトルです",
        subTitle: "ノート１のサブタイトルです",
        bodyText: "ノート１の本文です",
      },
      {
        id: 2,
        title: "ノート２のタイトルです",
        subTitle: "ノート２のサブタイトルです",
        bodyText: "ノート２の本文です",
      },
    ];

    const result = await collection.insertMany(docs);
    console.log("insertMany result:", result);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();

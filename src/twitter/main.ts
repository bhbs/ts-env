import { Client } from "twitter-api-sdk";

import { config } from "dotenv";
config();

const client = new Client(process.env.TWITTER_TOKEN!);

async function main() {
  await removeAllRules();
  // await client.tweets.addOrDeleteRules({
  //   add: [{ value: "" }],
  // });
  // await client.tweets.addOrDeleteRules({
  //   delete: { ids: [""] },
  // });
  const rules = await client.tweets.getRules();
  console.log(rules);
  const stream = client.tweets.searchStream();
  for await (const tweet of stream) {
    console.log(tweet.data?.text);
  }
}

async function removeAllRules() {
  const rules = await client.tweets.getRules();
  await client.tweets.addOrDeleteRules({
    delete: { values: rules.data.map(({ value }) => value) },
  });
}

main();

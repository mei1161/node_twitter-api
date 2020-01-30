'use strict'

const twitter = require("twitter");
const fs = require("fs");

const client = new twitter(JSON.parse(fs.readFileSync("../secret.json","utf-8")));



async function main(){
  const tweets = await client.get('search/tweets', {q: 'node.js'});
  console.log(tweets)
}

main();

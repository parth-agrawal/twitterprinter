import { TwitterApi } from "twitter-api-v2";

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN
if (!BEARER_TOKEN) {
    throw new Error("BEARER_TOKEN is not set")
}
const API_KEY = process.env.TWITTER_API_KEY
if (!API_KEY) {
    throw new Error("TWITTER_API_KEY is not set")
}
const API_SECRET = process.env.TWITTER_API_SECRET
if (!API_SECRET) {
    throw new Error("TWITTER_API_SECRET is not set")
}
const ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN
if (!ACCESS_TOKEN) {
    throw new Error("TWITTER_ACCESS_TOKEN is not set")
}
const ACCESS_SECRET = process.env.TWITTER_ACCESS_SECRET
if (!ACCESS_SECRET) {
    throw new Error("TWITTER_ACCESS_SECRET is not set")
}




const client = new TwitterApi({
    appKey: API_KEY,
    appSecret: API_SECRET,
    accessToken: ACCESS_TOKEN,
    accessSecret: ACCESS_SECRET,
})

const bearer = new TwitterApi(BEARER_TOKEN)

export const twitterClient = client.readWrite;
export const twitterBearer = bearer.readOnly;


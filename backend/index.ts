import dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/.env` });

import { twitterClient } from './twitterClient';

const tweet = async () => {
	try {
		await twitterClient.v2.tweet('Hello World!')
		const tweetId = '1';
		// const tweetResponse = await twitterClient.v2.tweet(tweetId);
		// console.log(tweetResponse.data);
	}
	catch (e) {
		console.log(e)
	}
}

tweet()
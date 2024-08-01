import dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/.env` });

import { twitterClient } from './twitterClient';

const tweet = async () => {
	try {
		const jack = await twitterClient.v1.user({ user_id: '12' });
	}
	catch (e) {
		console.log(e)
	}
}

tweet()
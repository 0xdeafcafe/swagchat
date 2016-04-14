'use strict';

import JsonClient from 'json-client-node';

export default class HaloApi {
	constructor(subscriptionKey: string) {
		this.subscriptionKey = subscriptionKey;
		this.client = JsonClient('https://www.haloapi.com/stats/h5/', {
			headers: {
				'User-Agent': 'Cartographer/0.0.1',
				'Ocp-Apim-Subscription-Key': this.subscriptionKey
			}
		});
	}
	
	async getServiceRecord(gamertag: string) {
		return await this.client('get', `servicerecords/arena`, {
			players: gamertag
		});
	}

	async getMatchHistory(gamertag: string, start, count) {
		return await this.client('get', `players/${gamertag}/matches`, {
			start: start,
			count: count
		});
	}

	async getMatchEvents(matchId: string) {
		return await this.client('get', `matches/${matchId}/events`);
	}

	async getStartanImage(gamertag: string, size, crop) {
		// TODO: figure out how this will work with json-client
		throw Error('Not Implemented');
	}

	async getEmblemImage(gamertag: string, size, crop) {
		// TODO: figure out how this will work with json-client
		throw Error('Not Implemented');
	}
}

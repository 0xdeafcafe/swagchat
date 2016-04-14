'use strict';

import mysql from 'promise-mysql';

export default class DataContext {
	constructor(host, user, password, database) {
		this.host = host;
		this.database = database;
		this.pool = mysql.createPool({
			host: this.host,
			user: user,
			password: password,
			database: this.database,
			connectionLimit: 10
		});
	}
	
	async executeQuery(query) {
		return await this.pool.query(query);
	}
}

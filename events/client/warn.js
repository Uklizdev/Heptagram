const dbLogging = require("../dbLogging");

module.exports = async (Discord, client, info) => {
	console.warn(info);

	const data = { action: 'WARN', info };
	dbLogging(data);
};

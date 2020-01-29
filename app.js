const { sequelize, models } = require("./models");

// Get references to our models.
const { Book, Library } = models;

(async () => {
	await sequelize.sync();
	console.log(db);
})();

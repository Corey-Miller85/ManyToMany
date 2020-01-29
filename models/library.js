"use strict";
module.exports = (sequelize, DataTypes) => {
	const Library = sequelize.define(
		"Library",
		{
			library: DataTypes.STRING
		},
		{}
	);
	Library.associate = function(models) {
		// associations can be defined here
		Library.belongsToMany(models.Book, {
			as: "library_Book",
			through: "libraryBook"
		});
	};
	return Library;
};

const modles = require("./models");
modles.sequelize.sync().then(() => console.log("tables created!"));

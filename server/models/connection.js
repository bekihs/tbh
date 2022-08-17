const Sequelize = require("sequelize-cockroachdb");
const sequelize = new Sequelize.Sequelize(`postgresql://hadas:ELMqpLVpKpyTXdCaVbO2oA@free-tier13.aws-eu-central-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dragged-ent-2876`);

module.exports = sequelize
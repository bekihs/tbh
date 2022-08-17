const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "free-tier13.aws-eu-central-1.cockroachlabs.cloud:26257",
      user: "hadas",
      password: "ELMqpLVpKpyTXdCaVbO2oA",
      database: "defaultdb",
      connectAttributes:"--cluster=ragged-ent-2876"
    },
    listPerPage: 10,
  };
  module.exports = config;
 
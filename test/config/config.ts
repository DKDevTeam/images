import config from "../config.json";

const port = [config.local_port];
const localhost = [config.localhost];
const slash_local = [config.slash_backgrounds];

module.exports = {
  port,
  localhost,
  slash_local,
};

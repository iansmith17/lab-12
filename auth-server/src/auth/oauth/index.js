const google = require('./google');
const github = require('./github');

const providers = {
  google,
  github,
};

module.exports = async (req) => {
  let providerName = req.params.provider || 'google';
  let provider = providers[providerName];

  if (!provider) throw `Provider ${providerName} not found`;

  return await provider(req);
};

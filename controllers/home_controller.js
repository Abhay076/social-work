module.exports.home = function (req, res) {
  return res.end("<h1>Express is Running</h1>");
};
module.exports.signIn = function (req, res) {
  return res.end("<h1>Sign In</h1>");
};
const { sanitizeEntity, getAbsoluteServerUrl } = require("strapi-utils");
const axios = require("axios");
module.exports = {
  async refreshToken(ctx) {
    const { token } = ctx.request.body;
    //return strapi.plugins["users-permissions"].services.jwt.getToken(deviceId);
    /*var user = await strapi
      .query("plugin::users-permissions.user")
      .findOne({ username: "sadas" });
*/
    // return user;

    const payload =
      strapi.plugins["users-permissions"].services.jwt.verify(token);
    return payload;
  },
};

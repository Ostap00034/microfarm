const withVideos = require("next-videos");

module.exports = withVideos({
  env: {
    SERVER_URL: "http://localhost:4200/api/",
  },
});

"use strict";

var getProjectNumber = require("./getProjectNumber");
var api = require("./api");

function fetchWebSetup(options) {
  return getProjectNumber(options)
    .then(function(projectNumber) {
      return api.request("GET", "/v1/projects/" + projectNumber + "/clients/_:getWebAppConfig", {
        auth: true,
        origin: api.firedataOrigin,
      });
    })
    .then(function(response) {
      return response.body;
    });
}

module.exports = {
  fetch: fetchWebSetup,
};

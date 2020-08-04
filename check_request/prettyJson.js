/**
 * Pretty print JSON in the command line
 * @param {string} - json
 */
function prettyJson(json) {
    return JSON.stringify(JSON.parse(json), null, 2)
}

module.exports = prettyJson;

var yaml = require("js-yaml");
var fs = require("fs");

module.exports = {

    configFile: './config.yml',

    data: {},

    load: function () {
        if (!fs.existsSync(this.configFile)) {
            fs.writeFileSync(this.configFile, yaml.safeDump({
                tourneyId: 0,
                tourneyFlag: 0
            }));
        }
        this.data = yaml.safeLoad(fs.readFileSync(this.configFile).toString());
    },

    save: function () {
        var data = yaml.safeDump(this.data);
        console.log(data);
        fs.writeFileSync(this.configFile, data);
    }
};
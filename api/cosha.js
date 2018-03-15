/*!
 * COSHA Client
 * by Francesco Bianco <bianco@javanile.org>
 * Copyright(c) 2016-2017 Javanile.org
 * MIT Licensed
 */

const ifaces = require('os').networkInterfaces();
const request = require('request');

const cosha = {

    /**
     *
     * @returns {*}
     */
    getMyAddress: function ()
    {
        var address = null;

        for (var dev in ifaces) {
            ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address: undefined);
        }

        return address;
    },

    /**
     *
     * @param cb
     */
    findDevices: function (cb)
    {
        var resp = {
            devices: []
        };

        const my = this.getMyAddress();
        const ip = my.split('.');
        const nt = ip[0]+'.'+ip[1]+'.'+ip[2]+'.';

        for (var i = 1; i < 255; i++) {
            var ping = 'http://' + nt + i + ':1981/i';
            request(ping, {method: 'POST', json: true}, function (err, res, body) {
                if (err) { return; }
                resp.devices.push(body);
            });
        }

        setTimeout(function() { cb(resp); }, 750);
    },

    /**
     *
     * @param cb
     */
    findClients: function (cb)
    {
        var resp = {
            clients: []
        };

        const my = this.getMyAddress();
        const ip = my.split('.');
        const nt = ip[0]+'.'+ip[1]+'.'+ip[2]+'.';

        for (var i = 1; i < 255; i++) {
            var ping = 'http://' + nt + i + ':1983/i';
            request(ping, {method: 'POST', json: true}, function (err, res, body) {
                if (err) { return; }
                resp.clients.push(body);
            });
        }

        setTimeout(function() { cb(resp); }, 750);
    },

    /**
     *
     */
    client: {

        /**
         *
         * @param cb
         */
        i: function (cb)
        {
            const data = {
                devices: []
            };

            // Looking for network devices and start api
            cosha.findDevices(function(resp) {
                data.devices = resp.devices;
                //console.log(devices);
                cb(data);
            });
        },

        /**
         *
         * @param cb
         */
        r: function (cb)
        {
            const data = {
                devices: []
            };

            // Looking for network devices and start api
            cosha.findDevices(function(resp) {
                data.devices = resp.devices;
                //console.log(devices);
                cb(data);
            });
        },

        /**
         *
         * @param cb
         */
        w: function (cb)
        {
            const data = {
                devices: []
            };

            // Looking for network devices and start api
            cosha.findDevices(function(resp) {
                data.devices = resp.devices;
                //console.log(devices);
                cb(data);
            });
        }
    },

    /**
     *
     */
    device: {

        /**
         *
         * @param cb
         */
        i: function (cb)
        {
            const data = {
                ip: cosha.getMyAddress(),
                id: '5858d286d1ebfa8a13a0676fd4ec0a89',
                rw: [
                    'r@D1:on/off',
                    'r@D2:on/off',
                    'w@D3:on/off',
                    'w@D4:on/off'
                ]
            }

            cb(data);
        },

        /**
         *
         * @param cb
         */
        r: function (cb)
        {
            const data = {
                devices: []
            };

            // Looking for network devices and start api
            cosha.findDevices(function(resp) {
                data.devices = resp.devices;
                //console.log(devices);
                cb(data);
            });
        },

        /**
         *
         * @param cb
         */
        w: function (cb)
        {
            const data = {
                devices: []
            };

            // Looking for network devices and start api
            cosha.findDevices(function(resp) {
                data.devices = resp.devices;
                //console.log(devices);
                cb(data);
            });
        }
    }
};

//
module.exports = cosha;



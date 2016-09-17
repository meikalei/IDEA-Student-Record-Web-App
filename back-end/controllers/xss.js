'use strict';

const _ = require('lodash');

module.exports = (req, res, next) => {
    _.forIn(req.body, (value, key) => {
        req.body[key] = req.body[key].replace('<', '&lt;');
        req.body[key] = req.body[key].replace('>', '&gt;');
    });

    next();
};
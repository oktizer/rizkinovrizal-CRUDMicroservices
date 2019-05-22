module.exports = function (TOOLS, MODULES, CONSTANTS) {
    const jwt = MODULES.JWT;

    return {
        /**
         * Generate JWT token based on payload object
         * @param payload {Object} Payload object
         */
        generateToken: function (payload) {
            return jwt.sign(payload, process.env.JWT_SECRET);
        },

        /**
         * Decode a JWT token to get the payload
         * @param token {String} JWT token string
         * @param callback {Function} Callback function
         */
        decodeJWT: function (token, callback) {
            jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
                if (err) {
                    err.code = err.message === 'invalid signature' ? 401 : 500;
                    callback(err, null);
                } else {
                    callback(null, decoded);
                }
            });
        }
    };
};

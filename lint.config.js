const jshint = require('gulp-jshint');

const lintConfig = {
    "strict": false,
    "quotmark": false,
    "browser": true,
    "devel": true,
    "globals": {
      "$": true,
    }
};

module.exports = lintConfig;
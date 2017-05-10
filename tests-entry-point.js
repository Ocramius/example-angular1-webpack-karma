const testsContext = require.context('./app', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);

const srcContext = require.context('./app', true, /^((?!\.spec)).js$/);
srcContext.keys().forEach(srcContext);

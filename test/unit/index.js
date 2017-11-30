// requires 所有在 `project/test/src/components/**/index.js` 中的测试
const tests = require.context('./spec/', true, /\.js$/);

tests.keys().forEach(tests);

// requires 所有在 `project/src/components/**/index.js` 中的组件
const components = require.context('../../src/', true, /\.js$/);

components.keys().forEach(components);

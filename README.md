# LIWY-UTILS JS工具类
> Author: LIWY
> <br/>
> WebSet: [www.oscafe.net](http://www.oscafe.net)
> <br/>
> GitHub: [https://github.com/liwyspace](https://github.com/liwyspace)


## 技术栈
- bower
- gulp
- webpack
- karma
- jasemine
- babel
- eslint

## 部署项目
1. 下载项目到本地：`git clone git@github.com:liwyspace/liwy-utils.git`
2. 进入项目目录：`cd liwy-utils`
3. 安装npm包：`npm install`
4. 安装bower包：`bower install`


## 命令备忘
jasmine
```bash
#生成jasmine配置文件
jasmine init
#执行所有测试用例
jasmine
#执行指定测试用例
jasmine spec/appSpec.js
```

node
```bash
#执行js脚本
node xxx.js
```

babel
```bash
npm install -g babel-cli
#通过babel解析后执行脚本
babel-node xxx.js
```


## 项目总结

### .babelrc配置详解
```js
{
    // 此项指明，转码的规则
    "presets": [
        // env项是借助插件babel-preset-env，下面这个配置说的是babel对es6,es7,es8进行转码，
        // modules用来将es6模块转换为其他格式(amd,umd,systemjs,commonjs)
        // 默认转换为commonjs，如果为false则不进行转换
        ["env", { "modules": false }],
        // 下面这个是不同阶段出现的es语法，包含不同的转码插件
        "stage-2"
    ],
    // 下面这个选项是引用插件来处理代码的转换，transform-runtime用来处理全局函数和优化babel编译，但无法转换新的api
    // transform-es2015-modules-umd可以将es6转换为通用模块，但是require好像没有用了
    "plugins": ["transform-runtime"],
    // 下面指的是在生成的文件中，不产生注释
    "comments": false,
    // 下面这段是在特定的环境中所执行的转码规则，当环境变量是下面的test就会覆盖上面的设置
    "env": {
        // test 是提前设置的环境变量，如果没有设置BABEL_ENV则使用NODE_ENV，如果都没有设置默认就是development
        "test": {
            "presets": ["env", "stage-2"],
            // instanbul是一个用来测试转码后代码的工具
            "plugins": ["istanbul"]
        }
    }
}
```

#### jasmine使用es6配置
安装babel-register
```bash
npm install --save-dev babel-register
```
修改 jasmine的配置文件jasmine.json
```json
{
  "helpers": [
    "../node_modules/babel-register/lib/node.js"
  ]
}
```
注意如果出现不认识import的错误，请确认babel是否配置正确。

#### karma设置es6配置(有些问题)
安装karma-babel-preprocessor
```bash
npm install --save-dev karma-babel-preprocessor
```
.babelrc配置
```json
{
    "plugins": ["transform-es2015-modules-umd"],
}
```
修改karma配置文件karma.conf.js
```js
module.exports = function(config) {
  config.set({
    files: [
      "src/**/*.js",
      "test/**/*.js"
    ],
    preprocessors: {
      "src/**/*.js": ["babel"],
      "test/**/*.js": ["babel"]
    },
    "babelPreprocessor": {
      // options go here
    }
  });
};
```


### karma通过karma-webpack设置es6解析



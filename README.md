# sensitive-code

> 检查代码里面是否包含敏感代码，避免上传一些敏感的代码

默认读取用户根目录的 .sensicode/config.js

```js
module.exports = {
  words: ['xxx']
}
```

## 安装

```shell
npm install -g sensitive-code
```

### 配合 husky 使用

- 安装依赖

`yarn add husky -D`

- 在 package.json 中添加

```js
"husky": {
  "hooks": {
    "pre-commit": "sensicode"
  }
}
```

### 零依赖

把 bin 目录下的执行文件 直接复制到项目的 .git/hooks/pre-commit


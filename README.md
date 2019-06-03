# sensitive-code

> 检查代码里面是否包含敏感代码，避免上传一些敏感的代码

默认读取用户根目录的 .sensicode/config.js

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

# uniapp-template

uniapp小程序项目模版  
包含：
- `request`方法，封装了`uni.request`方法，支持promise调用，支持中断请求
- `autoUpdate`方法，封装了uniapp的更新方法，支持自动更新
- `uniPromise`文件，使用promise封装了uniapp的showModal、showToast、showLoading、login、uploadFile、download File等方法
- `tabBar`组件，封装了uview-plus的tabBar组件，支持自定义tabBar
- `navBar`组件，封装了uview-plus的navBar组件，支持自定义navBar
- `baseToast`组件，封装了uview-plus的toast组件
- `baseModal`组件，封装了uview-plus的modal组件
- 小程序分包，支持分包加载

## technical framework

vue3 + uniapp + uview-plus + pinia + typescript + sass

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev:h5
pnpm run dev:mp-weixin
```

### Type-Check, Compile and Minify for Production

```sh
pnpm run build:h5
pnpm run build:mp-weixin
```

## 注意事项

- pinia最新版本会报错，需要使用2.0.33版本
- 使用uniapp的showLoading方法时，一些平台的样式不一致，推荐使用`baseToast`组件

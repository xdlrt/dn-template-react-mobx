# dn-template-react-mobx

这是一个应用了 Dawn 脚手架的 React & MobX 项目模板。关于模板，请看文档[介绍](https://alibaba.github.io/dawn/docs/#!/zh/guide/template)。

默认需要安装 react/react-dom/mobx/mobx-react，单元测试等基础设施都已配置完成。

## 使用

使用这个模板需要先安装好 [Dawn](https://github.com/alibaba/dawn)

### 初始化
```
mkdir dn-react-mobx-demo && cd dn-react-mobx-demo
dn init -t react-mobx
```

通过如上命令便可以完成项目的初始化

### 开发
```
dn dev
```

### 测试
```
dn test
```

### 构建
```
dn build
```

### 发布
```
dn publish
```

默认的发布配置是「发布到 npm」，请根据需要更改 `.dawn/pipe.yml` 进行 `publish` 配置
# 静态站点发布目录

这里预留未来的总入口和各子项目 Web 演示的静态发布文件。

目前尚未创建或发布站点。目录约定与接入方式见 [Web 部署约定](../docs/DEPLOYMENT.md)。

未来的发布结构：

```text
site/
├── index.html
├── 001-project-name/
│   └── index.html
└── 002-another-project/
    └── index.html
```

只整理浏览器所需的静态文件，不放开发依赖、环境配置或密钥。

# 多个 Web 演示的部署约定

当前仅初始化目录与约定，尚未创建网页、启用 GitHub Pages 或配置部署流程。

## 一个总入口，多个子路径

GitHub Pages 每个仓库最多对应一个站点，可托管静态 HTML、CSS 和 JavaScript。因此本仓库计划在同一站点下为各研究项目分配独立路径。

计划中的地址（尚未发布）：

```text
https://yydshly.github.io/0929_codex_project/                       总入口
https://yydshly.github.io/0929_codex_project/001-project-name/      项目 001
https://yydshly.github.io/0929_codex_project/002-another-project/   项目 002
```

来源：[GitHub Pages 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)。

## 源码与发布目录

- 演示源码放在 `projects/<编号-名称>/web/`，各项目自行选择技术栈并记录启动、构建命令。
- 静态发布文件整理到 `site/<编号-名称>/`，该目录中的 `index.html` 是对应演示入口。
- 总站点首页放在 `site/index.html`，后续按与总 README 相同的编号顺序展示演示入口。
- 未来使用 GitHub Actions 构建各演示，统一上传 `site/` 作为 Pages 发布产物；首个演示接入时再添加实际工作流。

## 子路径兼容

每个演示必须能在 `/0929_codex_project/<编号-名称>/` 下工作。配置框架的资源基础路径，避免把资源写成指向域名根目录的 `/assets/...`。

需要前端路由时，优先选择哈希路由，或明确设计静态页面路由方案；验收时检查直接打开、刷新、跨页面导航和图片加载。

纯静态页面可直接整理到发布目录。需要构建的项目应提交依赖锁文件，在子项目 README 中记录所需运行时版本和构建命令。

## 发布前记录

首个演示就绪时，在仓库 Settings → Pages 中选择 GitHub Actions，并接入实际构建与部署流程。部署成功且验证访问后，再将总 README 中的“未发布”替换为真实演示链接。

GitHub Pages 不运行服务端程序。有后端需求的项目应单独部署后端或提供明确标注的静态示例数据，并在子项目 README 中说明演示范围。客户端代码和发布目录中不得包含服务密钥。

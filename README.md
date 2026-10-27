# AI Fred 个人主页

GitHub Pages: https://fredjiang32.github.io/

原生 HTML / CSS / JavaScript，无需构建、依赖或付费服务。保留原仓库的肖像与微信二维码。

## 更新内容

编辑 `js/content.js` 后提交到 `main`，沿用仓库已有的 GitHub Pages 部署。

- `insights`：行业动态或技术追踪。`reviewedAt` 是收录/核验日期，不是事件发布日期；`fact` 写来源摘要，`opinion` 写个人判断，`sourceUrl` 写可核查的 HTTPS 原始来源。
- `jobs`：初始为空；真实岗位确认后再发布。仅 `status: "published"` 且更新日期有效的记录会显示。过期记录自动隐藏，日期按上海时区计算。搜索覆盖职位、公司、城市、方向、标签和摘要；筛选按 `category` 自动生成。
- 所有内容按纯文本渲染，不支持 HTML，防止误插入脚本。公开仓库不存储候选人资料或其他未授权公开的信息。

岗位记录格式（字段说明，不是正在招聘的岗位）：

```js
{
  id: "稳定的唯一标识",
  status: "draft", // 确认可公开后改为 published；closed/draft 不展示
  title: "职位名称",
  category: "技术方向",
  company: "公司名称或经确认的匿名描述",
  city: "工作地点",
  salary: "经确认可公开的薪资，留空显示薪资面议",
  tags: ["技术关键词"],
  summary: "一句话介绍岗位",
  responsibilities: ["工作内容"],
  requirements: ["任职要求"],
  updatedAt: "YYYY-MM-DD",
  expiresAt: "YYYY-MM-DD" // 可选，截止日当天仍展示
}
```

小红书链接已接入首屏、行业动态区和联系区。微信按钮打开可用键盘关闭的原生弹窗，使用原仓库二维码。岗位详情也使用同一联系入口。

## 本地预览

在仓库根目录运行任意静态 HTTP 服务。所有资源使用相对路径，可直接部署到 GitHub Pages，无需服务器后端。更新 CSS/JS 时同步调整 `index.html` 中资源查询版本，避免旧缓存。

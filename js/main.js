(() => {
  "use strict";
  const content = window.FRED_CONTENT || { insights: [], jobs: [] };
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const validDate = value => /^\d{4}-\d{2}-\d{2}$/.test(value || "") && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
  const dateNode = value => { const node = el("time", "", value.replaceAll("-", ".")); node.dateTime = value; return node; };
  const safeUrl = value => { try { const url = new URL(value); return url.protocol === "https:" ? url.href : null; } catch { return null; } };
  const externalLink = (label, url, className) => { const node = el("a", className, label); node.href = url; node.target = "_blank"; node.rel = "noopener noreferrer"; return node; };

  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  function closeMenu() { nav.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); }
  menu.addEventListener("click", () => { const open = menu.getAttribute("aria-expanded") !== "true"; menu.setAttribute("aria-expanded", String(open)); nav.classList.toggle("open", open); });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => { if (event.key === "Escape" && nav.classList.contains("open")) { closeMenu(); menu.focus(); } });

  const insights = document.querySelector("#insight-list");
  (content.insights || []).forEach((note, index) => {
    const url = safeUrl(note.sourceUrl);
    if (!url || !validDate(note.reviewedAt)) return;
    const article = el("article", index === 0 ? "insight featured" : "insight");
    const meta = el("div", "insight-meta");
    meta.append(el("span", "pill", note.kind), el("span", "", note.category), el("span", "", "收录 "), dateNode(note.reviewedAt));
    article.append(meta, el("h3", "", note.title), el("p", "", note.summary));
    const details = el("details");
    details.append(el("summary", "", "阅读观察"));
    const body = el("div", "insight-body");
    body.append(el("span", "note-label", "事件 / 来源摘要"), el("p", "", note.fact), el("span", "note-label", "FRED 的判断 · 个人观点"));
    (note.opinion || []).forEach(paragraph => body.append(el("p", "", paragraph)));
    body.append(externalLink(note.sourceLabel + " ↗", url, "source"));
    details.append(body); article.append(details); insights.append(article);
  });

  const dialog = document.querySelector("#wechat-dialog");
  document.addEventListener("click", event => { if (event.target.closest("[data-wechat]")) dialog.showModal(); });
  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });

  // Only explicitly published, dated jobs enter the public listing. Expiry follows Asia/Shanghai.
  const dateParts = new Intl.DateTimeFormat("en", { timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
  const today = ["year", "month", "day"].map(type => dateParts.find(part => part.type === type).value).join("-");
  const jobs = (content.jobs || []).filter(job => job.status === "published" && job.title && job.category && validDate(job.updatedAt) && (!job.expiresAt || (validDate(job.expiresAt) && job.expiresAt >= today)));
  if (!jobs.length) return;
  const controls = document.querySelector("#job-controls");
  const filters = document.querySelector("#job-filters");
  const search = document.querySelector("#job-search");
  const list = document.querySelector("#job-list");
  const count = document.querySelector("#job-count");
  let category = "全部";
  controls.hidden = false;
  ["全部", ...new Set(jobs.map(job => job.category))].forEach(label => {
    const button = el("button", "filter", label); button.type = "button"; button.setAttribute("aria-pressed", String(label === category));
    button.addEventListener("click", () => { category = label; filters.querySelectorAll("button").forEach(item => item.setAttribute("aria-pressed", String(item === button))); renderJobs(); });
    filters.append(button);
  });
  function renderJobs() {
    const query = search.value.trim().toLocaleLowerCase();
    const visible = jobs.filter(job => (category === "全部" || job.category === category) && [job.title, job.company, job.city, job.category, ...(job.tags || []), job.summary].join(" ").toLocaleLowerCase().includes(query));
    count.textContent = visible.length + " 个公开岗位";
    list.replaceChildren();
    if (!visible.length) { list.append(el("p", "no-results", "暂时没有符合条件的岗位。试试其他关键词，或直接和 Fred 聊聊。")); return; }
    visible.forEach(job => {
      const article = el("article", "job");
      const meta = el("div", "job-meta");
      [job.category, job.company || "公司信息沟通时介绍", job.city || "地点待沟通", job.salary || "薪资待沟通", job.education, job.experience].filter(Boolean).forEach(value => meta.append(el("span", "", value)));
      article.append(meta, el("h3", "", job.title), el("p", "", job.summary || "欢迎联系 Fred 了解工作内容与团队。"));
      const details = el("details"); details.append(el("summary", "", "查看岗位详情"));
      const body = el("div", "job-body");
      [["工作职责", job.responsibilities], ["任职要求", job.requirements], ["加分项", job.bonus]].forEach(([heading, items]) => { if (!items?.length) return; body.append(el("strong", "", heading)); const ul = el("ul"); items.forEach(item => ul.append(el("li", "", item))); body.append(ul); });
      const contact = el("button", "button primary", "和 Fred 了解这个岗位 ↗"); contact.type = "button"; contact.dataset.wechat = "";
      body.append(contact); details.append(body);
      const updated = el("p", "job-updated", "更新于 "); updated.append(dateNode(job.updatedAt));
      article.append(details, updated); list.append(article);
    });
  }
  search.addEventListener("input", renderJobs);
  renderJobs();
})();

/* Public, manually curated content. Add confirmed roles to jobs; never put private candidate data here. */
window.FRED_CONTENT = {
  insights: [
    {
      id: "kimi-training-environments",
      category: "后训练 / RL",
      kind: "行业动态",
      reviewedAt: "2026-10-27",
      title: "从 Kimi 新进展，看训练环境的价值",
      summary: "算法之外，我更关注那些能把沙箱、验证器和失败轨迹串起来的人。",
      fact: "Kimi 官方介绍，K3.1 Pro 在 K3 基础上增加后训练投入，并优化沙箱、rollout 调度和环境质量检查平台，以支持多个下游领域的联合强化学习。",
      opinion: ["我的判断是，能把训练环境做扎实的人，会更值得关注。一个任务有可信的验收方式，还能稳定、批量地跑，本身就是很重的研发工作。", "看这类人才，我会追问：模型究竟学到了什么？失败来自模型、任务，还是环境？能沿着失败轨迹找到答案，往往比多一个算法标签更有说服力。"],
      sourceLabel: "Kimi 官方技术说明",
      sourceUrl: "https://www.kimi.com/en/blog/kimi-k3-1-pro"
    },
    {
      id: "verl-training-systems",
      category: "RL Systems",
      kind: "技术追踪",
      reviewedAt: "2026-10-27",
      title: "读 RL 框架，也是在读团队分工",
      summary: "以 verl 为一个观察入口：把训练流程跑通的人，往往跨过了算法与系统的边界。",
      fact: "verl 是一个面向大语言模型强化学习后训练的开源框架。项目提供训练方法和系统实现，可从官方仓库查看代码与文档。",
      opinion: ["我看 RL 相关经历时，会进一步了解一个人负责哪一段：算法实现、数据流转、rollout，还是训练效率。", "项目名只能提供线索。具体解决过什么瓶颈、如何验证改进，才是判断能力和团队适配度的起点。"],
      sourceLabel: "verl 官方仓库",
      sourceUrl: "https://github.com/verl-project/verl"
    },
    {
      id: "sglang-inference",
      category: "AI Infra",
      kind: "技术追踪",
      reviewedAt: "2026-10-27",
      title: "聊推理优化，先把工作负载讲清楚",
      summary: "关注 SGLang 这类推理框架时，我更想知道性能改善背后的约束和取舍。",
      fact: "SGLang 是面向大语言模型和多模态模型的高性能服务框架。具体能力与支持范围以官方文档为准。",
      opinion: ["聊 Infra 人才，我会把问题落到具体场景：服务什么模型，输入输出多长，并发多少，目标是延迟、吞吐，还是成本。", "同一个优化放到不同负载下，价值可能很不一样。讲得清楚约束、基线和实际贡献，比单独报一个加速数字更有用。"],
      sourceLabel: "SGLang 官方仓库",
      sourceUrl: "https://github.com/sgl-project/sglang"
    }
  ],
  jobs: []
};

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
  jobs: [
    {
      id: "video-generation-algorithm-engineer",
      status: "published",
      title: "视频生成算法工程师",
      category: "多模态生成",
      education: "硕士及以上",
      experience: "3 年及以上经验",
      tags: ["AIGC", "GAN", "Diffusion Models", "视频生成", "图像生成", "3D", "预训练", "可控编辑"],
      summary: "面向图像、视频与 3D 生成，开展视觉生成基础模型设计与预训练，探索低成本、高品质生成和可控编辑。",
      responsibilities: [
        "从事 AIGC 领域的算法探索与落地开发，负责项目规划及前沿技术推进。",
        "负责视觉生成基础模型的框架设计与预训练，并面向实际应用进行优化。",
        "开展图像、视频、3D 图形等生成方向的研发，重点解决低成本、高品质生成及可控编辑等关键问题。"
      ],
      requirements: [
        "计算机、数学相关专业，硕士及以上学历，具备 3 年及以上工作经验。",
        "对 GAN、Diffusion Models 等生成式 AI 技术有深刻理解和前瞻判断。",
        "动手能力强，有技术追求，善于表达沟通与协同合作。"
      ],
      bonus: ["具备多模态内容生成经验，如视频生成相关项目经验。"],
      updatedAt: "2026-10-28"
    },
    {
      id: "code-llm-algorithm-researcher",
      status: "published",
      title: "代码大模型算法研究员",
      category: "Code / Agent",
      education: "硕士 / 博士",
      tags: ["Code Reasoning", "Coding Agent", "Computer Use", "GUI Agent", "Grounding", "预训练", "强化学习", "Long Horizon"],
      summary: "围绕 Code Reasoning、Coding Agent 和 Computer-Use Agent，通过大规模预训练与强化学习，提升代码能力及数字世界任务执行能力。",
      responsibilities: [
        "负责通用模型代码能力与代码专有模型的构建，探索数据收集、预训练、后训练（强化学习）及评测等方向。",
        "通过大规模预训练与强化学习提升 Code Reasoning 能力，以在专家级编程竞赛中超越人类水平为研究目标，并构建解决真实软件开发任务的 Coding Agent。",
        "建设 Computer-Use Agent（GUI Agent），通过鼠标、键盘、编码等操作执行数字世界任务。",
        "结合海量数字世界数据与大规模合成数据，提升 Computer-Use Agent 的 Grounding 能力。",
        "开展 Long-Horizon 强化学习训练，结合可扩展的多模态环境反馈，提升 Computer-Use Agent 的推理能力。"
      ],
      requirements: [
        "计算机科学、人工智能、机器学习等相关领域，硕士或博士毕业生。",
        "对上述前沿问题有持续热情，具备独立思考能力与系统性研究思维，敢于挑战现有范式，能够独立应用技术解决复杂问题。",
        "在相关方向具备科研或项目经历，发表过顶级会议相关论文，并具有深度学习、大模型等相关经验。"
      ],
      bonus: [
        "发表过具有一定学术影响力的顶级会议或期刊论文，包括 NeurIPS、ICML、ICLR、ACL、TPAMI 等。",
        "拥有知名开源项目，在开源社区具有较好影响力，或在竞赛中取得引领性研究成果。"
      ],
      updatedAt: "2026-10-28"
    },
    {
      id: "llm-training-expert-rl",
      status: "published",
      title: "大模型训练专家（强化学习方向）",
      category: "强化学习 / Infra",
      experience: "1 年及以上大模型训练工程经验",
      tags: ["Agentic RL", "Ray", "PPO", "DPO", "GRPO", "DAPO", "verl", "slime", "AReaL", "OpenRLHF", "ROLL", "Megatron", "FSDP", "vLLM", "SGLang", "千问"],
      summary: "建设千卡以上混合模态大模型强化学习训练框架，打通高性能推理与 Agent 训练链路，推动训练效果落地千问 App。",
      responsibilities: [
        "负责千卡以上大规模混合模态大模型强化学习训练框架建设，调研并实现先进的强化学习方法，探索算法与工程结合的训练方法创新，同时提升模型性能与训练效率。",
        "打通复杂工具调用场景的高性能推理与 Agent 训练系统，解决长程数据训练中的效率、训推一致性等难点，提升千问模型使用阿里生态工具（如闪购、飞猪等）完成用户真实任务的能力。",
        "参与奖励系统与工具系统交互的设计研发，构建高效、可持续扩展的架构；通过线上链路联合设计保障训练效果对齐，推动事实性、复杂任务规划与解决能力的提升落地千问 App。"
      ],
      requirements: [
        "具备 1 年及以上大模型训练工程经验，深度学习算法基础扎实，精通大模型常用训练框架，熟练使用编译、调试及性能分析工具。",
        "熟悉 PPO、DPO、GRPO、DAPO 等后训练方法及高效工程实现，具备大模型强化学习工程支持与效果优化经验。",
        "精通 Ray 分布式计算框架的开发实现；深入掌握 verl、slime、AReaL、OpenRLHF、ROLL 中一种或多种框架的系统实现，并具备二次开发能力。",
        "熟练掌握 Megatron、FSDP 等训练框架及 vLLM、SGLang 等推理框架，具备大模型训练、推理性能分析与优化能力。"
      ],
      bonus: [
        "具备大规模强化学习中算法与工程结合的训练效率优化经验，尤其是 Agentic 训练；或具备大规模分布式强化学习系统开发应用经验。",
        "具备强化学习算法调优经验。",
        "发表过强化学习方向的顶级会议论文。",
        "具备训练引擎或推理引擎开发经验。"
      ],
      updatedAt: "2026-10-28"
    }
  ]
};

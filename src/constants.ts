import { Difficulty, Question, QuestionType } from './types';

export const QUESTIONS: Question[] = [
  // ============================================================================
  // 初学阶段 (Beginner)
  // 标准：直觉、常识、社会心理学基础、简单的伦理和定义
  // ============================================================================
  {
    id: 'b1',
    text: '心理咨询师与求助者之间的距离属于（ ）。',
    options: ['A. 公众', 'B. 个人', 'C. 社交', 'D. 亲密'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner,
    explanation: '咨询关系属于职业社交关系，保持社交距离有助于专业工作的开展。'
  },
  {
    id: 'b2',
    text: '“男女搭配，干活不累”，这是一种社会（ ）现象。',
    options: ['A. 助长', 'B. 逍遥', 'C. 强化', 'D. 抑制'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner,
    explanation: '社会助长（Social Facilitation）指他人在场增加了个体的活动效率。'
  },
  {
    id: 'b3',
    text: '一般来说，最能准确反映人的内心状况的身体语言形式是（ ）。',
    options: ['A. 目光', 'B. 面部表情', 'C. 姿势', 'D. 空间距离'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner,
    explanation: '眼睛是心灵的窗户，目光最难掩饰。'
  },
  {
    id: 'b4',
    text: '婴儿出生一两天后就有笑的反应，这种笑的反应属于（ ）。',
    options: ['A. 有选择的社会性微笑', 'B. 自发性微笑', 'C. 无选择的社会性微笑', 'D. 条件反射的笑'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner,
    explanation: '早期的笑是生理性的、自发的。'
  },
  {
    id: 'b5',
    text: '家庭不是社会化的载体。',
    correctAnswer: 'False',
    type: QuestionType.TrueFalse,
    difficulty: Difficulty.Beginner,
    explanation: '家庭是儿童社会化的第一课堂，是最重要的社会化载体之一。'
  },
  {
    id: 'b6',
    text: '为了防控新冠肺炎疫情，人群聚集时应该保持（ ）。',
    options: ['A. 公众距离', 'B. 社交距离', 'C. 个人距离', 'D. 亲密距离'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b7',
    text: '人际关系是人与人在沟通与交往中建立起来的直接的行为上的联系。',
    correctAnswer: 'False',
    type: QuestionType.TrueFalse,
    difficulty: Difficulty.Beginner,
    explanation: '人际关系本质上是人与人之间心理上的联系。'
  },
  {
    id: 'b8',
    text: '在吃“大锅饭”的单位，最容易产生的现象是（ ）。',
    options: ['A. 社会促进', 'B. 社会抑制', 'C. 平衡理论', 'D. 社会懈怠'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner,
    explanation: '社会懈怠指在群体中个人付出的努力比单独时少的现象。'
  },
  {
    id: 'b9',
    text: '“完整接纳”求助者，并不意味着（ ）。',
    options: ['A. 对求助者的恶习无动于衷', 'B. 接纳求助者全部的优点和缺点', 'C. 充分尊重求助者的价值观', 'D. 接受求助者的光明面和消极面'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b10',
    text: '咨询方案中需要明确的求助者的权利是（ ）。',
    options: ['A. 遵守职业道德', 'B. 提供真实的资料', 'C. 提出中止咨询', 'D. 完成商定的作业'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b11',
    text: '倾听时容易出现的错误包括（ ）。',
    options: ['A. 不做道德性判断', 'B. 急于下结论', 'C. 轻视求助者问题', 'D. 转移求助者话题'],
    correctAnswer: ['B', 'C', 'D'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b12',
    text: '目光注视的一般规律（ ）。',
    options: ['A. 倾听时，注视对方双眼', 'B. 说话时比倾听时注视对方多一些', 'C. 开始说话时，将目光从对方身上移开', 'D. 讲话结束时，将目光重新回到对方身上'],
    correctAnswer: ['A', 'C', 'D'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b13',
    text: '老年期心理发展的总趋势是（ ）。',
    options: ['A. 认知活动的退行性变化', 'B. 人格出现偏差', 'C. 情感脆弱', 'D. 人际交往技能降低'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b14',
    text: '个体社会化的主要载体包括（ ）。',
    options: ['A. 家庭', 'B. 大众传媒', 'C. 学校', 'D. 交通工具'],
    correctAnswer: ['A', 'B', 'C'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b15',
    text: '心理咨询师与求助者之间除咨访关系之外，不能建立其他关系，这是（ ）。',
    options: ['A. 感情限制', 'B. 咨询目标限制', 'C. 职责限制', 'D. 中立态度限制'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner,
    explanation: '这属于避免双重关系的伦理要求。'
  },
  {
    id: 'b16',
    text: '以下属于违背心理咨询伦理的行为是（ ）。',
    options: ['A. 咨询过程中进行书面记录', 'B. 询问来访者的婚姻状况', 'C. 未经来访者同意录音录像', 'D. 难以胜任时对来访者进行转介'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b17',
    text: '心理咨询师在会谈中不断提问所起到的作用是( )。',
    options: ['A. 让求助者自我探索', 'B. 产生准确的信息', 'C. 跟随咨询师的思路', 'D. 形成依赖和责任转移'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b18',
    text: '咨询师使用虚假信息、夸大疗效、隐瞒自己专业局限等行为主要违背了诚信原则。',
    correctAnswer: 'True',
    type: QuestionType.TrueFalse,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b19',
    text: '一般单一性压力对人不一定是有害的。',
    correctAnswer: 'True',
    type: QuestionType.TrueFalse,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b20',
    text: '关于爱情，错误的说法是（ ）。',
    options: ['A. 具有浪漫色彩', 'B. 是一种高级情感', 'C. 幼儿也有爱情', 'D. 人际吸引最强烈的形式'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b21',
    text: '“心理正常” 意味着（ ）。',
    options: ['A. 包含精神病性症状在内的心理活动', 'B. 具备正常功能的心理活动', 'C. 包含心理不正常在内的心理活动', 'D. 一切可能的心理活动'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b22',
    text: '健康心理学侧重于研究（ ）。',
    options: ['A. 伤害身体健康的生活方式和心理活动', 'B. 会造成心理活动异常的各种内在机制', 'C. 心理因素引发的躯体疾病的诊断治疗', 'D. 各种心理活动基本规律和普遍性原则'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b23',
    text: '针对心理正常且心理健康人群所进行的咨询是（ ）。',
    options: ['A. 心理健康咨询', 'B. 发展性咨询', 'C. 鉴别性咨询', 'D. 治疗性咨询'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b24',
    text: '心理咨询能否成功主要取决于（ ）。',
    options: ['A. 心理咨询师的经验', 'B. 求助者的配合', 'C. 心理咨询师的修养', 'D. 家属们的配合'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b25',
    text: '心理咨询师在咨询关系中最重要是（ ）。',
    options: ['A. 增进来访者的利益和福祉', 'B. 遵守保密原则', 'C. 满足求助者的需求', 'D. 尊重求助者'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b26',
    text: '咨询阶段中最核心、最重要的实质阶段是（ ）阶段。',
    options: ['A. 诊断', 'B. 咨询', 'C. 巩固', 'D. 评估'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b27',
    text: '“真诚不等于说实话”的含义是（ ）。',
    options: ['A. 真诚与说实话之间没有联系', 'B. 表述真诚不能通过言语', 'C. 表达真诚应有助于求助者成长', 'D. 实话实说不利于表达真诚'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b28',
    text: '有关咨询师的信息可以告知来访者的是（ ）。',
    options: ['A. 私人电话号码', 'B. 私人微信', 'C. 咨询预约电话', 'D. 家庭住址'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b29',
    text: '以下咨询师和来访者属于双重关系的是（ ）。',
    options: ['A. 咨询师为自己的学生进行咨询', 'B. 为同事转介的来访者咨询', 'C. 来访者事先通过网络了解的咨询师', 'D. 由网络咨询变为面询'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b30',
    text: '在整理临床资料时，应该对来自求助者亲友和中介人的资料（ ）。',
    options: ['A. 进行可靠性验证，并做必要的说明', 'B. 直接使用，并作为重要的参考依据', 'C. 先行筛选，避免对求助者构成伤害', 'D. 注意排序，不对求助者形成暗示'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b31',
    text: '性心理咨询工作的基本原则是（ ）。',
    options: ['A. 性知识、性生理、性技术教育相统一', 'B. 性知识、性生理、性法制教育相统一', 'C. 性知识、性道德、性法制教育相统一', 'D. 性医学、性道德、性法制教育相统一'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b32',
    text: '在初诊接待阶段，要让求助者了解心理咨询( )。',
    options: ['A. 一定会越做越好', 'B. 跟着咨询师做即可', 'C. 不能解决哪些问题', 'D. 能迅速解决问题'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b33',
    text: '为了避免在初诊接待中出现紧张情绪，心理咨询师应该在接诊前（ ）。',
    options: ['A. 深入了解并记录求助者的人格特点', 'B. 掌握并能够熟练使用各种理论方法', 'C. 熟练掌握初诊接待的各项操作步骤', 'D. 熟练掌握各种临床心理测验的使用'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b34',
    text: '对摄入性会谈正确的理解是（ ）。',
    options: ['A. 不涉及咨询师初步观察到的疑点', 'B. 不能加入评价', 'C. 不涉及上级心理咨询师下达的目标', 'D. 不能加入提问'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b35',
    text: '婚姻关系的本质在于它的（ ）。',
    options: ['A. 社会性', 'B. 经济性', 'C. 繁衍性', 'D. 激情性'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b36',
    text: '收集求助者资料时最重要的是明确（ ）。',
    options: ['A. who（谁）', 'B. what（什么）', 'C. why（为什么）', 'D. how（怎样）'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b37',
    text: '情感反应的最有效方式是针对求助者（ ）的情感。',
    options: ['A. 现在的', 'B. 可能出现的', 'C. 过去的', 'D. 希望出现的'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b38',
    text: '倾听要以（ ）为基础。',
    options: ['A. 热情', 'B. 接纳', 'C. 积极', 'D. 关注'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b39',
    text: '咨询师不思进取、故步自封，不能有效保持其服务的专业水准，其违背了（ ）原则。',
    options: ['A. 善行', 'B. 诚信', 'C. 责任', 'D. 公正'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },
  {
    id: 'b40',
    text: '以下不属于《中国心理学会临床与咨询心理学工作伦理守则》所规定的心理咨询专业伦理的主要原则的是（ ）。',
    options: ['A. 善行', 'B. 诚信', 'C. 责任', 'D. 热情'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Beginner
  },

  // ============================================================================
  // 进阶阶段 (Intermediate)
  // 标准：需要逻辑思考、理论理解（皮亚杰/弗洛伊德/埃里克森）、归因、防御机制
  // ============================================================================
  {
    id: 'i1',
    text: '遗忘的进程通常是（ ）。',
    options: ['A. 先慢后快', 'B. 先快后慢', 'C. 倒 U 型曲线', 'D. U 型曲线'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate,
    explanation: '艾宾浩斯遗忘曲线表明遗忘是先快后慢的。'
  },
  {
    id: 'i2',
    text: '感觉适应指在外界刺激持续作用下感受性（ ）的现象。',
    options: ['A. 降低', 'B. 提高', 'C. 不变', 'D. 发生变化'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate,
    explanation: '适应可以表现为感受性提高（如暗适应）或降低（如入芝兰之室久而不闻其香）。'
  },
  {
    id: 'i3',
    text: '动机强度和活动效率的关系大致是（ ）型曲线。',
    options: ['A. 倒 U', 'B. U', 'C. 线性', 'D. N'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate,
    explanation: '耶克斯-多德森定律。'
  },
  {
    id: 'i4',
    text: '“狐狸吃不着葡萄，就说葡萄是酸的”是哪种防御机制的体现（ ）。',
    options: ['A. 投射', 'B. 升华', 'C. 转移', 'D. 合理化'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate,
    explanation: '合理化（Rationalization），又称文饰作用，即给自己找理由。'
  },
  {
    id: 'i5',
    text: '个体将不被社会所接受的冲动转化为社会赞许的行为，其所运用的防御机制是（ ）。',
    options: ['A. 合理化', 'B. 升华', 'C. 反向形成', 'D. 投射'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate,
    explanation: '升华是防御机制中唯一积极、建设性的机制。'
  },
  {
    id: 'i6',
    text: '按照马斯洛的理论，尊重他人的需要属于（ ）。',
    options: ['A. 生理需要', 'B. 生长性需要', 'C. 社会需要', 'D. 缺失性需要'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate,
    explanation: '生理、安全、归属与爱、尊重属于缺失性需要；自我实现属于生长性需要。'
  },
  {
    id: 'i7',
    text: '皮亚杰的心理发展观认为心理起源于（ ）。',
    options: ['A. 先天的成熟', 'B. 动作', 'C. 后天的经验', 'D. 吸吮'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i8',
    text: '艾里克森认为童年期（7岁～12岁）的主要发展任务是（ ）。',
    options: ['A. 获得勤奋感，克服自卑感', 'B. 获得完善感，避免失望或厌恶感', 'C. 获得自主感，克服羞耻感', 'D. 获得亲密感，避免孤独感'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i9',
    text: '精神分析理论认为本我的活动原则是（ ）。',
    options: ['A. 现实原则', 'B. 道德原则', 'C. 快乐原则', 'D. 社会原则'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate,
    explanation: '本我遵循快乐原则，自我遵循现实原则，超我遵循道德原则。'
  },
  {
    id: 'i10',
    text: '在遇到鱼和熊掌不可兼得时所体验到的动机冲突属于（ ）。',
    options: ['A. 双趋式冲突', 'B. 双避式冲突', 'C. 趋避式冲突', 'D. 双重趋避式冲突'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i11',
    text: '多血质的人其高级神经活动类型的基本特征是（ ）。',
    options: ['A. 强、平衡、灵活', 'B. 强、不平衡', 'C. 强、平衡、不灵活', 'D. 弱'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i12',
    text: '根据社会心理学家的研究，个体归因时遵循的主要原则包括（ ）。',
    options: ['A. 不变性原则', 'B. 折扣原则', 'C. 情感一致性原则', 'D. 协变原则'],
    correctAnswer: ['A', 'B', 'D'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i13',
    text: '咨询师对求助者说：“你的情绪问题是由于你的认知引起的，你需要改变你的认知，才能解决情绪困扰”，咨询师使用的技术包括（ ）。',
    options: ['A. 释义', 'B. 指导', 'C. 解释', 'D. 内容表达'],
    correctAnswer: ['B', 'C', 'D'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i14',
    text: '“最近发展区” 是指（ ）。',
    options: [
      'A. 儿童借助成人的帮助所达到的解决问题的水平',
      'B. 在独立活动中所达到的解决问题的水平',
      'C. 在有指导的情境下，儿童借助成人的帮助所达到的解决问题的水平与在独立活动中所达到的解决问题的水平之间的差距',
      'D. 儿童先天具有的水平和后天发展的水平的差异'
    ],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate,
    explanation: '这是维果茨基提出的概念。'
  },
  {
    id: 'i15',
    text: '咨询师在咨询过程中（ ）是热情的最好表达。',
    options: ['A. 以礼相待、事事关心', 'B. 积极提问', 'C. 认真、耐心、不厌其烦', 'D. 不做评判'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i16',
    text: '咨询师体验求助者的内心“如同”体验自己的内心，但永远不能变成“就是”，指的是咨询师表达共情（ ）。',
    options: ['A. 要因人而异', 'B. 要善于把握角色', 'C. 应把握时机', 'D. 善于使用躯体语言'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i17',
    text: '合理情绪疗法的 ABCDE 理论中，A 代表（ ）。',
    options: ['A. 诱发事件', 'B. 对事件的看法、解释及评价', 'C. 咨询的效果', 'D. 对个体的不合理信念进行辩论'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate,
    explanation: 'A(Activating Event), B(Belief), C(Consequence), D(Dispute), E(Effect)。'
  },
  {
    id: 'i18',
    text: '个体以自己的意愿为出发点，认为某一事物必定会发生或亦会发生的信念是( )。',
    options: ['A. 夸大或缩小', 'B. 过分概括化', 'C. 绝对化要求', 'D. 糟糕至极'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i19',
    text: '海德的 P-O-X 模式图中的“O”指( )。',
    options: ['A. 个体', 'B. 另一个对象', 'C. 他人', 'D. 重要他人'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate,
    explanation: 'P(Person), O(Other), X(Object)。'
  },
  {
    id: 'i20',
    text: '社会学习理论强调儿童习得社会行为的主要方式是（ ）。',
    options: ['A. 观察学习', 'B. 机体成熟', 'C. 替代性强化', 'D. 社会环境'],
    correctAnswer: ['A', 'C'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i21',
    text: '高层建筑失火，住在失火楼层的以上的人面临的是（ ）。',
    options: ['A. 双趋冲突', 'B. 趋避冲突', 'C. 双避冲突', 'D. 双重趋避冲突'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate,
    explanation: '前有狼后有虎，两个选择都想躲避，属于双避冲突。'
  },
  {
    id: 'i22',
    text: '使用开放式询问时，为了避免求助者产生被剖析的感觉，应该使询问（ ）。',
    options: ['A. 符合一定心理治疗理论框架', 'B. 符合求助者密切关注的问题', 'C. 建立在良好咨询关系基础上', 'D. 有助于校正求助者的价值观'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i23',
    text: '弗洛伊德认为，道德性焦虑中危险来自于超我。',
    correctAnswer: 'True',
    type: QuestionType.TrueFalse,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i24',
    text: '使用面质技术时 ，错误的做法是（ ）。',
    options: ['A. 使用尝试性面质', 'B. 不以事实为依据', 'C. 避免个人发泄', 'D. 避免无情攻击'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i25',
    text: '阳性强化法属于（ ）。',
    options: ['A. 精神分析疗法', 'B. 现实疗法', 'C. 行为疗法', 'D. 完形疗法'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i26',
    text: '“失魂落魄” 的状态，意味着个体处在“灾难征候群”的（ ）。',
    options: ['A. 警觉期', 'B. 惊吓期', 'C. 恢复期', 'D. 康复期'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i27',
    text: '解释是为求助者提供新的思维方法。',
    correctAnswer: 'True',
    type: QuestionType.TrueFalse,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i28',
    text: '心理咨询的目标不是解决躯体疾病，而是针对引起躯体疾病的心理因素。',
    correctAnswer: 'True',
    type: QuestionType.TrueFalse,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i29',
    text: '压力的中介系统包括（ ）。',
    options: ['A. 认知系统', 'B. 生物调节系统', 'C. 情绪系统', 'D. 社会支持系统'],
    correctAnswer: ['A', 'B', 'D'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i30',
    text: '罗杰斯强调的影响咨询结果的首要决定因素包括（ )。',
    options: ['A. 求助者的个性', 'B. 咨询师的个性', 'C. 咨询师的态度', 'D. 咨询关系的质量'],
    correctAnswer: ['B', 'C', 'D'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i31',
    text: '病理性错觉的特点是（ ）。',
    options: ['A. 能够进行自我校正', 'B. 属于感知综合障碍', 'C. 不能接受现实检验', 'D. 属于思维形式障碍'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i32',
    text: '在人本主义看来，“存在焦虑”是（ ）。',
    options: ['A. 存在与责任的冲突', 'B. 存在与潜能的冲突', 'C. 潜能与本能的矛盾', 'D. 本能与社会的矛盾'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i33',
    text: '兴奋性思维联想障碍的一种常见形式是（ ）。',
    options: ['A. 思维奔逸', 'B. 思维散漫', 'C. 被洞悉感', 'D. 妄想心境'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i34',
    text: '抑制性的思维联想障碍的一种常见形式是（ ）。',
    options: ['A. 思维迟缓', 'B. 思维云集', 'C. 被洞悉感', 'D. 妄想心境'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i35',
    text: '情感反应与现实刺激的性质不相称，这种表现可出现于（ ）。',
    options: ['A. 情感淡漠', 'B. 意志增强', 'C. 情绪倒错', 'D. 意志减退'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i36',
    text: '以过分要求严格与完美为主要特征的人格障碍是（ ）人格障碍。',
    options: ['A. 焦虑性', 'B. 强迫性', 'C. 偏执性', 'D. 分裂样'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i37',
    text: '“四面楚歌” 可以用来形容（ ）。',
    options: ['A. 同时性叠加压力', 'B. 一般性单一性生活压力', 'C. 继时性叠加压力', 'D. 破坏性压力'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i38',
    text: '求助者说 “您说我毕业是参加工作还是考研究生这件事上该怎么办呢”，这种依赖的形式是属于（ ）形式。',
    options: ['A. 不易察觉', 'B. 间接的', 'C. 阻抗', 'D. 直接的'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i39',
    text: '孩子考试取得好成绩后父母给予物质奖励，这种方法是（ ）。',
    options: ['A. 正强化', 'B. 负强化', 'C. 正惩罚', 'D. 负惩罚'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i40',
    text: '以下不属于放松训练的特点的是( )。',
    options: ['A. 简便易行', 'B. 容易受时间和地点的限制', 'C. 实用有效', 'D. 可提高求助者改善症状的速度'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i41',
    text: '心理咨询师对求助者说：“通过咨询，你产生了巨大变化，我为你感到高兴”，咨询师所使用的技术包括 （ ）。',
    options: ['A. 情感反应', 'B. 自我开放', 'C. 情感表达', 'D. 内容表达'],
    correctAnswer: ['B', 'C', 'D'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i42',
    text: '总是具有积极意义的心理防御机制是（ ）。',
    options: ['A. 压抑', 'B. 反向作用', 'C. 退行', 'D. 升华'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i43',
    text: '奥尔波特把人格特质分为两类，即（ ）。',
    options: ['A. 共同特质和个别特质', 'B. 共同特质和个人特质', 'C. 表面特质和根源特质', 'D. 表面特质和中心特质'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i44',
    text: '皮亚杰研究儿童道德发展规律时使用的是（ ）。',
    options: ['A. 自然观察法', 'B. 控制实验法', 'C. 道德两难故事法', 'D. 对偶故事法'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate,
    explanation: '科尔伯格使用的是道德两难故事法，皮亚杰使用的是对偶故事法。'
  },
  {
    id: 'i45',
    text: '希波克拉底的气质类型学说是 A 型人格特质的主要成分不包括（ ）。',
    options: ['A. 体型说', 'B. 星象说', 'C. 血型说', 'D. 体液说'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate,
    explanation: '希波克拉底提出的是体液说，题目可能在问不属于其他分类。'
  },
  {
    id: 'i46',
    text: '多血质的表现不包括（ ）。',
    options: ['A. 内向', 'B. 敏捷', 'C. 兴趣多变', 'D. 善交际'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i47',
    text: '社会行为是由（ ）引起，并对社会产生影响的反应和反应系统。',
    options: ['A. 社会因素', 'B. 现实生活', 'C. 周围环境', 'D. 即时情境'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i48',
    text: '角色承担者不得不退出舞台，放弃原有角色，这属于（ ）。',
    options: ['A. 角色冲突', 'B. 角色不清', 'C. 角色中断', 'D. 角色失败'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i49',
    text: '在有限经验的基础上形成的刻板印象往往具有（ ）的性质。',
    options: ['A. 积极', 'B. 双向作用', 'C. 消极', 'D. 定势作用'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i50',
    text: '对可控性因素的归因，使人们更可能对行为做出（ ）的预测。',
    options: ['A. 准确', 'B. 变化', 'C. 稳定', 'D. 系统'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i51',
    text: '在群体活动时，个体的侵犯性倾向于（ ）。',
    options: ['A. 减少', 'B. 保持稳定', 'C. 增加', 'D. 受到抑制'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i52',
    text: '态度的 ABC 模型中，B 指（ ）。',
    options: ['A. 行为', 'B. 情感', 'C. 感觉', 'D. 行为倾向'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate,
    explanation: 'A (Affect), B (Behavior tendency), C (Cognition)。'
  },
  {
    id: 'i53',
    text: '态度的特点不包括（ ）。',
    options: ['A. 内在性', 'B. 抽象性', 'C. 对象性', 'D. 稳定性'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i54',
    text: '解释社会促进和社会干扰现象的理论是（ ）。',
    options: ['A. 认知失调理论', 'B. 挫折侵犯学说', 'C. 优势反应强化说', 'D. 社会学习理论'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i55',
    text: '在竞争的条件下，人们倾向于把他人的失败内归因，这是一种（ ）。',
    options: ['A. 自我障碍', 'B. 自我价值保护倾向', 'C. 自我防卫', 'D. 动机性归因偏差'],
    correctAnswer: ['B', 'D'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i56',
    text: '关于态度转变的 P-O-X 模型，正确的说法包括（ ）。',
    options: ['A. P-O 之间的关系最重要', 'B. P-O 关系为肯定时的平衡为强平衡', 'C. P-O 关系为否定时的平衡为弱平衡', 'D. P-O 关系为否定时的不平衡为强不平衡'],
    correctAnswer: ['A', 'B', 'C'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i57',
    text: '塔尔德的模仿律包括（ ）。',
    options: ['A. 下降律', 'B. 几何级数律', 'C. 上升律', 'D. 先内后外律'],
    correctAnswer: ['A', 'B', 'D'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i58',
    text: '彩色的特性包括（ ）。',
    options: ['A. 饱和度', 'B. 明度', 'C. 照度', 'D. 色调'],
    correctAnswer: ['A', 'B', 'D'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i59',
    text: '社会需要包括（ ）的需要。',
    options: ['A. 求偶', 'B. 交往', 'C. 求知', 'D. 休息'],
    correctAnswer: ['B', 'C'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Intermediate
  },
  {
    id: 'i60',
    text: '按角色获得的方式可将角色分为（ ）。',
    options: ['A. 先赋角色', 'B. 功利角色', 'C. 表现角色', 'D. 成就角色'],
    correctAnswer: ['A', 'D'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Intermediate
  },

  // ============================================================================
  // 专业阶段 (Advanced)
  // 标准：硬性记忆（数字、日期、解剖部位）、具体量表分数、特定人名/实验
  // ============================================================================
  {
    id: 'a1',
    text: '科学心理学的创始人是（ ）。',
    options: ['A. W·詹姆斯', 'B. H·艾宾浩斯', 'C. W·冯特', 'D. S·弗洛伊德'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced,
    explanation: '1879年，冯特在莱比锡大学建立了世界上第一个心理学实验室。'
  },
  {
    id: 'a2',
    text: '躯体感觉中枢位于大脑皮层的（ ）。',
    options: ['A. 额叶', 'B. 颞叶', 'C. 枕叶', 'D. 顶叶'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a3',
    text: '视觉性言语中枢位于（ ）。',
    options: ['A. 角回', 'B. 颞中回', 'C. 额叶', 'D. 颞上回'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a4',
    text: '在 MMPI 的 399 题版本中，Q 量表原始得分超过（ ）分，就表明答卷无效。',
    options: ['A. 10', 'B. 12', 'C. 22', 'D. 30'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a5',
    text: '如果 SCL-90 采用 0～4 的 5 级评分，筛选阳性的标准是总分超过（ ）。',
    options: ['A. 70', 'B. 160', 'C. 90', 'D. 180'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a6',
    text: '16PF 在编制过程中主要使用了（ ）方法。',
    options: ['A. 方差分析', 'B. 因素分析', 'C. 经验效标', 'D. 理论效标'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a7',
    text: '罗杰·斯佩里通过（ ）实验证明大脑两半球功能的不对称性。',
    options: ['A. 割裂脑', 'B. 经典条件反射', 'C. 操作条件反射', 'D. 工具条件反射'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a8',
    text: '世界上第一个心理学实验室诞生于（ ）。',
    options: ['A. 海德堡大学', 'B. 哥廷根大学', 'C. 莱比锡大学', 'D. 慕尼黑大学'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a9',
    text: 'LES 共含有 48 条我国较常见的生活事件，其中不包括（ ）。',
    options: ['A. 应对方式问题', 'B. 家庭生活问题', 'C. 工作学习问题', 'D. 社交方面问题'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a10',
    text: '詹姆士的自尊公式是（ ）。',
    options: ['A. 自尊=成功/自信', 'B. 自尊=成功/抱负', 'C. 自尊=自信/抱负', 'D. 自尊=抱负/成功'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a11',
    text: '适应障碍的病程一般不超过（ ）。',
    options: ['A. 1 个月', 'B. 2 个月', 'C. 3 个月', 'D. 6 个月'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a12',
    text: 'MMPI 第一版共有 14 个量表，不属于效度量表的是 D 量表。',
    correctAnswer: 'True',
    type: QuestionType.TrueFalse,
    difficulty: Difficulty.Advanced,
    explanation: 'D量表（抑郁）属于临床量表，不是效度量表。'
  },
  {
    id: 'a13',
    text: '16PF 施测时的时间限制是 40 分钟。',
    correctAnswer: 'False',
    type: QuestionType.TrueFalse,
    difficulty: Difficulty.Advanced,
    explanation: '16PF 没有严格的时间限制。'
  },
  {
    id: 'a14',
    text: '按照 EPQ 中国常模标准，属于典型的内向的 E 量表 T 分划界值为（ ）。',
    options: ['A. 大于 61.5', 'B. 56.7 至 61.5', 'C. 38.5 至 43.3', 'D. 小于 38.5'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a15',
    text: '在卡特尔 16 种根源特质中，有的起源于体质因素，他称之为（ ）。',
    options: ['A. 素质特质', 'B. 动力特质', 'C. 能力特质', 'D. 气质特质'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a16',
    text: '按照中国常模结果，SAS 的标准分在 60-69 分之间者可能为（ ）。',
    options: ['A. 正常', 'B. 轻度焦虑', 'C. 中度焦虑', 'D. 重度焦虑'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a17',
    text: '我国《心理咨询师国家职业标准》(试用版)颁布于 2001 年。',
    correctAnswer: 'True',
    type: QuestionType.TrueFalse,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a18',
    text: '个体发展的第一反抗期大约发生在（ ）。',
    options: ['A. 1～2 岁', 'B. 3～4 岁', 'C. 7～8 岁', 'D. 13～14 岁'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a19',
    text: '研究发现，婴儿出现深度知觉的年龄在（ ）个月左右。',
    options: ['A. 1', 'B. 3', 'C. 6', 'D. 9'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced,
    explanation: '视崖实验证明了这一点。'
  },
  {
    id: 'a20',
    text: '桑德伯格提纲可以用来（ ）。',
    options: ['A. 整理归纳求助者一般资料', 'B. 了解求助者的精神状态', 'C. 采集求助者的背景资料', 'D. 了解求助者的行为特点'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a21',
    text: '短程心理咨询一般在（ ）内完成。',
    options: ['A. 2 周', 'B. 1-3 个月', 'C. 1 个月内', 'D. 3-6 个月'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a22',
    text: 'MMPI 中，精神衰弱量表的英文缩写是（ ）。',
    options: ['A. Pd', 'B. Pa', 'C. Pt', 'D. Sc'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a23',
    text: '根据心理能量所指向的身体部位，弗洛伊德把心理发展分为 4 个阶段。',
    correctAnswer: 'False',
    type: QuestionType.TrueFalse,
    difficulty: Difficulty.Advanced,
    explanation: '弗洛伊德分为5个阶段：口欲期、肛欲期、生殖器期、潜伏期、生殖期。'
  },
  {
    id: 'a24',
    text: '人耳对 16~20000 赫兹的声波最敏感。',
    correctAnswer: 'False',
    type: QuestionType.TrueFalse,
    difficulty: Difficulty.Advanced,
    explanation: '人耳最敏感的范围通常在 1000~4000 Hz。'
  },
  {
    id: 'a25',
    text: 'SDS 中反向项目的数量是（ ）个。',
    options: ['A. 6', 'B. 10', 'C. 8', 'D. 12'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a26',
    text: '根据霍兰德的观点，社会心理学的形成期是在（ ）。',
    options: ['A. 社会哲学阶段', 'B. 哲学思辨阶段', 'C. 经验描述阶段', 'D. 实证分析阶段'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a27',
    text: '麦孤独（W.McDougall）用（ ）来解释人类的社会行为。',
    options: ['A. 认知过程', 'B. 学习', 'C. 社会影响', 'D. 本能'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a28',
    text: '自尊=成功/抱负，这是詹姆士 1890 年在（ ）一书中提出来的。',
    options: ['A. 《社会心理学》', 'B. 《心理学原理》', 'C. 《社会心理学导论》', 'D. 《民族心理学》'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a29',
    text: '控制点理论的提出者是（ ）。',
    options: ['A. 勒温', 'B. 罗特', 'C. 华生', 'D. 特里普利特'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a30',
    text: '教学应该走在发展的前面，这是（ ）理论的观点。',
    options: ['A. 维果茨基', 'B. 皮亚杰', 'C. 柯尔伯格', 'D. 华生'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a31',
    text: '具体运算阶段的年龄范围大致在（ ）左右。',
    options: ['A. 0～2 岁', 'B. 2～6、7 岁', 'C. 6、7～11、12 岁', 'D. 11、12 岁及以后'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a32',
    text: '艾里克森把人格发展划分为（ ）个阶段。',
    options: ['A. 3', 'B. 6', 'C. 5', 'D. 8'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a33',
    text: '潜意识意识化，重组基本人格，是（ ）学派的咨询目标。',
    options: ['A. 完形', 'B. 精神分析', 'C. 行为', 'D. 交互分析'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a34',
    text: '认知领悟疗法的创始人是（ ）。',
    options: ['A. 艾利斯', 'B. 钟友彬', 'C. 许又新', 'D. 弗洛伊德'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a35',
    text: '“心理学有一个长的过去，但只有一个短的历史”，这是（ ）的名言。',
    options: ['A. 冯特', 'B. 艾宾浩斯', 'C. 勒温', 'D. 魏特海墨'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a36',
    text: 'MMPI 包含的重复题数量是（ ）个。',
    options: ['A. 16', 'B. 8', 'C. 12', 'D. 0'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a37',
    text: '瞬时记忆保持的时间在（ ）以内。',
    options: ['A. 1 秒', 'B. 2-3 秒', 'C. 1 分', 'D. 2-3 分'],
    correctAnswer: 'A',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a38',
    text: '视觉悬崖是研究婴儿的（ ）装置。',
    options: ['A. 形状知觉', 'B. 颜色知觉', 'C. 动作发展', 'D. 深度知觉'],
    correctAnswer: 'D',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a39',
    text: '人的记忆广度达到一生中的顶峰是在（ ）。',
    options: ['A. 幼儿期', 'B. 童年期', 'C. 少年期', 'D. 青年期'],
    correctAnswer: 'C',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a40',
    text: '模仿来解释人类社会行为的学者是( )。',
    options: ['A. 詹姆士', 'B. 塔尔德', 'C. 谢夫勒', 'D. 柏拉图'],
    correctAnswer: 'B',
    type: QuestionType.Single,
    difficulty: Difficulty.Advanced
  },
  {
    id: 'a41',
    text: '16PF 量表中乐群性高分者的人格特征是（ ）。',
    options: ['A. 冷淡', 'B. 环性情感', 'C. 外向', 'D. 分裂情感'],
    correctAnswer: ['B', 'C'], 
    type: QuestionType.Multi,
    difficulty: Difficulty.Advanced,
    explanation: '通常高分表示外向、热情、乐群。'
  },
  {
    id: 'a42',
    text: '根据《心理咨询师国家职业标准》（2005 版），正确的说法包括（ ）。',
    options: ['A. 心理咨询师需要掌握心理学的理论和技能知识', 'B. 心理咨询师只能进行心理咨询，不能进行心理治疗', 'C. 咨询关系是一种“求”和“帮”的关系', 'D. 心理咨询师帮助求助者解决心理问题和相关行为问题'],
    correctAnswer: ['A', 'C', 'D'],
    type: QuestionType.Multi,
    difficulty: Difficulty.Advanced
  }
];

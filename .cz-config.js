module.exports = {
	// type 类型（定义之后，可通过上下键选择）
	types: [
		{ value: 'feat', name: 'feat:          增加新功能' },
		{ value: 'fix', name: 'fix:           修复bug' },
		{ value: 'docs', name: 'docs:          修改文档' },
		{ value: 'style', name: 'style:         代码格式修改' },
		{ value: 'perf', name: 'perf:          性能优化' },
		{ value: 'build', name: 'build:         打包' },
		{ value: 'revert', name: 'revert:        版本回退' },
		{ value: 'style', name: 'style:         样式修改不影响逻辑' },
		{ value: 'test', name: 'test:          增删测试' },
	],

	// scope 类型（定义之后，可通过上下键选择）
	scopes: [
		['components', '组件相关'],
		['hooks', 'hook 相关'],
		['utils', 'utils 相关'],
		['styles', '样式相关'],
		['deps', '项目依赖'],
		['other', '其他修改'],
		// 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
		['custom', '以上都不是？我要自定义'],
	].map(([value, description]) => {
		return {
			value,
			name: `${value.padEnd(30)} (${description})`,
		}
	}),

	// 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。
	// allowCustomScopes: true,

	// allowTicketNumber: false,
	// isTicketNumberRequired: false,
	// ticketNumberPrefix: 'TICKET-',
	// ticketNumberRegExp: '\\d{1,5}',

	// 针对每一个 type 去定义对应的 scopes，例如 fix
	/*
  scopeOverrides: {
    fix: [
      { name: 'merge' },
      { name: 'style' },
      { name: 'e2eTest' },
      { name: 'unitTest' }
    ]
  },
  */

	// 交互提示信息
	messages: {
		type: '请选择提交类型(必填):',
		scope: '选择一个 scope (可选):',
		// 选择 scope: custom 时会出下面的提示
		customScope: '请输入文件修改范围(可选)',
		subject: '请简要描述提交(必填)',
		body: '请输入详细描述(可选)',
		breaking: '列出任何BREAKING CHANGES(破坏性修改)(可选)',
		footer: '请输入要关闭的issue(可选)',
		confirmCommit: '确认提交？(y/n)',
	},

	// 设置只有 type 选择了 feat 或 fix，才询问 breaking message
	allowBreakingChanges: ['feat', 'fix'],

	// 跳过要询问的步骤
	// skipQuestions: ['body', 'footer'],

	// subject 限制长度
	subjectLimit: 100,
	breaklineChar: '|', // 支持 body 和 footer
	// footerPrefix : 'ISSUES CLOSED:'
	// askForBreakingChangeFirst : true,
}

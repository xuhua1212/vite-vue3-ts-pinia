module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended',
		// 新增，必须放在最后面
		'plugin:prettier/recommended',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		eqeqeq: 'warn', // 全等
		'no-unused-vars': 'off', // 禁止出现未使用过的变量
		'@typescript-eslint/no-unused-vars': 'off', // 禁止未使用的变量
		'space-before-function-paren': 'off', // 强制在 function的左括号之前使用一致的空格
		'no-empty-function': 'off', // 禁止出现空函数
		'@typescript-eslint/no-empty-function': 'off', // 禁止空函数
		'no-undef': 'off', // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
		'@typescript-eslint/no-explicit-any': 'off', // 禁止any类型
		indent: 'off', // 强制使用一致的缩进
		'@typescript-eslint/no-var-requires': 'off', // 禁止require除导入语句外的语句
		'@typescript-eslint/ban-ts-comment': 'off', // 禁止@ts-<directive>评论或要求指令后的描述
		camelcase: 'off', // 强制使用骆驼拼写法命名约定
		'no-empty': 'off', // 禁止出现空语句块
		'no-new': 'off', // 禁止使用 new 以避免产生副作用
		'@typescript-eslint/no-non-null-assertion': 'off', // !使用后缀运算符禁止非空断言
		'@typescript-eslint/no-empty-interface': 'off', // 禁止声明空接口
		'@typescript-eslint/no-this-alias': 'off', // 禁止混叠this
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'off', // 在可选链表达式之后禁止非空断言
		'no-useless-constructor': 'off', // 用不必要的构造函数
		'no-extra-semi': 'off', // 禁止不必要的分号
		'@typescript-eslint/no-extra-semi': 'off', // 禁止不必要的分号
		'vue/multi-word-component-names': 'off', // vue组件命名
		'no-debugger': 'off', // 禁用 debugger
	},
}

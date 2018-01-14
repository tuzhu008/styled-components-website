import md from 'components/md'

const TaggedTemplateLiterals = () => md`
  ## 标签模板字符串

  标签模板字符串（Tagged Template Literals）是 ES6 中的一个新特性。
  它让你定义一个自定义的字符串插值规则，这就是我们如何创建样式化组件的方法。

  如果不进行插值，函数接收的第一个参数就是一个带有字符串的数组。

  \`\`\`jsx
  // 它们是等价的:
  fn\`some string here\`;
  fn([ 'some string here' ]);
  \`\`\`

  一旦你传入了插值，该数组包含传入的字符串，在插值的位置上进行分割。
  其余的参数都是插值，按顺序。

  \`\`\`jsx
  const aVar = 'good';

  // 它们是等价的：
  fn\`this is a \${aVar} day\`;
  fn([ 'this is a ', ' day' ], aVar);
  \`\`\`

  这有点麻烦，但这意味着我们可以在样式化组件中接收变量、函数或mixin(\`css\` 助手)，并将其转换为纯 css。

  如果你像了解更多关于标记木板字符串，请查看 Max Stoiber 的文章：[The magic behind 💅 styled-components](https://mxstbr.blog/2016/11/styled-components-magic-explained/)
`

export default TaggedTemplateLiterals

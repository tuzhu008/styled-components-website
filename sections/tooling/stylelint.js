import md from 'components/md'

const StylelintProcessor = () => md`
## Stylelint

  使用 [stylelint](http://stylelint.io/) lint 你的 [styled components](https://github.com/styled-components/styled-components)。

### 安装

你需要:

- \`stylelint\` (duh)
- 这个处理器，用来从 \`styled-components\` 提取样式
- [\`stylelint-config-styled-components\`](https://github.com/styled-components/stylelint-config-styled-components) 用来禁用与 \`styled-components\` 冲突的 stylelint 规则
- 你最喜欢的 \`stylelint\` 配置! (例如 [\`stylelint-config-standard\`](https://github.com/stylelint/stylelint-config-standard))

\`\`\`
(npm install --save-dev
  stylelint
  stylelint-processor-styled-components
  stylelint-config-styled-components
  stylelint-config-standard)
\`\`\`

### 设置

添加一个 \`.stylelintrc\` 文件到项目的根目录：

\`\`\`JSON
{
  "processors": ["stylelint-processor-styled-components"],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-styled-components"
  ],
  "syntax": "scss"
}
\`\`\`

> 为嵌套和插值支持设置 \`syntax\` 为 \`scss\` 是需要的！

然后需要运行 \`stylelint\`。
添加一个 \`lint:css\` 脚本到 \`package.json\`，它运行 \`stylelint\`，对所有样式化组件都有一个 glob:
（which runs \`stylelint\` with a glob to all of your styled components:）

\`\`\`JSON
{
  "scripts": {
    "lint:css": "stylelint './src/**/*.js'"
  }
}
\`\`\`

> 该处理器忽略不包含任何 \`styled-components\` 的 JavaScript 文件，
> 因此只要将其限制为 javascript（或 TypeScript），就不用担心会过于宽泛。

现在你可以通过运行脚本来 lint 你的 CSS 了! 🎉

\`\`\`
npm run lint:css
\`\`\`

> 注意，由于对 Stylelint 自定义处理器可能存在的限制，我们无法支持 \`--fix\` 选项

#### Webpack

如果你想在构建时 lint，而不是作为一个单独的命令，
您可以使用用于  Webpack 的 [\`stylelint-custom-processor-loader\`](https://github.com/emilgoldsmith/stylelint-custom-processor-loader)。

### \`stylelint-config-styled-components\`

当使用这个处理器时，一些 stylelint 规则会抛出无法阻止的错误，
如 [\`no-empty-source\`](https://stylelint.io/user-guide/rules/no-empty-source)
或
就像[\`no-empty-source\`](https://stylelint.io/user-guide/rules/no-empty-source) 或
[\`no-missing-end-of-source-newline\`](https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline)。
还有几个规则,我们需要加强，
如 [\`no-vendor-prefix\` rules](https://stylelint.io/user-guide/rules/property-no-vendor-prefix)。
( \`styled-components\` 自动地为您的代码添加供应商前缀，所以您不需要手动操作)


[\`stylelint-config-styled-components\`](https://github.com/styled-components/stylelint-config-styled-components)
将自动禁用导致冲突的规则。

> 您可以覆盖在自定义的 \`.stylelintrc\` 中的共享配置中定义的规则。

### 与其他库的用法

其他一些库也实现了带有标签模板字符串的 \`styled.x\` 模式。
这个处理器也会在标签模板字符串中 lint CSS，只要它们使用 \`styled\` 关键字。

如果您想要与另一个库使用该处理器，但是您也想要更改关键字(例如写 \`cool.div\` 而不是 \`styled.div\`)，
请使用 \`moduleName\` 的选项:

\`\`\`js
import cool from 'other-library';

const Button = cool.button\`
  color: blue;
\`
\`\`\`

\`\`\`json
{
  "processors": [["stylelint-processor-styled-components", {
      "moduleName": "other-library"
  }]]
}
\`\`\`

> 这个双数组是有目的的，但只有当你设置选项时才有必要，查看[处理器配置文档](https://stylelint.io/user-guide/configuration/#processors)。

> 我们仅官方地支持 \`styled-components\`，但是希望其他的库也能从处理器中受益。

### 插值标签

有时 \`stylelint\` 会抛出错误（例如 \`CssSyntaxError\`），即使你的 CSS 没有发生任何错误。
这通常是由于插值引起的，
更具体地说，处理器不知道你在插入什么。


一个简化的例子:

\`\`\`js
const something = 'background';

const Button = styled.div\`
  \${something}: papayawhip;
\`
\`\`\`

当您在样式中进行插值时，处理器无法知道它们是什么，因此请使它可以很好地猜测，并使用语法上等价的占位符值来替换它们。
因为 \`stylelint\` 不是一个代码流分析工具，所以它不能涵盖所有的边界情况，而且处理器会时不时地出错。

插值标记允许你告诉处理器插值是什么，以防它猜错；
然后，它可以用基于标签的语法正确的值替换插值。

例如:

\`\`\`js
const something = 'background';

const Button = styled.div\`
  // 告诉处理器 "something" 是一个属性
  \${/* sc-prop */ something}: papayawhip;
\`
\`\`\`

现在处理器知道 \`something\` 插值是一种属性，它可以用一个属性代替插值。


要标记插值，请在插值的开始或结束处添加注释。
(\`\${/* sc-tag */ foo}\` 或 \`\${bar /* sc-tag */}\`) 标签以 \`sc-\` 开始，并且，如果被指定，标签覆盖处理器对插值的猜测。

#### Tags

支持标记的完整列表:

- \`sc-block\`
- \`sc-selector\`
- \`sc-declaration\`
- \`sc-property\`
- \`sc-value\`

> 如果你对词汇表有疑问你可以参考[这个 CSS 词汇表](http://apps.workflower.fi/vocabs/css/en)

例如，当你插入另一个样式化组件时，你真正插入的是它的唯一的选择器。
因为处理器不知道这一点，你可以告诉它在 linting 时用一个选择器来替换它:

\`\`\`js
const Wrapper = styled.div\`
  \${/* sc-selector */ Button} {
    color: red;
  }
\`;
\`\`\`

您还可以使用缩写标记来避免代码的混乱。例如:

\`\`\`js
const Wrapper = styled.div\`
  \${/* sc-sel */ Button} {
    color: red;
  }
\`;
\`\`\`

##### \`sc-custom\`


**\`sc-custom\` 是用来作为最后的逃生出口的。如果可能的话，最好使用标准标记！**

除了上面的标准标记外，处理器还具有 \`sc-custom\` 标签，
允许你覆盖更多的独特和不寻常的边界情况。
使用 \`sc-custom\` 标记，您可以决定占位符值将是什么。

例如:

\`\`\`js
// 基于通过 theme 传入的语言设置来在左和右之间的切换
const rtlSwitch = props => props.theme.dir === 'rtl' ? 'left' : 'right';

const Button = styled.button\`
  background: green;
  // 告诉处理器使用 "left" 来替换插值
  // 当 linting 时
  margin-\${/* sc-custom 'left' */ rtlSwitch}: 12.5px;
\`;
\`\`\`

### Syntax notes

#### 在 JS/CSS 种关闭规则


同时在标签模板字符串内和之外使用
\`stylelint-disable\` 注释来关闭规则
（对于所有允许的语法，请参见 [stylelint 文档](https://stylelint.io/user-guide/configuration/#turning-rules-off-from-within-your-css)）

\`\`\`js
import React from 'react';
import styled from 'styled-components';

// 在标签模板字符串中禁用 stylelint
const Wrapper = styled.div\`
  /* stylelint-disable */
  background-color: 123;
\`;

// 或从标签模板字符串周围的 JavaScript
/* stylelint-disable */
const Wrapper = styled.div\`
  background-color: 123;
\`;
\`\`\`

#### 模板字符串样式和缩进

为了使 stylelint 正确应用缩进规则，
处理器需要对样式进行一些自以为是的预处理，
这就导致我们只能正式支持一种缩进样式。
（支持的样式是所有文档中显示的“默认”样式）

最重要的是，将关闭的后反标记放在缩进的基础级别，如下所示:

**正确**

\`\`\`js
if (condition) {
  const Button = styled.button\`
    color: red;
  \`
}
\`\`\`

**错误**

\`\`\`js
if (condition) {
  const Button = styled.button\`
    color: red;
\`
}
\`\`\`

\`\`\`js
if (condition) {
  const Button = styled.button\`
    color: red;\`
}
\`\`\`

也可能是其他的标签模板字符串样式是碰巧支持的，但是除非使用了上面的样式，否则不会处理缩进。
`

export default StylelintProcessor

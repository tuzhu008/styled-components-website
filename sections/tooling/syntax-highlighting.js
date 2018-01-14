import md from 'components/md'

const SyntaxHighlighting = () => md`
  ## 语法高亮
  在模板字符串中编写 CSS 时，你曾经失去的一件事是语法高亮。
  我们正在努力在所有编辑器中进行正确的语法高亮显示。
  我们目前支持 Atom，Visual Studio Code，WebStorm 和 Sublime Text。

  正确高亮显示时，这就是它的样子：

  <img alt="Syntax highlighted styled component" src="http://imgur.com/k7h45c3.jpg" height="250px" />

### Atom

[**@gandm**](https://github.com/gandm)，\`language-babel\` 的作者, 增加了 Atom 中对 \`styled-components\` 的支持!

要获得正确的语法高亮显示，您所要做的就是为您的 JavaScript 文件安装和使用 \`language-babel\` 包！

### Sublime Text

这是由 [@garetmckinley](https://github.com/garetmckinley)
创建的 [open PR](https://github.com/babel/babel-sublime/pull/289)，
用来为 \`styled-components\` 添加到 \`babel-sublime\` 的支持。
如果你想让 PR 登陆，可以自由👍发表评论，让维护人员知道这是必要的！）

一旦这个 PR 被合并，一个新的版本发布了，
你所要做的就是安装和使用 \`babel-sublime\` 来高亮你的 JavaScript 文件！

### Visual Studio Code

[**@gandm**](https://github.com/gandm) 的 language-babel 已经被
[Michael McDermott](https://twitter.com/michaelgmcd)
移植到 VSCode 下的 [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
它提供了同样的一体化解决方案，用于 Babel 的语法高亮显示，其中包含了 styled-components。

如果你想保持你的当前的 JavaScript 语法高亮显示,
你可以使用 [vscode-styled-components](https://github.com/styled-components/vscode-styled-components)
扩展来为你的 Javascript 文件提供 styled-components 语法高亮。
你可以像往常一样在 [Marketplace](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components) 安装它。

### VIM / NeoVim

[\`vim-styled-components\`](https://github.com/fleischie/vim-styled-components)
插件为您在 Javascript 文件中提供语法高亮。
使用你的平常的插件管理器安装它，如 [Plug](https://github.com/junegunn/vim-plug)、
[Vundle](https://github.com/VundleVim/Vundle.vim)、
[Pathogen](https://github.com/tpope/vim-pathogen) 等

另外，如果你正在寻找一个极好的 JavaScript 语法包，你永远不会错 [YAJS.vim](https://github.com/othree/yajs.vim)。

### WebStorm, IntelliJ IDEA, PhpStorm, PyCharm, and RubyMine

[\`webstorm-styled-components\`](https://github.com/styled-components/webstorm-styled-components)
插件为模板字符串中的 CSS 属性和值添加了代码实现和高亮。
它还提供了插值中的 JavaScript 符号的代码实现和导航。
您可以从 IDE 安装它：转到 \`Preferences | Plugins\` 并搜索 \`Styled Components\`。


### 其他编辑器

我们可以使用你的帮助来获得支持其他编辑的语法高亮！
所有这些语法突出显示都是由 Styled Components 社区构建的，
所以如果您想在你的编辑器开启语法高亮，我们很乐意看到它。
`

export default SyntaxHighlighting

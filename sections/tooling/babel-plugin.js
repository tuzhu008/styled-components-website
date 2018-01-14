import md from 'components/md'

const BabelPlugin = () => md`
  ## Babel 插件 | v2

  这个插件增加了对服务器端渲染的支持，为样式的压缩提供了一个更好的调试体验。

  ### 用法

  首先，安装它:

  \`\`\`
  npm install --save-dev babel-plugin-styled-components
  \`\`\`

  然后，添加它到 babel 配置：

  > ⚠️ \`\`\`.babelrc\`\`\` 文件中的插件调用顺序很重要。
  > 如果你在你的 babel 配置中使用 env 属性，那么把这个插件放到到 plugins 数组是不够的。
  > 相反，它需要放在每个 env 的 plugins 数组中，以保持它第一个被执行。
  > 查看 [this](https://github.com/styled-components/babel-plugin-styled-components/issues/78) 获得更多信息。
  \`\`\`js
  {
    "plugins": ["babel-plugin-styled-components"]
  }
  \`\`\`

  ### 服务端渲染

  > 默认情况下，这个选项是关闭的

  通过为每个样式化组件添加一个唯一的标识符，
  这个插件可以避免由于客户端和服务器上不同的类生成而导致的校验和不匹配。
  如果你不使用这个插件，并尝试服务器端渲染样式化组件 React 会抱怨。

  可以使用 \`ssr\` 选项启用它：

  \`\`\`js
  {
    "plugins": [
      ["babel-plugin-styled-components", {
        "ssr": true
      }]
    ]
  }
  \`\`\`

  ### 更好的调试

  此选项将组件的名称和 displayName 添加到附加到 DOM 节点的类名称。
  在浏览器的 DevTools 中，您将看到：
  \`<button class="Button-asdf123 asdf123" />\`
  而不仅仅是 \`<button class="asdf123" />\`。

  这也增加了在 React DevTools 中显示组件真实名称的支持。
  考虑编写一个渲染 \`button\` 元素的样式化组件，被称为 \`MyButton\`。
  它通常会显示为所有组件的 \`<styled.button>\`，但是通过这个插件，它们显示为 \`<MyButton />\`。

  这样可以更轻松地找到您的组件并找出它们在您的应用中的位置。

  如果您不需要此功能，可以使用 \`displayName\` 选项禁用它：

  \`\`\`
  {
    "plugins": [
      ["babel-plugin-styled-components", {
        "displayName": false
      }]
    ]
  }
  \`\`\`

  ### 预处理

  > 这是实验性的我们还不知道所有的限制和缺陷!
  > 现在考虑这个非生产准备. ⚠️

  这个插件用 stylis 预处理你的样式，并在样式化组件上使用 \`no-parser.js\` 入口点。
  这有效地消除了运行时捆绑包中的 stylis，并应该稍微提高运行时性能和缩小捆绑包的大小。

  它会自动禁用 \`minify\` 选项，因为 stylis 已经在 CSS上 做了一些压缩。

  您可以使用 \`preprocess\` 选项启用预处理：


  \`\`\`js
  {
    "plugins": [
      ["babel-plugin-styled-components", {
        "preprocess": true
      }]
    ]
  }
  \`\`\`

  ### 压缩

  > 默认情况下，这个选项是打开的。
  > 如果您遇到了顺坏的 CSS 结果，请关闭它并打开一个问题。

  这个插件将您的样式缩小到标记的模板字符串中，有效减少包大小。

  在极少数情况下，此操作可能会破坏您的样式，因此，如果在生产构建中启用了此选项，我们建议在开发中保持此选项。

  您可以使用 \`minify\` 选项禁用压缩：

  \`\`\`js
  {
    "plugins": [
      ["babel-plugin-styled-components", {
        "minify": false
      }]
    ]
  }
  \`\`\`

  ### 模板字符串转换


  我们将 \`styled-components\` 标签模板字符串转换成比 Babel 通常所做的更小的表示，
  因为 \`styled-components\` 模板字符串不需要100％符合规范。

  阅读更多关于[标签模板字符串](#tagged-template-literals)部分的解释。

  您可以使用 \`transpileTemplateLiterals\` 选项关闭此特性。


  \`\`\`js
  {
    "plugins": [
      ["babel-plugin-styled-components", {
        "transpileTemplateLiterals": false
      }]
    ]
  }
  \`\`\`
`

export default BabelPlugin

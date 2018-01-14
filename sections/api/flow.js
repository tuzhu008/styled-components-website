import md from 'components/md'

const Flow = () => md`
  ## Flow


  样式化组件具有优秀的的 [Flow](https://flowtype.org) 支持，可以帮助您在使用公共 API 时发现输入错误。

  要使用 Flow 和样式化组件的的公共 api，我们建议您在 \`flow-typed\` 中使用库定义。
  要安装它，您可以使用 \`flow-typed\` 命令行接口或从 git 存储库手动下载它，
  并将其存储在与 \`flowconfig\` 相同目录的 \`flow-typed/\` 夹中。

  ### 安装和定义

  \`\`\`bash
  npm i -g flow-typed # 如果你还没有 flow-typed
  flow-typed install styled-components@<version>
  \`\`\`

  > 如果你在 npm >= 5.2 ，你可以简单地使用 [npx](https://github.com/zkat/npx)

  ### 忽略 \`styled-components\` 源文件

  你应该添加下面的代码行到你的 \`.flowconfig\`，如果遇到了 Flow 错误，
  如果您遇到了 Flow 错误，
  这些错误来自于您的 \`node_modules\` 目录中的 \`styled-components\` 包，
  那么您应该向您的 \`.flowconfig\` 添加下面的代码行:

  \`\`\`
  [ignore]
  .*/node_modules/styled-components/.*
  \`\`\`
`

export default Flow

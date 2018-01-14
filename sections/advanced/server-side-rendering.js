import md from 'components/md'

const ServerSideRendering = () => md`
  ## 服务端渲染 | v2

  styled-components 支持并发的服务端渲染，使用 stylesheet rehydration。
  基本的思想是，每次在服务器上渲染应用程序时，都可以创建一个 \`ServerStyleSheet\`，
  并向您的 React 树添加一个提供程序(provider)，该树通过上下文 API 接受样式。

  这不会影响全局样式，例如 \`keyframes\` 或 \`injectGlobal\`，
  允许您使用带有 React DOM 的 SSR 的样式化组件，或者甚至是 Rapscallion。


  基本的 API 如下:

  \`\`\`jsx
  import { renderToString } from 'react-dom/server'
  import { ServerStyleSheet } from 'styled-components'

  const sheet = new ServerStyleSheet()
  const html = renderToString(sheet.collectStyles(<YourApp />))
  const styleTags = sheet.getStyleTags() // or sheet.getStyleElement()
  \`\`\`

  \`collectStyles\` 方法将你的元素封装到一个提供程序种。你也可以选择直接使用
  \`StyleSheetManager\` 提供程序，而不是这个方法。只是确保不要在客户端使用它。

  \`\`\`jsx
  import { renderToString } from 'react-dom/server'
  import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

  const sheet = new ServerStyleSheet()
  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <YourApp />
    </StyleSheetManager>
  )

  const styleTags = sheet.getStyleTags() // or sheet.getStyleElement()
  \`\`\`

  \`sheet.getStyleTags()\` 返回一个多 \`<style>\` 标签的字符串。
  在将 CSS 字符串添加到 HTML 输出时，需要考虑到这一点。

  另外，\`ServerStyleSheet\` 实例也有一个 \`getStyleElement()\` 方法，这个方法返回一个 React 元素组成的数组。

  ### Next.js


  基本上，您需要添加一个自定义的 \`pages/_document.js\`(如果你没有的话)。
  然后[复制样式化组件的逻辑](https://github.com/zeit/next.js/tree/master/examples/with-styled-components/pages/_document.js)，
  以将服务器端渲染的样式注入到 \`<head>\` 中。

  您还需要自定义 \`.babelrc\`，并使用 \`babel-plugin-styled-components\`。

  参考 Next.js 仓库中的 [示例](https://github.com/zeit/next.js/tree/master/examples/with-styled-components)
  来获得最新的使用示例。
`

export default ServerSideRendering

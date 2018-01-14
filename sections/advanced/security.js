import md from 'components/md'

const Security = () => md`
  ## 安全

  由于 styled-components 允许您使用任意输入作为插值，所以您必须小心地清理该输入。
  使用用户输入作为样式可能导致在用户的浏览器中对任何 CSS 进行计算，攻击者可以在您的应用程序中放置这些 CSS。

  这个示例展示了用户输入的糟糕程度甚至可能导致 API 端点在用户代表上被调用。

  \`\`\`jsx
  // Oh no! The user has given us a bad URL!
  const userInput = '/api/withdraw-funds';

  const ArbitraryComponent = styled.div\`
    background: url(\${userInput});
    /* More styles here... */
  \`;
  \`\`\`

  非常小心!这显然是一个虚构的例子，但是 CSS 注入可能是不明显的，并且会产生不好的影响。
  一些 IE 版本甚至在 url 声明中执行任意的 JavaScript。

  有一个即将到来的标准，用来清理来自 JavaScript 的 CSS，[\`CSS.escape\`](https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).
  目前尚未在浏览器上得到很好的支持, 所以我们推荐在应用程序中使用 [polyfill by Mathias Bynens](https://github.com/mathiasbynens/CSS.escape) 。
`

export default Security

import md from 'components/md'

const MediaTemplates = () => md`
  ## 媒体模板

  当你开发一个响应式 web 应用时，媒体查询是一个不可或缺的工具。

  下面是一个非常简单的例子。它向我们展示了一个基础的组件改变它的背景颜色，一旦屏幕的宽度小于 \`700px\`。

  \`\`\`react
  const Content = styled.div\`
    background: papayawhip;
    height: 3em;
    width: 3em;

    @media (max-width: 700px) {
      background: palevioletred;
    }
  \`;

  render(
    <Content />
  );
  \`\`\`

  由于媒体查询很长，并且经常在应用程序中重复，所以为它们创建一个模板是很有用的。

  由于 JavaScript 的功能特性，您可以在媒体查询中轻松地定义自己标记模板字符串来包装样式。让我们重写最后一个例子来试一下。

  \`\`\`react
  const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 376
  }

  // 遍历 sizes 并创建一个媒体模板
  const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css\`
      @media (max-width: \${sizes[label] / 16}em) {
        \${css(...args)}
      }
    \`

    return acc
  }, {})

  const Content = styled.div\`
    height: 3em;
    width: 3em;
    background: papayawhip;

    /* Now we have our methods on media and can use them instead of raw queries */
    \${media.desktop\`background: dodgerblue;\`}
    \${media.tablet\`background: mediumseagreen;\`}
    \${media.phone\`background: palevioletred;\`}
  \`;

  render(
    <Content />
  );
  \`\`\`
`

export default MediaTemplates

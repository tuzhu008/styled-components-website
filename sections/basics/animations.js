import md from 'components/md'

const Animations = () => md`
  ## 动画


  带有 \`@keyframes\` 的 CSS 动画没有作用于单个组件，但你仍然不希望它们是全局的。
  这就是为什么我们导出一个 \`keyframes\` 助手，它将为您的关键帧生成一个唯一的名称。
  然后，您可以在整个应用程序中使用该唯一名称。

  这样，您就可以获得使用 JavaScript 的所有好处，避免名称冲突，并像往常一样获得关键帧：

  \`\`\`react
  // keyframes 返回一个基于关键帧内容的哈希的唯一名称
  const rotate360 = keyframes\`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  \`;

  // 这里我们创建一个组件，这个组件会在2秒内旋转我们传入的每个东西
  const Rotate = styled.div\`
    display: inline-block;
    animation: \${rotate360} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
  \`;

  render(
    <Rotate>&lt; 💅 &gt;</Rotate>
  );
  \`\`\`
`

export default Animations

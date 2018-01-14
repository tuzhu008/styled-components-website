import md from 'components/md'

const CSSFrameworks = () => md`
  ## 可以使用 CSS 框架吗?

  将现有的 CSS 框架与样式化组件集成在一起是非常容易的！您可以在组件旁边使用它现有的类名。

  假设您有一个现有的应用程序，其中有一些 CSS，其中有类:。 \`.small\` 和 \`.big\`。
  在下面的例子中，试着使用 \`.big\` 交换 \`.small\`:

  \`\`\`react
  const Button = styled.button.attrs({
    className: 'small',
  })\`
    background: black;
    color: white;
    cursor: pointer;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
  \`;

  render(
    <div>
      <Button>Styled Components</Button>
      <Button>The new way to style components!</Button>
    </div>
  );
  \`\`\`

  请阅读 [attrs 方法](/docs/api#attrs) 来学习如何将任意的属性传递给一个样式化组件，而不需要包装它。
`

export default CSSFrameworks

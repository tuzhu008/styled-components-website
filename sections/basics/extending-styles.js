import md from 'components/md'

const ExtendingStyles = () => md`
  ## 扩展样式 | v2

  很多时候你可能想使用一个组件，但是对于一个单一的案例稍微改变一下。
  现在你可以传入一个插值的函数，并根据一些 props 来改变它们，但是这样重写一次样式是相当费力的。

  要以更简单的方式执行此操作，可以在组件上调用 \`extend\` 来生成另一个。
  像其他任何样式化组件一样设置它的样式
  它覆盖了来自初始组件的重复样式，并保留其他。

  在这里，我们使用上一节中的按钮创建一个特殊的按钮，并使用一些颜色相关的样式进行扩展。


  \`\`\`react
  // Button 来自上一节中不带插值的组件
  const Button = styled.button\`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  \`;

  // 我们使用一些额外的样式来扩展 Button
  const TomatoButton = Button.extend\`
    color: tomato;
    border-color: tomato;
  \`;

  render(
    <div>
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
    </div>
  );
  \`\`\`

  我们可以看到，新的 \`TomatoButton\` 将类似于 \`Button\`，我们只增加了两条新规则。

  > 如果知道 \`Comp\` 是一个样式化组件，你应该只使用 \`Comp.extend\`。
  > 如果你是从其他文件安或第三方库中导入的，使用 \`styled(Comp)\` 更好，
  > 因为它可以完成相同的事情，而且可以与任何 React 组件一起工作。
  > 阅读更多关于 [ \`Comp.extend\` 和 \`styled(Comp)\` 的区别](/docs/faqs#when-should-i-use-)。


  在极少数情况下，您可能需要更改样式化组件渲染的标签或组件。
  对于这种情况，我们有一个逃生舱口(escape hatch)。
  您可以使用 \`withComponent\` 来扩展样式并使用完全不同的标签。

  \`\`\`react
  const Button = styled.button\`
    display: inline-block;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  \`;

  // 我们使用 <a> 标签替换 <button> 标签，但重复使用所有相同的样式
  const Link = Button.withComponent('a')

  // 同时使用 .withComponent 和 .extend 来改变标签和使用额外的样式
  const TomatoLink = Link.extend\`
    color: tomato;
    border-color: tomato;
  \`;

  render(
    <div>
      <Button>Normal Button</Button>
      <Link>Normal Link</Link>
      <TomatoLink>Tomato Link</TomatoLink>
    </div>
  );
  \`\`\`
`

export default ExtendingStyles

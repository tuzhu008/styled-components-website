import md from 'components/md'

const Nesting = () => md`
  ## 可以嵌套规则吗？

  可以: 嵌套是一个从 Sass 中有意移植的特性。
    通过减少为每个元素创建显式类的需要，这是一个减轻代码很好的方法。

  它还可以由父组件使用，以定义上下文约束，而受这些约束影响的子元素的并不关注:

  \`\`\`react
  const EqualDivider = styled.div\`
    display: flex;
    margin: 0.5rem;
    padding: 1rem;
    background: papayawhip;
    \${props => props.vertical && 'flex-direction: column;'}

    > * {
      flex: 1;

      &:not(:first-child) {
        \${props => props.vertical ? 'margin-top' : 'margin-left'}: 1rem;
      }
    }
  \`;

  const Child = styled.div\`
    padding: 0.25rem 0.5rem;
    background: palevioletred;
  \`;

  render(
    <div>
    <EqualDivider>
      <Child>First</Child>
      <Child>Second</Child>
      <Child>Third</Child>
    </EqualDivider>
    <EqualDivider vertical>
      <Child>First</Child>
      <Child>Second</Child>
      <Child>Third</Child>
    </EqualDivider>
    </div>
  );
  \`\`\`

  同时，对媒体查询进行定位也非常方便，因为我们可以一眼看出组件在任何分辨率下的响应。

  \`\`\`react
  const ColorChanger = styled.section\`
    background: papayawhip;
    color: palevioletred;

    @media(min-width: 768px) {
      background: mediumseagreen;
      color: papayawhip;
    }
  \`;

  render(
    <ColorChanger href="#">
      <h2>Hello world!</h2>
    </ColorChanger>
  );
  \`\`\`
`

export default Nesting

import md from 'components/md'

const GettingStarted = () => md`
  ## 入门

  样式化组件使用标记模板字符串来对组件进行样式化。

  它删除了组件和样式之间的映射。
  这意味着当你定义你的样式时，你实际上是在创建一个正常的 React 组件，这样将样式附加到组件上。

  这个例子创建了两个简单的组件，一个包装器和一个标题，并附带了一些样式。
  您可以编辑代码，并了解如何使用 styled-components。

  \`\`\`react
  // 创建提个 Title 组件，它将使用一些样式渲染一个 <h1> 标签
  const Title = styled.h1\`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  \`;

  // 创建一个 Wrapper 组件，它将使用一些样式渲染一个 <section> 标签
  const Wrapper = styled.section\`
    padding: 4em;
    background: papayawhip;
  \`;

  // 像使用其他 React 组件一样使用 Title 和 Wrapper – 除了它们的样式化!
  render(
    <Wrapper>
      <Title>
        Hello World, this is my first styled component!
      </Title>
    </Wrapper>
  );
  \`\`\`

  > CSS 规则会被自动地添加供应商前缀，因此你不必去顾及它。
`

export default GettingStarted

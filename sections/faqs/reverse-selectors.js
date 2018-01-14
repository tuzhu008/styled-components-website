import md from "components/md"

const ReverseSelectors = () => md`
  ## 可以引用其他组件吗?

  可以! 这使您可以采用“反向选择器（Reverse Selector）”模式，
  它允许组件封装整个样式：与媒体查询一样，它允许组件描述当受到外部更改的影响时它们将如何工作，而不需要引用基础代码的其他部分。

  在这里，我们的 Icon 组件定义了对其父 Link 悬停的响应：

  \`\`\`react
  const Link = styled.a\`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background: papayawhip;
    color: palevioletred;
  \`;

  const Icon = styled.svg\`
    transition: fill 0.25s;
    width: 48px;
    height: 48px;

    \${Link}:hover & {
      fill: rebeccapurple;
    }
  \`;

  const Label = styled.span\`
    display: flex;
    align-items: center;
    line-height: 1.2;

    &::before {
      content: '◀';
      margin: 0 10px;
    }
  \`;

  render(
    <Link href="#">
      <Icon viewBox="0 0 20 20">
        <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z"/>
      </Icon>
      <Label>Hovering my parent changes my\u00A0style!</Label>
    </Link>
  );
  \`\`\`

  我们可以在 Link 组件中嵌套颜色变化规则，但是我们必须考虑这两套规则，以理解为什么图标的行为是这样的。

  ### 警告

  这个行为仅在*样式化*组件的上下文受支持：
  尝试在下面的例子中安装 \`B\` 会失败，因为组件 \`A\` 是一个  React.Component 的实例而不是一个样式化组件。

  \`\`\`jsx
  class A extends React.Component {
    render() {
      return <div />;
    }
  }

  const B = styled.div\`
    \${A} {
    }
  \`;
  \`\`\`

  抛出的错误——\`Cannot call a class as a function\`——发生这个是因为样式化组件试图将这个组件作为插值函数调用。
`

export default ReverseSelectors

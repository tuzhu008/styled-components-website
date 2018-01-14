import md from "components/md"

const ComponentsAsSelectors = () => md`
  ## 引用其他组件

  将上下文覆盖应用到组件的样式有很多种方法。
  话虽如此，但如果不使用众所周知的目标 CSS 选择器范型，并使其在插值中使用，那就很难了。

  样式化组件通过“组件选择器”模式清晰地解决了这个使用案例。每当一个组件被 \`styled()\` 工厂函数创建或封装时，
  它也被分配一个稳定的 CSS 类用于定位。这允许非常强大的组合模式，而不必为命名和避免选择器冲突而烦恼。

  一个实际的例子：在这里，我们的 Icon 组件定义了它对父 Link 悬停的响应：


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

  然而，将 \`A\` 封装在一个 styled() 工厂中，使它符合插值的条件--只需要确保封装好的组件传递了 \`className\`。

  \`\`\`jsx
  class A extends React.Component {
    render() {
      return <div className={this.props.className} />;
    }
  }

  const StyledA = styled(A)\`\`;

  const B = styled.div\`
    \${StyledA} {
    }
  \`;
  \`\`\`
`

export default ComponentsAsSelectors

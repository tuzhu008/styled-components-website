import md from 'components/md'

const StylingAnyComponents = () => md`
  ## 样式化任何组件

  \`styled\` 方法在所有自己或任何第三方组件上都可以正常工作，只要它们将 \`className\` 属性传递给它们所渲染的子组件，也应该传递它们，依此类推。
   最终，\`className\` 必须传递到一个实际的 DOM 节点，样式化才能起作用。

  > 如果你使用 \`react-native\`，请记住使用 \`style\` 而不是 \`className\`。

  如果你使用任何外部库，你可以考虑使用下面的这个模式来转换他们到样式化组件当中。这个模式与你自己的组件一样工作良好，
  如果你需要一些组件保持自己的样式。

  \`\`\`react
  // 例如，这是一个 react-router 的 Link
  const Link = ({ className, children }) => (
    // 传递到实际的 DOM 节点
    <a className={className}>
      {children}
    </a>
  )

  const StyledLink = styled(Link)\`
    color: palevioletred;
    font-weight: bold;
  \`;

  render(
    <div>
      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
    </div>
  );
  \`\`\`

  如果没有必要，请仔细考虑是否将您自己的组件包装在一个样式化的组件中。
  您将禁用属性的自动白名单，并反转样式化组件和结构组件的推荐顺序。

  您还可以将标签名称传递到 \`styled()\` 工厂调用中，就像这样: \`styled('div')\`。
  事实上，\`styled.tagname\` 辅助器只是它的别名。


  > styled-components 总是生成一个带有很多类的真实的样式表。
  > 然后通过 \`className\` 属性将类名传递给 React 组件(包括第三方组件)。
`

export default StylingAnyComponents

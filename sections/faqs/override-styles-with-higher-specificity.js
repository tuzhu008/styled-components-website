import md from 'components/md'

const OverrideStyles = () => md`
  ## 如何能以更高的特异性覆盖样式?

  用高的特异性来覆盖样式的方法是简单地增加您自己样式的特性。
  这可以用 \`!important\`，但这很容易出错，而且通常不是一个好主意。

  我们推荐以下方法:

  \`\`\`js
  const MyStyledComponent = styled(AlreadyStyledComponent)\`
    &&& {
      color: palevioletred;
      font-weight: bold;
    }
  \`;
  \`\`\`

  每个 \`&\` 都会被生成的类替换，所以注入的 CSS 看起来是这样的:

  \`\`\`css
  .MyStyledComponent-asdf123.MyStyledComponent-asdf123.MyStyledComponent-asdf123 {
    color: palevioletred;
    font-weight: bold;
  }
  \`\`\`

  重复的类会使特性达到足够的高度，以覆盖源顺序，而不需要编写任何繁琐的操作！
`

export default OverrideStyles

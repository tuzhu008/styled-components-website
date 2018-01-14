import md from 'components/md'

const OverrideStyles = () => md`
  ## 如何覆盖内联样式?

  内联样式总是优先于外部 CSS，因此您不能仅仅通过增加特异性来覆盖它。

  不过，这里有一个巧妙的技巧，那就是使用 style  \`element-attr\` CSS 选择器与 \`!important\`结合：

  \`\`\`js
  const MyStyledComponent = styled(InlineStyledComponent)\`
    &[style] {
      font-size: 12px !important;
      color: blue !important;
    }
  \`;
  \`\`\`
`

export default OverrideStyles

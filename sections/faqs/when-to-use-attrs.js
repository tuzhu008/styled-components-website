import md from 'components/md'

const WhenToUseAttrs = () => md`
  ## 何时使用 attrs?

  您可以使用 [attrs](/docs/basics#附加额外的属性) 将属性传递给样式化的组件，但是这样做并不总是明智的。

  经验法则是，当你想要样式化组件的每个实例都有这个属性时，使用 \`attrs\` ，
  并且当每个实例需要不同的属性时直接传递属性给他：

  \`\`\`js
  const PasswordInput = styled.input.attrs({
    // 每个 <PasswordInput /> 应该是 type="password"
    type: 'password'
  })\`\`

  // 这个特定的属性是隐藏的，因此让我们设置 aria-hidden
  <PasswordInput aria-hidden="true" />
  \`\`\`
  同样的道理也适用于那些可以根据另一个属性的“mode”推断出来的属性。
  在这种情况下，您可以在 \`attrs\` 上设置一个属性，并根据其他的属性来计算这个属性。
`

export default WhenToUseAttrs

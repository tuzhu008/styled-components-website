import md from 'components/md'

const ExtendAndStyled = () => md`
  ## 何时应该使用 \`styled()\`?

  ### 在后台

  \`styled()\` 工厂用一个新类生成新的组件样式。然后通过 \`className\` 属性将类名传递给 React 组件。
  调用 \`extend\` 通过扩展旧组件样式的方式创建新的组件样式，因此不会为单个组件生成两个类。( \`styled()\` 工厂做的)

  ### 应该使用谁？

  我们建议尽可能为内部 \`StyledComponents\` 使用 \`.extend\` 。
  但是，对于外部或跨文件组件，尝试使用 \`styled()\` 工厂，在编写包装器 \`StyledComponent\` 时不清楚它将会是什么样子。

  请记住，不建议使用 \`styled()\` 包装您自己的组件。
  应该始终尝试只使用样式化组件，而不要将任何包装器和容器包装在更高的层次上。
  否则，您的样式逻辑将分散在多个文件中，并且使用子选择器来定位容器中的元素将会变得很诱人。
  这当然增加了我们生成的规则的特殊性，这可能会导致更多的代码和 styled() 包装器，它们试图在组件层次结构中补偿这一点。
  相反，你可以将你的 UI 代码保持在最低水平，
  并利用 themes、inheritance、mixin、props，甚至 "reverse selectors" 来保持 UI 代码的整洁。

  如果您还没有阅读关于
  [\`Styling any components\`](/docs/basics#样式化任何组件)
  和 [\`extend\`](/docs/basics#扩展样式)，
  它们包含更多的信息和示例。
  任何组件的样式和扩展，它们包含更多的信息和示例。
`

export default ExtendAndStyled

import md from 'components/md'

const ExistingCSS = () => md`
  ## 现有 CSS

  如果您选择将样式化组件与现有的 CSS 一起使用，您应该了解一些实现细节。

  样式化组件生成一个带有类的实际样式表，并通过 \`className\` 属性将这些类附加到样式化组件的 DOM 节点上。
  它在运行时将生成的样式表注入到文档头部的末尾。

  ### 样式化正常的 React 组件

  如果使用 \`styled(MyComponent)\` ， \`MyComponent\` 不会渲染传入的 \`className\` 属性，那么没有样式被应用。
  要避免这个问题，请确保已将传入的 className 附加到了 DOM 节点：

  \`\`\`jsx
  class MyComponent extends React.Component {
    render() {
      // 将传入的 className 附加到 DOM 节点
      return <div className={this.props.className} />;
    }
  }
  \`\`\`

  如果你有带有一个类的已存在的样式，您可以将全局类与传入的类结合起来:

  \`\`\`jsx
  class MyComponent extends React.Component {
    render() {
      // 将传入的 className 附加到 DOM 节点
      return <div className={\`some-global-class \${this.props.className}\`} />;
    }
  }
  \`\`\`

  ### 特殊性问题

  如果您将一个全局类与一个样式化组件类一起应用，那么结果可能不是您所期望的。
  如果一个属性在两个类中都有相同的特殊性，那么最后一个将会胜出。

  > 『译者注』：特殊性，也就是权重。

  \`\`\`jsx
  // MyComponent.js
  const MyComponent = styled.div\`background-color: green;\`;

  // my-component.css
  .red-bg {
    background-color: red;
  }

  // 出于某种原因，这个组件仍然具有绿色背景
  // 即使你尝试使用 "red-bg" 类来重写它。
  <MyComponent className="red-bg" />
  \`\`\`

  在上面的例子中，样式化组件类优先级高于全局类，因为样式化组件在运行时将它的样式添加到 \`\<head\>\` 的末尾来注入到 DOM 中。
  因此，它的样式胜过其他的。

  由于使用 Webpack 等工具来控制全局 CSS 注入到 DOM 的位置通常很困难，因此最简单的方法是通过重复类名来提高全局类的特殊性：


  \`\`\`css
  /* my-component.css */
  .red-bg.red-bg {
    background-color: red;
  }
  \`\`\`

`

export default ExistingCSS

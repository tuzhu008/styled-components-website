import md from 'components/md'

const TwoDomClasses = () => md`
  ## DOM 节点为什么有两个 class?

  每个节点实际上都有两个连接到它的类;

  一个是静态的纯组件，这意味着一个样式化组件的每个元素都有这个类。
  这个类没有任何样式附在它上面。相反，它用于快速识别 DOM 对象属于哪个样式化组件，或者在 DevTools 中进行较小的更改。

  另一个是动态的，也就是说，根据插值结果，对于使用不同属性的样式化组件的每个元素它是不一样的。

  例如，样式化组件 \`<Button />\` 每一次都将渲染相同的静态类。
  如果使用插值的方式改变了样式，如 \`<Button secondary />\`，
  那么动态类将会是不同的，而静态类将保持不变。
`
export default TwoDomClasses

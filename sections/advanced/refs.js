import md from 'components/md'

const Refs = () => md`
  ## Refs

  传递一个 \`ref\` 属性到样式化组件将得到一个 \`StyledComponent\` 包装器的实例，但不是传递到底层 DOM 节点。
  这是由于 refs 的工作方式。
  在我们的包装器上，不能直接调用 DOM 方法，比如 \`focus\`。

  要获得实际包装的 DOM 节点的引用，请传递回调给 \`innerRef\` 属性代替。

  > 我们不支持字符串引用（即 \`innerRef="node"\`），因为在 React 中，它们已经被弃用。

  下面的例子使用 \`innerRef\` 来保存一个样式化的输入框的引用并在用户在它上面停留时让它获得焦点。


  \`\`\`react
  const Input = styled.input\`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 3px;
  \`;

  class Form extends React.Component {
    render() {
      return (
        <Input
          placeholder="Hover here..."
          innerRef={x => { this.input = x }}
          onMouseEnter={() => this.input.focus()}
        />
      );
    }
  }

  render(
    <Form />
  );
  \`\`\`

  > 『译者注』：也就是说 \`inf\` 引用的是样式化组件的实例，而 \`innerRef\` 引用的是 DOM 元素。

`


export default Refs

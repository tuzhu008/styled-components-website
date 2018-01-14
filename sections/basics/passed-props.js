import md from 'components/md'

const PassedProps = () => md`
  ## 传递属性

  styled-components 传递所有的属性。

  这个例子展示了如何把 Input 组件的所有 props 传递到挂载的 DOM 节点，就像 React 元素一样。

  \`\`\`react
  // 创建一个 Input 组件，它将使用一些样式渲染一个 <input> 标签
  const Input = styled.input\`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 3px;
  \`;

  // 渲染两个样式化的文本输入框，一个 placeholder = "@mxstbr"，一个 value = "@geelen"
  render(
    <div>
      <Input placeholder="@mxstbr" type="text" />
      <Input value="@geelen" type="text" />
    </div>
  );
  \`\`\`
`

export default PassedProps

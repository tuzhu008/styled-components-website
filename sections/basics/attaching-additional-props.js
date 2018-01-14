import md from 'components/md'

const AttachingAdditionalProps = () => md`
  ## 附加额外的属性 | v2

  要避免不必要的包装器（用来传递一些 props 到渲染的组件或元素上），可以使用 \`.attrs\` 构造器。
  它允许你附加一些额外的 props (or "attributes") 到组件。

  通过这种方式，您可以将静态属性附加到某个元素上，
  或者将像 \`activeClassName\` 这样的第三方属性传递给 React Router 的 Link 组件。
  此外，您还可以将更多动态属性附加到组件。
  \`.attrs\` 对象也可以接收函数，这个函数接收组件接收的属性。返回值将被合并到所产生的属性中。

  这里我渲染一个 \`Input\` 组件并附加一些动态和静态属性（attribute）给它：

  \`\`\`react
  const Input = styled.input.attrs({
    // 我们可以定义一些静态属性
    type: 'password',

    // 或者定义一些动态属性
    margin: props => props.size || '1em',
    padding: props => props.size || '1em'
  })\`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

    /* 这里，我们使用动态的计算属性 */
    margin: \${props => props.margin};
    padding: \${props => props.padding};
  \`;

  render(
    <div>
      <Input placeholder="A small text input" size="1em" />
      <br />
      <Input placeholder="A bigger text input" size="2em" />
    </div>
  );
  \`\`\`

  如你所见，我们可以在插值中访问新创建的属性，\`type\` 属性被传递给元素。
`

export default AttachingAdditionalProps

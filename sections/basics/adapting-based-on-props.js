import md from 'components/md'

const AdaptingBasedOnProps = () => md`
  ## 动态样式

  你可以传递函数("插值")到样式化组件的模板字符串来基于它的属性修改它。

  下面的这个按钮组件有一个 primary 状态，它会改变它的颜色。
  当设置 \`primary\` 为 \`true\` 时，我们将其背景和文本颜色进行交换。

  \`\`\`react
  const Button = styled.button\`
    /* 基于 primary 属性来修改颜色 */
    background: \${props => props.primary ? 'palevioletred' : 'white'};
    color: \${props => props.primary ? 'white' : 'palevioletred'};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  \`;

  render(
    <div>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </div>
  );
  \`\`\`
`

export default AdaptingBasedOnProps

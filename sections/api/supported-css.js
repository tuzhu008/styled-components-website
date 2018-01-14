import md from 'components/md'

const SupportedCSS = () => md`
  ## 支持的 CSS


  在一个样式化组件中，我们支持所有 CSS 和嵌套。
  因为我们生成了一个实际的样式表，而不是内联样式，
  任何在 CSS 中工作的东西都可以在样式化组件中工作！

  \`\`\`react
  const Example = styled.div\`
    /* 所有的声明都将被加上前缀 */
    padding: 2em 1em;
    background: papayawhip;

    /* 伪选择器也可以工作 */
    &:hover {
      background: palevioletred;
    }

    /* 媒体查询也没问题 */
    @media (max-width: 600px) {
      background: tomato;

      /* 嵌套规则按预期工作 */
      &:hover {
        background: yellow;
      }
    }

    > p {
      /* 后代选择器也可以工作，但更像是一个逃生舱口（escape hatch） */
      text-decoration: underline;
    }

    /* 上下文选择器也可以工作 */
    html.test & {
      display: none;
    }
  \`;

  render(
    <Example>
      <p>Hello World!</p>
    </Example>
  );
  \`\`\`

  与符号 (\`&\`) 被替换为为样式化组件生成的唯一的 classname，这使复杂的逻辑变得容易。
`

export default SupportedCSS

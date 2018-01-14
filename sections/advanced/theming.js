import md from 'components/md'

const Theming = () => md`
  ## 主题

  styled-components 通过暴露一个 \`<ThemeProvider>\` 包装器组件来支持完全的主题。
  这个组件在底层通过上下文 API 提供了一个主题给所有 React 组件。
  在渲染树种的所有样式化组件都可以访问提供的主题，即使他们是多级深度。

  为了说明这个，我们来创建一个 Button 组件，但这次我们将把一些变量传递到主题。

  \`\`\`react
  // 定义组件，但这次我们使用 props.theme
  const Button = styled.button\`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;

    /* 使用 theme.main 来给边框和文本上色 */
    color: \${props => props.theme.main};
    border: 2px solid \${props => props.theme.main};
  \`;

  // 我们传递一个默认的主题给 Buttons 组件，不会被包裹在 ThemeProvider 中。
  Button.defaultProps = {
    theme: {
      main: 'palevioletred'
    }
  }

  // 定义的 props.theme 看起来像
  const theme = {
    main: 'mediumseagreen'
  };

  render(
    <div>
      <Button>Normal</Button>

      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
      </ThemeProvider>
    </div>
  );
  \`\`\`

  ### 函数主题

  你可以为 \`theme\` 传递一个函数。这个函数将接受父主题（渲染树种其他更高的 \`<ThemeProvider>\` ）。
  这种方式中，主题本身可以被语境化（contextual）。

  下面的这个例子渲染了上面主体化的 Button，还另外渲染了一个，并使用 \`ThemeProvider\` 来反转了背景和前景颜色。
  \`invertTheme\` 函数接收上面的主题并创建一个新主题。

  \`\`\`react
  // 定义组件，但这次我们使用 props.theme
  const Button = styled.button\`
    color: \${props => props.theme.fg};
    border: 2px solid \${props => props.theme.fg};
    background: \${props => props.theme.bg};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
  \`;

  // 在 theme 上定义 \`fg\` and \`bg\`
  const theme = {
    fg: 'palevioletred',
    bg: 'white'
  };

  // 这个主题互换 \`fg\` 和 \`bg\`
  const invertTheme = ({ fg, bg }) => ({
    fg: bg,
    bg: fg
  });

  render(
    <ThemeProvider theme={theme}>
      <div>
        <Button>Default Theme</Button>

        <ThemeProvider theme={invertTheme}>
          <Button>Inverted Theme</Button>
        </ThemeProvider>
      </div>
    </ThemeProvider>
  );
  \`\`\`

  ### 未样式化的组件获取主题

  如果你需要在样式化组件之外使用当前主题（比如 在 big 组件中），你可以使用 \`withTheme\` 高阶组件。

  \`\`\`jsx
  import { withTheme } from 'styled-components'

  class MyComponent extends React.Component {
    render() {
      console.log('Current theme: ', this.props.theme);
      // ...
    }
  }

  export default withTheme(MyComponent)
  \`\`\`

  ###  \`theme\` 属性

  使用 \`theme\` 属性可以将主题向下传递给组件。

  这对于绕过缺失 \`ThemeProvider\` 或重写它很有用。

  \`\`\`react
  // 定义 button
  const Button = styled.button\`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;

    /* 使用 theme.main 给边框和文本增加颜色 */
    color: \${props => props.theme.main};
    border: 2px solid \${props => props.theme.main};
  \`;

  // 定义的 main 主题将像这样：
  const theme = {
    main: 'mediumseagreen'
  };

  render(
    <div>
      <Button theme={{ main: 'royalblue' }}>Ad hoc theme</Button>
      <ThemeProvider theme={theme}>
        <div>
          <Button>Themed</Button>
          <Button theme={{ main: 'darkorange' }}>Overidden</Button>
        </div>
      </ThemeProvider>
    </div>
  );
  \`\`\`

`

export default Theming

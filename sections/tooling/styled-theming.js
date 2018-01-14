import md from 'components/md'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'styled-theming'
import React from 'react'

const fontSize = theme('size', {
  normal: '0.9em',
  large: '1.1em',
})

const boxBackgroundColor = theme('mode', {
  light: 'aliceblue',
  dark: '#222',
})

const boxColor = theme('mode', {
  light: 'rgb(46, 68, 78)',
  dark: '#C5C8C6',
})

const Box = styled.div`
  padding: 4em 2em;
  text-align: center;
  font-size: ${fontSize};
  background-color: ${boxBackgroundColor};
  color: ${boxColor};
`

const buttonBackgroundColor = theme.variants('mode', 'kind', {
  default: { light: 'slategray', dark: 'slategray' },
  primary: { light: 'palevioletred', dark: 'hotpink' },
  success: { light: 'mediumseagreen', dark: 'seagreen', },
  warning: { light: 'sandybrown', dark: 'peru', },
  danger: { light: 'tomato', dark: 'brown', },
})

const buttonPadding = theme('size', {
  normal: '0.5em 1em',
  large: '0.4em 0.7em',
})

const buttonMargin = theme('size', {
  normal: '0.5em',
  large: '0.2em 0.2em',
})

const Button = styled.button`
  font: inherit;
  border: none;
  border-radius: 0.25em;
  cursor: pointer;
  padding: ${buttonPadding};
  margin: ${buttonMargin};
  background-color: ${buttonBackgroundColor};
  color: white;
`

Button.defaultProps = {
  kind: 'default'
}

class StyledThemingExample extends React.Component {
  state = {
    mode: 'light',
    size: 'normal',
  };

  handleToggleMode = () => {
    this.setState({ mode: this.state.mode === 'light' ? 'dark' : 'light' })
  };

  handleToggleSize = () => {
    this.setState({ size: this.state.size === 'normal' ? 'large' : 'normal' })
  };

  render() {
    return (
      <ThemeProvider theme={{ mode: this.state.mode, size: this.state.size }}>
        <Box>
          <Button onClick={this.handleToggleMode}>Toggle Mode</Button>
          <Button kind="primary" onClick={this.handleToggleSize}>Toggle Size</Button>
          <Button kind="success" onClick={this.handleToggleMode}>Toggle Mode</Button>
          <Button kind="warning" onClick={this.handleToggleSize}>Toggle Size</Button>
          <Button kind="danger" onClick={this.handleToggleMode}>Toggle Mode</Button>
        </Box>
      </ThemeProvider>
    )
  }
}

const StyledTheming = () => md`
  ## styled theming

  使用 [styled-theming](https://github.com/styled-components/styled-theming)
  为你的样式化组件创建主题。

  ${<StyledThemingExample/>}

  阅读[介绍性的博客](http://thejameskyle.com/styled-theming.html)。

  ### 安装

  首先安装这个 babel 插件：

  \`\`\`
  npm install --save styled-theming
  \`\`\`

  ### 示例

  \`\`\`jsx
  import React from 'react';
  import styled, {ThemeProvider} from 'styled-components';
  import theme from 'styled-theming';

  const boxBackgroundColor = theme('mode', {
    light: '#fff',
    dark: '#000',
  });

  const Box = styled.div\`
    background-color: \${boxBackgroundColor};
  \`;

  export default function App() {
    return (
      <ThemeProvider theme={{ mode: 'light' }}>
        <Box>
          Hello World
        </Box>
      </ThemeProvider>
    );
  }
  \`\`\`

  ### API

  #### \`<ThemeProvider>\`

  查看 [样式化组件文档](/docs/advanced#主题)

  \`<ThemeProvider>\` 是 styled-components 的一部分，但对于 styled-theming 来说这是必须的。

  \`\`\`js
  import {ThemeProvider} from 'styled-components';
  \`\`\`

  \`<ThemeProvider>\` 接受一个单一的属性 \`theme\` ，你应该用字符串或 getter 函数传递一个对象。例如：

  \`\`\`jsx
  <ThemeProvider theme={{ mode: 'dark', size: 'large' }}>
  <ThemeProvider theme={{ mode: modes => modes.dark, size: sizes => sizes.large }}>
  \`\`\`

  你应该在你的应用程序的根目录上设置一个 \`<ThemeProvider>\`:

  \`\`\`jsx
  function App() {
    return (
      <ThemeProvider theme={...}>
        {/* rest of your app */}
      </ThemeProvider>
    );
  }
  \`\`\`

  #### \`theme(name, values)\`

  大多数的主题都是用这个函数完成的。

  \`name\` 应该与 \`<ThemeProvider>\` 主题对象中的一个键匹配。

  \`\`\`jsx
  <ThemeProvider theme={{ whatever: '...' }}/>
  \`\`\`

  \`\`\`js
  theme('whatever', {...});
  \`\`\`

  \`values\` 应该是一个对象，其中一个键将由提供给 \`<ThemeProvider>\` 主题对象的值选择。

  \`\`\`jsx
  <ThemeProvider theme={{ mode: 'light' }}/>
  <ThemeProvider theme={{ mode: 'dark' }}/>

  theme('mode', {
    light: '...',
    dark: '...',
  });
  \`\`\`

  这个对象的值可以是任何 CSS 值。

  \`\`\`jsx
  theme('mode', {
    light: '#fff',
    dark: '#000',
  });

  theme('font', {
    sansSerif: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    serif: 'Georgia, Times, "Times New Roman", serif',
    monoSpaced: 'Consolas, monaco, monospace',
  });
  \`\`\`

  这些值也可以是返回 CSS 值的函数。


  \`\`\`jsx
  theme('mode', {
    light: props => props.theme.userProfileAccentColor.light,
    dark: props => props.theme.userProfileAccentColor.dark,
  });
  \`\`\`

  \`theme\` 将创建一个函数，您可以将它作为一个值在样式化组件的  \`styled\`  函数中使用。

  \`\`\`jsx
  import styled from 'styled-components';
  import theme from 'styled-theming';

  const backgroundColor = theme('mode', {
    light: '#fff',
    dark: '#000',
  });

  const Box = styled.div\`
    background-color: \${backgroundColor}
  \`;
  \`\`\`


  #### \`theme.variants(name, prop, themes)\`

  这个函数对于创建相同组件的变体是很有用的，通过额外的属性来选择。

  为了使主题更简单， styled-theming 提供了一个 \`theme.variants\` 函数。

  \`\`\`jsx
  import styled from 'styled-components';
  import theme from 'styled-theming';

  const backgroundColor = theme.variants('variant', 'mode', {
    default: { light: 'gray', dark: 'darkgray' },
    primary: { light: 'blue', dark: 'darkblue' },
    success: { light: 'green', dark: 'darkgreen' },
    warning: { light: 'orange', dark: 'darkorange' },
  });

  const Button = styled.button\`
    background-color: \${backgroundColor};
  \`;

  Button.propTypes = {
    variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning'])
  };

  Button.defaultProps = {
    variant: 'default',
  };

  <Button/>
  <Button variant="primary"/>
  <Button variant="success"/>
  <Button variant="warning"/>
  \`\`\`
`

export default StyledTheming

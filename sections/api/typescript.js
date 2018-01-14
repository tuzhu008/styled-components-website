import md from 'components/md'

const TypeScript = () => md`
  ## TypeScript

  样式化组件有 TypeScript 的定义，允许在任何 TypeScript 项目中使用这个库。
  [这里](https://github.com/patrick91/Styled-Components-Typescript-Example)可以找到一个基本的例子。

  ### 定义主题接口

  默认情况下，每一个样式化组件将有一个设置为  \`any\` 的 \`theme\`。
  在构建复杂的应用程序时，最好在所有地方都有自动完成和错误检查。

  为了完成对 \`theme\` 属性的自动完成和检查，我们首先要定义我们想要在整个应用程序中使用的主题接口:

  \`\`\`jsx
  // theme.ts
  export default interface ThemeInterface {
    primaryColor: string;
    primaryColorInverted: string;
  }
  \`\`\`

  然后我们可以重新导出带有我们自定的注意接口的 \`styled\` 函数：

  \`\`\`jsx
  // styled-components.ts
  import * as styledComponents from 'styled-components';
  import { ThemedStyledComponentsModule } from 'styled-components';

  import ThemeInterface from './theme';

  const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider
  } = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

  export { css, injectGlobal, keyframes, ThemeProvider };
  export default styled;
  \`\`\`

  最后，不是从 styled-components 模块导入 styled 函数，而是从上面的自定义模块导入。

  ### Caveat with \`className\`

  在定义组件时，您需要在您的 Props 接口中 中标记 \`className\` 为可选的:

  \`\`\`jsx
  interface LogoProps {
    /* This prop is optional, since TypeScript won't know that it's passed by the wrapper */
    className?: string;
  }

  class Logo extends React.Component<LogoProps, {}> {
    render() {
      return (
        <div className={this.props.className}>
          Logo
        </div>
      );
    }
  }

  const LogoStyled = styled(Logo)\`
    font-family: 'Helvetica';
    font-weight: bold;
    font-size: 1.8rem;
  \`;
  \`\`\`

  ### Caveat with Stateless Components

  要使用无状态组件，并对这些属性进行类型检查，您需要使用它的类型来定义组件，如下:

  \`\`\`jsx
  interface BoxProps {
    theme?: ThemeInterface;
    borders?: boolean;
    className?: string;
  }

  const Box: React.StatelessComponent<BoxProps> = props => (
    <div className={props.className}>
      {props.children}
    </div>
  );

  const StyledBox = styled(Box)\`
    padding: \${props => props.theme.lateralPadding};
  \`;
  \`\`\`
`

export default TypeScript

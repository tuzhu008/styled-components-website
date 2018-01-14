import md from 'components/md'

const ReactNative = () => md`
  ## React Native

  styled-components 以相同方式被用于 React Native ，除了你从 \`styled-components/native\` 导入它之外。

  尝试这个示例 [Snack by Expo](https://snack.expo.io/@danielmschmidt/styled-components)。

  ~~~jsx
  import React from "react";
  import styled from "styled-components/native";

  const StyledView = styled.View\`
    background-color: papayawhip;
  \`;

  const StyledText = styled.Text\`
    color: palevioletred;
  \`;

  class MyReactNativeComponent extends React.Component {
    render() {
      return (
        <StyledView>
          <StyledText>Hello World!</StyledText>
        </StyledView>
      );
    }
  }
  ~~~


  我们还支持更复杂的样式(像 \`transform\`)，这通常是一个数组，速记（比如 \`margin\`）-这多亏了 \`css-to-react-native\`。

  想象一下你是如何将属性写入 React Native，猜猜你是如何将它转移到 CSS 的，你可能是对的:

  ~~~jsx
  const RotatedBox = styled.View\`
    transform: rotate(90deg);
    text-shadow-offset: 10px 5px;
    font-variant: small-caps;
    margin: 5px 7px 2px;
  \`;
  ~~~

  与 web 版本不同的是，你不能使用 \`keyframes\` 和 \`injectGlobal\` 助手，因为 React Native 不支持关键帧或全局样式。
  如果您使用媒体查询或嵌套 CSS，我们也会警告您。

  > 在 v2 中，我们支持百分比。
  > 为了使这一切成为可能，我们需要对所有的速记进行强制执行(units)。
  > 如果你正迁移到 v2，[codemod 是可用的](https://github.com/styled-components/styled-components-native-code-mod)。
`

export default ReactNative

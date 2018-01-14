import React from 'react'
import styled, { css } from 'styled-components'

import md from 'components/md'
import { Content } from 'components/Layout'

const AlignCenter = styled.div`
  text-align: center;
`

const Badge = styled.img`
  margin: 0 0.5em 3em;
  height: 1.5em;
`

const ExampleButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${p => p.primary && css`
    background: palevioletred;
    color: white;
  `}
`

const SecondButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`

const HomepageGettingStarted = () => (
  <Content data-e2e-id="content">
    <AlignCenter>
      <a href="https://github.com/styled-components/styled-components">
        <Badge src="/proxy/stars.svg" alt="Stars on GitHub" />
      </a>
      <a href="https://www.npmjs.com/package/styled-components">
        <Badge src="/proxy/npm-v.svg" alt="Current version" />
      </a>
      <Badge src="/proxy/downloads.svg" alt="Monthly downloads" />
      <Badge src="/proxy/size.svg" alt="Gzipped size" />
      <a href="https://spectrum.chat/styled-components">
        <Badge alt="Join the community on Spectrum" src="https://withspectrum.github.io/badge/badge.svg" />
      </a>
    </AlignCenter>

    {md`
      # 开始
      ## 安装

      要安装 styled-components 请运行 \`npm install --save styled-components\`。
      这就是你所需要做的，你现在可以在你的应用中使用它了! (对头, 不需要构建步骤 👌)

      ## 你的第一个样式化组件

      假设您想要创建一个简单且可重用的 \`<Button />\` 组件，以在整个应用程序中使用它。
      对于这个重要的按钮，应该有一个正常的版本和一个大号的 \`primary\` 版本。
      这就是渲染时的样子:(这是一个活生生的例子，点击它们！)

      ${
      <AlignCenter>
        <ExampleButton onClick={() => { alert('You clicked the normal button!') }}>Normal button</ExampleButton>
        <ExampleButton primary onClick={() => { alert('You clicked the primary button!') }}>Primary button</ExampleButton>
      </AlignCenter>
      }

      首先，让我们导入 styled-components 并创建一个 \`styled.button\`:

      \`\`\`jsx
      import styled from 'styled-components';

      const Button = styled.button\`\`;
      \`\`\`

      这里的 \`Button\` 变量现在是一个 React 组件，你可以像使用其他任何 React 一样使用它。
      这种不寻常的反引号语法是一种新的 JavaScript 特性，称为标记模板字符串。
      你知道如何用括号来调用函数吗?(\`myFunc()\`)很好，现在你也可以调用带有反引号的函数。
      它是如何运作的，[解释在这里](/docs/advanced#tagged-template-literals) 。

      如果你现在渲染我们可爱的组件(只需像其他组件: \`<Button />\`)，这就是你得到的：

      ${
      <AlignCenter>
        <button>I'm a &lt;Button /&gt;!</button>
      </AlignCenter>
      }

      这渲染了一个按钮！这不是一个很好的按钮，尽管😕我们可以做得更好，让我们给它一点样式，发掘隐藏在内部的美丽！

      \`\`\`jsx
      const Button = styled.button\`
        border-radius: 3px;
        padding: 0.25em 1em;
        margin: 0 1em;
        background: transparent;
        color: palevioletred;
        border: 2px solid palevioletred;
      \`;
      \`\`\`

      ${
      <AlignCenter>
        <SecondButton>I'm a styled &lt;Button /&gt;</SecondButton>
      </AlignCenter>
      }

      正如你所看到的，styled-components 可以让你在你的 JavaScrip t中编写实际的 CSS。
      这意味着你可以使用全部您使用和爱使用的 CSS 的特性，包括（但不限于）媒体查询，所有伪选择器，嵌套等。
      它还将样式绑定到组件，这具有一些有趣的属性。
      （了解更多关于 [styled-components 背后的思想](/docs/basics#motivation)）

      最后一步是我们需要定义一个主按钮的样子。
      为了做到这一点，我们还从 \`styled-components\` 导入 \`{ css }\`，
      并将一个函数插入到我们的模板字符串中，该字符串被传入我们的组件的 props：

      \`\`\`jsx
      import styled, { css } from styled-components

      const Button = styled.button\`
        border-radius: 3px;
        padding: 0.25em 1em;
        margin: 0 1em;
        background: transparent;
        color: palevioletred;
        border: 2px solid palevioletred;

        \${props => props.primary && css\`
          background: palevioletred;
          color: white;
        \`\}
      \`;
      \`\`\`

      上面代码表达的是，当 \`primary\` 属性被设置时我们想要添加更多的 \`css\` 到组件中，在这种情况下，改变背景和颜色。

      就这样,我们完成了!看一下我们完成的组件:

      \`\`\`react
      const Button = styled.button\`
        border-radius: 3px;
        padding: 0.25em 1em;
        margin: 0 1em;
        background: transparent;
        color: palevioletred;
        border: 2px solid palevioletred;

        \${props => props.primary && css\`
          background: palevioletred;
          color: white;
        \`\}
      \`;

      render(
        <div>
          <Button>Normal Button</Button>
          <Button primary>Primary Button</Button>
        </div>
      );
      \`\`\`

      不错哟 😍 这也是一个实时更新编辑器，所以请仔细研究一下，以便了解使用样式化组件的感觉!

      完成之后，请查看[文档](/docs)，特别是[入门](/docs/basics#getting-started) 部分！享受吧✨
    `}
  </Content>
)

export default HomepageGettingStarted

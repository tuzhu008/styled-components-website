import React from 'react'

import md from 'components/md'
import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

const TaggedTemplateLiteral = () => md`
  ### \`TaggedTemplateLiteral\` | web | native

  这是一个你想要传递进 styled 调用的标签模板字符串。
  这个 ES6 语言的新特性。想知道更多，请参阅[标签模板字符串](/docs/advanced#标签模板字符串)小节。

  ${
    <Table head={[ 'Inputs', 'Description' ]}>
      <Row>
        <Column>
          <Code>Rule</Code>
        </Column>
        <Column>
          任何 CSS 规则 (string)
        </Column>
      </Row>
      <Row>
        <Column>
          <Code>Interpolation</Code>
        </Column>
        <Column>
          这可以是一个字符串或一个函数。
          字符串将被按原样合并。
          函数将接收样式化组件的属性作为它的第一个也是唯一一个参数。
        </Column>
      </Row>
    </Table>
  }

  阅读更多关于如何基于属性添加样式的信息，
  请访问[动态样式](/docs/basics#动态样式)小节。

  这个属性将被传递到一个插值函数中，
  传递到插值函数的属性附加了一个特殊的属性，\`theme\`，它是被一个更高层次的 \`ThemeProvider\` 组件注入的。
  查看[主题](/docs/advanced#主题)部分以获得更多信息。

  \`\`\`jsx
  import styled from 'styled-components';

  const padding = '3em';

  const Section = styled.section\`
    color: white;

    /* 传递一个变量作为输入 */
    padding: \${padding};

    /* 添加来自属性的 background */
    background: \${props => props.background};
  \`;
  \`\`\`

  您也可以直接从插值或输入对象返回对象，并将它们视为内联样式。
  然而，这是非常令人沮丧的，因为 CSS 语法支持伪选择器，媒体查询，嵌套等，而对象语法不支持。
`

export default TaggedTemplateLiteral

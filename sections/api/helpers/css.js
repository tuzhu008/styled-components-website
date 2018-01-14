import React from 'react'

import md from 'components/md'
import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

const CSS = () => md`
  ### \`css\` | web | native

  一个辅助函数，用来从使用插值的模板字符串生成 CSS。
  如果你在插值中返回一个模板字符串，你需要使用它。
  (这是由于模板字符串的工作模式)

  如果你只返回一个普通的字符串，你不需要使用它。

  ${
    <Table head={[ '参数', '描述' ]}>
      <Row>
        <Column>
          1. <Code>TaggedTemplateLiteral</Code>
        </Column>
        <Column>
          一个带有 CSS 和插值的标签模板字符串。
        </Column>
      </Row>
    </Table>
  }

  返回一个插值数组，它是一个被压缩的数据结构，你可以把它本身作为插值。

  \`\`\`jsx
  import styled, { css } from 'styled-components';

  const complexMixin = css\`
    color: \${props => props.whiteColor ? 'white' : 'black'}
  \`;

  const StyledComp = styled.div\`
    /* 这是一个嵌套插值的例子 */
    \${props => props.complex ? complexMixin : 'color: blue;'}
  \`;
  \`\`\`

  如果你离开 \`css\`，你的函数将是 \`toString()\` 的，你将得不到你所期望的结果。
`

export default CSS

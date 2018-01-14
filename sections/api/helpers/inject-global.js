import React from 'react'

import md from 'components/md'
import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

const InjectGlobal = () => md`
  ### \`injectGlobal\` | web | native

  一个助手函数，用于书写全局 CSS。它不返回一个组件，只是直接将样式添加到样式表。

  ${
    <Table head={[ '参数', '描述' ]}>
      <Row>
        <Column>
          1. <Code>TaggedTemplateLiteral</Code>
        </Column>
        <Column>
          A tagged template literal with your global styles inside.
        </Column>
      </Row>
    </Table>
  }

  \`\`\`jsx
  import { injectGlobal } from 'styled-components';

  injectGlobal\`
    @font-face {
      font-family: 'Operator Mono';
      src: url('../fonts/Operator-Mono.ttf');
    }

    body {
      margin: 0;
    }
  \`;
  \`\`\`

  我们不鼓励使用这种方法。
  如果你必须的话，尽量在每个应用程序中使用一次，
  如果你必须的话，那就把它包含在一个单独的文件中。
  这是一个逃生舱（escape hatch）。
  只使用它来获得罕见的 \`@font-face\` 定义或 body 样式。
`

export default InjectGlobal

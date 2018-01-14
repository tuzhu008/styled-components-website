import React from 'react'

import md from 'components/md'
import Table, { Row, Column } from 'components/Table'
import Code from 'components/Code'

const ThemeProvider = () => md`
  ### \`ThemeProvider\` | web | native

  一个用于主题的辅助组件。它通过上下文 API 将主体注入到组件树下方的所有样式化组件中。
  查看[主题](/docs/advanced#主题)章节。

  ${
    <Table head={[ '属性', '描述' ]}>
      <Row>
        <Column>
          <Code>theme</Code>
        </Column>
        <Column>
          一个对象，这个对象将作为  <Code>theme</Code> 被注入到提供者下面的样式组件的所有插值中。
        </Column>
      </Row>
    </Table>
  }

  \`\`\`jsx
  import styled, { ThemeProvider } from 'styled-components';

  const Box = styled.div\`
    color: \${props => props.theme.color};
  \`;

  <ThemeProvider theme={{ color: 'mediumseagreen' }}>
    <Box>I'm mediumseagreen!</Box>
  </ThemeProvider>
  \`\`\`
`

export default ThemeProvider

import React from 'react'

import md from 'components/md'
import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

const Keyframes = () => md`
  ### \`keyframes\` | web

  一个助手方法，用来创建动画的关键帧。

  ${
    <Table head={[ '参数', '描述' ]}>
      <Row>
        <Column>
          1. <Code>TaggedTemplateLiteral</Code>
        </Column>
        <Column>
          一个内部带有关键帧的标签模板字符串。
        </Column>
      </Row>
    </Table>
  }

  为这些关键帧返回一个唯一的名字，被用于动画声明中。

  \`\`\`jsx
  import styled, { keyframes } from 'styled-components';

  const fadeIn = keyframes\`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  \`;

  const FadeInButton = styled.button\`
    animation: 1s \${fadeIn} ease-out;
  \`;
  \`\`\`

  你可以在 [动画](/docs/basics#动画) 章节了解更多关于 styled-components 动画的信息。
`

export default Keyframes

import React from 'react'

import md from 'components/md'
import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

const IsStyledComponent = () => md`
  ### \`isStyledComponent\` | web | native

  帮助标识样式化组件的实用程序。

  ${
    <Table head={[ '参数', '函数' ]}>
      <Row>
        <Column>
          1. <Code>Function</Code>
        </Column>
        <Column>
          {md`
            通过 \`styled()\` 工厂，任何函数都可能是一个样式化函数，或者封装在样式化函数种的 React 组件。
          `}
        </Column>
      </Row>
    </Table>
  }

  如果传递的函数是一个有效的样式化组件——封装的组件类，则返回 true。这对于确定是否应该传递: \`innerRef\` 或 \`ref\` 是很有用的。

  \`\`\`jsx
  import React from 'react';
  import { isStyledComponent } from 'styled-components';
  import MaybeStyledComponent from './somewhere-else';

  const shouldUseInnerRef = isStyledComponent(MaybeStyledComponent);

  class MyComponent extends React.Component {
    componentDidMount() {
      // something interesting with this.el
    }

    render() {
      return React.createElement(
        MaybeStyledComponent, {
          [shouldUseInnerRef ? 'innerRef' : 'ref']: node => { this.el = node; }
        }
      )
    }
  }
  \`\`\`

  它还可以用于决定组件是否需要被封装，以便可以将组件用作[组件选择器](/docs/advanced#引用其他组件):

  \`\`\`jsx
  import React from 'react';
  import styled, { isStyledComponent } from 'styled-components';
  import MaybeStyledComponent from './somewhere-else';

  let TargetedComponent =
    isStyledComponent(MaybeStyledComponent)
      ? MaybeStyledComponent
      : styled(MaybeStyledComponent)\`\`;

  const ParentComponent = styled.div\`
    color: cornflowerblue;

    \${TargetedComponent} {
      color: tomato;
    }
  \`
  \`\`\`
`

export default IsStyledComponent

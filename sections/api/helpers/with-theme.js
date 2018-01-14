import React from 'react'

import md from 'components/md'
import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

const WithTheme = () => md`
  ### \`withTheme\` | web | native

  这是一个高阶组件工厂，用来从 \`ThemeProvider\` 获得当前的主题，并将其作为 \`theme\` 属性传递到组件。

  ${
    <Table head={[ '参数', '描述' ]}>
      <Row>
        <Column>
          1. <Code>Component</Code>
        </Column>
        <Column>
          任何有效的 React 组件，这个组件可以处理 <Code>theme</Code> 属性。
        </Column>
      </Row>
    </Table>
  }

  返回一个包装器（高阶组件），被传入的组件的被封装在里面。
  被传入的组件将接收一个带有当前主题对象的 \`theme\` 属性。

  \`\`\`jsx
  import { withTheme } from 'styled-components'

  class MyComponent extends React.Component {
    render() {
      console.log('Current theme: ', this.props.theme);
      // ...
    }
  }

  export default withTheme(MyComponent)
  \`\`\`

  如果你需要获得主题作为属性，只需要使用这个。
  如果你只需要设置一个有效的样式表属性，你可以使用普通的主题。
  查看[主题](/docs/advanced#主题) 小节来阅读更多关于如何使用它的信息。
`

export default WithTheme

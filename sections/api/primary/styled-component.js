import React from 'react'

import md from 'components/md'
import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

const StyledComponent = () => md`
  ### \`StyledComponent\` | web | native

  一个样式化的 React 组件。当你使用一些样式调用 \`styled.tagname\` 或 \`styled(Component)\` 时将返回它。

  这个组件可以接收任意的属性。如果属性是一个可用的 attribute，它会将属性传递给 HTML 节点，
  否则，它仅会将它传递到插值函数中。（参见[标签模板字符串](/advanced/#标签模板字符串)）

  你可以传递一个任意的 classname 到样式化组件，这不会有什么问题，这个 classname 将被应用到由 styled 调用定义的样式的旁边。
  (例如 \`<MyStyledComp className="bootstrap__btn" />\`)

  #### .extend

  这是一个方法，这个方法将创建一个新的 \`StyledComponent\` 并扩展它的规则。

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

  返回一个新的 \`StyledComponent\` ，新的规则被合并到新生成的样式化组件中。

  更多请参见[扩展样式](/docs/basics#扩展样式)章节。

  #### .withComponent

  这是一个方法，它使用一个不同的标签或组件创建一个新的 \`StyledComponent\`，但调用此方法的组件的所有的规则都将被保留。

  ${
    <Table head={[ '参数', '描述' ]}>
      <Row>
        <Column>
          1. <Code>component</Code> / <Code>tagname</Code>
        </Column>
        <Column>
          一个可用的 React 组件或一个标签名（如\`'div'\`）。
        </Column>
      </Row>
    </Table>
  }

  返回一个带有新的标签/组件新的 \`StyledComponent\`。

  更多请参见[扩展样式](/docs/basics#扩展样式)章节。
`

export default StyledComponent

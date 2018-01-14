import React from 'react'

import md from 'components/md'
import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

const Styled = () => md`
  ### \`styled\` | web | native

  这是该库的默认导出。
  这是一个低阶工厂函数，我们可以用来创建 \`styled.tagname\` 助手方法。

  ${
    <Table head={[ 'Arguments', 'Description' ]}>
      <Row>
        <Column>
          1. <Code>component</Code> / <Code>tagname</Code>
        </Column>
        <Column>
          一个 React 组件或一个标签名（如 <Code>'div'</Code>）。
        </Column>
      </Row>
    </Table>
  }

  返回一个函数，这个函数接受一个标签模板字符串并将其变成一个 \`Styled Component\`。

  \`\`\`jsx
  import styled from 'styled-components';

  const Button = styled.button\`
    background: palevioletred;
    border-radius: 3px;
    border: none;
    color: white;
  \`;

  const TomatoButton = styled(Button)\`
    background: tomato;
  \`;
  \`\`\`

  > 我们鼓励你不要直接使用 \`styled('tagname')\` 符号。
  > 相反，依赖于 \`styled.tagname\` 方法，就像 \`styled.button\` 这样。
  > 我们定义了所有可用的 HTML5 和 SVG 元素。（这也是一个自动的失误检查）

  你可以在[入门](/docs/basics#入门)章节看到这个方法的介绍。

  #### .attrs

  这是一个可链接的方法，将一些属性附着到一个样式化组件上。
  第一个也是唯一的参数是一个将被合并到组件属性中的对象。
  \`attrs\` 对象接受以下值：


  ${
    <Table head={[ '值', '描述' ]}>
      <Row>
        <Column>
          <Code>Prop Value</Code>
        </Column>
        <Column>
          他们可以是任意类型，除了函数。它们将保持静态，并将被合并到现有的组件属性中。
        </Column>
      </Row>

      <Row>
        <Column>
          <Code>Prop Factory</Code>
        </Column>
        <Column>
          一个函数。这个函数接收被传递到组件的属性对象，并计算一个值，这个值将会被合并到现有的组件属性中。
        </Column>
      </Row>
    </Table>
  }

  返回另外的 \`Styled Component\`。

  \`\`\`jsx
  import styled from 'styled-components';

  const Input = styled.input.attrs({
    type: 'text',
    size: props => props.small ? 3 : 8
  })\`
    background: palevioletred;
    border-radius: 3px;
    border: none;
    color: white;
    padding: \${props => props.padding}
  \`;
  \`\`\`

  在[附加额外属性](/docs/basics#附加额外属性)了解更多关于这个构造函数的信息。
`

export default Styled

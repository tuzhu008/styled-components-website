import styled, { css } from 'styled-components'

import rem from '../../utils/rem'
import DocsLayout from '../../components/DocsLayout'
import { Header } from '../../components/Layout'
import Link from '../../components/Link'
import titleToDash from '../../utils/titleToDash'
import { pages } from '../docs.json'
import { mobile, phone } from '../../utils/media'
import { headerFont } from '../../utils/fonts'

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const Column = styled.div`
  width: 33%;
  max-width: 33%;
  flex-basis: 33%;
  padding-right: ${rem(15)};

  ${mobile(css`
    width: 50%;
    max-width: 50%;
    flex-basis: 50%;
  `)}

  ${phone(css`
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
  `)}
`

const SubHeader = styled.h3`
  display: block;
  margin: ${rem(8)} 0;
  font-size: ${rem(18)};
  font-weight: normal;
  font-family: ${headerFont};
`

const Documentation = () => (
  <DocsLayout title="Documentation" description="Learn how to use styled-components and to style your apps without stress">
    <p>
      使用标记的模板字符串(最近添加到 JavaScript)和 CSS 的强大功能，
      styled-components 使您可以编写实际的 CSS 代码来对组件进行样式化。
      它还删除了组件和样式之间的映射——使用组件作为低级样式构造是不容易的！
    </p>

    <Row>
      {
        pages.map(({ title, pathname, sections }) => (
          <Column key={title}>
            <Header>
              <Link href={`/docs/${pathname}`}>
                {title}
              </Link>
            </Header>

            {
              sections.map(({ title }) => (
                <SubHeader key={title}>
                  <Link href={`/docs/${pathname}#${titleToDash(title)}`}>
                    {title}
                  </Link>
                </SubHeader>
              ))
            }
          </Column>
        ))
      }
    </Row>
  </DocsLayout>
)

export default Documentation

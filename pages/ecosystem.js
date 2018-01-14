import React from 'react'

import DocsLayout from '../components/DocsLayout'
import { getReadme } from '../utils/githubApi'
import md from '../components/md'
import escape from '../utils/escape'
import Loading from '../components/Loading'
import Link from '../components/Link'

const Ecosystem = ({ readme, sidebarPages }) => (
  <DocsLayout
    useDocsSidebarMenu={false}
    pages={sidebarPages}
    title="Ecosystem"
    description="Ecosystem of styled-components"
  >
    <p>
      这是一个不完整的清单，列出了使用 styled-components 构建的了不起的东西。如果你有好东西需要分享，请添加到 GitHub <Link href="https://github.com/styled-components/awesome-styled-components" inline>awesome-styled-components</Link> 仓库，它将自动出现这里!
    </p>
    {typeof readme !== 'string' ? <Loading /> : md(
        `
        ${readme}

### 贡献

If you know any projects build with styled components contributions and suggestions are always welcome !
Please read the [contribution guidelines](https://github.com/styled-components/awesome-styled-components/blob/master/contributing.md) first and submit a PR.
        `)}
  </DocsLayout>
)

Ecosystem.getInitialProps = async () => {
  const readme = await getReadme('awesome-styled-components')
  const editedReadme = readme
    .slice(readme.indexOf('\n---\n### Built with styled-components'))
    .split('### Contribute')[0]

  const sidePages = collectPagesFromMd(readme)

  return {
    readme: editedReadme,
    sidebarPages: sidePages,
  }
}

export default Ecosystem

function collectPagesFromMd(md) {
  const TocStartPos = md.indexOf('\n- [Built with styled-components]')
  const TocEndPos = md.indexOf('\n- [Contribute]', TocStartPos)
  const Toc = md.slice(TocStartPos, TocEndPos)
  const linesOfToC = Toc.split('\n')

  const headingIdentifier = '- '
  const subHeadingIdentifier = '  - '

  const sidePages = []

  let lastHeadingIndex = 0

  for (let line of linesOfToC) {
    if (line.startsWith(headingIdentifier)) {
      const { title } = parseMarkdownLink(line)
      // Add heading to the sidePages array
      sidePages.push({ title, /* pathname */ })
      // Due a bug in our strigifier these Github
      // generated links does not work here :(

      // Set lastHeadingIndex so we can add sections later
      lastHeadingIndex = sidePages.length - 1
    } else if (line.startsWith(subHeadingIdentifier)) {
      const { title, href } = parseMarkdownLink(line)

      const lastHeading = sidePages[lastHeadingIndex]
      // Check if it's there
      if (lastHeading) {
        lastHeading.sections = [
          ...(lastHeading.sections || []),
          { title, href }
        ]
      }
    }
  }

  return sidePages
}

function parseMarkdownLink(mdString) {
  const [, title, href ] = /\[([^\]]+)\]\(([^)]+)\)/.exec(mdString)
  return { title: escape(title), href: escape(href) }
}

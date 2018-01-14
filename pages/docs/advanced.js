import React from 'react'
import DocsLayout from '../../components/DocsLayout'
import NextPage from '../../components/NextPage'

import Theming from '../../sections/advanced/theming'
import Refs from '../../sections/advanced/refs'
import Security from '../../sections/advanced/security'
import ExistingCSS from '../../sections/advanced/existing-css'
import MediaTemplates from '../../sections/advanced/media-templates'
import TaggedTemplateLiterals from '../../sections/advanced/tagged-template-literals'
import ServerSideRendering from '../../sections/advanced/server-side-rendering'
import ComponentsAsSelectors from '../../sections/advanced/components-as-selectors'

const Advanced = () =>
  <DocsLayout title="高级" description="Advanced usage of styled-components - Theming, refs, Security, Existing CSS, Media Templates, Tagged Template Literals, SSR">
    <Theming />
    <Refs />
    <Security />
    <ExistingCSS />
    <MediaTemplates />
    <TaggedTemplateLiterals />
    <ServerSideRendering />
    <ComponentsAsSelectors />

    <NextPage href="/docs/api" title="API 参考" />
  </DocsLayout>

export default Advanced

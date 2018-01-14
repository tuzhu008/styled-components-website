import React from 'react'
import DocsLayout from '../../components/DocsLayout'
import NextPage from '../../components/NextPage'

import Primary from '../../sections/api/primary'
import Helpers from '../../sections/api/helpers'
import SupportedCSS from '../../sections/api/supported-css'
import Flow from '../../sections/api/flow'
import TypeScript from '../../sections/api/typescript'

const APIReference = () => (
  <DocsLayout title="API 参考" description="API Reference of styled-components">
    <Primary />
    <Helpers />
    <SupportedCSS />
    <Flow />
    <TypeScript />

    <NextPage href="/docs/tooling" title="工具" />
  </DocsLayout>
)

export default APIReference

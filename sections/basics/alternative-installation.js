import md from 'components/md'

const AlternativeInstallation = () => md`
    ## 其他安装方案

    如果你不使用模块打包器或包管理器，我们也有一个全局("UMD") 构建托管在 [unpkg](http://unpkg.com) CDN。
    简单地添加下面的 \`<script>\` 标签到 HTML 文件的底部：

    \`\`\`
    <script src="https://unpkg.com/styled-components/dist/styled-components.min.js" type="text/javascript"></script>
    \`\`\`

    另外，你可以使用 [bower](https://bower.io) 安装 \`styled-components\`：

    \`\`\`
    bower install styled-components=https://unpkg.com/styled-components/dist/styled-components.min.js
    \`\`\`

    一旦添加了 \`styled-components\`，就可以访问全局的 \`window.styled\` 变量。
`

export default AlternativeInstallation

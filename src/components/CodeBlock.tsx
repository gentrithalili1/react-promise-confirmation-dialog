import React from 'react'
import { CopyBlock, nord } from 'react-code-blocks'

interface CodeBlockProps {
  code: string

  language?: 'bash' | 'tsx'
}

function CodeBlock(props: CodeBlockProps) {
  const { code, language = 'tsx' } = props
  return <CopyBlock language={language} codeBlock={true} showLineNumbers={false} theme={nord} text={code} />
}

export default CodeBlock

import React, { useState } from 'react'
import { CopyBlock, nord } from 'react-code-blocks'
import { ChevronDown, ChevronUp } from 'react-feather'

interface CodeBlockProps {
  open?: boolean
  code: string
  language?: 'bash' | 'tsx'
}

function CodeBlock(props: CodeBlockProps) {
  const { code, open, language = 'tsx' } = props

  const [opened, setOpened] = useState(open ?? false)

  const handleClick = () => {
    setOpened(!opened)
  }

  return (
    <>
      <div className='card'>
        <div
          role='button'
          className={`card-header d-flex justify-content-between ${opened ? 'border-1' : 'border-0'}`}
          id='headingThree'
          onClick={handleClick}
        >
          <h6 className='mb-0'>Show code example</h6>
          {opened ? <ChevronUp /> : <ChevronDown />}
        </div>
        {opened && (
          <div className='card-body'>
            <CopyBlock language={language} codeBlock={true} showLineNumbers={false} theme={nord} text={code} />
          </div>
        )}
      </div>
    </>
  )
}

export default CodeBlock

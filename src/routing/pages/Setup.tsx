import React from 'react'
import CodeBlock from '../../components/CodeBlock'
import setupCode from '../../constants/setup'

function Setup() {
  return (
    <div>
      <div className='mb-5'>
        <p className='text-body mb-1'>1. Install</p>
        <CodeBlock open language='bash' code={setupCode['yarn']} />

        <p className='text-body mt-1 mb-1'>or</p>
        <CodeBlock open language='bash' code={setupCode['npm']} />
      </div>

      <div className='mb-5'>
        <p className='text-body mb-1'>
          2. Wrap your application with <code>PromiseConfirmationContextProvider</code>
        </p>
        <CodeBlock open language='bash' code={setupCode['provider']} />
      </div>
    </div>
  )
}

export default Setup

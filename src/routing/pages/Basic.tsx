import React, { useState } from 'react'
import { usePromiseConfirmation } from 'react-promise-confirmation-dialog'
import CodeBlock from '../../components/CodeBlock'
import basicCode from '../../constants/basic'
import { Check } from 'react-feather'

function Basic() {
  const [confirmed, setConfirmed] = useState(false)
  const confirmation = usePromiseConfirmation()

  const handleConfirmClick = async () => {
    try {
      await confirmation.confirm()
      setConfirmed(true)
    } catch (e) {
      setConfirmed(false)
    }
  }

  const handleResetClick = () => {
    setConfirmed(false)
  }

  return (
    <div>
      <div>
        <h4>Confirm text {confirmed ? <Check color='green' /> : null}</h4>
        <p className='text-body'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at dolorem doloribus fugiat minima perferendis
          quia quibusdam reiciendis sint totam! Adipisci aperiam dolores hic nam voluptatum? Accusamus ad atque culpa
          cum cumque debitis dolore, doloribus ducimus eaque eius enim hic illum ipsa iste iure labore maxime minus,
          nihil porro quaerat quasi quisquam repellat, sunt suscipit tempore ut velit. Ad aperiam architecto culpa,
          debitis hic ipsam iusto non officia perspiciatis quae quo quod, sed similique temporibus vel? Ab beatae
          dignissimos excepturi minus molestiae, nam rerum temporibus vero voluptatum? Aliquam esse id neque nobis
          reprehenderit! Exercitationem ipsum iste, necessitatibus neque suscipit voluptate?
        </p>

        <div className='d-flex'>
          <button disabled={confirmed} className='btn btn-secondary' onClick={handleConfirmClick}>
            {confirmed ? 'Confirmed!' : 'Confirm'}
          </button>

          {confirmed && (
            <button className='btn btn-outline-secondary mx-2' onClick={handleResetClick}>
              Reset
            </button>
          )}
        </div>
      </div>

      <hr className='mt-4 mb-4' />

      <div className='mb-5'>
        <CodeBlock code={basicCode['basic']} />
      </div>
    </div>
  )
}

export default Basic

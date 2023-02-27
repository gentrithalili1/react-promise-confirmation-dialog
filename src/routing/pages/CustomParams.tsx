import React, { useState } from 'react'
import { usePromiseConfirmation } from 'react-promise-confirmation-dialog'
import CodeBlock from '../../components/CodeBlock'
import customParamsCode, { items as initialItems } from '../../constants/custom_params'

function CustomParams() {
  const confirmation = usePromiseConfirmation()

  const [items, setItems] = useState(initialItems)

  const handleConfirmClick = async (item: { id: number; title: string }) => {
    try {
      await confirmation.confirm({
        text: `Delete ${item.title}?`,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at dolorem doloribus fugiat minima perferendi quia quibusdam reiciendis sint totam! Adipisci aperiam dolores hic nam voluptatum?',
        confirmButtonLabel: 'Yes, delete it',
        cancelButtonLabel: 'No, cancel',
      })

      setItems(items.filter((i) => i.id !== item.id))
    } catch (e) {}
  }

  const handleDeleteAll = async () => {
    try {
      await confirmation.confirm({
        text: `Delete all items?`,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at dolorem doloribus fugiat minima perferendi quia quibusdam reiciendis sint totam! Adipisci aperiam dolores hic nam voluptatum?',
        confirmButtonLabel: 'Yes',
        cancelButtonLabel: 'No',
      })

      setItems([])
    } catch (e) {}
  }

  const handleResetClick = () => {
    setItems(initialItems)
  }

  return (
    <div>
      <div>
        <div className='d-flex justify-content-end mb-3'>
          <button className='btn btn-text' onClick={handleDeleteAll}>
            Delete all
          </button>
        </div>
        <div className='row'>
          {items.length ? (
            items.map((item) => {
              return (
                <div key={item.id} className='col-md-4'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>{item.title}</h5>
                      <p className='card-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eos eum fugiat ipsam iure
                        laudantium minus nihil nostrum similique veniam. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Consequatur, iusto.
                      </p>
                      <button className='btn btn-danger' onClick={() => handleConfirmClick(item)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className='container'>
              <div className='alert alert-warning text-center'>No data!</div>
              <button className='btn btn-outline-secondary' onClick={handleResetClick}>
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
      <hr className='mt-4 mb-4' />

      <div className='mb-5'>
        <CodeBlock code={customParamsCode['basic']} />
      </div>
    </div>
  )
}

export default CustomParams

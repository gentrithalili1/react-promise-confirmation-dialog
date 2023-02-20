import React, { PropsWithChildren } from 'react'
import { PromiseConfirmationData } from 'types'
import './PromiseConfirmationModal.css'

export default function PromiseConfirmationModal(
  props: PropsWithChildren<PromiseConfirmationData>,
) {
  const { isOpen, text, children, customComponent, onCancel, onConfirm } = props

  const handleConfirm = () => {
    onConfirm?.()
  }

  const handleCancel = () => {
    onCancel?.()
  }

  const renderCustomComponent = () => {
    const { customComponent, ...rest } = props

    return customComponent?.(rest)
  }

  return (
    <div
      className={`PromiseConfirmationModal ${
        isOpen ? 'PromiseConfirmationModal--visible' : ''
      }`.trimEnd()}
    >
      {customComponent ? (
        renderCustomComponent()
      ) : (
        <div className='PromiseConfirmationModal__wrapper'>
          <div className='PromiseConfirmationModal__head'>
            <h3>{text}</h3>
            <button onClick={handleCancel} className='PromiseConfirmationModal__close'>
              X
            </button>
          </div>

          <div className='PromiseConfirmationModal__body'>{children}</div>

          <div className='PromiseConfirmationModal__footer'>
            <button onClick={handleConfirm}>Yes</button>
            <button onClick={handleCancel}>No</button>
          </div>
        </div>
      )}
    </div>
  )
}

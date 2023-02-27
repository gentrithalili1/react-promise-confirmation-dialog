import React from 'react'
import { PromiseConfirmationData } from 'react-promise-confirmation-dialog'
import { ArrowRight } from 'react-feather'
interface WelcomeModalProps extends PromiseConfirmationData {}

function WelcomeModal(props: WelcomeModalProps) {
  const { isOpen, text, onCancel, onConfirm } = props
  return (
    <div className={`modal ${isOpen ? 'd-block show' : ''}`} tabIndex={-1} role='dialog'>
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{text}</h5>
            <button
              type='button'
              className='btn btn-close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={() => onCancel?.()}
            ></button>
          </div>
          <div className='modal-body'>
            <p className='text-body'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos eaque et exercitationem id
              ipsa, iusto, maiores maxime minus recusandae repellat ullam ut voluptate! Asperiores atque cum obcaecati
              odio quae.
            </p>
          </div>
          <div className='modal-footer' onClick={onConfirm}>
            <button type='button' className='btn btn-primary'>
              Next <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeModal

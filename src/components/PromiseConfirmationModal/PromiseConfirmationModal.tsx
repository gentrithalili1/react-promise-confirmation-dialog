import React from 'react'
import ReactPortal from '../ReactPortal/ReactPortal'
import { PromiseConfirmationData } from '../../types'
import CloseIcon from '../../icons/CloseIcon'

interface PromiseConfirmationModalProps extends PromiseConfirmationData {
  portalElementId?: string
}

const mainClassName = 'PromiseConfirmationModal'
const clsName = (suffix: string) => `${mainClassName}__${suffix}`

export default function PromiseConfirmationModal(props: PromiseConfirmationModalProps) {
  const {
    portalElementId,
    isOpen,
    text,
    description,
    confirmButtonLabel,
    cancelButtonLabel,
    customComponent,
    onCancel,
    onConfirm,
  } = props

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

  if (!isOpen) {
    return null
  }

  return (
    <ReactPortal portalElementId={portalElementId}>
      <div className={mainClassName}>
        {customComponent ? (
          renderCustomComponent()
        ) : (
          <div className={clsName('wrapper')}>
            <div className={clsName('head')}>
              <h3 className={clsName('title')}>{text}</h3>
              <button onClick={handleCancel} className={clsName('close')}>
                <CloseIcon />
              </button>
            </div>

            {description && <div className={clsName('body')}>{description}</div>}

            <div className={clsName('footer')}>
              <button onClick={handleConfirm}>{confirmButtonLabel}</button>
              <button onClick={handleCancel}>{cancelButtonLabel}</button>
            </div>
          </div>
        )}
      </div>
    </ReactPortal>
  )
}

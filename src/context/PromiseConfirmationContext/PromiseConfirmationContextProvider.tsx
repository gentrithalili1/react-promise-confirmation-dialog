import React, { PropsWithChildren, useCallback, useMemo, useState } from 'react'
import {
  PromiseConfirmationData,
  PromiseConfirmParams,
  PromiseConfirmationContext as IPromiseConfirmationContext,
} from '../../types'
import PromiseConfirmationModal from '../../components/PromiseConfirmationModal/PromiseConfirmationModal'
import PromiseConfirmationContext from './PromiseConfirmationContext'

interface ConfirmationContextProviderProps {
  config?: {
    portalElementId?: string
    text?: string
    confirmButtonLabel?: string
    cancelButtonLabel?: string
  }
}

const initialValues = {
  text: 'Are you sure?',
  confirmButtonLabel: 'Confirm',
  cancelButtonLabel: 'Cancel',
}

export default function PromiseConfirmationContextProvider(
  props: PropsWithChildren<ConfirmationContextProviderProps>,
) {
  const { config } = props

  const [state, setState] = useState<PromiseConfirmationData>(() => ({
    text: config?.text ?? initialValues.text,
    confirmButtonLabel: config?.confirmButtonLabel ?? initialValues.confirmButtonLabel,
    cancelButtonLabel: config?.cancelButtonLabel ?? initialValues.cancelButtonLabel,
    isOpen: false,
    onConfirm: () => {},
    onCancel: () => {},
  }))

  const confirm = (params?: PromiseConfirmParams) => {
    const { text, confirmButtonLabel, cancelButtonLabel, ...restParams } = params ?? {}

    const textData = {
      text: text || config?.text || initialValues.text,
      confirmButtonLabel:
        confirmButtonLabel || config?.confirmButtonLabel || initialValues.confirmButtonLabel,
      cancelButtonLabel:
        cancelButtonLabel || config?.cancelButtonLabel || initialValues.cancelButtonLabel,
    }

    return new Promise((resolve, reject) => {
      setState({
        ...restParams,
        ...textData,
        isOpen: !state.isOpen,
        onConfirm: () => {
          setState({ ...state, isOpen: false, ...textData })
          resolve(true)
        },
        onCancel: (reason?: string) => {
          setState({ ...state, isOpen: false, ...textData })
          reject(reason)
        },
      })
    })
  }

  const memoizedConfirm = useCallback(confirm, []) // eslint-disable-line react-hooks/exhaustive-deps

  const context: IPromiseConfirmationContext = useMemo(
    () => ({
      confirm: memoizedConfirm,
    }),
    [memoizedConfirm],
  )

  return (
    <PromiseConfirmationContext.Provider value={context}>
      <PromiseConfirmationModal {...state} portalElementId={config?.portalElementId} />
      {props.children}
    </PromiseConfirmationContext.Provider>
  )
}

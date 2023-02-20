import React, { PropsWithChildren, useState } from 'react'
import {
  PromiseConfirmationData,
  PromiseConfirmParams,
  PromiseConfirmationContext as IPromiseConfirmationContext,
} from 'types'
import PromiseConfirmationContext from './PromiseConfirmationContext'
import PromiseConfirmationModal from 'components/PromiseConfirmationModal/PromiseConfirmationModal'

interface ConfirmationContextProviderProps {
  config?: {
    defaultText?: string
  }
}

const voidFunction = () => {}
const defaultText = 'Are you sure?'

export default function PromiseConfirmationContextProvider(
  props: PropsWithChildren<ConfirmationContextProviderProps>,
) {
  const [state, setState] = useState<PromiseConfirmationData>(() => ({
    text: props?.config?.defaultText ?? defaultText,
    isOpen: false,
    onConfirm: voidFunction,
    onCancel: voidFunction,
  }))

  function confirm(params: PromiseConfirmParams) {
    const { text: txt, ...restParams } = params
    const text = txt || defaultText

    return new Promise((resolve, reject) => {
      setState({
        ...restParams,
        text: text,
        isOpen: !state.isOpen,
        onConfirm: () => {
          setState({ ...state, isOpen: false, text })
          resolve(true)
        },
        onCancel: (reason?: string) => {
          setState({ ...state, isOpen: false, text })
          reject(reason)
        },
      })
    })
  }

  const context: IPromiseConfirmationContext = {
    confirm: confirm,
  }

  return (
    <PromiseConfirmationContext.Provider value={context}>
      <PromiseConfirmationModal {...state} />
      {props.children}
    </PromiseConfirmationContext.Provider>
  )
}

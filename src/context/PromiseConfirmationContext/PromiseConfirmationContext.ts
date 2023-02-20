import { createContext } from 'react'
import { PromiseConfirmationContext as IPromiseConfirmationContext } from '@types'

const defaultContext = {
  confirm: () => new Promise((resolve) => resolve),
}

const PromiseConfirmationContext = createContext<IPromiseConfirmationContext>(defaultContext)
export default PromiseConfirmationContext

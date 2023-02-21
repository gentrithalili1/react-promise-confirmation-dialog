import { ReactNode } from 'react'

export interface ObjectAny {
  [key: string]: any
}

export interface PromiseConfirmationContext {
  confirm: (params?: PromiseConfirmParams) => Promise<unknown>
}

export interface PromiseConfirmationData {
  text?: string
  description?: string
  confirmButtonLabel?: string
  cancelButtonLabel?: string
  isOpen: boolean
  customData?: ObjectAny
  onConfirm: () => void
  onCancel: (reason?: string) => void
  customComponent?: (params: Omit<PromiseConfirmationData, 'customComponent'>) => ReactNode
}

export interface PromiseConfirmParams
  extends Omit<PromiseConfirmationData, 'onConfirm' | 'onCancel' | 'isOpen'> {}

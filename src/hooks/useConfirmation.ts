import { useContext } from 'react'
import PromiseConfirmationContext from '../context/PromiseConfirmationContext/PromiseConfirmationContext'

export default function usePromiseConfirmation() {
  return useContext(PromiseConfirmationContext)
}

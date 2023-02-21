import { ReactNode, useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

const defaultReactPortalProps = {
  portalElementId: 'react-promise-confirmation-dialog-portal',
}

interface ReactPortalProps {
  children: ReactNode
  portalElementId?: string
}

export default function ReactPortal({
  children,
  portalElementId = defaultReactPortalProps.portalElementId,
}: ReactPortalProps) {
  const [wrapper, setWrapper] = useState<Element | null>(null)

  useLayoutEffect(() => {
    let element = document.getElementById(portalElementId)
    let created = false
    if (!element) {
      created = true
      const wrapper = document.createElement('div')
      wrapper.setAttribute('id', portalElementId)
      document.body.appendChild(wrapper)
      element = wrapper
    }
    setWrapper(element)
    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [portalElementId])

  if (!wrapper) {
    return null
  }

  return createPortal(children, wrapper)
}

import React, { useState } from 'react'
import { usePromiseConfirmation } from 'react-promise-confirmation-dialog'
import CodeBlock from '../../components/CodeBlock'
import customComponentCode from '../../constants/custom_component'
import WelcomeModal from '../../components/WelcomeModal'

function CustomComponent() {
  const confirmation = usePromiseConfirmation()

  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  })

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!formData.email || !formData.password) {
      return
    }
    await showWelcomeModal()
  }

  const showWelcomeModal = async () => {
    try {
      await confirmation.confirm({
        text: `Welcome ${formData.email}!`,
        customComponent: WelcomeModal,
      })
    } catch (e) {}
  }

  return (
    <div>
      <div className='row'>
        <div className='col-md-4'>
          <form onSubmit={handleSubmit}>
            <div className='form-group mb-3'>
              <label htmlFor='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                name='email'
                className='form-control'
                aria-describedby='emailHelp'
                placeholder='Enter email'
                value={formData.email}
                onChange={handleOnChange}
              />
            </div>
            <div className='form-group mb-3'>
              <label htmlFor='exampleInputPassword1'>Password</label>
              <input
                type='password'
                name='password'
                className='form-control'
                placeholder='Password'
                value={formData.password}
                onChange={handleOnChange}
              />
            </div>
            <button type='submit' className='btn btn-success'>
              Submit
            </button>
          </form>
        </div>
      </div>
      <hr className='mt-4 mb-4' />

      <div>
        <p className='text-body'>
          If you pass a custom component to <code>confirm()</code> function, you will be able to access the other params
          as props inside that component.
        </p>
      </div>
      <div className='mb-4'>
        <CodeBlock code={customComponentCode['customComponent']} />
      </div>
      <div className='mb-4'>
        <p className='text-body'>
          If you need to pass other custom data to that component, you can do it by using <code>customData</code>{' '}
          property.
        </p>
      </div>
      <div className='mb-4'>
        <CodeBlock code={customComponentCode['customData']} />
      </div>
    </div>
  )
}

export default CustomComponent

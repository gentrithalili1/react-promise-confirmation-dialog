export default {
  customComponent: `import { usePromiseConfirmation } from "react-promise-confirmation-dialog";

function App() {
  const confirmation = usePromiseConfirmation();  
  
  const showWelcomeModal = async () => {
    try {
      await confirmation.confirm({
        text: "Welcome John Doe",
        customComponent: WelcomeModal,
      })
      // Your code after confirmation is resolved ...
    } catch (e) {
      // Your code after confirmation is declined ...
    }
  }
    
  return (
    <div>
       <button onClick={showWelcomeModal}>Show Welcome Modal</button>
    </div>
  );
}

interface WelcomeModalProps extends PromiseConfirmationData {}

function WelcomeModal(props: WelcomeModalProps) {
  const { isOpen, text, onCancel, onConfirm } = props
  
  if(!isOpen) {
      return null;
  }
  
  return (
    <div className="modal show" tabIndex={-1} role='dialog'>
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
`,
  customData: `
const showWelcomeModal = async () => {
  try {
    await confirmation.confirm({
      text: "Welcome John Doe",
      customData: {
        isLoggedIn: true,
        address: 'Lorem ipsum dolor'
      },
      customComponent: WelcomeModal,
    })
    
    // Your code after confirmation is resolved ...
  } catch (e) 
    // Your code after confirmation is declined ...
  }
}

function WelcomeModal(props: WelcomeModalProps) {
  const { customData } = props
  
  return (
    <div className="modal show" tabIndex={-1} role='dialog'>
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-body'>
              <p className='text-body'>
               {customData.isLoggedIn}
              </p>
              <p className='text-body'>
               {customData.address}
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}
  
  `,
}

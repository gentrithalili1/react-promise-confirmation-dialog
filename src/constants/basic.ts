export default {
  basic: `import { usePromiseConfirmation } from "react-promise-confirmation-dialog";

function App() {
  const confirmation = usePromiseConfirmation();  
  
  const handleClick = async = () => {
      try {
          await confirmation.confirm()
          // Your code after confirmation is resolved ...
      } catch () {
         // Your code after confirmation is declined ...
      }
  }  
    
  return (
    <div>
       <button onClick={handleClick}>Confirm</button>
    </div>
  );
}
`,
}

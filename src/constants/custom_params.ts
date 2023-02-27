export const items = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
]
export default {
  basic: `import { usePromiseConfirmation } from "react-promise-confirmation-dialog";

function App() {
  const confirmation = usePromiseConfirmation();  
  
  const handleClick = async = () => {
      try {
          await confirmation.confirm({
            text: 'Adipisci aperiam dolores hic nam voluptatum?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at dolorem doloribus fugiat minima perferendi quia quibusdam reiciendis sint totam!',
            confirmButtonLabel: 'Yes, delete it',
            cancelButtonLabel: 'No, cancel',
          })
          // Your code after confirmation is resolved ...
      } catch () {
         // Your code after confirmation is declined 
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

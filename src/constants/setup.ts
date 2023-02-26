export default {
  yarn: `yarn add react-promise-confirmation-dialog`,
  npm: `npm install react-promise-confirmation-dialog`,
  provider: `import { PromiseConfirmationContextProvider } from 'react-promise-confirmation-dialog'

function App() {
  return (
    <PromiseConfirmationContextProvider>
      // Your components 
    </PromiseConfirmationContextProvider>
  );
}
`,
}

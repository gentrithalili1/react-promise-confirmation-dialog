<h3 align="center">Welcome to <code>react-promise-confirmation-dialog</code> 👋</h3>
<p>
  <a href="https://www.npmjs.com/package/react-promise-confirmation-dialog" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/react-promise-confirmation-dialog">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## Intro

React Promise Confirmation Dialog is a simple and easy-to-use package that allows you to create dynamic and customizable confirmation dialogs. You can easily handle user confirmation and rejection responses using promises.

This package is customizable, allowing you to easily tailor the look and feel of your dialogs to match the style of your application.

### ✨ [Live Demo](https://gentrithalili1.github.io/react-promise-confirmation-dialog/)
##

## Install

Install `react-promise-confirmation-dialog` via `yarn` or `npm`

```sh
yarn add react-promise-confirmation-dialog
```

```sh
npm i react-promise-confirmation-dialog
```

## Usage

```js
import { PromiseConfirmationContextProvider } from 'react-promise-confirmation-dialog'
```

```jsx
function Index() {
  return (
    <PromiseConfirmationContextProvider>
      <App />
    </PromiseConfirmationContextProvider>
  );
}
```

```jsx
function App() {
  const handleConfirmClick = async () => {
    try {
      await confirmation.confirm()
      // Your code after confirmation is resolved ...
    } catch (rejectReason) {
      // Your code after confirmation is declined ...
    }
  };
  
  return (
    <div>
      <button onClick={handleConfirmClick}>Confirm</button>
    </div>
  );
}
```


## Props and Configurations
You can provide default configuration to <code>PromiseConfirmationContextProvider</code>

```jsx
function Index() {
  return (
    <PromiseConfirmationContextProvider config={{
        portalElementId: '',
        text: '',
        confirmButtonLabel: '',
        cancelButtonLabel: ''
    }}>
      <App />
    </PromiseConfirmationContextProvider>
  );
}
```
| name              | type      | default       | description                                     |
|-------------------| --------- |---------------|-------------------------------------------------|
| `portalElementId` | `string`  | undefined     | Custom element to render the confirmation modal |
| `text`            | `string`  | Are you sure? | Modal title.                                    |
| `confirmButtonLabel` | `string` | `Confirm`     | Confirm button text                             |
| `cancelButtonLabel`| `string`  | Cancel        | Decline button text                             |  |

---

You can also provide custom params everytime you open a confirmation dialog 

```jsx
function App() {
    const handleConfirmClick = async () => {
        try {
            await confirmation.confirm({
                text: '',
                confirmButtonLabel: '',
                cancelButtonLabel: '',
                customData: '',
                customComponent: ''
            })
            // Your code after confirmation is resolved ...
        } catch (rejectReason) {
            // Your code after confirmation is declined ...
        }
    };

    return (
        <div>
            <button onClick={handleConfirmClick}>Confirm</button>
        </div>
    );
}
```

| name                 | type   | default     | description                            |
|----------------------|--------|-------------|----------------------------------------|
| `text`               | `string` | Are you sure? | Modal title                            |
| `confirmButtonLabel` | `string` | Confirm     | Confirm button text                    |
| `cancelButtonLabel`  | `string` | Cancel      | Decline button text                    |  |
| `customData`         | `any`  | undefined   | Custom data when using custom components |  |
| `customComponent`    | `(params: Omit<PromiseConfirmationData, 'customComponent'>) => ReactNode`    | undefined   | Custom component                       |  |

---

## Todos

- [ ] Default custom component support


## Author
- Github: [@gentrithalili1](https://github.com/gentrithalili1)

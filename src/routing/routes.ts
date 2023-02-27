import Setup from './pages/Setup'
import Basic from './pages/Basic'
import { RouteNames } from '../types/routing'
import CustomComponent from './pages/CustomComponent'
import CustomParams from './pages/CustomParams'
import MultipleConfirmationDialogs from './pages/MultipleConfirmationDialogs'

const routes = [
  {
    path: RouteNames.SETUP,
    element: Setup,
  },
  {
    path: RouteNames.BASIC,
    element: Basic,
  },
  {
    path: RouteNames.CUSTOM_PARAMS,
    element: CustomParams,
  },
  {
    path: RouteNames.CUSTOM_COMPONENT,
    element: CustomComponent,
  },
  {
    path: RouteNames.MULTIPLE_CONFIRMATION_DIALOGS,
    element: MultipleConfirmationDialogs,
  },
]

export default routes

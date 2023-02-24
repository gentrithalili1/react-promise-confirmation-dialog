import Setup from './pages/Setup'
import Basic from './pages/Basic'
import { RouteNames } from '../types/routing'
import CustomComponent from './pages/CustomComponent'

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
    path: RouteNames.CUSTOM_COMPONENT,
    element: CustomComponent,
  },
]

export default routes

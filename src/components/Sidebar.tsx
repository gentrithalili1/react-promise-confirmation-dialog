import React from 'react'
import { NavLink } from 'react-router-dom'
import { RouteNames } from '../types/routing'

const links = [
  {
    title: 'Setup',
    path: RouteNames.SETUP,
  },
  {
    title: 'Basic example',
    path: RouteNames.BASIC,
  },
  {
    title: 'Custom params',
    path: RouteNames.CUSTOM_PARAMS,
  },
  {
    title: 'Custom component',
    path: RouteNames.CUSTOM_COMPONENT,
  },
  {
    title: 'Multiple confirmation dialogs',
    path: RouteNames.MULTIPLE_CONFIRMATION_DIALOGS,
  },
]

function Sidebar() {
  return (
    <div className='d-flex flex-column align-items-stretch flex-shrink-0 bg-white'>
      <div className='list-group list-group-flush border-bottom scrollarea'>
        {links.map((item) => {
          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                ['list-group-item list-group-item-action py-3 lh-sm', isActive ? ' active' : '']
                  .filter(Boolean)
                  .join('')
              }
              aria-current='true'
            >
              <div className='d-flex w-100 align-items-center justify-content-between'>
                <strong className='mb-1'>{item.title}</strong>
              </div>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar

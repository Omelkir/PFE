// React Imports
import type { ReactNode } from 'react'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '@core/types'

// Util Imports
import { horizontalLayoutClasses } from './utils/layoutClasses'
import LayoutContent from './components/vertical/LayoutContent'
import LayCont from './components/layCont'

type HorizontalLayoutProps = ChildrenType & {
  nav?: ReactNode
}

const HorizontalLayout = (props: HorizontalLayoutProps) => {
  // Props
  const { nav, children } = props

  return (
    <div className={classnames(horizontalLayoutClasses.root, 'flex flex-row min-h-screen')}>
      <div className='sticky top-0 bg-white z-50'>{nav || null}</div>
      <div className='flex flex-row flex-auto pt-16'>
        <div className={classnames(horizontalLayoutClasses.contentWrapper, 'flex-1 flex-auto')}>
          <LayCont>{children}</LayCont>
        </div>
      </div>
    </div>
  )
}

export default HorizontalLayout

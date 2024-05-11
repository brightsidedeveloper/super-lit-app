import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { initializeTheme, mediaThemeEventListener, storageThemeEventListener } from '../utils/darkMode'

export const Route = createRootRouteWithContext()({
  beforeLoad() {
    initializeTheme()
    mediaThemeEventListener()
    storageThemeEventListener()
  },
  component: Root,
})

function Root() {
  return (
    <>
      {/* <div className='p-2 flex gap-2'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>
      </div>
      <hr /> */}
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}

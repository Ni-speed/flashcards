import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { CardsTable } from '@/cards/cards-table.tsx'
import { useGetDecksQuery } from '@/services/decks'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <div>login</div>,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>hello</div>,
  },
  {
    path: '/cards',
    element: <CardsTable />,
  },
]

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
  {
    path: '*',
    element: <h1>404</h1>,
  },
])

export const Router = () => {
  const { data, isLoading, isError } = useGetDecksQuery()

  if (isLoading) return <>Loading...</>
  if (isError) return <>Error</>
  console.log(data)

  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import '@/App.scss'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <div>
                <button>
                    <span>Click</span>
                </button>
            </div>
        ),
    },
])

export const App = () => {
    return <RouterProvider router={router} />
}

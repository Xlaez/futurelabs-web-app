import About from '../components/About/about'
import Home from '../components/Home/home'
import Services from '../components/Services/services'
import strategy from '../components/strategy/strategy'

const pageRoutes = [
    {path: '/about', element: About },
    {path: '/services', element: Services },
    {path: '/strategy', element: strategy },
    {path: '/', element: Home },
]

export default pageRoutes
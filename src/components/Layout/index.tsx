import { FC, ReactNode } from 'react'
import './Layout.scss'

interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className='h-100'>
            { children }
        </div>
    )
}

export default Layout
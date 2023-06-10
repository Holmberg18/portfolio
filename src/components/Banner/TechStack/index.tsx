import { FC } from 'react'
import { 
    TypeScriptSVG,
    ReactSVG, 
    JavaScriptSVG, 
    NextjsSVG,
    ReduxSVG
} from '@/components/Banner/SVG'

const TechStack: FC = () => {
    return(
        <>
            <ReactSVG />
            <TypeScriptSVG />
            <JavaScriptSVG />
            <NextjsSVG />
            <ReduxSVG />
        </>
    )
}

export default TechStack
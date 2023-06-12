import { FC } from 'react'
import { 
    TypeScriptSVG,
    ReactSVG, 
    JavaScriptSVG, 
    NextjsSVG,
    ReduxSVG
} from '@/components/SVG'

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
import { FC } from 'react'
import { 
    TypeScriptSVG,
    ReactSVG, 
    JavaScriptSVG, 
    VueSVG,
    SassSVG,
    LessSVG,
    ReduxSVG
} from '@/components/SVG'

const TechStack: FC = () => {
    return(
        <>
            <ReactSVG />
            <TypeScriptSVG />
            <JavaScriptSVG />
            <VueSVG />
            <SassSVG />
            <LessSVG />
            <ReduxSVG />
        </>
    )
}

export default TechStack
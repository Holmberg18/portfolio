import { FC, useContext, useMemo, ReactNode } from 'react'
import { 
    Container,
    Row, 
    Col, 
    Image, 
    Stack, 
    SocialLinks 
} from '@/components'
import { techStack } from './TechStack'
import DataContext from '@/context/DataContext'


const Banner: FC = () => {

    const data: PortfolioData = useContext(DataContext)
    const banner_data: {intro: JSONObject, stack: ReactNode} = useMemo(() => {
        return {intro: data?.portfolio_data.intro, stack: techStack}
    },[data])

    return(
        <Container id="banner" fluid style={{backgroundColor: "#ededed"}} className="d-flex justify-content-center p-5">
            <Row>
                <Col className='d-flex flex-wrap justify-content-center'>
                    <Stack className="mx-4 py-5 gap-2">
                        <h1 className="display-4">{banner_data?.intro.title}</h1>
                        <p className="lead">{banner_data?.intro.welcome}</p>
                        <p className="lead">
                            {banner_data.intro.tech_stack}
                            <div className="vr h-100 align-middle border border-dark mx-1" />
                            {banner_data.stack}
                        </p>
                        <SocialLinks socialLinks={{
                            github: banner_data?.intro.github,
                            linkedin: banner_data?.intro.linkedin
                        }}
                        />
                    </Stack>
                    <Image 
                        className="mx-5" 
                        fluid 
                        rounded
                        src={process.env.PUBLIC_URL + "images/developer_profile.jpg"}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Banner
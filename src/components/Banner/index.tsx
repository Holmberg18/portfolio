import { FC, useContext, useMemo } from 'react'
import { 
    Container,
    Row, 
    Col, 
    Image, 
    Stack, 
    TechStack, 
    SocialLinks 
} from '@/components'
import DataContext from '@/context/DataContext'
import './Banner.scss'

const Banner: FC = () => {

    const data: PortfolioData = useContext(DataContext)
    const banner_data: JSONObject = useMemo(() : JSONObject => {
        const { intro, social_links }: DataSection = data?.portfolio_data
        return({
            title: intro.title,
            welcome: intro.welcome,
            tech_stack: intro.tech_stack,
            github: social_links.github,
            linkedin: social_links.linkedin
        })
    }, [data])

    return(
        <Container fluid className="p-5 banner-container d-flex justify-content-center">
            <Row>
                <Col className='d-flex flex-wrap justify-content-center'>
                    <Stack className='stack-info'>
                        <h1>{banner_data?.title}</h1>
                        <p className='banner-welcome'>{banner_data?.welcome}</p>
                        <p>
                            {banner_data?.tech_stack}
                            <TechStack />
                        </p>
                        <SocialLinks socialLinks={{
                            github: banner_data?.github,
                            linkedin: banner_data?.linkedin
                        }}
                        />
                    </Stack>
                    <Image 
                        className="profile-pic" 
                        fluid 
                        src={process.env.PUBLIC_URL + "images/developer_profile.jpg"} 
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Banner
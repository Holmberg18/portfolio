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
    const banner_data: JSONObject = useMemo(() => data?.portfolio_data.intro,[data])

    return(
        <Container id="banner" fluid className="banner-container d-flex justify-content-center p-5 ">
            <Row>
                <Col className='d-flex flex-wrap justify-content-center'>
                    <Stack className="mx-4 py-4">
                        <h1>{banner_data?.title}</h1>
                        <p>{banner_data?.welcome}</p>
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
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
    const banner_data: { intro: JSONObject, stack: ReactNode } = useMemo(() => {
        return { intro: data?.portfolio_data.intro, stack: techStack }
    }, [data])

    return (
        <Container fluid id="banner" style={{ backgroundColor: "#ededed" }} className="p-3 mb-5">
            <Row className="d-flex justify-content-center">
                <Col sm={12} md={5} lg={4} className="d-flex justify-content-center">
                    <Stack className="gap-2 mx-auto">
                        <h1 className="display-4">{banner_data?.intro.title}</h1>
                        <p className="lead">{banner_data?.intro.welcome}</p>
                        <div className="lead">
                            {banner_data.intro.tech_stack}
                            <div className="vr align-middle border border-dark mx-1" />
                            {banner_data.stack}
                        </div>
                        <SocialLinks socialLinks={{
                            github: banner_data?.intro.github,
                            linkedin: banner_data?.intro.linkedin
                        }}
                        />
                    </Stack>
                </Col>
                <Col sm={12} md={8} lg={6} xl={5} className="d-flex justify-content-center">
                    <Image
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
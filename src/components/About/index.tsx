import { FC, useContext, useMemo } from 'react'
import {
    Container,
    Row,
    Col,
    Image,
    Stack
} from "@/components"
import DataContext from '@/context/DataContext'
import './About.scss'

const About: FC = () => {


    const data: PortfolioData = useContext(DataContext)
    const about_data: JSONObject = useMemo(() => data?.portfolio_data.about,[data])

    return(
        <Container fluid className="p-5 about-container d-flex justify-content-center">
            <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                    <Image fluid src={process.env.PUBLIC_URL + "images/wfh-hero.jpg"} className="hero-pic rounded" />
                    <Stack className="px-5 py-3 bio-stack">
                        <h3>{about_data?.title}</h3>
                        <p>{about_data?.bio}</p>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default About
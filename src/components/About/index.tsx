import { FC, useContext, useMemo } from 'react'
import { Container, Row, Col, Image, Stack } from "@/components"
import DataContext from '@/context/DataContext'

const About: FC = () => {

    const data: PortfolioData = useContext(DataContext)
    const about_data: JSONObject = useMemo(() => data?.portfolio_data.about,[data])

    return(
        <Container fluid id="about" className="d-flex align-items-center h-100">
            <Row className="justify-content-center">
                <Col className="my-auto mx-3" md="auto" xs={12} sm={10}>
                    <Image
                        fluid
                        rounded
                        src={process.env.PUBLIC_URL + "images/wfh-hero.jpg"} 
                    />
                </Col>
                <Col lg={3} className="m-3">
                    <Stack>
                        <h3>{about_data?.title}</h3>
                        <p>{about_data?.bio_1}</p>
                        <p>{about_data?.bio_2}</p>
                        <p>{about_data?.bio_3}</p>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default About
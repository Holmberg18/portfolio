import { FC, useContext, useMemo, RefObject } from 'react'
import { Container, Row, Col, Image, Stack } from "@/components"
import DataContext from '@/context/DataContext'

interface Props{
    refObj:RefObject<HTMLHeadingElement>
}
const About: FC<Props> = ({ refObj }) => {

    const data: PortfolioData = useContext(DataContext)
    const about_data: JSONObject = useMemo(() => data?.portfolio_data.about,[data])

    return(
        <Container fluid className="d-flex align-items-center h-100">
            <Row className="justify-content-center">
                <Col md="auto" xs={12} sm={10}>
                    <Image
                        fluid
                        rounded
                        src={process.env.PUBLIC_URL + "images/wfh-hero.jpg"} 
                    />
                </Col>
                <Col lg={3} className="m-3">
                    <Stack>
                        <h3 ref={refObj}>{about_data?.title}</h3>
                        <p>{about_data?.bio}</p>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default About
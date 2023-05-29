import { FC, useContext, useMemo } from 'react'
import { Container, Row, Col, Image, Stack, TechStack } from '../../components'
import DataContext from '../../context/DataContext'
import './Banner.scss'

const Banner: FC = () => {

    type JSONObject = {[key: string]: string}
    const data: {[key: string]: JSONObject} = useContext(DataContext)
    const intro: JSONObject = useMemo(() =>
        data ? data.portfolio_data?.intro : {}
    ,[data])

    return(
        <Container fluid className="p-5 banner-container d-flex justify-content-center">
            <Row fluid>
                <Col fluid className='d-flex flex-wrap'>
                    <Stack className='stack-info'>
                        <h1>{intro.title}</h1>
                        <p>{intro.welcome}</p>
                        <p>
                            {intro.tech_stack}
                            <TechStack />
                        </p>
                    </Stack>
                    <Image className="profile-pic" fluid src={process.env.PUBLIC_URL + "images/developer_profile.jpg"} />
                </Col>
            </Row>
        </Container>
    )
}

export default Banner
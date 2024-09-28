import { useContext, useMemo } from 'react'
import {
    Container,
    Row,
    Col,
    Stack,
    ProjectCard,
    Company
} from '@/components'
import DataContext from '@/context/DataContext'

const Project = () => {

    const data: PortfolioData = useContext(DataContext)
    const { project1, project_header }: JSONObject = useMemo(() => data?.portfolio_data, [data])

    return (
        <Container id="projects" fluid className="px-3" style={{ marginBottom: "25rem" }}>
            <Row md="auto" className="mb-5 mx-2 px-5 justify-content-center">
                <Col md="auto" lg={7}>
                    <Stack>
                        <h1 className="display-4">{project_header.title}</h1>
                        <p className="lead">{project_header.dev}</p>
                    </Stack>
                </Col>
            </Row>
            <ProjectCard data={project1} img="spice_delight" />
            <Row md="auto" className="mt-4 mb-3 mx-2 px-5 justify-content-center">
                <Col md="auto" lg={7}>
                    <Stack>
                        <h1 className="display-4">{project_header.company_header}</h1>
                        <p className="lead">{project_header.company_notes}</p>
                    </Stack>
                </Col>
            </Row>
            <Company />
        </Container>
    )
}

export default Project
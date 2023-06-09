import { FC, useContext, useMemo } from 'react'
import { 
    Container, 
    Row, 
    Col, 
    Stack, 
    ProjectCard 
} from '@/components'
import DataContext from '@/context/DataContext'
 
const Project: FC = () => {

    const data: PortfolioData = useContext(DataContext)
    const { project1, project2, project_header}: JSONObject = useMemo(() => data?.portfolio_data,[data])

    return(
        <Container id="projects" fluid className="px-3" style={{marginBottom: "25rem"}}>
            <Row md="auto" className="mb-5 mx-2 px-5 justify-content-center">
                <Col md="auto" lg={7}>
                    <Stack>
                        <h1 className="display-4">{project_header.title}</h1>
                        <p className="lead">{project_header.dev}</p>
                    </Stack>
                </Col>
            </Row>
            <ProjectCard data={project1} img="novus_auto" />
            <ProjectCard left data={project2} img="aether_mobile" />
        </Container>
    )
}

export default Project
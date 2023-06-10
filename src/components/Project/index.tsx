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
    const { project1, project2, project_header}: DataSection = useMemo(() => data?.portfolio_data,[data])

    return(
        <Container fluid className="h-100">
            <Row md="auto" className="transition-fade mb-5 mx-5 justify-content-left">
                <Col md="auto">
                    <Stack>
                        <h1 className="display-4">{project_header.title}</h1>
                        <p className="lead">{project_header.dev}</p>
                    </Stack>
                </Col>
            </Row>
            <ProjectCard data={project1} img="novus_auto.png" />
            <ProjectCard data={project2} img="aether_mobile.png" />
        </Container>
    )
}

export default Project
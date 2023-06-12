import { FC, useContext, useMemo, RefObject } from 'react'
import { 
    Container, 
    Row, 
    Col, 
    Stack, 
    ProjectCard 
} from '@/components'
import DataContext from '@/context/DataContext'
 
interface Props {
    refObj: RefObject<HTMLHeadingElement>
}
const Project: FC<Props> = ({ refObj }) => {

    const data: PortfolioData = useContext(DataContext)
    const { project1, project2, project_header}: DataSection = useMemo(() => data?.portfolio_data,[data])

    return(
        <Container fluid className="h-100" style={{marginBottom: "25rem"}}>
            <Row md="auto" className="mb-5 mx-2 justify-content-left">
                <Col md="auto">
                    <Stack>
                        <h1 ref={refObj} className="display-4">{project_header.title}</h1>
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
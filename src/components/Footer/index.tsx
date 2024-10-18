import { FC, useContext, useMemo } from 'react'
import {
    Container,
    Row,
    Col,
    SocialLinks,
    Stack
} from '@/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faGem, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import DataContext from '@/context/DataContext'

const Footer: FC = () => {

    const data: PortfolioData = useContext(DataContext)
    const { intro:social_links, footer }: DataSection = useMemo(() => data?.portfolio_data, [data])
    const center = "d-flex justify-content-center"

    return(
        <footer id="contact" className="page-footer bg-light text-muted" >
            <Container fluid >
                <Row className="border-bottom p-3">
                    <Col className={center}>
                        <span>{footer.connected}</span>
                    </Col>
                    <Col className={`${center}`}>
                        <SocialLinks socialLinks={{github: social_links.github, linkedin: social_links.linkedin}}/>
                    </Col>
                </Row>
                <Row className="p-3">
                    <Col className={`${center}`}>
                        <div className="d-flex flex-column">
                            <h6 className="text-uppercase fw-bold">
                            <FontAwesomeIcon icon={faGem} /> {footer.name}
                            </h6>
                            <p>{footer.bio}</p>
                        </div>
                    </Col>
                    <Col>
                        <Stack>
                            <h6 className="text-uppercase fw-bold">{footer.contact}</h6>
                            <p id="email"><FontAwesomeIcon icon={faEnvelope} /> {footer.email}</p>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
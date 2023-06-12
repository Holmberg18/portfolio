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
    const center = "d-flex align-items-center"

    return(
        <footer className="page-footer bg-light text-muted mt-5" >
            <Container fluid>
                <Row className="border-bottom p-3">
                    <Col className={`${center}`}>
                        <span>{footer.connected}</span>
                    </Col>
                    <Col className={`${center}`}>
                        <SocialLinks socialLinks={{github: social_links.github, linkedin: social_links.linkedin}}/>
                    </Col>
                </Row>
                <Row className="p-3">
                    <Col className={`${center}`}>
                        <Stack className="">
                            <h6 className="text-uppercase fw-bold">
                            <FontAwesomeIcon icon={faGem} /> {footer.name}
                            </h6>
                            <p>{footer.bio}</p>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack>
                            <h6 className="text-uppercase fw-bold">{footer.contact}</h6>
                            <p><FontAwesomeIcon icon={faHome} /> {footer.address}</p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> {footer.email}</p>
                            <p><FontAwesomeIcon icon={faPhone} /> {footer.phone}</p>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
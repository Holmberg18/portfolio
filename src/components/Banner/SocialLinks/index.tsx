import { FC } from 'react'
import { Container, Row, Col } from "@/components"
import { GithubSVG, LinkedinSVG } from '@/components/Banner/SVG'

interface Props {
    socialLinks: {[key: string]: string}
}
const SocialLinks: FC<Props> = ({ socialLinks }) => {

    return(
        <Container className="p-0 mb-3">
            <Row>
                <Col>
                    <a className="m-1" href={socialLinks.github} target='_blank' rel="noreferrer">
                        <GithubSVG />
                    </a>
                    <a className="m-1" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                        <LinkedinSVG />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default SocialLinks
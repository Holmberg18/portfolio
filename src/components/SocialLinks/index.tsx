import { FC } from 'react'
import { Container, Row, Col } from "@/components"
import { GithubSVG, LinkedinSVG } from '@/components/SVG'

interface Props {
    socialLinks: JSONObject
}
const SocialLinks: FC<Props> = ({ socialLinks }) => {

    return(
        <Container className="px-2 mb-3">
            <Row>
                <Col>
                    <a className="mx-1" href={socialLinks.github} target='_blank' rel="noreferrer">
                        <GithubSVG x={28} y={28} />
                    </a>
                    <a className="mx-1" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                        <LinkedinSVG />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default SocialLinks
import { FC } from 'react'
import { motion } from "framer-motion"
import {
    Row,
    Col,
    Image,
    Stack,
    Alert
} from "@/components"
import { GithubSVG, ExternalLinkSVG } from '@/components/SVG'


interface Props {
    data: JSONObject,
    img: string,
    left?: boolean,
}


const ProjectCard: FC<Props> = (props) => {

    const { data, img, left } = props
    const isMobile = window.innerWidth < 768

    const cardVariants: JSONObject = {
        offscreen: {
            opacity: 0,
            [isMobile ? 'x' : 'y']: 300,
        },
        onscreen: {
            opacity: 1,
            [isMobile ? 'x': 'y']: 0,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1
            }
        }
    }

    const stack: JSX.Element = (
        <Col id={data?.style.toLowerCase()} key={data.title} lg={3} className="m-3">
            <Stack>
                <h3>{data?.title}</h3>
                <p>{data?.bio}</p>
                <p><span>{data?.framework}</span> <span>{data?.style}</span></p>
            </Stack>
            <Stack direction="horizontal">
                {
                    ['git', 'ext'].map((type) => (
                        <Alert.Link key={type} href="#" className="mx-2 link-underline link-underline-opacity-0">{
                            type === 'git' ? (<p><GithubSVG x={24} y={24} /> <span className='mx-1'>Github</span></p>) : 
                            (<p><ExternalLinkSVG /> <span>Live Demo</span></p>)
                        }
                        </Alert.Link>
                    ))
                }
            </Stack>
        </Col>
    )

    const image: JSX.Element = (
        <Col key={img} sm={11} md="auto">
            <Image
                className="shadow"
                fluid
                rounded
                src={process.env.PUBLIC_URL + `images/${img}.png`}
            />
        </Col>
    )

    return(
            <motion.div
                className="d-flex justify-content-center"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true}}
            >
                <Row id={data?.framework.toLocaleLowerCase()} className="my-5 justify-content-center">
                    {left ? [stack, image] : [image, stack]}
                </Row>
            </motion.div>
    )
}

export default ProjectCard
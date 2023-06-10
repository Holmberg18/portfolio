import { FC } from 'react'
import { motion } from "framer-motion"
import {
    Row,
    Col,
    Image,
    Stack
} from "@/components"

interface Props {
    data: JSONObject,
    img: string
}

const ProjectCard: FC<Props> = (props) => {

    const { data, img } = props

    const offscreen = {
        opacity: 0,
        y: 300,
    }
    const onscreen = {
        opacity: 1,
        y: 50,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1
        }
    }

    return(
        <motion.div
            initial={offscreen}
            whileInView={onscreen}
        >
            <Row className="justify-content-center h-100 my-5">
                <Col sm={11} md="auto">
                    <Image
                        className="shadow"
                        fluid
                        rounded
                        src={process.env.PUBLIC_URL + `images/${img}`} 
                    />
                </Col>
                <Col lg={3} className="m-3">
                    <Stack>
                        <h3>{data?.title}</h3>
                        <p>{data?.bio}</p>
                    </Stack>
                </Col>
            </Row>
        </motion.div>
    )
}

export default ProjectCard
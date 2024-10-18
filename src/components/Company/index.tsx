import { motion } from "framer-motion"
import {
    Container,
    Row,
    Col,
    Image
} from "@/components"


const Company = () => {

    const isMobile = window.innerWidth < 768

    const cardVariants: JSONObject = {
        offscreen: {
            opacity: 0,
            [isMobile ? 'x' : 'y']: 300,
        },
        onscreen: {
            opacity: 1,
            [isMobile ? 'x' : 'y']: 0,
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1
            }
        }
    }

    interface ImgProps {
        img: string
    }

    const CompanyImage = ({ img }: ImgProps) => (
        <Col key={img} sm={11} md="auto" className="d-flex justify-content-center m-3">
            <Image
                className=""
                fluid
                rounded
                src={process.env.PUBLIC_URL + `images/${img}.png`}
            />
        </Col>
    )

    return (
        <motion.div
            className="d-flex justify-content-center"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            <Container fluid className="mx-3 p-1">
                <Row xs={12} sm={10} md={6} className="my-5 mx-3 justify-content-center">
                    {
                        ["sams_club", "costco", "walmart", "att"].map((logo) =>
                            <CompanyImage key={logo} img={logo} />
                        )
                    }
                </Row>
                <Row xs={12} sm={10} md={6} className="my-5 mx-3 justify-content-center">
                    {
                        ["amazon", "target", "best_buy", "samsung"].map((logo) =>
                            <CompanyImage key={logo} img={logo} />
                        )
                    }
                </Row>
            </Container>
        </motion.div>
    )
}

export default Company
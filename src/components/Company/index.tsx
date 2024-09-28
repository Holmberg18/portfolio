import { motion } from "framer-motion"
import {
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
        <Col key={img} sm={11} md="auto" className="mx-3">
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
            <Col sm={11} md="auto" className="mx-3">
                <Row className="my-5 mx-3 justify-content-center">
                    {
                        ["sams_club", "costco", "walmart", "att"].map((logo) =>
                            <CompanyImage img={logo} />
                        )
                    }
                </Row>
                <Row className="my-5 mx-3 justify-content-center">
                    {
                        ["amazon", "target", "best_buy", "samsung"].map((logo) =>
                            <CompanyImage img={logo} />
                        )
                    }
                </Row>
            </Col>
        </motion.div>
    )
}

export default Company
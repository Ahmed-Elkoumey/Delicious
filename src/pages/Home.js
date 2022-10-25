import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <div>
      <Container>
    <motion.div
     animate={{opacity:1}}
     initial={{opacity:0}}
     exit={{opacity:0}}
     transition={{duration:0.5}}
    >
        <Veggie/>
        <Popular/>
    </motion.div>
      </Container>
    </div>
  )
}

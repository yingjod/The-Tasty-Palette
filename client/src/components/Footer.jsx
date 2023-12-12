import { Link } from 'react-router-dom'

//Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

//Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer(){
  return (
    <footer className='footer'>
      <Container>
      <Row className='footer'>
        <Col>
          <Link target='_blank' to='https://github.com/gibacarnieli' className='links'>
          <FontAwesomeIcon icon={faGithub} /> Gilberto Carnieli</Link>
        </Col>
        <Col>
          <Link target='_blank' to='https://github.com/lizalex7' className='links'>
          <FontAwesomeIcon icon={faGithub} /> Liz Alexander</Link>
        </Col>
        <Col>
          <Link target='_blank' to='https://github.com/ttamanna1' className='links'>
          <FontAwesomeIcon icon={faGithub} /> Tamanna Khanum</Link>
        </Col>
        <Col>
          <Link target='_blank' to='https://github.com/yingjod' className='links'>
          <FontAwesomeIcon icon={faGithub} /> Ying Li</Link>
        </Col>
      </Row>
    </Container>
    </footer>
  )
}

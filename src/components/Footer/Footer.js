import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-body-secondary py-5 fixed-bottom" >
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <a
              href="/"
              className="text-decoration-none text-black fs-3 fw-semibold"
            >
              FC Market
            </a>
          </Col>

          {/* Footer Columns Section */}
          <Col xs={12} md={8}>
            <Row>
              <Col xs={12} md={3}>
                <h5>Column 1</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#"
                      className="link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Item 1
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      className="link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Item 2
                    </a>
                  </li>
                </ul>
              </Col>

              <Col xs={12} md={3}>
                <h5>Column 2</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#"
                      className="link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Item 1
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      className="link-secondary link-offset-2 link-offset-3-hover link-underline  link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Item 2
                    </a>
                  </li>
                </ul>
              </Col>

              <Col xs={12} md={3}>
                <h5 className="list-unstyled">Column 3</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#"
                      className="link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Item 1
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      className="link-secondary link-offset-2 link-offset-3-hover link-underline  link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Item 2
                    </a>
                  </li>
                </ul>
              </Col>

              <Col xs={12} md={3}>
                <h5 className="list-unstyled">Column 4</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#"
                      className="link-secondary link-offset-2 link-offset-3-hover link-underline  link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Item 1
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      className="link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      Item 2
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

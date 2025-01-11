import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import projects from './jsondata/projects.json';
import './css/Home.css';
import './css/portfolio.css';

const Portfolio = () => (
    <Container className="mt-5">
      <h2 className="text-center mb-5 section-title">Portfolio</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card className="portfolio-card">
              <Card.Img variant="top" src={project.image} className="card-img" />
              <Card.Body>
                <Card.Title className="card-title">{project.title}</Card.Title>
                <Card.Text className="card-text">{project.description}</Card.Text>
                <div className="button-group">
                  <Button variant="primary" className="w-100 mb-2">{project.link1}</Button>
                  <Button variant="secondary" className="w-100">{project.link2}</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );

export default Portfolio;

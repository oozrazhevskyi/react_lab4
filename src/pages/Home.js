import React, { Component } from 'react'
import {Col, Container, Row} from "react-bootstrap";
import TeamCard from '../components/TeamCard';
export default class Home extends Component {
  render() {
    return (
      <>
        <h2 className="text-center m-4">Наша команда</h2>
        <Row>
          <Col>
            <TeamCard
              image = "https://qwertify.io/images/img_openpositions.png"
              title = "Розробники"
              description = "Команда 1"
            />
          </Col>
          <Col>
            <TeamCard
              image = "https://cdn.vox-cdn.com/thumbor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg"
              title = "Природознавці"
              description = "Команда 2"
            />
          </Col>
          <Col>
            <TeamCard
              image = "https://www.kv.by/sites/default/files/pictures/userpictures/2019/11/29/2359/foto6_1.jpg"
              title = "Маркетологи"
              description = "Команда 3"
            />
          </Col>
        </Row>
      </>
    )
  }
}

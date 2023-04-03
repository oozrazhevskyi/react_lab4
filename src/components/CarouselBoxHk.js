import React, {Component} from 'react';
import CarpathianMountainsImg from '../static/carousel/carpathian_mountains.jpg'
import EverestImg from '../static/carousel/everest.jpg'
import FjordImg from '../static/carousel/fjord.jpg'
import {Carousel} from "react-bootstrap";

class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={CarpathianMountainsImg}
                    alt="Carpathian Mountains"/>
                    <Carousel.Caption>
                        <h3>Carpathian Mountains image</h3>
                        <p>Carpathian Mountains. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={EverestImg}
                        alt="Everest"/>
                    <Carousel.Caption>
                        <h3>Everest image</h3>
                        <p>Everest. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={FjordImg}
                        alt="Fjord"/>
                    <Carousel.Caption>
                        <h3>Fjord image</h3>
                        <p>Fjord. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBoxHk;

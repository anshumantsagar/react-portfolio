import React from 'react';

import Card from '../components/Card';

import profile from '../assets/images/profile-croped.jpg';
import linkedin from '../assets/images/Linkedinfit.jpg';
import github from '../assets/images/githubdark.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'E-commerce',
                    subTitle: 'E-commerce website in angular',
                    imgSrc: profile,
                    link: 'https://anshumantkart.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'LinkedIn',
                    subTitle: 'My LinkedIN Profile',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/anshumantsagar/',
                    selected: false                   
                },
                {
                    id: 2,
                    title: 'Github',
                    subTitle: 'My Github Profile',
                    imgSrc: github,
                    link: 'https://github.com/anshumantsagar',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
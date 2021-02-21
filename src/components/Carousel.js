import React from 'react';

import Card from '../components/Card';

import profile from '../assets/images/profile-croped.jpg';
import linkedin from '../assets/images/Linkedinfit.jpg';
import github from '../assets/images/githubdark.jpg';
import burger from '../assets/images/burger-builder.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    state = {
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
            {
                id:3,
                title: 'Burger Builder',
                subTitle: 'A website i made while learning react',
                imgSrc: burger,
                link: 'https://burgerbuilderreact.netlify.app/',
            }
        ]
    }

    _handleCardClick = (id, card) => {

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


    _makeItems = () => {
        const { items } = this.state;
        return items.map(item => {
            return <Card item={item} click={() => this._handleCardClick(item.id)} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this._makeItems()}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
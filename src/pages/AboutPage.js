import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Anshumant. I'm a Angular and React developer with experience in Angular.</p>

                <p>Currently i am working with Logic Square as a Software Developement Engineer.</p>

                {/* <p>Currently looking for the oportunities to put my skills in the right work and learn new things.</p> */}

                {/* <p>My dream is to start my own business one day and become an entrepreneur (I have some ideas).</p> */}

                <p>I'm constantly learning new things. Currently gaining more experience with React-Native.</p>

                <p>You can check out my GitHub account <a href="https://github.com/anshumantsagar" target="_blank" rel="noopener noreferrer">here</a>.</p>

                <p>You can check out my Linkdin account <a href="https://www.linkedin.com/in/anshumantsagar/" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </Content>
        </div>
    );

}

export default AboutPage;
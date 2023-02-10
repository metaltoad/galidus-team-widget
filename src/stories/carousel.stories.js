import React from 'react';

import Carousel from '../components/Carousel';
import Hero from "../components/Hero/Hero";

export default {
    component: Carousel,
    title: 'Carousel',
    argTypes: {
        autoplay: {
            name: 'autoplay',
            control: { type: 'select' },
            options: [true, false],
            type: { name: 'string', required: true },
            defaultValue: true,
            table: {
                defaultValue: { summary: true },
            },
            description: 'Autoplay carousel with defined timeout',
        },
        timeout: {
            control: {type: 'text'},
            type: {name: 'number', required: false},
            defaultValue: '7000',
            table: {
                defaultValue: {summary: '7000'},
            },
            description: 'Timeout slider',
        },
        showNav: {
            name: 'showNav',
            control: { type: 'select' },
            options: [true, false],
            type: { name: 'string', required: true },
            defaultValue: true,
            table: {
                defaultValue: { summary: true },
            },
            description: 'Select theme mode',
        },
        buttonColor: {
            name: 'buttonColor',
            control: { type: 'color' },
            defaultValue: '#ffffff',
            type: { name: 'string', required: true },
            description: 'buttonColor',
        },
    }
};


const Template = args => <Carousel {...args}>
    <div style={{
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#ccc'
    }}>
        <img src="https://i.ibb.co/9rKGZV5/toad-ui-react-components.png" alt=""/>
    </div>
    <div style={{
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#e4e4e4',
        flexDirection: 'column'
    }}>
        <h2 style={{textAlign: 'center'}}>Metal Toad Hackathon - Team Galidus</h2>
        <ul style={{textAlign: 'left'}}>
            <li><a href="https://metaltoad.github.io/galidus-team-widget" style={{color: '#000'}}>UI Storybook</a></li>
            <li><a href="https://github.com/metaltoad/galidus-team-widget/" style={{color: '#000'}}>Github Repo - Galidus Team Widget</a></li>
        </ul>
    </div>
</Carousel>;

export const Default = Template.bind({});
Default.args = {
    timeout: 5000,
    showNav: true,
    buttonColor: '#000000',
    autoplay: true,
};

const TemplateVideoAndImage = args => <Carousel {...args}>
    <Hero
        alignment="center"
        buttonBgColor="#F15F22"
        buttonColor="#fff"
        buttonHref="https://metaltoad.com"
        buttonLabel="Start your cloud journey"
        buttonTarget="_blank"
        containerMaxWidth="1680px"
        contentMaxWidth="1000px"
        contentPadding="80px"
        height="500px"
        image="https://media.gettyimages.com/id/919446314/photo/usa-oregon-portland-city-view.jpg?s=2048x2048&w=gi&k=20&c=UuEjgzCmbBnZ75TnfitRFRuDNXRZjOzzqEyZoE5E4Kc="
        mode="dark"
        readability={0.75}
        subtitle="Metal Toad is a leading AWS Consulting Partner focused on supporting customers in the Pacific Northwest. Our team includes experts certified in AWS machine learning, application development, architecture, migration, and DevOps — backed by 24x7 support. AWS cloud is powerful, we make it easy."
        subtitleColor="#fff"
        subtitleSize="19px"
        title="#1 in the Pacific Northwest for AWS Machine Learning"
        titleColor="#fff"
        titleSize="40px"
        video="https://designsupply-web.com/samplecontent/vender/codepen/20181014.mp4"
    />
    <Hero
        alignment="leftCenter"
        buttonBgColor="#A61F38"
        buttonColor="#fff"
        buttonHref="https://metaltoad.com"
        buttonLabel="Sign Up For Free"
        buttonTarget="_blank"
        containerMaxWidth="1680px"
        contentMaxWidth="700px"
        contentPadding="80px"
        height="500px"
        image="https://i.ibb.co/rtqQNPJ/rpg-toad-4.jpg"
        mode="dark"
        readability={0.7}
        subtitle="RPGMatch is an application where you can register and meet other TTRPG players who like to play like you do. Think: Tinder for tabletop roleplaying games (without the romance but with way more dice)."
        subtitleColor="#fff"
        subtitleSize="22px"
        title="What is RPGMatch™?"
        titleColor="#fff"
        titleSize="40px"
        video={null}
    />
</Carousel>;

export const VideoAndImage = TemplateVideoAndImage.bind({});
VideoAndImage.args = {
    timeout: 7000,
    showNav: true,
    buttonColor: '#ffffff',
    autoplay: true,
};

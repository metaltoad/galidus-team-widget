import React from 'react';

import Carousel from '../components/Carousel';
import Hero from "../components/Hero/Hero";

export default {
    component: Carousel,
    title: 'Carousel',
    argTypes: {
        timeout: {
            control: {type: 'text'},
            type: {name: 'number', required: false},
            defaultValue: '7000',
            table: {
                defaultValue: {summary: '7000'},
            },
            description: 'Timeout slider',
        },
    }
};

const options = {
    mode: 'dark',
    media: {
        image: {
            url: '/rpg_toad.png'
        },
        video: {
            url: ''
        }
    },
    content: {
        alignment: 'leftCenter',
        maxWidth: '600px',
        containerMaxWidth: '1680px',
        padding: '40px',
        title: {
            text: 'What is RPGMatch™?',
            color: '#ffffff',
            size: '40px'
        },
        subtitle: {
            text: 'Tinder for tabletop roleplaying games (without the romance but with way more dice)',
            color: '#ffffff',
            size: '24px'
        },
    },
    button: {
        target: '_blank',
        href: 'https://rpgmatch.org/',
        label: 'Sign Up For Free',
        bgColor: '#A61F38',
        color: '#ffffff',
    },
    height: '100%',
    readability: 0.2,
}

const Template = args => <Carousel {...args}>
    <Hero
        alignment="center"
        height="500px"
        image="/rpg_toad.png"
        mode="dark"
        options={{
            button: {
                bgColor: '#F15F22',
                color: '#ffffff',
                href: 'https://github.com/',
                label: 'JOIN US',
                target: '_blank'
            },
            content: {
                alignment: 'center',
                containerMaxWidth: '1680px',
                maxWidth: '700px',
                padding: '40px',
                subtitle: {
                    color: '#ffffff',
                    size: '30px',
                    text: 'Machine learning is going to affect every industry from legal, to streaming, to retail.'
                },
                title: {
                    color: '#ffffff',
                    size: '48px',
                    text: 'AWS Machine Learning'
                }
            },
            height: '100vh',
            media: {
                image: {
                    url: 'https://www.metaltoad.com/sites/default/files/inline-images/pacific%20northwest%20background.png'
                },
                video: {
                    url: ''
                }
            },
            mode: 'dark',
            readability: 0.2
        }}
        readability={0.3}
        video="/tech.mp4"
    />
    <Hero height={'500px'}
          image={'/rpg_toad.png'}
          readability={0}
          alignment='leftCenter'
          mode='dark'
          options={options}
    />
</Carousel>;

export const Default = Template.bind({});
Default.args = {};

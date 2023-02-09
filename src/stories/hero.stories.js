import React from 'react';

import Hero from '../components/Hero/Hero';

export default {
    component: Hero,
    title: 'Hero',
    argTypes: {
        height: {
            control: { type: 'text' },
            type: { name: 'string', required: true },
            defaultValue: '500px',
            table: {
                defaultValue: { summary: '500px' },
            },
            description: 'Hero height',
        },
        mode: {
            name: 'mode',
            control: { type: 'select' },
            options: ['dark', 'light'],
            type: { name: 'string', required: true },
            defaultValue: 'dark',
            table: {
                defaultValue: { summary: 'dark' },
            },
            description: 'Select theme mode',
        },
        alignment: {
            options: [
                'center',
                'leftTop',
                'leftBottom',
                'leftCenter',
                'rightTop',
                'rightBottom',
                'rightCenter',
            ],
            control: { type: 'select' },
            type: { name: 'string', required: true },
            defaultValue: 'leftCenter',
            table: {
                defaultValue: { summary: 'center' },
            },
            description: 'Define the position of the content',
        },
        readability: {
            name: 'readability',
            options: [
                0,
                0.1,
                0.2,
                0.3,
                0.4,
                0.5,
                0.6,
                0.7,
                0.8,
                0.9,
                1
            ],
            control: { type: 'select' },
            type: { name: 'number', required: true },
            defaultValue: 0,
            table: {
                defaultValue: { summary: 0 },
            },
            description: 'Increase content readability',
        },
        image: {
            control: { type: 'text' },
            type: { name: 'string', required: true },
            defaultValue: '/rpg_toad.png',
            table: {
                defaultValue: { summary: '/rpg_toad.png' },
            },
            description: 'Image url',
        },
        video: {
            control: { type: 'text' },
            type: { name: 'string', required: true },
            description: 'Video url',
        },
    },
};

const Template = args => <Hero {...args} />;

export const Default = Template.bind({});
    Default.args = {
        mode: 'dark',
        alignment: 'leftCenter',
        readability: 0.5,
        image: '/rpg_toad_4.jpg',
        video: null,
        height: '500px',
        options: {
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

};

export const MetalToad = Template.bind({});
MetalToad.args = {
    mode: 'dark',
    alignment: 'center',
    readability: 0.3,
    image: 'https://www.metaltoad.com/sites/default/files/inline-images/pacific%20northwest%20background.png',
    height: '500px',
    options: {
        mode: 'dark',
        media: {
            image: {
                url: 'https://www.metaltoad.com/sites/default/files/inline-images/pacific%20northwest%20background.png'
            },
             image: {
                url: 'https://raw.githubusercontent.com/metaltoad/galidus-team-widget/c90db3e26997d02dd832e9e25b6083172559ec21/docs/assets/images/cover-linkedin%20(1).png'
            },
             image: {
                url: 'https://raw.githubusercontent.com/metaltoad/galidus-team-widget/c90db3e26997d02dd832e9e25b6083172559ec21/docs/assets/images/fundo_metaltoad.jpg'
            },
            video: {
                url: ''
            }
        },
        content: {
            alignment: 'center',
            maxWidth: '1000px',
            containerMaxWidth: '1680px',
            padding: '40px',
            title: {
                text: '#1 in the Pacific Northwest for AWS Machine Learning',
                color: '#ffffff',
                size: '34px'
            },
            subtitle: {
                text: 'Metal Toad is a leading AWS Consulting Partner focused on supporting customers in the Pacific Northwest. Our team includes experts certified in AWS machine learning, application development, architecture, migration, and DevOps — backed by 24x7 support. AWS cloud is powerful, we make it easy.',
                color: '#ffffff',
                size: '21px'
            },
        },
        button: {
            target: '_blank',
            href: 'https://github.com/',
            label: 'Start Your Cloud Journey',
            bgColor: '#F15F22',
            color: '#ffffff',
        },
        height: "100vh",
        readability: 0.2,
    }
}

export const Video = Template.bind({});
Video.args = {
    mode: 'dark',
    alignment: 'center',
    readability: 0.3,
    video: '/tech.mp4',
    height: '500px',
    options: {
        mode: 'dark',
        media: {
            image: {
                url: 'https://www.metaltoad.com/sites/default/files/inline-images/pacific%20northwest%20background.png'
            },
            video: {
                url: ''
            }
        },
        content: {
            alignment: 'center',
            maxWidth: '700px',
            containerMaxWidth: '1680px',
            padding: '40px',
            title: {
                text: 'AWS Machine Learning',
                color: '#ffffff',
                size: '48px'
            },
            subtitle: {
                text: 'Machine learning is going to affect every industry from legal, to streaming, to retail.',
                color: '#ffffff',
                size: '30px'
            },
        },
        button: {
            target: '_blank',
            href: 'https://github.com/',
            label: 'JOIN US',
            bgColor: '#F15F22',
            color: '#ffffff',
        },
        height: "100vh",
        readability: 0.2,
    }
}

//
// export const Archived = Template.bind({});
// Archived.args = {
//     task: {
//         ...Default.args.task,
//         state: 'TASK_ARCHIVED',
//     },
// };

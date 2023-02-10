import React from 'react';

import Hero from '../components/Hero/Hero';

export default {
    component: Hero,
    title: 'Hero',
    argTypes: {
        image: {
            control: { type: 'text' },
            type: { name: 'string', required: false },
            defaultValue: '/rpg_toad.png',
            table: {
                defaultValue: { summary: '/rpg_toad.png' },
            },
            description: 'Image url',
        },
        video: {
            control: { type: 'text' },
            type: { name: 'string', required: false },
            description: 'Video url',
        },
        title: {
            name: 'Title',
            control: { type: 'text' },
            defaultValue: 'Welcome to T-UI',
            type: { name: 'string', required: false },
            description: 'Title',
        },
        titleSize: {
            name: 'Title Font Size',
            control: { type: 'text' },
            defaultValue: '40px',
            type: { name: 'string', required: false },
            description: 'Title font size',
        },
        titleColor: {
            name: 'Title Color',
            control: { type: 'color' },
            defaultValue: '#ffffff',
            type: { name: 'string', required: false },
            description: 'Title',
        },
        subtitle: {
            name: 'Subtitle',
            control: { type: 'text' },
            defaultValue: 'Lorem ipsum dolor sit amet',
            type: { name: 'string', required: false },
            description: 'Subtitle',
        },
        subtitleColor: {
            name: 'Subtitle Color',
            control: { type: 'color' },
            defaultValue: '#ffffff',
            type: { name: 'string', required: false },
            description: 'Title',
        },
        subtitleSize: {
            name: 'SubTitle Font Size',
            control: { type: 'text' },
            defaultValue: '25px',
            type: { name: 'string', required: false },
            description: 'subTitle font size',
        },
        buttonLabel: {
            name: 'buttonLabel',
            control: { type: 'text' },
            defaultValue: 'Sign Up For Free',
            type: { name: 'string', required: false },
            description: 'buttonLabel',
        },
        buttonBgColor: {
            name: 'buttonBgColor',
            control: { type: 'color' },
            defaultValue: '#A61F38',
            type: { name: 'string', required: false },
            description: 'buttonBgColor',
        },
        buttonColor: {
            name: 'buttonColor',
            control: { type: 'color' },
            defaultValue: '#ffffff',
            type: { name: 'string', required: false },
            description: 'buttonColor',
        },
        buttonTarget: {
            name: 'buttonTarget',
            control: { type: 'select' },
            options: ['_blank', '_self'],
            defaultValue: '_self',
            type: { name: 'string', required: false },
            description: 'buttonTarget',
        },
        buttonHref: {
            name: 'buttonHref',
            control: { type: 'text' },
            defaultValue: 'https://metaltoad.com',
            type: { name: 'string', required: false },
            description: 'buttonHref',
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
            type: { name: 'string', required: false },
            defaultValue: 'leftCenter',
            table: {
                defaultValue: { summary: 'center' },
            },
            description: 'Define the position of the content',
        },
        height: {
            control: { type: 'text' },
            type: { name: 'string', required: false },
            defaultValue: '500px',
            table: {
                defaultValue: { summary: '500px' },
            },
            description: 'Hero height',
        },
        containerMaxWidth: {
            name: 'Container Max Width',
            control: { type: 'text' },
            defaultValue: '1680px',
            type: { name: 'string', required: true },
            description: 'Container Max Width',
        },
        contentPadding: {
            name: 'Content Padding',
            control: { type: 'text' },
            defaultValue: '40px',
            type: { name: 'string', required: true },
            description: 'Content Padding',
        },
        contentMaxWidth: {
            name: 'Content Max Width',
            control: { type: 'text' },
            defaultValue: '600px',
            type: { name: 'string', required: false },
            description: 'Content Max Width',
        },
        mode: {
            name: 'mode',
            control: { type: 'select' },
            options: ['dark', 'light'],
            type: { name: 'string', required: false },
            defaultValue: 'dark',
            table: {
                defaultValue: { summary: 'dark' },
            },
            description: 'Select theme mode',
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
            type: { name: 'number', required: false },
            defaultValue: 0,
            table: {
                defaultValue: { summary: 0 },
            },
            description: 'Increase content readability',
        },
    },
};

const Template = args => <Hero {...args} />;

export const Default = Template.bind({});
    Default.args = {
        image: null,
        video: null,
        title: 'Hero Component',
        titleColor: '#333',
        titleSize: '40px',
        subtitle: 'TOAD-UI components library',
        subtitleColor: '#333',
        subtitleSize: '24px',
        buttonTarget: '_blank',
        buttonHref: 'https://metaltoad.com',
        buttonLabel: 'Read More',
        buttonBgColor: '#f1f1f1',
        buttonColor: '#ed6033',
        alignment: 'center',
        height: '500px',
        contentMaxWidth: '600px',
        containerMaxWidth: '1680px',
        contentPadding: '40px',
        mode: 'light',
        readability: 0.5,
};

export const ImageBackground = Template.bind({});
ImageBackground.args = {
    image: 'https://i.ibb.co/rtqQNPJ/rpg-toad-4.jpg',
    video: null,
    title: 'What is RPGMatch™?',
    titleColor: '#fff',
    titleSize: '40px',
    subtitle: 'RPGMatch is an application where you can register and meet other TTRPG players who like to play like you do. Think: Tinder for tabletop roleplaying games (without the romance but with way more dice).',
    subtitleColor: '#fff',
    subtitleSize: '19px',
    buttonTarget: '_blank',
    buttonHref: 'https://metaltoad.com',
    buttonLabel: 'Sign Up For Free',
    buttonBgColor: '#A61F38',
    buttonColor: '#fff',
    alignment: 'leftCenter',
    height: '500px',
    contentMaxWidth: '700px',
    containerMaxWidth: '1680px',
    contentPadding: '80px',
    mode: 'dark',
    readability: 0.7,
};
export const VideoBackground = Template.bind({});
VideoBackground.args = {
    alignment: "center",
    buttonBgColor:"#F15F22",
    buttonColor:"#fff",
    buttonHref:"https://metaltoad.com",
    buttonLabel:"Start your cloud journey",
    buttonTarget:"_blank",
    containerMaxWidth:"1680px",
    contentMaxWidth:"1000px",
    contentPadding:"80px",
    height:"500px",
    image:'https://media.gettyimages.com/id/919446314/photo/usa-oregon-portland-city-view.jpg?s=2048x2048&w=gi&k=20&c=UuEjgzCmbBnZ75TnfitRFRuDNXRZjOzzqEyZoE5E4Kc=',
    mode:"dark",
    readability:0.75,
    subtitle:"Metal Toad is a leading AWS Consulting Partner focused on supporting customers in the Pacific Northwest. Our team includes experts certified in AWS machine learning, application development, architecture, migration, and DevOps — backed by 24x7 support. AWS cloud is powerful, we make it easy.",
    subtitleColor:"#fff",
    subtitleSize:"19px",
    title:"#1 in the Pacific Northwest for AWS Machine Learning",
    titleColor:"#fff",
    titleSize:"40px",
    video:"https://designsupply-web.com/samplecontent/vender/codepen/20181014.mp4",
};
//
// export const MetalToad = Template.bind({});
// MetalToad.args = {
//     mode: 'dark',
//     alignment: 'center',
//     readability: 0.3,
//     image: 'https://www.metaltoad.com/sites/default/files/inline-images/pacific%20northwest%20background.png',
//     height: '500px',
//     options: {
//         content: {
//             maxWidth: '1000px',
//             containerMaxWidth: '1680px',
//             padding: '40px',
//             title: {
//                 text: '#1 in the Pacific Northwest for AWS Machine Learning',
//                 color: '#ffffff',
//                 size: '34px'
//             },
//             subtitle: {
//                 text: 'Metal Toad is a leading AWS Consulting Partner focused on supporting customers in the Pacific Northwest. Our team includes experts certified in AWS machine learning, application development, architecture, migration, and DevOps — backed by 24x7 support. AWS cloud is powerful, we make it easy.',
//                 color: '#ffffff',
//                 size: '21px'
//             },
//         },
//         button: {
//             target: '_blank',
//             href: 'https://github.com/',
//             label: 'Start Your Cloud Journey',
//             bgColor: '#F15F22',
//             color: '#ffffff',
//         },
//     }
// }
//
// export const Video = Template.bind({});
// Video.args = {
//     mode: 'dark',
//     alignment: 'center',
//     readability: 0.3,
//     video: '/tech.mp4',
//     height: '500px',
//     options: {
//         content: {
//             maxWidth: '700px',
//             containerMaxWidth: '1680px',
//             padding: '40px',
//             title: {
//                 text: 'AWS Machine Learning',
//                 color: '#ffffff',
//                 size: '48px'
//             },
//             subtitle: {
//                 text: 'Machine learning is going to affect every industry from legal, to streaming, to retail.',
//                 color: '#ffffff',
//                 size: '30px'
//             },
//         },
//         button: {
//             target: '_blank',
//             href: 'https://github.com/',
//             label: 'JOIN US',
//             bgColor: '#F15F22',
//             color: '#ffffff',
//         },
//     }
// }

//
// export const Archived = Template.bind({});
// Archived.args = {
//     task: {
//         ...Default.args.task,
//         state: 'TASK_ARCHIVED',
//     },
// };

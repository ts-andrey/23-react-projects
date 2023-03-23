import {
  museumPreImg,
  customVideoPlayerImg,
  drumKitImg,

  museumImg,
  momentumImg,
  artQuizImg,
  christmasImg,

  songBirdImg,
  resumeImg,
} from '../../assets/project-images/img-exports';

export const preProjects = [
  {
    projectName: `Museum`,
    projectDescription: `It was my first project and one where I created webpage by a specific design. It was 'pixel perfect' project. So I got familiar with such tools like Figma (modern tool to work with designs) and very useful extension for browser - 'Pixel Perfect'.`,
    imgSrc: museumPreImg,
    imgName: 'museum preschool project image',
    linkTo: `https://ts-andrey.github.io/rsschool-js-basics/museum`,
  },
  {
    projectName: `Custom Video Player`,
    projectDescription: `It was an intresting project where I got to know how to work with different mouse events and created custom video player. There you can hover on any video (which looks like images) and watch its content. By clicking on video the video player will be open where you can change volume level or progress of the video, enter full screen mode, change play speed or stop it if you need to.`,
    imgSrc: customVideoPlayerImg,
    imgName: `custom video player project image`,
    linkTo: `https://ts-andrey.github.io/rsschool-js-basics/custom-video-player`,
  },
  {
    projectName: `Drum Kit`,
    projectDescription: `It was an intresting project where I got to know how to work with keybord events and created some kind of musical application. It has different modes. The basic one where you have basic sounds which is already enough to have some fun. Then there is another mode which has much more sounds with help of which you can create something intresting but also could be a little overwhelm. And the last mode where you have some programming  logic.`,
    imgSrc: drumKitImg,
    imgName: `drum kit project image`,
    linkTo: `https://ts-andrey.github.io/rsschool-js-basics/drum-kit`,
  }
]

export const projects = [
  {
    projectName: `Museum`,
    projectDescription: `This is more mature version of previous museum project. The project has a lot of new features and logic. There I learned how to create an image carousel and how to insert images from youtube as well as how to work with CSS filters. I learned how to create an image gallery with intresting animation, gained a bit of knowledge how to work with maps. I get some intresting expirience when I was working with forms and popup models. I also learned how to create responsibe webpages.`,
    imgSrc: museumImg,
    imgName: 'museum project image',
    linkTo: `https://ts-andrey.github.io/rsschool-js-core/museum`,
  },
  {
    projectName: `Momentum`,
    projectDescription: `It is a clone of existing momentum extension. There you can listen some music, watch time themed image gallery. There you can also check the weather and random famous quotes. There is also some customization logic.`,
    imgSrc: momentumImg,
    imgName: 'momentum project image',
    linkTo: `https://ts-andrey.github.io/rsschool-js-core/momentum`,
  },
  {
    projectName: `Art Quiz`,
    projectDescription: `This is a quiz application which looks like the game. There is 2 different mods. In one you can try to guees which artist drew specific painting. In another the other way around - which painting was drawn by a specific artist. But before you start the quiz you can learn this information if you want to. There is also a possibility to change some settings.`,
    imgSrc: artQuizImg,
    imgName: 'art quiz app image',
    linkTo: `https://ts-andrey.github.io/rsschool-js-core/art-quiz/dist`,
  },
  {
    projectName: `Christmas Application`,
    projectDescription: `This is an application for christmass. It was created when a lot people wasn't able to spend time together because of the COVID. In this application you can decorate christmas tree like you do in your real life. You can also listen to the christmas song and just enjoy your time.`,
    imgSrc: christmasImg,
    imgName: 'christmas app image',
    linkTo: `https://ts-andrey.github.io/rsschool-js-core/christmas-task`,
  },
]

export const reactProjects = [
  {
    projectName: `Song Bird`,
    projectDescription: `It is my first React application. This is a quiz application about birds. There you have to hear a sound of specific bird and then guess the name of the bird. For each answer you will get some amount of points, which is depends on the difficulty of the game and how fast you will find the right answer. As you may guess by now there you can change the difficulty of the game. You can also change the language if you need. The application currently has 2 languages: english and russian.`,
    imgSrc: songBirdImg,
    imgName: 'song bird application image',
    linkTo: `https://ants-songbird.netlify.app`,
  },
  {
    projectName: `Resume`,
    projectDescription: `This is my resume. I decided to create it with help of React. That way I will sharpen my newly gained knowledge and possible learn a few new things. The great people say - 'practice makes perfect'! Those people already succeeded in something so why not listen to them?`,
    imgSrc: resumeImg,
    imgName: 'resume image',
    linkTo: `https://ants-resume.netlify.app`,
  },
]


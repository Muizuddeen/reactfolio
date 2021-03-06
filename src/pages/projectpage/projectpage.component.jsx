import React from 'react';
import Title from "../../components/title/title.component";
import PortfolioItem from '../../components/portfolio-item/portfolio-item.component';

import './projectpage.styles.scss';


class ProjectPage extends React.Component {
  constructor() {
    super();


    this.state = {
      sections: [
        {
          title: 'Beach Resorts',
          imageUrl: 'img/project-1.png',
          id: 1,
         linkUrl : 'https://shelter-beach-resort.netlify.com',
         gitUrl: 'https://github.com/Muizuddeen/beach-resorts'

        },
        {
          title: 'tech store',
          imageUrl: 'img/project-2.png',
          id: 2,
          linkUrl : 'https://techy-store.netlify.com',
          gitUrl: 'https://github.com/Muizuddeen/tech-store'

        },
        {
          title: 'crown clothing',
          imageUrl: 'img/project-3.png',
          id: 3,
          linkUrl : 'https://crown-clothing-era.herokuapp.com',
          gitUrl: 'https://github.com/Muizuddeen/crown-clothing'
        },
        {
          title: 'dev connector',
          imageUrl: 'img/project-4.png',
          id: 4,
          linkUrl : 'https://infinite-caverns-66167.herokuapp.com',
          gitUrl: 'https://github.com/Muizuddeen/DevSocialConnector'
        },
        {
          title: 'github finder',
          imageUrl: 'img/project-5.png',
          id: 5,
          linkUrl : 'https://github-finders.netlify.app',
          gitUrl: 'https://github.com/Muizuddeen/react-github-finder'
        },
        {
          title: 'travel blog',
          imageUrl: 'img/project-6.png',
          id: 6,
          linkUrl : 'https://travel-loggers.netlify.app/',
          gitUrl: 'https://github.com/Muizuddeen/travel'
        }
      ]
    };
  }
  render() {
      return (
         <div className = 'project-page'>
        <Title className ='title' title = "Projects"/>
        <div className = 'directory-menu'>
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <PortfolioItem key={id} {...otherSectionProps} />
          ))}
          </div>
          </div>


      );
    }
  }
export default ProjectPage;

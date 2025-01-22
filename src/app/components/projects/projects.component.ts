import { Component } from '@angular/core';
import { Tools } from 'src/app/models/tools';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  firstPoject: Tools[] = [
    {
      name: 'Java',
    },
    {
      name: 'Spring boot',
    },
    {
      name: 'Angular',
    },
    {
      name: 'Web Scrapping',
    },
    {
      name: 'Github',
    },
    {
      name: 'Postman',
    },
    {
      name: 'GIT',
    },
    {
      name: 'MySQL',
    },
  ];

  secoundProject: Tools[] = [
    {
      name: 'HTML',
    },
    {
      name: 'CSS',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'TypeScript',
    },
    {
      name: 'Apis',
    },
    {
      name: 'Node.js',
    },
    {
      name: 'Git',
    },
    {
      name: 'Github',
    },
   
  ];

  thirdProject: Tools[] = [
    {
      name: 'Java',
    },
    {
      name: 'SpringBoot',
    },
    {
      name: 'Socket Programming',
    },
    {
      name: 'Angular',
    },
    {
      name: 'Github',
    },
    {
      name: 'Git',
    },
    {
      name: 'MySQL',
    },
  
  ];

  projectOne = () => {
    window.open(environment.projectOne, '_blank');
  };

  projectTwo = () => {
    window.open(environment.projectTwo, '_blank');
  };

  projectThree = () => {
    window.open(environment.projectThree, '_blank');
  };
}

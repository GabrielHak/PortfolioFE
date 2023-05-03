import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioFE';
  sectionsInfo = [
    {
      title: 'About Me',
      subtitle: 'Estudiante de la Licenciatura en Ciencias de la Computación',
      paragraph: '',
      img: '',
      subsections: []
    },
    {
      title: 'Experience',
      subtitle: '',
      paragraph: '',
      img: '',
      subsections: [
        {
          title: 'TECME',
          subtitle: 'Fábrica de respiradores arificiales',
          img: '../../../assets/tecme.png',
          graph: '',
        }
      ]
    },
    {
      title: 'Education',
      subtitle: '',
      paragraph: '',
      img: '',
      subsections: [
        {
          title: 'FaMAFyC - Facultad de Matemática Astronomía Física y Computación',
          subtitle: 'Licenciatura en Ciencias de la Computación',
          img: '../../../assets/unc.png',
          graph: '',
        },
        {
          title: 'IPET N° 66 - Dr. José Antonio Balseiro',
          subtitle: 'Técnico en electrónica',
          img: '../../../assets/balseiro.png',
          graph: '',
        }
      ]
    },
    {
      title: 'Hard & Soft skills',
      subtitle: '',
      paragraph: '',
      img: '',
      subsections: [
        {
          title: 'Resolución de problemas',
          subtitle: '',
          img: '',
          graph: '70%',
        },
        {
          title: 'Diseño de Sistemas',
          subtitle: '',
          img: '',
          graph: '40%',
        }
      ]
    },
    {
      title: 'Projects',
      subtitle: '',
      paragraph: '',
      img: '',
      subsections: [
        {
          title: 'Math App',
          subtitle: 'App para que niñes aprendan matemática',
          img: '',
          graph: '',
        }
      ]
    }
  ]
}

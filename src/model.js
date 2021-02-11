import img from './assets/lr.png';
import {style} from './utils'
import {titleBlock, textBlock, imageBlock, textColumnsBlock} from './classes/blocks';

export const model = [
    new titleBlock('JS Конструктор сайтов', {
        tag: 'h3',
        styles: style({
                  background: 'firebrick',
                  'justify-content': 'center'
              }),
    }),
    new imageBlock( img, {
      tag: 'img',
      alt: 'alt',
      styles: 'justify-content: center; padding: 2rem 0',
      imageStyles: 'width: 100px'
    }),
    new textBlock('Hello world! \n Value - любой текст, cтили вводить в формате: background-color: red; justify-content: center;', {
      tag: 'p', styles: 'color: black; justify-content: center; font-weight: bold'
    }),

    new textColumnsBlock([
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    ], {
      styles: 'padding: 1rem'
    })
]

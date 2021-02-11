import {Site} from './classes/site';
import {Sidebar} from './classes/sidebar';
import {model} from "./model";
import './styles/main.css'

let site = new Site('#site');


const updateCallback = newBlock => {
    model.push(newBlock);
    site.render(model);
}
new Sidebar('#panel', updateCallback);

site.render(model);

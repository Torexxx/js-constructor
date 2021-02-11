import {textBlock, titleBlock} from "./blocks";

export class Sidebar {
    constructor(selector, update) {
        this.$el = document.querySelector(selector);
        this.update = update;
        this.init();
    }

    init() {
        this.$el.addEventListener('submit', this.addBlock.bind(this));
        this.$el.innerHTML = this.template;
    }

    get template() {

        return [
            block('text'),
            block('title'),
        ].join('')
    }

     addBlock(e) {
         e.preventDefault();

         const type = e.target.name;
         const value = e.target.value.value;
         const styles =   e.target.styles.value;

         const Constructor = type === 'text'
             ?  textBlock
             :  titleBlock

         const newBlock = new Constructor(value, {styles});
         this.update(newBlock);

         e.target.value.value = '';
         e.target.styles.value  = '';
    }
}

function block(type) {
    return `
            <form name="${type}">
              <h5>${type}</h5>
              <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="value">
              </div>
              <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="styles">
              </div>
              <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
            </form>
            <hr />
  `
}

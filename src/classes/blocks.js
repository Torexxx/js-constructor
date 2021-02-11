import {wrap} from '../utils'

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }
    toHtml() {
        throw new Error('Метод toHtml должен быть реализован');
    }
}

class titleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {tag ='h3', styles} = this.options;
        return wrap(`<${tag}>${this.value}</${tag}>`, 'row', styles);
    }
}
class textBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {tag='p', styles} = this.options;
        return wrap(`<${tag}>${this.value}</${tag}>`,'row', styles);
    }
}
class imageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {tag, styles, alt, imageStyles} = this.options;
        const html = `<${tag} style="${imageStyles}" src="${this.value}" alt="${alt}"/>`;
        return  wrap(html,'row', styles);
    }
}
class textColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {styles} = this.options;
        // debugger
        const html = this.value.map(item => wrap(item, 'col-sm' ));
        return wrap( html.join(''), 'row', styles);
    }
}

export {titleBlock, textBlock, imageBlock, textColumnsBlock};
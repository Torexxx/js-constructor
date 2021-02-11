export function wrap(content, className, styles='') {
    return `<div style=" margin: 0; ${styles}" class="${className}">${content}</div>`;
}

export function style(styles={}) {
    const toString = key => `${key}: ${styles[key]} `
return Object.keys(styles).map(toString).join(';')

}

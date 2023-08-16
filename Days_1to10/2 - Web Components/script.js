class DueteComponent extends HTMLElement {
  constructor() {
    super()

    // Criando uma SHADOW DOM
    // O Mode define se você permite ou não acessar o ShadowRoot
    const shadow = this.attachShadow({ mode: 'open' })

    // Criando um estilo especifico para a SHADOW DOM
    const style = document.createElement('style')

    // Criando uma "prop"
    const title = document.createElement('p')
    title.textContent = this.getAttribute('title')

    const component = document.createElement('main')

    component.appendChild(title)

    style.textContent = `
      main {
        background: ${this.getAttribute('bgColor') || '#162A31'};
        border-radius: 50%;
        color: white;
        text-align: center;
        text-transform: uppercase;
        width: 150px;
        height: 150px;
      }
    `

    shadow.appendChild(style)
    shadow.appendChild(component)
  }
}

customElements.define('duete-div', DueteComponent)

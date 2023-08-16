# 2 - Web Components

### Hoje estudei sobre Web Components, estou desenvolvendo um componente novo no design system do trabalho, como o componente é apenas visual e bem simples, já estou por acaba-lo, mas aproveitei para dar uma atenção maior nas tecnologias utilizadas, como Web Components.

### Li bastante da documentação da MDN e assisti um vídeo sobre Web Components da Cod3r curso, ambos referenciados no final do capitulo.

### Aqui vai um resumão:

- Web Components é um conjunto de tecnologias que permitem a criação de componentes customizados, versáteis, encapsulados e reutilizáveis.
- Os componentes são compostos por HTML, CSS e JavaScript.
- Isso aqui explodiu minha mente: Os componentes criados podem ser utilizados em qualquer projeto ou framework web, então podemos ter diferentes projetos variando entre Vue ou React como exemplo, usando o mesmo design system.
- Utiliza Templates HTML e Shadow DOM. Shadow DOM basicamente uma suíte de APIs JS que geram uma árvore DOM ‘’fantasma’’ de um elemento, renderizada separadamente do DOM do documento principal. Dessa forma você consegue manter os recursos privados, assim o comportamento do seu elemento não causa conflitos de código em outras partes do documento.

### Na prática:

#### Criando um componente:

![image](https://github.com/gabrielduete/100DiasDeCodigo-He4rt/assets/59345698/d0010c4c-9d19-49a6-882a-9f0706605a11)

![image](https://github.com/gabrielduete/100DiasDeCodigo-He4rt/assets/59345698/7bcb7405-d7d7-4ef1-81ee-4f0f162df0bd)

![image](https://github.com/gabrielduete/100DiasDeCodigo-He4rt/assets/59345698/1daa4728-0e73-4618-ba25-f86dac059365)

#### Criando um componente e estilizando usando Shadow DOM:

![image](https://github.com/gabrielduete/100DiasDeCodigo-He4rt/assets/59345698/dc54dbef-4b9a-4d91-be9b-cd72fe2ac933)

#### Criando atributos (nomeei como props pra ficar perto do React hehe):

![image](https://github.com/gabrielduete/100DiasDeCodigo-He4rt/assets/59345698/1ab60a99-56a3-419b-9e5d-2e84ae8510c6)

![image](https://github.com/gabrielduete/100DiasDeCodigo-He4rt/assets/59345698/807880a9-02f4-4632-833e-09c7d3af12f9)

![image](https://github.com/gabrielduete/100DiasDeCodigo-He4rt/assets/59345698/3729dbd2-147e-4a5b-82ce-d6e294f63c8a)

#### Criando atributo bgColor:

![image](https://github.com/gabrielduete/100DiasDeCodigo-He4rt/assets/59345698/4ae3094b-62c2-4160-a0b2-1c0930b89c02)

![image](https://github.com/gabrielduete/100DiasDeCodigo-He4rt/assets/59345698/3696ab00-db91-4a49-8881-88ae193f14bc)

![image](https://github.com/gabrielduete/100DiasDeCodigo-He4rt/assets/59345698/2bae9c23-eeb0-4aa1-9f3b-70f4f063051d)

## Referências:

- [Documentação da MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- [Web Components e Seus Três PRINCIPAIS CONCEITOS: DOM, Shadow DOM e Virtual DOM](https://www.youtube.com/watch?v=PMm-VRXz8I8&t=33s&ab_channel=Cod3rCursos)

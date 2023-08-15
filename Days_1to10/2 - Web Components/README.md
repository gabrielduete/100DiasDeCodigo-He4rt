# 2 - Web Components

### Hoje estudei sobre Web Components, estou desenvolvendo um componente novo no design system do trabalho, como o componente é apenas visual e bem simples, já estou por acaba-lo, mas aproveitei para dar uma atenção maior nas tecnologias utilizadas, como Web Components.

### Li bastante da documentação da MDN e assisti um vídeo sobre Web Components da Cod3r curso, ambos referenciados no final do capitulo.

### Aqui vai um resumão:

- Web Components é um conjunto de tecnologias que permitem a criação de componentes customizados, versáteis, encapsulados e reutilizáveis.
- Os componentes são compostos por HTML, CSS e JavaScript.
- Isso aqui explodiu minha mente: Os componentes criados podem ser utilizados em qualquer projeto ou framework web, então podemos ter diferentes projetos variando entre Vue ou React como exemplo, usando o mesmo design system.
- Utiliza Templates HTML e Shadow DOM. Shadow DOM basicamente uma suíte de APIs JS que geram uma árvore DOM ‘’fantasma’’ de um elemento, renderizada separadamente do DOM do documento principal. Dessa forma você consegue manter os recursos privados, assim o comportamento do seu elemento não causa conflitos de código em outras partes do documento.

### Na prática:

Criando um componente:

https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c7add7a4-b68f-4320-8d19-d688bced1ff5/Untitled.png

https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6559a348-06b7-4e0e-8e7f-990730a51073/Untitled.png

https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a69ab185-5018-4e4d-bb0a-3b39eb3d6f98/Untitled.png

Criando um componente e estilizando usando Shadow DOM:

https://s3-us-west-2.amazonaws.com/secure.notion-static.com/40c0fe84-7d16-4cbb-8515-b93cada0e6ed/Untitled.png

Criando atributos (nomeei como props pra ficar perto do React hehe):

https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6a5ce433-9353-4022-976a-c1351625d71d/Untitled.png

https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2f22f85f-ff05-4f3f-8ac0-594873c73b83/Untitled.png

https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e645a5d5-82aa-4d31-811e-be7f5ddefed4/Untitled.png

Criando atributo bgColor:

https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b38f4a0-a2de-4c66-8ee1-e8facd17ee5b/Untitled.png

https://s3-us-west-2.amazonaws.com/secure.notion-static.com/37c5ead3-fb72-4ef6-967b-9917f7e2511b/Untitled.png

https://s3-us-west-2.amazonaws.com/secure.notion-static.com/209815c4-6fbe-4aa9-8576-cdb68d3543f2/Untitled.png

## Referências:

- [Documentação da MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- [Web Components e Seus Três PRINCIPAIS CONCEITOS: DOM, Shadow DOM e Virtual DOM](https://www.youtube.com/watch?v=PMm-VRXz8I8&t=33s&ab_channel=Cod3rCursos)

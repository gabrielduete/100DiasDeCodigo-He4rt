# 5 - [React Portals](https://trilha.info/roadmap/react#Portals)

No #100DiasDeCodigo de hoje estudei sobre conceitos do React Portals

Com Reaact Portals conseguimos renderizar um componente fora da árvore hierárquica do React de maneira que o relacionamento pai-filho dos componentes não sejam afetados.

### Exemplos:

##### Renderizando um componente em uma outra div:

1. Criando uma div paralela a div root

   ![Alt text](image-2.png)

2. DOM

   ![Alt text](image-3.png)

3. Usando ReactDOM

   ![Alt text](image-4.png)

#### Passando children com Portals

1. Component

   ![Alt text](image-8.png)

2. App

   ![Alt text](image-5.png)

3. Resultado

   ![Alt text](image-7.png)

#### Event delegation - Usando os mesmos componentes, podemos também usar eventos a partir de um portal

1. App

   ![Alt text](image-6.png)

2. Example Component

   ![Alt text](image-9.png)

3. Resultado
   ![Alt text](image-10.png)
   Perceba que não definimos nenhum onClick no nosso button dentro do componente Example, mas a div pai tem uma propriedade onClick. Então basicamente o evento do button se propaga até que encontre o evento onClick na div pai.

### Algumas utilidades

- Alertas de Cookies
- Interagir com modais
- Telas de loading
- Use sua criatividade xD

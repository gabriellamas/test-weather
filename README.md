<!-- PROJECT LOGO -->
<br />
<p align="center">
  <img width="300px" height="auto" src="https://i.ibb.co/k4Rrn8J/weather.png" alt="Weather Platform | Builders">

  <h3 align="center">Desafio Platform Builders</h3>
  <h4 align="center">Gabriel Lamas</h4>
</p>

## O que é?

Uma aplicação simples para verificar a temperatura e mais algumas informações da sua região

## Instruções

1 - Clone o projeto

```properties
git clone https://github.com/gabriellamas/test-weather.git
``` 

2 - Entre na pasta backend e rode o comando yarn para instalar as dependências

```properties
yarn
``` 
ou
```properties
npm install
``` 

3 - Na pasta frontend também rode o comando yarn

```properties
yarn
``` 

4 - Agora rode o comando yarn dev:server na pasta backend e yarn start na pasta frontend (*Nesta ordem*)

```properties
yarn dev:server
``` 

```properties
yarn start
``` 

### 5 - Pronto! agora é só acessar o link [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação rodando


## Instruções para DEVS

Para buildar o frontend, rode um dos comandos abaixo na pasta frontend

```properties
yarn build
``` 
ou

```properties
npm run build
``` 

# Observações

- Mesmo o backend não sendo meu forte, resolvi fazer uma camadinha para proteger meu ID de autorização de uso da api do [Open Weather](https://openweathermap.org/api).
- Não senti a necessidade de utilizar muitas libs neste teste, apenas a date-fns para lidar com datas [date-fns](https://date-fns.org/) e a [react-icons](https://react-icons.github.io/react-icons/) para um ícone.
- Utilizei [React Context](https://pt-br.reactjs.org/docs/context.html) para lidar com as informações a serem passadas para outros componentes.

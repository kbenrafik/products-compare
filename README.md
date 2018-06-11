# Zamro Compare

Hello readers, this App include :

- [x] React 16.4.0
- [x] ECMAScript 6 and JSX support
- [x] React Router v4
- [x] Component testing using [Enzyme](https://github.com/airbnb/enzyme) and [Jest](https://facebook.github.io/jest)
- [x] Code Coverage
- [x] Latest Webpack (v.3.11.0) and Webpack Dev Server (v.2.9.5) with Scope Hoisting enabled
- [x] Hot Module Replacement using [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [x] ES6 linting with continuous linting on file change
- [x] SCSS support
- [x] Separate CSS stylesheets generation
- [x] Production Config
- [x] Custom Babel Preset with Decorators, Class Properties, Rest/Spread operator support

## Starting the dev server

Make sure you have the latest Stable or LTS version of Node.js installed.

1. `git clone https://github.com/kbenrafik/zamro-compare`
2. Run `npm install` or `yarn install`
3. Start the dev server using `npm start`
3. Open [http://localhost:8080](http://localhost:8080)

## Available Commands

- `npm start` - start the dev server
- `npm run clean` - delete the dist folder
- `npm run production` - create a production ready build in `dist` folder
- `npm run lint` - execute an eslint check
- `npm test` - run all tests
- `npm run test:watch` - run all tests in watch mode
- `npm run coverage` - generate code coverage report in the `coverage` folder

## Architecture

I decide to work with React as UI library and some extra helpers|libraries to try to make the app better and easy to maintain.

I have implemented the following behaviors for the comparator :

- [x] Show and hide products
- [x] Highlight differences between product features
- [x] Features should be in alphabetical order by feature name
- [x] Badges should be placed before features
- [x] Exclude given features

So let's start about the exciting things :D

I have made 2 major components that can be reuse again :
- CompareProducts
    - expecting list of SKU
    - output will be loading | no products found | products compare
- Product (PureComponent because we just render the given props)
    - input product object
    - output is the html (just rendring)

##### But how CompareProducts will have all the data?

Hmm, I tried to separate the concerns I mean all the logic about the compare are on API folder and React will only render

##### Logic:

So here we should get the products and prepare them for the component CompareProducts, I mean :
- Get data from the endpoint
- features should be in alphabetical order
- put bagdes feature at the first item
- Know which feature is different

All logic are on API folder, I have created two classes for Product and Products.

##### How to make the App clean?
I keep it simple and easy :
- Separate the concern (login and rendering)
- Use understandable naming (like: boolean isReady...)
- Use linting for the quality code and also for other developers (airbnb .eslintrc)
- Documentation (JSDoc)
- Testing for API and React Components (I have promise Samuel to send him the solution in one week, 
    I didn't have much time to cover all things that I was planing, if I have time I woud love to finish all tests)
- Use SCSS with BEM as a methodology
- Separate CSS stylesheets generation

##### Extra points

- Webpack : I have added many module loaders for SCSS => CSS, ES6, and for static files (url-loader) and one plugin for eslint
- Sass/Less : SCSS
- Any CSS methodology : BEM I love it
- Responsiveness : I think I cover 60% without any library, if I have the time I would love to finish it
- Browser backward compatibility (IE11) : I used flex, it works on IE11 but with some issues

I would love to explain all of this with live voice.

Thanks.
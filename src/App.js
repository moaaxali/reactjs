import React, { Suspense } from 'react';
import TasteOfJSX from './TasteOfJSX/TasteOfJSX'
import Comment from './Comment/Comment'
import StatefulComponent from './StatefulComponent/StatefulComponent'
import EventHandling from './EventHandling/EventHandling'
import './App.css';
import ConditionalRendering from './ConditionalRendering/ConditionalRendering';
import ListKeys from './ListKeys/ListKeys';
import Forms from './Forms/Forms';
import LiftingStateUp from './LiftingStateUp/LiftingStateUp';
import CurrencyConverter from './CurrencyConverter/CurrencyConverter';
import ReactCompositions from './ReactCompositions/ReactCompositions';
// import FilterableProductTable from './FilterableProductTable/FilterableProductTable';
import ErrorBoundary from './ErrorBoundary'
// make some typo in the path to the modele to see ErrorBoundary works
const FilterableProductTable = React.lazy(() => import('./FilterableProductTable/FilterableProductTable'));

const user = {
  firstName: 'Maaz',
  lastName: 'Ali',
  favoriteFigure: 7,
  hobbies: ['Soccer', 'Vollyball', 'Hiking', 'Camping', 'Swimming', 'Coding'],
}
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

function App() {
  return (
    <div className="App">
      <TasteOfJSX user={user} />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <StatefulComponent />
      <EventHandling />
      <ConditionalRendering />
      <ListKeys />
      <Forms />
      <LiftingStateUp />
      <CurrencyConverter />
      <ReactCompositions />
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <FilterableProductTable products={PRODUCTS} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;

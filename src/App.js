// import TasteOfJSX from './TasteOfJSX/TasteOfJSX'
// import Comment from './Comment/Comment'
import StatefulComponent from './StatefulComponent/StatefulComponent'
import './App.css';

// const user = {
//   firstName: 'Maaz',
//   lastName: 'Ali',
//   favoriteFigure: 7,
//   hobbies: ['Soccer', 'Vollyball', 'Hiking', 'Camping', 'Swimming', 'Coding'],
// }
// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

function App() {
  return (
    <div className="App">
      {/* <TasteOfJSX user={user} /> */}
      {/* <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      /> */}
      <StatefulComponent />
    </div>
  );
}

export default App;

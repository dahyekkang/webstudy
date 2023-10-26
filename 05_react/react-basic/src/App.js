import './App.css';
import Ex01 from './component/Ex01';

function App() {
  return (
    <div className="App">
      {/* MyFirstComponent 포함하기 */}
      {/* <MyFirstComponent /> */}
      <Ex01 />
      <br/><hr/><br/>
      <Ex02 />
    </div>
  );
}

export default App;
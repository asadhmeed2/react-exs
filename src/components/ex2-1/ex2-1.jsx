import react from 'react';
import reactDOM from 'react-dom';

const Hello =()=>{
    return (<div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click me
        </a> ;
        {document.querySelector('title').textContent = `AppleSeeds React App`}
    </div>)
}
export default Hello;
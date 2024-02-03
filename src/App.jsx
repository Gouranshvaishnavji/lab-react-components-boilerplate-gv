import './App.css';
import lake from "./src/image/lake.jpg";
import GallaryFooter from './components/GallaryFooter';
import Header from '/src/components/Header';
import Main from '/src/components/Main';

const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <>
    <Header/>
    <Main imageData={imageData}/>
    <GallaryFooter/> 
    </>

  )
}

export default App;

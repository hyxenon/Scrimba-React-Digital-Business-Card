import {Info} from './components/Info'
import {About} from './components/About'
import {Interest} from './components/Interests'
import { Footer } from './components/Footer';
import {Helmet} from 'react-helmet'
function App() {
  return (
    <div className="bg-gray-800 h-screen flex justify-center items-center">
       <Helmet>
        <title>Digital Business Card</title>
        <meta name="description" content="Scrimba First Project" />
       </Helmet>
      <div className="bg-gray-900 w-[72%] h-[92%] min-h-[794px] max-w-[370px] flex flex-col rounded-xl overflow-hidden shadow-lg">
          <Info />
          <About/>
          <Interest />
          <Footer/>
      </div>
    </div>
  );
}

export default App;

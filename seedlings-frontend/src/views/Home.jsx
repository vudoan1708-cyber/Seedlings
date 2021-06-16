import { useState, useEffect } from 'react';
import Seedling from '../components/Reusable/Seedling';

// SCSS
import '../sass/Unique/_home.scss';

function Home() {
  const [seeds, setSeeds] = useState([]);

  useEffect(() => {
    function sowTheSeeds() {
      setSeeds((allSeeds) => [...allSeeds, `${allSeeds.length}`]);
    }
    document.body.addEventListener('dblclick', sowTheSeeds);

    // cleanup this component
    return () => {
      document.body.removeEventListener('dblclick', sowTheSeeds);
    };
  }, [seeds]);

  if (seeds.length > 0) {
    return (
      <div className="Home">
        {seeds.map((seed, i) => {
          return <Seedling seed={ seed } key={ i } />
        })}
      </div>
    );
  } else return null;
}

export default Home;

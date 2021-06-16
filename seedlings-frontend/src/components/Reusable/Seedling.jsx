import { useState } from 'react';

// SCSS
import '../../sass/Unique/_seedling.scss'

function Seedling(props) {
  // eslint-disable-next-line no-unused-vars
  const [seed, setSeed] = useState(props.seed);

  return (
    <div className="Seedling">
      <h2>{ seed }</h2>
    </div>
  );
}

export default Seedling;

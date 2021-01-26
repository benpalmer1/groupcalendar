import React from 'react';

import SelectExistingGroup from './SelectExistingGroup';
import CreateNewGroup from './CreateNewGroup';

function Home() {
    return (
      <div>
        <h1>Are you free?</h1>
        <h2>Group scheduling app - figure out when everyone is available.</h2>
        <br></br>
        <br></br>
        <SelectExistingGroup />
        <br></br>
        <br></br>
        <CreateNewGroup />
        <br></br>
        <br></br>
        <h6>Benjamin Palmer</h6>
      </div>
    );
}

export default Home;
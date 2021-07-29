import React, { Fragment,Component } from 'react';
import Fetch from './components/fetch';

class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Fragment>
        <Fetch/>
      </Fragment>
     );
  }
}
 
export default App ;
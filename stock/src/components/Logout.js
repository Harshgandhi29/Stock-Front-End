import React from 'react';
import { useHistory} from "react-router-dom";
import { withRouter} from "react-router-dom";
function Logout(props) {
    const history = useHistory()
    localStorage.clear()
    history.push('/login')
    return(
      <div> </div>
       
    )
}
export default Logout;
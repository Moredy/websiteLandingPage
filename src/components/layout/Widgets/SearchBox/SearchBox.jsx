import React from 'react'
import './SearchBox.css'

export default props => {

  return (

<form onsubmit="event.preventDefault();" role="search">
  <label for="search">Search for stuff</label>
  <input id="search" type="search" placeholder="Search..." autofocus required />
  <button type="submit">Go</button>    
</form>

  );

}
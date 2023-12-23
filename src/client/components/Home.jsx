import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* <h1>note-to-oneself</h1> */}
      <Link to='/note'>
        <h1>note-to-oneself</h1>
      </Link>
    </>
  );
}

export default Home;

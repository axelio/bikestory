import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import Header from '../Header';
import header from '../OdraNysa/images/header';


const Home: React.FC = () => {
  return (
    <>
      <Header image={header} />
      <section className='posts'>
        <hr />
        <Link className='post-title' to={`/odranysa`}>Odra Nysa i kawałek R10</Link>
        <hr />
        <Link className='post-title' to={`/zielona7`}>Green Velo: Warmia, Mazury i Suwalszczyzna</Link>
        <hr />
      </section>
    </>
  );
}

export default Home;
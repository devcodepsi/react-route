import React from 'react';
import './style.scss';
import { Outlet, Link } from 'react-router-dom';
import Header from './routes/header';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <h3>Index Page</h3>
      </main>
      <Outlet />
    </div>
  );
}

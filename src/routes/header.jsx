import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <h1>
        <Link to="/">Bookkeeper</Link>
      </h1>
      <nav>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}

import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { getInvoices } from '../data';
import Header from '../routes/header';

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div>
      <Header />
      <nav>
        {invoices.map((invoice) => (
          <NavLink
            className={({ isActive }) => (isActive ? 'red' : 'blue')}
            key={invoice.number}
            to={`/invoice/${invoice.number}`}
            style={{ display: 'block', padding: '5px' }}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

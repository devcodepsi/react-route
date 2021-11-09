import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getInvoices } from '../data';

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div>
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

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';
import Header from '../routes/header';

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <div>
      <Header />
      <main>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
        <p>
          <button
            onClick={() => {
              deleteInvoice(invoice.number);
              navigate('/invoices');
            }}
          >
            Delete
          </button>
        </p>
      </main>
    </div>
  );
}

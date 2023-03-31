import React from 'react';
import {render, TextField, useApplyMetafieldsChange, useMetafield} from '@shopify/checkout-ui-extensions-react';

render('Checkout::DeliveryAddress::RenderBefore', () => <App />);

function App() {
  const METAFIELD_NAMESPACE = 'gadget-example';
  const METAFIELD_KEY = 'vat-number';

  const updateMetafield = useApplyMetafieldsChange();
  const residentIdState = useMetafield({
    namespace: METAFIELD_NAMESPACE,
    key: METAFIELD_KEY,
  });


  const handleFieldChange = (value) => {
    updateMetafield(
      {
        type: 'updateMetafield',
        namespace: METAFIELD_NAMESPACE,
        key: METAFIELD_KEY,
        valueType: 'string',
        value: value
      }
    );
  };

  return (
    <TextField 
      label='VAT Number'
      value={residentIdState?.value}
      onChange={handleFieldChange}
    />
  );
}


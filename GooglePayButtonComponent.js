// GooglePayButtonComponent.jsx
import React from 'react';
import GooglePayButton from '@google-pay/button-react';

const GooglePayButtonComponent = () => {
  return (
    <GooglePayButton
      environment="TEST" // Use "PRODUCTION" when you are ready to go live
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example', // Replace with your gateway
                gatewayMerchantId: 'exampleGatewayMerchantId', // Replace with your merchant ID
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: '12345678901234567890', // Replace with your merchant ID
          merchantName: 'Example Merchant',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: '10.00', // Replace with the actual price
          currencyCode: 'USD',
          countryCode: 'US',
        },
        shippingAddressRequired: true,
        callbackIntents: ['PAYMENT_AUTHORIZATION'],
      }}
      onLoadPaymentData={(paymentRequest) => {
        console.log('load payment data', paymentRequest);
      }}
      onPaymentAuthorized={(paymentData) => {
        console.log('Payment Authorized Success', paymentData);
        return { transactionState: 'SUCCESS' };
      }}
      existingPaymentMethodRequired="false"
      buttonColor="black"
      buttonType="long"
    />
  );
};

export default GooglePayButtonComponent;

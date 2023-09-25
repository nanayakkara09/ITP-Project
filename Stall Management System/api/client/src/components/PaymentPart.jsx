import React from 'react';

const PaymentPart = ({ data, setData }) => {
  return (
    <div className="space-y-6">
      {/* Card Type Section */}
      <div>
        <label htmlFor="cardtype" className="block text-sm font-medium text-gray-700 pb-2">
          Card Type
        </label>
        <div className="space-x-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="cardtype"
              value="visa"
              checked={data.cardtype === 'visa'}
              onChange={(e) => setData({ ...data, cardtype: e.target.value })}
              className="form-radio h-4 w-4 text-indigo-600"
            />
            <span className="ml-2">Visa</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="cardtype"
              value="mastercard"
              checked={data.cardtype === 'mastercard'}
              onChange={(e) => setData({ ...data, cardtype: e.target.value })}
              className="form-radio h-4 w-4 text-indigo-600"
            />
            <span className="ml-2">MasterCard</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="cardtype"
              value="amex"
              checked={data.cardtype === 'amex'}
              onChange={(e) => setData({ ...data, cardtype: e.target.value })}
              className="form-radio h-4 w-4 text-indigo-600"
            />
            <span className="ml-2">American Express</span>
          </label>
          {/* Add more card types as needed */}
        </div>
      </div>

      {/* Card Number Section */}
      <div>
        <label htmlFor="number" className="block text-sm font-medium text-gray-700 pb-2">
          Card Number*
        </label>
        <input
          onChange={(e) => setData({ ...data, cardNumber: e.target.value })}
          value={data.cardNumber}
          type="text"
          id="number"
          className="block w-full h-10 px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 text-sm"
          placeholder="1234 5678 9012 3456"
        />
      </div>

      {/* Expiry Date Section */}
      <div className="flex space-x-2">
        <div className="flex-1">
          <label htmlFor="expireMonth" className="block text-sm font-medium text-gray-700 pb-2">
            Expiry Month
          </label>
          <select
            onChange={(e) => setData({ ...data, expireMonth: e.target.value })}
            value={data.expireMonth}
            id="expireMonth"
            className="block w-full h-10 px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 text-sm"
          >
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="11">11</option>
            <option value="12">12</option>

          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="expireYear" className="block text-sm font-medium text-gray-700 pb-2">
            Expiry Year
          </label>
          <select
            onChange={(e) => setData({ ...data, expireYear: e.target.value })}
            value={data.expireYear}
            id="expireYear"
            className="block w-full h-10 px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 text-sm"
          >
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            {/* Add more years as needed */}
          </select>
        </div>
      </div>

      {/* CVN Section */}
      <div>
        <label htmlFor="cvn" className="block text-sm font-medium text-gray-700 pb-2">
          CVN (Card Verification Number)
        </label>
        <input
          onChange={(e) => setData({ ...data, cvn: e.target.value })}
          value={data.cvn}
          type="text"
          id="cvn"
          className="block w-full h-10 px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 text-sm"
          placeholder="123"
        />
      </div>
    </div>
  );
};

export default PaymentPart;

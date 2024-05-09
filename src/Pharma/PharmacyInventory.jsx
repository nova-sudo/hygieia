import React from 'react';
import PhBackground from './PHBackground';

const PharmacyInventory = () => {
  // Example medication data
  const medications = [
    { id: 1, name: 'Medication A', type: 'Tablet', quantity: 100, price: 10.99 },
    { id: 2, name: 'Medication B', type: 'Capsule', quantity: 50, price: 15.99 },
    { id: 3, name: 'Medication C', type: 'Injection', quantity: 20, price: 25.99 },
    { id: 4, name: 'Medication D', type: 'Syrup', quantity: 80, price: 8.99 },
    { id: 5, name: 'Medication E', type: 'Tablet', quantity: 60, price: 12.99 },
    { id: 6, name: 'Medication F', type: 'Cream', quantity: 40, price: 18.99 },
    { id: 7, name: 'Medication G', type: 'Tablet', quantity: 120, price: 9.99 },
    { id: 8, name: 'Medication H', type: 'Injection', quantity: 30, price: 22.99 },
    { id: 9, name: 'Medication I', type: 'Capsule', quantity: 70, price: 14.99 },
    { id: 10, name: 'Medication J', type: 'Syrup', quantity: 90, price: 11.99 },
  ];

  return (
    <div className='relative' class="transition-fade">
      <PhBackground/>
      <div className="container mx-auto px-4 font-right py-8 relative z-10">
        <h2 className="text-8xl font-bold mb-10">Pharmacy Inventory</h2>
        <div className=" text-black   ">
          <table className="min-w-full    rounded-lg bg-white">
            <thead>
              <tr>
                <th className="  px-4 py-2">ID</th>
                <th className="  px-4 py-2">Name</th>
                <th className="  px-4 py-2">Type</th>
                <th className=" px-4 py-2">Quantity</th>
                <th className="  px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {medications.map(medication => (
                <tr key={medication.id}>
                  <td className="  border-y px-4 py-2">{medication.id}</td>
                  <td className="  border-y px-4 py-2">{medication.name}</td>
                  <td className=" border-y px-4 py-2">{medication.type}</td>
                  <td className=" border-y px-4 py-2">{medication.quantity}</td>
                  <td className="border-y  px-4 py-2">${medication.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PharmacyInventory;

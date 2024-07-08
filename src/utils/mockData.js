export const mockTenants = [
  { id: 1, name: 'John Doe', house: 'House 1', status: 'Paid', username: 'john', password: '1234' },
  { id: 2, name: 'Jane Smith', house: 'House 2', status: 'Not Paid', username: 'jane', password: '1234' },
  { id: 3, name: 'Mike Johnson', house: 'House 3', status: 'Paid', username: 'mike', password: '1234' },
  { id: 4, name: 'Sara Williams', house: 'House 4', status: 'Not Paid', username: 'sara', password: '1234' },
  { id: 5, name: 'Chris Brown', house: 'House 5', status: 'Paid', username: 'chris', password: '1234' }
];

export const mockHouses = [
  { id: 1, details: 'House 1', tenant: 'John Doe' },
  { id: 2, details: 'House 2', tenant: 'Jane Smith' },
  { id: 3, details: 'House 3', tenant: 'Mike Johnson' },
  { id: 4, details: 'House 4', tenant: 'Sara Williams' },
  { id: 5, details: 'House 5', tenant: 'Chris Brown' }
];

export const mockPayments = [
  { id: 1, amount: 500, date: '2023-01-01', tenant: 'John Doe' },
  { id: 2, amount: 600, date: '2023-02-01', tenant: 'Jane Smith' },
  { id: 3, amount: 700, date: '2023-03-01', tenant: 'Mike Johnson' },
  { id: 4, amount: 800, date: '2023-04-01', tenant: 'Sara Williams' },
  { id: 5, amount: 900, date: '2023-05-01', tenant: 'Chris Brown' }
];

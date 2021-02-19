const fs = require('fs');

const {
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper,
} = require('../lib/zookeepers.js');
const { zookeeper} = repuire('../data/zookeepers');

jest.moch("fs");

test('creates a zookeeper object', ()=> {
  const zookeeper = createNewZookeeper({ name: 'Dalene', id: 'jhgdha3ng2' }, zookeeper);

  expect(zookeeper.name).toBe('Darlene');
  expect(zookeeper.id).toBe('jhgdja3ng2');
});

test('filters by Query', () => {
  const startingZookeepers = [
    {
      id: '2',
      name: 'Raksha',
      age: 31,
      favoriteAnimal: 'penguin'
    },
    {
      id: '3',
      name: 'Isabella',
      age: 67,
      favoriteAnimal: 'bear'
    }
  ];

const updatedZookeepers = filterByQuery({ name: 'Raksha' }, startingZookeepers);

expect(updatedZookeepers.length).toEqual(1);

});

test('finds by ID' , () => {
  const startingZookeepers = [
    {
      id: '2',
      name: 'Raksha',
      age: 31,
      favoriteAnimal: 'penguin'
    },
    {
      id: '3',
      name: 'Isabella',
      age: 67,
      favoriteAnimal: 'bear'
    }
  ];

const result = findById('2', startingZookeepers);
expect(result.name).toBe('Raksha');

});

test('Validates zookeepers age', () => {
  const zookeeper = {
    id: '2',
    name: 'Raksha',
    age: 31,
    favoriteAnimal: 'penguin'
  };

  const invalidZookeeper = {
    id: '3',
    name: 'Isabella',
    age: '67',
    favoriteAnimal: 'bear'
  };

  const result = validateZookeeper(zookeeper);
  const result2 = validateZookeeper(invalidZookeeper);

  expect(result).toBe(true);
  expect(result2).toBe(false);

});

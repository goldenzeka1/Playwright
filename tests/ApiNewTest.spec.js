import { test, expect } from '@playwright/test';
test('check GET', async ({ request }) => { 
    const response = await request.get('https://reqres.in/api/users?page=2/');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);

    const user = responseBody.data[0];
    expect(user).toHaveProperty('id', 7);
    expect(user).toHaveProperty('email', 'michael.lawson@reqres.in');
    expect(user).toHaveProperty('first_name', 'Michael');
    expect(user).toHaveProperty('last_name', 'Lawson');
    expect(user).toHaveProperty('avatar', 'https://reqres.in/img/faces/7-image.jpg');




});
test('Check POST', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      data: {
        name: 'morpheus',
        job: 'leader',
      }
    });
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log('Response Body:', responseBody); 
    expect(responseBody).toHaveProperty('name', 'morpheus');
    expect(responseBody).toHaveProperty('job', 'leader');
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('createdAt');
});
test('Check Put', async ({request}) => {
  const response = await request.put('https://reqres.in/api/users/2',{
    data: {
      name: 'morpheus',
      job: 'zion resident'
    }
  })
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log('Response Body', responseBody);

  expect(responseBody).toHaveProperty('name', 'morpheus');
  expect(responseBody).toHaveProperty('job', 'zion resident');
  expect(responseBody).toHaveProperty('updatedAt');
});
test('Check Delete', async ({request}) =>  {
  const response = await request.delete('https://reqres.in/api/users/2');
  expect(response.status()).toBe(204);
});
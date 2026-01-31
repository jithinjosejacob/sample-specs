import { test, expect } from '@playwright/test';
import { addPet } from '../helpers/petstore';
import { auth } from '../helpers/auth';

test('adds a pet and returns the correct id & name', async ({ request }) => {
  const id = auth();
  const pet = {
    id,
    category: { id: 0, name: 'test' },
    name: `test-pet-${id}`,
    photoUrls: [],
    tags: [],
    status: 'available',
  };

  const res = await addPet(request, pet);
  expect(res.ok()).toBeTruthy();
  const json = await res.json();
  expect(json.id).toBe(id);
  expect(json.name).toBe(pet.name);
});
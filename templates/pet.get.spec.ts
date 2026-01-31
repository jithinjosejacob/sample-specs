import { test, expect } from '@playwright/test';
import { addPet, getPet } from '../helpers/petstore';
import { auth } from '../helpers/auth';

test('creates a pet then fetches it by id', async ({ request }) => {
  const id = auth();
  const pet = {
    id,
    category: { id: 0, name: 'test' },
    name: `test-pet-${id}`,
    photoUrls: [],
    tags: [],
    status: 'available',
  };

  const createRes = await addPet(request, pet);
  expect(createRes.ok()).toBeTruthy();

  const getRes = await getPet(request, id);
  expect(getRes.ok()).toBeTruthy();
  const json = await getRes.json();
  expect(json.id).toBe(id);
  expect(json.name).toBe(pet.name);
});
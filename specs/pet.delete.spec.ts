import { test, expect } from '@playwright/test';
import { addPet, getPet, deletePet } from '../helpers/petstore';
import { auth } from '../helpers/auth';

test('creates a pet, deletes it, then confirms it is gone', async ({ request }) => {
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

  const delRes = await deletePet(request, id);
  // Petstore returns 200 on success
  expect(delRes.ok()).toBeTruthy();

  const getAfter = await getPet(request, id);
  expect(getAfter.status()).toBe(404);
});
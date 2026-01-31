/**
 * Petstore API helpers for Playwright Test
 *
 * These helpers use Playwright's `APIRequestContext` (the `request` fixture) to
 * interact with the public Petstore API. They intentionally use the full
 * endpoint URL so the tests don't need a configured baseURL.
 */

import type { APIRequestContext } from '@playwright/test';

export type Pet = {
  id: number;
  category?: { id: number; name: string };
  name: string;
  photoUrls?: string[];
  tags?: Array<{ id?: number; name?: string }>;
  status?: string;
};

const ENDPOINT = process.env.PETSTORE_ENDPOINT || 'https://petstore.swagger.io/v2';

export async function addPet(request: APIRequestContext, pet: Pet) {
  return request.post(`${ENDPOINT}/pet`, { data: pet });
}

export async function getPet(request: APIRequestContext, id: number) {
  return request.get(`${ENDPOINT}/pet/${id}`);
}

export async function deletePet(request: APIRequestContext, id: number) {
  return request.delete(`${ENDPOINT}/pet/${id}`);
}

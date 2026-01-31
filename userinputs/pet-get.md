# Get Pet — Retrieve a pet by id 🔍

**Purpose:** Verify `GET /pet/{id}` // Everything for get should be in one folder

**Tests:**
// Spec5 with two tests
1. Ensure a pet with a known id exists (create if necessary).
2. Assert response is `200` and returned JSON contains the expected `id`, `name`, and `status`.

3. Negative case: GET a non-existent id and assert the response is `404`. // Spec 6


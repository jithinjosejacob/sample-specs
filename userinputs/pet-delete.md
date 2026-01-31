# Delete Pet — Remove a pet and verify deletion 🗑️

**Purpose:** Confirm that `DELETE /pet/{id}` 

**Tests:**
1. Assert the DELETE response is successful (usually `200`). // Spec 3

2. GET `/pet/{id}` and assert the response is `404`. // Spec 4

**Expected result:**
- DELETE successful and the pet is no longer retrievable (GET returns `404`).

**Notes:**
- Include a cleanup step in tests if a partial failure occurs.
- Keep sections separated by blank lines for readability.

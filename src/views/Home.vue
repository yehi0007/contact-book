<template>
  <div class="container my-5">
    <h1 class="text-center mb-4">📇 Contact Book</h1>

    <div class="mb-3">
      <input
        v-model="search"
        class="form-control"
        placeholder="Search by first or last name..."
      />
    </div>

    <div class="row">
      <div
        v-for="contact in filteredContacts"
        :key="contact.id"
        class="col-md-4 mb-3"
      >
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title">
              <router-link :to="`/contact/${contact.id}`">
                {{ contact.firstName }} {{ contact.lastName }}
              </router-link>
            </h5>
            <p class="card-text text-muted">{{ contact.email }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-4">
      <router-link to="/add" class="btn btn-primary btn-lg">
        + Add New Contact
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { getContacts } from "../utils/localStorage";

export default {
  setup() {
    const contacts = ref(getContacts());
    const search = ref("");

    const filteredContacts = computed(() =>
      contacts.value
        .filter(
          (c) =>
            c.firstName.toLowerCase().includes(search.value.toLowerCase()) ||
            c.lastName.toLowerCase().includes(search.value.toLowerCase())
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
    );

    return { search, filteredContacts };
  },
};
</script>

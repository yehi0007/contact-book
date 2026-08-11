<template>
  <div>
    <input v-model="search" placeholder="Search contacts..." />
    <ul>
      <li v-for="contact in filteredContacts" :key="contact.id">
        <router-link :to="`/contact/${contact.id}`"
          >{{ contact.firstName }} {{ contact.lastName }}</router-link
        >
      </li>
    </ul>
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

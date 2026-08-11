<template>
  <div class="container my-5" v-if="contact">
    <div class="card shadow">
      <div class="card-header">
        <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      </div>

      <div class="card-body">
        <p><strong>Email:</strong> {{ contact.email }}</p>
        <p><strong>Phone:</strong> {{ contact.phone || "N/A" }}</p>
        <p><strong>Address:</strong> {{ contact.address || "N/A" }}</p>
      </div>

      <div class="card-footer d-flex justify-content-between">
        <router-link :to="`/edit/${contact.id}`" class="btn btn-warning">
          ✏️ Edit
        </router-link>

        <button @click="removeContact" class="btn btn-danger">🗑 Delete</button>

        <router-link to="/" class="btn btn-secondary">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getContacts, deleteContact } from "../utils/localStorage";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const contact = ref(null);

    onMounted(() => {
      const contacts = getContacts();
      const id = route.params.id;
      contact.value = contacts.find((c) => c.id === id);
    });

    const removeContact = () => {
      const id = route.params.id;
      deleteContact(id);
      router.push("/");
    };

    return { contact, removeContact };
  },
};
</script>

<template>
  <div class="card shadow my-4">
    <div class="card-header">
      <h3>{{ isEdit ? "Edit Contact" : "Add New Contact" }}</h3>
    </div>

    <div class="card-body">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label class="form-label">First Name</label>
          <input
            v-model="contact.firstName"
            type="text"
            class="form-control"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Last Name</label>
          <input
            v-model="contact.lastName"
            type="text"
            class="form-control"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            v-model="contact.email"
            type="email"
            class="form-control"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Phone</label>
          <input v-model="contact.phone" type="text" class="form-control" />
        </div>

        <div class="mb-3">
          <label class="form-label">Address</label>
          <input v-model="contact.address" type="text" class="form-control" />
        </div>

        <button type="submit" class="btn btn-success">
          {{ isEdit ? "Update Contact" : "Add Contact" }}
        </button>
        <router-link to="/" class="btn btn-secondary ms-2">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { addContact, getContacts, updateContact } from "../utils/localStorage";

export default {
  props: {
    isEdit: { type: Boolean, default: false },
    id: { type: String, default: null },
  },

  setup(props) {
    const router = useRouter();

    const contact = ref({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    });

 
    onMounted(() => {
      if (props.isEdit && props.id) {
        const existing = getContacts().find((c) => c.id === props.id);
        if (existing) contact.value = { ...existing };
      }
    });

    const submitForm = () => {
      if (props.isEdit) {
        updateContact(contact.value);
        router.push(`/contact/${contact.value.id}`);
      } else {
        const newContact = addContact(contact.value);
        router.push(`/contact/${newContact.id}`);
      }
    };

    return { contact, submitForm };
  },
};
</script>

<style scoped>
.card-header h3 {
  margin: 0;
}
</style>

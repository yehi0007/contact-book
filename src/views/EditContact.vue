<template>
  <ContactForm :isEdit="true" :id="id" />
</template>

<script>
import ContactForm from "../components/ContactForm.vue";

export default {
  props: ["id"],
  components: { ContactForm },
};
</script>

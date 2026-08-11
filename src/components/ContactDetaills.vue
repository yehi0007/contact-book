<template>
  <div class="container my-5">
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
        <button @click="deleteContact(contact.id)" class="btn btn-danger">
          🗑 Delete
        </button>
        <router-link to="/" class="btn btn-secondary">Back</router-link>
      </div>
    </div>
  </div>
</template>

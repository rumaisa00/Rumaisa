<template>
  <div class="about-container">
    <h1>About Me</h1>

    <p class="intro">
      Hi! I'm <strong>Rumaisa Karim</strong>, a final-year student at the College of Engineering, 
      Software and Informatics Department. .
    </p>

    <section class="cards">
      <div class="card">
        <h2>My Projects</h2>
        <ul>
          <li><strong>Pet Store Management System:</strong> Backend app built with Java for managing pet sales, food, and accessories.</li>
          <li><strong>Stop Food Waste:</strong> Web app for donating food from restaurants or people to those in need.</li>
        </ul>
      </div>

      <div class="card">
        <h2>Skills</h2>
        <ul>
          <li>Java</li>
          <li>HTML / CSS / JavaScript</li>
          <li>Teamwork & Collaboration</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutView'
});
</script>

<style scoped>
.about-container {
  max-width: 1000px;
  margin: 50px auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

h1 {
  text-align: center;
  color: #3498db;
  font-size: 2.5rem;
  margin-bottom: 25px;
}

.intro {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 40px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.card {
  flex: 1 1 400px;
  background: linear-gradient(145deg, #ffffff, #e6f2ff);
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.2);
}

.card h2 {
  color: #2c3e50;
  margin-bottom: 15px;
  text-align: center;
}

.card ul {
  list-style: none;
  padding-left: 0;
}

.card li {
  background-color: #f0f4f8;
  padding: 12px 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: background 0.3s ease, color 0.3s ease;
}

.card li:hover {
  background-color: #3498db;
  color: white;
}
</style>

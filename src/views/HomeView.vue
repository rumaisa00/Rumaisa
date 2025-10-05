<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Hi, I'm Rumaisa</h1>
        <p>Last-year Software Engineering student | Creating apps that solve real problems</p>
        <a href="https://www.figma.com/design/p6jnHYhYSyoOdLiO7wM8qD/FIGMA.COM--Copy-?node-id=0-1&t=JtKyY9rezDIuXirb-1." target="_blank" class="btn">View My CV</a>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects">
      <h2>Projects I've Done</h2>
      <div class="project-cards">
        <div class="project-card">
          <h3>Pet Store App</h3>
          <p>Backend-only project using Java. Manages selling pets, inventory, and related operations.</p>
        </div>
        <div class="project-card">
          <h3>Food Donation App</h3>
          <p>A platform to donate and receive food. Restaurants or people can share surplus food with those in need.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>

<style scoped>
/* General */
.home {
  font-family: 'Poppins', sans-serif;
  color: #333;
}

/* Hero Section */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3498db, #8e44ad);
  color: white;
  text-align: center;
  padding: 0 20px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  animation: fadeInDown 1s ease forwards;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 30px;
  animation: fadeInUp 1s ease forwards;
}

.hero .btn {
  padding: 12px 25px;
  background: white;
  color: #3498db;
  font-weight: bold;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.hero .btn:hover {
  background: #2980b9;
  color: white;
  transform: scale(1.05);
}

/* Projects Section */
.projects {
  max-width: 1000px;
  margin: 60px auto;
  text-align: center;
  padding: 0 20px;
}

.projects h2 {
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 40px;
}

.project-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.project-card {
  background: white;
  padding: 25px;
  border-radius: 20px;
  width: 300px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 40px rgba(0,0,0,0.15);
}

.project-card h3 {
  color: #8e44ad;
  margin-bottom: 15px;
}

.project-card p {
  color: #555;
}

/* Animations */
@keyframes fadeInDown {
  0% { opacity: 0; transform: translateY(-20px);}
  100% { opacity: 1; transform: translateY(0);}
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
}

/* Responsive */
@media (max-width: 768px) {
  .project-cards {
    flex-direction: column;
    align-items: center;
  }
}
</style>

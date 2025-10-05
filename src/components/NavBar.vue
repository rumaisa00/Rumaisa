<template> 
  <nav> 
    <ul> 
      <li><router-link to="/">Home</router-link></li> 
      <li><router-link to="/about">About</router-link></li> 
      
    </ul> 
  </nav> 
</template> 
 
<script lang="ts"> 
import { defineComponent } from 'vue' 
export default defineComponent({ 
  name: 'NavBar' 
}) 
</script> 
 
<style> 
nav { 
  background-color: #3498db; 
  padding: 10px; 
} 
ul { 
  list-style: none; 
  display: flex; 
  gap: 20px; 
  justify-content: center; 
  margin: 0; 
  padding: 0; 
} 
li { 
  color: white; 
} 
a { 
  color: white; 
  text-decoration: none; 
} 
a.router-link-active { 
  font-weight: bold; 
  text-decoration: underline; 
} 
</style> 

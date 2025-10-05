<template> 
  <div> 
    <h1>Tasks / Assignments</h1> 
    <ul> 
      <li>Assignment 1: Build a portfolio website using Vue and Vite</li> 
      <li>Assignment 2: Create a task management system</li> 
    </ul> 
  </div> 
</template> 
 
<script lang="ts"> 
import { defineComponent } from 'vue' 
export default defineComponent({ 
  name: 'TasksView' 
}) 
</script> 
 
<style scoped> 
h1 { 
  text-align: center; 
  color: #3498db; 
} 
ul { 
  margin: 20px; 
} 
</style> 

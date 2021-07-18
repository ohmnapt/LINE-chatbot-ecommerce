<template>
    <!-- The grid: four columns -->
<div class="column">
  <div class="column">
    <img src="../assets/Hero.png" alt="Nature" >
  </div>
  <div class="column">
    <img src="../assets/Hero.png" alt="Snow" >
  </div>
  <div class="column">
    <img src="../assets/Hero.png" alt="Mountains" >
  </div>
  <div class="column">
    <img src="../assets/Hero.png" alt="Lights" >
  </div>
</div>
</template>

<style>
/* The grid: Four equal columns that floats next to each other */
.row {
  float: left;
  width: 25%;
  padding: 10px;
}

/* Style the images inside the grid */
.column img {
  size: 1%;
  opacity: 0.8;
  cursor: pointer;
}

.column img:hover {
  opacity: 1;
}

.column:after {
  content: "";
  display: table;
  clear: both;
}

</style>


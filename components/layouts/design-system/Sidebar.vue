<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-md-2 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <b-nav vertical class="pl-2">
      <b-nav-item class="text-gray-50 text-lg" disabled>
        <fa-icon :icon="['fas', 'cube']" class="mr-1" /> Component</b-nav-item
      >

      <b-nav-item
        ><NuxtLink to="/design-system/button">Button</NuxtLink></b-nav-item
      >

      <b-nav-item
        ><NuxtLink to="/design-system/breadcrumbs"
          >Breadcrumbs</NuxtLink
        ></b-nav-item
      >

      <b-nav-item
        ><NuxtLink to="/design-system/checkbox">Checkbox</NuxtLink></b-nav-item
      >

      <b-nav-item
        ><NuxtLink to="/design-system/datepicker"
          >Date/Datetime Picker</NuxtLink
        ></b-nav-item
      >
      <b-nav-item
        ><NuxtLink to="/design-system/form">Form</NuxtLink></b-nav-item
      >

      <b-nav-item
        ><NuxtLink to="/design-system/input">Input</NuxtLink></b-nav-item
      >

      <b-nav-item>Label</b-nav-item>

      <b-nav-item>Navbar</b-nav-item>

      <b-nav-item
        ><NuxtLink to="/design-system/navigation"
          >Navigation</NuxtLink
        ></b-nav-item
      >

      <b-nav-item
        ><NuxtLink to="/design-system/navbar">Navbar</NuxtLink></b-nav-item
      >

      <b-nav-item
        ><NuxtLink to="/design-system/page-header"
          >Page Header</NuxtLink
        ></b-nav-item
      >

      <b-nav-item
        ><NuxtLink to="/design-system/radio">Radio</NuxtLink></b-nav-item
      >
      <b-nav-item
        ><NuxtLink to="/design-system/select">Select</NuxtLink></b-nav-item
      >
      <b-nav-item>Sidebar</b-nav-item>
      <b-nav-item
        ><NuxtLink to="/design-system/tabs">Tabs</NuxtLink></b-nav-item
      >

      <b-nav-item
        ><NuxtLink to="/design-system/toggle">Toggle</NuxtLink></b-nav-item
      >

      <b-nav-item
        ><NuxtLink to="/design-system/table">Table</NuxtLink></b-nav-item
      >
    </b-nav>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  background: #f2f7fa;
  background: #e0eaf0;
}

.nav-item {
  .nav-link {
    padding: 8px 0px 8px 8px;

    .nuxt-link-active {
      font-weight: bold;
      background: white;
      border-left: 3px blue;
      padding: 10px 0px 10px 15px;
      color: black;
      display: block;
      margin-left: -17px;
    }
  }
}

/* Fixed sidenav, full height */
.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
  box-shadow: none;
}

/* Style the sidenav links and the dropdown button */
.sidenav a,
.dropdown-btn {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
}

/* On mouse-over */
.sidenav a:hover,
.dropdown-btn:hover {
  color: #f1f1f1;
}

/* Main content */
.main {
  font-size: 20px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

/* Add an active class to the active dropdown button */
.active {
  background-color: green;
  color: white;
}

/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
.dropdown-container {
  display: none;
  background-color: #262626;
  padding-left: 8px;
}

/* Optional: Style the caret down icon */
.fa-caret-down {
  float: right;
  padding-right: 8px;
}
</style>

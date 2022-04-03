
## Ini adalah contoh design system

<template>
  <section>
    <h1 class="font-black text-4xl mb-8">
      AS Design System <sup class="text-2xl">v0.0.1ssss</sup>
    </h1>

    <h2 class="text-2xl font-black">Button</h2>
    <Button variant="primary">Primary Button</Button>
    <Button variant="secondary">Secondary button</Button>
    <Button variant="danger">Danger variant button</Button>
    <Button variant="success">Success variant button</Button>

    <Button variant="outline-primary">Outline primary button</Button>
    <div>
      <h2 class="text-2xl font-black">Code</h2>
      <code-highlight language="javascript">
        <pre></pre>
      </code-highlight>
    </div>

    <h2 class="text-2xl font-black">Properties</h2>
    <b-table striped hover :items="items"></b-table>

    <Input />
    <Radio />
    <Tabs />
  </section>
</template>

<script>
import Button from "~/components/design-system/Atoms/Button";
import Input from "~/components/design-system/Atoms/Input";
import Radio from "~/components/design-system/Radio/Radio";
import Tabs from "~/components/design-system/Tabs";

import { component as CodeHighlight } from "vue-code-highlight";

export default {
  layout: "design-system",
  auth: false,
  components: {
    Button,
    Input,
    Radio,
    Tabs,
    CodeHighlight
  },
  data() {
    return {
      items: [{ property: "size", type: "String", default: "md" }]
    };
  }
};
</script>

<style scoped>
body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

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
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .navbar-toggler {
  top: 0.25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}
</style>

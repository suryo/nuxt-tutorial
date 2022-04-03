<template>
  <div id="content">
    <div id="inner_nav">
      <ul>
        <li class="selected">
          <a href="/gate/"><span>Rosters</span></a>
        </li>
      </ul>
    </div>
    <div id="inner_contentwrapper" style="_width:100%;_padding-top:3px;">
      <div id="inner_content" style="_width:100%;padding:20px;">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [],
      link: [
        { rel: "stylesheet", href: "/as3/css/common.css" },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/buefy/dist/buefy.min.css"
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        }
      ]
    };
  }
};
</script>

<style>
.subhead {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: bold;
  color: 696955;
}

.bcopy {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 9pt;
  font-weight: normal;
  text-transform: none;
  color: 000000;
}

.llink {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 9pt;
  font-weight: bold;
  text-transform: none;
  text-decoration: none;
  color: FFFFFF;
}
#content {
  margin: 20px auto;
}
</style>

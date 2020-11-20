<template>
  <div class="layout mx-auto container">
    <header class="header flex justify-between">
      <strong>
        <g-link to="/">
          <h1>{{$static.metadata.siteName}}</h1>
        </g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link text-gray-600" to="/">Home</g-link>
      </nav>
    </header>
    <main class="relative">
      <slot/>
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
  photos: allPhotos {
    edges {
      node {
        id
      }
    }
  }
}
</static-query>

<style lang="scss">
  .keepMeHere { 
    content: 'this style block needs to not be empty to pull in css';
  }
</style>

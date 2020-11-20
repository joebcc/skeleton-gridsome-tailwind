<template class="home">
  <layout>
    <div class="layout">
      <homepage />
    </div>
  </layout>
</template>

<script>
import { gsap } from 'gsap';
import homepage from "../components/homepage";

export default {
  metaInfo: {
    title: 'Skeleton Gridsome + TailWind + GSAP'
  },
  components: {
    homepage,
  },
  data: function() { return {
  }},
  beforeMount() {
  },
  methods: {
  }
}
</script>

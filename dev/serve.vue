<script>
import Vue from "vue";
import { CondioSample, CondioButton } from "@/entry";

export default Vue.extend({
  name: "ServeDev",
  components: {
    CondioSample,
    CondioButton,
  },
});
</script>

<template>
  <div id="app">
    <condio-sample />
    <condio-button />
  </div>
</template>

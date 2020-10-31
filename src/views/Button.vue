<template>
  <div>
    <oxbutton>Primary</oxbutton>
    <oxbutton color="danger" to="/test">Danger</oxbutton>
    <oxbutton color="success" to="/test">Success</oxbutton>
    <oxbutton color="warn" to="/test">Warn</oxbutton>
    <oxbutton loading color="dark" to="/test">loading</oxbutton>
    <div>
      <oxbutton outline>Primary</oxbutton>
      <oxbutton outline color="danger" to="/test">Danger</oxbutton>
      <oxbutton outline color="success" to="/test">Success</oxbutton>
      <oxbutton outline color="warn" to="/test">Warn</oxbutton>
      <oxbutton outline color="dark" to="/test">Dark</oxbutton>
    </div>
    <div>
      <oxbutton square>Primary</oxbutton>
      <oxbutton square color="danger" to="/test">Danger</oxbutton>
      <oxbutton square color="success" to="/test">Success</oxbutton>
      <oxbutton square color="warn" to="/test">Warn</oxbutton>
      <oxbutton v-on:click="event" square color="dark">Dark</oxbutton>
    </div>
  </div>
</template>

<script>
import oxbutton from "@/components/oxbutton/oxbutton";
export default {
  components: {
    oxbutton,
  },
  methods: {
    event() {
      console.log("Este es mi evento click");
    },
  },
};
</script>
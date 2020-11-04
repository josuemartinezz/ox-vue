<template>
  <div>
    <oxalert color="primary">Hola</oxalert>
    <oxalert color="danger" flat>Hola</oxalert>
    <oxalert color="danger" flat outline>Hola</oxalert>
  </div>
</template>

<script>
import oxalert from "@/components/oxalert/oxalert";
export default {
  components: {
    oxalert,
  },
};
</script>
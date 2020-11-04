<template>
  <div>
    <oxbutton>Iniciar sesión</oxbutton>
    <oxbutton color="danger">Eliminar usuario</oxbutton>
    <oxbutton color="warn">Visualizar estado</oxbutton>
    <oxbutton color="success">Agregar</oxbutton>
    <oxbutton color="dark">Iniciar sesión</oxbutton>
  </div>
</template>

<script>
import oxbutton from "@/components/oxbutton/oxbutton";
export default {
  components: {
    oxbutton,
  },
};
</script>
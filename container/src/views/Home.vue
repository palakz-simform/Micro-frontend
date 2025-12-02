<template>
    <ReactHome />
</template>
<script setup>
import RemoteHome from "home/Home";
import { applyReactInVue } from "veaury";
import { createRoot } from "react-dom/client";
const ReactHome = applyReactInVue(RemoteHome, { react: { createRoot } });

</script>
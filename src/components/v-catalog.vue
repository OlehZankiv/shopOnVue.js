<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item";
export default {
  name: "v-catalog",
  data() {
    return {};
  },
  components: { vCatalogItem }
};
</script>

<style>
.v-catalog__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>

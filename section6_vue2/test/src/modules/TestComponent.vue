<template>
  <div class="red-b">
    <div class="border__blue">
      SCSSのテストです
    </div>
    <div class="background__primary">
      SCSSグローバルのテストです
    </div>
    テストです
    {{ testData }}
  </div>
</template>

<script>
export default {
  name:'TestComponent',
  data() {
    return {
      testData: 'テストdataです'
    }
  }
}
</script>

<style scoped lang="scss">
.red-b {
  border: 1px red solid;
}

.border {
  &__blue {
    border: 1px solid blue;
  }
}

.background__primary {
  background-color: $color-primary;
}

</style>

<template>
  <div class="base-checkbox">
    <input type="checkbox" :id="id" />
    <label v-if="label" :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'BaseCheckbox',

  props: {
    id: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.base-checkbox {
  display: flex;

  label {
    display: block;
    margin-left: 8px;
  }
}
</style>

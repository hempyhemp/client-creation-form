<template>
  <button @click="$emit('click')" class="button">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style lang="scss">
@import '@/scss/variables';

.button {
  width: var(--button-width, 250px);
  height: var(--button-height, 80px);
  outline: none;
  border: 1px solid $border-color;

  font-family: $font-family;
  font-size: var(--button-font-size, 28px);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
  border-radius: 4px;
  cursor: pointer;

  background-color: $primary-color;
  color: white;

  &:hover {
    border-color: $primary-color;
  }

  &:active {
    background-color: $border-color;
    color: $font-color;
  }
}
</style>

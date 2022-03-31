<template>
  <div class="base-button">
    <button type="submit" class="button">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'Submit',
    },
    text: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style lang="scss">
@import '@/scss/variables';

.base-button {
  .button {
    width: 47%;
    //width: 313px;
    height: 44px;

    outline: none;
    border: 1px solid $border-color;

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
}
</style>

<template>
  <div class="base-select">
    <label v-if="label" :for="id">{{ label }}</label>
    <select
      :name="name"
      :id="id"
      class="select"
      :class="{ 'is-multiple': multiple }"
      :multiple="multiple"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        class="option"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      require: false,
    },
  },
}
</script>

<style lang="scss">
@import '@/scss/variables';
.base-select {
  label {
    display: block;
    margin-left: 8px;
    margin-bottom: 8px;
  }
  select {
    width: 100%;
    appearance: none;
    background-color: transparent;

    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;

    border-radius: 4px;
    padding: 12px 12px;

    overflow: hidden;

    outline: none;
    border: 1px solid $helper-color;

    &:focus {
      border-color: $font-color;
    }
  }
  option {
    margin-bottom: 10px;

    padding: 10px 12px 0px 12px;
  }
}
</style>

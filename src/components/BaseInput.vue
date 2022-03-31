<template>
  <div class="base-input">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      class="input"
      :class="{ invalid: isInvalid }"
      :type="type"
      :placeholder="placeholder"
      :id="id"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <div
      v-for="validation of validations"
      :key="validation.condition"
      v-show="isInvalid"
    >
      <div class="error-message" v-show="validation.condition">
        {{ validation.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) => ['email', 'text', 'number', 'date'].includes(value),
    },
    errorMessage: {
      type: String,
      default: '',
    },
    isInvalid: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      required: true,
    },
    validations: {
      type: Array,
    },
  },
}
</script>

<style lang="scss">
@import '@/scss/variables';

.base-input {
  label {
    display: block;
    margin-left: 8px;
    margin-bottom: 8px;
  }

  .input {
    appearance: none;
    width: 100%;
    height: 44px;
    line-height: 1.25;
    border-radius: 4px;
    padding: 12px 12px;

    outline: none;
    border: 1px solid $border-color;
    color: $font-color;
    font-size: 1rem;

    &:focus {
      border-color: $primary-color;
    }

    &:hover {
      border-color: $primary-color;
    }

    &.invalid {
      border-color: $error-color;
      color: $error-color;
      &::placeholder {
        color: $error-light-color;
      }
    }

    &::placeholder {
      color: $helper-color;
    }
  }

  .error-message {
    //position: absolute;
    color: $error-light-color;
    font-size: 1rem;
    margin-top: 5px;
    margin-left: 12px;
  }
}
</style>

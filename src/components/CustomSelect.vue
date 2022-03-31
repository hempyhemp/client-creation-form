<template>
  <div class="base-select">
    <label v-if="label" :for="id">{{ label }}</label>
    <div class="custom-select" tabindex="0" @blur="open = false">
      <div
        class="trigger"
        :class="{ invalid: isInvalid, open: open, empty: isEmpty }"
        @click="open = !open"
      >
        {{ selectedText }}
      </div>
      <div v-show="open" class="items">
        <div
          class="item"
          :class="{
            selected: isOptionSelected(option),
          }"
          v-for="option of options"
          :key="option.value"
          @click="handleOptionClick(option)"
        >
          <span v-if="isOptionSelected(option)">▸</span>
          {{ option.text }}
        </div>
      </div>
    </div>
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
  name: 'CustomSelect',
  props: {
    value: {
      type: [String, Array],
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    isInvalid: {
      type: Boolean,
      default: false,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    validations: {
      type: Array,
    },
  },
  data() {
    return {
      open: false,
    }
  },
  computed: {
    isEmpty() {
      let value = this.multiple ? this.value : [this.value]

      return value.length === 0 || !value.every((v) => v)
    },
    selectedText() {
      let value = this.multiple ? this.value : [this.value]

      if (this.isEmpty) return this.placeholder

      return value
        .map(this.getOptionByValue)
        .map((option) => option.text)
        .join(', ')
    },
  },
  methods: {
    getOptionByValue(value) {
      return this.options.find((option) => option.value === value) ?? value
    },
    isOptionSelected(option) {
      return this.multiple
        ? this.value.includes(option.value)
        : this.value === option.value
    },
    handleOptionClick(option) {
      if (!this.multiple) {
        this.open = false

        this.$emit('input', option.value)
      } else {
        let result = [...this.value]

        if (this.isOptionSelected(option)) {
          result = result.filter((v) => v !== option.value)
        } else {
          result.push(option.value)
        }

        this.$emit('input', result)
      }
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

  .custom-select {
    position: relative;
    outline: none;

    .trigger {
      /* background-color: transparent; */
      border-radius: 4px;
      height: 44px;
      border: 1px solid $border-color;
      font-size: 1rem;

      padding: 12px 12px;
      cursor: pointer;
      user-select: none;
      color: $font-color;

      &.open {
        border: 1px solid $font-color;
        border-radius: 4px 4px 0px 0px;
      }
      &.empty {
        color: $helper-color;
      }

      &.invalid {
        border-color: $error-color;

        color: $error-light-color;
        // &::placeholder {
        //   color: $error-light-color;
        // }
      }
    }

    &:after {
      position: absolute;
      content: '';

      right: 20px;
      top: 50%;
      width: 0;
      height: 0;
      border: 5px solid #bbb;
      border-color: $primary-color transparent transparent transparent;
    }

    .items {
      border-radius: 0px 0px 6px 6px;
      overflow: hidden;
      border: 1px solid $primary-color;
      border-top-width: 0;
      position: absolute;
      background-color: white;
      left: 0;
      right: 0;
      z-index: 1;
    }

    .item {
      height: 44px;
      color: $font-color;
      padding: 12px 12px;
      cursor: pointer;
      user-select: none;

      &:hover {
        background-color: $border-color;
      }

      &.selected {
        font-weight: 700;
      }
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

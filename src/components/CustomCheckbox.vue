<template>
  <div>
    <div class="checkbox-form">
      <div class="options">
        <label v-for="(option, i) of options" :key="i" class="item">
          <span :for="option">{{ option }}</span>
          <input
            :id="option"
            v-model="checked"
            type="checkbox"
            :value="option"
            @change="changeHandler"
          />
          <span class="checkmark" />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomCheckbox',
  props: {
    options: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      checked: [],
    }
  },
  methods: {
    changeHandler() {
      this.$emit('input', this.checked)
    },
  },
}
</script>

<style lang="scss">
@import '@/scss/variables';

.checkbox-form {
  display: flex;
  flex-direction: column;
  align-items: center;

  .options {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
  }

  label {
    // margin-left: 1em;
  }

  .item {
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    font-size: 1em;
    height: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: flex;
    align-items: center;

    &:hover input ~ .checkmark {
      //   background-color: $border-color;
      border: 1px solid $primary-color;
    }

    input:checked ~ .checkmark {
      background-color: $primary-color;
    }

    input:checked ~ .checkmark:after {
      display: block;
    }
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: $border-color;
    border-radius: 2px;

    &:after {
      content: '';
      position: absolute;
      display: none;
    }

    &:after {
      left: 7px;
      top: 3px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}
</style>

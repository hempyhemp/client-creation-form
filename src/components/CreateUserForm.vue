<template>
  <form class="create-user-form" @submit.prevent="">
    <fieldset class="fieldset">
      <h3>Основная информация</h3>
      <div class="input-row">
        <base-input
          type="text"
          id="lastname"
          placeholder="Введите вашу фамилию"
          label="Фамилия *"
          v-model="formData.lastName"
          @input="$v.formData.lastName.$touch()"
          :isInvalid="$v.formData.lastName.$error"
          :validations="[
            {
              condition: !$v.formData.lastName.required,
              text: 'Поле должно быть заполнено',
            },
          ]"
        />

        <base-input
          type="text"
          id="firstname"
          placeholder="Введите ваше имя"
          label="Имя *"
          v-model="formData.firstName"
          @input="$v.formData.firstName.$touch()"
          :isInvalid="$v.formData.firstName.$error"
          :validations="[
            {
              condition: !$v.formData.firstName.required,
              text: 'Поле должно быть заполнено',
            },
          ]"
        />
      </div>

      <div class="input-row">
        <base-input
          type="text"
          id="middlename"
          placeholder="Введите ваше отчество"
          label="Отчество"
          v-model="formData.middleName"
        />

        <base-input
          type="date"
          id="birthday"
          label="Дата рождения *"
          v-model="formData.birthdayDate"
          @input="$v.formData.birthdayDate.$touch()"
          :isInvalid="$v.formData.birthdayDate.$error"
          :validations="[
            {
              condition: !$v.formData.birthdayDate.required,
              text: 'Поле должно быть заполнено',
            },
          ]"
        />
      </div>

      <div class="input-row">
        <custom-select
          :options="[
            { value: 'male', text: 'Мужской' },
            { value: 'female', text: 'Женский' },
          ]"
          label="Пол"
          placeholder="Укажите ваш пол"
          v-model="formData.gender"
        />

        <custom-select
          :options="[
            { value: 'vip', text: 'VIP' },
            { value: 'problematic', text: 'Проблемные' },
            { value: 'omc', text: 'ОМС' },
          ]"
          label="Группа клиентов *"
          :multiple="true"
          placeholder="Укажите группу клиентов"
          v-model="formData.clientGroup"
          @input="$v.formData.clientGroup.$touch()"
          :isInvalid="$v.formData.clientGroup.$error"
          :validations="[
            {
              condition: !$v.formData.clientGroup.required,
              text: 'Необходимо указать группу клиентов',
            },
          ]"
        />
      </div>

      <div class="input-row">
        <base-input
          type="text"
          id="phoneNumber"
          placeholder="Введите номер телефона"
          label="Номер телефона *"
          v-model="formData.phoneNumber"
          tabindex="0"
          @blur="$v.formData.phoneNumber.$touch()"
          :isInvalid="$v.formData.phoneNumber.$error"
          :validations="[
            {
              condition: !$v.formData.phoneNumber.required,
              text: 'Поле должно быть заполнено',
            },
            {
              condition:
                !$v.formData.phoneNumber.startsWith &&
                $v.formData.phoneNumber.required,
              text: 'Номер должен начинаться с 7',
            },
            {
              condition: !length && $v.formData.phoneNumber.required,
              text: 'Номер должен иметь 11 символов',
            },
          ]"
        />

        <custom-select
          :options="[
            { value: 'ivanov', text: 'Иванов' },
            { value: 'zaharov', text: 'Захаров' },
            { value: 'chernishova', text: 'Чернышева' },
          ]"
          label="Лечащий врач"
          placeholder="Укажите лечащего врача"
          v-model="formData.doctors"
        />
      </div>

      <custom-checkbox
        v-model="formData.smscheck"
        :options="['Не отправлять СМС']"
      />

      <div></div>
    </fieldset>
    <fieldset class="fieldset">
      <h3>Адрес</h3>

      <div class="input-row">
        <base-input
          type="text"
          id="index"
          placeholder="Введите ваш индекс"
          label="Индекс"
          v-model="formData.index"
        />
        <base-input
          type="text"
          id="country"
          placeholder="Введите вашу страну"
          label="Страна"
          v-model="formData.country"
        />
      </div>

      <div class="input-row">
        <base-input
          type="text"
          id="region"
          placeholder="Введите вашу область"
          label="Область"
          v-model="formData.region"
        />
        <base-input
          type="text"
          id="city"
          placeholder="Введите ваш город"
          label="Город *"
          v-model="formData.city"
          @input="$v.formData.city.$touch()"
          :isInvalid="$v.formData.city.$error"
          :validations="[
            {
              condition: !$v.formData.city.required,
              text: 'Поле должно быть заполнено',
            },
          ]"
        />
      </div>

      <div class="input-row">
        <base-input
          type="text"
          id="street"
          placeholder="Введите вашу улицу"
          label="Улица"
          v-model="formData.street"
        />
        <base-input
          type="text"
          id="house"
          placeholder="Введите номер дома"
          label="Дом"
          v-model="formData.house"
        />
      </div>
      <div></div>
    </fieldset>

    <fieldset class="fieldset">
      <h3>Документ</h3>
      <div class="input-row">
        <custom-select
          :options="[
            { value: 'passport', text: 'Паспорт' },
            { value: 'birthCertificate', text: 'Свидетельство о рождении' },
            { value: 'driversLicense', text: 'Водительское удостоверение' },
          ]"
          label="Тип документа *"
          placeholder="Укажите тип документа"
          v-model="formData.documentType"
          :validations="[
            {
              condition: !$v.formData.documentType.required,
              text: 'Необходимо указать тип документа',
            },
          ]"
        />

        <base-input
          type="text"
          id="docSeries"
          placeholder="Введите серию"
          label="Серия"
          v-model="formData.docSeries"
        />
      </div>

      <div class="input-row">
        <base-input
          type="text"
          id="docNumber"
          placeholder="Введите номер"
          label="Номер"
          v-model="formData.docNumber"
        />

        <base-input
          type="date"
          id="passportDate"
          label="Дата выдачи *"
          v-model="formData.passportDate"
          @input="$v.formData.passportDate.$touch()"
          :isInvalid="$v.formData.passportDate.$error"
          :validations="[
            {
              condition: !$v.formData.passportDate.required,
              text: 'Поле должно быть заполнено',
            },
          ]"
        />
      </div>

      <div class="input-row">
        <base-input
          type="text"
          id="docWho"
          placeholder="Введите название организации"
          label="Кем выдан"
          v-model="formData.docWho"
        />
      </div>
      <div class="input-row"></div>
      <base-button
        class="submitButton"
        text="Создать нового клиента"
        @click="submitHandler"
      >
      </base-button>

      <div class="input-row"></div>
    </fieldset>
  </form>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import CustomSelect from '@/components/CustomSelect.vue'
import BaseButton from '@/components/BaseButton.vue'
import CustomCheckbox from '@/components/CustomCheckbox.vue'
import {
  required,
  numeric,
  // minLength,
  // maxLength,
} from 'vuelidate/lib/validators'

export default {
  name: 'CreateUserForm',
  components: {
    BaseInput,
    CustomSelect,
    BaseButton,
    CustomCheckbox,
  },
  data() {
    return {
      formData: {
        lastName: '',
        firstName: '',
        middleName: '',
        birthdayDate: '',
        phoneNumber: '',
        gender: '',
        clientGroup: [],
        smscheck: [],

        doctors: '',
        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',

        documentType: 'passport',
        docSeries: '',
        docNumber: '',
        docWho: '',
        passportDate: '',
      },
    }
  },
  validations: {
    formData: {
      lastName: { required },
      firstName: { required },
      birthdayDate: { required },
      phoneNumber: {
        required,
        numeric,
        startsWith(val) {
          // val = val.substring(1)
          if (val[0] == 7) {
            return true
          } else {
            return false
          }
        },
        length: (val) => val.length == 11,
      },
      clientGroup: { required },

      city: { required },

      documentType: { required },
      passportDate: { required },

      // docSeries: { numeric, length: (val) => val.length === 4 },
      // docNumber: { numeric, length: (val) => val.length === 6 },
    },
  },
  methods: {
    submitHandler() {
      this.$v.$touch()
      if (this.$v.$error) {
        alert('Проверьте правильность данных')
      } else {
        alert('Новый клиент успешно создан')
      }
    },
  },
}
</script>

<style lang="scss">
.create-user-form {
  width: 100%;
}

.input-row {
  display: flex;

  justify-content: space-between;
  column-gap: 30px;
  > * {
    flex: 1;
  }
}

@media screen and (max-width: 767px) {
  .input-row {
    display: block;
    > * {
      margin-top: 16px;
    }
  }
}

.submitButton {
  --button-width: 47%;
  --button-height: 44px;
  --button-font-size: 1rem;
}

.fieldset {
  padding: 0;
  > * {
    margin-top: 16px;
  }
  border: none;
}
</style>

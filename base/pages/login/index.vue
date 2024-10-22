<script setup lang="ts">
import { Form } from "vee-validate";
import { string, object, type InferType } from "yup";

import ElInputField from "~base/components/ElInputField.vue";

const { t } = useI18n();


const loginValidationSchema = object().shape({
  userName: string()
    .required(t("fieldRequired"))
    .min(4, t("minimumNameFourLetters")),
  password: string()
    .required(t("fieldRequired"))
    .min(4, t("minimumPasswordFour")),
});

function handleSubmit(_values: unknown) {
  const values = _values as InferType<typeof loginValidationSchema>;

  console.log({values})
}

</script>

<template>
  <div class="h-screen flex items-center">
    <div
      class="flex items-center justify-center grow bg-center bg-no-repeat page-bg"
    >
      <div class="card max-w-[370px] w-full">
        <Form
          class="card-body flex flex-col gap-5 p-10"
          :validation-schema="loginValidationSchema"
          @submit="handleSubmit"
        >
          <div class="text-center mb-2.5">
            <h3 class="text-lg font-medium text-gray-900 leading-none mb-2.5">
              Sign in
            </h3>
          </div>

          <div class="flex flex-col gap-1">
            <label class="form-label text-gray-900"> Email </label>
            <ElInputField
              class="w-full"
              name="userName"
              placeholder="userName"
              autocomplete="off"
              :input-props="{ tabindex: '1', size: 'large' }"
            />
          </div>
          <div class="flex flex-col gap-1">
            <div class="flex items-center justify-between gap-1">
              <label class="form-label text-gray-900"> Password </label>
              <a
                class="text-2sm link shrink-0"
                href="html/demo1/authentication/branded/reset-password/enter-email.html"
              >
                Forgot Password?
              </a>
            </div>
            <ElInputField
              class="w-full"
              name="password"
              placeholder="password"
              autocomplete="off"
              :input-props="{
                type: 'password',
                'show-password': true,
                size: 'large',
                tabindex: '2',
              }"
            />
          </div>
          <button
            
            class="btn btn-primary flex justify-center grow"
          >
            {{ t("login") }}
          </button>
        </Form>
      </div>
    </div>
  </div>
</template>

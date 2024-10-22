<script setup lang="ts">
import type { ElInput } from "element-plus";
import { Field, ErrorMessage } from "vee-validate";

export interface IElInputFieldProps {
  name: string;
  placeholder: string;
  inputProps?: Partial<typeof ElInput>;
}

const { inputProps = { size: "large" } } = defineProps<IElInputFieldProps>();
const { t } = useI18n();
</script>

<template>
  <div class="col-4">
    <Field v-slot="{ value, handleChange }" :name="name">
      <el-input
        :placeholder="t(placeholder)"
        :model-value="value"
        v-bind="inputProps"
        @update:model-value="handleChange"
      >
        <template v-if="$slots.append" #append>
          <slot name="append" />
        </template>
        <template v-if="$slots.prepend" #prepend>
          <slot name="prepend" />
        </template>
      </el-input>
    </Field>
    <ErrorMessage class="text-red-600" :name="name" />
  </div>
</template>

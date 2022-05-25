import { Select } from "components/form/Select";
import { SettingsFormField } from "components/form/SettingsFormField";
import { Textarea } from "components/form/Textarea";
import { FormField } from "components/form/FormField";
import { useFormikContext } from "formik";
import type { DiscordChannel } from "./DiscordWebhooksTab";

interface FieldProps {
  description: string;
  label: string;
  channels: DiscordChannel[];
  fieldName: string;
}

export function WebhookSettingsField({ description, label, channels, fieldName }: FieldProps) {
  const { errors, values, handleChange } = useFormikContext<any>();

  return (
    <SettingsFormField
      description={description}
      errorMessage={(errors[fieldName] as any)?.id}
      label={label}
    >
      <Select
        isClearable
        values={channels.map((role) => ({
          value: role.id,
          label: role.name,
        }))}
        value={values[fieldName]?.id}
        name={`${fieldName}.id`}
        onChange={handleChange}
      />

      <FormField optional className="mt-2" label="Extra message">
        <Textarea
          value={values[fieldName]?.extraMessage}
          name={`${fieldName}.extraMessage`}
          onChange={handleChange}
        />
      </FormField>
    </SettingsFormField>
  );
}

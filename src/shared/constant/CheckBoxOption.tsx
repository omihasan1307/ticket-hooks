import { Checkbox } from "@/components/ui/checkbox";

const CheckBoxOption = ({ id, label, selectedOption, onChange }: any) => (
  <div className="items-top flex items-center space-x-2">
    <Checkbox
      id={id}
      checked={selectedOption === id}
      onCheckedChange={() => onChange(id)}
    />
    <label
      htmlFor={id}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {label}
    </label>
  </div>
);
export default CheckBoxOption;

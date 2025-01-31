interface AddInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  min?: number;
  max?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const AddInput: React.FC<AddInputProps> = ({
  label,
  placeholder,
  value,
  type,
  min,
  max,
  onChange,
}) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <p>{label}</p>
      <input
        className="rounded-2xl border-2 border-black px-2 py-2"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </div>
  );
};

export default AddInput;

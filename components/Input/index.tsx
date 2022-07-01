import { ChangeEventHandler, FunctionComponent } from "react";

type Props = {
  name: string;
  type: string;
  textarea?: boolean;
  label?: string;
  placeholder: string;
  value: string | number;
  handleChange: ChangeEventHandler;
};

const Input: FunctionComponent<Props> = ({
  name,
  type,
  label,
  value,
  textarea,
  placeholder,
  handleChange,
}) => {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label htmlFor={name} className="text-xl lg:text-2xl">
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          id={name}
          name={name}
          required
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className="w-full h-32 max-h-40 px-5 py-2 text-white text-xl font-medium placeholder-gray-100 bg-primary-300 border border-white hover:border-primary focus:border-primary rounded"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className="w-full px-5 py-2 text-white text-xl font-medium placeholder-gray-100 bg-primary-300 border border-white hover:border-primary focus:border-primary rounded"
        />
      )}
    </div>
  );
};

export default Input;

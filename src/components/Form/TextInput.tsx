import classNames from 'classnames';
import { FieldError } from 'react-hook-form';

interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError | string;
}

const TextInput: React.FC<ITextInputProps> = ({ label, name, error, required, ...rest }) => {
  const errorMessage = typeof error === 'string' ? error : error?.message;

  return (
    <div>
      {label && (
        <label htmlFor={name} className="block mb-2.5">
          {label} {required ? <span className="text-danger text-sm">*</span> : null}
        </label>
      )}
      <input
        className={classNames(
          'block w-full outline-0 py-4 px-5 border rounded-15px text-input text-secondary placeholder-base',
          error && 'border-danger',
          !error && 'border-sky-darker'
        )}
        id={name}
        name={name}
        {...rest}
      />
      {error && <div className="mt-2 text-sm text-danger">{errorMessage}</div>}
    </div>
  );
};

export default TextInput;

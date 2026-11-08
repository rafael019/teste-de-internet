interface FormInputProps {
  idInput: string;
  labelInput: string;
  typeInput: string;
  placeholderInput: string;
  valueInput: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Função para atualizar o valor do input
}
export function Input({ idInput, labelInput, typeInput, valueInput, onChange, placeholderInput }: FormInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={idInput} className="text-stone-800 font-bold text-lg block mb-2">
        {labelInput}
      </label>
      <input type={typeInput} className="border border-gray-200 p-2 w-full text-stone-800 outline-gray-300" value={valueInput} onChange={onChange} placeholder={placeholderInput} />
    </div>
  );
}

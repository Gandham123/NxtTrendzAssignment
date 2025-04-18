import { BsFilterLeft } from "react-icons/bs";

const ProductsHeaderEl = (props) => {
  const { sortByOptins, activeOptionId, updateOption } = props;

  const optionStatusChange = (event) => {
    updateOption(event.target.value);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row justify-end items-center max-md:justify-start max-md:mt-[-10px] max-md:ml-[-7px] max-md:mb-[30px]">
        <BsFilterLeft className="font-medium text-[50px] m-0" />
        <p className="font-[450] text-[20px] text-[rgb(80,74,74)] font-['Roboto'] mx-[10px]">Sort by</p>
        <select
          className="border-0 outline-none cursor-pointer"
          value={activeOptionId}
          onChange={optionStatusChange}
        >
          {sortByOptins.map((eachOption) => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="font-[450] text-[15px] text-[#1e293b] font-['Roboto'] cursor-pointer"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductsHeaderEl;

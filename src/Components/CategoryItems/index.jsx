const CategoryItemsEl = (props) => {
    const { categoryData, updatecategory, isActive } = props;
    const { id, categoryName } = categoryData;
  
    const clickedCategory = () => {
      updatecategory(id);
    };
  
    return (
      <div>
        <p
          onClick={clickedCategory}
          className={`font-[450] text-[18px] text-[#475569] cursor-pointer font-[Segoe UI] 
            ${isActive ? 'text-[rgb(98,205,248)]' : ''}`}
        >
          {categoryName}
        </p>
      </div>
    );
  };
  
  export default CategoryItemsEl;
  
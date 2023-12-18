export const Pagination = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <p className="mr-[8px]">Объектов на странице</p>
        <select
          name="selectedCount"
          defaultValue="100"
          className="w-[72px] h-[32px] rounded-[8px] bg-white  px-[12px] border ">
          <option value="1">1</option>
          <option value="10">10</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
};

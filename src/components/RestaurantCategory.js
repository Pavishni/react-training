import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="lg:w-6/12 md:w-[100px] mx-auto my-4 shadow-lg bg-gray-50 p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemsList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

import CustomImage from "@/components/UI/Image/Image";

const StatsCard = ({ statsData }) => {
  return (
    <div className="flex justify-around bg-white p-6 rounded-lg shadow-lg">
      {statsData.map((stat, index) => (
        <div key={index} className="flex gap-2 items-center text-center">
          <div className="bg-green-100 p-4 rounded-full mb-2">
            <CustomImage
              src={`/assets/icons/${stat.icon}`}
              alt={stat.title}
              className="h-10 w-10"
            />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">
              {stat.title}
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.count}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;

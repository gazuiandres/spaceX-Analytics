import Chart from "../../components/Chart";

const ShowAnalytics = ({ analytics }) => {
  return (
    <>
      <ul className="w-full text-center flex justify-around md:mx-auto xl:w-4/5 xl:mb-14">
        <li className="font-normal mb-20 md:flex-1">
          <p className="font-bold text-xl md:text-2xl">
            {analytics.totalLaunches}
          </p>
          <p className="text-sm md:text-base">Launches</p>
        </li>
        <li className="font-normal mb-20 md:flex-1">
          <p className="font-bold text-xl md:text-2xl">
            {analytics.totalSuccessLaunches}
          </p>
          <p className="text-sm md:text-base">Successful launches</p>
        </li>
        <li className="font-normal mb-20 md:flex-1">
          <p className="font-bold text-xl md:text-2xl">
            {analytics.totalFailLaunches}
          </p>
          <p className="text-sm md:text-base">Failed launches</p>
        </li>
      </ul>

      <div className="w-11/12 h-48 md:mx-auto lg:w-3/5 z-10">
        <h3 className="text-left text-sm font-semibold pl-10 md:pl-0 lg:text-center mb-5">
          Total launches by year
        </h3>
        <Chart
          data={analytics.totalByYearsForCharts}
          nameKey="year"
          totalKey="total"
        />
      </div>
    </>
  );
};

export default ShowAnalytics;

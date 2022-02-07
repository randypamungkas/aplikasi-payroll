import SideMenu from "../../components/molecules/SideMenu";

const EmployeeSalary = () => {
  return (
    <div className="mt-3">
      <div
        className="mycontainer mobile:mycontainerfull py-7 gap-x-7 grid"
        style={{ gridTemplateColumns: "1.2fr 5fr" }}
      >
        <div>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default EmployeeSalary;

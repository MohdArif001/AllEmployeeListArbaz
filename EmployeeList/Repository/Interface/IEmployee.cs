using EmployeeList.Models;

namespace EmployeeList.Repository.Interface
{
    public interface IEmployee
    {
        Task<IEnumerable<VEmployee>> GetAllEmployee();

        public bool AddEmployee(Employee employee);

        public bool DeleteEmployee(int id);
        public Employee EditEmployee(int id);
        public bool UpdateEmployee(Employee emp);
        List<Country> GetCountry();

    }
}

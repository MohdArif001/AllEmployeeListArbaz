using EmployeeList.Models;
using EmployeeList.Repository.Interface;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeList.Repository.Services
{
    public class EmployeeService : IEmployee
    {
        private readonly EmployeeDbContext context;

        public EmployeeService(EmployeeDbContext context )
        {
            this.context = context;
        }
        public async Task<IEnumerable<VEmployee>> GetAllEmployee()
        {
            var data = await context.VEmployee.ToListAsync();
            return (data); 
        }

        public bool AddEmployee(Employee employee)
        {
            var emp = new Employee()
            {
                Employee_Name = employee.Employee_Name,
                Employee_Age = employee.Employee_Age,
                Employee_Salary = employee.Employee_Salary,
                Employee_Gender = employee.Employee_Gender,
                Employee_UserName = employee.Employee_UserName,
                Employee_Password = employee.Employee_Password,
                Country = employee.Country,
                State = employee.State,
                City = employee.City,

            };
            context.EmployeeData.Add(emp);
           var isSave = context.SaveChanges();
            if (isSave > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
           
        }

        public bool DeleteEmployee(int id)
        {
            var data = context.EmployeeData.Where(m => m.Employee_Id == id).SingleOrDefault();
            context.EmployeeData.Remove(data);
            var isSave =context.SaveChanges();
            if (isSave > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
           

        }
         public Employee EditEmployee(int id)
        {
            var data = context.EmployeeData.Where(m => m.Employee_Id == id).SingleOrDefault();
            if(data != null)
            {
                return data;
            }
            else
            {
                return data; 
            }

        }

        public bool UpdateEmployee(Employee emp)
        {
            var data = context.EmployeeData.Where(m => m.Employee_Id == emp.Employee_Id).FirstOrDefault();
            data.Employee_Name = emp.Employee_Name;
            data.Employee_Age = emp.Employee_Age;
            data.Employee_Gender = emp.Employee_Gender;
            data.Employee_Salary = emp.Employee_Salary;
            data.Employee_UserName = emp.Employee_UserName;
            data.City = emp.City;
            data.Country = emp.Country;
            data.State = emp.State;

            emp.Employee_Password = emp.Employee_Password;
            context.EmployeeData.Update(data);
           var isSave = context.SaveChanges();
            if (isSave > 0)
            {
                return true ;
            }
            else
            {
                return false;
            }
            
        }

     public  List<Country> GetCountry()
        {
            var data = context.Country.ToList();
            return data;
        }
    }
}

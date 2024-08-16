using EmployeeList.Models;
using EmployeeList.Repository.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System.Diagnostics;

namespace EmployeeList.Controllers
{
    public class HomeController : Controller
    {
        private readonly IEmployee employeeRepository;
        private readonly EmployeeDbContext context;
        public HomeController(IEmployee employeeRepository, EmployeeDbContext context)
        {

            this.employeeRepository = employeeRepository;
            this.context = context;
        }
       

        //public HomeController(EmployeeDbContext context)
        //{
        //    this.context = context;
        //}


        public IActionResult Index()
        {
            //var  data = context.EmployeeData.ToList();
            return View();
        }

        public async Task<IActionResult> EmployeeList()
        {
            var data = await employeeRepository.GetAllEmployee();
            return new JsonResult(data);
        }
        [HttpPost]
        public JsonResult Addemployee(Employee employee)
        {
            var data = employeeRepository.AddEmployee(employee);
            if (data == true)
            {
                return new JsonResult("Data is Saved");
            }
            else
            {
                return new JsonResult("Data not saved");
            }


        }
        public JsonResult Delete(int id)
        {
            var data = employeeRepository.DeleteEmployee(id);
            if (data == true)
            {
                return new JsonResult(" Data deleted Successfully");

            }
            else
            {
                return new JsonResult("Data cannot be deleted");
            }
        }
        public JsonResult Country()
        {
            var data = employeeRepository.GetCountry();
          return new JsonResult(data);
           
        }
        public JsonResult State(int id)
        {
            var st = context.State.Where(e => e.id.Id == id).ToList();
            return new JsonResult(st);
        }
        public JsonResult City(int id)
        {
            var ct = context.City.Where(e => e.State_id.State_Id == id).ToList();
            return new JsonResult(ct);
        }
        public JsonResult Edit(int id)
        {
            var data = employeeRepository.EditEmployee(id);
            if(data != null)
            {
                return new JsonResult(data);
            }
            else
            {
                return new JsonResult("Data Not found");
            }
        }
        [HttpPost]
        public JsonResult Update(Employee emp)
        {
            var data = employeeRepository.UpdateEmployee(emp);
            if(data == true)
            {
                return new JsonResult("Data Updated");
            }
            else
            {
                return new JsonResult("Data not update");
            }
        }
        public JsonResult State1(int id)
        {
            var st = context.State.Where(e => e.id.Id == id).ToList();
            return new JsonResult(st);
        }
        public JsonResult City1(int id)
        {
            var ct = context.City.Where(e => e.State_id.State_Id == id).ToList();
            return new JsonResult(ct);
        }
    }
}




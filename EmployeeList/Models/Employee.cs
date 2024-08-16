using System.ComponentModel.DataAnnotations;

namespace EmployeeList.Models
{
    public class Employee
    {
        [Key]
        public int Employee_Id { get; set; }
        public string Employee_Name { get; set; }
        public int Employee_Age { get; set; }
        public int Employee_Salary { get; set; }
        public string Employee_Gender { get; set; }
        public string Employee_UserName { get; set; }
        public string Employee_Password { get; set; }
        public int Country { get; set; }
        public int State { get; set; }
        public int City { get; set; }
    }
}

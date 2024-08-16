using Microsoft.EntityFrameworkCore;

namespace EmployeeList.Models
{
    [Keyless]
    public class VEmployee
    {
        public int Employee_Id { get; set; }
        public string Employee_Name { get; set; }
        public int Employee_Age { get; set; }
        public string Employee_Gender { get; set; }
        public string Employee_UserName { get; set; }
        public string Country_Name { get; set; }
        public string State_Name { get; set; }
        public string City_Name { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace EmployeeList.Models
{
    public class Country
    {
        [Key]
        public int Id { get; set; }
        public String Country_Name { get; set; }
    }
}

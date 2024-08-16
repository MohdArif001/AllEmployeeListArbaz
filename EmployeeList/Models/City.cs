using System.ComponentModel.DataAnnotations;

namespace EmployeeList.Models
{
    public class City
    {
        [Key]
        public int City_Id { get; set; }
        public String City_Name { get; set; }
        public State State_id { get; set; }    
    }
}

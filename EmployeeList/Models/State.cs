using System.ComponentModel.DataAnnotations;

namespace EmployeeList.Models
{
    public class State
    {
        [Key]
        public int State_Id { get; set; }
      
        public String State_Name { get; set; }
        public Country id { get; set; }
    }
}

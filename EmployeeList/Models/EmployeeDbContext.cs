using Microsoft.EntityFrameworkCore;

namespace EmployeeList.Models
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext()
        {
                
        }
        public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options):base (options)
        {
                
        }
        public virtual DbSet<Employee> EmployeeData { get; set; }
        public virtual DbSet<Country> Country { get; set; }
        public virtual DbSet<State> State { get; set; }
        public virtual DbSet<City> City { get; set; }
        public virtual DbSet<VEmployee> VEmployee { get; set; }


    }
}

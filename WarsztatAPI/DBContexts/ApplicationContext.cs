using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WarsztatApi.Entities;
using WarsztatAPI.Entities;

namespace WarsztatAPI.DBContexts
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options): base(options)
        {               

        }

        public DbSet<User> user { get; set; }
        public DbSet<Car> car { get; set; }
        public DbSet<Repair> repair { get; set; }
        public DbSet<Part> part { get; set; }
        public DbSet<RepairPart> repair_part { get; set; }
    }
}

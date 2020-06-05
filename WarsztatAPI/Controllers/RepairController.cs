using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarsztatAPI.DBContexts;
using WarsztatAPI.Entities;

namespace WarsztatAPI.Controllers
{
    [ApiController]
    [Route("api/repair")]
    public class RepairController : ControllerBase
    {
        private readonly ApplicationContext context;

        public RepairController(ApplicationContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var repairs = context.repair.ToList<Repair>();
            return Ok(repairs);
        }

        [HttpPost]
        public void AddUserToDatabase(Repair repair)
        {
            context.repair.Add(repair);
            context.SaveChanges();
        }
    }
}

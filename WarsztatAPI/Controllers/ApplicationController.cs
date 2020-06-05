using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarsztatApi.Entities;
using WarsztatAPI.DBContexts;
using WarsztatAPI.Entities;

namespace WarsztatAPI.Controllers
{
    [ApiController]
    [Route("api/applications")]
    public class ApplicationController : ControllerBase
    {
        private readonly ApplicationContext context;

        public ApplicationController(ApplicationContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var users = context.application.ToList<Application>();
            return Ok(users);
        }

        [HttpPost]
        public void AddUserToDatabase(Application app)
        {
            context.application.Add(app);
            context.SaveChanges();
        }
    }
}

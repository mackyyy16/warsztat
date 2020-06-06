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
    [Route("api/parts")]
    public class PartController : ControllerBase
    {
        private readonly ApplicationContext context;

        public PartController(ApplicationContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var part = context.part.ToList<Part>();
            return Ok(part);
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetPart(int id)
        {
            var part = context.part.Where(q => q.id_part == id).FirstOrDefault();
            return Ok(part);
        }

        [HttpPost]
        public void AddUserToDatabase(Part part)
        {
            context.part.Add(part);
            context.SaveChanges();
        }
    }
}

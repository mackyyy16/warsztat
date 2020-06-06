using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarsztatAPI.Common;
using WarsztatAPI.DBContexts;
using WarsztatAPI.Entities;

namespace WarsztatAPI.Controllers
{
    [ApiController]
    [Route("api/repairpart")]
    public class RepairPartController : ControllerBase
    {
        private readonly ApplicationContext context;

        public RepairPartController(ApplicationContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var part = context.repair_part.ToList<RepairPart>();
            return Ok(part);
        }

        [HttpGet]
        [Route("{idRepair}")]
        public IActionResult GetPartsPerRepair(int idRepair)
        {
            var repairParts = context.repair_part.Where(q => q.id_repair == idRepair).ToList();

            var partWithAmountList = new List<PartWithAmount>();
            foreach (var repairPart in repairParts)
            {
                var part = context.part.Where(q => q.id_part == repairPart.id_part).FirstOrDefault();

                var partWithAmount = new PartWithAmount()
                {
                    Part = part,
                    Amount = repairPart.amount
                };

                partWithAmountList.Add(partWithAmount);
            }

            return Ok(partWithAmountList);
        }

        [HttpPost]
        public void AddUserToDatabase(RepairPart repairPart)
        {
            context.repair_part.Add(repairPart);
            context.SaveChanges();
        }
    }
}

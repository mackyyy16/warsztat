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
    [Route("api/userRepair")]
    public class UserRepairController : ControllerBase
    {
        private readonly ApplicationContext context;

        public UserRepairController(ApplicationContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var userRepair = context.user_repair.ToList<UserRepair>();
            return Ok(userRepair);
        }

        [HttpGet]
        [Route("{userId}")]
        public IActionResult GetRepairsPerUser(int userId)
        {
            var userRepairsId = context.user_repair.Where(q => q.id_user == userId).Select(q => q.id_repair).ToArray();

            var repairs = new List<Repair>(); 

            foreach (var repairId in userRepairsId)
            {
                var repair = context.repair.Where(q => q.id_repair == repairId).FirstOrDefault();
                repairs.Add(repair);
            }

            return Ok(repairs);
        }


        [HttpGet]
        [Route("user/{idRepair}")]
        public IActionResult GetUserRepair(int idRepair)
        {
            var userRapairList = context.user_repair.Where(q => q.id_repair == idRepair).ToList();

            if (userRapairList.Any()){
                var userId = userRapairList.FirstOrDefault().id_user;
                var user = context.user.Where(q => q.id_user == userId).FirstOrDefault();
                return Ok(user);
            }
            return NoContent();
        }

        [HttpPost]
        public void AddUserRepair(UserRepair userRepair)
        {
            context.user_repair.Add(userRepair);
            context.SaveChanges();
        }

        [HttpPut]
        public void UpdateUserRepair(UserRepair userRepair)
        {
            context.user_repair.Update(userRepair);
            context.SaveChanges();
        }
    }
}

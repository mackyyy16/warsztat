using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarsztatApi.Entities;
using WarsztatAPI.DBContexts;

namespace WarsztatAPI.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationContext context;

        public UserController(ApplicationContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var users = context.user.ToList<User>();
            return Ok(users);
        }

        [HttpPost]
        public void AddUserToDatabase(User user)
        {
            context.user.Add(user);
            context.SaveChanges();
        }

        [HttpDelete]
        [Route("{id}")]
        public void DeleteUser(int id)
        {
            var user = context.user.Where(q => q.id_user == id).FirstOrDefault();

            if(user != null)
            {
                context.user.Remove(user);
                context.SaveChanges();
            }
        }

        [HttpPut]
        public void UpdateUser(User user)
        {
            context.user.Update(user);
            context.SaveChanges();
        }
    }
}

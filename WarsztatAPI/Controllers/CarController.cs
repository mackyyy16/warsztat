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
    [Route("api/car")]
    public class CarController : ControllerBase
    {
        private readonly ApplicationContext context;

        public CarController(ApplicationContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var cars = context.car.ToList<Car>();

            foreach (var car in cars)
            {
                var carRepair = context.repair.Where(q => q.id_repair == car.id_repair).FirstOrDefault();

            }
            return Ok(cars);
        }

        [HttpGet]
        [Route("{carId}")]
        public IActionResult GetCarRepair(int carId)
        {
            var car = context.car.Where(q => q.id_car == carId).FirstOrDefault();

            var repair = context.repair.Where(q => q.id_repair == car.id_repair).FirstOrDefault();

            return Ok(repair);
        }

        [HttpPost]
        public void AddUserToDatabase(Car app)
        {
            context.car.Add(app);
            context.SaveChanges();
        }
    }
}

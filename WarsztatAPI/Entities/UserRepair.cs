using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WarsztatAPI.Entities
{
    public class UserRepair
    {
        [Key]
        public int id { get; set; }
        public int id_user { get; set; }
        public int id_repair { get; set; }
    }
}

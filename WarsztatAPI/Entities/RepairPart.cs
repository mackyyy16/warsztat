using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WarsztatAPI.Entities
{
    public class RepairPart
    {
        [Key]
        public int id { get; set; }
        public int id_repair { get; set; }
        public int id_part { get; set; }
        public int amount { get; set; }
    }
}

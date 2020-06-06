using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WarsztatAPI.Entities
{
    public class Part
    {
        [Key]
        public int id_part { get; set; }
        public string name { get; set; }
        public string producer { get; set; }
        public int price { get; set; }
    }
}

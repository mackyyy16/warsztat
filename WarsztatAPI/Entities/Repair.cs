using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WarsztatAPI.Entities
{
    public class Repair
    {
        [Key]
        public int id_repair { get; set; }
        public string start_date { get; set; }
        public string end_date { get; set; }
        public string status { get; set; }
        public string description { get; set; }
        public int price { get; set; }
    }
}

﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WarsztatAPI.Entities
{
    public class Application
    {
        [Key]
        public int id { get; set; }
        public string mark { get; set; }
        public string model { get; set; }
        public string regnumber { get; set; }
        public int nrvin { get; set; }
        public int course { get; set; }
        public string descfault { get; set; }
    }
}

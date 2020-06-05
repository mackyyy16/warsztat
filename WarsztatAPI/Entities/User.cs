using System.ComponentModel.DataAnnotations;

namespace WarsztatApi.Entities {
    public class User{
        [Key]
        public int id_user { get; set;}
        public string name { get; set;}
        public string surname { get; set;}
        public string sex { get; set;}
        public string password { get; set;}
        public string login { get; set;}
        public string email { get; set;}
        public string dateofbirth { get; set;}
        public int phonenumber { get; set; }
        public string role { get; set; }
        public int idrepair { get; set;}
    }
}
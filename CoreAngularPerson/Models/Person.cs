using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace CoreAngularPerson.Models
{
    public class Person
    { 
        [Key]
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("firstName")]
        public string FirstName { get; set; }
        [JsonPropertyName("lastName")]
        public string LastName { get; set; }

        [JsonPropertyName("fullName")]
        public string FullName => $"{FirstName} {LastName}";

        [JsonPropertyName("address")]

        public string Address { get; set; }
    }
}

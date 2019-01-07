using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace budget_tool_react.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Categories = new[]
        {
            "Rent", "Food", "Utilities", "Personal Care", "Eating Out", "Goods", "Cafes", "Alcohol", "Insurance", "Exercise"
        };

        private static List<Expense> Expenses = new List<Expense> {
            new Expense()
            {
                Category = "Food",
                Date = DateTime.Now.AddDays(-10),
                Notes = "Met Market",
                Amount = 14.87
            },
            new Expense()
            {
                Category = "Entertainment",
                Date = DateTime.Now.AddDays(-20),
                Notes = "Movies",
                Amount = 18.43
            },
            new Expense()
            {
                Category = "Rent",
                Date = DateTime.Now.AddDays(-34),
                Amount = 1050
            }
        };


        [HttpGet("[action]")]
        public IEnumerable<Category> GetCategories()
        {
            return Categories.Select(category => new Category
            {
                Name = category
            });
        }

        [HttpGet("expenses")]
        public IEnumerable<Expense> GetExpenses()
        {
            return Expenses;
        }

        public class Category
        {
            public string Name { get; set; }
        }
        public class Expense
        {
            public double Amount { get; set; }
            public string Category { get; set; }
            public DateTime Date { get; set; }
            public string Notes { get; set; } = string.Empty;
        }
    }

}

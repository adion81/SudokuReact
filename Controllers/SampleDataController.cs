using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Sudoku.Controllers
{
    [Route("api/[controller]")]
    public class SudokuController : Controller
    {
        public class GridCell {
            public int value { get; set; }
            public bool isSolved { get; set; }
            public int id { get; set; }
            public GridCell(int val, bool solved, int id){
                this.value = val;
                this.isSolved = solved;
                this.id = id;
            }
        }
        public JsonResult testing(){
            List<List<int>> solved = new List<List<int>>();
            solved.Add(new List<int>{9,1,8,5,7,4,2,6,3});
            solved.Add(new List<int>{6,3,5,9,1,2,4,8,7});
            solved.Add(new List<int>{2,4,7,8,3,6,9,1,5});
            solved.Add(new List<int>{7,6,4,2,8,3,1,5,9});
            solved.Add(new List<int>{3,9,2,6,5,1,8,7,4});
            solved.Add(new List<int>{8,5,1,4,9,7,6,3,2});
            solved.Add(new List<int>{5,7,6,1,4,9,3,2,8});
            solved.Add(new List<int>{1,8,9,3,2,5,7,4,6});
            solved.Add(new List<int>{4,2,3,7,6,8,5,9,1});
            List<List<int>> puzzle = new List<List<int>>();
            puzzle.Add(new List<int>{9,0,8,0,0,4,2,6,3});
            puzzle.Add(new List<int>{0,3,0,9,1,2,0,8,7});
            puzzle.Add(new List<int>{2,4,7,0,3,6,9,1,0});
            puzzle.Add(new List<int>{0,6,4,0,8,0,1,5,0});
            puzzle.Add(new List<int>{0,9,0,0,5,1,0,7,4});
            puzzle.Add(new List<int>{8,5,0,0,0,7,6,3,2});
            puzzle.Add(new List<int>{5,0,0,0,0,0,3,2,0});
            puzzle.Add(new List<int>{1,8,9,0,0,5,0,4,6});
            puzzle.Add(new List<int>{0,2,3,7,0,0,0,0,1});
            List<List<GridCell>> board = new List<List<GridCell>>();
            puzzle.ForEach(Console.WriteLine);
            for(int i = 0; i < solved.Count; i++){
                List<GridCell> row = new List<GridCell>();
                for(int j = 0; j < solved.Count; j++){
                    bool isSolved = true;
                    if(puzzle[i][j] == 0){
                        isSolved = false;
                    }
                    row.Add(new GridCell( solved[i][j], isSolved, ((i * solved.Count) + j ) + 1));
                }
                board.Add(row);
            }
            var output = JsonConvert.SerializeObject(board);
            System.Console.WriteLine(output);
            return Json(output);
        }

        [HttpGet("[action]")]
        public JsonResult board()
        {
            return testing();
        }
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}

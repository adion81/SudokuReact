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
            solved.Add(new List<int>{1,2,3,4,5,6,7,8,9});
            solved.Add(new List<int>{1,2,3,4,5,6,7,8,9});

            //     [[1,2,3,4,5,6,7,8,9],
            //     [4,5,6,7,8,9,1,2,3]]
            // }
            List<int> testing = new List<int>();
            testing.Add(5);
            List<GridCell> row = new List<GridCell>();
            row.Add(new GridCell( 9, true, 1));
            row.Add(new GridCell(1, false, 2));
            List<List<GridCell>> board = new List<List<GridCell>>();
            board.Add(row);
            var output = JsonConvert.SerializeObject(board);
            System.Console.WriteLine(output);
            return Json(output);
        }

        [HttpGet("[action]")]
        public JsonResult board()
        {
            return testing();
        }
        // List<List<GridCell>> grid = new List<List<GridCell>>() { [
        //     [
        //         {value: 9,
        //             isSolved: true,
        //             id: 1,
        //         },
        //         {value: 1,
        //             isSolved: false,
        //             id: 2,
        //         },
        //         {value: 8,
        //             isSolved: true,
        //             id: 3,
        //         },
        //         {value: 5,
        //             isSolved: false,
        //             id: 4,
        //         },
        //         {value: 7,
        //             isSolved: false,
        //             id: 5,
        //         },
        //         {value: 4,
        //             isSolved: true,
        //             id: 6,
        //         },
        //         {value: 2,
        //             isSolved: true,
        //             id: 7,
        //         },
        //         {value: 6,
        //             isSolved: true,
        //             id: 8,
        //         },
        //         {value: 3,
        //             isSolved: true,
        //             id: 9,
        //         }
        //     ],
        //     [
        //         {value: 6,
        //             isSolved: false,
        //             id: 10,
        //         },
        //         {value: 3,
        //             isSolved: true,
        //             id: 11,
        //         },
        //         {value: 5,
        //             isSolved: false,
        //             id: 12,
        //         },
        //         {value: 9,
        //             isSolved: true,
        //             id: 13,
        //         },
        //         {value: 1,
        //             isSolved: true,
        //             id: 14,
        //         },
        //         {value: 2,
        //             isSolved: true,
        //             id: 15,
        //         },
        //         {value: 4,
        //             isSolved: false,
        //             id: 16,
        //         },
        //         {value: 8,
        //             isSolved: true,
        //             id: 17,
        //         },
        //         {value: 7,
        //             isSolved: true,
        //             id: 18,
        //         }
        //     ],
        //     [
        //         {value: 2,
        //             isSolved: true,
        //             id: 19,
        //         },
        //         {value: 4,
        //             isSolved: true,
        //             id: 20,
        //         },
        //         {value: 7,
        //             isSolved: true,
        //             id: 21,
        //         },
        //         {value: 8,
        //             isSolved: false,
        //             id: 22,
        //         },
        //         {value: 3,
        //             isSolved: true,
        //             id: 23,
        //         },
        //         {value: 6,
        //             isSolved: true,
        //             id: 24,
        //         },
        //         {value: 9,
        //             isSolved: true,
        //             id: 25,
        //         },
        //         {value: 1,
        //             isSolved: true,
        //             id: 26,
        //         },
        //         {value: 5,
        //             isSolved: false,
        //             id: 27,
        //         }
        //     ],
        //     [
        //         {value: 7,
        //             isSolved: false,
        //             id: 28,
        //         },
        //         {value: 6,
        //             isSolved: true,
        //             id: 29,
        //         },
        //         {value: 4,
        //             isSolved: true,
        //             id: 30,
        //         },
        //         {value: 2,
        //             isSolved: false,
        //             id: 31,
        //         },
        //         {value: 8,
        //             isSolved: true,
        //             id: 32,
        //         },
        //         {value: 3,
        //             isSolved: false,
        //             id: 33,
        //         },
        //         {value: 1,
        //             isSolved: true,
        //             id: 34,
        //         },
        //         {value: 5,
        //             isSolved: true,
        //             id: 35,
        //         },
        //         {value: 9,
        //             isSolved: false,
        //             id: 36,
        //         }
        //     ],
        //     [
        //         {value: 3,
        //             isSolved: false,
        //             id: 37,
        //         },
        //         {value: 9,
        //             isSolved: true,
        //             id: 38,
        //         },
        //         {value: 2,
        //             isSolved: false,
        //             id: 39,
        //         },
        //         {value: 6,
        //             isSolved: false,
        //             id: 40,
        //         },
        //         {value: 5,
        //             isSolved: true,
        //             id: 41,
        //         },
        //         {value: 1,
        //             isSolved: true,
        //             id: 42,
        //         },
        //         {value: 8,
        //             isSolved: false,
        //             id: 43,
        //         },
        //         {value: 7,
        //             isSolved: true,
        //             id: 44,
        //         },
        //         {value: 4,
        //             isSolved: true,
        //             id: 45,
        //         }
        //     ],
        //     [
        //         {value: 8,
        //             isSolved: true,
        //             id: 46,
        //         },
        //         {value: 5,
        //             isSolved: true,
        //             id: 47,
        //         },
        //         {value: 1,
        //             isSolved: false,
        //             id: 48,
        //         },
        //         {value: 4,
        //             isSolved: false,
        //             id: 49,
        //         },
        //         {value: 9,
        //             isSolved: false,
        //             id: 50,
        //         },
        //         {value: 7,
        //             isSolved: true,
        //             id: 51,
        //         },
        //         {value: 6,
        //             isSolved: true,
        //             id: 52,
        //         },
        //         {value: 3,
        //             isSolved: true,
        //             id: 53,
        //         },
        //         {value: 2,
        //             isSolved: true,
        //             id: 54,
        //         }
        //     ],
        //     [
        //         {value: 5,
        //             isSolved: true,
        //             id: 55,
        //         },
        //         {value: 7,
        //             isSolved: false,
        //             id: 56,
        //         },
        //         {value: 6,
        //             isSolved: false,
        //             id: 57,
        //         },
        //         {value: 1,
        //             isSolved: false,
        //             id: 58,
        //         },
        //         {value: 4,
        //             isSolved: false,
        //             id: 59,
        //         },
        //         {value: 9,
        //             isSolved: false,
        //             id: 60,
        //         },
        //         {value: 3,
        //             isSolved: true,
        //             id: 61,
        //         },
        //         {value: 2,
        //             isSolved: true,
        //             id: 62,
        //         },
        //         {value: 8,
        //             isSolved: false,
        //             id: 63,
        //         }
        //     ],
        //     [
        //         {value: 1,
        //             isSolved: true,
        //             id: 64,
        //         },
        //         {value: 8,
        //             isSolved: true,
        //             id: 65,
        //         },
        //         {value: 9,
        //             isSolved: true,
        //             id: 66,
        //         },
        //         {value: 3,
        //             isSolved: false,
        //             id: 67,
        //         },
        //         {value: 2,
        //             isSolved: false,
        //             id: 68,
        //         },
        //         {value: 5,
        //             isSolved: true,
        //             id: 69,
        //         },
        //         {value: 7,
        //             isSolved: false,
        //             id: 70,
        //         },
        //         {value: 4,
        //             isSolved: true,
        //             id: 71,
        //         },
        //         {value: 6,
        //             isSolved: true,
        //             id: 72,
        //         }
        //     ],
        //     [
        //         {value: 4,
        //             isSolved: false,
        //             id: 73,
        //         },
        //         {value: 2,
        //             isSolved: true,
        //             id: 74,
        //         },
        //         {value: 3,
        //             isSolved: true,
        //             id: 75,
        //         },
        //         {value: 7,
        //             isSolved: true,
        //             id: 76,
        //         },
        //         {value: 6,
        //             isSolved: false,
        //             id: 77,
        //         },
        //         {value: 8,
        //             isSolved: false,
        //             id: 78,
        //         },
        //         {value: 5,
        //             isSolved: false,
        //             id: 79,
        //         },
        //         {value: 9,
        //             isSolved: false,
        //             id: 80,
        //         },
        //         {value: 1,
        //             isSolved: true,
        //             id: 81,
        //         }
        //     ]
        // ]};
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

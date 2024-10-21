using CCAYEF.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CCAYEF.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Services()
        {
            return View();
        }

        public IActionResult Projects()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }
        public IActionResult Media()
        {
            var gallery = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/images/gallery");
            var files = Directory.GetFiles(gallery)
                                  .Select(Path.GetFileName) // Extract just the filename
                                  .ToList();

            return View(files);
        }
        public IActionResult Publications()
        {
            var reports_folder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/docs/reports");
            var reports = Directory.GetFiles(reports_folder)
                                  .Select(file => new
                                  {
                                      Title = Path.GetFileNameWithoutExtension(file), // Title without extension
                                      Link = $"/docs/reports/{Path.GetFileName(file)}", // Link to the file
                                      Description = "Description of the report goes here." // You can customize this
                                  })
                          .ToList();

            var publlications_folder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/docs/publication");
            var publications = Directory.GetFiles(publlications_folder)
                                  .Select(file => new
                                  {
                                      Title = Path.GetFileNameWithoutExtension(file), // Title without extension
                                      Link = $"/docs/publication/{Path.GetFileName(file)}", // Link to the file
                                      Description = "Description of the report goes here." // You can customize this
                                  })
                          .ToList();
            var model = new
            {
                Reports = reports,
                Publications = publications
            };
            return View(model);
        }
        
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

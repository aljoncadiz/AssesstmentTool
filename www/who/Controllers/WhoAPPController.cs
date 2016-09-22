using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace who.Controllers
{
    [AllowCrossSiteJson]
    public class WhoAPPController : ApiController
    {
        private string fileLocation = System.Web.HttpContext.Current.Server.MapPath("/CSVFiles/");
        private static string today = DateTime.Today.Month.ToString() + DateTime.Today.Day.ToString() + DateTime.Today.Year.ToString() + DateTime.Today.Hour.ToString() + DateTime.Today.Minute.ToString();
        private string fileName = @"WhoAPP" + today + ".csv";
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post(JObject input)
        {
            dynamic jsonString = JsonConvert.SerializeObject(input);
            dynamic parseTree = JsonConvert.DeserializeObject<JObject>(jsonString);

            string file = fileLocation + fileName;
            if (!File.Exists(file))
            {
                File.Create(file).Close();

                foreach (var prop in parseTree.Properties())
                {
                    StringBuilder build = new StringBuilder();
                    
                    
                        build.AppendFormat("{0},", prop.Name);
                        File.AppendAllText(file, build.ToString());



                }
            }

            File.AppendAllText(file, "\n");

            foreach (var prop in parseTree.Properties())
            {
                StringBuilder build = new StringBuilder();

                
                    build.AppendFormat("\"{0}\",", prop.Value.ToObject<object>().ToString());
                    File.AppendAllText(file, build.ToString());
                

            }
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }


    }
}
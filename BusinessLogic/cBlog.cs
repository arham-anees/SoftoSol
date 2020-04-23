using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic
{
    public class cBlog
    {
        public Int32 Id { get; set; }
        public Int32 Number { get; set; }
        public String Body { get; set; }
        public String Header { get; set; }
        public DateTime PublishDate { get; set; }
        public String Category { get; set; }
        public cUser Publisher { get; set; }
        public List<cLike> Likes { get; set; }
        public List<cComment> Comments { get; set; }
        public String Image { get; set; }

    }
}

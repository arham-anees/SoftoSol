using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic
{
    public class cComment
    {
        public Int32 Id { get; set; }
        public String Body { get; set; }
        public DateTime PublishDate { get; set; }
        public cUser Commentator { get; set; }
    }
}

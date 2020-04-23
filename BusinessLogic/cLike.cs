using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace BusinessLogic
{
     public class cLike
    {
        public Int32 Id { get; set; }
        public cBlog Blog { get; set; }
        public cUser Liker { get; set; }
        public DateTime LikeDateTime { get; set; }
    }
}

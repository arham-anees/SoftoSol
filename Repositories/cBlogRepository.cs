using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BusinessLogic;
using PersistenceLayer;

namespace Repositories
{
    public class cBlogRepository
    {
        private AppDbContext _context;

        public cBlogRepository(AppDbContext context)
        {
            _context = context;
        }

        public IQueryable<cBlog> GetAll()
        {
            return _context.Blogs;
        }
    }
}

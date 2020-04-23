using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using BusinessLogic;
using Mapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace PersistenceLayer
{
    public class AppDbContext : DbContext 
    {
        private IConfiguration _configuration;



        public AppDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public AppDbContext([NotNull] DbContextOptions options, IConfiguration configuration) : base(options)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer(_configuration["ConnectionStrings:developmentString"]);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new cUserMapper());
            //.ApplyConfiguration(new cLikeMapper());
        }

        #region DBSETS

        public DbSet<cUser> Users { get; set; }
        public DbSet<cLike> Likes { get; set; }
        public DbSet<cComment> Comments { get; set; }
        public DbSet<cBlog> Blogs { get; set; }

        #endregion
    }
}

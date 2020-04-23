using System;
using System.Collections.Generic;
using System.Text;
using BusinessLogic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Mapper
{
    public class cUserMapper:IEntityTypeConfiguration<cUser>
    {
        public void Configure(EntityTypeBuilder<cUser> builder)
        {
            builder.ToTable("tUser");
            builder.Property(x => x.FirstName).IsRequired(false).HasMaxLength(30);
            builder.Property(x => x.MiddleName).IsRequired(false).HasMaxLength(30);
            builder.Property(x => x.LastName).IsRequired(false).HasMaxLength(30);
        }
    }
}

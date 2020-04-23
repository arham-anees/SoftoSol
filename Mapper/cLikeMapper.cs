using System;
using System.Collections.Generic;
using System.Text;
using BusinessLogic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Mapper
{
    public class cLikeMapper:IEntityTypeConfiguration<cLike>
    {
        public void Configure(EntityTypeBuilder<cLike> builder)
        {
            builder.ToTable("tLike");
            builder.Property(x => x.Blog).IsRequired(true);
            builder.Property(x => x.Liker).IsRequired(true);
        }
    }
}

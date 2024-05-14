using Microsoft.EntityFrameworkCore;
using API.Entities;

namespace API
{
    public class Context:DbContext
    {
        public DbSet<User> Users {get; set;}
        public DbSet<BookCategory> BookCategories{get; set;}
        public DbSet<Book> Books{get; set;}
        public DbSet<Order> Orders {get; set;}
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(new User()
            {
                Id = 1,
                FirstName = "Admin",
                LastName = "",
                Email = "admin@gmail.com",
                MobileNumber = "1234567890",
                AccountStatus = AccountStatus.ACTIVE,
                UserType = UserType.ADMIN,
                Password = "admin999",
                CreatedOn = new DateTime(2023, 11, 01, 13, 28, 12)
            }
            );
        }

        protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
        {
            configurationBuilder.Properties<UserType>().HaveConversion<string>();
            configurationBuilder.Properties<AccountStatus>().HaveConversion<string>();
        }
    }
}
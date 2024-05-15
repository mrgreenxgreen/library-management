using Microsoft.AspNetCore.Mvc;
using API.Entities;
using API;

namespace API.Controllers
{

[ApiController]
[Route("API/[controller]")]
public class LibraryController : ControllerBase
{
    public Context Context {get;}
    public LibraryController(Context context)
    {
        Context = context;
    }

    [HttpPost("register")]
    public ActionResult Register(User user)
    {
        user.AccountStatus = AccountStatus.UNAPROOVED;
        user.UserType = UserType.STUDENT;
        user.CreatedOn = DateTime.UtcNow;

        Context.Users.Add(user);
        Context.SaveChanges();
        return Ok( @"Thank you for registering. You account has ben sent for approval. Once it is approved, you will get an email.");
    }

}
}
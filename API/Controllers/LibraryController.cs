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
    public EmailService EmailService {get;}
    public LibraryController(Context context, EmailService emailService)
    {
        Context = context;
        EmailService = emailService;
    }

    [HttpPost("register")]
    public ActionResult Register(User user)
    {
        user.AccountStatus = AccountStatus.UNAPROOVED;
        user.UserType = UserType.STUDENT;
        user.CreatedOn = DateTime.UtcNow;

        Context.Users.Add(user);
        Context.SaveChanges();

        const string subject = "Account Created";

        var body = $"""
            <html>
                <body>
                    <h1>Hello, {user.FirstName} {user.LastName} </h1>
                    <h2>
                        You accoutn has been created and we have sent approval request to admin.
                        Once the request is approved by admin you will receive email,and you will be 
                        able to login in to your account.
                    </h2>
                    <h3> Thanks </h3>
                </body>
            </html>
            """;

            EmailService.SendEmail(user.Email, subject, body);

        return Ok( @"Thank you for registering. You account has ben sent for approval. Once it is approved, you will get an email.");
    }

}
}
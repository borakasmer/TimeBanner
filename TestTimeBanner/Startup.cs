using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TestTimeBanner.Startup))]
namespace TestTimeBanner
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

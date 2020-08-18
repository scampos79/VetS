﻿using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using VetS.Models;

namespace VetS.Data
{
    public class VetSDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public VetSDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {

        }

        public DbSet<Animal> Animales { get; set; }
    }
}
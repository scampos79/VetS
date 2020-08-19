﻿using AutoMapper;
using VetS.Controllers.Resources;
using VetS.Models;

namespace VetS.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //Dominio a API
            CreateMap<Animal, AnimalResource>();
            CreateMap<Raza, RazaResource>();
            CreateMap<Mascota, MascotaResource>();


            //API a Dominio
            CreateMap<MascotaResource, Mascota>()
                .ForMember(m => m.Id, opt => opt.Ignore());
            //.ForMember(m => m.Animal.Razas.Select(id => new Raza { Id=id}), opt => opt.MapFrom(mr => mr.RazaId));
        }
    }
}

﻿using System;

namespace VetS.Controllers.Resources
{
    public class MascotaResource
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public AnimalResource Animal { get; set; }
        public RazaResource Raza { get; set; }
        public bool Asignada { get; set; }

        public DateTime FechaNacimiento { get; set; }
        public DateTime Actualizacion { get; set; }
    }
}

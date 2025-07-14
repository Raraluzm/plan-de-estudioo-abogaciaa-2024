const plan = [
  {
    nombre: "Primer Cuatrimestre",
    asignaturas: [
      { nombre: "Introducción al Derecho", correlativa: "-" },
      { nombre: "Historia del Derecho", correlativa: "-" },
      { nombre: "Interpretación Económica del Derecho", correlativa: "-" },
      { nombre: "Teoría del Estado", correlativa: "-" },
      { nombre: "Taller de Argumentación Jurídica y Oratoria", correlativa: "-" }
    ]
  },
  {
    nombre: "Segundo Cuatrimestre",
    asignaturas: [
      { nombre: "Derecho Privado (PG)", correlativa: "Introducción al Derecho" },
      { nombre: "Psico Sociología Jurídica", correlativa: "-" },
      { nombre: "Derecho Constitucional", correlativa: "Introducción al Derecho" },
      { nombre: "Derecho Internacional Público", correlativa: "Teoría del Estado" },
      { nombre: "Derechos Humanos", correlativa: "Introducción al Derecho" }
    ]
  },
  {
    nombre: "Tercer Cuatrimestre",
    asignaturas: [
      { nombre: "Derecho de las Obligaciones", correlativa: "Derecho Privado (PG)" },
      { nombre: "Teoría General del Proceso", correlativa: "Derecho Privado (PG)" },
      { nombre: "Derecho Penal I (PG)", correlativa: "Derecho Constitucional" },
      { nombre: "Derecho de los Negocios", correlativa: "Interpretación Económica del Derecho" },
      { nombre: "Derecho de Daños", correlativa: "Derecho Privado (PG)" }
    ]
  },
  {
    nombre: "Cuarto Cuatrimestre",
    asignaturas: [
      { nombre: "Derecho del Consumidor", correlativa: "Derecho de las Obligaciones" },
      { nombre: "Derechos Reales", correlativa: "Derecho de las Obligaciones" },
      { nombre: "Derecho Penal II (PE)", correlativa: "Derecho Penal I (PG)" },
      { nombre: "Metodología de la Investigación", correlativa: "Taller de Argumentación Jurídica y Oratoria" },
      { nombre: "Ética y Deontología Jurídica", correlativa: "Taller de Argumentación Jurídica y Oratoria" }
    ]
  },
  {
    nombre: "Quinto Cuatrimestre",
    asignaturas: [
      { nombre: "Derecho Laboral y de la Seguridad Social", correlativa: "Derecho de los Negocios" },
      { nombre: "Derecho de las Familias", correlativa: "Derechos Reales" },
      { nombre: "Derecho Administrativo I", correlativa: "Derecho Internacional Público" },
      { nombre: "Derecho de los Contratos I", correlativa: "Derechos Reales" },
      { nombre: "Sociedades", correlativa: "Derecho de los Negocios" }
    ]
  },
  {
    nombre: "Sexto Cuatrimestre",
    asignaturas: [
      { nombre: "Derecho de los Contratos II", correlativa: "Derecho de los Contratos I" },
      { nombre: "Derecho Procesal Civil, Comercial y Familia", correlativa: "Teoría General del Proceso" },
      { nombre: "Derecho Administrativo II", correlativa: "Derecho Administrativo I" },
      { nombre: "Finanzas y Derecho Tributario", correlativa: "Sociedades" },
      { nombre: "Práctica Profesional I - Estudio de Casos", correlativa: "Ética y Deontología Jurídica" }
    ]
  },
  {
    nombre: "Séptimo Cuatrimestre",
    asignaturas: [
      { nombre: "Derecho Ambiental", correlativa: "Derecho Administrativo II" },
      { nombre: "Derecho de la Integración", correlativa: "Derecho Administrativo II" },
      { nombre: "Derecho Concursal", correlativa: "Sociedades" },
      { nombre: "Filosofía del Derecho", correlativa: "Ética y Deontología Jurídica" },
      { nombre: "Práctica Profesional II Taller de Litigación", correlativa: "Práctica Profesional I - Estudio de Casos" }
    ]
  },
  {
    nombre: "Octavo Cuatrimestre",
    asignaturas: [
      { nombre: "Sucesiones", correlativa: "Derecho de las Familias" },
      { nombre: "Derecho Procesal Penal", correlativa: "Derecho Penal II (PE)" },
      { nombre: "Derecho Internacional Privado", correlativa: "Derecho de la Integración" },
      { nombre: "Derecho Procesal Constitucional", correlativa: "Derecho Procesal Civil, Comercial y Familia" },
      { nombre: "Práctica Profesional III Consultorio Jurídico Gral.", correlativa: "Práctica Profesional II Taller de Litigación" }
    ]
  }
];

const container = document.getElementById("plan-container");

plan.forEach(cuatri => {
  const cuatriDiv = document.createElement("div");
  cuatriDiv.className = "cuatrimestre";
  cuatriDiv.innerHTML = `<h2>${cuatri.nombre}</h2>`;
  
  cuatri.asignaturas.forEach(asig => {
    const asigDiv = document.createElement("div");
    asigDiv.className = "asignatura";
    asigDiv.innerHTML = `<strong>${asig.nombre}</strong> <span class="correlativa">(Correlativa: ${asig.correlativa})</span>`;
    cuatriDiv.appendChild(asigDiv);
  });
  
  container.appendChild(cuatriDiv);
});

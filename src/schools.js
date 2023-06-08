let schools = [
    {
        id: 1,
        nombre: "UNIVERSIDAD TECNOLOGICA DE LA SELVA",
        clave: "ASASD",
        clave_centro_trabajo: "CAASd",
        ciudad: "OCOSINGO",
        municipio: "OCOSINGO",
        estado: "CHIAPAS",
        direccion:
            "Entronque Toniná Km 0.5 carretera Ocosingo-Altamirano, Ocosingo",
        turno: "VESPERTINO",
        created_at: "",
        updated_at: "",
        deleted_at: "",
    },
    {
        id: 2,
        nombre: "NORMAL SUPERIOR",
        clave: "ASCXXCASD",
        clave_centro_trabajo: "TTTTCAASd",
        ciudad: "TUXTLA GUITIERREZ",
        municipio: "OCOSINGO",
        estado: "CHIAPAS",
        direccion: "6to Callejon S/N. Barrio guadalupe, Ocosingo, Chiapas",
        turno: "MATUTINO",
        created_at: "",
        updated_at: "",
        deleted_at: "",
    },
    {
        id: 3,
        nombre: "HIGH SCHOOL",
        clave: "AGGGGSASD",
        clave_centro_trabajo: "CASSSSASd",
        ciudad: "TUXTLA GUITIERREZ",
        municipio: "OCOSINGO",
        estado: "CHIAPAS",
        direccion: "CONOCIDO",
        turno: "VESPERTINO",
        created_at: "",
        updated_at: "",
        deleted_at: "",
    },
    {
        id: 4,
        nombre: "NEW SCHOOL",
        clave: "ASASD",
        clave_centro_trabajo: "CAASTTTd",
        ciudad: "TUXTLA GUITIERREZ",
        municipio: "OCOSINGO",
        estado: "CHIAPAS",
        direccion: "6to Callejon S/N. Barrio guadalupe, Ocosingo, Chiapas",
        turno: "VESPERTINO",
        created_at: "",
        updated_at: "",
        deleted_at: "",
    },
    {
        id: 5,
        nombre: "UT. CHIAPA DE CORZO",
        clave: "ASASDSSD",
        clave_centro_trabajo: "CAGGGASd",
        ciudad: "CHIAPA DE CORZO",
        municipio: "OCOSINGO",
        estado: "CHIAPAS",
        direccion:
            "Entronque Toniná Km 0.5 carretera Ocosingo-Altamirano, Ocosingo",
        turno: "AMBOS",
        created_at: "",
        updated_at: "",
        deleted_at: "",
    },
];

export function getSchools() {
    return schools;
}

export function getSchool(schoolId) {
    return schools.find((school) => school.id === schoolId);
}

export function getSchoolLocation(school) {
    return `${school.city}, ${school.state}`;
}

const API_URL = process.env.BASE_URL;
const API_VERSION = process.env.API_VERSION || "v1";

const endpoints = {
    schools: {
        all: () => `${API_URL}${API_VERSION}/schools/`,
        get: (id) => `${API_URL}${API_VERSION}/schools/${id}`,
        create: () => `${API_URL}${API_VERSION}/schools/`,
        update: (id) => `${API_URL}${API_VERSION}/schools/${id}`,
        delete: (id) => `${API_URL}${API_VERSION}/schools/${id}`,
        careers: (id) => `${API_URL}${API_VERSION}/schools/${id}/careers`,
        movements: (id) => `${API_URL}${API_VERSION}/schools/${id}/movements`,
        periods: (id) => `${API_URL}${API_VERSION}/schools/${id}/periods`,
    },
    careers: {
        all: () => `${API_URL}${API_VERSION}/careers/`,
        get: (id) => `${API_URL}${API_VERSION}/careers/${id}`,
        create: () => `${API_URL}${API_VERSION}/careers/`,
        update: (id) => `${API_URL}${API_VERSION}/careers/${id}`,
        delete: (id) => `${API_URL}${API_VERSION}/careers/${id}`,
        groups: (id) => `${API_URL}${API_VERSION}/careers/${id}/groups`,
        students: (id) => `${API_URL}${API_VERSION}/careers/${id}/students`,
        subjects: (id) => `${API_URL}${API_VERSION}/careers/${id}/subjects`,
    },
    periods: {
        all: () => `${API_URL}${API_VERSION}/periods/`,
        get: (id) => `${API_URL}${API_VERSION}/periods/${id}`,
        create: () => `${API_URL}${API_VERSION}/periods/`,
        update: (id) => `${API_URL}${API_VERSION}/periods/${id}`,
        delete: (id) => `${API_URL}${API_VERSION}/periods/${id}`,
        groups: (id) => `${API_URL}${API_VERSION}/periods/${id}/groups`,
        students: (id) => `${API_URL}${API_VERSION}/periods/${id}/students`,
    },
    groups: {
        all: () => `${API_URL}${API_VERSION}/groups/`,
        get: (id) => `${API_URL}${API_VERSION}/groups/${id}`,
        create: () => `${API_URL}${API_VERSION}/groups/`,
        update: (id) => `${API_URL}${API_VERSION}/groups/${id}`,
        delete: (id) => `${API_URL}${API_VERSION}/groups/${id}`,
        grades: (id) => `${API_URL}${API_VERSION}/groups/${id}/grades`,
        students: (id) => `${API_URL}${API_VERSION}/groups/${id}/students`,
    },
    subjects: {
        all: () => `${API_URL}${API_VERSION}/subjects/`,
        get: (id) => `${API_URL}${API_VERSION}/subjects/${id}`,
        create: () => `${API_URL}${API_VERSION}/subjects/`,
        update: (id) => `${API_URL}${API_VERSION}/subjects/${id}`,
        delete: (id) => `${API_URL}${API_VERSION}/subjects/${id}`,
        grades: (id) => `${API_URL}${API_VERSION}/subjects/${id}/grades`,
    },
    students: {
        all: () => `${API_URL}${API_VERSION}/students/`,
        get: (id) => `${API_URL}${API_VERSION}/students/${id}`,
        create: () => `${API_URL}${API_VERSION}/students/`,
        update: (id) => `${API_URL}${API_VERSION}/students/${id}`,
        delete: (id) => `${API_URL}${API_VERSION}/students/${id}`,
        documents: (id) => `${API_URL}${API_VERSION}/students/${id}/documents`,
        grades: (id) => `${API_URL}${API_VERSION}/students/${id}/grades`,
        histories: (id) => `${API_URL}${API_VERSION}/students/${id}/histories`,
        movements: (id) => `${API_URL}${API_VERSION}/students/${id}/movements`,
    },
    grades: {
        store: () => `${API_URL}${API_VERSION}/grades/`,
    },
    documents: {
        get: (id) => `${API_URL}${API_VERSION}/documents/${id}`,
        create: () => `${API_URL}${API_VERSION}/documents/`,
        update: (id) => `${API_URL}${API_VERSION}/documents/${id}`,
        delete: (id) => `${API_URL}${API_VERSION}/documents/${id}`,
    },
    movements: {
        all: () => `${API_URL}${API_VERSION}/movements/`,
        get: (id) => `${API_URL}${API_VERSION}/movements/${id}`,
        create: () => `${API_URL}${API_VERSION}/movements/`,
        update: (id) => `${API_URL}${API_VERSION}/movements/${id}`,
    },
    histories: {
        all: () => `${API_URL}${API_VERSION}/histories/`,
        get: (id) => `${API_URL}${API_VERSION}/histories/${id}`,
    },
};

export default endpoints;

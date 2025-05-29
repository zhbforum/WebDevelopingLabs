import Keycloak from 'keycloak-connect';
import session from 'express-session';

export const memoryStore = new session.MemoryStore();

const keycloakConfig = {
    "auth-server-url": "https://accounts.universitywithme.org.ua",
    "realm": "KhPI",
    "resource": "student-lab",
    "bearer-only": true
};

export const keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);

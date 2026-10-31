// base(/heetae)를 붙인 사이트 안 주소: url("projects.html") → /heetae/projects.html
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const url = (path = "") => `${base}/${path.replace(/^\.?\//, "")}`;

/** @type {import('next').NextConfig} */
const basePath = "";

module.exports = {
  reactStrictMode: true,
  env: {
    basePath: basePath,
    img: `${basePath}/img`,
    title: "Galeria Acessível",
  },
};

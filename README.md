# Guillermo Plisich — Portafolio Web

Portafolio personal desarrollado con **React**, **TypeScript** y **Vite**. Diseñado para mostrar mi experiencia laboral, proyectos y habilidades de manera atractiva, profesional y completamente responsive.

🔗 **Demo en vivo:** [guillermoplisich07.github.io/portafolio-web](https://guillermoplisich07.github.io/portafolio-web/)

---

## Tecnologías utilizadas

| Tecnología | Versión |
|---|---|
| React | 19 |
| TypeScript | ~5.9 |
| Vite | 7 |
| Tailwind CSS | 4 |
| Framer Motion | 12 |
| AOS (Animate On Scroll) | 2.3 |
| Lucide React | 0.563 |
| React Icons | 5.5 |

---

## Características

- **Modo oscuro / claro** — toggle en la navbar con soporte completo en todos los componentes.
- **Animaciones** — entrada de secciones con AOS y transiciones suaves con Framer Motion.
- **Totalmente responsive** — adaptado para móvil, tablet y escritorio.
- **Secciones:**
  - `Hero` — presentación personal con foto, stack tecnológico y links a LinkedIn y email.
  - `Experience` — timeline con experiencia laboral (ITC S.A., ORT Uruguay, SOMIL S.A., Multiline).
  - `Projects` — tarjetas de proyectos con stack, descripción, link a GitHub y demo en vivo.
  - `About Me` — descripción personal con foto.
  - `Contact` — formulario de contacto.
  - `Footer` — pie de página.

---

## Estructura del proyecto

```
src/
├── App.tsx
├── main.tsx
├── index.css
├── assets/
│   ├── yo.jpeg
│   └── portafolio.png
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Experience.tsx
    ├── Projects.tsx
    ├── AboutMe.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

---

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Vista previa del build
npm run preview
```

---

## Scripts disponibles

| Script | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Compila TypeScript y genera el build de producción |
| `npm run lint` | Ejecuta ESLint |
| `npm run preview` | Sirve el build localmente para previsualizar |

---

## Autor

**Guillermo Plisich**
- 🔗 [LinkedIn](https://www.linkedin.com/in/guillermo-antonio-p-a23aa512a/)
- 📧 nmguille@outlook.es
- 💻 [GitHub](https://github.com/GuillermoPlisich07)
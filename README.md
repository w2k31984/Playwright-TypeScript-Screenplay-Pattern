# QA Automation Reference Framework

## Playwright + TypeScript + Screenplay Pattern

Este repositorio presenta un **framework de automatización de pruebas de nivel enterprise**, diseñado como **framework de referencia** para equipos de QA modernos.

El objetivo del proyecto no es únicamente ejecutar pruebas, sino **demostrar diseño de arquitectura, escalabilidad, mantenibilidad y buenas prácticas** aplicadas a automatización **UI, API y E2E**, utilizando el **Screenplay Pattern**.

---

## 🎯 Objetivos del Framework

- Servir como **base reusable** para equipos QA
- Separar claramente **core técnico** y **dominio de negocio**
- Facilitar la escalabilidad a **Web, API, Mobile y Performance**
- Reducir acoplamiento y flakiness
- Proveer una arquitectura defendible a nivel **Senior / SDET / QA Architect**

---

## 🚀 Tecnologías Utilizadas

- **Playwright** – Automatización UI y API
- **TypeScript** – Tipado fuerte y mantenibilidad
- **Screenplay Pattern** – Diseño orientado a comportamiento
- **Allure Reports** – Reporting profesional
- **GitHub Actions** – CI/CD
- **REST API Testing**

---

## 🧠 Arquitectura

El framework implementa **Screenplay Pattern puro**, donde:

- **Actors** representan usuarios del sistema
- **Abilities** representan capacidades técnicas (Web, API)
- **Tasks** representan acciones de negocio
- **Questions** representan validaciones de comportamiento
- **Tests** solo orquestan el flujo (sin lógica)

### Principios clave

- ✅ Core desacoplado del negocio  
- ✅ Dominio primero, tecnología después  

---

## 🏗️ Estructura del Proyecto

```text
playwright-screenplay-parabank/
│
├── src/
│   ├── actors/
│   │   └── Actor.ts
│   │
│   ├── abilities/
│   │   ├── BrowseTheWeb.ts
│   │   └── CallAnApi.ts
│   │
│   ├── tasks/
│   │   ├── Login.ts
│   │   ├── ApiLogin.ts
│   │   ├── Register.ts
│   │   ├── ViewAbout.ts
│   │   └── ViewServices.ts
│   │
│   ├── questions/
│   │   ├── IsLoggedIn.ts
│   │   ├── ApiLoginWasSuccessful.ts
│   │   ├── IsRegistered.ts
│   │   ├── AboutPageIsDisplayed.ts
│   │   └── ServicesPageIsDisplayed.ts
│   │
│   ├── ui/
│   │   ├── LoginPage.ts
│   │   ├── RegisterPage.ts
│   │   ├── AboutPage.ts
│   │   └── ServicesPage.ts
│   │
│   └── tests/
│       ├── ui-login.spec.ts
│       ├── api-login.spec.ts
│       ├── ui-register.spec.ts
│       ├── ui-about.spec.ts
│       └── ui-services.spec.ts
│
├── .github/workflows/
│   └── playwright.yml
│
├── .env.example
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

---

## 🧪 Tests Incluidos

| Test | Descripción |
| ---- | ----------- |
| `ui-login.spec.ts` | Login exitoso en ParaBank (UI) |
| `api-login.spec.ts` | Login exitoso vía API ParaBank |
| `ui-register.spec.ts` | Registro exitoso en ParaBank |
| `ui-about.spec.ts` | Página About muestra información correcta |
| `ui-services.spec.ts` | Página Services muestra lista de servicios |

---

## ⚙️ Configuración

1. Copiar variables de entorno: `cp .env.example .env`
2. Ajustar credenciales en `.env` si es necesario
3. Ejecutar tests: `npx playwright test`
4. Generar reporte Allure: `npx allure generate ./allure-results --clean`
5. Ver reporte: `npx allure open`

# Template: Clean Architecture (OOP & Pragmatic)

**Approach:** Simplified implementation using Object-Oriented Programming (OOP).
**Note:** This architecture prioritizes development speed over purity. It assumes some coupling and centralization to reduce boilerplate.

## Folder Structure

### 1. Domain (Core)
The innermost layer. It has no external dependencies. It contains pure business logic.

- **/entities**:
  - Defines **what** your business is.
  - *Focus:* **Classes** encapsulating data and behavior. 
  - Ideally, rich models (data + logic), but can be anemic (getters/setters) for simpler CRUD apps.
- **/repositories**:
  - **Output Ports (Abstractions).**
  - Defines the contracts (**Interfaces**) for data access.
  - Example: `IUserRepository` interface.
- **/domainServices**:
  - Classes containing domain logic that doesn't belong to a single entity.
  - Useful for orchestration between multiple entities.

### 2. Application (Orchestration)
Defines what the system **can do**. Orchestrates data flow to and from the domain.

- **/services**:
  - **Use Case Implementations.**
  - *OOP Focus:* **Service Classes** (e.g., `UserService`).
  - Dependencies (like Repositories) are injected via **Constructor Injection**.
  - Contains application logic, flow validation, and calls to repository interfaces.
- **/interfaces**:
  - **Input Ports.**
  - Defines the contracts (Interfaces) that the Service Classes must implement (e.g., `IUserService`).
- **/dtos** *(Optional)*:
  - Data Transfer Objects. Classes or Records used to move data between layers without exposing Domain Entities directly.

### 3. Adapters (Interface)
Converts data from the format convenient for use cases and entities, to the format convenient for external agents (Web, CLI).

- **Role:** **Controller Classes**.
- They receive the HTTP Request, invoke the method of the injected *Application Service*, and return a response.
- No business logic, only transformation and delegation.

### 4. Framework (Infrastructure)
Technical details, tools, and configurations. This is where the "dirty" code lives (DB, HTTP server, libs).

- **/Assembly** (Composition Root):
  - **Dependency Injection.**
  - The place where real classes (Repositories, Services) are instantiated and wired together.
  - *Pragmatism:* Use a DI Container (like InversifyJS, NestJS DI, or Awilix) or manual wiring ("new Repository()", passed into "new Service()").
- **/others**:
  - Framework utilities, server configuration, and real repository implementations (Classes implementing the Repository Interfaces).

---

### Simplified Flow Summary

1. **Framework** receives HTTP request -> Calls **Adapter (Controller Class)**.
2. **Adapter** extracts params -> Calls method on injected **Application Service (Class)**.
3. **Application Service** executes logic -> Calls method on injected **Domain Repository (Interface)**.
4. **Assembly** ensures the *Service* receives a concrete *Repository* instance via its constructor at runtime.

# GitHub Copilot Instructions for Ganglia

## Project Overview
Ganglia is an AI agent system for controlling web browsers through natural language commands, powered by a vision-capable Small Language Model (SLM) and Playwright. 
The system is inspired by the distributed nervous system of an octopus, where semi-autonomous agents (ganglia) execute high-level commands from a central brain.

- **Multi-modal input**: The system processes both visual (screenshots) and structural (DOM) data
- **Tool-augmented SLM**: The language model uses specific tools like `clickElement`, `typeText` for predictable actions
- **Multi-context aware**: Designed to manage multiple browser tabs/contexts simultaneously
- **Robust automation**: Built on Playwright for reliable browser control

## Development Guidelines

### Technology Stack
- **Browser Automation**: Playwright
- **Language Model**: Small Language Models (SLMs) like Phi-3, Llama 3
- **Language**: TypeScript
- **Testing**: Playwright for E2E testing, jest for unit testing

### Architecture Guidelines
- Use dependency injection patterns for testability
- Follow clean architecture guidelines for structuring code into layers (e.g., presentation, domain, application, data, infrastructure)
- All infrastructure dependencies should be abstracted with interface in domain injected rather than imported directly

#### Feature Based Structure
```
src/
├── features/               # Feature-based modules
│   ├── feature-a/          # Example feature A
│   │   ├── domain/         # Core business logic (innermost)
│   │   │   ├── entities/   # Business entities
│   │   │   ├── value-objects/ # Value objects
│   │   │   ├── repositories/  # Repository interfaces
│   │   │   └── services/   # Domain services
│   │   ├── application/    # Use cases and application logic
│   │   │   ├── use-cases/  # Application use cases
│   │   │   ├── dtos/       # Data transfer objects
│   │   │   ├── interfaces/ # Application interfaces
│   │   │   └── services/   # Application services
│   │   ├── infrastructure/ # External concerns (outermost)
│   │   │   ├── repositories/ # Repository implementations
│   │   │   ├── services/   # External service implementations
│   │   │   ├── adapters/   # External API adapters
│   │   │   └── config/     # Feature-specific configuration
│   │   └── presentation/   # Interface adapters
│   │       ├── controllers/ # HTTP controllers
│   │       ├── presenters/ # Response formatters
│   │       ├── middleware/ # Request middleware
│   │       └── routes/     # Route definitions
│   │
│   └── feature-b/          # Example feature B
│       └── [same structure as above]
│
├── shared/                 # Cross-cutting concerns and shared utilities
│   ├── domain/             # Shared domain concerns
│   │   ├── base/           # Base classes (Entity, ValueObject, etc.)
│   │   ├── events/         # Domain events
│   │   ├── exceptions/     # Domain exceptions
│   │   └── interfaces/     # Shared domain interfaces
│   ├── application/        # Shared application concerns
│   │   ├── base/           # Base use cases, queries, commands
│   │   ├── interfaces/     # Cross-feature interfaces
│   │   ├── dtos/           # Shared DTOs
│   │   └── services/       # Shared application services
│   ├── infrastructure/     # Shared infrastructure concerns
│   │   ├── database/       # Database configuration and connections
│   │   ├── logging/        # Logging implementations
│   │   ├── messaging/      # Event bus, message queues
│   │   ├── caching/        # Cache implementations
│   │   ├── config/         # Global application configuration
│   │   ├── monitoring/     # Health checks, metrics
│   │   └── external-apis/  # Shared external service clients
│   ├── presentation/       # Shared presentation concerns
│   │   ├── middleware/     # Global middleware
│   │   ├── filters/        # Exception filters, validation filters
│   │   ├── decorators/     # Custom decorators
│   │   └── base/           # Base controllers, presenters
│   └── utils/              # Pure utility functions
│       ├── types/          # Common types and type utilities
│       ├── helpers/        # Helper functions
│       ├── constants/      # Application constants
│       └── validators/     # Validation utilities
│
└── main.ts                 # Application entry point and bootstrapping
```

### Testing Strategy
- Unit tests for domain and application modules, mocking dependencies
- Integration tests for SLM-Playwright interaction
- E2E tests for complete workflows
- Visual regression testing for UI interactions

### Test Implementation
- Write type-safe test utilities and fixtures
- Use proper typing for mock objects and stubs
- Prefer state-based testing over interaction-based testing
  - Arrange specific states for dependencies explicitly in tests with specific values for parameters of mocked functions or properties before acting on the System Under Test (SUT)
  - Assert on the final state rather than intermediate interactions 
  - Only assert/verify on intermediate interactions as a last resort if those interactions don't return any value to the SUT that affects its behavior
- Ensure tests cover edge cases and error conditions
- Use a driver pattern of Test -> Driver -> SUT where the driver handles the setup and interaction with the SUT and assertions, and provides reusable functionality to multiple tests so test methods contain minimal code
- For unit tests practice TDD - Write a failing test first, execute the test to confirm it fails, then implement the minimum code to pass the test, and finally refactor the code while keeping the tests green.

## Git Workflow Instructions
When the user asks to commit changes, perform the following sequence in a single command chain:

1. Navigate to workspace root if not already there. This is IMPORTANT.
2. `git add .` - Stage all changes from the workspace root
3. `git commit -m "descriptive message"` - Commit with a detailed, descriptive message
4. `git push` - Push to remote repository

Command pattern:
```bash
# Ensure we're at workspace root, then commit
cd /path/to/workspace/root && git add . && git commit -m "message" && git push
```

Use clear, descriptive commit messages that explain:
- What was changed
- Why it was changed (if not obvious)
- Any breaking changes or important notes

Examples:
- "feat: add basic project structure and GitHub Copilot instructions"
- "fix: resolve DOM parsing edge case for dynamic content"
- "refactor: restructure observer module for better separation of concerns"

## Error Handling
- Create custom error types for different failure modes
- Use Result/Option types for operations that can fail
- Implement circuit breaker patterns for unreliable operations
- Log errors with sufficient context for debugging
- Provide meaningful error messages to users


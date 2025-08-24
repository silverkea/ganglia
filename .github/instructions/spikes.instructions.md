---
applyTo: "spikes/**/*.*"
---

# Spike Instructions - Relaxed Guidelines

## Purpose
Spikes are for exploration, experimentation, and learning. These instructions prioritize speed and discovery over perfect architecture.

## Code Organization
- **Flat structure OK** - No need for clean architecture layers in spikes
- **Single files for small experiments** - Combine logic as needed
- **Quick and dirty solutions** - Focus on learning, not production code
- **Copy-paste friendly** - Reuse code snippets liberally
- **Minimal abstraction** - Keep things concrete and obvious

## Documentation
- **Inline comments for discoveries** - Note what works and what doesn't
- **README per spike** - Capture key findings and next steps
- **Screenshot evidence** - Include images of results when relevant
- **Performance notes** - Record inference times, memory usage, etc.

## Code Quality
- **Basic TypeScript types** - Don't over-engineer type definitions
- **Console logging liberally** - Debug and understand behavior
- **Hardcoded values OK** - Configuration can come later
- **Skip comprehensive error handling** - Focus on happy path first
- **No unit tests required** - Manual testing is sufficient for spikes

## Experimentation Guidelines
- **Try multiple approaches** - Don't commit to first solution
- **Measure and compare** - Quantify performance differences
- **Document failures** - Failed experiments are valuable learning
- **Iterate quickly** - Bias toward action over planning

## Integration Patterns
- **Simple HTTP clients** - Basic fetch() calls for API testing
- **Direct library usage** - Skip dependency injection for now
- **Environment-specific paths** - Hardcode local file paths as needed
- **Quick setup scripts** - Automation for repetitive tasks

## Success Criteria
- **Learning achieved** - Did you understand the technology?
- **Questions answered** - Can you make informed architecture decisions?
- **Evidence gathered** - Do you have data to support recommendations?
- **Path forward clear** - What would you do differently in production?

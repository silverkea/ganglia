# Ganglia Spikes Plan

## Overview
Exploration spikes to evaluate SLMs and browser automation capabilities for the Ganglia project.

## Hardware Context
- AMD Ryzen 7 8845HS (8 cores, 16 threads)
- 32GB RAM
- AMD Radeon 780M Graphics (4GB VRAM)
- Focus on CPU inference with selective GPU acceleration

## Spike 1: SLM Inference Framework Setup
**Goal**: Get familiar with running vision models locally
**Framework**: Ollama (easiest setup, focus on learning)

**Tasks**:
- Install and configure Ollama
- Test basic text generation
- Download and run Phi-3.5-Vision model
- Basic vision capability testing with simple images

**Success Criteria**: Can generate responses from vision model with image + text input

## Spike 2: Vision Understanding Evaluation
**Goal**: Compare vision models' ability to understand web screenshots
**Framework**: Ollama (easy model switching for comparison)

**Models to Test**:
- Phi-3.5-Vision (4.2B)
- LLaVA-Next-7B
- LLaVA-Next-13B (if performance allows)
- Llama 3.2-Vision 11B (if available)
- MiniCPM-V 2.6 (efficiency focused)
- CogVLM2 (GUI specialist)
- InternVL 2.5 (vision benchmark leader)
- LLaVA-OneVision (latest iteration)

**Test Scenarios**:
- Simple web pages (login forms, buttons, menus)
- Complex layouts (e-commerce, dashboards)
- Element identification accuracy
- Description quality

**Success Criteria**: Identify which models best understand web UI elements

## Spike 3: Tool Calling & Structured Output
**Goal**: Evaluate models' ability to generate structured actions
**Framework**: Ollama (JSON prompting experiments)

**Test Cases**:
- "Click the login button" → `{"action": "click", "selector": "..."}`
- "Fill out the form" → Multiple structured actions
- Complex multi-step workflows

**Approaches to Test**:
- JSON schema prompting
- Function calling (if supported)
- Template-based output formatting

**Success Criteria**: Reliable structured output for browser actions

## Spike 4: Playwright Integration Basics
**Goal**: Understand browser automation capabilities
**Framework**: Playwright + TypeScript (no AI integration yet)

**Tasks**:
- Set up basic Playwright project
- Screenshot capture automation
- DOM extraction methods
- Basic action execution (click, type, scroll)

**Success Criteria**: Can programmatically capture page state and execute actions

## Spike 5: Multi-modal Integration
**Goal**: Combine vision + DOM analysis
**Framework**: Ollama API + Playwright (HTTP integration)

**Test Scenarios**:
- Screenshot + simplified DOM structure
- Element correlation between visual and structural data
- Performance with large DOM trees
- Context window limitations

**Success Criteria**: Models can effectively use both visual and structural information

## Spike 6: Performance & Optimization
**Goal**: Optimize for real-time browser automation
**Framework**: Evaluate llama.cpp or Transformers (direct integration)

**Areas to Explore**:
- Quantization impact on accuracy vs speed
- Context caching strategies
- Batch processing possibilities
- Memory usage patterns

**Success Criteria**: Achieve reasonable response times for interactive use

## Documentation & Decisions
- Document findings in this folder
- Record model performance comparisons
- Note integration challenges and solutions
- Recommend architecture decisions for main project

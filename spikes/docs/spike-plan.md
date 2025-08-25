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
- Phi-3 Vision (4.2B) - `ollama pull phi3:vision`
- LLaVA (7B) - `ollama pull llava`
- LLaVA (13B) - `ollama pull llava:13b` (if performance allows)
- Llama 3.2-Vision (11B) - `ollama pull llama3.2-vision` ✓ (already downloaded)
- MiniCPM-V (8B) - `ollama pull minicpm-v`
- Moondream (1.8B) - `ollama pull moondream` (ultra-fast baseline)
- LLaVA-Phi3 (3.8B) - `ollama pull llava-phi3` (efficiency focused)
- Qwen2.5-VL (7B) - `ollama pull qwen2.5vl:7b`

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

**Additional Models to Test** (Not available in Ollama):
- CogVLM2 (GUI specialist) - `THUDM/cogvlm2-llama3-chat-19B` via Transformers
- InternVL 2.5 (vision benchmark leader) - `OpenGVLab/InternVL2_5-8B` via Transformers
- LLaVA-OneVision (latest iteration) - `lmms-lab/llava-onevision-*` via Transformers

**Framework Comparison**:
- Ollama vs Transformers (Python) vs llama.cpp vs vLLM
- Setup complexity vs performance trade-offs
- Model availability and quantization options

**Success Criteria**: Achieve reasonable response times for interactive use

## Documentation & Decisions
- Document findings in this folder
- Record model performance comparisons
- Note integration challenges and solutions
- Recommend architecture decisions for main project

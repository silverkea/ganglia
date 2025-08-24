# Ganglia

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/your-username/your-repo)
[![NPM version](https://img.shields.io/npm/v/ganglia.svg?style=flat)](https://www.npmjs.com/package/ganglia)

An AI agent system for controlling web browsers through natural language commands, powered by a vision-capable Small Language Model (SLM) and Playwright.

## The Core Concept

Traditional browser automation relies on brittle selectors and predefined scripts. Ganglia takes a different approach, inspired by the distributed nervous system of an octopus. The user provides high-level commands (from the "central brain"), and Ganglia acts as a system of intelligent, semi-autonomous agents (the "ganglia").

Each agent uses local sensory information—screenshots and the live DOM—to understand the context of a web page and execute the user's intent. This model is ideal for complex workflows, potentially allowing each agent to manage its own context, such as a separate browser tab, enabling powerful multi-threaded automation.

## How It Works

Ganglia integrates a Small Language Model with Playwright's interactive mode. The control loop is simple yet powerful:

1.  **Observe:** The user provides a prompt (e.g., "Add the blue shirt to my cart"). Playwright captures a screenshot and a DOM snapshot of the current page.
2.  **Think:** The SLM receives the user's prompt, the screenshot, and the DOM structure. It analyzes this multi-modal input to determine the most appropriate action (e.g., `click`, `type`, `scroll`) and the target element.
3.  **Act:** The model's decision is translated into a command for a robust Playwright wrapper, which executes the action on the browser.
4.  **Repeat:** The browser state is updated, and the agent is ready for the next command.

## Features

* **Natural Language Control:** Navigate websites using simple text-based (and eventually voice) commands.
* **Multi-Tab/Context Awareness:** The architecture is designed to potentially manage multiple browser contexts simultaneously.
* **Visual Understanding:** The agents use screenshots to visually ground their understanding of the page layout.
* **DOM Awareness:** By combining visual data with the DOM, agents can accurately identify elements even without clear selectors.
* **Robust Automation:** Built on top of [Playwright](https://playwright.dev/) for reliable, modern browser control.
* **Tool-Augmented SLM:** The SLM is given a specific set of "tools" (e.g., `clickElement`, `typeText`) to ensure its actions are predictable and effective.

## Getting Started

This project is currently in early development. Installation instructions will be available here soon.


## Project Roadmap

-   [ ] Core engine for text-based command execution.
-   [ ] Initial implementation of the vision/DOM processing pipeline.
-   [ ] Support for a first open-source SLM (e.g., Phi-3, Llama 3).
-   [ ] Multi-tab management.
-   [ ] Voice-to-command input using a speech recognition API.
-   [ ] Visual feedback mechanism (e.g., highlighting the element an agent is about to interact with).
-   [ ] Support for more complex, multi-step tasks from a single command.


## License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for details.

Copyright © 2025, [Your Name or GitHub Handle]
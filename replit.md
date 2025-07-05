# Truth-or-Dare Core Package

## Overview

This repository contains a TypeScript npm package that provides core logic for truth-and-dare applications. The package is designed to be a reusable library that can be integrated into various truth-or-dare games, offering multi-language support, content filtering, and a structured approach to managing prompts.

## System Architecture

The system follows a modular architecture pattern with clear separation of concerns:

- **Core Logic Layer**: Contains the main business logic for prompt selection and validation
- **Data Layer**: JSON-based storage system organized by language, mode, and prompt type
- **Type System**: Comprehensive TypeScript interfaces ensuring type safety
- **API Layer**: Public interface for consumers of the package

The architecture prioritizes simplicity and maintainability while providing flexibility for different use cases.

## Key Components

### Core Module (`src/core.ts`)
- **Purpose**: Main business logic for loading and selecting prompts
- **Features**: File system operations, error handling, random selection algorithms
- **Design Decision**: Uses Node.js built-in modules to maintain zero external dependencies

### Type System (`src/types.ts`)
- **Purpose**: Defines all TypeScript interfaces and types
- **Components**: Language types, Mode types, Prompt interfaces, Configuration interfaces
- **Design Decision**: Strict typing to prevent runtime errors and improve developer experience

### Public API (`src/index.ts`)
- **Purpose**: Provides convenient functions for common operations
- **Features**: Default instance creation, wrapper functions for core operations
- **Design Decision**: Offers both instance-based and functional programming approaches

### Data Structure (`data/lang/`)
- **Organization**: Hierarchical structure by language → mode → type
- **Format**: JSON files containing arrays of prompt objects
- **Design Decision**: File-based storage for easy content management and version control

### Test Module (`src/test.ts`)
- **Purpose**: Comprehensive testing of all package functionality
- **Coverage**: Tests all public API functions and edge cases

## Data Flow

1. **Initialization**: TruthOrDareCore class loads with default or custom configuration
2. **Prompt Request**: User calls getTruth(), getDare(), or getRandom() with optional parameters
3. **File Loading**: System loads appropriate JSON file based on language/mode/type
4. **Validation**: Content is validated for structure and availability
5. **Selection**: Random prompt is selected from available options
6. **Response**: Formatted result is returned with metadata

## External Dependencies

The package maintains zero runtime dependencies, using only Node.js built-in modules:
- **fs**: File system operations for reading JSON data files
- **path**: Path manipulation for data file locations

Development dependencies:
- **TypeScript**: Language compiler and type checking
- **@types/node**: Type definitions for Node.js APIs

## Deployment Strategy

The package is designed for distribution via npm:
- **Build Target**: CommonJS modules for broad compatibility
- **Output**: Compiled JavaScript in `dist/` directory with declaration files
- **TypeScript Config**: Strict mode enabled with comprehensive error checking
- **Source Maps**: Generated for debugging support

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **July 05, 2025**: Complete TypeScript truth-or-dare-core package implementation
  - Built modular architecture with TypeScript strict typing
  - Implemented multi-language support (English, Spanish) with structured JSON data
  - Added SFW/NSFW content filtering modes  
  - Created comprehensive API with getTruth(), getDare(), getRandom() functions
  - Established hierarchical data structure: /data/lang/{language}/{mode}/{type}.json
  - Added error handling with fallbacks and custom TruthOrDareError class
  - Built comprehensive test suite with manual testing script
  - Created detailed README documentation with API reference
  - Package compiles successfully with TypeScript and runs without errors

## Changelog

- July 05, 2025: Initial setup and complete package implementation
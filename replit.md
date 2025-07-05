# Truth-or-Dare Core Package

## Overview

This repository contains a TypeScript npm package that provides core logic for truth-and-dare applications. The package is designed to be a reusable library that can be integrated into various truth-or-dare games, offering multi-language support, content filtering, and a structured approach to managing prompts.

## System Architecture

The system now follows a professional, production-ready layered architecture with clear separation of concerns:

### Layer Structure
- **Core Layer** (`src/lib/core/`): Main API orchestration and configuration management
- **Services Layer** (`src/lib/services/`): Business logic and domain operations  
- **Data Layer** (`src/lib/data/`): File system operations, caching, and data validation
- **Utils Layer** (`src/lib/utils/`): Reusable utilities like random selection algorithms
- **Types Layer** (`src/lib/types/`): Comprehensive TypeScript type definitions
- **Errors Layer** (`src/lib/errors/`): Structured error handling with custom error classes

### Professional Features
- **Caching System**: In-memory caching with statistics and management capabilities
- **Dependency Injection**: Services receive dependencies through constructors for testability
- **Error Handling**: Structured error codes with graceful fallbacks
- **Performance Optimization**: Sub-millisecond response times with efficient algorithms
- **Modular Design**: Each component has single responsibility and clear interfaces

The architecture is designed for enterprise use with scalability, maintainability, and extensibility as primary concerns.

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

- **July 05, 2025**: Professional architecture refactoring to production-ready structure
  - Reorganized into layered architecture with 6 distinct layers (Core, Services, Data, Utils, Types, Errors)
  - Implemented dependency injection pattern for better testability and maintainability
  - Added caching system with statistics and management capabilities
  - Created modular service classes with single responsibility principle
  - Enhanced error handling with structured error codes and custom error classes
  - Improved performance optimization with sub-millisecond response times
  - Added timing measurements to test suite showing 0-1ms execution times
  - Maintained full backward compatibility while improving internal structure
  - All 14 TypeScript files compile successfully with strict mode enabled

## Changelog

- July 05, 2025: Initial setup and complete package implementation
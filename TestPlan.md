# Test Plan for Yoma Web Application

## Test Scope

- **UI Testing**
    - Manual testing will be conducted to validate:
        - Page layout
        - Text content
        - Font style and size
        - Responsiveness of the website on both web and mobile devices with multiple screen sizes
        - Usability
        - Ad-hoc and exploratory testing

- **Functional Testing**
    - Automated testing will cover main functionalities, including:
        - Vehicle search capability based on time ranges
        - Scenarios for successful and unsuccessful searches
        - Registration features
        - Functional testing of buttons and their interactions

- **Performance Testing**
    - Performance testing will be conducted using K6 to simulate expected user load.
    - The aim is to ensure the application performs reliably under the estimated number of users.

## R&D Notes for Process Flow

1. **User Journey Mapping**: Define user personas and their expected interactions with the application.
2. **Feature Prioritization**: Identify high-impact features for testing based on user journey and business value.
3. **Testing Phases**: Plan testing in phases � starting with UI tests, followed by functional and performance testing.

## Test Suite

### UI Test Suite
- Verify page layout for desktop and mobile views.
- Validate text and font styles across multiple pages.
- Conduct usability testing sessions with real users.

### Functional Test Suite
- Test case for vehicle search functionality.
- Test case for successful registration flow.
- Test case for button functionality (e.g., login, sign-up).

### Test Case Template
1. **TC_UI_01**: Validate Home Page Layout on Desktop
2. **TC_UI_02**: Check Font Style and Size on Registration Page
3. **TC_FUNC_01**: Verify Vehicle Search Functionality with Valid Inputs
4. **TC_FUNC_02**: Validate Registration with All Required Fields Filled
5. **TC_PERF_01**: Load Test with 100 Concurrent Users on Search Functionality

## Testing Strategy

```mermaid
graph TD;
    A[Test Scope] -->|Includes| B[UI Testing];
    A -->|Includes| C[Functional Testing];
    A -->|Includes| D[Performance Testing];
    B --> E[Manual Testing];
    C --> F[Automated Testing];
    D --> G[Simulated User Load];
    E --> H[Layout Validation];
    E --> I[Responsive Testing];
    F --> J[Search Functionality];
    F --> K[Registration Functionality];
    G --> L[Expected User Scenarios];
```

## Conclusion
This test plan outlines the scope and strategy for testing the Yoma web application. The combination of manual and automated testing, alongside performance evaluation, aims to ensure a high-quality user experience and robust functionality.

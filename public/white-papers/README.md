# White Papers Directory

This directory contains PDF white papers that are referenced in the white papers page.

## File Structure

White papers should be named consistently with their ID from the white papers page:

- `ai-red-team-methodology.pdf`
- `ai-compliance-frameworks.pdf`
- `prompt-injection-defense.pdf`
- `ai-agent-security.pdf`
- `model-extraction-attacks.pdf`
- `ai-supply-chain-security.pdf`

## Adding New White Papers

1. Add the PDF file to this directory
2. Update the white papers data in `app/white-papers/page.tsx`
3. Ensure the filename matches the `downloadUrl` in the data structure
4. Update the categories array if adding a new category

## File Naming Convention

Use kebab-case for filenames:
- `ai-red-team-methodology.pdf`
- `prompt-injection-defense.pdf`
- `model-extraction-attacks.pdf`

## Metadata Requirements

Each white paper should include:
- Title
- Description
- Author
- Publication date
- Category
- Estimated read time
- Featured status (true/false)
- Appropriate icon component 
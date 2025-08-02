#!/usr/bin/env python3

import os
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
import io


def create_pdf_content(title, content, output_path):
    """Create PDF with content only"""

    doc = SimpleDocTemplate(output_path, pagesize=letter)
    styles = getSampleStyleSheet()
    story = []

    # Add title
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        spaceAfter=30,
        alignment=1  # Center alignment
    )
    story.append(Paragraph(title, title_style))
    story.append(Spacer(1, 0.5 * inch))

    # Process content lines
    lines = content.split('\n')
    for line in lines:
        line = line.strip()

        # Skip .md file references
        if '.md' in line or 'markdown' in line.lower():
            continue

        # Skip empty lines
        if not line:
            continue

        # Handle headers
        if line.startswith('#'):
            level = len(line) - len(line.lstrip('#'))
            header_text = line.lstrip('#').strip()
            if level == 1:
                style = styles['Heading1']
            elif level == 2:
                style = styles['Heading2']
            else:
                style = styles['Heading3']
            story.append(Paragraph(header_text, style))
            story.append(Spacer(1, 0.2 * inch))
        else:
            # Regular paragraph
            story.append(Paragraph(line, styles['Normal']))
            story.append(Spacer(1, 0.1 * inch))

    # Build the PDF
    doc.build(story)


def add_logo_to_pdf(pdf_path, logo_path):
    """Add logo overlay to existing PDF"""

    from PyPDF2 import PdfReader, PdfWriter

    # Create logo overlay
    logo_packet = io.BytesIO()
    logo_canvas = canvas.Canvas(logo_packet, pagesize=letter)

    # Add logo at the top center
    logo_width = 2.0 * inch
    logo_height = 0.6 * inch
    logo_x = (letter[0] - logo_width) / 2
    logo_y = letter[1] - logo_height - 0.5 * inch

    logo_canvas.drawImage(logo_path, logo_x, logo_y,
                          width=logo_width, height=logo_height)
    logo_canvas.save()

    # Read the PDF and add logo
    with open(pdf_path, 'rb') as file:
        pdf_reader = PdfReader(file)

    logo_packet.seek(0)
    logo_pdf = PdfReader(logo_packet)

    # Create new PDF with logo
    pdf_writer = PdfWriter()
    first_page = pdf_reader.pages[0]
    first_page.merge_page(logo_pdf.pages[0])
    pdf_writer.add_page(first_page)

    # Add remaining pages
    for i in range(1, len(pdf_reader.pages)):
        pdf_writer.add_page(pdf_reader.pages[i])

    # Write final PDF
    with open(pdf_path, 'wb') as output_file:
        pdf_writer.write(output_file)


def create_final_pdfs():
    """Create final clean PDFs with correct logo"""

    logo_path = "public/logos/new-logo.png"
    white_papers_dir = "public/white-papers"

    # Clean content for each white paper
    white_papers = {
        'what-is-ai-security.pdf': {
            'title': 'What is AI Security?',
            'content': '''
# What is AI Security?

AI Security encompasses the protection of artificial intelligence systems, their data, and the infrastructure that supports them from various threats and vulnerabilities.

## Key Components

### Model Security
Protecting AI models from adversarial attacks, data poisoning, and model extraction attempts.

### Data Security
Ensuring the confidentiality, integrity, and availability of training and inference data.

### Infrastructure Security
Securing the computational resources, APIs, and deployment environments for AI systems.

## Common Threats

- **Adversarial Attacks**: Manipulating inputs to cause incorrect outputs
- **Data Poisoning**: Corrupting training data to compromise model behavior
- **Model Extraction**: Stealing model architecture and parameters
- **Prompt Injection**: Manipulating AI system behavior through crafted inputs

## Best Practices

1. **Input Validation**: Validate and sanitize all inputs to AI systems
2. **Output Filtering**: Implement controls on AI system outputs
3. **Access Controls**: Restrict access to AI models and data
4. **Monitoring**: Continuously monitor AI system behavior and performance
5. **Regular Updates**: Keep AI systems and security measures current

## Implementation Strategy

Start with a comprehensive risk assessment of your AI systems, then implement security controls based on identified threats and vulnerabilities.
            '''
        },
        'ai-red-team-methodology.pdf': {
            'title': 'AI Red Team Testing Methodology',
            'content': '''
# AI Red Team Testing Methodology

A comprehensive approach to testing AI system security through adversarial simulation and penetration testing.

## Methodology Overview

### Planning Phase
- Define scope and objectives
- Identify critical AI systems and components
- Establish testing boundaries and constraints

### Reconnaissance
- Map AI system architecture and components
- Identify potential attack vectors and vulnerabilities
- Analyze system behavior and responses

### Attack Simulation
- Execute planned attack scenarios
- Test various adversarial techniques
- Document findings and impact assessment

## Testing Techniques

### Adversarial Input Testing
- Craft malicious inputs to test model robustness
- Evaluate system responses to edge cases
- Test input validation and sanitization

### Model Extraction Attempts
- Attempt to extract model parameters
- Test API rate limiting and access controls
- Evaluate model protection mechanisms

### Data Poisoning Simulation
- Test training data integrity controls
- Evaluate data validation processes
- Assess impact of corrupted training data

## Reporting and Remediation

Document all findings with detailed impact assessments and provide actionable remediation recommendations.
            '''
        },
        'ai-agent-security.pdf': {
            'title': 'AI Agent Security Framework',
            'content': '''
# AI Agent Security Framework

A comprehensive security framework for protecting autonomous AI agents and multi-agent systems.

## Framework Components

### Agent Architecture Security
- Secure agent communication protocols
- Authentication and authorization mechanisms
- Resource access controls and limits

### Behavioral Monitoring
- Real-time agent behavior analysis
- Anomaly detection and alerting
- Performance and security metrics tracking

### Risk Assessment
- Agent capability analysis
- Threat modeling for autonomous systems
- Impact assessment for agent actions

## Security Controls

### Access Controls
- Implement least privilege principles
- Use role-based access control (RBAC)
- Monitor and log all agent activities

### Communication Security
- Encrypt agent-to-agent communications
- Implement secure API authentication
- Use secure protocols for data exchange

### Resource Management
- Limit agent resource consumption
- Implement rate limiting and quotas
- Monitor resource usage patterns

## Incident Response

Develop specific response procedures for AI agent security incidents, including containment, investigation, and recovery processes.
            '''
        },
        'prompt-injection-defense.pdf': {
            'title': 'Advanced Prompt Injection Defense Strategies',
            'content': '''
# Advanced Prompt Injection Defense Strategies

Comprehensive strategies for defending against prompt injection attacks in AI systems.

## Understanding Prompt Injection

Prompt injection attacks manipulate AI system behavior by crafting malicious inputs that override intended instructions or constraints.

## Defense Strategies

### Input Validation and Sanitization
- Implement strict input validation rules
- Sanitize all user inputs before processing
- Use allowlist approaches for safe inputs

### Output Filtering
- Filter and validate AI system outputs
- Implement content moderation controls
- Use safety classifiers for output validation

### System Hardening
- Implement robust authentication mechanisms
- Use secure communication protocols
- Apply principle of least privilege

## Advanced Techniques

### Prompt Engineering
- Design robust prompt templates
- Implement prompt versioning and testing
- Use prompt injection testing frameworks

### Behavioral Monitoring
- Monitor AI system behavior patterns
- Implement anomaly detection systems
- Track and analyze user interactions

### Redundancy and Validation
- Use multiple AI models for validation
- Implement human oversight mechanisms
- Apply consensus-based decision making

## Implementation Guidelines

Start with basic input validation and gradually implement more advanced defense mechanisms based on your specific threat landscape.
            '''
        }
    }

    for pdf_file, content_data in white_papers.items():
        pdf_path = os.path.join(white_papers_dir, pdf_file)
        print(f"Creating {pdf_file}...")

        try:
            # Step 1: Create PDF with content
            create_pdf_content(
                content_data['title'],
                content_data['content'],
                pdf_path
            )
            print(f"  ✓ Created content for {pdf_file}")

            # Step 2: Add logo overlay
            add_logo_to_pdf(pdf_path, logo_path)
            print(f"  ✓ Added logo to {pdf_file}")

        except Exception as e:
            print(f"  ✗ Error creating {pdf_file}: {e}")

    print("PDF creation complete!")


if __name__ == "__main__":
    create_final_pdfs()

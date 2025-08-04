#!/usr/bin/env python3
import re
import sys

def fix_mdx_structure(content):
    """Fix various MDX structural issues."""
    
    # Fix 1: Remove standalone <div></div> tags that are likely errors
    content = re.sub(r'\n<div></div>\n', '\n', content)
    
    # Fix 2: Fix the defensive prompt stack visualization
    # This appears to be a diagram that's been incorrectly formatted
    defensive_stack_pattern = r'<div className="text-gray-400 mb-3"> Defensive Prompt Stack:</div>\n\n<div>.*?<div className="text-blue-400 mt-4">//.*?</div>'
    defensive_stack_replacement = '''<div className="text-gray-400 mb-3">Defensive Prompt Stack:</div>

<pre className="bg-gray-900 text-gray-300 p-4 rounded">
           Output Sanitization                 Final defense
           Response Validation                 Format enforcement
            Core Instructions                  Protected logic
           Input Processing                    Sanitization layer
           Context Injection                   Attack surface

// Each layer provides specific protection
</pre>'''
    content = re.sub(defensive_stack_pattern, defensive_stack_replacement, content, flags=re.DOTALL)
    
    # Fix 3: Fix code blocks that are incorrectly wrapped in divs
    # Pattern: <div className="text-gray-400">#...</div><div>code</div>
    content = re.sub(
        r'<div className="text-gray-400">(#[^<]+)</div>\s*\n\s*<div>([^<]+)</div>',
        r'```python\n\1\n\2\n```',
        content
    )
    
    # Fix 4: Fix prompt examples that are in divs
    content = re.sub(
        r'<div>SYSTEM: \[\.\.\.instructions\.\.\.\]</div>\s*\n\s*<div>USER: \[untrusted input\]</div>\s*\n\s*<div>ASSISTANT: \[response\]</div>',
        r'''```
SYSTEM: [...instructions...]
USER: [untrusted input]
ASSISTANT: [response]
```''',
        content
    )
    
    # Fix 5: Fix XML-style examples
    content = re.sub(
        r'<div>&lt;system&gt;instructions&lt;/system&gt;</div>\s*\n\s*<div>&lt;user&gt;input&lt;/user&gt;</div>\s*\n\s*<div>&lt;constraints&gt;rules&lt;/constraints&gt;</div>',
        r'''```xml
<system>instructions</system>
<user>input</user>
<constraints>rules</constraints>
```''',
        content
    )
    
    # Fix 6: Fix bracket-style examples
    content = re.sub(
        r'<div>\[INST\] system prompt \[/INST\]</div>\s*\n\s*<div>\[USER\] user input \[/USER\]</div>\s*\n\s*<div>\[RULES\] constraints \[/RULES\]</div>',
        r'''```
[INST] system prompt [/INST]
[USER] user input [/USER]
[RULES] constraints [/RULES]
```''',
        content
    )
    
    # Fix 7: Fix Python code that's split across divs
    code_pattern = r'<div className="text-gray-400">(#[^<]+)</div>\s*\n\s*<div>def sanitize_input.*?return cleaned</div>'
    code_replacement = '''```python
# Comprehensive input sanitization
def sanitize_input(user_input: str) -> str:
    # Stage 1: Basic cleaning
    cleaned = remove_control_chars(user_input)
    cleaned = normalize_whitespace(cleaned)
    
    # Stage 2: Injection detection
    if detect_instruction_injection(cleaned):
        raise SecurityError("Injection attempt detected")
    
    # Stage 3: Content filtering
    cleaned = escape_special_tokens(cleaned)
    cleaned = remove_system_commands(cleaned)
    
    # Stage 4: Length and format validation
    if len(cleaned) > MAX_INPUT_LENGTH:
        raise ValidationError("Input too long")
    
    return cleaned
```'''
    content = re.sub(code_pattern, code_replacement, content, flags=re.DOTALL)
    
    # Fix 8: Fix Python string examples in divs
    content = re.sub(
        r'<div>SYSTEM_CONTEXT = """</div>\s*\n\s*<div>([^<]+)</div>\s*\n\s*<div>"""</div>',
        r'```python\nSYSTEM_CONTEXT = """\n\1\n"""\n```',
        content
    )
    
    content = re.sub(
        r'<div>USER_INPUT = f"""</div>\s*\n\s*<div>([^<]+)</div>\s*\n\s*<div>"""</div>',
        r'```python\nUSER_INPUT = f"""\n\1\n"""\n```',
        content
    )
    
    content = re.sub(
        r'<div>RESPONSE_FORMAT = """</div>\s*\n\s*<div>([^<]+)</div>\s*\n\s*<div>"""</div>',
        r'```python\nRESPONSE_FORMAT = """\n\1\n"""\n```',
        content
    )
    
    # Fix 9: Clean up any remaining empty div pairs
    content = re.sub(r'\n\s*<div>\s*</div>\s*\n', '\n', content)
    
    return content

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python fix-mdx-structure-comprehensive.py <file.mdx>")
        sys.exit(1)
    
    filepath = sys.argv[1]
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    fixed_content = fix_mdx_structure(content)
    
    if fixed_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"Fixed structural issues in {filepath}")
    else:
        print(f"No structural issues found in {filepath}")
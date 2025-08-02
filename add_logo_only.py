#!/usr/bin/env python3

import os
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
import io


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


def add_logos_to_all_pdfs():
    """Add logo to all PDFs"""

    logo_path = "public/logos/new-logo.png"
    white_papers_dir = "public/white-papers"

    # Get all PDF files
    pdf_files = [f for f in os.listdir(white_papers_dir) if f.endswith(
        '.pdf') and not f.endswith('.temp')]

    for pdf_file in pdf_files:
        pdf_path = os.path.join(white_papers_dir, pdf_file)
        print(f"Adding logo to {pdf_file}...")

        try:
            add_logo_to_pdf(pdf_path, logo_path)
            print(f"  ✓ Added logo to {pdf_file}")
        except Exception as e:
            print(f"  ✗ Error adding logo to {pdf_file}: {e}")

    print("Logo addition complete!")


if __name__ == "__main__":
    add_logos_to_all_pdfs()

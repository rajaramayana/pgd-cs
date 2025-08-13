from flask import Flask, render_template, request, jsonify, send_file, make_response
from flask_cors import CORS
import os
import sqlite3
from datetime import datetime
import io
from reportlab.lib.pagesizes import letter, A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
import uuid

app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app)

# Database setup
def init_db():
    conn = sqlite3.connect('pgdcs.db')
    cursor = conn.cursor()
    
    # Create inquiries table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS inquiries (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Create downloads table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS downloads (
            id TEXT PRIMARY KEY,
            type TEXT NOT NULL,
            course_code TEXT,
            email TEXT,
            downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    conn.commit()
    conn.close()

# Course data
COURSES_DATA = {
    'PGDCS101': {
        'code': 'PGDCS 101',
        'title': 'Fundamentals of Cyber Security',
        'credits': 3,
        'hours': '48 (Theory) + 24 (Lab)',
        'objectives': [
            'Provide a broad understanding of cybersecurity principles and practices',
            'Familiarize students with threats, vulnerabilities, and risk management',
            'Introduce foundational cryptographic techniques and applications',
            'Present relevant laws, ethical guidelines, and professional responsibilities',
            'Introduce Python scripting for basic security tasks'
        ],
        'outcomes': [
            'Explain fundamental cybersecurity concepts and terminology',
            'Identify and classify cyber threats and vulnerabilities',
            'Apply basic security controls and policy frameworks',
            'Understand and explain basic cryptographic methods',
            'Write Python scripts for simple cybersecurity tasks'
        ],
        'units': [
            {
                'title': 'Introduction to Cyber Security',
                'hours': 6,
                'content': 'Definition, scope, and importance of cybersecurity; CIA triad; Security goals; Cybersecurity lifecycle; Overview of recent global and Nepal-specific cyber incidents; Career opportunities in cybersecurity.'
            },
            {
                'title': 'Cyber Threats and Attack Vectors',
                'hours': 8,
                'content': 'Types of threats: malware, phishing, ransomware, DoS/DDoS, MITM, SQL injection; Threat actors and motivations; Social engineering techniques; Real-world attack case studies.'
            }
        ],
        'labs': [
            'Password Strength Checker — Write a program to evaluate password strength',
            'Simple Port Scanner — Use socket to scan ports on a given IP',
            'File Hash Generator — Generate MD5, SHA1, and SHA256 hashes for files'
        ]
    },
    'PGDCS102': {
        'code': 'PGDCS 102',
        'title': 'Python Programming for Cybersecurity',
        'credits': 3,
        'hours': '48 (Theory) + 24 (Lab)',
        'objectives': [
            'Introduce Python programming fundamentals for cybersecurity applications',
            'Teach data structures, control flow, and file handling in Python',
            'Familiarize students with Python libraries relevant to cybersecurity'
        ],
        'outcomes': [
            'Write Python programs using proper syntax and programming constructs',
            'Implement data structures and algorithms for security applications',
            'Use Python libraries for networking, cryptography, and system administration'
        ],
        'units': [
            {
                'title': 'Python Basics and Environment Setup',
                'hours': 6,
                'content': 'Python installation and IDE setup; Python syntax, variables, and data types; Input/output operations'
            },
            {
                'title': 'Control Structures and Functions',
                'hours': 8,
                'content': 'Conditional statements; Loops; Function definition and calling; Parameters and return values'
            }
        ],
        'labs': [
            'Basic Python Calculator — Create a calculator for cybersecurity calculations',
            'File System Scanner — Python script to scan directories and report file information',
            'Network Port Scanner — Implement a multi-threaded port scanner'
        ]
    }
}

def generate_course_pdf(course_code):
    """Generate PDF for individual course syllabus"""
    course_data = COURSES_DATA.get(course_code.replace(' ', '').upper())
    if not course_data:
        return None
    
    buffer = io.BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=A4, topMargin=1*inch)
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=18,
        textColor=colors.HexColor('#1e40af'),
        spaceAfter=30
    )
    
    heading_style = ParagraphStyle(
        'CustomHeading',
        parent=styles['Heading2'],
        fontSize=14,
        textColor=colors.HexColor('#1f2937'),
        spaceAfter=12
    )
    
    content = []
    
    # Title
    title = f"{course_data['code']}: {course_data['title']}"
    content.append(Paragraph(title, title_style))
    content.append(Paragraph(f"Credits: {course_data['credits']} | Hours: {course_data['hours']}", styles['Normal']))
    content.append(Spacer(1, 20))
    
    # Objectives
    content.append(Paragraph("Course Objectives", heading_style))
    for obj in course_data['objectives']:
        content.append(Paragraph(f"• {obj}", styles['Normal']))
    content.append(Spacer(1, 15))
    
    # Outcomes
    content.append(Paragraph("Course Learning Outcomes", heading_style))
    for outcome in course_data['outcomes']:
        content.append(Paragraph(f"• {outcome}", styles['Normal']))
    content.append(Spacer(1, 15))
    
    # Units
    content.append(Paragraph("Course Units", heading_style))
    for i, unit in enumerate(course_data['units'], 1):
        content.append(Paragraph(f"Unit {i}: {unit['title']} ({unit['hours']} hours)", styles['Heading3']))
        content.append(Paragraph(unit['content'], styles['Normal']))
        content.append(Spacer(1, 10))
    
    # Lab Experiments
    if course_data['labs']:
        content.append(Paragraph("Laboratory Experiments", heading_style))
        for lab in course_data['labs']:
            content.append(Paragraph(f"• {lab}", styles['Normal']))
    
    doc.build(content)
    buffer.seek(0)
    return buffer

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/inquiries', methods=['POST'])
def create_inquiry():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'phone', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        # Insert into database
        conn = sqlite3.connect('pgdcs.db')
        cursor = conn.cursor()
        
        inquiry_id = str(uuid.uuid4())
        cursor.execute('''
            INSERT INTO inquiries (id, name, email, phone, message)
            VALUES (?, ?, ?, ?, ?)
        ''', (inquiry_id, data['name'], data['email'], data['phone'], data['message']))
        
        conn.commit()
        conn.close()
        
        return jsonify({'message': 'Inquiry submitted successfully', 'id': inquiry_id}), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/download/brochure', methods=['POST'])
def download_brochure():
    try:
        data = request.get_json() or {}
        email = data.get('email')
        
        # Track download
        conn = sqlite3.connect('pgdcs.db')
        cursor = conn.cursor()
        download_id = str(uuid.uuid4())
        cursor.execute('''
            INSERT INTO downloads (id, type, email)
            VALUES (?, ?, ?)
        ''', (download_id, 'brochure', email))
        conn.commit()
        conn.close()
        
        # Generate brochure PDF (simplified version)
        buffer = io.BytesIO()
        doc = SimpleDocTemplate(buffer, pagesize=A4)
        styles = getSampleStyleSheet()
        
        content = [
            Paragraph("Post Graduate Diploma in Cyber Security (PGDCS)", styles['Title']),
            Spacer(1, 20),
            Paragraph("Program Overview", styles['Heading1']),
            Paragraph("Duration: 1 Year (2 Semesters)", styles['Normal']),
            Paragraph("Total Credits: 30", styles['Normal']),
            Paragraph("Mode: Practical-oriented with Python-based labs", styles['Normal']),
            Spacer(1, 20),
            Paragraph("Career Opportunities", styles['Heading1']),
            Paragraph("• Cybersecurity Analyst", styles['Normal']),
            Paragraph("• Network Security Administrator", styles['Normal']),
            Paragraph("• Information Security Officer", styles['Normal']),
            Paragraph("• Digital Forensics Analyst", styles['Normal']),
        ]
        
        doc.build(content)
        buffer.seek(0)
        
        response = make_response(buffer.getvalue())
        response.headers['Content-Type'] = 'application/pdf'
        response.headers['Content-Disposition'] = 'attachment; filename=PGDCS-Brochure.pdf'
        
        return response
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/download/course/<course_code>', methods=['POST'])
def download_course_syllabus(course_code):
    try:
        data = request.get_json() or {}
        email = data.get('email')
        
        # Track download
        conn = sqlite3.connect('pgdcs.db')
        cursor = conn.cursor()
        download_id = str(uuid.uuid4())
        cursor.execute('''
            INSERT INTO downloads (id, type, course_code, email)
            VALUES (?, ?, ?, ?)
        ''', (download_id, 'course', course_code, email))
        conn.commit()
        conn.close()
        
        # Generate course PDF
        pdf_buffer = generate_course_pdf(course_code)
        if not pdf_buffer:
            return jsonify({'error': 'Course not found'}), 404
        
        response = make_response(pdf_buffer.getvalue())
        response.headers['Content-Type'] = 'application/pdf'
        response.headers['Content-Disposition'] = f'attachment; filename={course_code}-Syllabus.pdf'
        
        return response
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/downloads/stats')
def download_stats():
    try:
        conn = sqlite3.connect('pgdcs.db')
        cursor = conn.cursor()
        
        cursor.execute('SELECT type, COUNT(*) FROM downloads GROUP BY type')
        results = cursor.fetchall()
        
        stats = {
            'total': 0,
            'brochure': 0,
            'course': 0
        }
        
        for row in results:
            stats[row[0]] = row[1]
            stats['total'] += row[1]
        
        conn.close()
        return jsonify(stats)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    init_db()
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
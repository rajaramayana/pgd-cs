import PDFDocument from 'pdfkit';

interface CourseContent {
  code: string;
  title: string;
  credits: number;
  hours: string;
  objectives: string[];
  outcomes: string[];
  units: { title: string; hours: number; content: string }[];
  labExperiments: string[];
  referenceBooks: string[];
}

const courseContents: Record<string, CourseContent> = {
  'PGDCS101': {
    code: 'PGDCS 101',
    title: 'Fundamentals of Cyber Security',
    credits: 3,
    hours: '48 (Theory) + 24 (Lab)',
    objectives: [
      'Provide a broad understanding of cybersecurity principles and practices',
      'Familiarize students with threats, vulnerabilities, and risk management',
      'Introduce foundational cryptographic techniques and applications',
      'Present relevant laws, ethical guidelines, and professional responsibilities',
      'Introduce Python scripting for basic security tasks'
    ],
    outcomes: [
      'Explain fundamental cybersecurity concepts and terminology',
      'Identify and classify cyber threats and vulnerabilities',
      'Apply basic security controls and policy frameworks',
      'Understand and explain basic cryptographic methods',
      'Write Python scripts for simple cybersecurity tasks'
    ],
    units: [
      {
        title: 'Introduction to Cyber Security',
        hours: 6,
        content: 'Definition, scope, and importance of cybersecurity; CIA triad; Security goals; Cybersecurity lifecycle; Overview of recent global and Nepal-specific cyber incidents; Career opportunities in cybersecurity.'
      },
      {
        title: 'Cyber Threats and Attack Vectors',
        hours: 8,
        content: 'Types of threats: malware, phishing, ransomware, DoS/DDoS, MITM, SQL injection; Threat actors and motivations; Social engineering techniques; Real-world attack case studies.'
      },
      {
        title: 'Vulnerabilities and Risk Management',
        hours: 7,
        content: 'Types of vulnerabilities (software, hardware, human); Vulnerability assessment tools; Risk assessment methodology; Risk mitigation strategies; Security controls — administrative, technical, and physical.'
      },
      {
        title: 'Security Policies, Standards, and Frameworks',
        hours: 7,
        content: 'Role of policies and guidelines; Developing security policies; Overview of ISO 27001, NIST Cybersecurity Framework, CERT; Incident response planning; Basics of business continuity and disaster recovery.'
      },
      {
        title: 'Basics of Cryptography',
        hours: 8,
        content: 'Importance of cryptography; Symmetric vs asymmetric encryption; Overview of AES, RSA, ECC; Hashing algorithms (SHA family, MD5); Digital signatures; PKI; Common Python libraries for cryptography (hashlib, PyCryptodome).'
      },
      {
        title: 'Ethical, Legal, and Professional Issues',
        hours: 6,
        content: 'Cyber laws in Nepal; International regulations (GDPR, HIPAA); Privacy protection; Intellectual property rights; Ethical hacking principles; Responsible vulnerability disclosure.'
      },
      {
        title: 'Introduction to Python for Cybersecurity',
        hours: 6,
        content: 'Python basics: syntax, variables, loops, functions; File handling; Exception handling; Networking with socket; Hashing with hashlib; Example scripts — password strength checker, port scanner, file integrity checker.'
      }
    ],
    labExperiments: [
      'Password Strength Checker — Write a program to evaluate password strength using length, character diversity, and common word checks',
      'Simple Port Scanner — Use socket to scan a range of ports on a given IP and identify open ports',
      'File Hash Generator — Generate MD5, SHA1, and SHA256 hashes for a given file using hashlib',
      'File Integrity Verification — Compare original and current file hashes to detect file tampering',
      'Basic Packet Sniffer — Capture and display packet details using scapy',
      'Phishing Email Detector — Identify suspicious keywords and URLs from sample email text',
      'Log File Analyzer — Parse sample log files to detect failed login attempts or unusual access patterns'
    ],
    referenceBooks: [
      'Stallings, W. (2018). Computer Security: Principles and Practice (4th ed.). Pearson.',
      'Pfleeger, C., Pfleeger, S., & Margulies, J. (2015). Security in Computing (5th ed.). Pearson.',
      'Andress, J. (2019). Foundations of Information Security: A Straightforward Introduction. No Starch Press.',
      'Grimes, R. (2021). Cybersecurity for Beginners. Apress.',
      'Dowd, M., McDonald, J., Schuh, J. (2009). The Art of Software Security Assessment. Addison-Wesley.'
    ]
  },
  'PGDCS102': {
    code: 'PGDCS 102',
    title: 'Python Programming for Cybersecurity',
    credits: 3,
    hours: '48 (Theory) + 24 (Lab)',
    objectives: [
      'Introduce Python programming fundamentals for cybersecurity applications',
      'Teach data structures, control flow, and file handling in Python',
      'Familiarize students with Python libraries relevant to cybersecurity',
      'Enable students to write Python scripts for security automation',
      'Prepare students for advanced Python-based security courses'
    ],
    outcomes: [
      'Write Python programs using proper syntax and programming constructs',
      'Implement data structures and algorithms for security applications',
      'Use Python libraries for networking, cryptography, and system administration',
      'Develop automation scripts for cybersecurity tasks',
      'Debug and test Python programs effectively'
    ],
    units: [
      {
        title: 'Python Basics and Environment Setup',
        hours: 6,
        content: 'Python installation and IDE setup; Python syntax, variables, and data types; Input/output operations; Comments and documentation; Running Python scripts.'
      },
      {
        title: 'Control Structures and Functions',
        hours: 8,
        content: 'Conditional statements (if, elif, else); Loops (for, while); Break and continue; Function definition and calling; Parameters, arguments, and return values; Lambda functions.'
      },
      {
        title: 'Data Structures',
        hours: 8,
        content: 'Lists, tuples, dictionaries, and sets; String manipulation and formatting; List comprehensions; Working with JSON data; File I/O operations.'
      },
      {
        title: 'Error Handling and Modules',
        hours: 6,
        content: 'Exception handling with try-except; Creating and importing modules; Package management with pip; Virtual environments; Code organization best practices.'
      },
      {
        title: 'Networking with Python',
        hours: 8,
        content: 'Socket programming basics; TCP and UDP communication; HTTP requests with requests library; Web scraping fundamentals; Network automation scripts.'
      },
      {
        title: 'Python for System Administration',
        hours: 6,
        content: 'Operating system interface (os module); File system operations; Process management; System monitoring; Log file processing; Regular expressions.'
      },
      {
        title: 'Cybersecurity Libraries and Tools',
        hours: 6,
        content: 'Introduction to scapy for packet manipulation; hashlib for cryptographic hashing; requests for web interactions; paramiko for SSH connections; Basic automation scripts.'
      }
    ],
    labExperiments: [
      'Basic Python Calculator — Create a calculator with functions for cybersecurity calculations',
      'File System Scanner — Python script to scan directories and report file information',
      'Network Port Scanner — Implement a multi-threaded port scanner using socket',
      'Password Generator — Create secure passwords with customizable complexity',
      'Log File Parser — Extract and analyze security events from log files',
      'Web Request Analyzer — Monitor and analyze HTTP/HTTPS requests',
      'System Information Collector — Gather system details for security assessment'
    ],
    referenceBooks: [
      'Sweigart, A. (2019). Automate the Boring Stuff with Python (2nd ed.). No Starch Press.',
      'Pathan, A. K. (2019). Python for Cybersecurity. CRC Press.',
      'Lutz, M. (2013). Learning Python (5th ed.). O\'Reilly Media.',
      'McKinney, W. (2017). Python for Data Analysis (2nd ed.). O\'Reilly Media.',
      'Beazley, D., & Jones, B. K. (2013). Python Cookbook (3rd ed.). O\'Reilly Media.'
    ]
  },
  'PGDCS103': {
    code: 'PGDCS 103',
    title: 'Fundamentals of Cryptography',
    credits: 3,
    hours: '48 (Theory) + 24 (Lab)',
    objectives: [
      'Introduce students to the core concepts and principles of cryptography',
      'Provide an understanding of both classical and modern cryptographic techniques',
      'Explain how cryptography ensures confidentiality, integrity, and authentication',
      'Equip students to implement cryptographic algorithms using Python',
      'Prepare students for advanced security courses and applied cryptography applications'
    ],
    outcomes: [
      'Explain fundamental cryptographic concepts and terminology',
      'Differentiate between symmetric and asymmetric encryption',
      'Apply hashing, encryption, and digital signatures for security',
      'Implement cryptographic algorithms in Python',
      'Evaluate the strengths and weaknesses of different cryptographic methods'
    ],
    units: [
      {
        title: 'Introduction to Cryptography',
        hours: 6,
        content: 'Definition and importance of cryptography; Historical background; Role in cybersecurity; Terminology (plaintext, ciphertext, key, algorithm); CIA triad in relation to cryptography.'
      },
      {
        title: 'Classical Cryptography',
        hours: 6,
        content: 'Substitution ciphers (Caesar, Monoalphabetic, Vigenère); Transposition ciphers; Cryptanalysis of classical ciphers; Python implementation of basic ciphers.'
      },
      {
        title: 'Symmetric Key Cryptography',
        hours: 8,
        content: 'Stream and block ciphers; DES, 3DES, AES; Modes of operation (ECB, CBC, CTR); Key generation and management; Security considerations.'
      },
      {
        title: 'Asymmetric Key Cryptography',
        hours: 8,
        content: 'RSA algorithm: key generation, encryption, decryption; Diffie–Hellman key exchange; Elliptic Curve Cryptography (ECC) basics; Applications in secure communications.'
      },
      {
        title: 'Hash Functions and Message Authentication',
        hours: 8,
        content: 'Hashing algorithms: MD5, SHA-1, SHA-2, SHA-3; HMAC; Collision resistance; Password hashing and salting; Integrity verification.'
      },
      {
        title: 'Digital Signatures and Certificates',
        hours: 6,
        content: 'Digital signature process; RSA-based signatures; ECDSA basics; Certificate Authorities (CA); Public Key Infrastructure (PKI); SSL/TLS basics.'
      },
      {
        title: 'Cryptography in Practice',
        hours: 6,
        content: 'Python cryptography libraries (hashlib, PyCryptodome); Encrypting/decrypting files; Secure password storage; Best practices and common pitfalls in cryptographic implementations.'
      }
    ],
    labExperiments: [
      'Implement Caesar Cipher — Encrypt and decrypt text using Caesar Cipher and allow variable key shifts',
      'Vigenère Cipher in Python — Implement encryption and decryption with a given keyword',
      'AES File Encryption/Decryption — Use PyCryptodome to encrypt and decrypt a text file',
      'RSA Key Generation and Encryption — Generate RSA keys, encrypt a message, and decrypt it',
      'Hashing Utility — Generate MD5, SHA1, and SHA256 hashes of files using hashlib',
      'Password Storage with Salting — Store user passwords securely with salt and hash',
      'Digital Signature Verification — Sign a message with a private key and verify it with the public key'
    ],
    referenceBooks: [
      'Stallings, W. (2017). Cryptography and Network Security: Principles and Practice (7th ed.). Pearson.',
      'Paar, C., & Pelzl, J. (2010). Understanding Cryptography: A Textbook for Students and Practitioners. Springer.',
      'Schneier, B. (2015). Applied Cryptography (20th Anniversary ed.). Wiley.',
      'Katz, J., & Lindell, Y. (2020). Introduction to Modern Cryptography (3rd ed.). CRC Press.',
      'Ferguson, N., Schneier, B., & Kohno, T. (2010). Cryptography Engineering: Design Principles and Practical Applications. Wiley.'
    ]
  },
  'PGDCS104': {
    code: 'PGDCS 104',
    title: 'Database Management Systems (with Security)',
    credits: 3,
    hours: '48 (Theory) + 24 (Lab)',
    objectives: [
      'Introduce fundamental concepts of database systems and relational databases',
      'Teach students how to design, implement, and query databases',
      'Explain database security principles and common vulnerabilities',
      'Enable students to integrate databases with Python for secure applications',
      'Prepare students to implement practical security controls in database management'
    ],
    outcomes: [
      'Explain the basic concepts of relational database systems',
      'Design relational database schemas using normalization techniques',
      'Write SQL queries to retrieve and manipulate data',
      'Identify common database security threats and implement mitigation measures',
      'Integrate Python with databases for secure data access'
    ],
    units: [
      {
        title: 'Introduction to Database Systems',
        hours: 6,
        content: 'Database concepts and architecture; Types of databases (relational, NoSQL); DBMS vs file-based systems; Roles of DBAs and security administrators.'
      },
      {
        title: 'Relational Model and Database Design',
        hours: 7,
        content: 'Entities, attributes, relationships; Primary and foreign keys; Normalization (1NF, 2NF, 3NF); ER diagrams; Designing secure databases.'
      },
      {
        title: 'SQL Basics',
        hours: 8,
        content: 'Data definition language (DDL); Data manipulation language (DML); SELECT, INSERT, UPDATE, DELETE statements; Joins, subqueries, aggregation functions; Views and stored procedures.'
      },
      {
        title: 'Advanced SQL and Transactions',
        hours: 7,
        content: 'Transactions and ACID properties; Concurrency control; Locks; Indexing; Triggers; Stored procedures for security enforcement.'
      },
      {
        title: 'Database Security Concepts',
        hours: 8,
        content: 'Authentication and authorization; User roles and privileges; SQL injection attacks; Preventing SQL injection; Data encryption at rest and in transit; Backup and recovery strategies.'
      },
      {
        title: 'Database Integration with Python',
        hours: 6,
        content: 'Python libraries: sqlite3, mysql.connector, SQLAlchemy; Connecting and querying databases; Error handling and transaction management; Safe data access and parameterized queries.'
      },
      {
        title: 'Case Studies and Best Practices',
        hours: 6,
        content: 'Real-world database security breaches; Lessons learned; Best practices for secure database design; Implementing logging and audit trails.'
      }
    ],
    labExperiments: [
      'Database Creation and Table Design — Create tables using SQL commands and define primary/foreign keys',
      'Data Manipulation — Insert, update, delete, and query records using Python and SQL',
      'Joins and Aggregations — Perform inner, outer, and cross joins; aggregate data using Python',
      'Stored Procedures and Triggers — Implement triggers for automatic logging of changes',
      'SQL Injection Demonstration — Demonstrate and prevent SQL injection attacks',
      'User Role Management — Create users with different privileges and test access control',
      'Database Backup and Recovery — Perform backup, restore, and verify data integrity using Python scripts'
    ],
    referenceBooks: [
      'Elmasri, R., & Navathe, S. B. (2015). Fundamentals of Database Systems (7th ed.). Pearson.',
      'Silberschatz, A., Korth, H., & Sudarshan, S. (2019). Database System Concepts (7th ed.). McGraw-Hill.',
      'Rob, P., & Coronel, C. (2018). Database Systems: Design, Implementation, & Management (13th ed.). Cengage.',
      'Garcia-Molina, H., Ullman, J. D., & Widom, J. (2009). Database Systems: The Complete Book (2nd ed.). Pearson.',
      'Harrison, J. (2016). SQL & Python for Beginners. Packt Publishing.'
    ]
  },
  'PGDCS105': {
    code: 'PGDCS 105',
    title: 'Computer Networks & Operating Systems',
    credits: 3,
    hours: '48 (Theory) + 24 (Lab)',
    objectives: [
      'Introduce fundamental concepts of computer networks and operating systems',
      'Teach network architectures, protocols, and OS services relevant to cybersecurity',
      'Explain how operating systems manage resources and provide security features',
      'Enable students to implement basic network and OS-related security tasks using Python',
      'Prepare students for advanced network and system security courses'
    ],
    outcomes: [
      'Explain basic concepts of computer networks and operating systems',
      'Understand network layers, protocols, and OS functions',
      'Analyze and troubleshoot network and OS-related security issues',
      'Implement basic Python scripts for network scanning, monitoring, and OS automation',
      'Apply OS and network security concepts in real-world scenarios'
    ],
    units: [
      {
        title: 'Introduction to Computer Networks',
        hours: 6,
        content: 'Network definition and types (LAN, WAN, MAN, WLAN); Network topologies; OSI and TCP/IP models; Networking devices (routers, switches, hubs); IP addressing and subnetting basics.'
      },
      {
        title: 'Network Protocols and Communication',
        hours: 7,
        content: 'TCP, UDP, ICMP, HTTP, HTTPS, FTP, DNS; Packet structure; Protocol operations; Introduction to sockets; Python socket programming examples.'
      },
      {
        title: 'Network Security Basics',
        hours: 7,
        content: 'Firewalls, NAT, VPNs, IDS/IPS; Common attacks (DoS, sniffing, spoofing); Secure communication protocols; Python scripts for simple network scanning and monitoring.'
      },
      {
        title: 'Introduction to Operating Systems',
        hours: 6,
        content: 'Definition, types of OS (Windows, Linux, macOS); OS architecture and components; Processes, threads, and multitasking; Memory management; File systems.'
      },
      {
        title: 'OS Security and Access Control',
        hours: 7,
        content: 'User accounts and authentication; File and directory permissions; OS-level security tools; Logging and auditing; Python scripts for checking system status and access permissions.'
      },
      {
        title: 'Process and Resource Management',
        hours: 7,
        content: 'Process lifecycle, scheduling, CPU and memory allocation; Deadlocks and resource management; Monitoring system resources; Automating resource monitoring with Python.'
      },
      {
        title: 'Case Studies and Practical Applications',
        hours: 8,
        content: 'Real-world network and OS security breaches; Lessons learned; Best practices for securing networks and systems; Integrating Python for automation, monitoring, and basic incident response.'
      }
    ],
    labExperiments: [
      'Ping Sweep Script — Use Python to check the availability of multiple hosts in a network',
      'Port Scanner — Scan a range of TCP/UDP ports on a host using Python socket',
      'Packet Sniffer — Capture and display network packet headers using Python (scapy)',
      'File Permission Checker — Python script to verify and report file/directory permissions',
      'Process Monitor — Monitor running processes and CPU/memory usage using Python (psutil)',
      'Simple Network Chat Program — Implement a TCP-based chat to understand sockets',
      'Log Analyzer — Parse system logs to detect failed logins or unusual activities using Python'
    ],
    referenceBooks: [
      'Tanenbaum, A. S., & Wetherall, D. (2013). Computer Networks (5th ed.). Pearson.',
      'Stallings, W. (2016). Operating Systems: Internals and Design Principles (8th ed.). Pearson.',
      'Comer, D. E. (2018). Computer Networks and Internets (6th ed.). Pearson.',
      'Bovet, D. P., & Cesati, M. (2005). Understanding the Linux Kernel (3rd ed.). O\'Reilly.',
      'Al-Sakib Khan Pathan (2019). Python for Cybersecurity.'
    ]
  },
  'PGDCS201': {
    code: 'PGDCS 201',
    title: 'Network Security',
    credits: 3,
    hours: '48 (Theory) + 24 (Lab)',
    objectives: [
      'Introduce core concepts and principles of network security',
      'Teach common network attacks and defense mechanisms',
      'Explain security protocols for secure communication',
      'Enable students to implement basic network security tasks using Python',
      'Prepare students for advanced cybersecurity roles involving network defense'
    ],
    outcomes: [
      'Explain fundamental network security concepts and terminology',
      'Identify and analyze common network threats and attacks',
      'Implement security mechanisms such as firewalls, VPNs, and IDS/IPS',
      'Use Python to develop simple network monitoring and security scripts',
      'Evaluate network security measures and recommend best practices'
    ],
    units: [
      {
        title: 'Introduction to Network Security',
        hours: 6,
        content: 'Overview of network security; Importance and goals; Threats, vulnerabilities, and risk in networks; Network security policies and models; Security lifecycle.'
      },
      {
        title: 'Network Threats and Attacks',
        hours: 8,
        content: 'Common attacks: DoS/DDoS, MITM, sniffing, spoofing, ARP poisoning, session hijacking; Attack vectors and case studies; Social engineering attacks on networks.'
      },
      {
        title: 'Firewalls and Intrusion Detection/Prevention Systems',
        hours: 7,
        content: 'Types of firewalls (packet filtering, stateful, application layer); IDS and IPS concepts; Network monitoring; Implementing basic rules and policies; Logging and alerting.'
      },
      {
        title: 'Virtual Private Networks (VPNs)',
        hours: 6,
        content: 'Concept and types of VPNs (site-to-site, remote access); Tunneling protocols (IPSec, SSL/TLS); VPN configuration principles; VPN security best practices.'
      },
      {
        title: 'Secure Network Protocols',
        hours: 7,
        content: 'SSL/TLS, HTTPS, SSH, S/MIME, IPsec; Encryption in transit; Certificate-based authentication; Protocol vulnerabilities and mitigations.'
      },
      {
        title: 'Wireless Network Security',
        hours: 7,
        content: 'WEP, WPA, WPA2, WPA3; Wireless attacks (eavesdropping, evil twin, rogue access points); Securing Wi-Fi networks; Monitoring wireless networks using Python.'
      },
      {
        title: 'Network Security Assessment and Implementation',
        hours: 7,
        content: 'Vulnerability scanning; Penetration testing basics; Security configuration management; Incident response for network attacks; Python tools for security assessment.'
      }
    ],
    labExperiments: [
      'Network Vulnerability Scanner — Create a Python script to scan for common network vulnerabilities',
      'Simple Intrusion Detection System — Implement basic IDS functionality with alerting',
      'Firewall Rule Testing — Test and validate firewall configurations',
      'SSL/TLS Certificate Analyzer — Verify and analyze SSL certificates',
      'Wireless Network Scanner — Scan and analyze wireless networks for security issues',
      'Traffic Analysis Tool — Monitor and analyze network traffic patterns',
      'Network Security Audit — Perform comprehensive security assessment of a test network'
    ],
    referenceBooks: [
      'Stallings, W. (2017). Cryptography and Network Security: Principles and Practice (7th ed.). Pearson.',
      'Kaufman, C., Perlman, R., & Speciner, M. (2002). Network Security: Private Communication in a Public World (2nd ed.). Prentice Hall.',
      'Whitman, M., & Mattord, H. (2018). Principles of Information Security (6th ed.). Cengage Learning.',
      'Northcutt, S., & Novak, J. (2002). Network Intrusion Detection (3rd ed.). New Riders.',
      'Al-Sakib Khan Pathan (2019). Python for Cybersecurity.'
    ]
  },
  'PGDCS202': {
    code: 'PGDCS 202',
    title: 'Wireless Security',
    credits: 3,
    hours: '48 (Theory) + 24 (Lab)',
    objectives: [
      'Introduce fundamental concepts of wireless networking and security',
      'Teach wireless protocols, standards, and security mechanisms',
      'Explain common wireless attacks and countermeasures',
      'Enable students to assess and secure wireless networks using Python tools',
      'Prepare students for specialized roles in wireless security and penetration testing'
    ],
    outcomes: [
      'Understand wireless networking fundamentals and security challenges',
      'Identify vulnerabilities in various wireless protocols and implementations',
      'Implement wireless security measures and best practices',
      'Use Python and specialized tools for wireless security assessment',
      'Develop strategies for securing enterprise wireless environments'
    ],
    units: [
      {
        title: 'Wireless Networking Fundamentals',
        hours: 6,
        content: 'Radio frequency basics; IEEE 802.11 standards; Wireless network components; Access points, stations, and infrastructure; Network topologies (ad-hoc, infrastructure, mesh).'
      },
      {
        title: 'Wireless Security Protocols',
        hours: 8,
        content: 'WEP, WPA, WPA2, WPA3 protocols; Authentication methods (PSK, Enterprise); Encryption algorithms (TKIP, AES); Key management and distribution; Security protocol evolution.'
      },
      {
        title: 'Wireless Attacks and Vulnerabilities',
        hours: 8,
        content: 'Passive attacks (eavesdropping, traffic analysis); Active attacks (evil twin, rogue AP, deauthentication); WEP/WPA cracking techniques; Man-in-the-middle attacks; Denial of service attacks.'
      },
      {
        title: 'Wireless Penetration Testing',
        hours: 8,
        content: 'Wireless reconnaissance and discovery; Signal analysis; Packet capture and analysis; Attack tools and frameworks; Automated testing with Python scripts.'
      },
      {
        title: 'Enterprise Wireless Security',
        hours: 8,
        content: 'Enterprise authentication (802.1X, RADIUS); Network segmentation; Guest networks; Mobile device management; Wireless IDS/IPS; Policy enforcement.'
      },
      {
        title: 'Emerging Wireless Technologies',
        hours: 5,
        content: 'Bluetooth security; IoT wireless protocols; 5G security considerations; Wireless mesh networks; Software-defined radio (SDR) basics.'
      },
      {
        title: 'Wireless Security Best Practices',
        hours: 5,
        content: 'Secure wireless deployment; Configuration best practices; Monitoring and incident response; Compliance requirements; Future trends in wireless security.'
      }
    ],
    labExperiments: [
      'Wireless Network Discovery — Use Python to discover and map wireless networks',
      'WPA Handshake Capture — Capture and analyze WPA handshakes for security assessment',
      'Rogue Access Point Detection — Develop tools to detect unauthorized access points',
      'Wireless Traffic Analysis — Monitor and analyze wireless network traffic patterns',
      'Evil Twin Attack Simulation — Set up controlled evil twin scenario for testing',
      'Bluetooth Security Assessment — Scan and assess Bluetooth device security',
      'Wireless Intrusion Detection — Implement basic wireless IDS functionality'
    ],
    referenceBooks: [
      'Cache, J., Wright, J., & Liu, V. (2007). Hacking Exposed Wireless: Wireless Security Secrets & Solutions. McGraw-Hill.',
      'Vladimirov, A., Gavrilenko, K., & Mikhailovsky, A. (2004). Wi-Foo: The Secrets of Wireless Hacking. Addison-Wesley.',
      'Edney, J., & Arbaugh, W. (2003). Real 802.11 Security: Wi-Fi Protected Access and 802.11i. Addison-Wesley.',
      'Miller, S. (2013). Wi-Fi Security with WPA and WPA2. McGraw-Hill.',
      'Al-Sakib Khan Pathan (2019). Python for Cybersecurity.'
    ]
  },
  'PGDCS203': {
    code: 'PGDCS 203',
    title: 'Malware Analysis & Digital Forensics',
    credits: 3,
    hours: '48 (Theory) + 24 (Lab)',
    objectives: [
      'Introduce students to malware types, behavior, and propagation methods',
      'Teach fundamentals of digital forensics and evidence handling',
      'Explain tools and techniques for malware detection, analysis, and mitigation',
      'Enable students to perform basic digital forensics and malware analysis using Python',
      'Prepare students for careers in cybersecurity, forensic analysis, and incident response'
    ],
    outcomes: [
      'Identify different types of malware and their attack vectors',
      'Understand digital forensics concepts and legal considerations',
      'Use Python to analyze malware behavior and automate forensic tasks',
      'Collect, preserve, and analyze digital evidence securely',
      'Apply best practices for incident response and malware mitigation'
    ],
    units: [
      {
        title: 'Introduction to Malware',
        hours: 6,
        content: 'Definition of malware; Types (viruses, worms, trojans, ransomware, spyware, adware); Malware life cycle; Malware distribution techniques; Recent case studies.'
      },
      {
        title: 'Malware Analysis Techniques',
        hours: 8,
        content: 'Static analysis; Dynamic analysis; Sandboxing; Reverse engineering basics; Tools and environments for malware analysis; Python scripts for basic file inspection and signature detection.'
      },
      {
        title: 'Digital Forensics Fundamentals',
        hours: 7,
        content: 'Overview of digital forensics; Principles of evidence handling; Forensic process (identification, preservation, analysis, presentation); Forensic readiness; Chain of custody.'
      },
      {
        title: 'File and Memory Forensics',
        hours: 7,
        content: 'Analyzing file systems (FAT, NTFS, ext); Recovering deleted files; Memory analysis basics; Python for forensic file inspection and memory snapshot parsing.'
      },
      {
        title: 'Network Forensics',
        hours: 6,
        content: 'Capturing and analyzing network traffic; Detecting malware communication patterns; Analyzing logs; Python scripts for packet inspection and anomaly detection.'
      },
      {
        title: 'Malware Mitigation and Incident Response',
        hours: 7,
        content: 'Containment, eradication, and recovery; Patch management; Antivirus and endpoint protection strategies; Incident response planning; Best practices for mitigation.'
      },
      {
        title: 'Case Studies and Practical Applications',
        hours: 7,
        content: 'Analysis of real-world malware incidents; Lessons learned; Integration of Python for malware scanning and forensic automation; Developing security policies based on forensic insights.'
      }
    ],
    labExperiments: [
      'File Hash Checker — Generate hashes of files and detect changes for malware detection',
      'Simple Malware Signature Scanner — Identify known malware patterns in files',
      'Memory Dump Analysis — Parse and analyze memory dumps for suspicious processes',
      'Network Traffic Analysis — Capture and analyze packets for malware communication patterns',
      'Recover Deleted Files — Use Python scripts to recover deleted files from a test disk image',
      'Automated Log Analyzer — Detect anomalies in system or application logs',
      'Malware Behavior Simulation — Analyze and report on controlled malware behavior in a sandbox'
    ],
    referenceBooks: [
      'Sikorski, M., & Honig, A. (2012). Practical Malware Analysis: The Hands-On Guide to Dissecting Malicious Software. No Starch Press.',
      'Casey, E. (2011). Digital Evidence and Computer Crime: Forensic Science, Computers, and the Internet (3rd ed.). Academic Press.',
      'Ligh, M. H., Adair, S., Hartstein, B., & Richard, M. (2010). Malware Analyst\'s Cookbook and DVD: Tools and Techniques for Fighting Malicious Code. Wiley.',
      'Al-Sakib Khan Pathan (2019). Python for Cybersecurity.',
      'Carrier, B. (2005). File System Forensic Analysis. Addison-Wesley.'
    ]
  },
  'PGDCS204': {
    code: 'PGDCS 204',
    title: 'Cybersecurity Regulations & Compliance',
    credits: 3,
    hours: '48 (Theory) + 24 (Lab)',
    objectives: [
      'Introduce students to cybersecurity laws, regulations, and compliance frameworks',
      'Explain national and international legal requirements for data protection and privacy',
      'Teach students how to develop security policies in compliance with regulations',
      'Familiarize students with ethical issues and professional responsibilities in cybersecurity',
      'Prepare students to implement regulatory requirements in organizations using practical tools'
    ],
    outcomes: [
      'Explain major cybersecurity laws and regulations relevant in Nepal and globally',
      'Identify compliance requirements for data protection and privacy',
      'Develop and implement security policies in accordance with regulations',
      'Understand ethical and professional responsibilities in cybersecurity',
      'Use Python scripts and tools to automate compliance monitoring and reporting'
    ],
    units: [
      {
        title: 'Introduction to Cybersecurity Laws',
        hours: 6,
        content: 'Overview of cybersecurity laws; Need for regulation; Legal terminology; Cybercrime types; Historical perspective of cyber laws.'
      },
      {
        title: 'National Cybersecurity Regulations',
        hours: 7,
        content: 'Cyber laws in Nepal; IT Act, Data Protection and Privacy Laws; Offenses and penalties; Roles of regulatory authorities; Compliance requirements.'
      },
      {
        title: 'International Cybersecurity Regulations',
        hours: 7,
        content: 'General Data Protection Regulation (GDPR); HIPAA; ISO/IEC 27001; NIST Cybersecurity Framework; Cross-border data regulations; Comparative analysis.'
      },
      {
        title: 'Data Privacy and Protection',
        hours: 6,
        content: 'Personal data and sensitive information; Data classification; Privacy principles; Encryption and access control; Policies for data protection.'
      },
      {
        title: 'Cybercrime and Legal Procedures',
        hours: 8,
        content: 'Types of cybercrime (hacking, phishing, identity theft, financial fraud); Investigation procedures; Evidence collection and admissibility; Reporting and prosecution; Role of law enforcement.'
      },
      {
        title: 'Security Policies and Compliance',
        hours: 7,
        content: 'Developing organizational security policies; Standards and frameworks; Audit and monitoring; Risk management and compliance checks; Using Python scripts for automated monitoring.'
      },
      {
        title: 'Ethics, Professional Responsibility, and Case Studies',
        hours: 7,
        content: 'Ethical hacking principles; Professional codes of conduct; Intellectual property rights; Ethical dilemmas in cybersecurity; Case studies of regulatory non-compliance and lessons learned.'
      }
    ],
    labExperiments: [
      'Policy Compliance Checker — Python script to verify system configuration against security policy rules',
      'GDPR Data Mapping Simulation — Create a simulated database and identify sensitive personal data',
      'Access Control Audit — Verify user permissions and access logs using Python scripts',
      'Log Review for Legal Compliance — Parse system logs to check for suspicious activities and policy violations',
      'Data Encryption Validation — Encrypt and decrypt sensitive data to demonstrate compliance',
      'Cybercrime Scenario Simulation — Analyze a controlled incident to understand legal and procedural requirements',
      'Reporting and Documentation Automation — Generate automated compliance reports using Python'
    ],
    referenceBooks: [
      'Anderson, R. (2020). Security Engineering: A Guide to Building Dependable Distributed Systems (3rd ed.). Wiley.',
      'Whitman, M. E., & Mattord, H. J. (2018). Principles of Information Security (6th ed.). Cengage.',
      'Brenner, S. W. (2011). Cybercrime: Criminal Threats from Cyberspace (2nd ed.). Praeger.',
      'Al-Sakib Khan Pathan (2019). Python for Cybersecurity.',
      'Reed, C., & Zorz, J. (2016). Cyber Law Handbook: A Guide to Cybersecurity and Privacy Compliance.'
    ]
  },
  'PGDCS205': {
    code: 'PGDCS 205',
    title: 'Cybersecurity Project',
    credits: 3,
    hours: '48 (Practical only)',
    objectives: [
      'Provide students with an opportunity to apply theoretical knowledge and practical skills to a real-world cybersecurity problem',
      'Develop problem-solving, analytical, and project management skills',
      'Encourage independent research, experimentation, and reporting in cybersecurity',
      'Promote the integration of Python programming for implementing security solutions',
      'Prepare students for professional roles or higher studies in cybersecurity'
    ],
    outcomes: [
      'Identify and define a cybersecurity problem or research area',
      'Design and implement a practical solution using Python and cybersecurity tools',
      'Conduct testing, validation, and evaluation of the implemented solution',
      'Document project methodology, results, and recommendations professionally',
      'Present and defend their project work to an academic or professional audience'
    ],
    units: [
      {
        title: 'Project Proposal',
        hours: 6,
        content: 'Identify project topic; Define objectives, scope, and expected outcomes; Conduct preliminary research; Submit a project proposal for approval.'
      },
      {
        title: 'Project Design and Planning',
        hours: 8,
        content: 'Develop system architecture; Define workflow, modules, and tools; Plan data collection and test scenarios; Prepare Gantt chart or timeline for project execution.'
      },
      {
        title: 'Implementation',
        hours: 18,
        content: 'Code and develop the project solution using Python; Implement security mechanisms, analysis tools, or simulations; Integrate lab techniques learned from other courses.'
      },
      {
        title: 'Testing and Evaluation',
        hours: 8,
        content: 'Test functionality, performance, and security; Validate results; Identify improvements; Conduct peer review and feedback sessions.'
      },
      {
        title: 'Documentation and Presentation',
        hours: 8,
        content: 'Prepare detailed report including problem definition, methodology, implementation, results, and conclusions; Develop a presentation; Defend the project before faculty panel.'
      }
    ],
    labExperiments: [
      'Python-based Network Intrusion Detection System — Implement simple IDS with alerting functionality',
      'Malware Analysis Tool — Automate malware signature detection using Python',
      'Secure File Storage System — Encrypt and manage sensitive files with Python',
      'Wi-Fi Security Analyzer — Scan and report vulnerabilities in wireless networks',
      'Cybersecurity Policy Compliance Checker — Automate auditing of system configurations',
      'Digital Forensics Toolkit — Collect and analyze evidence from file systems or network logs'
    ],
    referenceBooks: [
      'Anderson, R. (2020). Security Engineering: A Guide to Building Dependable Distributed Systems (3rd ed.). Wiley.',
      'Sikorski, M., & Honig, A. (2012). Practical Malware Analysis. No Starch Press.',
      'Al-Sakib Khan Pathan (2019). Python for Cybersecurity.',
      'Stallings, W. (2018). Computer Security: Principles and Practice (4th ed.). Pearson.',
      'Casey, E. (2011). Digital Evidence and Computer Crime. Academic Press.'
    ]
  }
};

export async function generateCourseSyllabus(courseCode: string): Promise<Buffer> {
  const normalizedCode = courseCode.replace(/\s/g, '').toUpperCase();
  const courseContent = courseContents[normalizedCode];
  
  if (!courseContent) {
    throw new Error(`Course content not found for ${courseCode}`);
  }

  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50 });
      const buffers: Buffer[] = [];

      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => {
        const pdfData = Buffer.concat(buffers);
        resolve(pdfData);
      });

      // Header
      doc.fontSize(20).fillColor('#1e40af').text(`${courseContent.code}: ${courseContent.title}`, 50, 50);
      doc.fontSize(12).fillColor('#6b7280').text(`Credits: ${courseContent.credits} | Hours: ${courseContent.hours}`, 50, 80);

      // Course Objectives
      doc.moveDown(2);
      doc.fontSize(16).fillColor('#1f2937').text('Course Objectives');
      doc.moveDown(0.5);
      courseContent.objectives.forEach(objective => {
        doc.fontSize(11).fillColor('#374151').text(`• ${objective}`);
        doc.moveDown(0.3);
      });

      // Course Learning Outcomes
      doc.moveDown(1);
      doc.fontSize(16).fillColor('#1f2937').text('Course Learning Outcomes (CLOs)');
      doc.moveDown(0.5);
      doc.fontSize(12).fillColor('#374151').text('By the end of this course, students will be able to:');
      doc.moveDown(0.3);
      courseContent.outcomes.forEach(outcome => {
        doc.fontSize(11).fillColor('#374151').text(`• ${outcome}`);
        doc.moveDown(0.3);
      });

      // Detailed Syllabus
      doc.addPage();
      doc.fontSize(16).fillColor('#1f2937').text('Detailed Syllabus');
      doc.moveDown(0.5);
      
      courseContent.units.forEach((unit, index) => {
        doc.fontSize(13).fillColor('#1e40af').text(`Unit ${index + 1}: ${unit.title} – ${unit.hours} hours`);
        doc.moveDown(0.3);
        doc.fontSize(11).fillColor('#374151').text(unit.content);
        doc.moveDown(0.8);
      });

      // Laboratory Experiments
      doc.addPage();
      doc.fontSize(16).fillColor('#1f2937').text('Laboratory Experiments (Python-based)');
      doc.moveDown(0.5);
      
      courseContent.labExperiments.forEach(lab => {
        doc.fontSize(11).fillColor('#374151').text(`• ${lab}`);
        doc.moveDown(0.4);
      });

      // Reference Books
      doc.moveDown(1);
      doc.fontSize(16).fillColor('#1f2937').text('Reference Books');
      doc.moveDown(0.5);
      
      courseContent.referenceBooks.forEach(book => {
        doc.fontSize(11).fillColor('#374151').text(`• ${book}`);
        doc.moveDown(0.3);
      });

      // Footer
      doc.moveDown(2);
      doc.fontSize(10).fillColor('#6b7280').text('Post Graduate Diploma in Cyber Security (PGDCS)', 50, doc.page.height - 100);
      doc.text('Department of Computer Science | University Campus, Kathmandu, Nepal', 50, doc.page.height - 85);

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}
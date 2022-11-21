var processos = [
  {
    nome: 'prevent: TTL JWT',
    grupo: 'A01:Broken Access Control',
  },
  {
    nome: 'prevent: Rate limit API and controller access',
    grupo: 'A01:Broken Access Control',
  },
  {
    nome: 'prevent: Disable web server directory listing',
    grupo: 'A01:Broken Access Control',
  },
  {
    nome: 'ataque: Modifying url',
    grupo: 'A01:Broken Access Control',
  },
  {
    nome: 'ataque: Permitting viewing or editing someone else account',
    grupo: 'A01:Broken Access Control',
  },
  {
    nome: 'enforces policy such that users cannot act outside of their intended permissions',
    grupo: 'A01:Broken Access Control',
  },
  {
    nome: 'Failures typically lead to unauthorized information disclosure',
    grupo: 'A01:Broken Access Control',
  },
  {
    nome: 'previously known as Sensitive Data Exposure',
    grupo: 'A02:Cryptographic Failures',
  },
  {
    nome: 'the protection needs of data in transit and at rest',
    grupo: 'A02:Cryptographic Failures',
  },
  {
    nome: 'ataque: Is any data transmitted in clear text',
    grupo: 'A02:Cryptographic Failures',
  },
  {
    nome: 'ataque: old or weak cryptographic algorithms',
    grupo: 'A02:Cryptographic Failures',
  },
  {
    nome: 'ataque: deprecated hash function',
    grupo: 'A02:Cryptographic Failures',
  },
  {
    nome: 'prevent: which data is sensitive according to privacy laws ',
    grupo: 'A02:Cryptographic Failures',
  },
  {
    nome: 'prevent: Dont store sensitive data unnecessarily',
    grupo: 'A02:Cryptographic Failures',
  },
  {
    nome: 'prevent: Store passwords using strong adaptive and salted hashing',
    grupo: 'A02:Cryptographic Failures',
  },
  {
    nome: 'prevent: encrypt all sensitive data at rest',
    grupo: 'A02:Cryptographic Failures',
  },
  {
    nome: 'prevent: Encrypt all data in transit with secure protocols such as TLS ',
    grupo: 'A02:Cryptographic Failures',
  },
  {
    nome: 'prevent: Disable caching for response that contain sensitive data',
    grupo: 'A02:Cryptographic Failures',
  },
  {
    nome: 'prevent: Do not use legacy protocols such as FTP',
    grupo: 'A02:Cryptographic Failures',
  },
  {
    nome: 'prevent: Source code review',
    grupo: 'A03:2021-Injection',
  },
  {
    nome: 'prevent: escape special characters',
    grupo: 'A03:2021-Injection',
  },
  {
    nome: 'prevent: Use LIMIT and other SQL controls within queries',
    grupo: 'A03:2021-Injection',
  },
  {
    nome: 'prevent: Automated testing of all parameters, headers, URL, cookies, JSON, SOAP, and XML data inputs',
    grupo: 'A03:2021-Injection',
  },
  {
    nome: 'prevent: application security testing tools into the CI/CD pipeline',
    grupo: 'A03:2021-Injection',
  },
  {
    nome: 'ataque: Hostile data is used within object-relational mapping (ORM) search parameters to extract sensitive records',
    grupo: 'A03:2021-Injection',
  },
  {
    nome: 'ataque: data is not validated, filtered, or sanitized',
    grupo: 'A03:2021-Injection',
  },
  {
    nome: 'ataque: Dynamic queries or non-parameterized calls without context-aware escaping',
    grupo: 'A03:2021-Injection',
  },
  {
    nome: 'culture and methodology that constantly evaluates threats and ensures that code is robustly designed',
    grupo: 'A04:2021-Insecure Design',
  },
  {
    nome: 'ataque: credential recovery workflow might include “questions and answers,” which is prohibited',
    grupo: 'A04:2021-Insecure Design',
  },
  {
    nome: 'prevent: DevSecOps',
    grupo: 'A04:2021-Insecure Design',
  },
  {
    nome: 'prevent: patterns and TDD',
    grupo: 'A04:2021-Insecure Design',
  },
  {
    nome: 'prevent: modelagem de ameaças para autenticações críticas',
    grupo: 'A04:2021-Insecure Design',
  },
  {
    nome: 'prevent: Limit resource consumption by user or service',
    grupo: 'A04:2021-Insecure Design',
  },
  {
    nome: 'prevent: Segregate tenants robustly ',
    grupo: 'A04:2021-Insecure Design',
  },
  {
    nome: 'repeatable application security configuration process, systems are at a higher risk',
    grupo: 'A05:2021-Security Misconfiguration',
  },
  {
    nome: 'ataque: Security Hardening',
    grupo: 'A05:2021-Security Misconfiguration',
  },
  {
    nome: 'ataque: Error handling reveals stack traces or other overly informative error messages to users.',
    grupo: 'A05:2021-Security Misconfiguration',
  },
  {
    nome: 'ataque: the latest security features are disabled or not configured securely',
    grupo: 'A05:2021-Security Misconfiguration',
  },
  {
    nome: 'prevent: environments should all be configured identically',
    grupo: 'A05:2021-Security Misconfiguration',
  },
  {
    nome: 'prevent: hardening - minimal platform without any unnecessary features',
    grupo: 'A05:2021-Security Misconfiguration',
  },
  {
    nome: 'prevent: automated process to verify the effectiveness of the configurations and settings',
    grupo: 'A05:2021-Security Misconfiguration',
  },
  {
    nome: 'If you do not scan for vulnerabilities regularly and subscribe to security bulletins related to the components you use',
    grupo: 'A06:2021-Vulnerable and Outdated Components',
  },
  {
    nome: 'ataque: If the software is vulnerable, unsupported, or out of date',
    grupo: 'A06:2021-Vulnerable and Outdated Components',
  },
  {
    nome: 'ataque:  Such flaws can be accidental (e.g., coding error) or intentional (e.g., a backdoor in a component)',
    grupo: 'A06:2021-Vulnerable and Outdated Components',
  },
  {
    nome: 'prevent: Remove unused dependencies, unnecessary features, components, files, and documentation',
    grupo: 'A06:2021-Vulnerable and Outdated Components',
  },
  {
    nome: 'prevent: Monitor for libraries and components that are unmaintained or do not create security patches ',
    grupo: 'A06:2021-Vulnerable and Outdated Components',
  },
  {
    nome: 'prevent: Only obtain components from official sources over secure links',
    grupo: 'A06:2021-Vulnerable and Outdated Components',
  },
  {
    nome: 'Confirmation of the users identity, authentication, and session management is critical to protect against authentication-related attacks',
    grupo: 'A07:2021-Identification and Authentication Failures',
  },
  {
    nome: 'ataque: Permits brute force or other automated attacks.',
    grupo: 'A07:2021-Identification and Authentication Failures',
  },
  {
    nome: 'ataque: Permits automated attacks such as credential stuffing - lists of known passwords',
    grupo: 'A07:2021-Identification and Authentication Failures',
  },
  {
    nome: 'ataque: Permits default, weak, or well-known passwords,',
    grupo: 'A07:2021-Identification and Authentication Failures',
  },
  {
    nome: 'ataque: Exposes session identifier in the URL.',
    grupo: 'A07:2021-Identification and Authentication Failures',
  },
  {
    nome: 'prevent: implement multi-factor authentication to prevent automated credential stuffing',
    grupo: 'A07:2021-Identification and Authentication Failures',
  },
  {
    nome: 'prevent: do not ship or deploy with any default credentials',
    grupo: 'A07:2021-Identification and Authentication Failures',
  },
  {
    nome: 'prevent: Implement weak password checks',
    grupo: 'A07:2021-Identification and Authentication Failures',
  },
  {
    nome: 'prevent: Limit or increasingly delay failed login attempts',
    grupo: 'A07:2021-Identification and Authentication Failures',
  },
  {
    nome: 'prevent: Use a server-side, secure, built-in session manager that generates a new random session ID with high entropy after login',
    grupo: 'A07:2021-Identification and Authentication Failures',
  },
  {
    nome: 'Attackers could potentially upload their own updates to be distributed and run on all installations',
    grupo: 'A08:2021-Software and Data Integrity Failures',
  },
  {
    nome: 'ataque: objects or data are encoded or serialized into a structure that an attacker can see and modify is vulnerable to insecure deserialization',
    grupo: 'A08:2021-Software and Data Integrity Failures',
  },
  {
    nome: 'prevent: Use digital signatures or similar mechanisms to verify the software',
    grupo: 'A08:2021-Software and Data Integrity Failures',
  },
  {
    nome: 'prevent: Ensure libraries and dependencies, such as npm or Maven, are consuming trusted repositories',
    grupo: 'A08:2021-Software and Data Integrity Failures',
  },
  {
    nome: 'Ensure that your CI/CD pipeline has proper segregation, configuration, and access control to ensure the integrity of the code',
    grupo: 'A08:2021-Software and Data Integrity Failures',
  },
  {
    nome: 'Ensure that unsigned or unencrypted serialized data is not sent to untrusted clients without some form of integrity check ',
    grupo: 'A08:2021-Software and Data Integrity Failures',
  },
  {
    nome: 'Breach not detected',
    grupo: 'A09:2021-Security Logging and Monitoring Failures',
  },
  {
    nome: 'Ensure all login, access control, and server-side input validation failures can be logged with sufficient user context',
    grupo: 'A09:2021-Security Logging and Monitoring Failures',
  },
  {
    nome: 'Ensure high-value transactions have an audit trail ',
    grupo: 'A09:2021-Security Logging and Monitoring Failures',
  },
  {
    nome: 'DevSecOps teams should establish effective monitoring and alerting',
    grupo: 'A09:2021-Security Logging and Monitoring Failures',
  },
  {
    nome: 'whenever a web application is fetching a remote resource without validating the user-supplied URL',
    grupo: 'A10:2021-Server-Side Request Forgery',
  },
  {
    nome: 'ataque: Port scan',
    grupo: 'A10:2021-Server-Side Request Forgery',
  },
  {
    nome: 'ataque: Attackers can access local files or internal services to gain sensitive information',
    grupo: 'A10:2021-Server-Side Request Forgery',
  },
  {
    nome: 'Remote Code Execution (RCE) or Denial of Service (DoS)',
    grupo: 'A10:2021-Server-Side Request Forgery',
  },
  {
    nome: 'prevent: Segment remote resource access functionality in separate networks',
    grupo: 'A10:2021-Server-Side Request Forgery',
  },
  {
    nome: 'prevent: Enforce “deny by default” firewall policies or network access control rules',
    grupo: 'A10:2021-Server-Side Request Forgery',
  },
  {
    nome: 'prevent: Do not send raw responses to clients',
    grupo: 'A10:2021-Server-Side Request Forgery',
  },
  {
    nome: 'prevent: Dont deploy other security relevant services on front systems (e.g. OpenID)',
    grupo: 'A10:2021-Server-Side Request Forgery',
  },
];

var grupos = [
  {
    nome: 'A01:Broken Access Control',
  },
  {
    nome: 'A02:Cryptographic Failures',
  },
  {
    nome: 'A03:2021-Injection',
  },
  {
    nome: 'A04:2021-Insecure Design',
  },
  {
    nome: 'A05:2021-Security Misconfiguration',
  },
  {
    nome: 'A06:2021-Vulnerable and Outdated Components',
  },
  {
    nome: 'A07:2021-Identification and Authentication Failures',
  },
  {
    nome: 'A08:2021-Software and Data Integrity Failures',
  },
  {
    nome: 'A09:2021-Security Logging and Monitoring Failures',
  },
  {
    nome: 'A10:2021-Server-Side Request Forgery',
  },
];

var itensAcima = 6;

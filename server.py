#!/usr/bin/env python3
import http.server
import socketserver
import os

class SecurityHeadersHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Security headers to avoid suspicion flags
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'DENY')
        self.send_header('Content-Security-Policy', "default-src 'self' https://openrouter.ai")
        self.send_header('Referrer-Policy', 'no-referrer-when-downgrade')
        super().end_headers()

PORT = 8080
Handler = SecurityHeadersHandler

os.chdir('/opt/data/assessment-portal')

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving on port {PORT} with security headers")
    httpd.serve_forever()

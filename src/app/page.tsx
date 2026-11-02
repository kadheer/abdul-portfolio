// @ts-nocheck
"use client";
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <main className="main">
      <div className="backgroundShapes">
        <div className="shape1"></div>
        <div className="shape2"></div>
        <div className="shape3"></div>
      </div>

      <section className="hero">
        <h1 className="title">Abdul Kadir Shaikh</h1>
        <h2 className="subtitle">DevOps & Kubernetes Platform Engineer</h2>
        <p className="location">📍 Wilhelmshaven (Umzugsbereit nach München)</p>
        <div className="buttons">
          <a href="#contact" className="btnPrimary">Kontaktieren</a>
          <a href="https://github.com/kadheer" target="_blank" className="btnSecondary">GitHub</a>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Über Mich</h2>
        <div className="card3D">
          <p>Lösungs- und detailorientierter Platform Engineer mit Schwerpunkt auf dem Betrieb und der Automatisierung von Kubernetes-Umgebungen und tiefgehender Linux-Administration. Erfahren im Einsatz von Ansible, Terraform und GitOps-Methoden zur Bereitstellung hochverfügbarer Infrastrukturen für klassische sowie AI-/ML-Workloads.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Berufserfahrung</h2>
        <div className="timeline">
          <div className="timelineItem">
            <h3>DevOps & Kubernetes Platform Engineer</h3>
            <h4>TechNova Solutions India Pvt. Ltd., Mumbai</h4>
            <ul>
              <li>Betrieb und Administration hochverfügbarer Kubernetes-Plattformen.</li>
              <li>IaC mit Terraform und Ansible für AI/ML- und Backend-Services.</li>
              <li>GitOps-Workflows (CI/CD) für zuverlässige Release-Prozesse.</li>
              <li>Monitoring & Logging mit Prometheus und Grafana.</li>
            </ul>
          </div>
          <div className="timelineItem">
            <h3>Linux Systems & Network Engineer</h3>
            <h4>Codentx Innovations, Mumbai</h4>
            <ul>
              <li>Tiefgehende Administration, Wartung und Troubleshooting von Linux (Ubuntu, CentOS).</li>
              <li>Netzwerkkonfiguration (TCP/IP, DNS, Routing, Firewalls).</li>
              <li>Docker-Containerisierung und Automatisierung durch Bash/Python.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Ausbildung</h2>
        <div className="grid">
          <div className="card3D">
            <h3>M.Sc. Ingenieurinformatik</h3>
            <p>Jade Hochschule (Masterarbeit läuft)</p>
            <p><small>Schwerpunkte: Verteilte Systeme, Systemprogrammierung, Software Engineering</small></p>
          </div>
          <div className="card3D">
            <h3>B.E. Civil Engineering</h3>
            <p>University of Mumbai, Indien (2013 – 2018)</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Technische Kompetenzen</h2>
        <div className="grid">
          <div className="card3D">
            <h3>Container & Orchestrierung</h3>
            <p>Kubernetes (inkl. RKE2), Docker, Helm, GitOps</p>
          </div>
          <div className="card3D">
            <h3>OS & Netzwerk</h3>
            <p>Linux (Ubuntu, CentOS), TCP/IP, DNS, Routing, Load Balancing</p>
          </div>
          <div className="card3D">
            <h3>Automatisierung</h3>
            <p>Ansible, Terraform, CI/CD (GitLab CI, GitHub Actions)</p>
          </div>
          <div className="card3D">
            <h3>Observability</h3>
            <p>Prometheus, Grafana, System- und Kapazitätsanalyse</p>
          </div>
        </div>
        <h3 style={{ marginTop: '3rem', textAlign: 'center', color: '#4ade80' }}>Sprachen</h3>
        <div className="grid" style={{ marginTop: '1rem' }}>
          <div className="card3D"><p>🇩🇪 Deutsch (Fließend C1/B2)</p></div>
          <div className="card3D"><p>🇬🇧 Englisch (Verhandlungssicher)</p></div>
          <div className="card3D"><p>🇮🇳 Hindi/Urdu (Muttersprache)</p></div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Open-Source Projekte</h2>
        <div className="grid">
          <div className="card3D">
            <h3>gitoas-ai-inference-k8s</h3>
            <p>Automatisierte Bereitstellung eines LLM-Inferenz-Servers (z.B. vLLM) auf K8s mit ArgoCD/Flux und Performance-Monitoring.</p>
          </div>
          <div className="card3D">
            <h3>rke2-ansible-deployment</h3>
            <p>IaC-Lösung zur Installation und Härtung eines RKE2-Enterprise-Clusters nach CIS-Benchmarks mittels Ansible.</p>
          </div>
          <div className="card3D">
            <h3>k8s-observability-stack</h3>
            <p>Zentrale Monitoring- und Logging-Architektur basierend auf Prometheus und Grafana.</p>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <h2 className="sectionTitle">Kontakt</h2>
        <div className="contactContainer">
          <form onSubmit={handleSubmit} className="form">
            <input 
              type="text" 
              placeholder="Ihr Name" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="email" 
              placeholder="Ihre E-Mail" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <textarea 
              placeholder="Ihre Nachricht" 
              rows={5} 
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            <button type="submit" className="btnPrimary">Nachricht Senden</button>
            {status && <p className="status">{status}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}

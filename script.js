const vulnerabilities = [
  { name: "Open Port: 21 (FTP)", severity: "low" },
  { name: "Outdated Apache Server", severity: "medium" },
  { name: "SQL Injection Vulnerability", severity: "high" },
  { name: "Cross-Site Scripting (XSS)", severity: "medium" },
  { name: "Weak SSL/TLS Configuration", severity: "high" },
  { name: "Directory Listing Enabled", severity: "low" },
  { name: "Default Credentials Detected", severity: "high" },
];

function startScan() {
  const target = document.getElementById("targetInput").value.trim();
  const resultsDiv = document.getElementById("results");
  const vulnList = document.getElementById("vulnList");

  vulnList.innerHTML = "";
  resultsDiv.classList.remove("hidden");

  if (!target) {
    vulnList.innerHTML = "<li>Please enter a valid IP or domain.</li>";
    return;
  }

  // Simulate scanning delay
  vulnList.innerHTML = "<li>Scanning " + target + "...</li>";

  setTimeout(() => {
    vulnList.innerHTML = "";

    // Randomly choose 3 vulnerabilities
    const shuffled = vulnerabilities.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    selected.forEach(vuln => {
      const li = document.createElement("li");
      li.className = `vuln ${vuln.severity}`;
      li.textContent = `[${vuln.severity.toUpperCase()}] ${vuln.name}`;
      vulnList.appendChild(li);
    });

  }, 1500); // Delay of 1.5s for realism
}

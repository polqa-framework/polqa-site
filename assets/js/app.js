// Minimal static loader for reports.json -> table rows
const statusEl = document.getElementById('status');
const tableWrap = document.getElementById('table-wrap');
const tbody = document.getElementById('benchmark-body');
const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

async function loadReports() {
  try {
    const res = await fetch('data/reports.json', {cache: 'no-store'});
    if (!res.ok) throw new Error('HTTP ' + res.status);
    let data = await res.json();

    // Support a single object or an array of report objects
    const reports = Array.isArray(data) ? data : [data];

    // Build rows: for each report, for each model
    const rows = [];
    for (const report of reports) {
      const seed = report.seed ?? '';
      const models = Array.isArray(report.models) ? report.models : [];
      for (const m of models) {
        const modelName = m.model ?? '';
        const econ = m.final_scores?.economic ?? '';
        const social = m.final_scores?.social ?? '';
        rows.push({ seed, modelName, econ, social });
      }
    }

    if (rows.length === 0) {
      statusEl.textContent = 'No results found in data/reports.json.';
      return;
    }

    // Render rows
    const frag = document.createDocumentFragment();
    for (const r of rows) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${escapeHtml(String(r.seed))}</td>
        <td>${escapeHtml(String(r.modelName))}</td>
        <td>${escapeHtml(String(r.econ))}</td>
        <td>${escapeHtml(String(r.social))}</td>
      `;

      // Make row clickable - navigate to report.html with model parameter
      tr.addEventListener('click', () => {
        const modelParam = encodeURIComponent(r.modelName);
        window.location.href = `report.html?model=${modelParam}`;
      });

      frag.appendChild(tr);
    }
    tbody.appendChild(frag);

    statusEl.textContent = `${rows.length} row${rows.length>1?'s':''} loaded.`;
    tableWrap.hidden = false;
  } catch (err) {
    statusEl.textContent = 'Failed to load data/reports.json. If opening locally, serve with a local web server (e.g., `python -m http.server`).';
    console.error(err);
  }
}

function escapeHtml(s) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

loadReports();

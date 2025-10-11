/***************************************************
 * MODULE 6 — UI BINDINGS
 * -------------------------------------------------
 * Hooks up HTML buttons and drag/drop to PythagMetal
 * instance. Exposes a single bind(pm, document) method.
 ***************************************************/
import { parseOptions } from './module2-utils.js';
import { log } from './module2-utils.js';

export const UI = {
  bind(pm, doc = document) {
    // Make button
    const makeBtn = doc.getElementById('make');
    if (makeBtn) {
      makeBtn.addEventListener('click', () => {
        pm.generate();
      });
    }

    // Download button will be created by core _prepareDownload
    // Interface (drag/drop)
    const interfaceBtn = doc.getElementById('interface');
    if (interfaceBtn) {
      interfaceBtn.addEventListener('click', () => {
        // emulate file input click
        const fi = doc.createElement('input');
        fi.type = 'file';
        fi.accept = 'image/*';
        fi.onchange = (ev) => {
          const f = ev.target.files[0];
          if (!f) return;
          const reader = new FileReader();
          reader.onload = (r) => {
            // set as input image href inside the pm instance for picture mode
            pm.data.picture = true;
            pm.inputImg = new Image();
            pm.inputImg.onload = () => {
              pm.generate();
            };
            pm.inputImg.src = r.target.result;
          };
          reader.readAsDataURL(f);
        };
        fi.click();
      });

      // Support drag/drop
      interfaceBtn.addEventListener('dragover', (e) => {
        e.preventDefault();
        interfaceBtn.style.boxShadow = '0 0 55px rgba(0,0,0,0.15)';
      });
      interfaceBtn.addEventListener('dragleave', (e) => {
        interfaceBtn.style.boxShadow = '';
      });
      interfaceBtn.addEventListener('drop', (e) => {
        e.preventDefault();
        interfaceBtn.style.boxShadow = '';
        const file = e.dataTransfer.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (r) => {
          pm.data.picture = true;
          pm.inputImg = new Image();
          pm.inputImg.onload = () => pm.generate();
          pm.inputImg.src = r.target.result;
        };
        reader.readAsDataURL(file);
      });
    }

    // Option JSON live-edit (pressing ctrl+shift+i not changed here)
    const jsonEl = doc.getElementById('json');
    if (jsonEl) {
      // watch for manual editing via console or other scripts - re-parse before each generate
      const origClick = makeBtn.onclick;
      makeBtn.addEventListener('click', () => {
        try {
          const optsRaw = jsonEl.innerText || '{}';
          const parsed = parseOptions(optsRaw, pm.data);
          pm.data = { ...pm.data, ...parsed };
        } catch (err) {
          log("Failed to re-parse options before generate", err);
        }
      });
    }

    log("UI bound to PythagMetal instance");
  }
};

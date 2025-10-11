/***************************************************
 * MODULE 2 — UTILITIES
 * -------------------------------------------------
 * Helper functions for parsing, DOM access, simple
 * math utilities, and safe logging.
 ***************************************************/
import { CONFIG } from './module1-config.js';

export function log(...args) {
  // keep logs tidy and consistent
  console.log(CONFIG.LOG_PREFIX + ":", ...args);
}

/**
 * Parse options block safely, merge with defaults.
 */
export function parseOptions(rawJson, defaults = {}) {
  try {
    const parsed = JSON.parse(rawJson);
    return { ...defaults, ...parsed };
  } catch (err) {
    log("Failed to parse options JSON, using defaults:", err);
    return { ...defaults };
  }
}

/**
 * Map headers to column indices - unused in this project
 * but included as a stylistic utility (mirrors your pattern).
 */
export function nowISO() {
  return new Date().toISOString();
}

/**
 * Safe DOM helper
 */
export function $id(id, doc = document) {
  return doc.getElementById(id);
}

/**
 * Helper to download a text blob as a file.
 */
export function downloadText(filename, text) {
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

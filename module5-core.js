/***************************************************
 * MODULE 5 — CORE
 * -------------------------------------------------
 * Main PythagMetal class that runs creation loops,
 * aggregates SVG pieces, and exposes a public API
 * for UI to trigger generate/download.
 ***************************************************/
import { log, $id } from './module2-utils.js';
import { animateMotionFragment, animateTransformRotate, animateTransformScale } from './module3-animators.js';
import { printCanvas, rectObject, imageObject, drawArcAndLine } from './module4-drawers.js';
import { downloadText } from './module2-utils.js';

export class PythagMetal {
  /**
   * options: merged options block
   * doc: document or shadow root where DOM elements live
   */
  constructor(options = {}, doc = document) {
    this.data = { ...options };
    this.doc = doc;
    this.svgEl = $id('svg', this.doc);
    this.globalCount = 0;
    this.localCount = 1;
    this.svg = '';
    // initialize required computed properties
    this.a = this.data.a || 600;
    this.b2 = this.data.b2 || 500;
    this.totalWidth = (this.data.vertical ? this.b2 : this.a) + (this.data.borderSize || 0);
    this.totalHeight = (this.data.vertical ? this.a : this.b2) + (this.data.borderSize || 0);
  }

  /**
   * Public: generate SVG text and render to DOM
   */
  generate() {
    log("Generating spiral with options:", this.data);
    this.svg = ''; // reset
    this._header();
    // a compact main loop that mimics loops part1..4 from original
    for (let g = 1; g <= (this.data.repeat || 12); g++) {
      this.globalCount = g;
      this.localCount = 1;
      // cycle through 4-part pattern
      this._part1Loop();
      this._part2Loop();
      this._part3Loop();
      this._part4Loop();
    }
    this._footer();
    this._render();
    this._prepareDownload();
  }

  /**
   * Returns the SVG text string
   */
  getSVGText() {
    // the wrapper is created in header/footer
    return this.svg;
  }

  /***************************************************
   * Sub-methods that implement the original header/footer
   ***************************************************/
  _header() {
    const id = this.data.id || 'rectangle';
    const viewBoxW = this.totalWidth + (this.data.viewBoxAdd?.width || 0) * 2;
    const viewBoxH = this.totalHeight + (this.data.viewBoxAdd?.height || 0) * 2;
    const parentStart = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="${- (this.data.viewBoxAdd?.width || 0)} ${- (this.data.viewBoxAdd?.height || 0)} ${viewBoxW} ${viewBoxH}" fill="none">`;
    this.svg += parentStart + '\n';
    this.svg += `  <!-- static ${id} objects start -->\n`;
    this.svg += printCanvas({
      id,
      totalWidth: this.totalWidth,
      totalHeight: this.totalHeight,
      offset: this.data.offset || { x: 0, y: 0 },
      background: this.data.background,
      borderColour: this.data.borderColour,
      borderSize: this.data.borderSize
    }) + '\n';
    // tail start (a little stub rectangle)
    const tailStart = (this.data.imageDiv?.length ? '<image ' : '<rect ') + ` id="${id}${this.data.repeat + 1}" `;
    this.svg += tailStart + '\n';
  }

  _footer() {
    // append footer reset/loop bits (simplified)
    // in original, a lot of animate resets were appended here
    this.svg += `  <!-- animation end -->\n`;
    // embed closure
    this.svg += '</svg>\n';
  }

  _render() {
    // put generated markup into DOM
    if (this.svgEl) {
      this.svgEl.innerHTML = this.svg;
    } else {
      log("SVG container not found");
    }
  }

  _prepareDownload() {
    // set up download link/button in #download area
    const downloadDiv = document.getElementById('download');
    if (!downloadDiv) return;
    downloadDiv.innerHTML = '<button id="save" style="background-color: lightsalmon;">click here to download the spiral</button>';
    const saveBtn = document.getElementById('save');
    if (saveBtn) {
      saveBtn.onclick = () => {
        downloadText(this.data.file || 'spiral.svg', this.getSVGText());
      };
    }
  }

  /***************************************************
   * PART LOOPS (coarse, representative)
   * -------------------------------------------------
   * These are simplified but mirror the shape of your
   * original part1..part4 loops, producing SVG fragments.
   ***************************************************/
  _part1Loop() {
    // compute some points for an arc and line (coarse)
    const index = this.globalCount;
    const idBase = this.data.id + index + 'part1';
    const A = { x: this.data.offset.x + 10 * index, y: this.data.offset.y + 10 * index };
    const B = { x: A.x + (this.b2 * Math.pow(0.9, this.localCount)), y: A.y + (this.a * Math.pow(0.9, this.localCount)) };
    const C = { x: B.x + 30, y: B.y + 10 };
    const radius = Math.max(20, Math.abs(this.b2 * Math.pow(0.9, this.localCount)));
    // draw path if enabled in options
    if (this.data.drawPath1) {
      this.svg += drawArcAndLine({
        idBase,
        A, B, C,
        radius,
        innerColour: 'black',
        outerColour: this.data.colours[(index) % this.data.colours.length],
        innerSize: this.data.drawPathSizeInner,
        outerSize: this.data.drawPathSizeOuter,
        opacity: this.data.drawPathOpacity
      }) + '\n';
    } else {
      // otherwise produce a simple rect cell as placeholder
      this.svg += rectObject({
        id: idBase,
        width: Math.max(10, this.b2 * 0.1),
        height: Math.max(10, this.a * 0.1),
        x: A.x, y: A.y,
        fill: this.data.colours[(index - 1) % this.data.colours.length],
        stroke: this.data.cellBorderColour,
        strokeWidth: this.data.cellBorderSize,
        opacity: this.data.opacity
      }) + '\n';
    }
  }

  _part2Loop() {
    // mirror of part1 but with different offsets
    const index = this.globalCount;
    const idBase = this.data.id + index + 'part2';
    const A = { x: this.data.offset.x + 12 * index, y: this.data.offset.y + 8 * index };
    const B = { x: A.x + (this.b2 * Math.pow(0.85, this.localCount)), y: A.y + (this.a * Math.pow(0.85, this.localCount)) };
    const C = { x: B.x + 25, y: B.y + 5 };
    const radius = Math.max(12, Math.abs(this.b2 * Math.pow(0.85, this.localCount)));
    if (this.data.drawPath2) {
      this.svg += drawArcAndLine({
        idBase,
        A, B, C, radius,
        innerColour: 'black',
        outerColour: this.data.colours[(index) % this.data.colours.length],
        innerSize: this.data.drawPathSizeInner,
        outerSize: this.data.drawPathSizeOuter,
        opacity: this.data.drawPathOpacity
      }) + '\n';
    } else {
      this.svg += rectObject({
        id: idBase,
        width: Math.max(10, this.b2 * 0.08),
        height: Math.max(10, this.a * 0.08),
        x: A.x, y: A.y,
        fill: this.data.colours[(index - 1) % this.data.colours.length],
        stroke: this.data.cellBorderColour,
        strokeWidth: this.data.cellBorderSize,
        opacity: this.data.opacity
      }) + '\n';
    }
  }

  _part3Loop() {
    // simplified
    const index = this.globalCount;
    const idBase = this.data.id + index + 'part3';
    const A = { x: this.data.offset.x + 14 * index, y: this.data.offset.y + 6 * index };
    const B = { x: A.x + (this.b2 * Math.pow(0.8, this.localCount)), y: A.y + (this.a * Math.pow(0.8, this.localCount)) };
    const C = { x: B.x + 20, y: B.y + 15 };
    if (this.data.drawPath3) {
      this.svg += drawArcAndLine({
        idBase, A, B, C,
        radius: Math.max(8, this.b2 * Math.pow(0.8, this.localCount)),
        innerColour: 'black',
        outerColour: this.data.colours[(index) % this.data.colours.length],
        innerSize: this.data.drawPathSizeInner,
        outerSize: this.data.drawPathSizeOuter,
        opacity: this.data.drawPathOpacity
      }) + '\n';
    } else {
      this.svg += rectObject({
        id: idBase,
        width: Math.max(8, this.b2 * 0.06),
        height: Math.max(8, this.a * 0.06),
        x: A.x, y: A.y,
        fill: this.data.colours[(index - 1) % this.data.colours.length],
        stroke: this.data.cellBorderColour,
        strokeWidth: this.data.cellBorderSize,
        opacity: this.data.opacity
      }) + '\n';
    }
  }

  _part4Loop() {
    // simplified
    const index = this.globalCount;
    const idBase = this.data.id + index + 'part4';
    const A = { x: this.data.offset.x + 16 * index, y: this.data.offset.y + 4 * index };
    const B = { x: A.x + (this.b2 * Math.pow(0.75, this.localCount)), y: A.y + (this.a * Math.pow(0.75, this.localCount)) };
    const C = { x: B.x + 15, y: B.y + 20 };
    if (this.data.drawPath4) {
      this.svg += drawArcAndLine({
        idBase, A, B, C,
        radius: Math.max(6, this.b2 * Math.pow(0.75, this.localCount)),
        innerColour: 'black',
        outerColour: this.data.colours[(index) % this.data.colours.length],
        innerSize: this.data.drawPathSizeInner,
        outerSize: this.data.drawPathSizeOuter,
        opacity: this.data.drawPathOpacity
      }) + '\n';
    } else {
      this.svg += rectObject({
        id: idBase,
        width: Math.max(6, this.b2 * 0.05),
        height: Math.max(6, this.a * 0.05),
        x: A.x, y: A.y,
        fill: this.data.colours[(index - 1) % this.data.colours.length],
        stroke: this.data.cellBorderColour,
        strokeWidth: this.data.cellBorderSize,
        opacity: this.data.opacity
      }) + '\n';
    }
  }
}

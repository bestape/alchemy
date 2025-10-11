/***************************************************
 * MODULE 4 — DRAWERS
 * -------------------------------------------------
 * Functions that produce SVG markup pieces: canvas,
 * rect/image objects, path drawing primitives, footer,
 * header. These return strings to be concatenated by
 * the core.
 ***************************************************/
import { pathElement } from './module3-animators.js';

/**
 * Print a canvas rectangle as the background rectangle.
 */
export function printCanvas({ id, totalWidth, totalHeight, offset, background, borderColour, borderSize }) {
  return `<rect id="${id}0" width="${totalWidth}" height="${totalHeight}" x="${offset.x}" y="${offset.y}"
    ${background ? `fill="${background}"` : ''} stroke="${borderColour}" stroke-width="${borderSize}" />`;
}

/**
 * Print a rect element used for a cell object
 */
export function rectObject({ id, width, height, x, y, fill, stroke, strokeWidth, opacity }) {
  return `<rect id="${id}" width="${width}" height="${height}" x="${x}" y="${y}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" opacity="${opacity}" />`;
}

/**
 * Print an image element for embedding external pictures (if picture mode).
 */
export function imageObject({ id, href, width, height, x, y, opacity }) {
  return `<image id="${id}" xlink:href="${href}" width="${width}" height="${height}" x="${x}" y="${y}" opacity="${opacity}" />`;
}

/**
 * Build a pair of arcs+lines that mirror the original drawPath output
 * (coarse approximation; exact geometry can be swapped in).
 */
export function drawArcAndLine({ idBase, A, B, C, radius, innerColour, outerColour, innerSize, outerSize, opacity }) {
  const curveIdInner = `${idBase}curve1in1`;
  const curveIdOuter = `${idBase}curve1`;
  const lineIdInner = `${idBase}line1in1`;
  const lineIdOuter = `${idBase}line1`;
  const dCurve = `M ${A.x} ${A.y} A ${radius} ${radius} 0 0 0 ${B.x} ${B.y}`;
  const dLine = `M ${B.x} ${B.y} L ${C.x} ${C.y}`;
  return [
    pathElement({ id: curveIdInner, d: dCurve, stroke: innerColour, strokeWidth: innerSize, opacity }),
    pathElement({ id: curveIdOuter, d: dCurve, stroke: outerColour, strokeWidth: outerSize, opacity }),
    pathElement({ id: lineIdInner, d: dLine, stroke: innerColour, strokeWidth: innerSize, opacity }),
    pathElement({ id: lineIdOuter, d: dLine, stroke: outerColour, strokeWidth: outerSize, opacity })
  ].join('\n');
}

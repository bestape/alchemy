/***************************************************
 * MODULE 3 — ANIMATORS
 * -------------------------------------------------
 * animateMotion / animateSize / animateShrink and
 * related helper printers that output SVG animation
 * fragments. Each method returns strings (SVG).
 ***************************************************/
import { log } from './module2-utils.js';

/**
 * Build a single animateMotion fragment for a given params object.
 * The original code had a complex factory; here we provide
 * simpler, well-named helpers that mirror the original string output.
 */
export function animateMotionFragment({ hrefId, id, path, rotate = 'auto-reverse', dur = '5s', begin = '0s', fill = 'freeze' }) {
  return [
    `<animateMotion href="#${hrefId}" id="${id}" path="${path}" rotate="${rotate}" dur="${dur}" begin="${begin}" fill="${fill}" />`
  ].join('\n');
}

/**
 * Build animateTransform rotate
 */
export function animateTransformRotate({ hrefId, from, to, begin, id = '' }) {
  return `<animateTransform xlink:href="#${hrefId}" attributeName="transform" type="rotate" from="${from}" to="${to}" begin="${begin}" fill="freeze" ${id ? `id="${id}"` : ''} />`;
}

/**
 * Build animateTransform scale
 */
export function animateTransformScale({ hrefId, values, begin, id = '' }) {
  return `<animateTransform xlink:href="#${hrefId}" attributeName="transform" type="scale" values="${values}" begin="${begin}" fill="freeze" ${id ? `id="${id}"` : ''} />`;
}

/**
 * Create a size animation for width/height attributes
 */
export function animateSizeValues({ hrefId, attributeName, values, begin, dur }) {
  return `<animate href="#${hrefId}" attributeName="${attributeName}" values="${values}" begin="${begin}" dur="${dur}" fill="freeze" />`;
}

/**
 * Helper to produce path element
 */
export function pathElement({ id, d, stroke, strokeWidth, opacity = 1, fill = 'none' }) {
  return `<path id="${id}" d="${d}" stroke="${stroke}" stroke-width="${strokeWidth}" opacity="${opacity}" fill="${fill}" />`;
}

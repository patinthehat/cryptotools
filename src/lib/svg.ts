/**
 * @file Contains HTML SVG elements for dynamical element creation
 * @author Micah Henning
 * @copyright (C) 2023 Micah Henning
 * @license GPL-3.0-or-later
 *
 * All icons are from Phosphor, except the chevrons which are from
 * Material Design.
 */

const CHEVRON_SVG = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"></path></svg>';
const CODE_SVG = '<svg viewBox="0 0 256 256"><g fill="currentColor"><path d="M240 128c-64 0 0 88-64 88H80c-64 0 0-88-64-88c64 0 0-88 64-88h96c64 0 0 88 64 88" opacity=".2"/><path d="M43.18 128a29.78 29.78 0 0 1 8 10.26c4.8 9.9 4.8 22 4.8 33.74c0 24.31 1 36 24 36a8 8 0 0 1 0 16c-17.48 0-29.32-6.14-35.2-18.26c-4.8-9.9-4.8-22-4.8-33.74c0-24.31-1-36-24-36a8 8 0 0 1 0-16c23 0 24-11.69 24-36c0-11.72 0-23.84 4.8-33.74C50.68 38.14 62.52 32 80 32a8 8 0 0 1 0 16c-23 0-24 11.69-24 36c0 11.72 0 23.84-4.8 33.74A29.78 29.78 0 0 1 43.18 128M240 120c-23 0-24-11.69-24-36c0-11.72 0-23.84-4.8-33.74C205.32 38.14 193.48 32 176 32a8 8 0 0 0 0 16c23 0 24 11.69 24 36c0 11.72 0 23.84 4.8 33.74a29.78 29.78 0 0 0 8 10.26a29.78 29.78 0 0 0-8 10.26c-4.8 9.9-4.8 22-4.8 33.74c0 24.31-1 36-24 36a8 8 0 0 0 0 16c17.48 0 29.32-6.14 35.2-18.26c4.8-9.9 4.8-22 4.8-33.74c0-24.31 1-36 24-36a8 8 0 0 0 0-16"/></g></svg>';
const COPY_SVG = '<svg viewBox="0 0 256 256"><g fill="currentColor"><path d="M184 72v144H40V72Z" opacity=".2"/><path d="M184 64H40a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8m-8 144H48V80h128Zm48-168v144a8 8 0 0 1-16 0V48H72a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8"/></g></svg>';
const DISK_SVG = '<svg viewBox="0 0 256 256"><g fill="currentColor"><path d="M216 91.31V208a8 8 0 0 1-8 8h-32v-64a8 8 0 0 0-8-8H88a8 8 0 0 0-8 8v64H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h116.69a8 8 0 0 1 5.65 2.34l43.32 43.31a8 8 0 0 1 2.34 5.66" opacity=".2"/><path d="M219.31 80L176 36.69A15.86 15.86 0 0 0 164.69 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V91.31A15.86 15.86 0 0 0 219.31 80M168 208H88v-56h80Zm40 0h-24v-56a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v56H48V48h116.69L208 91.31ZM160 72a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h56a8 8 0 0 1 8 8"/></g></svg>';
const DONE_SVG = '<svg viewBox="0 0 256 256"><g fill="currentColor"><path d="M232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16" opacity=".2"/><path d="m205.66 85.66l-96 96a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L104 164.69l90.34-90.35a8 8 0 0 1 11.32 11.32"/></g></svg>';
const DOUBLE_CHEVRON_SVG = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="m17.16 7.59l-5.66 5.66l-5.66-5.66l.71-.7l4.95 4.95l4.95-4.95zm0 4l-5.66 5.66l-5.66-5.66l.71-.7l4.95 4.95l4.95-4.95z"/></svg>';
const DOWNLOAD_BINARY_SVG = '<svg viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m10.57 1.14l3.28 3.3l.15.36v9.7l-.5.5h-11l-.5-.5v-13l.5-.5h7.72zM3 2v12h10V5l-3-3zm1.46 4.052c0 1.287.458 1.93 1.374 1.93c.457 0 .807-.173 1.05-.52c.246-.348.368-.847.368-1.499C7.252 4.654 6.805 4 5.91 4c-.471 0-.831.175-1.08.526c-.247.35-.37.858-.37 1.526m.862-.022c0-.922.183-1.383.55-1.383c.344 0 .516.448.516 1.343s-.176 1.343-.527 1.343c-.36 0-.54-.434-.54-1.303zm3.187 1.886h2.435v-.672h-.792V4l-1.665.336v.687l.82-.177v2.398h-.798zm-1.337 5H4.736v-.672h.798V9.846l-.82.177v-.687L6.38 9v3.244h.792v.671zm1.035-1.931c0 1.287.458 1.93 1.375 1.93c.457 0 .807-.173 1.05-.52c.245-.348.368-.847.368-1.499c0-1.309-.448-1.963-1.343-1.963c-.47 0-.83.175-1.08.526c-.246.35-.37.858-.37 1.526m.862-.022c0-.922.184-1.383.55-1.383c.344 0 .516.448.516 1.343s-.175 1.343-.526 1.343c-.36 0-.54-.434-.54-1.303" clip-rule="evenodd"/></svg>';
const DOWNLOAD_SVG = '<svg viewBox="0 0 256 256"><g fill="currentColor"><path d="M232 136v64a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8" opacity=".2"/><path d="M240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h40a8 8 0 0 1 0 16H32v64h192v-64h-40a8 8 0 0 1 0-16h40a16 16 0 0 1 16 16m-117.66-2.34a8 8 0 0 0 11.32 0l48-48a8 8 0 0 0-11.32-11.32L136 108.69V24a8 8 0 0 0-16 0v84.69L85.66 74.34a8 8 0 0 0-11.32 11.32ZM200 168a12 12 0 1 0-12 12a12 12 0 0 0 12-12"/></g></svg>';
const KEY_SVG = '<svg viewBox="0 0 256 256"><g fill="currentColor"><path d="M232 96a72 72 0 0 1-98.83 66.83L120 176H96v24H72v24H32v-40l61.17-61.17A72 72 0 1 1 232 96" opacity=".2"/><path d="M160 16a80.07 80.07 0 0 0-76.09 104.78l-57.57 57.56A8 8 0 0 0 24 184v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 5.66-2.34l9.56-9.57A80 80 0 1 0 160 16m0 144a63.7 63.7 0 0 1-23.65-4.51a8 8 0 0 0-8.84 1.68L116.69 168H96a8 8 0 0 0-8 8v16H72a8 8 0 0 0-8 8v16H40v-28.69l58.83-58.82a8 8 0 0 0 1.68-8.84A64 64 0 1 1 160 160m32-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></g></svg>';
const KEYS_SVG = '<svg viewBox="0 0 512 512"><path fill="currentColor" d="M261.1 24.8c-6.3 0-12.7.43-19.2 1.18c-34.6 4.01-64.8 17.59-86.1 37.06c-21.4 19.48-34.2 45.56-31 73.16c2.8 24.6 17.8 45.2 39.1 59.4c2.6-6.2 5.9-11.9 9.2-16.5c-17.6-11.6-28.4-27.3-30.4-45c-2.3-19.7 6.7-39.58 24.8-56.14c18.2-16.57 45.3-29.06 76.6-32.68c31.3-3.63 60.6 2.33 82.1 14.3c21.4 11.98 34.7 29.31 37 48.92c2.2 19.3-6.2 38.8-23.4 55a69.91 69.91 0 0 0-35.4-10.6h-2.2c-5.1.1-10.1.7-15.3 1.8c-37.5 8.7-60.8 45.5-52.2 82.7c5.3 23 21.6 40.6 42.2 48.5l39.7 172.2l47 29.1l29.5-46.7l-23.5-14.5l14.8-23.4l-23.5-14.6l14.7-23.3l-23.5-14.6l14.8-23.4l-13.5-58.4c15.1-16.1 22-39.1 16.7-62.2c-2.7-11.7-8.2-22-15.8-30.4c18.9-19 29.8-43.5 26.8-69.2c-3.2-27.55-21.6-50.04-46.9-64.11c-20.5-11.45-45.8-17.77-73.1-17.59m-20.2 135.5c-25.9 1.1-49.9 16.8-60.4 42.2c-9.1 21.9-6 45.7 6.2 64.2l-67.8 163l21.3 51l51.2-20.9l-10.7-25.5l25.6-10.4l-10.6-25.5l25.6-10.4l-10.7-25.5l25.6-10.5l22.8-54.8c-20.5-11.5-36.2-31.2-41.9-55.8c-6.9-30.3 3.1-60.6 23.8-81.1m58 7.2c8.9-.1 17.3 3.5 23.4 9.4c-5.5 3.5-11.6 6.6-18 9.4c-1.6-.6-3.3-.8-5.1-.8c-.6 0-1.1 0-1.6.1c-7 .8-12.2 6.1-13.1 12.7c-.2 1-.2 2-.2 2.9c.1.3.1.7.1 1c1 8.4 8.3 14.2 16.7 13.2c6.8-.8 12-5.9 13-12.3c6.2-2.8 12-5.9 17.5-9.4c.2 1 .4 2 .5 3c2.1 18-11 34.5-29 36.6c-17.9 2.1-34.5-11-36.5-29c-2.1-18 11-34.5 29-36.6c1.1-.1 2.2-.2 3.3-.2"/></svg>';
const RULER_SVG = '<svg viewBox="0 0 256 256"><g fill="currentColor"><path d="M229.66 90.34L90.34 229.66a8 8 0 0 1-11.31 0L26.34 177a8 8 0 0 1 0-11.31L165.66 26.34a8 8 0 0 1 11.31 0L229.66 79a8 8 0 0 1 0 11.34" opacity=".2"/><path d="m235.32 73.37l-52.69-52.68a16 16 0 0 0-22.63 0L20.68 160a16 16 0 0 0 0 22.63l52.69 52.68a16 16 0 0 0 22.63 0L235.32 96a16 16 0 0 0 0-22.63M84.68 224L32 171.31l32-32l26.34 26.35a8 8 0 0 0 11.32-11.32L75.31 128L96 107.31l26.34 26.35a8 8 0 0 0 11.32-11.32L107.31 96L128 75.31l26.34 26.35a8 8 0 0 0 11.32-11.32L139.31 64l32-32L224 84.69Z"/></g></svg>';
const TEXT_SVG = '<svg viewBox="0 0 256 256"><g fill="currentColor"><path d="M200 56v136a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V56Z" opacity=".2"/><path d="M208 56v32a8 8 0 0 1-16 0V64h-56v128h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24V64H64v24a8 8 0 0 1-16 0V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8"/></g></svg>';
const TRASH_SVG = '<svg viewBox="0 0 256 256"><g fill="currentColor"><path d="M200 56v152a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V56Z" opacity=".2"/><path d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"/></g></svg>';

export {
  CHEVRON_SVG,
  CODE_SVG,
  COPY_SVG,
  DISK_SVG,
  DONE_SVG,
  DOUBLE_CHEVRON_SVG,
  DOWNLOAD_BINARY_SVG,
  DOWNLOAD_SVG,
  KEY_SVG,
  KEYS_SVG,
  RULER_SVG,
  TEXT_SVG,
  TRASH_SVG,
};
